import AppBar from '@material-ui/core/AppBar';
import Search from '../Search'

const Header = () => {
    return (
        <AppBar position='fixed'>
            <Search />
        </AppBar>
    )
}

export default Header
