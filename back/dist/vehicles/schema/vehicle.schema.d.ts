import * as mongoose from 'mongoose';
export declare const VehicleSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    type?: string;
    brand?: string;
    model?: string;
    licensePlate?: string;
    state?: string;
    pricePerDay?: number;
}>;
