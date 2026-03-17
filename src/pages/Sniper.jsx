import sniper_s1 from '../assets/images/sniper_s1.png';
import sniper_s2 from '../assets/images/sniper_s2.png';
import sniper_s3 from '../assets/images/sniper_s3.png';
import sniper_bot from '../assets/images/sniper_bot.png';

const Sniper = () => {
    return (
        <div className="project-page sniper">
            <div className="project-divider">
                <p>SNIPER BOT</p>
                <div className="divider"></div>
            </div>
            <h2 style={{marginTop: "0px"}}>What is Sniping?</h2>
            <p>Among my college friends, sniping refers to taking pictures of each other out in the wild. The Seventeen Sacred Sniping Standards (SSSS) define sniping as “a secret photo of another person. The sniper is the one who snipes, and the sniped is the victim.”</p>
            <p><a href="https://docs.google.com/document/d/1MafYDyMupO4o46oX_hl3f-r5wFzZ6BIiS3MdWViaAEA/edit?usp=sharing" target="_blank" style={{color: "blue"}}>Here</a> is a more detailed document outlining the rules, but at its core sniping just a fun game to do in-between classes.</p>
            <h2>How I Built Sniper Bot</h2>
            <p>Sniper Bot is my first-ever Discord bot project built with NodeJS. It tracks all statistics related to sniping for each user, including snipe count, death count, kill-death-ratio, and overall points. It also handles flags for “illegal” snipes.</p>
            <p>How points are scored changes a lot between semesters in “seasons”, and each new mechanic involved always introduces new problems to fix!</p>
            <img draggable="false" src={sniper_bot} alt="sniper bot" style={{height: "400px", width: "auto", margin: "auto", display: "block"}}/>
            <h2>Season 1 (Spring 2025)</h2>
            <p>The points system was simple for Season 1:</p>
            <ul>
                <li>KDR = snipe count / death count</li>
            </ul>
            <p>To keep things consensual, only people with the “sniper” role were considered by the bot to be a sniper. There are also designated “high snipresses” who have permission to illegalize snipes by reacting with :black-flag: if the SSSS were violated.</p>
            <p>All statistics were stored in a local json file, with the bot itself hosted on my roommates’ raspberry pi.</p>
            <img draggable="false" src={sniper_s1} alt="snipe season 1"/>
            <h2>Season 2 (Fall 2025)</h2>
            <p>This season’s “gimmick” was bounties. Each day, a random sniper was chosen to be a bounty, and sniping them first would yield a higher amount of points. If the sniper survived until the end of the day, they would receive their own bonus.</p>
            <p>Points system:</p>
            <ul>
                <li>+2 per snipe</li>
                <li>-1 per death</li>
                <li>-1 per illegal snipe</li>
                <li>+7 for bounty snipe</li>
                <li>+11 for bounty survival</li>
                <li>-3 for illegal bounty snipe</li>
            </ul>
            <p>Bot hosting switched to <a href="https://render.com" target="_blank" style={{color: "blue"}}>Render.com</a>, which was a recurring issue throughout the season due to random crashes and outages on Render’s side. This meant I had to manually update the json file each time the bot crashed, since the json file used for stats was only updated locally.</p>
            <img draggable="false" src={sniper_s2} alt="snipe season 2"/>
            <h2>Season 3 (Spring 2026)</h2>
            <p>This season featured Marks. At the beginning of the season, three snipers were randomly assigned a “Mark”. Each snipe as a Marked player yielded more points, while sniping a Marked person would steal their Mark, and yield you an amount of points equal to the number of snipes that person obtained as Mark. Essentially, it was a bounty that accumulates depending on how well the Marked person does, referred to as their “accumulation”.</p>
            <p>Points system:</p>
            <ul>
                <li>+2 per snipe</li>
                <li>-1 per death</li>
                <li>-1 per illegal snipe</li>
                <li>+3 per snipe with the “Mark”</li>
                <li>+[accumulation] for sniping a “Marked” player</li>
            </ul>
            <p>To remedy the issues with <a href="https://render.com" target="_blank" style={{color: "blue"}}>Render.com</a>, I purchased my own Raspberry Pi Zero 2 W for hosting the bot and made the stats available on <a href="https://firebase.com" target="_blank" style={{color: "blue"}}>Firebase</a> for easy updating.</p>
            <img draggable="false" src={sniper_s3} alt="snipe season 3"/>
        </div>
    )
}

export default Sniper