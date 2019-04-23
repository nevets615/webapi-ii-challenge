const express = require("express");

const postsRouter = require('./posts/posts-router.js')

const db = require("./data/db.js");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
    res.send("something is happening");
  });

server.use('/api/posts', postsRouter);
 
module.exports = server;