const orderButtons = document.querySelectorAll(".order-btn");
orderButtons.forEach(function (button) {
  button.addEventListener("click", function (event) {
    event.preventDefault();
    alert("Order placed successfully...!");
  })
})