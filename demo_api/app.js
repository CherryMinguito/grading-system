// app.js
const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();
const cors = require('@koa/cors');

// Our First Route
app.use(cors());

router.get('/', (ctx, next)=>{
    console.log(ctx.request);
    ctx.body ="Hello Ma'am/Sir";
});
router.get('/getStudents', (ctx, next)=>{
    console.log(ctx.request);
    ctx.body ={
        student:[
        {
            firstName:'Vincent',
            lastName:'Vicente'
        },
        {
            firstName:'Rudy',
            lastName:'Mayola'
        },
        {
            firstName:'Mark Lester',
            lastName:'Gabison Happy Birth Day'
        },
    ]
    }
});

app.use(router.routes())

// Bootstrap the server
app.listen(3001);