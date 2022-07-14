import CurrencyMenu from 'components/currenciesMenu/CurrencyMenu';
import NavBar from 'components/navbar/NavBar';
import * as React from 'react';
import { Outlet } from 'react-router-dom';
import './appLayout.less';

const AppLayout = () => {
    return (
        <div className="app">
            <header className="app-header">
                <CurrencyMenu />
                <NavBar />
            </header>
            <main className="app-body">
                <Outlet />
            </main>
        </div>
    );
};

export default AppLayout;
