
 function validateForm(myform)// validates inputs of the user
  {  
  let nameValidity = true;
  let emailValidity = true;
  let radioValidity = true;
  let detailsValidity = true;
  let errors=[];   // for store error

  let name = myform.name.value;
  if (name == "") {
    let errorMassege = "*Please fill the Name";
    errors.push(errorMassege)
    document.getElementById("error").innerHTML = errorMassege;
    nameValidity = false;

  }

  let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // for matching user email
  let email = myform.email.value;
  if (!email.match(mailformat)) {
    let errorMassege2 = "*Please fill valid Email address";
    errors.push(errorMassege2)
    document.getElementById("error2").innerHTML = errorMassege2;
    emailValidity = false;
  }

  let selectedradioOption = getRadioValue(myform.query);
  if (selectedradioOption == "") {
    let errorMassege3 = "*please enter your query type";
    errors.push(errorMassege3)
    document.getElementById("error3").innerHTML = errorMassege3;
    radioValidity = false;
  }


  let details = myform.Details.value;
  if (details == "") {
    let errorMassege4 = "*Please discribe your query";
    errors.push(errorMassege4)
    document.getElementById("error4").innerHTML = errorMassege4;
    detailsValidity = false;

  }
  
  let arrayLength = errors.length;//errors add to alert
  if (arrayLength>0){
    let str=''
    errors.forEach(err => {
      str = `${str}\n${err}`
    })
        alert(`${str}`);
  }
 


  if (nameValidity == true && emailValidity == true && radioValidity == true && detailsValidity == true) {
    writeDetails(name, email, selectedradioOption,details);
    hidecontainer(queryForm);
    showContainer();
  }

}




// for validate radioArray
function getRadioValue(radioArray) {
  for (let i = 0; i < radioArray.length; i++) {
    if (radioArray[i].checked) {
      return radioArray[i].value;
    }
  }
  return false;
}
// for hide the form
function hidecontainer(content) {
  document.getElementById("queryForm").style.display = 'none';

}


// for popup preview details
function showContainer() {
  document.getElementById("Confirmation").style.display="block";
}

function writeDetails(name, email, selectedradioOption,details) {
  document.getElementById("details").innerHTML = "Name :" + name + "<br> Email :" + email + "<br> subject :" + selectedradioOption+"<br> Details: "+ details;


}

function editButtonclicking() {
  document.getElementById("error").innerHTML = '';
  document.getElementById("error2").innerHTML = '';
  document.getElementById("error3").innerHTML = '';
  document.getElementById("error4").innerHTML = '';

  document.getElementById("Confirmation").style.display = 'none';
  document.getElementById("queryForm").style.display = "block"
}




function sendMail() {
    const email ="gayantha907@gmail.com";
    location.href = "mailto:"+email;
}
