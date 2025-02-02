import { Models } from "node-appwrite";

// export interface Patient extends Models.Document {
//   userId: string;
//   name: string;
//   email: string;
//   phone: string;
//   birthDate: Date;
//   gender: Gender;
//   address: string;
//   occupation: string;
//   emergencyContactName: string;
//   emergencyContactNumber: string;
//   primaryPhysician: string;
//   insuranceProvider: string;
//   insurancePolicyNumber: string;
//   allergies: string | undefined;
//   currentMedication: string | undefined;
//   familyMedicalHistory: string | undefined;
//   pastMedicalHistory: string | undefined;
//   identificationType: string | undefined;
//   identificationNumber: string | undefined;
//   identificationDocument: FormData | undefined;
//   privacyConsent: boolean;
// }

export interface Patient extends Models.Document {
  userId: string;
  name: string;
  email: string;
  phone: string;
  birthDate: Date;
  gender: Gender;
  address: string;
  occupation: string;
  emergencyContactName: string;
  emergencyContactNumber: string;
  primaryPhysician: string;
  insuranceProvider: string;
  insurancePolicyNumber: string;
  allergies: string | undefined;
  currentMedication: string | undefined;
  familyMedicalHistory: string | undefined;
  pastMedicalHistory: string | undefined;
  identificationType: string | undefined;
  identificationNumber: string | undefined;
  identificationDocumentId: string | undefined; // Add this
  identificationDocumentUrl: string | undefined; // Add this
  privacyConsent: boolean;
  diclosureConsent: boolean; // Add this (fix spelling if needed)
  treatmentConsent: boolean; // Add this
}


export interface Appointment extends Models.Document {
  patient: Patient;
  schedule: Date;
  status: Status;
  primaryPhysician: string;
  reason: string;
  note: string;
  userId: string;
  cancellationReason: string | null;
}