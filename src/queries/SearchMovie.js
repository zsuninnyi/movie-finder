import { gql } from 'apollo-boost'

export const SEARCH_MOVIE_QUERY = gql`
    query SearchMovie($query: SearchMovieQuery!) {
        searchMovie(query: $query) {
            page
            results {
                id
                title
            }
            total_pages
            total_results
        }
    }
`
