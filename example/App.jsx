import { useDarkHook } from '../dist/index'

export default function App() {
    const [theme, toggleTheme] = useDarkHook()

    return (
        <h1>
            Hello world! current theme: {theme} <button onClick={toggleTheme}>change theme</button>
        </h1>
    )
}
