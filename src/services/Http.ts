import axios from 'axios'

const Http = axios.create({
  baseURL: 'https://tickers-b3.herokuapp.com'
})

export default Http
