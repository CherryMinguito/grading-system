const koa = require('koa');
const {koaBody} = require('koa-body');
const cors = require('@koa/cors');

const app = new koa();

app.use(koaBody());
app.use(cors());

let student = require('./student.js');

app.use(student.routes()).use(student.allowedMethods);

app.listen(3002, function() {
    console.log("Server at http://localhost:3002/student")
});