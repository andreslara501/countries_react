import { Countries } from "./countries/Countries";
import { Filter } from "./filter/Filter";
import './Home.scss';

const Home = () => {
    return (
        <div id="home">
            <Filter />
            <Countries />
        </div>
    );
};

export { Home }