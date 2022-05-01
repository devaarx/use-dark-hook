import * as React from 'react'
import { asyncLocalStorage, getPreferredSystemTheme, setGlobalTheme } from './helpers'
import { HookType, ProviderProps, ThemeContextType, ThemeType } from './types'

const ThemeContext = React.createContext<ThemeContextType | null>(null)

export function ThemeProvider({ children }: ProviderProps) {
	const [theme, setTheme] = React.useState<ThemeType | null>(null)

	async function initialSetup() {
		const userTheme = await asyncLocalStorage.getItem('preferred___theme')

		// user already have a preferred color scheme
		if (userTheme) {
			setTheme(userTheme as ThemeType)
			return
		}

		// if user don't have a preferred color scheme - set the system preferred theme
		const systemTheme = getPreferredSystemTheme()

		if (systemTheme === 'dark' || systemTheme === 'light') {
			setTheme(systemTheme)
			return
		}
	}

	function toggleTheme() {
		const setting: ThemeType = theme === 'dark' ? 'light' : 'dark'
		setTheme(setting)
	}

	React.useEffect(() => {
		initialSetup()
	}, [])

	React.useEffect(() => {
		if (!theme) return
		setGlobalTheme(theme)
	}, [theme])

	return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export function useDarkHook(): HookType {
	const contextValue = React.useContext(ThemeContext)
	if (!contextValue) return undefined
	const { theme, toggleTheme } = contextValue
	return [theme, toggleTheme]
}
