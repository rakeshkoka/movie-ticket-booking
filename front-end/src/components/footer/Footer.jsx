import "./Footer.css";

function Footer() {
    return (
        <>
            <footer>
                <div className="w-full my-10" style={{ backgroundColor: '#333338' }}>

                    <div style={{ backgroundColor: '#404043' }}>
                        <div className="mx-auto w-11/12 md:w-3/4">
                            {/* Services */}
                            <div className="flex justify-evenly gap-x-52 p-3">

                                {/* customer care */}
                                <a href="#" className="flex flex-col items-center text-text-light w-20">
                                    {/* customer care svg */}
                                    <div className="w-12 h-12">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="-1 -1 102 102"
                                            id="icon-callcenter"
                                            width="100%"
                                            height="100%"
                                            style={{ fill: 'white' }}
                                        >
                                            <path d="M68.8 29.4c0-10.4-8.4-18.8-18.8-18.8S31.2 19 31.2 29.4 39.6 48.2 50 48.2s18.8-8.4 18.8-18.8zm-35.8 0c0-9.3 7.6-17 17-17 9.3 0 17 7.6 17 17 0 9.3-7.6 17-17 17-9.3 0-17-7.6-17-17z"></path>
                                            <path d="M24 30.3c.5 0 .9-.4.9-.9C24.9 15.6 36.2 4.3 50 4.3s25.1 11.3 25.1 25.1c0 13.1-10.5 28.3-24.2 29v-3.9c0-.5-.4-.9-.9-.9s-.9.4-.9.9v8.6c0 .5.4.9.9.9s.9-.4.9-.9v-2.9c14.7-.7 26-16.8 26-30.8C76.9 14.6 64.8 2.5 50 2.5S23.1 14.6 23.1 29.4c0 .5.4.9.9.9z"></path>
                                            <path d="M68.1 63c-.6-.2-1.2-.3-1.9-.3-.9 0-2.3.7-4.9 2.1-3.2 1.7-7.7 4-10.6 4-3.2 0-8-2.3-11.5-4-2.8-1.3-4.3-2-5.3-2-.7 0-1.3.1-1.9.3C16.7 68.2 11.2 86 11.2 96.7c0 .5.4.9.9.9H88c.5 0 .9-.4.9-.9 0-10.8-5.6-28.6-20.8-33.7zM13 95.7c.3-12.1 7.2-26.8 19.6-30.9.4-.1.8-.2 1.3-.2.6 0 2.7 1 4.5 1.9 3.9 1.9 8.7 4.2 12.3 4.2 3.3 0 7.8-2.3 11.4-4.2 1.6-.8 3.6-1.9 4.1-1.9s.9.1 1.3.2C79.9 68.9 86.7 83.6 87 95.7H13zm3.6-55.3c.5 0 .9-.4.9-.9V26.3c0-.5-.4-.9-.9-.9s-.9.4-.9.9v13.2c0 .5.4.9.9.9zm66.8 0c.5 0 .9-.4.9-.9V26.3c0-.5-.4-.9-.9-.9s-.9.4-.9.9v13.2c-.1.5.4.9.9.9z"></path>
                                        </svg>
                                    </div>
                                    {/* Text */}
                                    <div className="text-center text-xs mt-3 whitespace-nowrap">24/7 CUSTOMER CARE</div>
                                </a>


                                {/* resend ticket  */}
                                <a href="#" className="flex flex-col items-center text-text-light w-20">
                                    {/* resend ticket svg */}
                                    <div className="w-12 h-12">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="-1 -1 102 102"
                                            id="icon-resend"
                                            width="100%"
                                            height="100%"
                                            style={{ fill: 'white' }}
                                        >
                                            <path d="M92.1 69l-5.6-13.9a1 1 0 0 0-1.1-.5c-1.9.8-4.1-.2-4.8-2.1-.4-.9-.4-1.9 0-2.8.4-.9 1.1-1.6 2-2 .2-.1.4-.2.5-.4s.1-.4 0-.6l-5.6-13.9a1 1 0 0 0-1.1-.5L61 38.5l9-20.9c.2-.4 0-.9-.4-1.1L57 11.1c-.4-.2-.9 0-1.1.4a3.3 3.3 0 0 1-4.3 1.8c-.8-.3-1.4-1-1.8-1.8-.3-.8-.3-1.7 0-2.5.1-.2.1-.4 0-.6-.1-.2-.2-.4-.4-.5L36.8 2.6c-.4-.2-.9 0-1.1.4L12.3 58.2l-3.9 1.5c-.2.2-.4.3-.4.5-.1.2-.1.4 0 .6l5.6 13.9c.2.4.7.6 1.1.5 1.9-.7 4.1.2 4.8 2 .4.9.4 1.9 0 2.8s-1.1 1.6-2 2c-.2.1-.4.2-.5.4-.1.2-.1.4 0 .6l5.4 14c.1.2.2.4.4.5.1 0 .2.1.3.1.1 0 .2 0 .3-.1l68.1-27.3c.5-.2.7-.7.6-1.2zM36.9 4.4L48 9.1c-.2 1-.2 2 .2 3 .5 1.2 1.4 2.2 2.7 2.7 2.3 1 4.8.1 6.1-1.9l11.1 4.7-9.3 21.8-4.7 1.9L59 30.2l2.5-5.8c.1-.2.1-.4 0-.6s-.2-.4-.4-.5L38 13.5c-.2-.1-.4-.1-.6 0-.2.1-.4.2-.5.4L19.1 55.5l-4.7 1.9 22.5-53zm-1.4 16.7l.8.3c.1 0 .2.1.3.1.3 0 .6-.2.8-.5.2-.4 0-.9-.4-1.1l-.8-.3 1.8-4.3 21.6 9.2-1.8 4.3-.8-.4c-.4-.2-.9 0-1.1.4-.2.4 0 .9.4 1.1l.8.3-5.1 12-30.7 12.4 14.2-33.5zM23.7 95.6l-5-12.4c1-.6 1.7-1.4 2.2-2.5.6-1.3.6-2.8 0-4.1-.8-2-2.8-3.4-5-3.4-.4 0-.8 0-1.2.1L9.8 61l66.5-26.7 5 12.4c-1 .6-1.7 1.4-2.2 2.5a4.9 4.9 0 0 0 0 4.1c.8 2 2.8 3.4 5 3.4.4 0 .8 0 1.2-.1l5 12.4-66.6 26.6z"></path><path d="M70 42.1c-.1-.2-.2-.4-.4-.5-.2-.1-.4-.1-.6 0L20.2 61.2a1 1 0 0 0-.5 1.1L30 87.8c.1.2.2.4.4.5.1 0 .2.1.3.1.1 0 .2 0 .3-.1l42.3-17 6.4-2.6c.4-.2.6-.7.5-1.1L70 42.1zm3.5 27.3l-.3-.8a1 1 0 0 0-1.1-.5 1 1 0 0 0-.5 1.1l.4.8-34.2 13.7-.3-.7a1 1 0 0 0-1.1-.5 1 1 0 0 0-.5 1.1l.3.8-5.1 2-9.6-23.9 5.1-2 .3.8c.1.3.4.5.8.5.1 0 .2 0 .3-.1.4-.2.6-.7.5-1.1l-.3-.8 34.1-13.7.3.8c.1.3.4.5.8.5.1 0 .2 0 .3-.1.4-.2.6-.7.5-1.1l-.3-.8 4.9-2 9.6 23.9-4.9 2.1z"></path><path d="M30.6 65.7c-.2-.4-.7-.6-1.1-.5s-.6.7-.5 1.1l1.4 3.4c.1.3.4.5.8.5.1 0 .2 0 .3-.1.4-.2.6-.7.5-1.1l-1.4-3.3zm3.5 8.6a1 1 0 0 0-1.1-.5 1 1 0 0 0-.5 1.1l1.4 3.4c.1.3.4.5.8.5.1 0 .2 0 .3-.1.4-.2.6-.7.5-1.1l-1.4-3.3zm32.2-22.9a1 1 0 0 0-1.1-.5 1 1 0 0 0-.5 1.1l1.4 3.4c.1.3.4.5.8.5.1 0 .2 0 .3-.1.4-.2.6-.7.5-1.1l-1.4-3.3zm1.9 9.3l1.4 3.4c.1.3.4.5.8.5.1 0 .2 0 .3-.1.4-.2.6-.7.5-1.1L69.7 60a1 1 0 0 0-1.1-.5c-.4.2-.6.7-.4 1.2zm-19.5-34l3.1 1.3c.1 0 .2.1.3.1.3 0 .6-.2.8-.5.2-.4 0-.9-.4-1.1l-3.1-1.3c-.4-.2-.9 0-1.1.4-.3.4-.1.9.4 1.1zm-7.8-3.3l3.1 1.3c.1 0 .2.1.3.1.3 0 .6-.2.8-.5.2-.4 0-.9-.4-1.1l-3.1-1.3c-.4-.2-.9 0-1.1.4-.2.4 0 .9.4 1.1zm13.4 41.4c-.5 0-.8.4-.8.8 0 2.4-2 4.4-4.4 4.4s-4.4-2-4.4-4.4c0-2.3 1.9-4.2 4.2-4.3l-1.6 2.3c-.3.4-.2.9.2 1.2.1.1.3.1.5.1.3 0 .5-.1.7-.4l2.6-3.7c.3-.4.2-.9-.2-1.1L47.5 57c-.4-.3-.9-.2-1.2.2s-.2.9.2 1.2l1.9 1.4c-3 .3-5.4 2.9-5.4 5.9 0 3.3 2.7 6 6 6s6-2.7 6-6c.1-.5-.3-.9-.7-.9z">

                                            </path>
                                        </svg>
                                    </div>
                                    {/* Text */}
                                    <div className="text-center text-xs mt-3 whitespace-nowrap">RESEND BOOKING CONFIRMATION</div>
                                </a>

                                {/* News Letter */}
                                <a href="#" className="flex flex-col items-center text-text-light w-20">
                                    {/* News Letter svg */}
                                    <div className="w-12 h-12">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg" id="icon-newsletter" viewBox="-1 -1 102 102" width="100%" height="100%" style={{ fill: 'white' }}><g id="elnewsletter"><path className="elst0" d="M97.5 90.3V33.6c0-.5-.4-1-1-1H82.9V9.8c0-.5-.4-1-1-1H18.1a1 1 0 0 0-1 1v22.8H3.5a1 1 0 0 0-1 1v56.9c0 .1.1.1.1.2v.1c0 .1.1.1.2.1.1.1.2.1.2.1.1 0 .1 0 .2.1h93.4c.1 0 .3 0 .4-.1 0 0 .1 0 .1-.1.1-.1.2-.1.2-.2v-.1c0-.1.1-.1.1-.2.1 0 .1 0 .1-.1zm-1.9-55.7v53.6L63.9 64.1l18.6-17.7 7.7-7.4c.3-.3.4-.7.2-1.1-.1-.4-.5-.6-.9-.6h-6.8v-2.7h12.9zM50.2 56.1l43.4 33.1H6.4l43.8-33.1zm32.7-16.8h4.4l-4.4 4.1v-4.1zM19.1 10.8h61.8v34.5L62.4 62.9l-11.6-8.8c-.3-.3-.8-.3-1.2 0L37.8 63 19.1 45.3V10.8zm-2 32.6l-4.4-4.1h4.4v4.1zm0-8.8v2.7h-6.8c-.4 0-.8.2-.9.6-.1.4-.1.8.2 1.1l26.5 25.2-31.8 24V34.6h12.8z"></path><path className="elst0" d="M28.9 22.5h42.7a1 1 0 0 0 0-2H28.9c-.5 0-1 .4-1 1s.4 1 1 1zm0 10h42.7a1 1 0 0 0 0-2H28.9a1 1 0 0 0 0 2zm0 9.9h42.7a1 1 0 0 0 0-2H28.9c-.5 0-1 .4-1 1s.4 1 1 1z"></path></g>
                                        </svg>
                                    </div>
                                    {/* Text */}
                                    <div className="text-center text-xs mt-3 whitespace-nowrap">SUBSCRIBE TO THE NEWSLETTER</div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="w-full py-5 text-text-light" >
                        <div className="mx-auto px-3.5" style={{ width: '1200px' }} >

                            {/* movie-list-1 */}
                            <div className="mb-3" >
                                <div className="mb-2 font-bold font-sans" style={{ color: '#A5A5A5', fontSize: '12px' }} >MOVIES NOW SHOWING IN HYDERADAD</div>
                                <div className="anchors-con">
                                    <a href="/movies/lucky-baskhar-telugu/ET00386124" className="mb-1 mr-1 pr-1" style={{ borderRight: '1px solid rgb(127, 127, 127)' }} >Lucky Baskhar</a>
                                    <a href="/movies/amaran-telugu/ET00417203" className="mb-1 mr-1 pr-1" style={{ borderRight: '1px solid rgb(127, 127, 127)' }} >Amaran</a>
                                    <a href="/movies/singham-again/ET00354858" className="mb-1 mr-1 pr-1" style={{ borderRight: '1px solid rgb(127, 127, 127)' }} >Singham Again</a>
                                    <a
                                        href="/movies/ka-2024/ET00405181"
                                        className="mb-1 mr-1 pr-1"
                                        style={{ borderRight: '1px solid rgb(127, 127, 127)' }}
                                    >KA (2024)
                                    </a>
                                    <a href="/movies/bhool-bhulaiyaa-3/ET00353996" className="mb-1 mr-1 pr-1" style={{ borderRight: '1px solid rgb(127, 127, 127)' }} >Bhool Bhulaiyaa 3</a>
                                    <a href="/movies/venom-the-last-dance-3d/ET00413299" className="mb-1 mr-1 pr-1" style={{ borderRight: '1px solid rgb(127, 127, 127)' }} >Venom: The Last Dance</a>
                                    <a href="/movies/bagheera-telugu/ET00417585" className="mb-1 mr-1 pr-1" style={{ borderRight: '1px solid rgb(127, 127, 127)' }} >Bagheera</a>
                                    <a href="/movies/devara-part-1/ET00310216" className="mb-1 mr-1 pr-1" style={{ borderRight: '1px solid rgb(127, 127, 127)' }} >Devara - Part 1</a>
                                    <a href="/movies/dhaaak/ET00407903" className="mb-1 mr-1 pr-1" style={{ borderRight: '1px solid rgb(127, 127, 127)' }} >Dhaaak</a>
                                    <a href="/movies/the-wild-robot/ET00398665" className="mb-1 mr-1 pr-1">The Wild Robot</a>
                                </div>
                            </div>

                            {/* movie-list-2 */}
                            <div className="mb-3" >
                                <div className="mb-2 font-bold font-sans" style={{ color: '#A5A5A5', fontSize: '12px' }} >UPCOMMING MOVIES IN HYDERABAD</div>
                                <div className="anchors-con">
                                    <a href="/movies/lucky-baskhar-telugu/ET00386124" className="mb-1 mr-1 pr-1" style={{ borderRight: '1px solid rgb(127, 127, 127)' }} >Lucky Baskhar</a>
                                    <a href="/movies/amaran-telugu/ET00417203" className="mb-1 mr-1 pr-1" style={{ borderRight: '1px solid rgb(127, 127, 127)' }} >Amaran</a>
                                    <a href="/movies/singham-again/ET00354858" className="mb-1 mr-1 pr-1" style={{ borderRight: '1px solid rgb(127, 127, 127)' }} >Singham Again</a>
                                    <a
                                        href="/movies/ka-2024/ET00405181"
                                        className="mb-1 mr-1 pr-1"
                                        style={{ borderRight: '1px solid rgb(127, 127, 127)' }}
                                    >KA (2024)
                                    </a>
                                    <a href="/movies/bhool-bhulaiyaa-3/ET00353996" className="mb-1 mr-1 pr-1" style={{ borderRight: '1px solid rgb(127, 127, 127)' }} >Bhool Bhulaiyaa 3</a>
                                    <a href="/movies/venom-the-last-dance-3d/ET00413299" className="mb-1 mr-1 pr-1" style={{ borderRight: '1px solid rgb(127, 127, 127)' }} >Venom: The Last Dance</a>
                                    <a href="/movies/bagheera-telugu/ET00417585" className="mb-1 mr-1 pr-1" style={{ borderRight: '1px solid rgb(127, 127, 127)' }} >Bagheera</a>
                                    <a href="/movies/devara-part-1/ET00310216" className="mb-1 mr-1 pr-1" style={{ borderRight: '1px solid rgb(127, 127, 127)' }} >Devara - Part 1</a>
                                    <a href="/movies/dhaaak/ET00407903" className="mb-1 mr-1 pr-1" style={{ borderRight: '1px solid rgb(127, 127, 127)' }} >Dhaaak</a>
                                    <a href="/movies/the-wild-robot/ET00398665" className="mb-1 mr-1 pr-1">The Wild Robot</a>
                                </div>
                            </div>

                            {/* movie-list-3 */}
                            <div className="mb-3" >
                                <div className="mb-2 font-bold font-sans" style={{ color: '#A5A5A5', fontSize: '12px' }} >MOVIES BY GENRE</div>
                                <div className="anchors-con">
                                    <a href="/movies/lucky-baskhar-telugu/ET00386124" className="mb-1 mr-1 pr-1" style={{ borderRight: '1px solid rgb(127, 127, 127)' }} >Lucky Baskhar</a>
                                    <a href="/movies/amaran-telugu/ET00417203" className="mb-1 mr-1 pr-1" style={{ borderRight: '1px solid rgb(127, 127, 127)' }} >Amaran</a>
                                    <a href="/movies/singham-again/ET00354858" className="mb-1 mr-1 pr-1" style={{ borderRight: '1px solid rgb(127, 127, 127)' }} >Singham Again</a>
                                    <a
                                        href="/movies/ka-2024/ET00405181"
                                        className="mb-1 mr-1 pr-1"
                                        style={{ borderRight: '1px solid rgb(127, 127, 127)' }}
                                    >KA (2024)
                                    </a>
                                    <a href="/movies/bhool-bhulaiyaa-3/ET00353996" className="mb-1 mr-1 pr-1" style={{ borderRight: '1px solid rgb(127, 127, 127)' }} >Bhool Bhulaiyaa 3</a>
                                    <a href="/movies/venom-the-last-dance-3d/ET00413299" className="mb-1 mr-1 pr-1" style={{ borderRight: '1px solid rgb(127, 127, 127)' }} >Venom: The Last Dance</a>
                                    <a href="/movies/bagheera-telugu/ET00417585" className="mb-1 mr-1 pr-1" style={{ borderRight: '1px solid rgb(127, 127, 127)' }} >Bagheera</a>
                                    <a href="/movies/devara-part-1/ET00310216" className="mb-1 mr-1 pr-1" style={{ borderRight: '1px solid rgb(127, 127, 127)' }} >Devara - Part 1</a>
                                    <a href="/movies/dhaaak/ET00407903" className="mb-1 mr-1 pr-1" style={{ borderRight: '1px solid rgb(127, 127, 127)' }} >Dhaaak</a>
                                    <a href="/movies/the-wild-robot/ET00398665" className="mb-1 mr-1 pr-1">The Wild Robot</a>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </footer>

        </>
    );
}

export default Footer;
