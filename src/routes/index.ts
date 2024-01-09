import { Express, Request, Response, NextFunction } from "express";
import removeBGRouter from "./removeBG";

function route(app: Express): void {
  app.use("/remove-background", removeBGRouter);
  app.use("/", (req: Request, res: Response) => {
    res.json("Hello");
  });
}

export default route;
