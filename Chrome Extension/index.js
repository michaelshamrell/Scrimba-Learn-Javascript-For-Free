let myLeads = []
const button = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
// const input = document.querySelector("input-el").value;
//Const cannot be reassigned. Const-constant. Whatever you assign it to should be constant.

button.addEventListener("click", function() {
  myLeads.push(inputEl.value)
  inputEl.value = ""
  renderLeads()
})


function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
      listItems += "<li><a target='_blank' href=' " + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
    }
      ulEl.innerHTML = listItems
}
  //breaking this line of code into three streps, first ou are creating the li element, then creating the text content of the element, then taking the expression and apppending it to the unordered list.
  // create Element
  // set text Element
  // append to ul

  //Another way to do what's above--------------

  // const li = document.createElement("li")
  // li.textContent = myLeads[i]
  // ulEl.append(li)
