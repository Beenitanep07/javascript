let me = {
    name : "Binita Neupane", //key: value
    age : 22,
    address: "Narayanghat"
}
    console.log(me.age)  // to fetch value we use key...always use key to fetch data
    //in object we use . to fetch data

    // in array we use [] 
    // eg. console.log(me[age])

    //in array console.log(me[age])
    //in object console.log(me.age)

    //to enter data in object i.e. add new data in object
    me.college = "Kathmandu Engineering College"

    console.log(me)


    //To make object data fix (i.e. donot give to add key and value to object)
    //immutable
    let newme = Object.freeze({
        newname: "Binita Neupane",
        newage : 22,
        newaddress: "Narayanghat"
    })
    newme.college = "Kathmandu Engineering College"

    console.log(newme)

    //to see key in object
    console.log(Object.keys(me))

    //to see value in object
    console.log(Object.values(me))


    // Destructuring (destructure)
    //Let { name, age, address }   = myInfo 
    //console.log(name,age,address)

    

    // conditional statement

    //condition ko aadarma khi garne i.e. everything will be on condition
    const isRaining = true
    if(isRaining){
        console.log("carry umbrella")
    }else{
        console.log("Don't carry umbrella")
    }


    //ternary operator : condition ? "if true" : "if false"
    isRaining ? console.log("carry umbrella") : console.log("don't carry umbrella")


    //short circuit
    // code: condition && "if left ko condition true vayo vane"  //left ko condition true vayo vane matra right ko execute huncha

    isRaining && console.log("carry umberalla")
    


    // 1 equal ---- value assign ----- age = 21
    // 2 equal ---- double equal donot check datatype it only check value(not strick)    if(age ==21)
    // 3 equal ---- it will check both data type and value(strick)   if(age===21)


    //else if
    const temperature = 10
    if(temperature > 30){
        console.log("It's very very hot")
    }else if(temperature >25){
        console.log("It's not so hot")
    }else{
        console.log("It's cold")
    }
    //interpreter lay step wise triger garcha first it will triger temperature > 30
    
    
    //nullish coelescing operator
    const age = null  //or const age = undefined
    const result = age ?? "No age"
    console.log(result)

    // To add two condition use &&  ...........and statement
    //if(newme.age > 20 && newme.address == "Narayanghat" )
    

    // or statement ...........one condition is true
    //if(newme.age > 20 || newme.address == "Narayanghat")










