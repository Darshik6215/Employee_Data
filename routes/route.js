import express from "express";
import dataController from "../Controller/controller.js";

const route = express.Router();

// Routes:
route.get("/", dataController.getData);
route.get("/create", dataController.createGetData);
route.get("/:id/show", dataController.showGetData);
route.post("/", dataController.postData);
route.get("/:id/edit", dataController.editData);
route.put("/:id", dataController.putData);
route.delete("/:id", dataController.deleteData);

export default route;
