import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { makeStyles } from '@material-ui/core/styles'

import MovieDetails from '../MovieDetails'

const useStyles = makeStyles(() => ({
    root: {
        display: 'block',
    },
}))

const ResultList = ({ results }) => {
    const classes = useStyles()
    return (
        <div>
            {!results.length && <div>There is no result</div>}
            {results?.map((movie, index) => (
                <Accordion key={index}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>{movie.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.root}>
                        <MovieDetails id={movie.id} title={movie.title} />
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    )
}

export default ResultList
