// Required Modules //===>
import * as dotenv from "dotenv";
import express, {Request, Response} from "express";
import cors from "cors";
import helmet from "helmet";
import { userRouter } from "./controllers/users/user.router";
import { chirpRouter } from "./controllers/chirps/chirp.router";
import { connect } from "./modules/db";

dotenv.config();
connect();


// App Variables //===>

if (!process.env.PORT) {throw new Error("Insufficient Environment Variables: No Port Number Specified")}

const PORT: number = parseInt(process.env.PORT as string, 10);
const app = express();

// Middleware //===>

app.use(helmet());
app.use(cors());
app.use(express.json());



// Routes //====>
app.use("/user", userRouter);
app.use("/chirp", chirpRouter);

app.get("/", async (req: Request, res: Response) => {
    console.log("request received");
    res.status(200).send("tested");
})

// Server Init //====>
const server = app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});