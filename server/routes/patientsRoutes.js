import express from 'express';
import {
    createPatientController,
    getPatientsController,
    getPatientByIdController,
    updatePatientController,
    deletePatientController
} from '../controllers/patientsController.js';

const router = express.Router();

router.post('/patients', createPatientController);
router.get('/patients', getPatientsController);
router.get('/patients/:id', getPatientByIdController);
router.put('/patients/:id', updatePatientController);
router.delete('/patients/:id', deletePatientController);

export default router;