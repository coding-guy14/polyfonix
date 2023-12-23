// AUTHENTICATION MODELS

import { UserModel } from "../userModels";
import { ArtworkModel } from "./HelperModels";

// BACKEND AUTH MODELS
export interface AuthUser {
  id: string;
  userDetails: UserModel;
  email: string;
  password: string;
  oldPasswords: string[];
  numSuccessfulLogins: number;
  numFailedLoginsSinceLastLogin: number;
  currentlyLoggedIn: Boolean;
}


export interface Session {
  token: string;
  userId: string;
  previousTokens: string[];
}

export interface TokenModel {
  token: string;
}

// FRONTEND AUTH MODELS
export interface NewUserConstructor {
  name: string;
  email: string;
  password: string;
}

export interface LoginUserConstructor {
  email: string;
  password: string;
}

// RETURN MODELS
export interface HTTPErrorModel {
  code: number;
  message: string;
  userPrompt: string;
}

export interface HTTPSuccessModel {
  code: number;
  message: string;
  token: string;
}