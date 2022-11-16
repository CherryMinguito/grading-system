const Koa = require('koa');
const KoaRouter = require('koa-router');
const json = require('koa-json');
const path = require('path');
const render = require('koa-ejs');

const app = new Koa();
const router = new KoaRouter();

// Json Prettier Middleware
app.use(json());

// Middleware Example Output
app.use(async ctx => ctx.body =  'Hello World');

// Router Middleware
app.use(router.routes()).use(router.allowedMethods());

app.listen(3001, () => console.log('Server Started...'));