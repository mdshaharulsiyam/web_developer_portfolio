import React from 'react'
import Header from '../Herder/Header'
import DextopHeader from '../Herder/DextopHeader'
import Sideber from '../Sideber/Sideber'
import About from '../About/About'
import ThemeChange from '../ThemeChange/ThemeChange'
const Home = () => {
    document.title = "About | shaharul siyam"
    return (
        <div>
            <div class="bg-homeBg dark:bg-homeTwoBg-dark min-h-screen bg-no-repeat bg-center bg-cover bg-fixed md:pb-16 w-full">
                <ThemeChange />
                <nav id="navbar" class="hidden lg:hidden">
                    <Header></Header>
                </nav>
                <div class="container grid grid-cols-12 md:gap-10 justify-between lg:mt-[220px]">
                    <div class="col-span-12 lg:col-span-4 hidden lg:block h-screen sticky top-44">
                        <Sideber />
                    </div>
                    <div class="col-span-12 lg:col-span-8">

                        <header
                            class="lg:w-[560px] h-[144px] hidden lg:block p-[30px] ml-auto mb-10 rounded-[16px] bg-white dark:bg-[#111111]">
                            <nav class="hidden lg:block">
                                <DextopHeader></DextopHeader>

                            </nav>
                        </header>

                        <div>
                            <div class="lg:rounded-2xl bg-white dark:bg-[#111111]">
                                <div class="pt-12 md:py-12 px-2 sm:px-5 md:px-10 lg:px-14">

                                    <h2 class="after-effect after:left-52">About Me</h2>
                                    <About />
                                    <div class="lg:grid grid-cols-12 md:gap-10 pt-4 md:pt-[30px] items-center hidden">
                                        <div class="col-span-12 space-y-2.5">
                                            <div class="lg:mr-16">
                                                <p class="text-[#44566c] dark:text-color-910 leading-7"> Hello my name is Shaharul Siyam. I work as a MERN Stack Developer creating web solutions using MongoDB, Express.js, React.js and Node.js. My focus is, on building efficient and user applications that offer an scalable digital experience. I am dedicated to writing code and embracing innovation to deliver results, for web development projects.</p>

                                            </div>
                                            <div></div>
                                        </div>
                                    </div>

                                </div>

                                <div class="pb-12 px-2 sm:px-5 md:px-10 lg:px-14">
                                    <h3 class="text-[35px] dark:text-white font-bold font-robotoSlab pb-5"> What I do! </h3>
                                    <div class="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
                                        <div class="about-box bg-[#fcf4ff] dark:bg-transparent">
                                            <img class="w-10 h-10 object-contain block" src="images/icons/icon.svg"
                                                alt="icon" />
                                            <div class="space-y-2">
                                                <h3 class="dark:text-white text-[22px] font-semibold">Web Developer </h3>
                                                <p class="leading-8 text-gray-lite dark:text-[#A6A6A6]">my job is to create websites. While my primary role is to ensure the website is visually appealing and easy to navigate, As a developer in the MERN stack I am excited to utilize
                                                    my skills in React , Express.js , MongoDB and Node.js to
                                                    build adaptable web solutions. I am dedicated to
                                                    improving my abilities and staying at the forefront of
                                                    innovation</p>
                                            </div>
                                        </div>

                                        <div class="about-box bg-[#fcf4ff] dark:bg-transparent">
                                            <img class="w-10 h-10 object-contain block" src="images/icons/icon5.svg"
                                                alt="icon" />
                                            <div class="space-y-2">
                                                <h3 class="dark:text-white text-[22px] font-semibold">thinks i use for development </h3>
                                                <p class="leading-8 text-gray-lite dark:text-[#A6A6A6]">

                                                    <ul style={{ listStyleType: 'none' }}>
                                                        <li class="dark:text-white">React js</li>
                                                        <li class="dark:text-white">Node js</li>
                                                        <li class="dark:text-white">Express js</li>
                                                        <li class="dark:text-white">MongoDB</li>
                                                        <li class="dark:text-white">JavaScript</li>
                                                        <li class="dark:text-white">Tailwind CSS</li>
                                                        <li class="dark:text-white">HTML</li>
                                                        <li class="dark:text-white">CSS</li>
                                                        <li class="dark:text-white">PHP</li>
                                                        <li class="dark:text-white">MYSQL</li>
                                                    </ul>
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div class="pb-12 px-2 sm:px-5 md:px-10 lg:px-14">
                                    <h3 class="text-[35px] dark:text-white font-bold font-robotoSlab pb-5"> why choose me! </h3>
                                    <div class="about-box bg-[#fcf4ff] dark:bg-transparent">
                                        <img class="w-10 h-10 object-contain block" src="images/icons/icon.svg"
                                            alt="icon" />
                                        <div class="space-y-2">
                                            <p class="leading-8 text-gray-lite dark:text-[#A6A6A6]">I believe that my experience with technology, specifically in the web design and development space, make me the best match for this position. In my previous job, I was responsible for maintaining and updating our company website. This required keeping employee profiles updated and continuously posting information regarding upcoming events. I truly enjoyed what I was doing, which is what drew me to this position with your company. I would love to bring the coding and content skills I learned there to this position.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="px-2 sm:px-5 md:px-10 lg:px-14">
                                    <div class="bg-[#F8FBFB] dark:bg-[#0D0D0D] max-w-full h-auto py-10 rounded-xl">
                                        {/* <h3 class="text-center dark:text-white text-6xl mb-3 font-semibold"> Clients </h3> */}

                                    </div>
                                </div>


                                <footer class="overflow-hidden rounded-b-2xl" style={{ background: "transparent" }}>
                                    <p class="text-center py-6 text-gray-lite dark:text-color-910"> © 2022 All Rights Reserved
                                        by <a class="hover:text-[#FA5252] duration-300 transition"
                                            href="#" target="_blank"
                                            rel="noopener noreferrer"> Siyam</a>. </p>
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

export default Home
