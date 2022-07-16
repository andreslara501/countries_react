import { useAppSelector, useAppDispatch } from "../../../../app/hooks";
import { toggleModeTheme, selectTheme  } from "../../../../app/countries.slice";
import './ToggleColors.scss';
import moonLigth from '../../../../assets/moonLigth.svg';
import moonDark from '../../../../assets/moonDark.svg';

const ToggleColors = () => {
    const theme = useAppSelector(selectTheme);
    const dispatch = useAppDispatch();

    const toggleColor = (): void => {
        dispatch(toggleModeTheme());
    }

    return (
        <button type="button" onClick={ () => toggleColor() }>
            <img
                src={ theme === 'light' ? moonLigth : moonDark }
                alt=""
                style={ { filter: theme === 'dark' ? 'invert(1)' : '' } }
            />
            { theme[0].toUpperCase() }{ theme.substring(1) } Mode
        </button>
    );
};

export { ToggleColors }