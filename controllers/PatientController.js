// TODO 4: SETUP CONTROLLER
//Import model Patient
const Patient = require("../models/Patient");

//Buat Class Patient Controller
class PatientController {
    async index(req, res) {
        const patients = await Patient.all();

        if (patients == []) {
            const data = {
                message: "Data is empty",
                data: patients,
            };
            res.status(200).json(data);
        }

        else {
            const data = {
                message: "Get All Resource",
                data: patients,
            };
            res.status(200).json(data);
        }
    }

    async store(req, res) {
        const patients = await Patient.create(req.body);

        const data = {
            message: "Resource is added successfully",
            data: patients,
        };
        res.status(201).json(data);
    }

    async update(req, res) {
        const { id } = req.params;

        const patients = await Patient.find(id);

        if (patients) {
            //Update data
            const patientUpdated = await Patient.update(id, req.body);

            const data = {
                message: `Resource is update successfully`,
                data: patientUpdated,
            };

            res.status(200).json(data);
        } else {
            const data = {
                message: `Resource not found`,          
            }

            res.status(404).json(data);
        }
    }

    async destroy(req, res) {
        const { id } = req.params;

        const patient = await Patient.find(id);

        if (patient) {
            //Hapus data 
            await Patient.delete(id);

            const data = {
                message: "Resource is delete successfully",
            };

            res.status(200).json(data)
        } else {
            const data = {
                message: `Resource not found`,          
            }

            res.status(404).json(data);
        }
    }

    async show(req, res) {
        const { id } = req.params;

        const patient = await Patient.find(id);

        if (patient) {
            const data = {
                message: "Get Detail Resource",
                data: patient,
            };

            res.status(200).json(data)
        } else {
            const data = {
                message: `Resource not found`,          
            }

            res.status(404).json(data);
        }
    }

    async search(req, res) {
        const { name } = req.params;

        const patient = await Patient.search(name);

        if (patient) {
            const data = {
                message: "Get searched resource",
                data: patient,
            };

            res.status(200).json(data)
        } else {
            const data = {
                message: `Resource not found`,          
            }

            res.status(404).json(data);
        }
    } 
    
    async findByStatus(req, res) {
        const { status } = req.params;
        //console.log(status);

        const patient = await Patient.findByStatus(status);

        if (status == "positive") {
            const data = {
                message: "Get positive resource",
                data: patient,
            };

            res.status(200).json(data)

        } else if (status == "recovered") {
            const data = {
                message: "Get recovered resource",
                data: patient,
            };

            res.status(200).json(data)

        } else if (status == "dead") {
            const data = {
                message: "Get dead resource",
                data: patient,
            };

            res.status(200).json(data)

        } else {
            const data = {
                message: `Resource not found`,          
            }

            res.status(404).json(data);
        }
    }
}

//Object Patient Controller
const object = new PatientController();

//Export object
module.exports = object;