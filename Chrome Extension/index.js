let myLeads = []
const button = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")


let leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )

console.log(leadsFromLocalStorage)

button.addEventListener("click", function() {
  myLeads.push(inputEl.value)
  inputEl.value = ""
  localStorage.setItem("myLeads", JSON.stringify(myLeads) )
  renderLeads()
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
      listItems += 
      `<li>
          <a target='_blank' href='${myLeads[i]}'>
              ${myLeads[i]}
          </a>
       </li>`

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
