"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RentingsModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const rentings_service_1 = require("./rentings.service");
const rentings_controller_1 = require("./rentings.controller");
const renting_schema_1 = require("./schema/renting.schema");
let RentingsModule = class RentingsModule {
};
RentingsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'Renting', schema: renting_schema_1.RentingSchema }]),
        ],
        controllers: [rentings_controller_1.RentingsController],
        providers: [rentings_service_1.RentingsService],
    })
], RentingsModule);
exports.RentingsModule = RentingsModule;
//# sourceMappingURL=rentings.module.js.map