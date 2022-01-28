// TODO 2: SETUP ROUTING (ROUTER)
//Import Patient Controller
const PatientController = require("../controllers/PatientController");

//Import Express
const express  = require("express"); 

//Object Express
const router = express.Router();

//Validation
const { runValidation, validationCheck } = require('../validation');



//Routing home
router.get("/", (req, res) => {
    res.send("Hello Express")
});

//Routing student GET
router.get("/patients", PatientController.index);

//Routing student GET detail by id
router.get("/patients/:id", PatientController.show);

//Routing student GET detail by name
router.get("/patients/search/:name", PatientController.search);

//Routing student GET detail by status
router.get("/patients/status/:status", PatientController.findByStatus);

//Routing student POST
router.post("/patients", validationCheck, runValidation, PatientController.store);

//Routing student PUT
router.put("/patients/:id", PatientController.update);

//Routing student DELETE
router.delete("/patients/:id", PatientController.destroy);

//Export routing
module.exports = router;