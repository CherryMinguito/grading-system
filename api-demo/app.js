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
            firstName: 'Client Vincent',
            middleName: 'Bune',
            lastName: 'Amores',
            address: 'Ibabao, Mandaue City'
        },{
            id: 2,
            firstName: 'Neo Frank',
            middleName: 'Pangag',
            lastName: 'Uy',
            address: 'Tipolo, Mandaue City'
        },{
            id: 3,
            firstName: 'John Lloyd',
            middleName: 'Brown',
            lastName: 'Cornejo',
            address: 'Jagobiao, Mandaue City'
        },{
            id: 4,
            firstName: 'Loinel John',
            middleName: 'Damulag',
            lastName: 'Sanchez',
            address: 'Looc, Mandaue City'
        },{
            id: 5,
            firstName: 'Jian',
            middleName: 'Libat',
            lastName: 'Mendoza',
            address: 'Ibabao, Mandaue City'
        }
    ]}
});

app.use(router.routes())

app.listen(3001);