const koa = require('koa');
const Router = require('koa-router');
var app = new koa();
var route = new Router();


app.use(async ctx => {
	ctx.body = 'Hello World';
});

app.listen(3001);