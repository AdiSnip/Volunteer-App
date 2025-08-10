import mongoose, { Schema, Document, Types } from 'mongoose';
import { IUser } from './user';
import { ICampaign } from './campaign';

export interface IDonation extends Document {
  donator?: Types.ObjectId | IUser;
  campaign: Types.ObjectId | ICampaign;
  amount: number;
  transactionId: string;
  date: Date;
}

const DonationSchema: Schema = new Schema({
  donator: { type: Schema.Types.ObjectId, ref: 'User' },
  campaign: { type: Schema.Types.ObjectId, ref: 'Campaign', required: true },
  amount: { type: Number, required: true },
  transactionId: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

export const Donation = mongoose.models.Donation || mongoose.model<IDonation>('Donation', DonationSchema);