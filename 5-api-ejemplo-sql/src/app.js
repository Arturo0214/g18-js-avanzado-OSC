import express from "express"
import morgan from "morgan"

import productRouters from "./routes/index.routes"

const app = express();

/* Setting the port to 4000. */
app.set("port", 4000);

/* A middleware that logs all the requests to the console. */
app.use(morgan("dev"));
/* A middleware that parses the body of the request and makes it available in the req.body property. */
app.use(express.json());

app.use("/api-restful/products", productRouters)

export default app;


