import { Provider } from 'react-redux';
import { store } from './store';


const ProviderCountries = function ({ children } : { children:any }) {
    return <Provider store={ store }> {children} </Provider>
}

export default ProviderCountries;