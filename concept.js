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


//using the map()

const names = users.map((user)=>user.name)





console.log(names)