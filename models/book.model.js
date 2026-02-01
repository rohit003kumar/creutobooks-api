const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    name: { type: String, required: true, index: true },
    description: {
        type: String,
        required: true,
        maxlength: 2000
    },
    author: { type: String, required: true, index: true },
    publishDate: { type: Date, index: true },
}, { timestamps: true }
);

bookSchema.index({ name: 'text', description: 'text' });

module.exports = mongoose.model('Book', bookSchema);