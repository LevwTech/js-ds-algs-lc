function addTo69() {
    const cache = {}; 
    // useing closures to avaid object being initiliazed every run
    return function(n) {
        if (cache[n]===undefined) {
             console.log("this runs once")
             cache[n] = n + 69 // could be more complex
              }
    return cache[n] // o(1)
   }
}
const adder69 = addTo69()
console.log(adder69(1))
console.log(adder69(1))
console.log(adder69(1))
