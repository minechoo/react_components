import { Route, Routes } from 'react-router-dom';
import { useRef } from 'react';
import './App.css';
import './scss/style.scss';

import Main  from './components/main/Main'

import { About } from './components/sub/About';
import { Info } from './components/sub/Info';
import Location from './components/sub/Location';
import { Community } from './components/sub/Community';
import Discussions from './components/sub/Discussions';
import Events from './components/sub/Events';
import { Counter } from './components/sub/Counter';
import { InputText } from './components/sub/InputText';
import { MultipleText } from './components/sub/MultipleText';
import { UserList } from './components/sub/UserList';
import Login from './components/common/Login'

import Header from './components/common/Header';

import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

function App() {
	const menu = useRef(null);
	return (
		<div className='App'>
			<Header type={'sub'} menu={menu} />

			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/about' element={<About />} />
				<Route path='/about/info' element={<Info />} />
				<Route path='/about/location' element={<Location />} />
				<Route path='/community' element={<Community />} />
				<Route path='community/discussions' element={<Discussions />} />
				<Route path='/community/events' element={<Events />} />
				<Route path='/counter' element={<Counter />} />
				<Route path='/input' element={<InputText />} />
				<Route path='/multi' element={<MultipleText />} />
				<Route path='/list' element={<UserList />} />
				<Route path='/login' element={<Login />} />
			</Routes>
		</div>
	);
}

export default App;

