let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const button = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
// const input = document.querySelector("input-el").value;
//Const cannot be reassigned. Const-constant. Whatever you assign it to should be constant.

button.addEventListener("click", function() {
  myLeads.push(inputEl.value)
  console.log(myLeads)
})
zxcv
for (let i = 0; i < myLeads.length; i++) {
  ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
}
