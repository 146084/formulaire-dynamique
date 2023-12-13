"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoDB = void 0;
const MongoClient = require("mongodb").MongoClient;
const TAG = "MongoDB";
class MongoDB {
    /** connects to MongoDB and returns the client */
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                const uri = "mongodb://127.0.0.1:27017";
                MongoClient.connect(uri, (err, client) => {
                    if (err) {
                        resolve(null);
                    }
                    resolve(client);
                });
            });
        });
    }
    getDB() {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield MongoClient.connect("mongodb://127.0.0.1:27017", {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
            const db = client.db("formulaireDb");
            return db;
        });
    }
}
exports.MongoDB = MongoDB;
//# sourceMappingURL=mongo.js.map