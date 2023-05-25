const express = require('express')
const router = express.Router()
let Employees = require('../schemas/Employees')

//Delete employee by ID

router.delete('/:id', async (req, res) => {
    try {
        const employee = await Employees.findByIdAndDelete(req.params.id);
        if (!employee) {
            return res.status(404).send('Client not found');
        }
        res.send('Client deleted');
    } catch (err) {
        console.error(err);
    }
})

module.exports = router;