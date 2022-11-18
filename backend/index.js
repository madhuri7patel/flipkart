//const express = require("express");
import express from "express";
import Connection from "./config/db.js";
import dotenv from "dotenv";
import DefaultData from "./default.js";

const app = express();
dotenv.config();
Connection();
const PORT = 8000;

app.listen(PORT, () => console.log(`server is run ${PORT}`));
DefaultData();
