import express from "express";
import path from "path";
import connection from "./Middleware/index.js";
import { fileURLToPath } from "url";
import methodOverride from "method-override";
import route from "./routes/route.js";

const app = express();
const port = 8080;

// Middleware:
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Method Override:
app.use(methodOverride("_method"));

// View Engine:
app.set("view engine", "ejs");

// Static File:
const staticFile = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "Public"
);
app.use(express.static(staticFile));

// DB Connection:
app.use(connection);

// Routes:
app.use("/emp", route);

// Port:
app.listen(port, () =>
  console.log(`Listening on port http://localhost:${port}`)
);
