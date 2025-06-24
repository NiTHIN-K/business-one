import { useState } from 'react';
import './App.css';
import Faq from "react-faq-component";
import stepOne from './images/stepone.png';
import stepOneBuildings from './images/stepone-buildings.png';
import stepTwo from './images/steptwo.png';
import stepThree from './images/stepthree.png';
import downArrow from './images/down-arrow.png';

const data = {
    rows: [
        {
            title: "What exactly do these devices do?",
            content: <p>These devices are WiFi hotspots that boost cell carrier coverage. When a cell phone user from a partner carrier is nearby, their phone automatically connects to your hotspot. This offloads their data usage from the cellular network, giving them better speed and coverage.</p>,
        },
        {
            title: "How is the hotspot installed?",
            content:
                <>
                    <p>The WiFi hotspot is a small device that can be placed indoors near a window, or outdoors in a weather-proof enclosure. We handle the entire installation process for free.</p>
                    <div className='examples'>
                        <img className='example-image' src='https://cdn.discordapp.com/attachments/951232662436204605/979156620372226129/WhatsApp_Image_2022-05-25_at_8.00.21_PM.jpeg' alt="Installation example 1"></img>
                        <img className='example-image' src='https://cdn.discordapp.com/attachments/951232662436204605/994362702485008395/IMG_2830.jpg' alt="Installation example 2"></img>
                        <img className='example-image' src='https://cdn.discordapp.com/attachments/951232662436204605/1006022517607116882/123_1.jpg' alt="Installation example 3"></img>
                    </div>
                </>
        },
        {
            title: "How much does it cost to install? Does it cost me anything to run or use?",
            content: `Our service is completely free. We take care of installation and maintenance. In exchange for hosting, you get a free, dedicated internet line. The only thing you provide is a place to mount the device and the power to run it.`
        },
        {
            title: "What do I get for hosting a device?",
            content: `Instead of a cash payment, we provide you with a completely new, free ISP line. You have full control over this second internet connection. You can use it as a backup for your primary internet, offer it as a free guest WiFi network, or even switch over to it completely and save money on your current internet bill!`
        },
        {
            title: "Is the internet line really free?",
            content: `Yes, completely free. We get paid by the mobile carriers for offloading their cellular traffic. That payment allows us to cover the cost of providing you with a high-speed internet line at no charge for as long as you host the device.`,
        },
        {
            title: "What if my installation site doesn't have ethernet access?",
            content: `Our main installation includes its own internet connection, so no existing ethernet is required. We handle everything.`
        },
        {
            title: "I'm interested! How do I get started?",
            content:
                <form
                    action="https://formbold.com/s/3L5ko"
                    method="POST"
                    target="dummy">
                    <label>
                        Your email address:
                        <input type="email" name="email" />
                    </label>
                    <label>
                        Describe your potential location, and ask any questions you need answered:
                        <textarea name="message"></textarea>
                    </label>
                    <button type="submit">Send</button>
                </form>
        }
    ]
};

const styles = {
    bgColor: 'rgba(0,0,0,0.3)',
    titleTextColor: "#afece7",
    rowTitleColor: "#afece7",
    rowContentColor: 'white',
    arrowColor: "white",
};

const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
};

function App() {
    let [open, setOpen] = useState(false);
    let customClass = "";
    if (open) {
        customClass = "open";
    }
    return (
        <div className="App">
            <div className="section" id="section1">
                <h1 className='headline'>
                    <span className='main-headline'>Provide better cell coverage to your community?</span> <br /> And get a <span className='underline'>free internet line</span> for it? Yes please. <br /> Get started in 3 steps:
                </h1>
                <div className='step-list'>
                    <div className='step' id='step-one'>
                        <div className='step-image'>
                            <div className='step-number-big'>1</div> {/* Big number for Step 1 */}
                        </div>
                        <div className="step-text-parent">
                            <div id="step-number-one" className='step-number'>
                                🛠
                            </div>
                            <div className="step-text">
                                <div className="step-content">We set up</div>
                                <div className="step-content-lower">a small WiFi hotspot in your building or on your roof, for free!</div>
                            </div>
                        </div>
                    </div>
                    <div className='step' id='step-two'>
                        <div className='step-image'>
                            <div className='step-number-big'>2</div> {/* Big number for Step 2 */}
                        </div>
                        <div className="step-text-parent">
                            <div id="step-number-two" className='step-number'>
                                📡
                            </div>
                            <div className="step-text">
                                <div className="step-content">Carriers offload data</div>
                                <div className="step-content-lower">to your hotspot, boosting their customers' data speeds.</div>
                            </div>
                        </div>
                    </div>
                    <div className='step' id='step-three'>
                        <div className='step-image'>
                            <div className='step-number-big'>3</div> {/* Big number for Step 3 */}
                        </div>
                        <div className="step-text-parent">
                            <div id="step-number-three" className='step-number'>
                                📶
                            </div>
                            <div className="step-text">
                                <div className="step-content">Get Free Internet!</div>
                                <div className="step-content-lower">We give you a new, free internet line that you have full control over.</div>
                            </div>
                        </div>
                    </div>

                </div>
                <div onClick={() => document.getElementById("howsItWork").scrollIntoView({ behavior: 'smooth' })} className='howsItWork' id='howsItWork'>
                    <img className='down-arrow' src={downArrow} alt="down arrow"></img>
                    How's it work?
                </div>
            </div>
            <div className="section" id='section2'>
                <Faq
                    data={data}
                    styles={styles}
                    config={config}
                />
                <iframe name="dummy" style={{ display: 'none' }}>
                </iframe>
            </div>
        </div>
    );
}

export default App;
