const { MongoClient } = require('mongodb');

let db;

const connectToDatabase = async () => {
    const client = new MongoClient(process.env.mongodb_connect_url);
    
    try {
        await client.connect();
        console.log('Connected to MongoDB');
        db = client.db('user_data'); // 데이터베이스 연결 저장
    } catch (error) {
        console.error('MongoDB connection error:', error);
}};

function getDB(){
    return db;
};

module.exports = { connectToDatabase, getDB };
