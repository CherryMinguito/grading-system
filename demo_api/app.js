const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();
const cors = require('@koa/cors');

app.use(cors());

router.get('/', (ctx, next) => {
    console.log(ctx.request);
    ctx.body = "Hello Lyndon"
});

router.get('/getStudents', (ctx, next) =>{
    console.log(ctx.request);
    ctx.body = {
                student:[
                            {
                                id: '1190457',
                                firstName: 'Lyndon',
                                lastName: 'Dizon',
                                studAddress: 'Apas, Cebu City',
                                dateAdded: '12/09/2022'
                            },
                            {
                                id: '1190444',
                                firstName: 'Kenneth',
                                lastName: 'Cosep',
                                studAddress: 'Gun-ob, Lapu-Lapu City',
                                dateAdded: '12/09/2022'
                            },
                            {
                                id: '1190461',
                                firstName: 'Ken',
                                lastName: 'Torcende',
                                studAddress: 'Bankal, Lapu-Lapu City',
                                dateAdded: '12/09/2022'
                            },
                            {
                                id: '1190450',
                                firstName: 'Loinel John',
                                lastName: 'Sanchez',
                                studAddress: 'Looc, Mandaue City',
                                dateAdded: '12/09/2022'
                            }
                        ]
                }
});

app.use(router.routes())

app.listen(3002);