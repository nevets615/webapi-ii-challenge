const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
  find,
  findById,
  insert,
  update,
  remove,
};
router.get("/api/posts", (req, res) => {
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

router.get("/api/posts/:id", (req, res) => {
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
      .json({ error: "The post with the specified ID does not exist." );
  }
});



function insert(post) {
  return db('posts')
    .insert(post)
    .then(ids => ({ id: ids[0] }));
}

function update(id, post) {
  return db('posts')
    .where('id', Number(id))
    .update(post);
}

function remove(id) {
  return db('posts')
    .where('id', Number(id))
    .del();
}
