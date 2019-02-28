// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');   //object destructring


var obj = new ObjectID();
console.log(obj);


MongoClient.connect('mongodb://localhost:27017',{useNewUrlParser : true},(err,client)=>{
if(err){
 return  console.log('Unable to connect with Mongodb server');
}
    var db = client.db('TodoApp')
    console.log('connected to Mongo server');
    
    // db.collection('Todos').insertOne({
    //     text : 'Something to do..',
    //     completed : false
    // },(err,res)=>{
    //   if(err){
    //       return console.log('Unable to insert todo',err);
    //   }
    //   console.log(JSON.stringify(res.ops,undefined,2));
    // });
    
    db.collection('Users').insertOne({
     name : 'Kanish Pandit',
     age : 29,
     location:'New Delhi, Delhi'
    },(err,res)=>{
        if(err){
          return console.log('Unable to insert Users', err);
        }
        console.log(JSON.stringify(res.ops,undefined,2));
        
    })
    client.close();
});