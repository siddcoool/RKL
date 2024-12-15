import mongoose from 'mongoose';

const magazineSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  coverImage: {
    type: String,
    required: true,
  },
  pdfUrl: {
    type: String,
    required: true,
  },
  publishDate: {
    type: Date,
    required: true,
  },
  isFeatured: {
    type: Boolean,
    default: false,
  },
}, { timestamps: true });

export default mongoose.models.Magazine || mongoose.model('Magazine', magazineSchema);