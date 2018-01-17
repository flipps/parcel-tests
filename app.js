import React from 'react';
import ReactDom from 'react-dom';
import './styles.scss';

const App = () => <div className="sass-test">Hey Parcel!</div>

ReactDom.render(<App />, 
  document.getElementById('root')
);

if (module.hot)
  module.hot.accept();