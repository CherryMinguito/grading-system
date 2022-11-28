/* const Koa = require('koa');
const app = new Koa();

// Our First Route
app.use(async ctx => {
	ctx.body = 'Hello World';
}); */

/*   const Koa = require('koa');
  const koaBody = require('koa-body');
  const bodyParser = require('koa-bodyparser')
  // create app instance
  const app = new Koa();

  // middleware functions
  app.use(bodyParser());

  // Require the Router we defined in books.js
  let books = require('../books.js');
  // Use the Router on the sub route /books
  app.use(books.routes());

  // Bootstrap the server
  app.listen(3001); */
const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

const cors = require('@koa/cors');

app.use(cors());

router.get('/getStudents', (ctx, next) =>{
    console.log(ctx.request);
    ctx.body = {
        student:[{
            id: 1,
            firstName: 'Client Vincent',
            lastName: 'Amores',
            address: 'Ibabao, Mandaue City'
        },{
            id: 2,
            firstName: 'Neo Frank',
            lastName: 'Uy',
            address: 'Tipolo, Mandaue City'
        },{
            id: 3,
            firstName: 'John Lloyd',
            lastName: 'Cornejo',
            address: 'Jagobiao, Mandaue City'
        }
    ]}
});

app.use(router.routes())

app.listen(3001);
