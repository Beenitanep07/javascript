//property(length)
//  array methods (slice,splice,split) : this are the method used in array

//properties ma bracket hunna eg nums.lenght..this is done to find length
let nums = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(nums.length)

//metthod ma last ma bracket huncha eg.nums.pop()

//slice ...this is used to cut the data in array ani yaslay original array lai khi change gardaina just cut garera cut data arko varaible ma rakcha
let sliceNumber = nums.slice(2,5)
console.log(sliceNumber)


let days = ["sun","mon", "tue","wed", "thur"]
//days.slice(days.indexOf("mon"),days.indexOf("thur"))
sliceDays = days.slice(1,4)
console.log(sliceDays);

let evenNumber = [2,4,6,8,10]
sliceEven = evenNumber.slice(3,5)
console.log(sliceEven)


//splice this is used to cut tha data in array and replace that data with different data ...yaslay original array ko data lai nai change garcha
let data = [1,2,3,4]
data.splice(1,1,"Beenita")
console.log(data)

let datanew = [1,2,3,4,5,6]
datanew.splice(1,3,"hello","bye","world")
console.log(datanew)

let characters = ['m', 'á', 'n', 'í','s', 'h']
characters.splice(0,6,13,1,14,9,19,8)
//characters.splice(0,characters.lenght,13,1,14,9,19,8)
console.log(characters)


//split tukra tukra garera chutaune
let message = "i am from narayanghat"
let splitMessage = message.split(" ")
console.log(splitMessage)

let text = "i,am,from,nepal"
let splitText = text.split(",")
console.log(splitText)


