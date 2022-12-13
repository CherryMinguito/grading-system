const Koa = require('koa');
const KoaRouter = require('koa-router');
const json = require('koa-json');
const path = require('path');
const render = require('koa-ejs');

const app = new Koa();
const router = new KoaRouter();

const cors = require('@koa/cors');

app.use(cors());

router.get('/getStudents', (ctx, next) =>{
    console.log(ctx.request);
    ctx.body = {
        student:[{
            id: 1,
            firstName: 'Loinel John',
            middleName: 'Sungahid',
            lastName: 'Sanchez',
            address: 'Looc, Mandaue City'
        },{
            id: 2,
            firstName: 'Lyndon',
            middleName: '',
            lastName: 'Dizon',
            address: 'Lahug, Mandaue City'
        },{
            id: 3,
            firstName: 'John Lloyd',
            middleName: 'Brown',
            lastName: 'Cornejo',
            address: 'Jagobiao, Mandaue City'
        },{
            id: 4,
            firstName: 'Neo Frank',
            middleName: 'Pangag',
            lastName: 'Uy',
            address: 'Tipolo, Mandaue City'
        },{
            id: 5,
            firstName: 'Client Vincent',
            middleName: '',
            lastName: 'Amores',
            address: 'Ibabao, Mandaue City'
        }
    ]}
});

// Router Middleware
app.use(router.routes())

app.listen(3001);