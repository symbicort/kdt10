// dbModule.js
const { getDB } = require('../utils/db_connect');


async function createCollections() {
    try {
        const db = getDB();
        const collections = await db.createCollection("collection");

        console.log(collections)
        console.log('Collections in the database:');
    } catch (error) {
        console.error('Error listing collections:', error.message);
    } finally {
        // 여기에서 필요한 후속 작업 수행
    }
}

module.exports = {
    createCollections: createCollections
};
