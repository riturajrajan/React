import React from "react";
import { ReactDOM } from "react";

const heading = React.createElement('h1', {}, 'Welcome to react course');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);