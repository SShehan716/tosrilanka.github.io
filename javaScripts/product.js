let subtotal = 0;
let itemsInCart = 0;
const shopping_cart = [];

// Add item to cart given the idea of that item and set the Add to Cart Button to Remove from cart
function AddToCart(id) {
    const button = document.getElementById(id);

    // Update the text on the button
    button.getElementsByTagName('span')[0].innerText = 'Remove from Cart';

    const quantity = document.getElementById(`${id}-quantity`);

    // Disabled the quantity button
    quantity.disabled = true;
    const cart = document.querySelector("#cart");

    // Add the item to order summery
    const item = document.createElement("tr");
    const item_name = document.createElement("td");

    item_name.classList.add('order-item');
    item_name.innerText = button.getAttribute('data-itemName') + " x " + quantity.value;
    item.append(item_name);

    const item_price = document.createElement("td");
    item_price.innerText = (button.getAttribute('data-price') * quantity.value) + ' LKR';
    item.append(item_price);
    item.id = `order-${id}`;
    cart.prepend(item);

    // calculating subtotal
    subtotal += parseFloat(button.getAttribute('data-price')) * quantity.value;
    itemsInCart += 1;
    GetTotal();

    shopping_cart.push({
        "name": button.getAttribute('data-itemName'),
        "quantity": quantity.value,
        "price": button.getAttribute('data-price') * quantity.value
    });

    // Set the button to red
    button.classList.replace('btn-add-cart', 'btn-remove-cart');

    // Update the on click reference of that button
    button.onclick = function () {
        RemoveFromCart(id)
    };

}

// Remove item from the cart and reset to button as Add to Cart
function RemoveFromCart(id) {
    const button = document.getElementById(id);
    const quantity = document.getElementById(`${id}-quantity`);

    button.classList.replace('btn-remove-cart', 'btn-add-cart');
    button.getElementsByTagName('span')[0].innerText = 'Add to Cart';
    button.onclick = function () {
        AddToCart(id)
    };
    const item = document.querySelector(`#order-${id}`);
    document.querySelector("#cart").removeChild(item);
    subtotal -= parseFloat(button.getAttribute('data-price')) * quantity.value;
    itemsInCart -= 1;
    GetTotal();

    // Remove the item from cart array
    shopping_cart.splice({
        "name": button.getAttribute('data-itemName'),
        "quantity": quantity.value,
        "price": button.getAttribute('data-price') * quantity.value
    }, 1);

    // Enable the quantity button
    quantity.disabled = false;
}

// Update the Total after adding a Item
 function GetTotal() {
    document.querySelector("#order-subtotal").innerHTML = `${roundToTwo(subtotal)} LKR`;
    document.querySelector("#order-tax").innerHTML = `${roundToTwo((subtotal * 5)/100)} LKR`; // calculating the tax
    // getting the total
    document.querySelector("#order-total").innerHTML = `${roundToTwo(subtotal + (subtotal * 5) / 100)} LKR`;

    // Update the number of items in the floating cart
    if (itemsInCart === 0) {
        const cart = document.querySelector("#items-in-cart");
        cart.classList.remove('d-inline-block');
        cart.classList.add('d-none');
    } else {
        const cart = document.querySelector("#items-in-cart");
        cart.classList.remove('d-none');
        cart.classList.add('d-inline-block');
        cart.innerHTML = itemsInCart;

    }
}

// Simple rounding function that round any given number to 2 decimal places
function roundToTwo(value) {
    return Math.round(value * 100) / 100;
}





// Validate all the inputs on the form are filled
function validation() {
    const userinputs = document.forms["billing-form"].getElementsByTagName("input");
    if (document.forms["billing-form"].getElementsByTagName("select")[0].value === '') {
        alert("You need to select a country before placing the order");
        return false
    }
    for (let i = 0; i < userinputs.length; i++) {
        if (userinputs[i].value === '' || userinputs[i].value === null) {
            alert(userinputs[i].id.replace('-', ' ') + ' is required to place the order');
            return false
        }
    }
    return true
}

// Set Display to block on the checkout Page
function opencheckout(myvalue) {
    document.querySelector("#checkout-popout").classList.add("d-block");
    document.querySelector("#shop-section").classList.add("d-none");
}

// Set Display to None on the checkout Page
function closecheckout() {
    document.querySelector("#checkout-popout").classList.remove("d-block");
    document.querySelector("#shop-section").classList.remove("d-none");
}



//_________________________ generate invoice __________________________________


function geninvoice() {
  // generate name and email of the user
    let lname = document.getElementById("last-name").value;
    let fname = document.getElementById("first-name").value;
    let fullname = (fname + " " + lname);
    document.getElementById("Fname").innerHTML = fullname;
    let invoiceemail = document.getElementById("email").value;
    document.getElementById("L-email").innerHTML = invoiceemail;

//generate item details that were bought by the querySelector
    const name = document.getElementById("first-name").value;
    if (validation()) {
        let summery = `Your order <br>
                        <br>`;
        shopping_cart.forEach(function (item) {
            summery += `product:${item['name']}
                        <br>
                        quantity: ${item['quantity']}
                        <br>
                        price:  ${item['price']}
                        <br>
                        <br>
                        `
        document.getElementById("product-details").innerHTML = summery + '<br>' + `Total Bill: ${roundToTwo(subtotal + (subtotal * 5) / 100)} LKR` ;
        });
      }
}

// download the pdf using jspdf library

function downloadpdf() {
    var pdf = new jsPDF('p', 'pt', 'letter');

    source = $('#invoice')[0];


    specialElementHandlers = {

        '#bypassme': function (element, renderer) {

            return true
        }
    };
    margins = {
        top: 80,
        bottom: 60,
        left: 40,
        width: 522
    };

  pdf.fromHTML(
     source, // HTML string or DOM elem ref.
     margins.left, // x coord
     margins.top, { // y coord
         'width': margins.width, // max width of content on PDF
         'elementHandlers': specialElementHandlers
   },

   function (dispose) {
       // dispose: object with X, Y of the last line add to the PDF
       //          this allow the insertion of new lines after html
       pdf.save('invoice.pdf');
   }, margins);
}

// js for scroll btn
//when scrolling down appering button
function topFunction() {
  document.documentElement.scrollTop = 0;
}


// when scroll 50px
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
 const mybutton = document.getElementById("scrollbtn");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.documentElement.scrollTop = 0;
}
// end of js scroll
