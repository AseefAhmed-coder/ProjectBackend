// Express router
const express = require('express');
const router = express.Router();
let Employees = require('../schemas/Employees');

router.put('/:id', async (req, res) => {
    try {
        const employee = await Employees.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!employee) {
            return res.status(404).send('Client not found');
        }
        res.send('Client updated successfully');
    } catch (err) {
        console.error(err);
        res.status(500).send(`Error updating Client: ${err.message}`);
    }
});

module.exports = router;
