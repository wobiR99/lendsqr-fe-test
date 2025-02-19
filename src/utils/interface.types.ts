export interface User {
  id: number;
  name: string;
  dateJoined: string;
  phoneNumber: number;
  email: string;
  bankVerificationNumber: number;
  gender: string;
  children: number;
  residenceType: string;
  maritalStatus: string;
  education: string;
  employmentStatus: string;
  employmentSector: string;
  employmentDuration: number;
  officeEmail: string;
  monthlyIncome: number;
  loanRepayment: number;
  twitterUsername: string;
  facebookUsername: string;
  instagramUsername: string;
  guarantorName: string;
  guarantorPhoneNumber: number;
  guarantorEmail: string;
  guarantorRelationship: string;
  bankName: string;
  bankAccountNumber: number;
  savings: number;
  userStatus: string;
}

export interface Color {
  [key: string]: string;
}
