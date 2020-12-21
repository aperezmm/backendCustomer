//Controlador

const employeeController = {};
const employeeModel = require('../models/employee');//consultas a la base de datos

employeeController.getEmployees = async (req, res) =>{
    //consultar a la base de datos
    const employees = await employeeModel.find() //esto va a tomar tiempo (await) pero cuando termine lo guardaras en
    res.json(employees);
};

employeeController.getEmployee = async (req, res) =>{
    const employee = await employeeModel.findById(req.params.id);
    res.json(employee);
}; //Obtiene un empleado en especifico

employeeController.createEmployee = async (req, res) => {
    const employee = new employeeModel(req.body);
    await employee.save();
    res.json({
        'status': 'Employee successfully created'
    });

};

employeeController.updateEmployee = async(req, res) => {
    const {id} = req.params;
    //employeeModel.findByIdAndUpdate(req.params.id)
    const employee = {
        name : req.body.name,
        position : req.body.position,
        office : req.body.office,
        salary : req.body.salary
    };
    await employeeModel.findByIdAndUpdate(id, {$set: employee }, {new: true});
    res.json({
        status: 'Employee updated'
    });
};
employeeController.deleteEmployee = async (req, res) => {
    await employeeModel.findByIdAndDelete(req.params.id);
    res.json({status: 'Employee deleted'});
}

module.exports = employeeController;