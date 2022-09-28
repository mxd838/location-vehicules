"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RentingSchema = void 0;
const mongoose = require("mongoose");
exports.RentingSchema = new mongoose.Schema({
    vehicleId: String,
    clientId: String,
    beginDate: String,
    endDate: String,
});
//# sourceMappingURL=renting.schema.js.map