const express =require ("express");
const loginrouter =require('./routes/login')
const register =require('./routes/register')
const post =require('./routes/post')

//create instance of express
const app = express();
app.use('/auth',loginrouter);
app.use('/auth',register);
app.use('/post',post);



  app.listen(5000, () => {
    console.log('listening on port 5000');
});

