import  { useState, useEffect } from 'react';
// import logo
// import icons
import Dark from './Moon.svg'
import Light from './Sun.svg'


const DarkMode = () => {
    // theme state
    const [theme, setTheme] = useState('light');

    // if local storage is empty save theme as light
    useEffect(() => {
        if (localStorage.getItem('theme') === null) {
            localStorage.setItem('theme', 'light');
        }
    }, []);

    useEffect(() => {
        // select html elem
        const html = document.querySelector('html');
        //add or remove class dark in html elem according to theme in localstorage.
        if (localStorage.getItem('theme') === 'dark') {
            html.classList.add('dark');
            setTheme('dark');
        } else {
            html.classList.remove('dark');
            setTheme('light');
        }
    }, [theme]);

    // handle switch theme
    const handleThemeSwitch = () => {
        if (localStorage.getItem('theme') === 'light') {
            setTheme('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            setTheme('light');
            localStorage.setItem('theme', 'light');
        }
    };

    return (
        <div>
            <button onClick={handleThemeSwitch} className=" text-xl bg-accent text-white rounded-full w-12 h-12 flex justify-center items-center">
                {theme === 'light'
                    ? <figure className='bg-[#C1B17D] p-1 rounded-full'>
                        <img className='w-[30px]' src={Dark} alt="" />
                    </figure>
                    : <figure className='bg-[#C1B17D] p-1 rounded-full'>
                        <img className='w-[30px]' src={Light} alt="" />
                    </figure>
                }
            </button>
        </div>
    );
};

export default DarkMode;