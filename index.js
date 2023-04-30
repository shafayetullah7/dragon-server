const express = require('express');
const categories = require('./data/categories.json');
const news = require('./data/news.json');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());

app.get('/',(req,res)=>{
    res.send('Hello World world');
});

app.get('/categories',(req,res)=>{
    res.send(categories || {});
});


app.get('/categories/:id',(req,res)=>{
    const id = req.params.id;
    if(id==='0'){
        res.send(news)
    }
    else{
        const category = news.filter(n => n.category_id===id);
        res.send(category || {});
    }
    // res.send(`response for ${id}. ${typeof id}`);
});

app.get('/news',(req,res)=>{
    res.send(news || {});
});
app.get('/news/:id',(req,res)=>{
    const id = req.params.id;
    const data = news.find(n=>n._id===id);
    res.send(data || {});
})

app.listen(port,()=>{
    console.log('listening');
})