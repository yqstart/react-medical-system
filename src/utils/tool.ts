export const serverUrl = "http://localhost:3006";

export const setToken = (token: string) =>
  sessionStorage.setItem("token", token);

export const geToken = () => sessionStorage.getItem("token");
