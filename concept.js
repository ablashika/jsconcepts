//mapping users to get username
const users =[
    {
        id:1,
     name:"Tony",
    isActive:true
    },
    {
        id:2,
        name:"Jake",
       isActive:true
    },
    {
        id:3,
        name:"Abla",
       isActive:true
    }
]

//using for loops
// let names = []
// for (i = 0; i< users.length;i++){
//  names.push(users[i].name)

// }

//using foreach
// let names = []
// users.forEach(
//     (user)=>{names.push(user.name)}
// )


//using the map() which is a better practice

const names = users.map((user)=>user.name)
console.log(names)










//hoisting

console.log(foo);
var foo=1;
console.log(foo);
//this will be undefine




//closure
const priCounter = ()=> {
    let count = 0;  

    return {
        increment:(val=1)=>{
            count += val; 

        },
        getValue:()=> {
             return count
        }
    }

}

const counter = priCounter()


console.log(counter.getValue())
counter.increment()
console.log(counter.getValue())
counter.increment()
console.log(counter.getValue())
console.log(counter.increment())
console.log(counter.getValue())
console.log(counter.getValue())

function privateSecrete(){
    let secret = "i am a christian";   
          return function() {
                return secret;
               }   
    
}

const getSecrete  = privateSecrete()
console.log(getSecrete())














//currying multply()() eg 1

function curuing (num1){

    return function (num2){
    
        return num1 * num2
    }



}

console.log(curuing(2)(8))

// better way to right the function above eg.2

// const currying = (numOne) => {
//     return (numTwo) => {
//         return numOne * numTwo
//     }
// }
// a more better way to write this

const currying =( numOne) => (numTwo) =>  numOne * numTwo
console.log(currying(40)(10))

//creating a currying function eg.3

const calculateVol = (length)  => (breathe) =>  (height) => length * breathe * height;
console.log(calculateVol(9)(9)(30))

/*
also called a nested function
*/

//example 4(advanced currying function)

 const curryFn = function (fng){
    //checking how many argument this function ha
     console.log(fng.length)

     return function f1(...args){
        console.log("f1" ,args)

     }
      
 }
   const curriedSum = curryFn((a,b,c)=>a+b*c);
 console.log(curriedSum(1,2,3))


 //instead of using array.push() using the (...) spread operator is a better options because
 // the spread operator make a copy of the array instead of modifying it unlike the push()

 let array = [1,2,8,9]
const addElementToArray = (arr, i) => {
    return [...arr, i]
}

console.log(addElementToArray(array,25))




//concatenate 2 arrays joining two arrays
//you can use the concat() to do this
// or just the spread operator

const mergeArrays = (arr1, arr2) =>{
return [...arr1, ...arr2];
   
}

console.log(mergeArrays([1,3,4],[9,0,"ama"]))



//checking if a name exist in an array
// you can use forloops but as a better coder we will use the code below
// const isNameExists = (name, arr) => arr.some((el) => el.name === name);
//re-wrting the function above
// you can use substitute inbuilt method as find and finIndex

function isNameExists (name,arr) {
    return arr.some((el) => {
        return el.name === name
    })
     
}

 console.log(isNameExists("Tony",users))

//hashTable
let name = [,,,,,,,,]

