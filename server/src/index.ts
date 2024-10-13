import express from "express";
// express is a framework. It is a web framework. -> spring,fastapi,flask, django
// what is node?
// node is a runtime environment.
// jre is java runtime environment
// for python we use pypy or python
import dotenv from "dotenv";
// dotenv is a package that helps us to use environment variables
import bodyParser from "body-parser";
import cors from "cors";
// cors is a package that helps us to allow cross-origin requests
import helmet from "helmet";
// helmet is a package that helps us to secure our server, like security
// it secures our server by setting various HTTP headers, like security
import morgan from "morgan";
// morgan is a package that helps us to log our requests
/* ROUTE IMPORTS */
import projectRoutes from "./routes/projectRouts";
import taskRoutes from "./routes/taskRouts";
import searchRoutes from "./routes/searchRouts";
import userRoutes from "./routes/userRoutes";
import teamRoutes from "./routes/teamRouts"

/*CONFGURATION*/

dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// urlencoded is a middleware that helps us to parse url encoded data.
// 
app.use(cors());

/* ROUTES */
app.get("/",(req,res) => {
    res.send("This is home route");
});


app.use("/projects",projectRoutes);
app.use("/tasks",taskRoutes);    
app.use("/search",searchRoutes);
app.use("/users",userRoutes);
app.use("/teams",teamRoutes);


/*SERVER*/
const port = Number(process.env.PORT) || 3000;
app.listen(port,() => {
    console.log(`Server is running on port ${port}`);
});