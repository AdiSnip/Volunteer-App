import mongoose, {Schema , Document} from "mongoose";

export interface IDonation extends Document {
    PaidBy: mongoose.Types.ObjectId;
    campaign: mongoose.Types.ObjectId;
    amount: number;
    createdAt: Date;
    updatedAt: Date;
}

const donationSchema: Schema<IDonation> = new Schema({
    PaidBy: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    campaign: {type: Schema.Types.ObjectId, ref: 'Campaign', required: true},
    amount: {type: Number, required: true},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
})

const Donation = mongoose.model<IDonation>('Donation', donationSchema);
export default Donation;
