import mongoose, { Schema, Document, Types } from 'mongoose';
import { IUser } from './user';

export interface ICampaign extends Document {
  ngo: Types.ObjectId | IUser;
  title: string;
  description: string;
  image?: string;
  startDate: Date;
  endDate: Date;
  location: string;
  volunteersNeeded: number;
  volunteers: Types.ObjectId[];
  donationGoal?: number;
  donationsReceived?: number;
}

const CampaignSchema: Schema = new Schema({
  ngo: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  location: { type: String, required: true },
  volunteersNeeded: { type: Number, required: true },
  volunteers: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  donationGoal: { type: Number, default: 0 },
  donationsReceived: { type: Number, default: 0 }
});

export const Campaign = mongoose.models.Campaign || mongoose.model<ICampaign>('Campaign', CampaignSchema);