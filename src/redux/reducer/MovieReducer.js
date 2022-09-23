import { AllMovies } from '../types/MoviesType'

const initalValue = {movies: [], pageCount: 0 }
export const moviesReducer = (state = initalValue, action) => {
    
    switch (action.type) {
        case AllMovies: 
            return { movies: action.data, pageCount: action.pages }
        
        default:
            return state;
    }
}
