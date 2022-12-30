const Router = require('koa-router');

const router = new Router({
    prefix: '/student'
});

let id = 1;

let student = [
    {id: id++, fname: "Acyl", lname: "Alien", course: "BIT", address: "Mandaue City", edit: false}
]; 

router.get('/', (ctx, next) => {
    ctx.body = student;
    next();
});

router.post('/create', (ctx, next) => {
    console.log(ctx.request.body);
    if(!ctx.request.body.fname || !ctx.request.body.lname || !ctx.request.body.course || !ctx.request.body.address)
    {
        ctx.response.status = 404;
        ctx.body = "Missing Field";
        console.log("Missing Field");
    }
    else
    {
        student.push({id: id++, fname: ctx.request.body.fname, lname: ctx.request.body.lname, course: ctx.request.body.course, address: ctx.request.body.address, edit: false});
        ctx.response.status = 201;
        ctx.body = "Successfully Added Student";
        console.log("Successfully Added Student");
    }
    next();
});

router.post('/delete', (ctx, next) => {
    console.log(ctx.request.body);
    if(!ctx.request.body.id)
    {
        ctx.response.status = 404;
        ctx.body = "Missing Fields";
        console.log("Missing Fields");
    }
    else
    {
        var index = student.findIndex(x => x.id == ctx.request.body.id);
        console.log(index)
        student.splice(index, 1);
        ctx.response.status = 201;
        ctx.body = "Student Deleted";
        console.log("Student Deleted");
    }
    next();
});

router.post('/update', (ctx, next) => {
    if(!ctx.request.body.fname || !ctx.request.body.lname || !ctx.request.body.course || !ctx.request.body.address || !ctx.request.body.id)
    {
        ctx.response.status = 404;
        ctx.body = "Missing Fields";
        console.log("Missing Fields");
    }
    else
    {
        ctx.response.status = 201;
        ctx.body = "Student Deleted";
        var index = student.findIndex(x => x.id == ctx.request.body.id);
        student[index].fname = ctx.request.body.fname;
        student[index].lname =ctx.request.body.lname;
        student[index].course =ctx.request.body.course;
        student[index].address =ctx.request.body.address;
        console.log("Student Updated");
    }
    next();
});

module.exports = router;