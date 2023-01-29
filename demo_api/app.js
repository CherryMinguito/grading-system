const koa = require('koa');
const Router = require('koa-router');
const cors = require('@koa/cors');

var app = new koa();
var route = new Router();


app.use(cors());

route.get('/', (ctx, next)=>{
    console.log(ctx.request);
    ctx.body ="Hello World!"
});


route.get('/Students', (ctx, next)=>{
    console.log(ctx.request);
    ctx.status = 200;
    ctx.body ={

        students:[
        {
            Fullname: 'Zhanea Cyrein Delfin'
        },

    ]      
    }
});


app.use(route.routes());

app.listen(3001);