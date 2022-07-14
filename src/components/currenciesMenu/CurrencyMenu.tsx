import * as React from 'react';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks/typedReduxHooks';
import { getBaseCurrency } from 'selectors/selectors';
import currenciesEnum from 'utils/currenciesEnum';
import { setBaseCurrencyAction } from '../../redux/actions';
import { Currency } from 'types';
import DownArrowIcon from 'icons/menu-arrow.svg';
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
            <DownArrowIcon />
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
    const optionCls = `currency-menu-option ${isSelected ? 'selected' : ''}`;
    return (
        <button
            type="button"
            onClick={() => handleOptionClick({ name: option, symbol })}
            className={optionCls}
        >
            <span>{symbol}</span>
            <p>{option}</p>
        </button>
    );
};

interface iCurrencyMenuOptions {
    currencies: { abbreviation: string; symbol: string }[];
    showMenu: boolean;
    selectedCurrency: Currency;
    handleOptionClick: (currency: Currency) => void;
}

const MenuOptions: React.FC<iCurrencyMenuOptions> = ({
    currencies,
    showMenu,
    selectedCurrency,
    handleOptionClick,
}) => {
    const [searchValue, setSearchValue] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {
            target: { value },
        } = e;
        setSearchValue(value);
    };

    const onOptionClick = (currency: Currency) => {
        setSearchValue('');
        handleOptionClick(currency);
    };
    return showMenu ? (
        <div className="currency-menu-options">
            <input
                value={searchValue}
                onChange={handleInputChange}
                placeholder="Search by code"
                maxLength={3}
                autoFocus
            />
            <ul>
                {currencies
                    .filter(({ abbreviation }) =>
                        abbreviation.includes(searchValue.toUpperCase())
                    )
                    .map(({ abbreviation, symbol }) => {
                        const isSelected = selectedCurrency.name === abbreviation;

                        return (
                            <MenuOption
                                key={symbol.concat(abbreviation)}
                                option={abbreviation}
                                symbol={symbol}
                                isSelected={isSelected}
                                handleOptionClick={onOptionClick}
                            />
                        );
                    })}
            </ul>
        </div>
    ) : null;
};

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
            <label>Base Currency</label>
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
