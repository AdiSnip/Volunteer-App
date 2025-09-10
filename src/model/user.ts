import mongoose , {Schema,Document} from "mongoose";

export interface IUser extends Document {
    name: string,
    email:string,
    password:string,
    role:string,
    address:string,
    phoneNumber:string,
    profileImage:string,
    joinedNGO: Schema.Types.ObjectId[],
    campaigns: Schema.Types.ObjectId[],
    donations: Schema.Types.ObjectId[],
    createdAt: Date,
    updatedAt: Date
}

const userSchema: Schema<IUser> = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    role: {type: String, enum: ['volunteer', 'admin', 'ngoWorker', 'ngo'], default: 'volunteer'},
    address: {type: String, required: true},
    phoneNumber: {type: String, required: true},
    profileImage: {type: String, required: true},
    joinedNGO: [{type: Schema.Types.ObjectId, ref: 'NGO'}],
    campaigns: [{type: Schema.Types.ObjectId, ref: 'Campaign'}],
    donations: [{type: Schema.Types.ObjectId, ref: 'Donation'}],
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
})

const User = mongoose.model<IUser>('User', userSchema);
export default User;