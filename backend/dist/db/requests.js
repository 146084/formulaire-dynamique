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
exports.addDocument = void 0;
function addDocument(db, collectionName, doc) {
    return __awaiter(this, void 0, void 0, function* () {
        const _collection = yield db.collection(collectionName);
        if (!_collection) {
            return null;
        }
        let result = yield _collection.insertOne(doc);
        if (result.ops && result.ops[0]) {
            result = result.ops[0];
        }
        return result;
    });
}
exports.addDocument = addDocument;
//# sourceMappingURL=requests.js.map