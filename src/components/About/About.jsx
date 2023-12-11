import React from 'react'

const About = () => {
  return (
    <div class="lg:hidden">
    <div
        class="w-full mb-6 lg:mb-0 mx-auto relative bg-white text-center dark:bg-[#111111] px-6 rounded-[20px] mt-[180px] md:mt-[220px] lg:mt-0">
        <img src="/images/about/avatar.jpg"
            class="w-[240px] absolute left-[50%] transform -translate-x-[50%] h-[240px] drop-shadow-xl mx-auto rounded-[20px] -mt-[140px]"
            alt="about" />
        <div class="pt-[100px] pb-8">
            <h2 class="mt-6 mb-1 text-[26px] font-semibold dark:text-white"> MD Shaharul Siyam
            </h2>
            <h3
                class="mb-4 text-[#7B7B7B] inline-block dark:bg-[#1D1D1D] px-5 py-1.5 rounded-lg dark:text-[#A6A6A6]">
                Web Designer/Web Developer </h3>

            <div class="flex justify-center space-x-3">
                <a href="https://www.facebook.com/" target="_blank"
                    rel="noopener noreferrer">
                    <span class="socialbtn text-[#1773EA]">
                        <i class="fa-brands fa-facebook-f"></i>
                    </span>
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                    <span class="socialbtn text-[#1C9CEA]">
                        <i class="fa-brands fa-twitter"></i>
                    </span>
                </a>
                <a href="https://dribbble.com/" target="_blank" rel="noopener noreferrer">
                    <span class="socialbtn text-[#e14a84]">
                        <i class="fa-brands fa-dribbble"></i>
                    </span>
                </a>
                <a href="https://www.linkedin.com/" target="_blank"
                    rel="noopener noreferrer">
                    <span class="socialbtn text-[#0072b1]">
                        <i class="fa-brands fa-linkedin-in"></i>
                    </span>
                </a>
            </div>

            <div class="p-7 rounded-2xl mt-7 bg-[#F3F6F6] dark:bg-[#1D1D1D]">
                <div class="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] pb-2.5">
                    <span class="socialbtn bg-white dark:bg-black text-[#E93B81] shadow-md">
                        <i class="fa-solid fa-mobile-screen-button"></i>
                    </span>
                    <div class="text-left ml-2.5">
                        <p class="text-xs text-[#44566C] dark:text-[#A6A6A6]"> Phone </p>
                        <p class="dark:text-white">+8801566026301</p>
                    </div>
                </div>

                <div class="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] py-2.5">
                    <span class="socialbtn bg-white dark:bg-black text-[#6AB5B9] shadow-md">
                        <i class="fa-solid fa-envelope-open-text"></i>
                    </span>
                    <div class="text-left ml-2.5">
                        <p class="text-xs text-[#44566C] dark:text-[#A6A6A6]"> Email </p>
                        <p class="dark:text-white">shaharulsiyam56@gmail.com</p>
                    </div>
                </div>

                <div class="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] py-2.5">
                    <span class="socialbtn bg-white dark:bg-black text-[#FD7590] shadow-md">
                        <i class="fa-solid fa-location-dot"></i>
                    </span>
                    <div class="text-left ml-2.5">
                        <p class="text-xs text-[#44566C] dark:text-[#A6A6A6]"> Location </p>
                        <p class="dark:text-white">gabtoli bogra Bangladesh</p>
                    </div>
                </div>

                <div class="flex py-2.5">
                    <span class="socialbtn bg-white dark:bg-black text-[#C17CEB] shadow-md">
                        <i class="fa-solid fa-calendar-days"></i>
                    </span>
                    <div class="text-left ml-2.5">
                        <p class="text-xs text-[#44566C] dark:text-[#A6A6A6]"> Birthday </p>
                        <p class="dark:text-white">feb 26, 2002</p>
                    </div>
                </div>
            </div>
            <a target="_blank" href="shaharul_siyam_resume.pdf"><button class="dowanload-btn">
                <img class="mr-3" src="images/icons/dowanload.png" alt="icon" /> resume </button></a>
        </div>
    </div>
</div>
  )
}

export default About
