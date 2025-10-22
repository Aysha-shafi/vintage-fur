import React from 'react';

function Footer() {
  return (
    <footer >



      <div className="bg-[#2D2D2D] text-white py-20 px-4 ">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">


          <div>
            <h3 className="text-2xl mb-4">INFORMATION</h3>
            <p className=" text-1xl leading-relaxed">
              There are many variat <br />ions of passages of L <br />orem Ipsum available,<br /> but the majority have <br />suffered alteration in <br />some form, by
            </p>
          </div>


          <div>
            <h3 className="text-2xl  mb-4">LET US HELP YOU</h3>
            <p className="text-1xl leading-relaxed">
              There are many variat <br />ions of passages of L <br />orem Ipsum available,<br /> but the majority have <br />suffered alteration in <br />some form, by
            </p>
          </div>


          <div>
            <h3 className="text-2xl  mb-4">USEFUL LINKS</h3>
            <ul className=" text-1xl   space-y-1">
              <li><a href="#" className=" hover:text-white transition">About Us</a></li>
              <li><a href="#" className=" hover:text-white transition">Careers</a></li>
              <li><a href="#" className=" hover:text-white transition">Sell on shopee</a></li>
              <li><a href="#" className=" hover:text-white transition">Press & News</a></li>
              <li><a href="#" className=" hover:text-white transition">Competitions</a></li>
              <li><a href="#" className=" hover:text-white transition">Terms & Conditions</a></li>
            </ul>
          </div>


          <div>
            <h3 className="text-2xl  mb-4">OUR DESIGN</h3>
            <p className=" text-1xl  leading-relaxed mb-6">
              There are many variat <br />ions of passages of L <br />orem Ipsum available,<br /> but the majority have <br />suffered alteration in <br />some form, by
            </p>

            <div className="flex items-center border-b border-white w-[170%] max-w-4xl -ml-70">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-transparent outline-none text-gray-300 placeholder-gray-400 py-2 px-1"
              />
              <button className="text-white font-bold tracking-wide px-4 py-2">
                SUBSCRIBE
              </button>
            </div>
          </div>

        </div>
      </div>


      <div className="bg-white py-6 text-center text-gray-600 text-lg border-t border-gray-200">
        2023 All Rights Reserved. Design by Free html Templates Distribution By ThemeWagon
      </div>
    </footer>
  );
}

export default Footer;