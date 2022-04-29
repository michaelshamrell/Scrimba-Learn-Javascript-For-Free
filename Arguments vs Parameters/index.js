//Parameters are the variables that you define when you write the function, created on the inside of the function
function greetUser(greeting, name) { 
  welcomeEl.textContent = `${greeting}, ${name} 👋`
}
//Arguments are the values created on the outside of the function
greetUser("Howdy", "James")


function add(num1, num2) {
  return num1 + num2
}

add(3, 4)

// What are greeting and name? Parameters
// What are "Howdy" and "James"? Arguments
// What are num1 and num2? Parameters
// What are 3 and 4? Arguments