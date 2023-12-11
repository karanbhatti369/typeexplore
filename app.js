import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';




const Home = () => {
 return (
    <div>
      <h1>Welcome to Type Explorer</h1>
      <nav>
        <ul>
          <li>
            <Link to="/flowers">Flowers</Link>
          </li>
          <li>
            <Link to="/trees">Trees</Link>
          </li>
          <li>
            <Link to="/cars">Cars</Link>
          </li>
        </ul>
      </nav>
    </div>
 );
};

const Flowers = () => {
 const [selectedCategory, setSelectedCategory] = useState('Flowers');

 useEffect(() => {
    document.body.style.backgroundColor = 'blue';
 }, []);

 return (
    <div>
      <h1>{selectedCategory}</h1>
      <ul>
        {flowers.map((flower, index) => (
          <li key={index}>{flower}</li>
        ))}
      </ul>
    </div>
 );
};

const Trees = () => {
 const [selectedCategory, setSelectedCategory] = useState('Trees');

 useEffect(() => {
    document.body.style.backgroundColor = 'green';
 }, []);

 return (
    <div>
      <h1>{selectedCategory}</h1>
      <ul>
        {trees.map((tree, index) => (
          <li key={index}>{tree}</li>
        ))}
      </ul>
    </div>
 );
};

const Cars = () => {
 const [selectedCategory, setSelectedCategory] = useState('Cars');

 useEffect(() => {
    document.body.style.backgroundColor = 'red';
 }, []);

 return (
    <div>
      <h1>{selectedCategory}</h1>
      <ul>
        {cars.map((car, index) => (
          <li key={index}>{car}</li>
        ))}
      </ul>
    </div>
 );
};

const App = () => {
 return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/flowers" component={Flowers} />
        <Route path="/trees" component={Trees} />
        <Route path="/cars" component={Cars} />
      </Switch>
    </Router>
 );
};

export default App;
