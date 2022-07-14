import { useState, useEffect } from 'react';
import { getCurrentExchangeRates } from 'utils/apiUtils';

const useExchangeRates = (baseCurrency: string) => {
    const [exchangeRates, setExchangeRates] = useState([]);
    const [isLoadingRates, setLoadingRates] = useState(false);

    useEffect(() => {
        const fetchRates = async () => {
            try {
                setLoadingRates(true);
                const exchangeRates = await getCurrentExchangeRates(baseCurrency);
                setExchangeRates(exchangeRates);
            } catch (e) {
                console.log(e);
            } finally {
                setLoadingRates(false);
            }
        };

        fetchRates();
    }, [baseCurrency]);
    return { exchangeRates, isLoadingRates };
};

export default useExchangeRates;
