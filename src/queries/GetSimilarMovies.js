import { gql } from 'apollo-boost'

export const GET_SIMILAR_MOVIES_QUERY = gql`
    query GetSimilarMovies($movie_id: Int!, $page: Int!) {
        getRecommendedMovies(movie_id: $movie_id, page: $page) {
            results {
                id
                title
            }
        }
    }
`
