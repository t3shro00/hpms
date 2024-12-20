import express from 'express';
import {
    createAppointmentController,
    getAppointmentsController,
    getAppointmentByIdController,
    updateAppointmentController,
    deleteAppointmentController
} from '../controllers/appointmentsController.js';

const router = express.Router();

router.post('/appointments', createAppointmentController);
router.get('/appointments', getAppointmentsController);
router.get('/appointments/:id', getAppointmentByIdController);
router.put('/appointments/:id', updateAppointmentController);
router.delete('/appointments/:id', deleteAppointmentController);


export default router;