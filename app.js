import React from 'react';
import ReactDom from 'react-dom';
import './styles.scss';

const App = () => <h1 className="sass-test">Hey, React!</h1>

ReactDom.render(<App />, 
  document.getElementById('root')
);

if (module.hot)
  module.hot.accept();