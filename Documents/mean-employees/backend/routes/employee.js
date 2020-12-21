const express = require('express');
const router = express.Router();

const employeeController = require('../controllers/employee');
/*
router.get('/', (req, res) => {
    res.json({ //Luego angular puede tomar esto y entenderlo
        status: 'Api works!'
    })
});
*/

router.get('/', employeeController.getEmployees);

router.post('/', employeeController.createEmployee);

router.get('/:id', employeeController.getEmployee);

//actualizar
router.put('/:id', employeeController.updateEmployee);

router.delete('/:id', employeeController.deleteEmployee);

///////////////////////////////
module.exports = router;