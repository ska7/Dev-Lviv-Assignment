import ExchangeRates from 'components/exchangeRates/ExchangeRates';
import CurrencyConverter from 'components/currencyConverter/CurrencyConverter';
import * as React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import AppLayout from 'components/appLayout/AppLayout';

const AppRouter = () => {
    const routes = useRoutes([
        {
            path: '/',
            element: <AppLayout />,
            children: [
                {
                    path: '/',
                    element: <Navigate to="converter" />,
                },
                {
                    path: 'converter',
                    element: <CurrencyConverter />,
                },
                { path: 'rates', element: <ExchangeRates /> },
            ],
        },
    ]);

    return routes;
};

export default AppRouter;
