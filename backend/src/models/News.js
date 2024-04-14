import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();



const newsSchema = new mongoose.Schema({
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
    },
    summary: {
        type: String,
    },
    description: {
        type: String,
    },
    page_views: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }

}, {
    versionKey: false
});

newsSchema.methods.toJSON = function () {
    var obj = this.toObject();
    if (obj.image) {
        obj.image = process.env.PUBLIC_URL + "/news/" + obj.image;
    } else {
        obj.image = process.env.PUBLIC_URL + "/icons/notFound.png";
    }
    return obj;
}


export default mongoose.model('News', newsSchema);