

const head = React.createElement('h1',
 {id: 'head', style : {border: "1px solid red"}},
  "This is the text by react.");

const parent = React.createElement('div',
 {id: 'parent', style : {border: "1px solid green"}},
   [
        React.createElement('h1',
            {id: 'head', style : {border: "1px solid red"}},
            "child 1"
            ),
        React.createElement('h1',
            {id: 'head', style : {border: "1px solid red"}},
            "Child 2."
            ),
   ] );

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(root);
root.render(parent);