const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();
const cors = require('@koa/cors');

// Our First Route
// app.use(async ctx => {
// 	ctx.body = 'Hello s';
// });

app.use(cors());


router.get('/', (ctx, next)=>{
    console.log(ctx.request);
    ctx.body ="Hello Vincent"
});


router.get('/getStudents', (ctx, next)=>{
    console.log(ctx.request);
    ctx.body ={

        student:[
        {
            fname:'Anna',
            lname:'Smith'
        },
        {
            fname:'Jamb',
            lname:'Smith'
        },
        {
            fname:'Boree',
            lname:'Smith'
        },

    ]
    
       
    }
});


app.use(router.routes())

// Bootstrap the server
app.listen(3002);

