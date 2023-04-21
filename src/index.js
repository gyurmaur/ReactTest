import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'tachyons';
import { models } from './models';
import TerminatorList from './components/terminator-list/terminator-list.component';


ReactDOM.render(
  <TerminatorList models = {models}/>,

  document.getElementById("root"));
