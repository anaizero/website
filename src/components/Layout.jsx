// src/components/Layout.js
import Footer from './Footer';
import Header from './Header';
import { Outlet, useLocation } from 'react-router-dom';


const Layout = () => {
    const location = useLocation();
    const isContactPage = location.pathname === "/contact";

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />
            <main className="container-fluid px-0">
                <div className="page-content fade-in">
                    <Outlet />
                </div>
            </main>
            <Footer
                hidebutto={isContactPage} />
        </div>
    );
};

export default Layout;
