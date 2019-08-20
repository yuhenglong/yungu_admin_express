const express = require('express');
const users = require('./routes/api/users')
const app = express();
const bodyParser = require('body-parser');

// DB config
const MongoClient = require('mongodb').MongoClient;
//数据库名为：yuAdmin
const url = 'mongodb://localhost:27017/yuAdmin'
    // 使用body-parser中间件
app.use(bodyParser.urlencoded({ extendes: false }))


// 连接mongodb数据库
MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
    if (err) throw err;
    console.log("数据库已经创建！");
    //创建数据库集合
    const dbase = db.db("yuAdmin");
    // 创建数据
    const obj = { name: 'yuhenglong is pig', age: '27', job: 'web job' }
    dbase.collection('site').insertOne(obj, (err, res) => {
        if (err) throw err;
        console.log("文档插入成功！");
        db.close();
    })
})

// 使用routes
app.use("/api/users", users)

// 定义端口号
const port = process.env.PORT || 5000;

// 定义请求路由
app.get('/', (req, res) => {
    res.send(`<h1>请求成功了</h1>`)
})

// 监听端口
app.listen(port, () => {
    console.log(`服务器已正常启动`);
})