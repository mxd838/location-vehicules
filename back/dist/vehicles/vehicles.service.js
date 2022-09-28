"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehiclesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let VehiclesService = class VehiclesService {
    constructor(vehicleModel) {
        this.vehicleModel = vehicleModel;
    }
    async create(vehicle) {
        const newVehicle = new this.vehicleModel(vehicle);
        return await newVehicle.save();
    }
    async findAll() {
        return await this.vehicleModel.find();
    }
    async findOne(id) {
        return await this.vehicleModel.findById({ _id: id });
    }
    async update(id, vehicle) {
        return await this.vehicleModel.findByIdAndUpdate(id, vehicle, {
            new: true,
        });
    }
    async delete(id) {
        return await this.vehicleModel.findByIdAndRemove(id);
    }
};
VehiclesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)('Vehicle')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], VehiclesService);
exports.VehiclesService = VehiclesService;
//# sourceMappingURL=vehicles.service.js.map