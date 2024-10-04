"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
/* ROUTE IMPORTS */
const projectRouts_1 = __importDefault(require("./routes/projectRouts"));
const taskRouts_1 = __importDefault(require("./routes/taskRouts"));
const searchRouts_1 = __importDefault(require("./routes/searchRouts"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const teamRouts_1 = __importDefault(require("./routes/teamRouts"));
/*CONFGURATION*/
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, helmet_1.default)());
app.use(helmet_1.default.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use((0, morgan_1.default)("common"));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use((0, cors_1.default)());
/* ROUTES */
app.get("/", (req, res) => {
    res.send("This is home route");
});
app.use("/projects", projectRouts_1.default);
app.use("/tasks", taskRouts_1.default);
app.use("/search", searchRouts_1.default);
app.use("/users", userRoutes_1.default);
app.use("/teams", teamRouts_1.default);
/*SERVER*/
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
