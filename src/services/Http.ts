import axios from 'axios'

const Http = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:3535' : 'https://tickers-b3.herokuapp.com/'
})

export default Http
