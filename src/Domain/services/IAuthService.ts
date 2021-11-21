import { Auth } from '../models/Auth'
import { IResponse } from './IResponse'

export interface SignInParams { }

export interface SignUpParams { }

export interface IAuthService {
  sigIn(data: SignInParams): Promise<IResponse<Auth>>;
  sigUp(data: SignUpParams): Promise<IResponse<boolean>>;
  sigOut(): Promise<IResponse<boolean>>;
  // sigInWithGoogle(): Promise<IResponse>;
  // sigInWithFacebook(): Promise<IResponse>;
}
