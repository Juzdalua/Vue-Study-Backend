import * as express from "express";
import * as cors from "cors";

const app = express();
const PORT = 4000;

var corsOptions = {
    origin: "http://localhost:8080",
    optionsSuccessStatus: 200
  }

app.use(cors(corsOptions));

app.get("/", (req, res) => {
    return res.send("Home")
});

app.get("/1", (req, res) => {
    return res.json("Hello Vue")
});

app.listen(PORT, () => {
    console.log(`✅ Connect Server. localhost:${PORT}`);
});