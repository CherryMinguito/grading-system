// app.js
const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();


// Our First Route
// app.use(async ctx => 
// 	{
// 	ctx.body = 'Hello World';
// });

router.get('/', (ctx, next) => 
{
	console.log(ctx.request);
	ctx.body = "Hello Ken"
});

router.get('/getStudents', (ctx, next) =>
{
	console.log(ctx.request);
	ctx.body = {
		
			student:[
					{
						fname: 'Ken',
						lname: 'Smith'
					},
					{
						fname: 'Lyndon',
						lname: 'Smith'
					},
					{
						fname: 'Kenneth',
						lname: 'Smith'
					}
	]
}
});

// Bootstrap the server
app.use(router.routes())
app.listen(3001);
