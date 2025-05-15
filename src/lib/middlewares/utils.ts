import { cookies } from 'next/headers';

export function getThemeFromCookies(): Promise<'dark' | 'light'> {
    return new Promise((res, rej) => {
        cookies().then((cks) => {
            if (cks) {
                const cookies = (cks.get('theme')?.value as "dark" | "light") || "dark"
                res(cookies);
            }
            else {
                rej("No Cookies")
            }
        }).catch(e => rej(e))
    })
}