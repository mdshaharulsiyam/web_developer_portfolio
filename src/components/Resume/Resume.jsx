import React from 'react'
import DextopHeader from '../Herder/DextopHeader'
import Header from '../Herder/Header'
import Sideber from '../Sideber/Sideber'
import ThemeChange from '../ThemeChange/ThemeChange'

const Resume = () => {
    document.title = "Resume | shaharul siyam"
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
                                <nav class="hidden lg:block">
                                    <DextopHeader></DextopHeader>
                                </nav>
                            </nav>
                        </header>

                        <div>

                            <div class="bg-white lg:rounded-2xl dark:bg-[#111111]">
                                <div class="container sm:px-5 md:px-10 lg:px-14">
                                    <div class="py-12 px-4 md:px-0">

                                        <h2 class="after-effect after:left-44">Resume</h2>
                                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-6 mt-[30px]">

                                            <div>
                                                <div class="flex items-center space-x-2 mb-4">
                                                    <i class="fa-solid text-6xl text-[#F95054] fa-graduation-cap"></i>
                                                    <h4 class="text-5xl dark:text-white font-medium"> Education </h4>
                                                </div>
                                                <div
                                                    class="bg-[#fff4f4] dark:bg-transparent py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border-2">
                                                    <span class="text-tiny text-gray-lite dark:text-[#b7b7b7]">Continue</span>
                                                    <h3 class="text-xl dark:text-white"> Diploma-in-Engineering </h3>
                                                    <p class="dark:text-[#b7b7b7]">pabna Polytechnic Institute,pabna</p>
                                                </div>
                                                <div
                                                    class="bg-[#fff1fb] dark:bg-transparent py-4 pl-5 pr-3 space-y-2 rounded-lg mb-6 dark:border-[#212425] dark:border-2">
                                                    <span class="text-tiny text-gray-lite dark:text-[#b7b7b7]">2018</span>
                                                    <h3 class="text-xl dark:text-white"> Secondary School Certificate (SSC) </h3>
                                                    <p class="dark:text-[#b7b7b7]">pirgachha high School</p>
                                                </div>

                                            </div>

                                            <div>
                                                <div class="flex items-center space-x-2 mb-4">
                                                    <i class="fa-solid text-6xl text-[#F95054] fa-briefcase"></i>
                                                    <h4 class="text-5xl dark:text-white font-medium"> Course </h4>
                                                </div>
                                                <div
                                                    class="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg bg-[#eef5fa] dark:bg-transparent dark:border-[#212425] dark:border-2">
                                                    <h3 class="text-xl dark:text-white">complete web development  </h3>
                                                    <p class="dark:text-[#b7b7b7]">programming hero</p>
                                                    <p>2023</p>
                                                </div>
                                                <div
                                                    class="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg bg-[#eef5fa] dark:bg-transparent dark:border-[#212425] dark:border-2">
                                                    <h3 class="text-xl dark:text-white">web design and development with wordpress </h3>
                                                    <p class="dark:text-[#b7b7b7]">european IT</p>
                                                    <p>2022</p>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div class="container bg-color-810 dark:bg-[#0D0D0D] py-12 px-2 sm:px-5 md:px-10 lg:px-20">
                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div class="col-span-1">
                                            <h4 class="text-5xl dark:text-white font-medium mb-6"> Working Skills </h4>
                                            <div class="mb-5">
                                                <div class="flex justify-between mb-1">
                                                    <span class=" font-semibold text-[#526377] dark:text-[#A6A6A6]">Front end</span>
                                                    <span class=" font-semibold text-[#526377] dark:text-[#A6A6A6">80%</span>
                                                </div>
                                                <div class="w-full bg-[#edf2f2] rounded-full h-1 dark:bg-[#1c1c1c]">
                                                    <div class="bg-[#FF6464] h-1 rounded-full" style={{ width: "80%" }}></div>
                                                </div>
                                            </div>

                                            <div class="mb-5">
                                                <div class="flex justify-between mb-1">
                                                    <span class=" font-semibold text-[#526377] dark:text-[#A6A6A6]">Background with node js</span>
                                                    <span class=" font-semibold text-[#526377] dark:text-[#A6A6A6">70%</span>
                                                </div>
                                                <div class="w-full bg-[#edf2f2] rounded-full h-1 dark:bg-[#1c1c1c]">
                                                    <div class="bg-[#9272d4] h-1 rounded-full" style={{ width: "70%" }}></div>
                                                </div>
                                            </div>
                                            <div class="mb-5">
                                                <div class="flex justify-between mb-1">
                                                    <span class=" font-semibold text-[#526377] dark:text-[#A6A6A6]">Background with php</span>
                                                    <span class=" font-semibold text-[#526377] dark:text-[#A6A6A6">55%</span>
                                                </div>
                                                <div class="w-full bg-[#edf2f2] rounded-full h-1 dark:bg-[#1c1c1c]">
                                                    <div class="bg-[#9272d4] h-1 rounded-full" style={{ width: "55%" }}></div>
                                                </div>
                                            </div>

                                            <div class="mb-5">
                                                <div class="flex justify-between mb-1">
                                                    <span
                                                        class=" font-semibold text-[#526377] dark:text-[#A6A6A6]">Illustrator</span>
                                                    <span class=" font-semibold text-[#526377] dark:text-[#A6A6A6">50%</span>
                                                </div>
                                                <div class="w-full bg-[#edf2f2] rounded-full h-1 dark:bg-[#1c1c1c]">
                                                    <div class="bg-[#5185d4] h-1 rounded-full" style={{ width: "70%" }}></div>
                                                </div>
                                            </div>
                                            <div class="mb-5">
                                                <div class="flex justify-between mb-1">
                                                    <span class=" font-semibold text-[#526377] dark:text-[#A6A6A6]">figma</span>
                                                    <span class=" font-semibold text-[#526377] dark:text-[#A6A6A6">55%</span>
                                                </div>
                                                <div class="w-full bg-[#edf2f2] rounded-full h-1 dark:bg-[#1c1c1c]">
                                                    <div class="bg-[#9272d4] h-1 rounded-full" style={{ width: "55%" }}></div>
                                                </div>
                                            </div>
                                            <div class="mb-5">
                                                <div class="flex justify-between mb-1">
                                                    <span
                                                        class=" font-semibold text-[#526377] dark:text-[#A6A6A6]">Photoshop</span>
                                                    <span class=" font-semibold text-[#526377] dark:text-[#A6A6A6">40%</span>
                                                </div>
                                                <div class="w-full bg-[#edf2f2] rounded-full h-1 dark:bg-[#1c1c1c]">
                                                    <div class="bg-[#ca56f2] h-1 rounded-full" style={{ width: "40%" }}></div>
                                                </div>
                                            </div>

                                        </div>

                                        <div class="col-span-1">
                                            <h4 class="text-5xl dark:text-white font-medium mb-8"> Knowledges </h4>
                                            <div class="flex gap-y-5 gap-x-2.5 flex-wrap">
                                                <button class="resume-btn font-semibold">React js</button>
                                                <button class="resume-btn font-semibold">Node js</button>
                                                <button class="resume-btn font-semibold">express js</button>
                                                <button class="resume-btn font-semibold">MongoDB</button>
                                                <button class="resume-btn font-semibold">JavaScript</button>
                                                <button class="resume-btn font-semibold">tailwind css</button>
                                                <button class="resume-btn font-semibold">HTML 5</button>
                                                <button class="resume-btn font-semibold">CSS 3</button>
                                                <button class="resume-btn font-semibold">PHP</button>
                                                <button class="resume-btn font-semibold">mysql</button>
                                                <button class="resume-btn font-semibold">wordpress</button>
                                                <button class="resume-btn font-semibold">Time Management</button>
                                                <button class="resume-btn font-semibold">Flexibility</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <footer class="overflow-hidden rounded-b-2xl" style={{ background: "transparent" }}>
                                    <p class="text-center py-6 text-gray-lite dark:text-color-910"> © 2022 All Rights Reserved
                                        by <a class="hover:text-[#FA5252] duration-300 transition"
                                            href="#" target="_blank"
                                            rel="noopener noreferrer">Siyam</a>. </p>
                                </footer>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <script src="js/main.js"></script>
        </div>
    )
}

export default Resume
