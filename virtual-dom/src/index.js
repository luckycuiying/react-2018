import React from './react/react';
import ReactDOM from './react/react-dom';

// let element = <h1 className="title" style={{ color: 'red', fontSize: '24px' }}>hello<span>word</span></h1>
let element = React.createElement('h1',
    { className: 'title', style: { color: 'red', fontSize: '50px' } },
    'hello',
    React.createElement('span', null, 'world')
);
//console.log(JSON.stringify(element));
//function Welcome(props){
//    return React.createElement('h1',{className:'title'},props.title);
//}
// class Welcome extends React.Component{
//     render(){
//         return React.createElement('h1',{className:'title'},this.props.title);
//     }
// }
ReactDOM.render(element, document.getElementById('root'));

