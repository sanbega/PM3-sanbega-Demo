import { AppDataSource } from '../config/data-source';
import Credential from '../entities/Credential';

export const createCredential = async (username: string, password: string): Promise<number> => {
  const credentialRepository = AppDataSource.getRepository(Credential);
  const newCredential = credentialRepository.create({ username, password });
  await credentialRepository.save(newCredential);
  return newCredential.id;
};

export const validateCredential = async (username: string, password: string): Promise<number | undefined> => {
  const credentialRepository = AppDataSource.getRepository(Credential);
  const credential = await credentialRepository.findOneBy({ username, password });
  return credential ? credential.id : undefined;
};
