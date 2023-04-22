import React from "react";
import TerminatorList from './components/terminator-list/terminator-list.component';
import { models } from './models.js';
import SearchBox from "./components/searchbox/searchbox.component";

const App = () =>{
    return(
        <div className="tc">
            <h1>Terminator modellek</h1>
            <SearchBox />
            <TerminatorList models={models}/>
        </div>

    );
}

export default App;