//  "use strict";  (This will make the script to run faster and as C++ or Java)
/*  
      Application to calculate total order cost
      Author: Abraham Vallejos-Soto
      Date:   2/17/2023

      Filename: menuTotalCostList.js
*/

/*
   3) Go to the project03-01.js file in your code editor. 
      Below the initial comment section, declare a variable named menuItems containing 
      the collection of HTML elements belonging to the menuItem class using the getElementsByClassName()

   4) Create a for loop that loops through the contents of the menuItems collection with a counter variable 
      that starts with an initial value of 0 up to a value less than the length of the menuItems collection. 
      Increase the counter by 1 with each iteration. 
      Within the for loop, add an event listener to the menuItems[i] element in the collection 
      (where i is the value of the counter), running the calcTotal() function when that item is clicked.
*/
let menuItems = document.getElementsByClassName("menuItem");
for (let i=0; i < menuItems.length; i++){
      menuItems[i].addEventListener('click', ()=>{
            calcTotal();
      })
}

/*
   5) Create the calcTotal() function to calculate the total cost of the customer order given the selected menu items. 
   Add the following commands to the function:
      1) Declare the orderTotal variable, setting its initial value to 0.
      2) Create a for loop that loops through the contents of the menuItems For menuItems[i] (where i is the counter), 
            apply an if statement that tests whether the item has been checked. 
            If true, increase the value of the orderTotal variable by the value of menuItems[i]. 
            (Hint: Use the Number() function to convert the value of menuItems[i] to a number.)
      3) After the for loop, insert a command to change the innerHTML property of the element with the id "billTotal" 
            to the value returned by the formatCurrency() function using orderTotal as the parameter value.
*/
function calcTotal(){
      let orderTotal = 0;
      for (i=0; i < menuItems.length; i++) {
            if (menuItems[i].checked){
                  orderTotal += (Number (menuItems[i].value)*1);
            }
      }
      document.getElementById("billTotal").innerHTML = formatCurrency(orderTotal);
}

 // Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }