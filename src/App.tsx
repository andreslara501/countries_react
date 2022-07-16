import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/layouts/header/Header';
import { PublicRoutes } from './routes/PublicRoutes';
import { Theme } from './theme/Theme'
import ProviderCountries from './app/ProviderCountries'

function App() {
  return (
    <div className="App">
      <ProviderCountries>
        <Theme>
          <div id="header">
            <Header />
          </div>
          <BrowserRouter>
            <PublicRoutes />
          </BrowserRouter>
        </Theme>
      </ProviderCountries>
    </div>
  );
}

export default App;
