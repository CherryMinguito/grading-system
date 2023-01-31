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
                                id: '1190468',
                                firstName: 'Alcover',
                                lastName: 'Jhonrey',
                                studAddress: 'Sambag II, Urgello, Cebu City',
                                dateAdded: '12/09/2022'
                            },
                            {
                                id: '1190435',
                                firstName: 'Dennis',
                                lastName: 'Abarquez',
                                studAddress: 'Talisay City',
                                dateAdded: '12/09/2022'
                            },
                            {
                                id: '1190422',
                                firstName: 'Jhon Paul',
                                lastName: 'Salazar',
                                studAddress: 'Carcar City',
                                dateAdded: '12/09/2022'
                            },
                            {
                                id: '1190440',
                                firstName: 'Adrian James',
                                lastName: 'Jemina',
                                studAddress: 'Lahug, Cebu City',
                                dateAdded: '12/09/2022'
                            }
                        ]
                }
});

app.use(router.routes())

app.listen(3002);