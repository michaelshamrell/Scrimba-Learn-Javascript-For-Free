let myLeads = []
const button = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
//when the if statement is formatted like this it means that it is checking if it is truthy
if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage
  render(myLeads)
}

const tabs = [
  {url: "https://www.linkedin.com/in/per-harald-borgen/"}
]

button.addEventListener("click", function() {
  myLeads.push(inputEl.value)
  inputEl.value = ""
  localStorage.setItem("myLeads", JSON.stringify(myLeads) )
  render(myLeads)
})
deleteBtn.addEventListener("dblclick", function() {
  localStorage.clear()
  myLeads = []
  render(myLeads)
})
tabBtn.addEventListener("click", function() {
console.log(tabs[0].url)
})

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
      listItems += 
      `<li>
          <a target='_blank' href='${leads[i]}'>
              ${leads[i]}
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
