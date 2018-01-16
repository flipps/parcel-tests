import React from 'react';
import ReactDom from 'react-dom';

const App = () => <div>Hey Parcel!</div>

ReactDom.render(<App />, 
  document.getElementById('root')
);

if (module.hot)
  module.hot.accept();