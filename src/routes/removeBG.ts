import { Router } from "express";
import { Request, Response, NextFunction } from "express";
import removeController from "../Controllers/removeController";
import upload from "../middleware/upload";

const router = Router();

router.post("/create-image", upload.single("image"), removeController.removeBG);

export default router;
