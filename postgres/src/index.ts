// function to create a user table..
// first thing is to connect to our database-
import { Client } from "pg";
import { createAbstractBuilder } from "typescript";
const client=new Client({
  connectionString:"postgresql://priyuocta:puODx9a3shNy@ep-dawn-pine-a54r3m6k.us-east-2.aws.neon.tech/neondb?sslmode=require"
})

// client.connect()

async function createUserTable(){
    await client.connect();
    const result=await client.query(`
     CREATE TABLE users(
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
     );
    `)
    console.log(result)
}
createUserTable();

// create a function to insert the data
async function insertData(){
    const client=new Client({
        connectionString:"postgresql://priyuocta:puODx9a3shNy@ep-dawn-pine-a54r3m6k.us-east-2.aws.neon.tech/neondb?sslmode=require"
    })
    try{
        await client.connect(); //making sure client conn. estb.
        const insertQuery="INSERT INTO Users(username,email,password) VALUES('username1','user1@gmail.com','password1');";
        const res=await client.query(insertQuery);
        console.log('Insertion Success:',res); // ouput inesrtion result

    }
    catch(err){
        console.error('Error during the insertion:',err);
    }
    finally{
        await client.end(); // close the client connectio
    }
}
insertData();

// write a function to get the user.. 