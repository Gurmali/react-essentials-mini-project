import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreeting';
import StatefulGreetingWithCallback from './components/StatefulGreetingWithCallback';
import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState';

function App() {
  return (
    <div className="App">
      <FunctionalGreeting />
      <FunctionalGreetingWithProps greeting="Nice to meet you" name="paul" age="old" />
      <StatefulGreeting greeting="I'm a stateful class component!" name="Paul" /> 
      <StatefulGreetingWithCallback greeting="I'm a stateful class component!(with Call Back)" name="Paul" />
      <StatefulGreetingWithPrevState greeting="I'm a stateful class component!(With Previous State)" name="Paul" />
    </div>
  );
}

export default App;
