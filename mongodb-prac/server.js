const express = require('express');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const connect = require('./model/index');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");  

dotenv.config();


const app = express();
const PORT = 8000;


app.set('view engine', 'ejs');
app.set('views', './views');
app.use('/static', express.static(__dirname + '/static'));
app.use('/utils', express.static(__dirname + '/utils'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());

const userRouter = require('./routes/user');
app.use('/user', userRouter);

const marketRouter = require('./routes/market');
app.use('/market', marketRouter);  

app.get('*', (req, res) => {
    res.render('404');
})

connect();

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Meditator's Node Express API with Swagger",
      version: "0.1.0",
      description:
        "This is a simple CRUD API application made with Express and documented with Swagger",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "Meditator",
        url: "",
        email: "",
      },
    },
    servers: [
      {
        url: "http://localhost:8000/",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const specs = swaggerJsdoc(options);

app.use("/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs)
);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

