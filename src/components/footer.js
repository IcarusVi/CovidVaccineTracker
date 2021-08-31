import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const Footer = () => {
    return (
        <div>
            <AppBar style={{alignItems: 'center', top:'auto', bottom: 0, paddingTop:'10px'}}  position="fixed">
                <Toolbar style={{textAlign:'center', display:'flex', flexDirection:'column'}}>
                    <a className='footerText' target='_blank' href="https://icons8.com/icon/26272/biotech">Biotech icon by Icons8</a>
                    <h3>2021 &copy;	<a className='footerText' target='_blank' rel='noreferrer' href='https://github.com/zachcyrus'>Zach Cyrus</a></h3>
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default Footer;