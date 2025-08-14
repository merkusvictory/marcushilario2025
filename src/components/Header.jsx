import { useState, useEffect } from "react";

const Header = () => {
    const [lightMode, setLightMode] = useState(() => {
        const stored = localStorage.getItem("lightMode");
        return stored === null ? true : stored === "true";
    });

    useEffect(() => {
        localStorage.setItem("lightMode", lightMode);
    }, [lightMode]);

    const handleLightMode = () => {
        setLightMode((prev) => {
            const newMode = !prev
            const theme = newMode ? 'light' : 'dark'
            document.documentElement.setAttribute('data-theme', theme)
            return newMode
        })
    };

    const [time, setTime] = useState('');
    const [date, setDate] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const options = {
                timeZone: 'America/New_York',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false
            };
            const formattedTime = new Intl.DateTimeFormat('en-US', options).format(now);
            setTime(formattedTime);
        };

        const updateDate = () => {
            const now = new Date();
            const options = {
                timeZone: 'America/New_York',
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
            }
            const formattedDate = new Intl.DateTimeFormat('en-US', options).format(now);
            setDate(formattedDate);
        }

        updateTime();
        updateDate();
        const intervalId = setInterval(updateTime, 1000);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        const theme = lightMode ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', theme);
    }, [])

    return (
        <div className="header">
            <div>
                <p>{time}</p>
                <p>{date}</p>
                <p>New York, NY</p>
            </div>
            <div>
                <p>{lightMode ? 'light' : 'dark'}</p>
                <button className="lightmode-button" onClick={handleLightMode}>☼</button>
            </div>
        </div>
    )
}

export default Header