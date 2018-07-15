export interface IPasswordState {
  selectedPassword: IPassword | null;
  passwords: IPassword[];
}

export interface IPassword {
  id: string;
  website: string;
  email: string;
  note: string;
  login: string;
  value: string;
  name: string;
  alwaysLogMe: boolean;
}
