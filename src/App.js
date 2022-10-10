import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { Component } from "react";
import Slider from "react-slick";
import { ScrollToTop } from '../src/components';
import { BiWindows } from 'react-icons/bi';


function App() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5
      };

  return (
    <div className="App">
        
      <section id="viewport1" class="h-screen">
        <nav class="bg-white w-full fixed top-0 z-10 shadow-md tracking-wider">
            <div class="container mx-auto w-4/6 bg-white grid grid-cols-3 py-2 items-center justify-between">
                <img src={require('./img/inalogo2.png')} class="h-18 w-46 object-cover"/>
                <ul class="flex space-x-10 font-semibold text-sm text-gray-800 justify-self-center">
                    <a href="#"><li class="links uppercase hover:text-gray-400 transition-all">home</li></a>
                    <a href="#viewport3"><li class="links uppercase hover:text-gray-400 transition-all ">services</li></a>
                    <a href="#viewport4"><li class="links uppercase hover:text-gray-400 transition-all ">products</li></a>
                    <a href="#viewport5"><li class="links uppercase hover:text-gray-400 transition-all ">about</li></a>
                    <a href="#viewport8"><li class="links uppercase hover:text-gray-400 transition-all ">contact</li></a>
                </ul>
                <i class="fa-solid fa-moon fa-2x justify-self-end cursor-pointer transition-all hover:text-slate-600 hover:drop-shadow-lg"></i>
            </div>
        </nav>
        <div id="developerinfo" class="flex flex-col items-center mt-48 text-white text-center space-y-12 ">
            <div class="p-2 space-y-4 text-5xl font-semibold">
                <p class="drop-shadow-2xl">ANALYTIC SOLUTION & SOFTWARE</p>
                <p class="drop-shadow-2xl">DEVELOPMENT FOR YOUR DIGITAL SUCCESS</p>
            </div>
            <div class="text-2xl">
                <p class="drop-shadow-2xl">Respond in real-time to critical events to avoid security breaches leading to</p>
                <p class="drop-shadow-2xl">corporate information, reputation, system, earnings, business and time</p>
            </div>
            <div class="text-xl">
                <button type="button" class="bg-yellow-600 shadow-lg p-3 rounded-lg shadow-yellow-600/60 animate-bounce hover:text-2xl hover:shadow-yellow-600 transition-all">Contact Now</button>
            </div>
        </div>
      </section>

      <section id="viewport3" class="h-screen">
        <div class="container w-3/6 mx-auto text-center space-y-3 mb-20 tracking-wide">
            <p class="text-blue-800 font-bold">SERVICES</p>
            <p class="text-3xl">What do we offer?</p>
            <p class="text-gray-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio delectus excepturi exercitationem sint corporis similique voluptatibus a sapiente debitis porro, et molestias ipsam aliquid ut!</p>
        </div>
        <div class="container w-4/6 mx-auto grid gap-5 grid-cols-3 tracking-wide">
            <div id="card" class="w-full shadow-lg p-6 space-y-3 rounded-lg bg-gradient-to-b from-white to-sky-50 hover:rounded-2xl hover:shadow-xl transition-all">
                <div class="w-16 h-16 rounded-full bg-gradient-to-b from-sky-200 to-sky-800 relative"><img src={require('./img/laptop-screen.png')} class="w-2/3 absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"/></div>
                    <p class="font-semibold">Bilgisayar Tabanlı Üretim Hattı</p>
                    <p class="text-gray-500">Lorem ipsum dolor sit amet consecteturasadasdasdad adipisicing elit. Reprehenderit, expedita.</p>
                    <a href="#"><p class="inline-block pt-3 font-semibold text-blue-800 hover:text-blue-900 hover:drop-shadow-md hover:underline transition-all">Read More</p></a>
            </div> 
            <div id="card" class="w-full shadow-lg p-6 space-y-3 rounded-lg bg-gradient-to-b from-white to-sky-50 hover:rounded-2xl hover:shadow-xl transition-all">
                <div class="w-16 h-16 rounded-full bg-gradient-to-b from-sky-200 to-sky-800 relative"><img src={require('./img/robot.png')} class="w-2/3 absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"/></div>
                    <p class="font-semibold">Robotik 3D Görüntü Tarama</p>
                    <p class="text-gray-500">Lorem ipsum dolor sit amet consecteturasadasdasdad adipisicing elit. Reprehenderit, expedita.</p>
                    <a href="#"><p class="inline-block pt-3 font-semibold text-blue-800 hover:text-blue-900 hover:drop-shadow-md hover:underline transition-all">Read More</p></a>
            </div>  
            <div id="card" class="w-full shadow-lg p-6 space-y-3 bg-gradient-to-b from-white to-sky-50 hover:rounded-2xl hover:shadow-xl transition-all">
                <div class="w-16 h-16 rounded-full bg-gradient-to-b from-sky-200 to-sky-800 relative"><img src={require('./img/a3.png')} class="w-2/3 absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"/></div>
                    <p class="font-semibold">Görüntü İşleme</p>
                    <p class="text-gray-500">Lorem ipsum dolor sit amet consecteturasadasdasdad adipisicing elit. Reprehenderit, expedita.</p>
                    <a href="#"><p class="inline-block pt-3 font-semibold text-blue-800 hover:text-blue-900 hover:drop-shadow-md hover:underline transition-all">Read More</p></a>
            </div>  
            <div id="card" class="w-full shadow-lg p-6 space-y-3 bg-gradient-to-b from-white to-sky-50 hover:rounded-2xl hover:shadow-xl transition-all">
                <div class="w-16 h-16 rounded-full bg-gradient-to-b from-sky-200 to-sky-800 relative"><img src={require('./img/hourglass.png')} class="w-2/3 absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"/></div>
                    <p class="font-semibold">OCR Çözümü</p>
                    <p class="text-gray-500">Lorem ipsum dolor sit amet consecteturasadasdasdad adipisicing elit. Reprehenderit, expedita.</p>
                    <a href="#"><p class="inline-block pt-3 font-semibold text-blue-800 hover:text-blue-900 hover:drop-shadow-md hover:underline transition-all">Read More</p></a>
            </div>  
            <div id="card" class="w-full shadow-lg p-6 space-y-3 bg-gradient-to-b from-white to-sky-50 hover:rounded-2xl hover:shadow-xl transition-all">
                <div class="w-16 h-16 rounded-full bg-gradient-to-b from-sky-200 to-sky-800 relative"><img src={require('./img/diagram.png')} class="w-2/3 absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"/></div>
                    <p class="font-semibold">Derin Öğrenme İle Hata Analizi</p>
                    <p class="text-gray-500">Lorem ipsum dolor sit amet consecteturasadasdasdad adipisicing elit. Reprehenderit, expedita.</p>
                    <a href="#"><p class="inline-block pt-3 font-semibold text-blue-800 hover:text-blue-900 hover:drop-shadow-md hover:underline transition-all">Read More</p></a>
            </div> 
            <div id="card" class="w-full shadow-lg p-6 space-y-3 bg-gradient-to-b from-white to-sky-50 hover:rounded-2xl hover:shadow-xl transition-all">
                <div class="w-16 h-16 rounded-full bg-gradient-to-b from-sky-200 to-sky-800 relative"><img src={require('./img/magnifying-glass.png')} class="w-2/3 absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"/></div>
                    <p class="font-semibold">3D Dere Kesit Ölçüm</p>
                    <p class="text-gray-500">Lorem ipsum dolor sit amet consecteturasadasdasdad adipisicing elit. Reprehenderit, expedita.</p>
                    <a href="#"><p class="inline-block pt-3 font-semibold text-blue-800 hover:text-blue-900 hover:drop-shadow-md hover:underline transition-all">Read More</p></a>
            </div>  
        </div>
      </section>

      <section id="viewport4" class="h-screen">
        <div class="container w-1/2 mx-auto text-center space-y-6 mt-32">
            <p class="text-blue-800 font-bold">PRODUCTS</p>
            <p class="text-3xl">What we did?</p>
            <p class="text-gray-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio delectus excepturi exercitationem sint corporis similique voluptatibus a sapiente debitis porro, et molestias ipsam aliquid ut!</p>
        </div>
        <div class="container mx-auto text-center grid grid-cols-4 mt-16 justify-items-center items-start">
            <div id="card1" class="max-w-xs p-6 space-y-5 border rounded-3xl shadow-xl hover:shadow-2xl transition-all">
                <img src={require('./img/p1.webp')} class="w-56 rounded mx-auto hover:w-60 transition-all"/>
                <p class="text-2xl">VisionStudio 2.0</p>
                <p class="text-blue-900 text-sm leading-6 text-opacity-60">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
            <div id="card2" class="max-w-xs p-6 space-y-5 border rounded-3xl shadow-xl hover:shadow-2xl transition-all">
                <img src={require('./img/p2.webp')} class="w-56 rounded mx-auto hover:w-60 transition-all"/>
                <p class="text-2xl">InaProAI</p>
                <p class="text-blue-900 text-sm leading-6 text-opacity-60">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
            <div id="card3" class="max-w-xs p-6 space-y-5 border rounded-3xl shadow-xl hover:shadow-2xl transition-all">
                <img src={require('./img/p3.webp')} class="w-56 rounded mx-auto hover:w-60 transition-all"/>
                <p class="text-2xl">MachineLoader</p>
                <p class="text-blue-900 text-sm leading-6 text-opacity-60">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
            <div id="card4" class="max-w-xs p-6 space-y-5 border rounded-3xl shadow-xl hover:shadow-2xl transition-all">
                <img src={require('./img/p4.webp')} class="w-56 rounded mx-auto hover:w-60 transition-all"/>
                <p class="text-2xl">RoboticsAI</p>
                <p class="text-blue-900 text-sm leading-6 text-opacity-60">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
      </section>

      <section id="viewport5" class="h-screen">
       <div class="bg-blue-100 p-12">
            <div class="container w-4/5 mx-auto text-center space-y-32">
                <div id="about-1" class="grid grid-cols-2 gap-16">
                    <div class="self-center p-12">
                        <p class="text-4xl">We work together as a single team with a focus on success.</p>
                    </div>
                    <div>
                        <img src={require('./img/a1.png')} class="w-2/5 mx-auto"/>
                    </div>
                </div>
                <div id="about-2" class="grid grid-cols-2 gap-16">
                    <div>
                        <img src={require('./img/a2.png')} class="w-2/5 mx-auto"/>
                    </div>
                    <div class="self-center p-12">
                        <p class="text-4xl">We believe in collaboration and partnerships which can achieve success together.</p>
                    </div>
                </div>
                <div id="about-1" class="grid grid-cols-2 gap-16">
                    <div class="self-center p-12">
                        <p class="text-4xl">We believe in agility which can support continuous improvement.</p>
                    </div>
                    <div>
                        <img src={require('./img/a3.png')} class="w-2/5 mx-auto"/>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <section id="viewport6" class="h-screen mt-96 container mx-auto">
        <div class="container">
            <p class="text-blue-800 font-bold text-center items-center mb-10">BUSINESS PARTNERS</p>
        </div>
        <div class="container mx-auto w-11/12">
            <Slider {...settings}>
                    <div class="ocard">
                        <img src={require('./img/o1.png')}/>
                    </div>
                    <div class="ocard">
                        <img src={require('./img/o2.png')}/>
                    </div>
                    <div class="ocard">
                        <img src={require('./img/o3.png')}/>
                    </div>
                    <div class="ocard">
                        <img src={require('./img/o4.png')}/>
                    </div>
                    <div class="ocard">
                        <img src={require('./img/o5.png')}/>
                    </div>
                    <div class="ocard">
                        <img src={require('./img/o6.png')}/>
                    </div>
                    <div class="ocard">
                        <img src={require('./img/o7.png')}/>
                    </div>
                    <div class="ocard">
                        <img src={require('./img/o8.png')}/>
                    </div>
                    <div class="ocard">
                        <img src={require('./img/o9.jpeg')}/>
                    </div>
                    <div class="ocard">
                        <img src={require('./img/o10.png')}/>
                    </div>
            </Slider>
        </div>
        
        <div id="sum" class="container w-5/6 mx-auto grid mt-44 space-x-40">
            <div id="sumtext" class="space-y-6 leading-6 tracking-wider self-center">
                <p class="text-3xl font-medium">Realtime Architecture</p>
                <p class="text-zinc-400">INASOFT is a Next-Gen SIEM platform that unifies data collection, machine learning and analytics for next gen threat detection and response. It’s built on a scalable big data architecture and uses data science for machine learning, threat intelligence, anomaly detection, pattern recognition, behavioral analysis and advanced analytics.</p>
            </div>
            <img src={require('./img/summary.png')} class="w-3/4"/>
        </div>
      </section>

      <section id="viewport8" class="h-96 bg-sky-900 mt-52">
        <footer class="container w-4/5 mx-auto grid grid-cols-3 justify-items-center p-6 gap-5">
            <div id="left" class="space-y-4">
                <img src={require('./img/footerlog.png')} class="w-52"/>
                <div class="space-y-4">
                    <div id="card" class="grid">
                        <i class="fa-regular fa-2x fa-envelope text-yellow-600"></i>
                        <p class="font-bold text-white">E Mail <br/> <a href="" class="font-thin text-gray-400">info@diatics.com</a></p>
                    </div>
                    <div id="card" class="grid">
                        <i class="fa-solid fa-2x fa-mobile-screen text-yellow-600"></i>
                        <p class="font-bold text-white">Phone <br/> <a href="" class="font-thin text-gray-400">+90 535 043 19 59</a></p>
                    </div>
                    <div id="card" class="grid">
                        <i class="fa-brands fa-2x fa-linkedin-in text-yellow-600"></i>
                        <p class="font-bold text-white">Follow us on social media!<br/> <a href="" class="font-thin text-gray-400">LinkedIn</a></p>
                    </div>
                </div>
            </div>
            <div id="mid" class="grid grid-rows-5 text-center">
                <h2 class="text-2xl text-white">Newsletter</h2>
                <p class="text-gray-400 ">Sign up and receive the latest tips via email.</p>
                <label for="email" class="self-center text-sm text-gray-900 dark:text-gray-300 tracking-wider ">Write Your Email</label>
                <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-10 p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all" placeholder="john.doe@company.com" required/>
                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg font-semibold inline-block w-full h-10 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-all">Subscribe</button>
            </div>
            <div id="right">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3014.8230659704473!2d29.310544994472757!3d40.919625213340076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cada2298dc139d%3A0xa4a72c4df852b721!2sSanayi%2C%20Teknopark%20Blv%201%2F4C%2C%2034906%20Pendik%2F%C4%B0stanbul!5e0!3m2!1sen!2str!4v1663837725780!5m2!1sen!2str" width='288px' height='288px' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="rounded-2xl"></iframe>
            </div>
        </footer>
        <copyright class="w-full text-center">
            <div class="text-center text-zinc-400 border-t-2 border-t-zinc-400 py-3">© 2022 INASOFT Develop by Inasoft.</div>
        </copyright>
      </section>

      <ScrollToTop />

    </div>
  );

}

export default App;
