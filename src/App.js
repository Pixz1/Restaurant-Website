import './App.css';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import Reservation from './Pages/Reservation';
import Header from './Components/Header';
import Footer from './Components/Footer';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  	return (
		<BrowserRouter>
			<main>
				<Header/>
					<Routes>
						<Route path='/' element={<Home/>}/>
						<Route path='/menu' element={<Menu/>}/>
						<Route path='/reservation' element={<Reservation/>}/>
					</Routes>
				<Footer/>
			</main>		
		</BrowserRouter>
  	);
}

export default App;
