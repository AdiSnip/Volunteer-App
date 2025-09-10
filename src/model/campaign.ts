import mongoose, { Schema , Document} from "mongoose";

export interface ICampaign extends Document {
    title: string;
    description: string;
    Category?: string;
    ngo: Schema.Types.ObjectId;
    collectedAmount: number;
    startDate: Date;
    endDate: Date;
    volunteers: Schema.Types.ObjectId[];
    createdAt: Date;
    updatedAt: Date;
}

const campaignSchema: Schema<ICampaign> = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    Category: { type: String, enum: ['Health', 'Education', 'Environment','Other'], required: true },
    ngo: { type: Schema.Types.ObjectId, ref: 'NGO', required: true },
    collectedAmount: { type: Number, default: 0 },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    volunteers: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const Campaign = mongoose.model<ICampaign>('Campaign', campaignSchema);
export default Campaign;
