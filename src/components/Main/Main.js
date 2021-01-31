import { useQuery } from '@apollo/react-hooks'
import { useSelector } from 'react-redux'

import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'

import { SEARCH_MOVIE_QUERY } from '../../queries/SearchMovie'
import Loading from '../Loading'
import ResultList from '../ResultList'

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(12),
    },
}))

const Main = () => {
    const state = useSelector((state) => state)
    const { loading, data, error } = useQuery(SEARCH_MOVIE_QUERY, {
        variables: {
            query: {
                query: state?.query,
            },
        },
        skip: !state?.query,
    })

    const classes = useStyles()


    const results = data && data?.searchMovie?.results

    return (
        <Box className={classes.root}>
            <Container>
                {loading && <Loading />}
                {results && <ResultList results={results} />}
                {!results && !error && !loading && (
                    <div>Type something into the searchbar</div>
                )}

                {error && <>Some errors happen</>}
            </Container>
        </Box>
    )
}

export default Main
