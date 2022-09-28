"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientSchema = void 0;
const mongoose = require("mongoose");
exports.ClientSchema = new mongoose.Schema({
    lastName: String,
    firstName: String,
    birthdate: String,
    email: String,
    phone: String,
});
//# sourceMappingURL=client.schema.js.map