const container = document.getElementById("container")

container.innerHTML = "<button onclick='buy()'>Buy!</button>"

// you can use .innerHTML to pass in html syntax and objects like buttons into the html directly

function buy() {
  container.innerHTML += "<p> Thank you for your purchase </p>"
}