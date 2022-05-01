import { ColorSchemeType, PreferredThemeType, ThemeType } from './types'

// perform async localstorage operations
export const asyncLocalStorage = {
    setItem: async function (key: string, value: string) {
        await Promise.resolve()
        localStorage.setItem(key, value)
    },
    getItem: async function (key: string) {
        await Promise.resolve()
        return localStorage.getItem(key)
    },
    removeItem: async function (key: string) {
        await Promise.resolve()
        return localStorage.removeItem(key)
    }
}

// get preferred system theme of the user. returned value: String: "dark", "light", "default"
export const getPreferredSystemTheme = (): PreferredThemeType => {
    let preferredTheme: PreferredThemeType = 'dark'

    const colorSchemes: ColorSchemeType = {
        dark: '(prefers-color-scheme: dark)',
        light: '(prefers-color-scheme: light)',
        default: '(prefers-color-scheme: no-preference)'
    }

    if (window.matchMedia) {
        Object.keys(colorSchemes).forEach((schemeName) => {
            if (window.matchMedia(colorSchemes[schemeName as keyof ColorSchemeType] as string).matches) {
                preferredTheme = schemeName as PreferredThemeType
            }
        })
    }

    return preferredTheme
}

// set global theme
export const setGlobalTheme = async (theme: ThemeType) => {
    document.body.className = theme
    await asyncLocalStorage.setItem('preferred___theme', theme)
}
