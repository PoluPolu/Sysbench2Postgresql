const { Client } = require('pg')

const client = new Client({
    host: '192.168.102.132',
    user: 'postgres',
    database: 'postgres',
    password: 'postgres',
    port: 5432,
});

const insertUser = async (userName, userRole) => {
    try {
        await client.connect();           // gets connection
        await client.query(
            `INSERT INTO "users" ("name", "role")  
             VALUES ($1, $2)`, [userName, userRole]); // sends queries
        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    } finally {
        await client.end();               // closes connection
    }
};

insertUser('Matt', 'moderator').then(result => {
    if (result) {
        console.log('User inserted');
    }
});