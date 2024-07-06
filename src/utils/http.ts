import axios, { type AxiosInstance } from 'axios';
export const BASE_ENDPOINT = 'http://localhost:8080/api';

class Http {
  // private refreshToken: string;
  // private refreshTokenRequest: Promise<string> | null;
  public instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: BASE_ENDPOINT,
      timeout: 15000,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}

const http = new Http().instance;

export default http;
