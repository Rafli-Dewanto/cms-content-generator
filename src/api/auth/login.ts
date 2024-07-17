import Axios from "axios";
import apiResolver from "../api-resolver";

type LoginPayload = {
  email: string;
  password: string;
};

export interface Output {
  email: string;
  username: string;
  name: string;
  group: null;
  title: null;
  mailserver: string[];
  your_ip: string;
}

export interface LoginResponse {
  success: boolean;
  LDAP_Setting: boolean;
  output: Output;
  message: string;
}

export interface FailedLoginResponse {
  success: boolean;
  LDAP_Setting: boolean;
  message: string;
}

const baseURL = process.env.NEXT_PUBLIC_AUTH_URL_ENDPOINT_ALT;
const axios = Axios.create({
  baseURL,
});

export async function loginUser(data: LoginPayload) {
  return apiResolver<LoginResponse | FailedLoginResponse>(() =>
    axios.post("", data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
  );
}
