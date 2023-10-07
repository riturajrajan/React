const heading = React.createElement('h1', {}, 'Welcome to react course');
const heading2 = React.createElement('h2', {}, 'Welcome to react course');
const root = ReactDOM.createRoot(document.getElementById('root'));
const root2 = ReactDOM.createRoot(document.getElementById('root1'));
root.render(heading);
root2.render(heading2);