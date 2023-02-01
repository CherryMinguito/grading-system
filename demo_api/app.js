// app.js
const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();
const cors = require('@koa/cors');

app.use(cors());

router.get('/', (ctx, next) => {
    console.log(ctx.request);
	ctx.body = 'Hello World';
});

router.get('/getStudents' , (ctx, next) => {
    console.log(ctx.request);
    ctx.body = {

        student:[
            {
                fname:'Mark',
                lname:'Gabison'
            },
            {
                fname:'Lester',
                lname:'Gabison'
            },
            {
                fname:'Marky',
                lname:'Gabison'
            },
        ]
    }
        
});

app.use(router.routes())

app.listen(3004);