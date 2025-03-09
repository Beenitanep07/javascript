//varaible: store data in any place in memory so it consume more space and take time to access data
let jutta1 = "goldstar"
let jutta2 = "äddidas"
let jutta3 = "nike"

//array : arrange similar type of data in sequencial order ...all data are arrange in sequencial order so it is easy to access data coz data is one after another
let juttas = ["goldstar", "äddidas","nike"]


//variable
let country1 = "Nepal"
let country2 = "India"
let country3 = "Pakistan"


//array
let countries = ["Nepal", "India", "Pakistan"]


//pointing one data ie me in different varaible
let name = "Binita Neupane"
let address = "Narayanghat"
let college = "kathmandu Engineering college"
//information about person

//pointing apple
let productName = "apple"
let productPrice = 300
let productQty = 20
//information about apple

//so use object its better way to write
//when multiple data/ variable point to an specific kura lai point gareko huncha than use object
let myInformation =  {
    //key : value  ......object is always in key value pair
    name : "Binita Neupane",
    address : "Narayanghat",
    college : "Kathmandu Engineering college"
}

let myProduct = {
    productName : "apple",
    productPrice : 300,
    productQty : 20
}



//case(casing)
// 1. PascalCase: ILoveProgramming  (in java)
// 2. camelCase: iLoveProgramming   (in javascript)
// 3. kebab-case: i-love-programing or I-Love-Programming   (in vue)
// 4. snake_case : i_love_programming    (in python and django)


//array inside object example
let countriesArray = ["Nepal", "India", "Pakistan"] //array
let countriesArrayObject = [
    {
        name: "Nepal"
    },
    {
        name: "India"
    },
    {
        name: "Pakistan"
    }
]
//keeping object inside array in above example

//object inside array
let myInformation1 =  {
    //key : value  ......object is always in key value pair
    name : "Binita Neupane",
    address : ["Narayanghat", "Pokhara" ],
    college : "Kathmandu Engineering college"
}


//methods: its like additional feature (it is used to perform additional feature)

//to perform additional kura like adding shoes in list of shoes eg. let juttas = ["goldstar", "äddidas","nike"] like add, remove data .....additional action perform garna method use huncha
//to add new shoes in array
juttaspush = ["goldstar", "äddidas","nike"]
juttaspush.push("calibar") // add to last
juttaspush.pop() //remove last
//console.log(juttaspush)
juttaspush.unshift("puma") //add to first
//console.log(juttaspush)


juttaspush.shift()//remove  first



//indexing : numbering  in array indexing start from zero
//console.log(juttaspush[0])
juttaspush[1] = "ümbro"
console.log(juttaspush)


