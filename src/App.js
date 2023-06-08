import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Greetings from './components/Greetings';
import store from './redux/configStore';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Greetings />
      </Router>
    </Provider>
  );
}

export default App;
