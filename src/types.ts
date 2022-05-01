export type ThemeType = 'light' | 'dark'

export type PreferredThemeType = 'dark' | 'light' | 'default' | null

export interface ColorSchemeType {
	dark: '(prefers-color-scheme: dark)'
	light: '(prefers-color-scheme: light)'
	default: '(prefers-color-scheme: no-preference)'
}

export interface ThemeContextType {
	theme: ThemeType | null
	toggleTheme: () => void
}

export interface ProviderProps {
	children?: React.ReactNode
}

export type HookType = [theme: ThemeType | null, toggleTheme: () => void] | undefined
