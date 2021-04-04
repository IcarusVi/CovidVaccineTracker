import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const Header = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <h1>Covid Vaccine Tracker</h1>
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default Header;