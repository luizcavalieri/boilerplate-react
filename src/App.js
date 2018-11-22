import React from 'react';
import ReactDOM from 'react-dom';

import '../node_modules/normalize.css/normalize.css';
import './styles/styles.scss';
import './App.scss';
import Button from './_/atoms/Button/Button';



const App = () => {
 return (
   <div className={'outer-container'}>
     <p>This is a new boilerplate.</p>
     <Button
       label={'test'}

     />
   </div>
 )
};



ReactDOM.render(<App />, document.getElementById('app'));
