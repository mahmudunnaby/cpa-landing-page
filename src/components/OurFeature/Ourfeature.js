import React from 'react';

const Ourfeature = () => {
    return (
        <div>
            <div class="lg:pt-20 pt-40 lg:p-20">
                <h1 class=" text-center text-5xl font-bold">Our Features</h1>
                <div class="flex flex-col lg:flex-row justify-center items-center">
                    <div class="lg:flex-1 lg:p-10 px-10">
                        <div class="flex justify-center items-top pt-10">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="w-16 h-16 text-blue-500 hover:text-blue-700" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M848 359.3H627.7L825.8 109c4.1-5.3.4-13-6.3-13H436c-2.8 0-5.5 1.5-6.9 4L170 547.5c-3.1 5.3.7 12 6.9 12h174.4l-89.4 357.6c-1.9 7.8 7.5 13.3 13.3 7.7L853.5 373c5.2-4.9 1.7-13.7-5.5-13.7z"></path></svg>
                            <div class=" flex flex-col  items-start pl-5">
                                <h5 class="text-black text-2xl font-bold">Server Speed</h5>
                                <p class="lg:text-base text-black text-sm">Load-balanced servers combined with a custom, light-weight platform ensure maximum up-time and performance.</p>
                            </div>
                        </div>
                        <div class="flex justify-center items-top pt-10">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="w-16 h-16 text-blue-500 hover:text-blue-700" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M19.375 15.103A8.001 8.001 0 0 0 8.03 5.053l-.992-1.737A9.996 9.996 0 0 1 17 3.34c4.49 2.592 6.21 8.142 4.117 12.77l1.342.774-4.165 2.214-.165-4.714 1.246.719zM4.625 8.897a8.001 8.001 0 0 0 11.345 10.05l.992 1.737A9.996 9.996 0 0 1 7 20.66C2.51 18.068.79 12.518 2.883 7.89L1.54 7.117l4.165-2.214.165 4.714-1.246-.719zM8.5 14H14a.5.5 0 1 0 0-1h-4a2.5 2.5 0 1 1 0-5h1V7h2v1h2.5v2H10a.5.5 0 1 0 0 1h4a2.5 2.5 0 1 1 0 5h-1v1h-2v-1H8.5v-2z"></path></g></svg>
                            <div class=" flex flex-col  items-start pl-5">
                                <h5 class="text-black text-2xl font-bold">Weekly Payments</h5>
                                <p class="lg:text-base text-black text-sm">No need to wait months to receive your payment. We pay all of our publishers on a weekly schedule by default.</p>
                            </div>
                        </div>
                        <div class="flex justify-center items-top pt-10"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="w-16 h-16 text-blue-500 hover:text-blue-700" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"></path></svg>
                            <div class=" flex flex-col  items-start pl-5">
                                <h5 class="text-black text-2xl font-bold">Statistics</h5>
                                <p class="lg:text-base text-black text-sm">Our advanced statistics will allow you to break down, filter and analyse your traffic to even the smallest of details.</p>
                            </div>
                        </div>
                    </div>
                    <div class="lg:flex-1 lg:p-10 px-10">
                        <div class="flex justify-center items-top pt-10">
                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="w-16 h-16 text-blue-500 hover:text-blue-700" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="19" y1="5" x2="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle></svg>
                            <div class=" flex flex-col  items-start pl-5">
                                <h5 class="text-black text-2xl font-bold">Commission</h5>
                                <p class="lg:text-base text-black text-sm">Not just lifetime commission on anyone that you refer to us, but also commissions on templates and lockers you build.</p>
                            </div>
                        </div>
                        <div class="flex justify-center items-top pt-10"><svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 16 16" class="w-16 h-16 text-blue-500 hover:text-blue-700" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6 13h10v2h-10zM6 7h10v2h-10zM6 1h10v2h-10zM3 0v4h-1v-3h-1v-1zM2 8.219v0.781h2v1h-3v-2.281l2-0.938v-0.781h-2v-1h3v2.281zM4 11v5h-3v-1h2v-1h-2v-1h2v-1h-2v-1z"></path></svg>
                            <div class=" flex flex-col  items-start pl-5">
                                <h5 class="text-black text-2xl font-bold">Offers</h5>
                                <p class="lg:text-base text-black text-sm">With more than 2,000 high performing offers to choose from, we have every country on the planet covered. CPA/CPE/CPI/CPL.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ourfeature;