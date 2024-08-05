import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/home';
import { ThemeProvider } from 'state/theme/theme-context';
import { RestaurantProvider } from 'state/restaurants/restaurants-context';


function App() {


  return (
    <div className="App">
      <ThemeProvider>
        <RestaurantProvider>  
          <Home/>
        </RestaurantProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
