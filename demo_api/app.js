// app.js
const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();
const cors = require('@koa/cors');

app.use(cors());

/*router.get('/', (ctx, next) => {
    console.log(ctx.request);
    ctx.body = "Hello KC"
});*/

router.get('/getStudents', (ctx, next) => {
    console.log(ctx.request);
    ctx.body = {

        student:[
            {   
                id: 1,
                firstName: 'Anna',
                lastName: 'Smith',
                studAddress: 'LLC'
            },
            {
                id: 2,
                firstName: 'Elsa',
                lastName: 'Smith',
                studAddress: 'LLC'
            },
            {
                id: 3,
                firstName: 'Olaf',
                lastName: 'Smith',
                studAddress: 'LLC'
            },
        ]
    }
});

app.use(router.routes());

// Bootstrap the server
app.listen(3001);