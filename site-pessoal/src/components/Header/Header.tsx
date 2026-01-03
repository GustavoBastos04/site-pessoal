import './style.css';
import DesktopNavbar from './DesktopNavbar/DesktopNavbar';
import MobileNavbar from './MobileNavbar/MobileNavbar';
import UseMediaQueryHook from './UseMediaQueryHook/UseMediaQueryHook';
function Header() {
    const isMobile = UseMediaQueryHook("(max-width: 750px)")
    return (
        <>
           {isMobile ? <MobileNavbar/> : <DesktopNavbar/>}         
        </>
    )

}

export default Header;