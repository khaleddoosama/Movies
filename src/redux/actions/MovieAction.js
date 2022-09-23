import axios from 'axios'
import { AllMovies, movieApi} from '../types/MoviesType'

export const getAllMovie = () => {
    return async (dispatch) => {
        const res = await axios.get(movieApi)
        dispatch({ type: AllMovies, data: res.data.results, pages: res.data.total_pages });
    }
    
}

export const getMovieSearch = (word) => {
    return async (dispatch) => {
        const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=1fc003b346078076ec7c66e019eefd62&query=${word}&language=ar`)
        dispatch({ type: AllMovies, data: res.data.results, pages: res.data.total_pages });
    }
    
}

export const getPage = (page) => {
    return async (dispatch) => {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar&page=${page} `)
        dispatch({ type: AllMovies, data: res.data.results, pages: res.data.total_pages });
    }
    
}

