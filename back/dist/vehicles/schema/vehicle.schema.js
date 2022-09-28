"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleSchema = void 0;
const mongoose = require("mongoose");
exports.VehicleSchema = new mongoose.Schema({
    type: String,
    brand: String,
    model: String,
    licensePlate: String,
    state: String,
    pricePerDay: Number,
});
//# sourceMappingURL=vehicle.schema.js.map