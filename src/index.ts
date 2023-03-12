import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";

// import router from "./router";
import mongoose from "mongoose";

const app = express();

app.use(
  cors({
    credentials: true,
  })
);

app.use(bodyParser.json());
app.use(cookieParser());
app.use(compression());

const server = http.createServer(app);

server.listen(27017, () => {
  console.log("Server is running on port 27017");
});

const MONGO_URL = "mongodb+srv://ylmgrbz:ylgmrbz@cluster.wjo7mxt.mongodb.net/?retryWrites=true&w=majority";

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL); 
mongoose.connection.on("disconnected", () => {
    console.log("Mongoose disconnected");

    }
);



