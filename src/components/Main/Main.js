import { useQuery } from '@apollo/react-hooks'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { GET_MOVIE_QUERY } from '../../queries/GetMovie'
import { SEARCH_MOVIE_QUERY } from '../../queries/SearchMovie'
import { ACTIONS } from '../../redux/actions'
import Loading from '../Loading'

const Main = () => {
    const { loading, data, error } = useQuery(SEARCH_MOVIE_QUERY, {
        variables: {
            query: {
                query: 'Star',
            },
        },
    })

    const state = useSelector((state) => state)
    console.log('state: ', state);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({
            type: ACTIONS.SET_QUERY,
            payload: {
                query: 'sanyi',
            },
        })
    }, [])

    const getWikiPediaResults = async () => {
        try {
            const response = await axios.get(
                'https://en.wikipedia.org/w/api.php',
                {
                    params: {
                        action: 'query',
                        list: 'search',
                        srsearch: 'Nelson Mandela',
                        format: 'json',
                        origin: '*',
                    },
                }
            )
            console.log('response: ', response)
        } catch (e) {
            console.log('e: ', e)
        }
    }

    getWikiPediaResults()

    const results = data && data?.searchMovie?.results
    console.log('movies: ', results)
    return (
        <>
            {loading && <Loading />}
            {results && (
                <ul>
                    {results.map((movie, index) => (
                        <li key={index}>{movie.title}</li>
                    ))}
                </ul>
            )}
            {error && <>Some errors happen</>}
        </>
    )
}

export default Main
