import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/landing'; //para que lo detecte, muevo la carpeta de pages dentro de src
import './App.css';

function App() {

//conexión al back
const [count, setCount] = useState(0)
useEffect(() => {
    fetch("http://localhost:3000")
        .then(res => res.text())
        .then(data => console.log(data));
}, []);

//plantilla que muestra
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Landing />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
