
import { cookies, headers } from 'next/headers';
export function getPathname(): Promise<string> {
    return new Promise((res, rej) => {
        headers().then((heads) => {
            const pathname = heads.get('next-url') || ""
            return res(pathname);
        }).catch(e => rej(e))
    })
}

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