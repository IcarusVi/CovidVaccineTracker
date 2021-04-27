import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const Header = () => {
    return (
        <div>
            <AppBar style={{alignItems: 'center'}}  position="static">
                <Toolbar style={{textAlign:'center'}}>
                    <h1>Covid Vaccine Tracker</h1>
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default Header;