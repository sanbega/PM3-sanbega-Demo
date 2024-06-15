"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelAppointmentController = exports.createAppointmentController = exports.getAppointmentByIdController = exports.getAllAppointmentsController = void 0;
const appointmentService_1 = require("../services/appointmentService");
const getAllAppointmentsController = (req, res) => {
    const appointments = (0, appointmentService_1.getAllAppointments)();
    res.json(appointments);
};
exports.getAllAppointmentsController = getAllAppointmentsController;
const getAppointmentByIdController = (req, res) => {
    const appointmentId = parseInt(req.params.id);
    const appointment = (0, appointmentService_1.getAppointmentById)(appointmentId);
    if (appointment) {
        res.json(appointment);
    }
    else {
        res.status(404).send('Appointment not found');
    }
};
exports.getAppointmentByIdController = getAppointmentByIdController;
const createAppointmentController = (req, res) => {
    const { userId, date, time } = req.body;
    try {
        const newAppointment = (0, appointmentService_1.createAppointment)(userId, new Date(date), time);
        res.status(201).json(newAppointment);
    }
    catch (error) {
        res.status(400).send(error.message);
    }
};
exports.createAppointmentController = createAppointmentController;
const cancelAppointmentController = (req, res) => {
    const appointmentId = parseInt(req.params.id);
    const appointment = (0, appointmentService_1.cancelAppointment)(appointmentId);
    if (appointment) {
        res.json({ message: 'Appointment cancelled successfully', appointment });
    }
    else {
        res.status(404).send('Appointment not found');
    }
};
exports.cancelAppointmentController = cancelAppointmentController;
