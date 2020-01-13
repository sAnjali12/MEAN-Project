const express = require("express")
const knex = require("./knex.js")
const path = require("path")
const bodyParser=require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname+'/login.html'));
});


app.get('/products',(req,res)=>{
    res.sendFile(path.join(__dirname+'/secondPage.html'));
});



app.post('/postData',(req,res)=>{
    let email = req.body.email;
    let password = req.body.password
    let data = {"email":email  ,"password":password}
    var response = knex.insertData(data)
    response.then((data)=>{
        res.send("login")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
    }).catch((err)=>{
        console.log(err)
        res.send(err)
    })
})

app.post('/app_products',(req,res)=>{
    let addProducts  = {
        "image": req.body.image,
        "name": req.body.name,
        "categories": req.body.categories,
        "price": req.body.price 
    }
    response = knex.insertProduct(addProducts)
    response.then((data)=>{
        res.send("Done..")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
    }).catch((err)=>{
        console.log(err)
        res.send(err)
    })
})

// app.put('/upda')

app.listen(3000, function () {
    console.log('server is listening port 3000.....');
});