// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server', err);
    }
    console.log('Connected to MongoDB server');
    
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log('result');
    // }).catch((err) => {
    //     console.log(err);
    // })

    // db.collection('Todos').deleteOne({text: 'Walk the dog'}).then((result) => {
    //         console.log(result);
    // })

    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Users').deleteMany({name: 'Man Vu'}).then((result) => {
    //     console.log(result);
    // }).catch((err) => {
    //     console.log(err)
    // })

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5bd9b51bff034772b81fef28')
    }).then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    })

    // db.close();
}); 