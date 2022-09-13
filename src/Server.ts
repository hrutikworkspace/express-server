import * as express from "express";
import * as bodyParser from "body-parser";
import router from "./router";
import * as morgan from "morgan";
import { IConfig } from "./config";
import Database from "./libs/Database";
import * as swaggerJsdoc from "swagger-jsdoc";
import * as swaggerUi from "swagger-ui-express";

export class Server {
  swaggerOptions = {
    swaggerDefinition: {
      info: {
        title: "Swagger Apis",
        description: "swagger Apis",
        version: "1.0.0",
        contact: {
          name: "Hrutik",
        },
        Server: ["http://localhost:9005"],
      },
    },
    apis: ["dist/**/*.js"],
  };

  swaggerDocs = swaggerJsdoc(this.swaggerOptions);
  private app: express.Express;
  constructor(private config: any) {
    this.app = express();
    this.app.use(express.json());
  }

  get application() {
    return this.app;
  }

  private initBodyParser = () => {
    this.app.use(bodyParser.json());
  };

  bootstrap = () => {
    this.app.use(morgan("tiny"));
    this.initBodyParser();
    this.setupRoutes();
    return this.app;
  };

  public setupRoutes = () => {
    this.app.get("/health-check", (req, res) => {
      res.send("I am OK");
    });
    this.app.use("/api", router);
    // console.log('second', this.setupRoutes);
    this.app.use(
      "/api-docs",
      swaggerUi.serve,
      swaggerUi.setup(this.swaggerDocs)
    );
  };

  public run = () => {
    const { port, env, mongo: mongoUrl } = this.config;
    // [Object, Object];
    Database.open(mongoUrl)
      .then(() => {
        this.app.listen(port, () => {
          const message = `||App Running ${port} on ${env} Successfully..`;
          console.log(message);
        });
        //return this;
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
export default Server;
