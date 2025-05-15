"use client"
import { useState } from 'react';

const useTheme = (init: string) => {
    const [theme, setTheme] = useState(init);

    const set = (theme: string) => {
        const root = document.getElementsByTagName('html')

        setTheme((_prevTheme) => {
            if (root) {
                root[0].classList.remove(_prevTheme)
                root[0].classList.add(theme)
            }
            return theme
        });

        document.cookie = `theme=${theme}; path=/; domain=${window.location.hostname}`;
    }

    return {
        theme,
        set
    };
};

export default useTheme;
