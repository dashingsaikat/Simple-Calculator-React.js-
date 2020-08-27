import React from 'react';
import ReactDOM from 'react-dom';
import sum,{sub,mul,div} from './Myapp.jsx';
ReactDOM.render(
  <>
    <ol>
      <li>Sum is {sum(20,30)} </li>
      <li>Substraction is {sub(50,10)}</li>
      <li>Multiplication is {mul(34,18)}</li>
      <li>Division is {div(25,70).toFixed(2)}</li>

    </ol>
  </>,document.getElementById('root')
);
