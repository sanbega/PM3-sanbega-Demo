import { Request, Response } from 'express';
import { getAllAppointments, getAppointmentById, createAppointment, cancelAppointment } from '../services/appointmentService';

export const getAllAppointmentsController = async(req: Request, res: Response) => {
  const appointments = await getAllAppointments();
  res.json(appointments);
};

export const getAppointmentByIdController = async (req: Request, res: Response) => {
  const appointmentId = parseInt(req.params.id);
  const appointment = await getAppointmentById(appointmentId);
  if (appointment) {
    res.json(appointment);
  } else {
    res.status(404).send('Appointment not found');
  }
};

export const createAppointmentController = async (req: Request, res: Response) => {
  const { userId, date, time } = req.body;
  try {
    const newAppointment = await createAppointment(userId, new Date(date), time);
    res.status(201).json(newAppointment);
  } catch (error : any) {
    res.status(400).send(error.message);
  }
};

export const cancelAppointmentController = async (req: Request, res: Response) => {
  const appointmentId = parseInt(req.params.id);
  const appointment = await cancelAppointment(appointmentId);
  if (appointment) {
    res.json({ message: 'Appointment cancelled successfully', appointment });
  } else {
    res.status(404).send('Appointment not found');
  }
};
