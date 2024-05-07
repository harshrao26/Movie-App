import axios from 'axios'
const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    // timeout: 1000,
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMDI3OWM5OWU3Y2RkZjgzMzVjMThhZjc2NmQ3MmI2YiIsInN1YiI6IjY2MzFkMDg0MzU4ZGE3MDEyYTU0MTFiMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LTlncdGbX-BcxYemCgD8LReOuA8iOY9viOTSi-iPono'
    }
})

export default instance