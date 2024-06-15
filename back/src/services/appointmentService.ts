import { AppDataSource } from '../config/data-source';
import Appointment from '../entities/Appointment';
import User from '../entities/User';

export const getAllAppointments = async (): Promise<Appointment[]> => {
  const appointmentRepository = AppDataSource.getRepository(Appointment);
  return await appointmentRepository.find();
};

export const getAppointmentById = async (id: number): Promise<Appointment | null> => {
  const appointmentRepository = AppDataSource.getRepository(Appointment);
  return await appointmentRepository.findOneBy({ id });
};

export const createAppointment = async (userId: number, date: Date, time: string): Promise<Appointment> => {
  const appointmentRepository = AppDataSource.getRepository(Appointment);
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ id: userId });
  if (!user) {
    throw new Error('User not found');
  }

  const newAppointment = appointmentRepository.create({ userId, date, time, status: true, description: '' });
  return await appointmentRepository.save(newAppointment);
};

export const cancelAppointment = async (id: number): Promise<Appointment | null> => {
  const appointmentRepository = AppDataSource.getRepository(Appointment);
  const appointment = await appointmentRepository.findOneBy({ id });

  if (appointment) {
    appointment.status = false;
    await appointmentRepository.save(appointment);
    return appointment;
  } else {
    return null;
  }
};
