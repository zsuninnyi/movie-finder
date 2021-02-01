import { useEffect, useState } from 'react'
import axios from 'axios'
import Launch from '@material-ui/icons/Launch'
import { Typography } from '@material-ui/core'
import StyledLink from './Styled'
import { GET_SIMILAR_MOVIES_QUERY } from '../../queries/GetSimilarMovies'
import { useQuery } from '@apollo/client'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import { WIKIPEDIA_API_URL } from '../../config'

const getWikiPediaResults = async (title) => {
    try {
        const response = await axios.get(WIKIPEDIA_API_URL, {
            params: {
                action: 'query',
                list: 'search',
                srsearch: title,
                format: 'json',
                origin: '*',
                srlimit: 1,
            },
        })
        return response
    } catch (e) {}
}

const MovieDetails = ({ id, title }) => {
    const [wikiResults, setWikiResults] = useState(null)

    const { data } = useQuery(GET_SIMILAR_MOVIES_QUERY, {
        variables: {
            movie_id: id,
            page: 1,
        },
    })

    useEffect(() => {
        getWikiPediaResults(title).then((response) => setWikiResults(response))
    }, [title])

    return (
        <>
            {wikiResults?.data?.query?.search.map((result, index) => (
                <div key={index}>
                    <Typography variant="body2">
                        <span
                            dangerouslySetInnerHTML={{ __html: result.snippet }}
                        />
                    </Typography>
                    <StyledLink
                        href={`https://en.wikipedia.org/wiki/${result.title}`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Go to {result.title} Wikipedia page{' '}
                        <Launch fontSize="small" />
                    </StyledLink>
                    <StyledLink
                        href={`https://www.imdb.com/`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Wannabe IMDB Link
                        <Launch fontSize="small" />
                    </StyledLink>
                    <List>
                        Related movies:
                        {data?.getRecommendedMovies &&
                            data.getRecommendedMovies.results?.map(
                                (movie, index) => {
                                    return (
                                        <ListItem key={index}>
                                            {movie.title}
                                        </ListItem>
                                    )
                                }
                            )}
                    </List>
                </div>
            ))}
        </>
    )
}

export default MovieDetails
