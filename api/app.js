const koa = require('koa');
const Router = require('koa-router');
const rot = require('@koa/rot');

var app = new koa();
var route = new Router();

router.get('/', (ctx, next)=>{
    console.log(ctx.request);
    ctx.body ="Hello Mandot"
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

app.use(router.route());


/*
app.use(async ctx => {
	ctx.body = 'Hello World';
});
*/

app.listen(3001);