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
exports.RentingsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let RentingsService = class RentingsService {
    constructor(rentingModel) {
        this.rentingModel = rentingModel;
    }
    async create(renting) {
        const newRenting = new this.rentingModel(renting);
        return await newRenting.save();
    }
    async findAll() {
        return await this.rentingModel.find();
    }
    async findOne(id) {
        return await this.rentingModel.findById({ _id: id });
    }
    async update(id, renting) {
        return await this.rentingModel.findByIdAndUpdate(id, renting, {
            new: true,
        });
    }
    async delete(id) {
        return await this.rentingModel.findByIdAndRemove(id);
    }
};
RentingsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)('Renting')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], RentingsService);
exports.RentingsService = RentingsService;
//# sourceMappingURL=rentings.service.js.map