<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-g">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WiFi Offload Service</title>
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet">

    <style>
        body {
            font-family: 'Inter', sans-serif;
            margin: 0;
            padding: 0;
            background-color: #1a1a2e;
            color: white;
            scroll-behavior: smooth;
        }
        .App {
            text-align: center;
        }
        .section {
            padding: 50px 20px;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            box-sizing: border-box;
        }
        #section1 {
            background-color: #162447;
        }
        #section2 {
            background-color: #1a1a2e;
        }
        .headline {
            font-size: 2.5rem;
            margin-bottom: 50px;
            line-height: 1.4;
        }
        .main-headline {
            font-weight: 700;
            color: #e43f5a;
        }
        .underline {
            text-decoration: underline;
            color: #afece7;
        }
        .step-list {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 30px;
            max-width: 1200px;
            width: 100%;
        }
        .step {
            background-color: rgba(255, 255, 255, 0.05);
            border-radius: 15px;
            padding: 20px;
            width: 300px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
            transition: transform 0.3s ease;
        }
        .step:hover {
            transform: translateY(-10px);
        }
        .step-image img {
            max-width: 100%;
            height: 150px;
            object-fit: cover;
            border-radius: 10px;
        }
        .step-text-parent {
            display: flex;
            align-items: center;
            margin-top: 15px;
        }
        .step-number {
            font-size: 2rem;
            margin-right: 15px;
        }
        .step-content {
            font-weight: bold;
            font-size: 1.1rem;
        }
        .step-content-lower {
            font-size: 0.9rem;
            color: #b8b8b8;
            margin-top: 5px;
        }
        .howsItWork {
            margin-top: 60px;
            cursor: pointer;
            font-size: 1.2rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
            transition: color 0.3s ease;
        }
        .howsItWork:hover {
            color: #afece7;
        }
        .down-arrow {
            width: 30px;
            animation: bounce 2s infinite;
        }
        @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
                transform: translateY(0);
            }
            40% {
                transform: translateY(-20px);
            }
            60% {
                transform: translateY(-10px);
            }
        }
        /* FAQ Styles */
        .faq-container {
            width: 100%;
            max-width: 800px;
        }
        .faq-row {
            border-bottom: 1px solid #333;
        }
        .faq-title {
            padding: 20px;
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 1.2rem;
            color: #afece7;
        }
        .faq-arrow {
            transition: transform 0.3s ease;
        }
        .faq-arrow.open {
            transform: rotate(90deg);
        }
        .faq-content {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.5s ease-in-out;
            padding: 0 20px;
            color: white;
            line-height: 1.6;
        }
        .faq-content p, .faq-content div {
            padding-bottom: 20px;
        }
        .faq-content a {
            color: #e43f5a;
        }
        .examples {
            display: flex;
            gap: 10px;
            margin-top: 10px;
            flex-wrap: wrap;
        }
        .example-image {
            width: 150px;
            height: 150px;
            object-fit: cover;
            border-radius: 8px;
        }
        form {
            display: flex;
            flex-direction: column;
            gap: 15px;
            text-align: left;
        }
        form label {
            display: flex;
            flex-direction: column;
            gap: 5px;
        }
        form input, form textarea {
            padding: 10px;
            border-radius: 5px;
            border: none;
            background-color: #333;
            color: white;
            font-family: 'Inter', sans-serif;
        }
        form button {
            padding: 12px;
            border: none;
            border-radius: 5px;
            background-color: #e43f5a;
            color: white;
            font-weight: bold;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }
        form button:hover {
            background-color: #d33a52;
        }
    </style>
