import mongoose , {Schema , Document} from "mongoose";

export interface INGO extends Document {
    name: string;
    email: string;
    password: string;
    address: string;
    phoneNumber: string;
    profileImage: string;
    NGOAdmin: Schema.Types.ObjectId;
    NGOWorkers: Schema.Types.ObjectId[];
    createdAt: Date;
    updatedAt: Date;
}

const ngoSchema: Schema<INGO> = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    address: {type: String, required: true},
    phoneNumber: {type: String, required: true},
    profileImage: {type: String, required: true},
    NGOAdmin: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    NGOWorkers: [{type: Schema.Types.ObjectId, ref: 'User', required: true}],
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
})

const NGO = mongoose.model<INGO>('NGO', ngoSchema);
export default NGO;
