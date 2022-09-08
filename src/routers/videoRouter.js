import express from "express";
import {
    watch, 
    getEdit, 
    postEdit,
    getUpload,
    postUpload,
} from "../controllers/videoController";

const videoRouter = express.Router();

// /:@가 있어야 변수
videoRouter.get("/:id(\\d+)", watch);
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);
videoRouter.route("/upload").get(getUpload).post(postUpload);

export default videoRouter;