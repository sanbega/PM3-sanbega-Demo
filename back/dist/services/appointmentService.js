"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelAppointment = exports.createAppointment = exports.getAppointmentById = exports.getAllAppointments = void 0;
let appointments = [
    { id: 1, userId: 1, date: new Date('2024-06-01'), time: '10:00', status: true },
    { id: 2, userId: 2, date: new Date('2024-06-02'), time: '14:00', status: true }
];
const getAllAppointments = () => {
    return appointments;
};
exports.getAllAppointments = getAllAppointments;
const getAppointmentById = (id) => {
    return appointments.find(appointment => appointment.id === id);
};
exports.getAppointmentById = getAppointmentById;
const createAppointment = (userId, date, time) => {
    if (!userId) {
        throw new Error('User ID is required to create an appointment');
    }
    const newAppointment = {
        id: appointments.length + 1,
        userId,
        date,
        time,
        status: true
    };
    appointments.push(newAppointment);
    return newAppointment;
};
exports.createAppointment = createAppointment;
const cancelAppointment = (id) => {
    const appointment = appointments.find(appointment => appointment.id === id);
    if (appointment) {
        appointment.status = false;
        return appointment;
    }
    return undefined;
};
exports.cancelAppointment = cancelAppointment;
