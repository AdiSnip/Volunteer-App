import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  password?: string;
  role: 'volunteer' | 'ngo';
  profilePicture?: string;
  bio?: string;
  contactInfo?: {
    phone?: string;
    address?: string;
  };
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['volunteer', 'ngo'], required: true },
  profilePicture: { type: String },
  bio: { type: String },
  contactInfo: {
    phone: { type: String },
    address: { type: String }
  }
});

export const User = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);