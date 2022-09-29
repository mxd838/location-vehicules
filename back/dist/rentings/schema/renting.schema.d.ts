import * as mongoose from 'mongoose';
export declare const RentingSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    beginDate?: string;
    endDate?: string;
    clientId?: string;
    vehicleId?: string;
}>;
