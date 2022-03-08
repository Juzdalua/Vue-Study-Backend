import * as express from "express";
import * as cors from "cors";
import * as mysql from "mysql2";

const app = express();
const PORT = 4000;

// use Cors
var corsOptions = {
    origin: "http://localhost:8080",
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// use DB with mysql
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "78xhdtls@",
    database: "test",
});
connection.connect( (error) => {
    if(error){
        console.log(`❌ DB connection ERROR: ${error}`);
        return;
    }else{
        console.log(`🚀 DB connection Success`);
    };        
});

app.get("/", (req, res) => {
    return res.send("Home")
});

// send json data to FE
app.get("/1", (req, res) => {
    return res.json("Hello Vue")
});

// select from mysql
app.get("/2", (req, res) => {    

    // SELECT SQL 
    const sql1 = connection.query("SELECT * FROM USERS", (error, results, fields) => {
        if(error)
            console.log('MYSQL ERROR: ',error);
        if(results)
            console.log('MYSQL RESULTS: ',results);
        if(fields)
            console.log('MYSQL FIELDS: ',fields)
        console.log(results)
    });
    
    // SELECT SQL WITH WHERE
    // const sql2 = connection.query("SELECT * FROM USERS WHERE ID=?", [2], (error, results, fields) => {
    //     if(error)
    //         console.log('MYSQL ERROR: ',error);
    //     if(results)
    //         console.log('MYSQL RESULTS: ',results);
    //     if(fields)
    //         console.log('MYSQL FIELDS: ',fields)
    //     console.log(results[0])
    // });    
    return res.end();
});

app.listen(PORT, () => {
    console.log(`✅ Connect Server. localhost:${PORT}`);
});