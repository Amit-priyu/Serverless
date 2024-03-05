"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// function to create a user table..
// first thing is to connect to our database-
const pg_1 = require("pg");
const client = new pg_1.Client({
    connectionString: "postgresql://priyuocta:puODx9a3shNy@ep-dawn-pine-a54r3m6k.us-east-2.aws.neon.tech/neondb?sslmode=require"
});
// client.connect()
function createUserTable() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const result = yield client.query(`
     CREATE TABLE users(
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
     );
    `);
        console.log(result);
    });
}
createUserTable();
// create a function to insert the data
function insertData() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new pg_1.Client({});
        try {
            yield client.connect(); //making sure client conn. estb.
            const insertQuery = "INSERT INTO Users(username,email,password) VALUES('username1','user1@gmail.com','password1')";
            const res = yield client.query(insertQuery);
            console.log('Insertion Success:', res); // ouput inesrtion result
        }
        catch (err) {
            console.error('Error during the insertion:', err);
        }
        finally {
            yield client.end(); // close the client connectio
        }
    });
}
insertData();
