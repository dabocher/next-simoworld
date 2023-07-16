import { Schema, model, models } from "mongoose";

const CommunitySchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  discord: { type: String },
  website: { type: String },
});

const Community = models.Community || model("Community", CommunitySchema);

export default Community;