</head>
<body>
    <div id="root"></div>

    <script type="text/babel">
        const { useState } = React;

        // Custom FAQ Component to replace the unresolved dependency
        const Faq = ({ data, styles }) => {
            const [openRows, setOpenRows] = useState({});

            const toggleRow = (index) => {
                setOpenRows(prev => ({ ...prev, [index]: !prev[index] }));
            };

            return (
                <div className="faq-container" style={{ backgroundColor: styles.bgColor }}>
                    {data.rows.map((row, index) => (
                        <div className="faq-row" key={index}>
                            <div className="faq-title" onClick={() => toggleRow(index)}>
                                <span style={{ color: styles.rowTitleColor }}>{row.title}</span>
                                <span className={`faq-arrow ${openRows[index] ? 'open' : ''}`} style={{ color: styles.arrowColor }}>▶</span>
                            </div>
                            <div className="faq-content" style={{ maxHeight: openRows[index] ? '500px' : '0' }}>
                                <div style={{ color: styles.rowContentColor }}>{row.content}</div>
                            </div>
                        </div>
                    ))}
                </div>
            );
        };

        const App = () => {
            const data = {
                rows: [
                    {
                        title: "What exactly do these devices do?",
                        content: <p>These devices are WiFi hotspots that boost cell carrier coverage. When a cell phone user from a partner carrier is nearby, their phone automatically connects to your hotspot. This offloads their data usage from the cellular network, giving them better speed and coverage.</p>,
                    },
                    {
                        title: "How is the hotspot installed?",
                        content: (
                            <>
                                <p>The WiFi hotspot is a small device that can be placed indoors near a window, or outdoors in a weather-proof enclosure. We handle the entire installation process for free.</p>
                                <div className='examples'>
                                    <img className='example-image' src='https://placehold.co/150x150/333/fff?text=Example+1' alt="Installation example 1" />
                                    <img className='example-image' src='https://placehold.co/150x150/333/fff?text=Example+2' alt="Installation example 2" />
                                    <img className='example-image' src='https://placehold.co/150x150/333/fff?text=Example+3' alt="Installation example 3" />
                                </div>
                            </>
                        )
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
                        content: (
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
                        )
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

            return (
                <div className="App">
                    <div className="section" id="section1">
                        <h1 className='headline'>
                            <span className='main-headline'>Provide better cell coverage to your community?</span> <br /> And get a <span className='underline'>free internet line</span> for it? Yes please. <br /> Get started in 3 steps:
                        </h1>
                        <div className='step-list'>
                            <div className='step' id='step-one'>
                                <div className='step-image'>
                                    <img src="https://placehold.co/300x150/162447/afece7?text=Step+1" className='step-bottom' alt="Buildings illustration" />
                                </div>
                                <div className="step-text-parent">
                                    <div id="step-number-one" className='step-number'>🛠</div>
                                    <div className="step-text">
                                        <div className="step-content">We set up</div>
                                        <div className="step-content-lower">a small WiFi hotspot in your building or on your roof, for free!</div>
                                    </div>
                                </div>
                            </div>
                            <div className='step' id='step-two'>
                                <div className='step-image'>
                                    <img src="https://placehold.co/300x150/162447/afece7?text=Step+2" className='step-top' alt="Data transfer illustration" />
                                </div>
                                <div className="step-text-parent">
                                    <div id="step-number-two" className='step-number'>📡</div>
                                    <div className="step-text">
                                        <div className="step-content">Carriers offload data</div>
                                        <div className="step-content-lower">to your hotspot, boosting their customers' data speeds.</div>
                                    </div>
                                </div>
                            </div>
                            <div className='step' id='step-three'>
                                <div className='step-image'>
                                    <img src="https://placehold.co/300x150/162447/afece7?text=Step+3" className='step-top' alt="Internet illustration" />
                                </div>
                                <div className="step-text-parent">
                                    <div id="step-number-three" className='step-number'>📶</div>
                                    <div className="step-text">
                                        <div className="step-content">Get Free Internet!</div>
                                        <div className="step-content-lower">We give you a new, free internet line that you have full control over.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div onClick={() => document.getElementById("section2").scrollIntoView({ behavior: 'smooth' })} className='howsItWork'>
                            <img className='down-arrow' src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 5v14m0 0l-7-7m7 7l7-7'/%3E%3C/svg%3E" alt="down arrow" />
                            How's it work?
                        </div>
                    </div>
                    <div className="section" id='section2'>
                        <Faq data={data} styles={styles} />
                        <iframe name="dummy" style={{ display: 'none' }}></iframe>
                    </div>
                </div>
            );
        };

        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<App />);
    </script>
</body>
</html>
