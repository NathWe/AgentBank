const Transaction = require('../database/models/transactionModel');

exports.getTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.find({ userId: req.user.id });
        res.status(200).json(transactions);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch transactions' });
    }
};

exports.createTransaction = async (req, res) => {
    try {
        const transaction = new Transaction({
            ...req.body,
            userId: req.user.id,
        });
        await transaction.save();
        res.status(201).json(transaction);
    } catch (error) {
        res.status(500).json({ message: 'Failed to create transaction' });
    }
};

exports.updateTransaction = async (req, res) => {
    try {
        const transaction = await Transaction.findOneAndUpdate(
            { _id: req.params.id, userId: req.user.id },
            req.body,
            { new: true }
        );
        res.status(200).json(transaction);
    } catch (error) {
        res.status(500).json({ message: 'Failed to update transaction' });
    }
};

exports.deleteTransaction = async (req, res) => {
    try {
        await Transaction.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
        res.status(204).json({ message: 'Transaction deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete transaction' });
    }
};
