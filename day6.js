//loop in javascript (kunai kura repetation garna paryo vane we use loop)
let days = ["sun","mon","tues","wed"]
//console.log(days[0])
//console.log(days[1])
//console.log(days[2])
//console.log(days[3])
//It will be difficult to fetch array value if there is thousand of data in array  for that condition we use loop

//There are multiple kind of array for loop, while, do while, for of
//for of loop are just for array
for (let day of days){
    console.log(day)
}
//for of loop is more efficient than other loop like while, do while

let datas = [
    {
        name : "Nepal",
        region: "Asia"

    },
    {
        name: "Australia",
        region: "Australia"

    }

]
for(let data of datas){
    //console.log(data) doing this we get object now we can fetch specific value using dot to its key
    console.log(data.name)
}

let names = ["Manish", "Anish", "Ish"]
for(let name of names){  //here name is the each item of names
console.log("My name is " + name)
}

let informations = [
    {
        name : "Manish",
        age: 22
    },
    {
        name: "Anish",
        age: 20
    }
]
for (let information of informations){
    console.log("My age is " + information.age)
}

// function in javascript
//kunai kura repeate vako cha vane teslai function ma wrap garera resusable banaune ....yaslay garda repetation kam huncha
// console.log(1+2)
// console.log(2+3)
// console.log(3+4)
// yo addition garda repeate gariraknu vanda we can keep this in function

//regular function:
function addTwoNumber(a,b){ //here a, b is parameter ....function lay mageko yo 2 ota value lai parameter vancha....function lay mageko
    console.log(a+b)
}
addTwoNumber(10,20) // here 10 , 20 is argument function call garda pathako data lai argument vancha.....funtion lai deko

function addNumber(a,b,c=8){
    console.log(a+b+c)
}
addNumber(2,3)

//arrow function 
let addNum = (a,b,c=3)=>{
    console.log(a+b+c)
}
addNum(1,2,10)


let myInformations = [
    {
        name : "Manish",
        age: 22
    },
    {
        name: "Anish",
        age: 20
    }
]
function printInformation(info){ //yo function call vako myInformations lai yaha j name ma lida ni huncha
for(let information of myInformations){
    console.log("My name is " +information.name + " and my age is " + information.age)
}
}
printInformation(myInformations)//suru ma code run huda yo function call huncha jasma hamle array of myInformations pathauchau tespachi code mathi function ma jancha jaslay tyo array ma loop garcha


let todays = ["sun","mon","tues","wed"]

function printDays(today){
    for(let day of today){
        console.log("today is " + day)
    }
}
printDays(todays)