const apiPort = 30003;
const idDevelopment = window.location.hostname === "localhost";
const apiUrl = idDevelopment ? "http://localhost:" + apiPort : "/";

export const context = {
   "apiPort": apiPort,
   "idDevelopment": idDevelopment,
   "apiUrl": apiUrl
}
