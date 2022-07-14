import * as React from 'react';
import useExchangeRates from 'hooks/useExchangeRates';
import { useAppSelector } from 'hooks/typedReduxHooks';
import { getBaseCurrency } from 'selectors/selectors';
import './exchangeRates.less';
import Loader from 'components/loader/Loader';

const Rates = () => {
    const { name: currencyName } = useAppSelector(getBaseCurrency);
    const { exchangeRates, isLoadingRates } = useExchangeRates(currencyName);

    if (isLoadingRates) return <Loader />;

    return (
        <div className="exchange-rates-container">
            <ul>
                {exchangeRates.map((currency) => (
                    <li key={currency.name}>
                        <p>{currency.name}</p>
                        <span>{currency.rate}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Rates;
