// Required Modules //===>
import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

dotenv.config();

// App Variables //===>

if (!process.env.PORT) {throw new Error("Insufficient Environment Variables: No Port Number Specified")}

const PORT: number = parseInt(process.env.PORT as string, 10);
const app = express();

// Middleware //===>

app.use(helmet());
app.use(cors());
app.use(express.json());



// Routes //====>
app.get("/", (req, res) => {
    console.log(`URL: ${req.url}`);
    res.send("Hi there!");
});

// Server Init //====>
const server = app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});