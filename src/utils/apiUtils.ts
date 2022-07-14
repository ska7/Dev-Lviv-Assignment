import axios from 'axios';
import { CurrencyExchangeRate } from './../types';
import { popularCurrencies } from 'utils/currenciesEnum';

const API_URL = 'https://api.apilayer.com';

const headers = {
    apiKey: process.env.APILAYER_API_KEY,
};

export const getCurrentExchangeRates = async (
    baseCurrency: string
): Promise<CurrencyExchangeRate[]> => {
    const symbols = popularCurrencies.join(',');
    const url = `${API_URL}/exchangerates_data/latest?symbols=${symbols}&base=${baseCurrency}`;

    return await axios
        .get(url, {
            headers,
        })
        .then(({ data }) => {
            const exchangeRates: CurrencyExchangeRate[] = [];

            for (const [key, value] of Object.entries(data.rates)) {
                const currencyRate = {
                    name: key,
                    rate: value,
                };

                exchangeRates.push(currencyRate);
            }

            return exchangeRates;
        });
};
