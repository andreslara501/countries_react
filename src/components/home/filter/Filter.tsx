import { Searcher } from "./searcher/Searcher";
import { Region } from "./Region/Region";
import './Filter.scss';

const Filter = () => {
    return (
        <div id="filter">
            <Searcher />
            <Region />
        </div>
    );
};

export { Filter }