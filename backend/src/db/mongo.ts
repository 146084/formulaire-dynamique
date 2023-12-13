const MongoClient = require("mongodb").MongoClient;

const TAG = "MongoDB";

export class MongoDB {
  /** connects to MongoDB and returns the client */

  async getDB(): Promise<any> {
    const client = await MongoClient.connect("mongodb://127.0.0.1:27017", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const db = client.db("formulaireDb");
    return db;
  }
  /**
   * Disconnect from db client
   */
}
