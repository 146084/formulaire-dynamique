"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dynamicFormRouter = void 0;
const express_1 = __importDefault(require("express"));
const dynamicForm_1 = require("../controllers/dynamicForm");
exports.dynamicFormRouter = express_1.default.Router({
    strict: true,
});
exports.dynamicFormRouter.post("/", (req, res, next) => {
    console.log("reqest name", req.body);
    dynamicForm_1.DynamicFormController.create(req, res, next);
});
exports.default = exports.dynamicFormRouter;
//# sourceMappingURL=dynamicFormRouter.js.map