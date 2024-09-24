const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        title: String,
        amount: Number,
        balance: String,
    },
    { timestamps: true }
);

module.exports = mongoose.model('Transaction', transactionSchema);
