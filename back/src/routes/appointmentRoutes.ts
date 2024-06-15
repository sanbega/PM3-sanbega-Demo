import { Router } from 'express';
import { getAllAppointmentsController, getAppointmentByIdController, createAppointmentController, cancelAppointmentController } from '../controllers/appointmentController';

const router = Router();

// router.get('/appointments', getAllAppointmentsController);
// router.get('/appointment/:id', getAppointmentByIdController);
// router.post('/appointment/schedule', createAppointmentController);
// router.put('/appointment/cancel/:id', cancelAppointmentController);

router.get('/turns', getAllAppointmentsController);
router.get('/turns/:id', getAppointmentByIdController);
router.post('/turns/schedule', createAppointmentController);
router.put('/turns/cancel/:id', cancelAppointmentController);
export default router;
