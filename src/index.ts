import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as express from "express";
import * as helmet from "helmet";
import swaggerUi = require('swagger-ui-express');
import swaggerDocument = require('./resources/swagger.json');
import "reflect-metadata";
import { corsOptions } from "./config/config";
import { PORT } from "./constants/constants";
import routes from "./routes";
import * as dotenv from 'dotenv';


const app = express();

// Call midlewares
app.use(cors(corsOptions));
app.use(helmet());
app.use(bodyParser.json());

//Set all routes from routes folder
app.use("/", routes);

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, { customSiteTitle: "Explorer | Book Management API" })
);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

