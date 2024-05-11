import { User } from "../model/user";
import { apiRequest } from "./request";

export const getUser = async (id: number): Promise<User> => {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    const options: RequestInit = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    };
  
    return apiRequest<User>(url, options);
  }
  