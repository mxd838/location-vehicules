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
exports.RentingsController = void 0;
const common_1 = require("@nestjs/common");
const rentings_service_1 = require("./rentings.service");
const create_renting_dto_1 = require("./dto/create-renting.dto");
let RentingsController = class RentingsController {
    constructor(rentingsService) {
        this.rentingsService = rentingsService;
    }
    create(createRentingDto) {
        return this.rentingsService.create(createRentingDto);
    }
    findAll() {
        return this.rentingsService.findAll();
    }
    findOne(id) {
        return this.rentingsService.findOne(id);
    }
    update(id, updateRentingDto) {
        return this.rentingsService.update(id, updateRentingDto);
    }
    delete(id) {
        return this.rentingsService.delete(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_renting_dto_1.CreateRentingDto]),
    __metadata("design:returntype", Promise)
], RentingsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RentingsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RentingsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_renting_dto_1.CreateRentingDto]),
    __metadata("design:returntype", Promise)
], RentingsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RentingsController.prototype, "delete", null);
RentingsController = __decorate([
    (0, common_1.Controller)('rentings'),
    __metadata("design:paramtypes", [rentings_service_1.RentingsService])
], RentingsController);
exports.RentingsController = RentingsController;
//# sourceMappingURL=rentings.controller.js.map