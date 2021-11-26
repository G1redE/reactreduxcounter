import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Counter from './components/Counter';
import counterReducer from './reducers/counterReducer';
import "./App.css";
const store = createStore(counterReducer)
function App() {
return (
<div className={"App"}>
<Provider store={store}>
<Counter />
</Provider>
</div>
);
}
export default App;