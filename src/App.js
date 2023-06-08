import { BrowserRouter as Router } from 'react-router-dom';
import Greetings from './components/Greetings';
import { Provider } from 'react-redux';
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