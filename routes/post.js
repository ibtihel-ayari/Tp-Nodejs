const express =require ("express");
const post = express.Router();

//create instance of express
const posts = [
    { id: 1, title: 'Post1', content: 'the content of the post1.' },
    { id: 2, title: 'Post2', content: 'Content of post2.' },
    { id: 3, title: 'Post3', content: 'Content of post3.' },
    { id: 4, title: 'Post4', content: 'Content of post4.' },

  ]
  
  
  post.get('/post/all', (req, res) => {
    
    res.json(posts);
  })


  post.get('/post/:id', (req, res) => {
    
    const id= parseInt(req.params.id) 
    const object = posts.find(obj => obj.id ===id)
    if (!object)
    return res.status(404).json ({error: 'objet non trouvé'})
      res.json(object)
      })
      module.exports= post;