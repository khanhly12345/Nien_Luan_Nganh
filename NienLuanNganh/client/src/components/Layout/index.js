import { Outlet } from "react-router-dom";
import Header from '../Header'
import Footer from '../Footer'
import GlobalStyle from '../GlobalStyle';
function Layout() {
    return (
        <div className="layout">
            <GlobalStyle>
                <Header />
                    <Outlet />
                <Footer />
            </GlobalStyle>
        </div>
    )
}

export default Layout;