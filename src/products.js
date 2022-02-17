var products = [
  { id: 101, name: "Basket Ball", image: "basketball.png", price: 150,  },
  { id: 102, name: "Football", image: "football.png", price: 120 },
  { id: 103, name: "Soccer", image: "soccer.png", price: 110 },
  { id: 104, name: "Table Tennis", image: "table-tennis.png", price: 130 },
  { id: 105, name: "Tennis", image: "tennis.png", price: 100 },
];

var cartArr = [];

$(document).ready(function () {


  $("#cartFootball").on("click", function () {
      for(let j =0; j<cartArr;j++){
   if(! cartArr[j].id == 102) {
    for (let i = 0; i < products.length; i++) {
      if (products[i].id == 102) {
       obj1= { id: 102, name: "Football", image: "football.png", price: 120 ,quantity : 1 },
        cartArr.push(obj1);
    }

    display(cartArr);
}
   }
   else {
       cartArr[j].quantity +=1 ;
   }
    display(cartArr );
      }



display(cartArr);
 


  });

  $("#cartBasketball").on("click", function () {
    
    
    
    for (let i = 0; i < products.length; i++) {
      if (products[i].id == 101) {
          var obj1={ id: 101, name: "Basket Ball", image: "basketball.png", price: 150 , quantity : 1 };
        cartArr.push(obj1);
    }
    
}
console.log(cartArr);
display(cartArr);

  });
  $("#cartSoccer").on("click", function () {
    
    for (let i = 0; i < products.length; i++) {
      if (products[i].id == 103) {
          var obj1={ id: 103, name: "Soccer", image: "soccer.png", price: 110 , quantity : 1 };
        cartArr.push(obj1);
    }
    
}
console.log(cartArr);
display(cartArr);

  });


  $("#cartTabletennis").on("click", function () {
   
    for (let i = 0; i < products.length; i++) {
      if (products[i].id == 104) {
          var obj1={ id: 104, name: "Table Tennis", image: "table-tennis.png", price: 130 , quantity : 1 };
        cartArr.push(obj1);
    }
    
}
console.log(cartArr);
display(cartArr);

  });

  $("#cartTennis").on("click", function () {
   
    for (let i = 0; i < products.length; i++) {
      if (products[i].id == 105) {
          var obj1={  id: 105, name: "Tennis", image: "tennis.png", price: 100, quantity : 1 };
        cartArr.push(obj1);
    }
    
}
display(cartArr);

  });





});
 
function display(cartArr){
    var html ="<table> <tr> <th> Id</th> </t> <th>   Name</th> </t> <th> image </th< </t> <th> Price</th> <th> Quantity</th> ";
    for (let i = 0; i < cartArr.length; i++) {
        html +=
          "<tr><td>" +
          cartArr[i].id +
          "</td><td>" +
          cartArr[i].name +
          "</td><td>" +
          
          cartArr[i].image +
          "</td><td>" +"$"+
          cartArr[i].price + '</td><td>'+ '<button id="decQuantity">-</button>' + cartArr[i].quantity + '<button incQuantity >+</button>' + '</td> <td>' +'<input id=" quantityIn" ></input>'   
          "</td></tr>";
      }
      html += "</table>";
      document.getElementById("product_list").innerHTML = html;
    
}