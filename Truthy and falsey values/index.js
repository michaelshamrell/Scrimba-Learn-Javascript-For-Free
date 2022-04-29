const credits = 0

if (credits) {
  console.log("lets play 🎰")
} else {
  console.log("sorry you have no credits 😭")
}

//truthy
//falsey

// false----------------------------
// 0
// ""
// null --> how you as a developer signalize emptiness
// undefined --> how JavaScript signalizes emptiness
// undefined
// NaN

let currentViewers = null

currentViewers = ["jane", "nick"]

currentViewers = null
//null will make something false
if (currentViewers) {
    //do someting, notify the live streamers
  console.log("we have viewers")
}


//HOW TO CHECK IF VALUE SI TRUTHY OR FALSEY


let trueOrFalse = Boolean("hello")

console.log(trueOrFalse)

console.log(  Boolean("")   ) // false
console.log(  Boolean("0")  ) // true
console.log(  Boolean(100)  ) // true
console.log(  Boolean(null) ) // false
console.log(  Boolean([0])  ) // true
console.log(  Boolean(-0)   ) // false