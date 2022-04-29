// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

let error = document.getElementById("error")

function purchase() {
  message = "Something went wrong please try again"
  error.textContent = message

  document.getElementById("error").style.display = 'block';
}

