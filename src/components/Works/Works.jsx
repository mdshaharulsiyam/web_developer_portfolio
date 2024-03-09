import "./works.css"
import DextopHeader from '../Herder/DextopHeader'
import Header from '../Herder/Header'
import Sideber from '../Sideber/Sideber'
import ThemeChange from '../ThemeChange/ThemeChange'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import image1 from '../../../public/images/webs/screencapture-pet-adopter-nu-vercel-app-2024-03-09-03_43_00.png'
// import './styles.css';
import { Pagination, Autoplay } from 'swiper/modules';
const Works = () => {
    document.title = "Works | shaharul siyam"
    return (
        <div>
            <div class="bg-homeBg dark:bg-homeTwoBg-dark min-h-screen bg-no-repeat bg-center bg-cover bg-fixed md:pb-16 w-full">
                <ThemeChange />
                <nav id="navbar" class="hidden lg:hidden">
                    <Header />
                </nav>


                <div class="container grid grid-cols-12 md:gap-10 justify-between lg:mt-[220px]">

                    <div class="col-span-12 lg:col-span-4 hidden lg:block h-screen sticky top-44">
                        <Sideber />
                    </div>
                    <div class="col-span-12 lg:col-span-8">

                        <header
                            class="lg:w-[560px] h-[144px] hidden lg:block p-[30px] ml-auto mb-10 rounded-[16px] bg-white dark:bg-[#111111]">
                            <nav class="hidden lg:block">
                                <DextopHeader />
                            </nav>
                        </header>

                        <section class="bg-white lg:rounded-2xl dark:bg-[#111111]">
                            <div class="container px-4 sm:px-5 md:px-10 lg:px-[60px]">
                                <div class="pb-12">
                                    <h2 class="after-effect after:left-32 mt-12 lg:mt-0">works</h2>
                                    <div class=" mt-[30px]  mb-6">

                                        <div class="pb-12 px-2 sm:px-5 md:px-10 lg:px-14 dark:text-white">
                                            <h3 class="text-[35px] dark:text-white font-bold font-robotoSlab pb-5"> Fetured Projects</h3>
                                            <div className='px-6 grid grid-cols-1 md:grid-cols-2 gap-2'>
                                            <div className="bg-red-50 shadow-2xl p-2 rounded-md dark:bg-black">
                                                    <h3 className="text-center font-bold text-lg">pet-adopter ( 6 members team project)</h3>
                                                    <div className="h-56 overflow-hidden w-full">
                                                        <Swiper pagination={true} autoplay={{ delay: 1500, disableOnInteraction: false }} modules={[Pagination, Autoplay]} className="mySwiper ">
                                                            <SwiperSlide>
                                                                <img className="w-full h-full overflow-hidden object-cover" src='https://i.ibb.co/Z2hrThN/screencapture-pet-adopter-nu-vercel-app-2024-03-09-03-43-00.png' alt="" />
                                                            </SwiperSlide>
                                                            <SwiperSlide>
                                                                <img className="w-full h-full overflow-hidden object-cover" src="https://i.ibb.co/yyg8rfk/screencapture-pet-adopter-nu-vercel-app-pet-listing-2024-03-09-03-48-36.png" alt="" />
                                                            </SwiperSlide>
                                                            <SwiperSlide>
                                                                <img className="w-full h-full overflow-hidden object-cover" src="https://i.ibb.co/JnZYXGh/screencapture-pet-adopter-nu-vercel-app-paydonation-2024-03-09-03-50-41.png" alt="" />
                                                            </SwiperSlide>

                                                        </Swiper>
                                                    </div>
                                                    <button className="px-4 ml-2 py-1 bg-slate-400 rounded-md mt-2 uppercase font-semibold">
                                                        <a target="_blank" href="https://pet-adopter-nu.vercel.app/">visit site</a>
                                                    </button>
                                                    <button className="px-4 py-1 bg-slate-400 rounded-md mt-2 uppercase font-semibold ml-2 ">
                                                        <a target="_blank" href="https://github.com/akdmousom/pet-adopter" >github repo</a>
                                                    </button>
                                                </div>
                                                {/* team project */}
                                                <div className="bg-red-50 shadow-2xl p-2 rounded-md dark:bg-black">
                                                    <h3 className="text-center font-bold text-lg">CareerHunt</h3>
                                                    <div className="h-56 overflow-hidden w-full">
                                                        <Swiper pagination={true} autoplay={{ delay: 1500, disableOnInteraction: false }} modules={[Pagination, Autoplay]} className="mySwiper ">
                                                            <SwiperSlide>
                                                                <img className="w-full h-full overflow-hidden object-cover" src="https://i.ibb.co/Mkj1XJc/screencapture-gregarious-mandazi-69cbd9-netlify-app-Classes-2023-12-11-15-07-46.png" alt="" />
                                                            </SwiperSlide>
                                                            <SwiperSlide>
                                                                <img className="w-full h-full overflow-hidden object-cover" src="https://i.ibb.co/n3SC9k8/screencapture-gregarious-mandazi-69cbd9-netlify-app-2023-12-11-15-07-01.png" alt="" />
                                                            </SwiperSlide>
                                                            <SwiperSlide>
                                                                <img className="w-full h-full overflow-hidden object-cover" src="https://i.ibb.co/YhpkqwJ/screencapture-gregarious-mandazi-69cbd9-netlify-app-dashboard-dashboard-2023-12-11-15-08-15.png" alt="" />
                                                            </SwiperSlide>

                                                        </Swiper>
                                                    </div>
                                                    <button className="px-4 ml-2 py-1 bg-slate-400 rounded-md mt-2 uppercase font-semibold">
                                                        <a target="_blank" href="https://gregarious-mandazi-69cbd9.netlify.app/">visit site</a>
                                                    </button>
                                                    <button className="px-4 py-1 bg-slate-400 rounded-md mt-2 uppercase font-semibold ml-2 ">
                                                        <a target="_blank" href="https://github.com/mdshaharulsiyam/CareerHunt-client-side" >github repo</a>
                                                    </button>
                                                </div>
                                                <div className="bg-red-50 shadow-2xl p-2 rounded-md">
                                                    <h3 className="text-center font-bold text-lg">FrankStore</h3>
                                                    <div className="h-56 overflow-hidden w-full">
                                                        <Swiper pagination={true} autoplay={{ delay: 1500, disableOnInteraction: false }} modules={[Pagination, Autoplay]} className="mySwiper ">
                                                            <SwiperSlide>
                                                                <img className="w-full h-full overflow-hidden object-cover" src="https://i.ibb.co/CtYjCXm/screencapture-storied-stardust-becd39-netlify-app-2024-01-10-15-08-16.png" alt="" />
                                                            </SwiperSlide>
                                                            <SwiperSlide>
                                                                <img className="w-full h-full overflow-hidden object-cover" src="https://i.ibb.co/PGFt1BG/screencapture-storied-stardust-becd39-netlify-app-products-2024-01-10-15-09-00.png" alt="" />
                                                            </SwiperSlide>
                                                            <SwiperSlide>
                                                                <img className="w-full h-full overflow-hidden object-cover" src="https://i.ibb.co/mGGYG8B/screencapture-storied-stardust-becd39-netlify-app-product-Deails-65965d51fa01212b0efd3a1e-2024-01-10.png" alt="" />
                                                            </SwiperSlide>

                                                        </Swiper>
                                                    </div>
                                                    <button className="px-4 ml-2 py-1 bg-slate-400 rounded-md mt-2 uppercase font-semibold">
                                                        <a target="_blank" href="https://storied-stardust-becd39.netlify.app/">visit site</a>
                                                    </button>
                                                    <button className="px-4 py-1 bg-slate-400 rounded-md mt-2 uppercase font-semibold ml-2 ">
                                                        <a target="_blank" href="https://github.com/mdshaharulsiyam/FrankStore-Clint" >github repo</a>
                                                    </button>
                                                </div>
                                                <div className="bg-red-50 shadow-2xl p-2 rounded-md">
                                                    <h3 className="text-center font-bold text-lg">FoodWave</h3>
                                                    <div className="h-56 overflow-hidden w-full">
                                                        <Swiper pagination={true} autoplay={{ delay: 1500, disableOnInteraction: false }} modules={[Pagination, Autoplay]} className="mySwiper ">
                                                            <SwiperSlide>
                                                                <img className="w-full h-full overflow-hidden object-cover" src="https://i.ibb.co/Dw9gVrt/screencapture-imaginative-ganache-4b307c-netlify-app-2023-12-11-15-10-37-1.png" alt="" />
                                                            </SwiperSlide>
                                                            <SwiperSlide>
                                                                <img className="w-full h-full overflow-hidden object-cover" src="https://i.ibb.co/LRbmrZr/screencapture-imaginative-ganache-4b307c-netlify-app-manage-Food-2023-12-11-15-12-54.png" alt="" />
                                                            </SwiperSlide>
                                                            <SwiperSlide>
                                                                <img className="w-full h-full overflow-hidden object-cover" src="https://i.ibb.co/GR3mCxb/screencapture-imaginative-ganache-4b307c-netlify-app-addfood-2023-12-11-16-07-07.png" alt="" />
                                                            </SwiperSlide>

                                                        </Swiper>
                                                    </div>
                                                    <button className="px-4 ml-2 py-1 bg-slate-400 rounded-md mt-2 uppercase font-semibold">
                                                        <a target="_blank" href="https://imaginative-ganache-4b307c.netlify.app/">visit site</a>
                                                    </button>
                                                    <button className="px-4 py-1 bg-slate-400 rounded-md mt-2 uppercase font-semibold ml-2 ">
                                                        <a target="_blank" href="https://github.com/mdshaharulsiyam/FoodWave-clint" >github repo</a>
                                                    </button>
                                                </div>
                                            </div>
                                            <h3 class="text-[35px] dark:text-white font-bold font-robotoSlab pb-5"> My Code Projects</h3>
                                            <div class="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
                                                <div class="about-box bg-[#fcf4ff] dark:bg-transparent">

                                                    <i id="project_icon" class="fa-regular fa-file-code"></i>
                                                    <div class="space-y-2">
                                                        <h3 class="dark:text-white text-[22px] font-semibold">React js projects </h3>
                                                        <p class="leading-8 text-gray-lite dark:text-[#A6A6A6]">
                                                            <ul style={{ listStyleType: 'none' }}>
                                                                <li class="project_list"><a class="projects" target="_blank" href="https://inquisitive-crostata-58e820.netlify.app/">Donation Campaign</a></li>
                                                                <li class="project_list"><a class="projects" target="_blank" href="https://gentle-lokum-e57234.netlify.app/">Course Registration</a></li>
                                                                <li class="project_list"><a class="projects" target="_blank" href="https://hilarious-longma-dfd9d4.netlify.app/">Elegance Wedding’s</a></li>
                                                                <li class="project_list"><a class="projects" target="_blank" href="https://phenomenal-cucurucho-5e2af2.netlify.app/">Eagle Tech</a></li>
                                                            </ul>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="about-box bg-[#fcf4ff] dark:bg-transparent">
                                                    <i style={{ fontSize: '40px' }} id="project_icon" class="fa-regular fa-file-code"></i>
                                                    <div class="space-y-2">
                                                        <h3 class="dark:text-white text-[22px] font-semibold">JavaScript projects </h3>
                                                        <p class="leading-8 text-gray-lite dark:text-[#A6A6A6]">

                                                            <ul style={{ listStyleType: 'none' }}>
                                                                <li class="project_list"><a class="projects" href="https://mdshaharulsiyam.github.io/summer_sale/" target="_blank">summer Sale</a></li>
                                                                <li class="project_list"><a class="projects" href="https://mdshaharulsiyam.github.io/Hunting-Phone/" target="_blank">Hunting-Phone</a></li>
                                                                <li class="project_list"><a class="projects" href="https://mdshaharulsiyam.github.io/PHeroTube/" target="_blank">PHeroTube</a></li>
                                                                <li class="project_list"><a class="projects" href="https://mdshaharulsiyam.github.io/calculatorInJs/" target="_blank">simple calculator</a></li>
                                                                <li class="project_list"><a class="projects" href="https://mdshaharulsiyam.github.io/Random_password_genaretor/" target="_blank">Random Password Genaretor</a></li>
                                                                <li class="project_list"><a class="projects" href="https://mdshaharulsiyam.github.io/analog_clock/" target="_blank">analog and digital clock</a></li>
                                                                <li class="project_list"><a class="projects" href="https://mdshaharulsiyam.github.io/draggable-image-slider-tab/" target="_blank">draggable image slider tab</a></li>
                                                                <li class="project_list"><a class="projects" href="https://mdshaharulsiyam.github.io/image-Slider/" target="_blank">image Slider</a></li>
                                                                <li class="project_list"><a class="projects" href="https://mdshaharulsiyam.github.io/draggable-slider-tab/" target="_blank">draggable slider tab</a></li>
                                                                <li class="project_list"><a class="projects" href="https://mdshaharulsiyam.github.io/password_validation/" target="_blank" >password Validation </a></li>
                                                                <li class="project_list"><a class="projects" href="https://mdshaharulsiyam.github.io/insta_shohor/" target="_blank" title="love and report only">simple insta Shohor </a></li>
                                                                <li class="project_list"><a class="projects" href="https://mdshaharulsiyam.github.io/AsimpleTextEditor/" target="_blank" title="love and report only">A simple Text Editor </a></li>
                                                                <li class="project_list"><a class="projects" href="https://mdshaharulsiyam.github.io/simple-_diposit_withddrow_calculation/" target="_blank">diposit withddrow calculation</a></li>
                                                                <li class="project_list"><a class="projects" href="https://mdshaharulsiyam.github.io/ToastNotification/" target="_blank">Toast Notification</a></li>
                                                            </ul>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="about-box bg-[#fcf4ff] dark:bg-transparent">

                                                    <i id="project_icon" class="fa-regular fa-file-code"></i>
                                                    <div class="space-y-2">
                                                        <h3 class="dark:text-white text-[22px] font-semibold">tailwind css projects </h3>
                                                        <p class="leading-8 text-gray-lite dark:text-[#A6A6A6]">
                                                            <ul style={{ listStyleType: 'none' }}>
                                                                <li class="project_list"><a class="projects" target="_blank" href="https://mdshaharulsiyam.github.io/B8A2-Gamer-Zone-assignment/">Gamer Zone</a></li>
                                                                <li class="project_list"><a class="projects" target="_blank" href="https://mdshaharulsiyam.github.io/B8A3-fruit-brust/">fruit Brust</a></li>
                                                                <li class="project_list"><a class="projects" target="_blank" href="https://mdshaharulsiyam.github.io/penguin-fashion-with-tailwind/">penguin Fashion</a></li>
                                                                <li class="project_list"><a class="projects" target="_blank" href="https://mdshaharulsiyam.github.io/tea_shop/">tea Shop</a></li>
                                                                <li class="project_list"><a class="projects" target="_blank" href="https://mdshaharulsiyam.github.io/tailwind-biker-zone-ewith-daisyui/">biker Zone</a></li>
                                                            </ul>
                                                        </p>
                                                    </div>
                                                </div>


                                                <div class="about-box bg-[#fcf4ff] dark:bg-transparent">

                                                    <i id="project_icon" class="fa-regular fa-file-code"></i>
                                                    <div class="space-y-2">
                                                        <h3 class="dark:text-white text-[22px] font-semibold">HTML css js projects </h3>
                                                        <p class="leading-8 text-gray-lite dark:text-[#A6A6A6]">
                                                            <ul style={{ listStyleType: 'none' }}>
                                                                <li class="project_list"><a class="projects" target="_blank" href="https://mdshaharulsiyam.github.io/g3-architects-website/">g3 architects</a></li>
                                                                <li class="project_list"><a class="projects" target="_blank" href="https://mdshaharulsiyam.github.io/influencer-gear/">influencer gear</a></li>
                                                                <li class="project_list"><a class="projects" target="_blank" href="https://mdshaharulsiyam.github.io/responsive-webdeveloper-portfolio/">responsive webdeveloper portfolio/</a></li>

                                                            </ul>
                                                        </p>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>


                            <footer class="overflow-hidden rounded-b-2xl bg-[#f8fbfb] dark:bg-[#212425]">
                                <p class="text-center py-6 text-gray-lite dark:text-color-910"> © 2022 All Rights Reserved by <a
                                    class="hover:text-[#FA5252] duration-300 transition"
                                    href="#" target="_blank"
                                    rel="noopener noreferrer">siyam</a>. </p>
                            </footer>

                        </section>

                    </div>

                </div>
            </div>
            <script src="js/main.js"></script>
        </div>
    )
}

export default Works
