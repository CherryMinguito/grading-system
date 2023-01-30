// app.js
const Koa = require("koa");
const Router = require("koa-router");

const app = new Koa();
const router = new Router();

const cors = require("@koa/cors");

app.use(cors());

router.get("/getStudents", (ctx, next) => {
  console.log(ctx.request);
  ctx.body = {
    student: [
      {
        id: 1,
        firstname: "Loinel John",
        middlename: "Sungahid",
        lastname: "Sanchez",
        address: "Looc, Mandaue City",
      },
      {
        id: 2,
        firstname: "Neo Frank",
        middlename: "Defensor",
        lastname: "Uy",
        address: "Tipolo, Mandaue City",
      },
    ],
  };
});

app.use(router.routes());

app.listen(3001);
