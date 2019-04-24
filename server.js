const express = require("express");

const postsRouter = require('./seeds/posts-router.js')

const db = require("./seeds./db.js");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
    res.send("something is happening");
  });

server.use('/api/posts', postsRouter);
 
module.exports = server;