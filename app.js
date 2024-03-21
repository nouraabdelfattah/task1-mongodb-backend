const mongo=require("mongodb")
const client=mongo.MongoClient
const url="mongodb://127.0.0.1:27017"
const dbname="Project1"
client.connect(url,(error,res)=>{
    if(error){
        return console.log(error)
    }
    console.log("success")
    const db=res.db(dbname)
//     db.collection("users").insertOne({
//             name:"ali",
//             age:7,
//             city:"cairo"
//         },(error,res)=>{
//             if(error){
//                 return console.log(`unable to seave user due to `+error)
//             }
//             console.log(res.insertedId)
//         }
//     )
// })
///////////////////////////////////////////////////////
db.collection ('users').insertMany([
    {
        name : 'ahmed',
        age : 20
    },
    {
        name : 'noura',
        age : 24
    },
    {
        name : 'saba',
        age : 24
    },
    {
        name : 'ahmed',
        age : 24
    },
    {
        name : 'mohamed',
        age : 40
    }
] , (error,data)=>{
    if(error){
        console.log("Unable to insert data")
    }
    console.log(data.insertedCount)
})
// db.collection('users').findOne({_id:mongodb.ObjectId("642c77561729f396090fb8a2")}
//     , (error,user)=>{
//         if(error){
//             console.log("Unable to insert data")
//         }
//         console.log(user)
//     })
    //////////////////////////////////////////////////
    // db.collection('users').find({age:24}).toArray((error,users)=>{
    //                 if(error){
    //                     return console.log('Error has occurred')
    //                 }
    //                 console.log(users)
    //             })
      ///////////////////// /////////////////////////////////
    //   db.collection('users').find({age:24}).count((error,users)=>{
    //         if(error){
    //             return console.log('Error has occurred')
    //         }
    //         console.log(users)
    //     })
    // 
})