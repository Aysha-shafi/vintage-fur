import React from 'react';

function ContactPage() {

    const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916892305536!2d2.292271215674845!3d48.85837007928731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee3807a0c!2sEiffel%20Tower!5e0!3m2!1sen!2sus!4v1634827000000!5m2!1sen!2sus";

    return (
        <div
            className="py-20 px-4 min-h-[100vh] bg-cover bg-center"
            style={{ backgroundImage: "url('/contact-bg.png')" }}
        >

            <div className="relative max-w-7xl mx-auto z-10">
                <h1 className="text-4xl font-semiold pl-14 mb-4 text-white">CONTACT US</h1>


                <div className="flex flex-wrap lg:flex-nowrap gap-8   p-10 pl-14 pr-14 ">
                    {/* Contact Form Area */}
                    <div className="w-full lg:w-1/2 space-y-6">
                        <input className="w-full p-3 pl-5 bg-white rounded font-semibold" type="text" placeholder="Name" />
                        <input className="w-full p-3 pl-5 bg-white rounded font-semibold" type="email" placeholder="Email" />
                        <input className="w-full p-3  pl-5 bg-white rounded font-semibold" type="tel" placeholder="Phone Number" />
                        <textarea className="w-full py-15 pl-5  bg-white rounded font-semibold h-36" placeholder="Message"></textarea>
                        <button className=" hover:bg-white hover:cursor-pointer text-lg mt-5 text-gray-400 border-2 border-white font-bold py-4 px-13  transition duration-300  tracking-wider">
                            SEND
                        </button>
                    </div>

                    {/* Map Area */}
                    <div className="w-full lg:w-1/2 h-96 lg:h-auto">
                        {/* IFRAME MAP INTEGRATION */}
                        <iframe
                            src={mapEmbedUrl}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Business Location Map"
                            className="rounded"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;
