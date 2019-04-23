const express = require('express')

const Posts = require('./posts.js')

const router = express.Router();

router.get("/", (req, res) => {
    db.find()
      .then(posts => {
        console.log(posts);
        res.status(201).json(posts);
      })
      .catch(err => {
        res
        .status(500)
        .json({ error: "The posts information could not be retrieved." });
      });
  });
  
  router.get("/:id", (req, res) => {
    postId = req.params.id;
    if (postId) {
      db.findById(postId)
        .then(posts => {
          res.json(posts);
        })
        .catch(err => {
          res
            .status(500)
            .json({ error: "The post information could not be retrieved." });
        });
    } else {
      res
        .status(404)
        .json({ error: "The post with the specified ID does not exist." });
    }
  });
  
  router.post("/", (req, res) => {
    const newPost = req.body;
    console.log("request body: ", newPost);
  
    if (newPost) {
      db.insert(newPost)
        .then(posts => {
          res.status(201).json(posts);
        })
        .catch(err => {
          res
            .status(400)
            .json({ errorMessage:  "Please provide title and contents for the post."  });
        });
    } else {
      res
        .status(500)
        .json({
          error: "There was an error while saving the post to the database" 
        });
    }
  });
  
  
  
  router.delete("/:id", (req, res) => {
    const userId = req.params.id;
    db.posts
    .remove(postId)
    .then(deleted => {
        res.status(404)
        message: "The post with the specified ID does not exist."
      })
      .catch(err => {
        res.status(500).json({
          error: err,
          message: "The post could not be removed" 
        });
      });
  });

  module.exports = router;