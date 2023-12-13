import { ObjectId } from "bson";
import { NextFunction, Request, Response } from "express";

import { MongoDB } from "../db/mongo";
import * as dbRequests from "../db/requests";

export class DynamicFormController {
  /**
   * create a new project
   * @param req request
   * @param res response
   * @param next nextFunction
   */
  static async create(req: Request, res: Response, next: NextFunction) {
    let mongo = new MongoDB();
    let db;

    try {
      console.log("here1");
      db = await mongo.getDB();

      req.body["_id"] = new ObjectId();
      console.log("connected");
      const data = await dbRequests.addDocument(db, "fromulaire", req.body);
      res.status(200).send(data);
      //}
    } catch (e) {
      return next(e);
    } finally {
      // await mongo.disconnect();
    }
  }
}
