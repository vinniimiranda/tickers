import axios from 'axios'

const Http = axios.create({
  baseURL: 'http://localhost:3535'
})

export default Http
