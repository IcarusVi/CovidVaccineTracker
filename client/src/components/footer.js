import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const Footer = () => {
    return (
        <div>
            <AppBar style={{alignItems: 'center', top:'auto', bottom: 0}}  position="fixed">
                <Toolbar style={{textAlign:'center'}}>
                    <h3>2021 &copy;	<a className='footerText' target='_blank' rel='noreferrer' href='https://github.com/IcarusVi'>IcarusVi</a></h3>
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default Footer;