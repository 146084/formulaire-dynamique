import express, { NextFunction, Request, Response } from "express";
import { DynamicFormController } from "../controllers/dynamicForm";
export const dynamicFormRouter = express.Router({
  strict: true,
});

dynamicFormRouter.post(
  "/",
  (req: Request, res: Response, next: NextFunction) => {
    console.log("reqest name", req.body);

    DynamicFormController.create(req, res, next);
  }
);

export default dynamicFormRouter;
