const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017',{useNewUrlParser:true},(err,client)=>{
    if(err)
    return console.log('Unable to connect with database');

    var db = client.db('TodoApp');
    console.log('Connected with server');
    
//     db.collection('Users').find({age : 24}).toArray().then((docs)=>{
// console.log('Users');
// console.log(JSON.stringify(docs,undefined,2));


//     },(err)=>{
//         console.log('Unable to fetch the docs',err);
        
//     })
    

// db.collection('Users').find().count().then((count)=>{
//     console.log(`Users count : ${count}`);
    
// },(err)=>{
//     console.log('Unable to fetch the docs',err);
    
// })

 db.collection('Users').find({name : 'Kanish Pandit'}).toArray().then((docs)=>{
console.log(JSON.stringify(docs,undefined,2));

 },(err)=>{
     console.log('Unable to fetch data',err);
     
 })

     client.close();
})