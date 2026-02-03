import './App.css';
import TodoComponent from './Components/TodoComponent';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <TodoComponent />
               <Toaster
  position="top-center"
  toastOptions={{
    style: {
      background: '#a2ceea333',
      color: 'black',
    },
  }}
/>
    </div>
  );
  
}

export default App;
