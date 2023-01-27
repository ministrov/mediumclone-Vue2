import axios from "@/api/axios";

// Этот метод передает данные из формы, заполненные пользователем
const register = credentials => {
  return axios.post('/users', {user: credentials});
}

export default {
  register
}