import { POST } from "../utils/request";

type loginData = {
  userName: string;
  password: string;
};

export const loginApi = (data: loginData) => POST('/auth/admin_login', data);
