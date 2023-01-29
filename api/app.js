// app.js
/*const Koa = require('koa');
const app = new Koa();

// Our First Route
app.use(async ctx => {
	ctx.body = 'Hello World';
});

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
            firstName: 'Christine Alissa',
            middleName: 'Abas',
            lastName: 'Caintapan',
            address: 'Buhisan, Cebu City'
        },{
            id: 2,
            firstName: 'Lyca May',
            middleName:'',
            lastName: 'Roslinda',
            address: 'Lapu Lapu City'
        },{
            id: 3,
            firstName: 'Reiame',
            middleName:'',
            lastName: 'Delfin',
            address: 'Looc, Mandaue City'
        }
    ]}
});

app.use(router.routes())

app.listen(3001);