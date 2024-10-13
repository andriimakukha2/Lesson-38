import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

// Імпортуємо компоненти Button та Input
import Button from './components/Button'; // Шлях до вашого компонента кнопки
import Input from './components/Input'; // Шлях до вашого компонента поля введення

function App() {
    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState(''); // Стан для текстового поля

    const handleChange = (event) => {
        setInputValue(event.target.value); // Оновлюємо стан при зміні тексту
    };

    const handleClick = () => {
        alert(`Введений текст: ${inputValue}`); // Виводимо введений текст при натисканні кнопки
    };

    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>

                {/* Додаємо поле введення */}
                <Input placeholder="Введіть текст" onChange={handleChange} />

                {/* Додаємо кнопку */}
                <Button text="Показати введене" onClick={handleClick} />
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    );
}

export default App;
