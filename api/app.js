const koa = require('koa');
const Router = require('koa-router');

var app = new koa();
var route = new Router();

route.get('/', (ctx, next)=>{
    console.log(ctx.request);
    ctx.body ="Hello Mandot"
});


route.get('/getStudents', (ctx, next)=>{
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

app.use(route.routes());


/*
app.use(async ctx => {
	ctx.body = 'Hello World';
});
*/

app.listen(3001);