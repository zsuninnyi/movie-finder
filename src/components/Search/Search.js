import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { fade, makeStyles } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'
import InputBase from '@material-ui/core/InputBase'
import Container from '@material-ui/core/Container'

import { ACTIONS } from '../../redux/actions'

const useStyles = makeStyles((theme) => ({
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        margin: theme.spacing(2, 0),
        width: '30%',
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        width: '100%',
        transition: theme.transitions.create('width'),
        color: 'white',
    },
}))

const Search = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const [searchQuery, setSearchQuery] = useState('')

    useEffect(() => {
        dispatch({
            type: ACTIONS.SET_QUERY,
            payload: {
                query: searchQuery,
            },
        })
    }, [searchQuery, dispatch])
    return (
        <Container>
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                <InputBase
                    placeholder="Search…"
                    classes={{
                        root: classes.input,
                    }}
                    value={searchQuery}
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
        </Container>
    )
}

export default Search
