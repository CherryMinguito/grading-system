const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router.get('/', (ctx, next) => {
    console.log(ctx.request);
    ctx.body = "Hello World"
});

router.get('/getStudents', (ctx, next) =>{
    console.log(ctx.request);
    ctx.body = {
                student:[
                            {
                                fname: 'Anna',
                                lname: 'Smith'
                            },
                            {
                                fname: 'John',
                                lname: 'Smith'
                            },
                            {
                                fname: 'Sam',
                                lname: 'Smith'
                            }
                        ]
                }
});

app.use(router.routes())

app.listen(3002);