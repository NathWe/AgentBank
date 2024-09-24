const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');
const tokenValidation = require('../middleware/tokenValidation');

router.get('/', tokenValidation.validateToken, transactionController.getTransactions);
router.post('/', tokenValidation.validateToken, transactionController.createTransaction);
router.put('/:id', tokenValidation.validateToken, transactionController.updateTransaction);
router.delete('/:id', tokenValidation.validateToken, transactionController.deleteTransaction);

module.exports = router;
