// app.js
const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();
const cors = require('@koa/cors');

app.use(cors());

router.get('/', (ctx, next) => {
    console.log(ctx.request);
    ctx.body = "Hello KC"
});

router.get('/getStudents', (ctx, next) => {
    console.log(ctx.request);
    ctx.body = {

        student:[
            {
                fname: 'Anna',
                lname: 'Smith'
            },
            {
                fname: 'Elsa',
                lname: 'Smith'
            },
            {
                fname: 'Olaf',
                lname: 'Smith'
            },
        ]
    }
});

app.use(router.routes());

// Bootstrap the server
app.listen(3001);