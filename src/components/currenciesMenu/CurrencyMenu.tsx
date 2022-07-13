import * as React from 'react';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks/typedReduxHooks';
import { getBaseCurrency } from 'selectors/selectors';
import currenciesEnum from 'utils/currenciesEnum';
import { setBaseCurrencyAction } from '../../redux/actions';
import { Currency } from 'types';
import './currencyMenu.less';

interface iCurrencyMenuButton {
    selectedCurrency: Currency;
    toggleMenu: () => void;
}

const MenuButton: React.FC<iCurrencyMenuButton> = ({ selectedCurrency, toggleMenu }) => {
    return (
        <button type="button" className="menu-button" onClick={toggleMenu}>
            <span>{selectedCurrency.symbol}</span>
            <p>{selectedCurrency.name}</p>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                />
            </svg>
        </button>
    );
};

interface iCurrencyMenuOption {
    option: string;
    symbol: string;
    isSelected: boolean;
    handleOptionClick: (currency: Currency) => void;
}

const MenuOption: React.FC<iCurrencyMenuOption> = ({
    option,
    symbol,
    isSelected,
    handleOptionClick,
}) => {
    return (
        <button
            role="option"
            value={option}
            aria-selected={isSelected}
            type="button"
            onClick={() => handleOptionClick({ name: option, symbol })}
            className="currency-menu-option"
        >
            <span>{symbol}</span>
            <p>{option}</p>
        </button>
    );
};

interface iCurrencyMenuOptions {
    currencies: { abbreviation: string; symbol: string }[];
    showMenu: boolean;
    selectedCurrency: string;
    handleOptionClick: (currency: Currency) => void;
}

const MenuOptions: React.FC<iCurrencyMenuOptions> = ({
    currencies,
    showMenu,
    selectedCurrency,
    handleOptionClick,
}) =>
    showMenu ? (
        <ul className="currency-menu-options" role="listbox">
            {/* TODO: Implement search on key stroke */}
            {currencies.map(({ abbreviation, symbol }) => {
                const isSelected = selectedCurrency === abbreviation;

                return (
                    <MenuOption
                        key={symbol.concat(abbreviation)}
                        option={abbreviation}
                        symbol={symbol}
                        isSelected={isSelected}
                        handleOptionClick={handleOptionClick}
                    />
                );
            })}
        </ul>
    ) : null;

export const CurrencyMenu = () => {
    const [showMenu, setShowMenu] = useState(false);
    const dispatch = useAppDispatch();
    const baseCurrency = useAppSelector(getBaseCurrency);

    const toggleMenu = () => setShowMenu(!showMenu);

    const handleOptionClick = (currency: Currency): void => {
        dispatch(setBaseCurrencyAction(currency));
        toggleMenu();
    };

    return (
        <div className="currency-menu-container">
            <MenuButton selectedCurrency={baseCurrency} toggleMenu={toggleMenu} />
            <MenuOptions
                currencies={currenciesEnum}
                showMenu={showMenu}
                selectedCurrency={baseCurrency}
                handleOptionClick={handleOptionClick}
            />
        </div>
    );
};

export default CurrencyMenu;
