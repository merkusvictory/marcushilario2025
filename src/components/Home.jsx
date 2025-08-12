import { useState, useEffect } from 'react'

const Home = () => {

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
        <div className="home">
            <div className="home-header">
                <div>
                    <p>{time}</p>
                    <p>{date}</p>
                    <p>New York, NY</p>
                </div>
                <button className="lightmode-button" onClick={handleLightMode}>☼</button>
            </div>
            <div className="home-divider">
                <p>README</p>
                <div className="divider"></div>
            </div>
            <div className="home-readme">
                <p>
                    Marcus is a developer finding ways to connect people through 
                    tech. He has previously designed file management systems 
                    at Libra Law and managed 50+ volunteers for a university robotics club.
                </p>
            </div>
            <div className="home-divider">
                <p>PROJECTS</p>
                <div className="divider"></div>
            </div>
            <div className="home-divider">
                <p>TECHNOLOGIES</p>
                <div className="divider"></div>
            </div>
            <div className="home-divider">
                <p>CONTACT</p>
                <div className="divider"></div>
            </div>
        </div>
    )
}

export default Home;