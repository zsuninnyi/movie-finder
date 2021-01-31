import { gql } from 'apollo-boost'

export const GET_MOVIE_QUERY = gql`
    query GetMovie($movie_id: Int!) {
        getMovie(movie_id: $movie_id) {
            imdb_id
        }
    }
`
