var products = [
    { id: 101, name: "Basket Ball", image: "basketball.png", price: 150 },
    { id: 102, name: "Football", image: "football.png", price: 120 },
    { id: 103, name: "Soccer", image: "soccer.png", price: 110 },
    { id: 104, name: "Table Tennis", image: "table-tennis.png", price: 130 },
    { id: 105, name: "Tennis", image: "tennis.png", price: 100 },
  ];
  
  var cartArr = [];
  
  $(document).ready(function () {
  
  
    $("#cartFootball").on("click", function () {
      var html ="<table> ";//<tr> <th> Id</th> </t> <th>   Name</th> </t> <th> image </th< </t> <th> Price</th> ";
      for (let i = 0; i < products.length; i++) {
        if (products[i].id == 102) {
         obj1= { id: 102, name: "Football", image: "football.png", price: 120 },
          cartArr.push(obj1);
      }
      
  }
  console.log(cartArr);
  for (let i = 0; i < cartArr.length; i++) {
      html +=
        "<tr><td>" +
        cartArr[i].id +
        "</td><td>" +
        cartArr[i].name +
        "</td><td>" +
        
        '<img src="images/football.png">' +
        "</td><td>" +"$"+
        cartArr[i].price +
        "</td></tr>";
    }
    html += "</table>";
    document.getElementById("product_list").innerHTML = html;
  
    });
  
    $("#cartBasketball").on("click", function () {
      var html ="<table> <tr> <th> Id</th> </t> <th>   Name</th> </t> <th> image </th< </t> <th> Price</th> ";
      for (let i = 0; i < products.length; i++) {
        if (products[i].id == 101) {
            var obj1={ id: 101, name: "Basket Ball", image: "basketball.png", price: 150 };
          cartArr.push(obj1);
      }
      
  }
  for (let i = 0; i < cartArr.length; i++) {
      html +=
        "<tr><td>" +
        cartArr[i].id +
        "</td><td>" +
        cartArr[i].name +
        "</td><td>" +
        
        '<img src="images/basketball.png">' +
        "</td><td>" +"$"+
        cartArr[i].price +
        "</td></tr>";
    }
    html += "</table>";
    document.getElementById("product_list").innerHTML = html;
  
    });
  
  
  
  
  
  });
  