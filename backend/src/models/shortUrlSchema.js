import mogoose from "mongoose";

const shortUrlSchema = new mogoose.Schema({
  full: {
    type: String,
    required: true,
    },
    short: {
    type: String,
    required: true,
    index: true,
    unique: true,
    },
    clicks: {
    type: Number,
    required: true,
    default: 0,
    },
    userId:{
        type: mogoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    createdAt: {
    type: Date,
    default: Date.now,
    },
});
const urlSchema = mogoose.model('shortUrl', shortUrlSchema);
export default urlSchema;