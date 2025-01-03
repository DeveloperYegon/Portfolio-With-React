import React from 'react'
import myProfile from '../assets/GideonYegon.jpg'


function Hero() {
    const getGreeting = () => {
        const now = new Date();
        const hour = now.getHours();
      
        if (hour < 12) {
          return 'Good Morning!';
        } else if (hour < 18) {
          return 'Good Afternoon!';
        } else {
          return 'Good Evening!';
        }
      };
      const wavingHandEmoji = '\u{1F44B}';
    
  return (
   <main className='grid gap-7 pt-2 px-3 mt-5 justify-between  h-full md:grid-cols-2 md:px-20'>

            <div className='border shadow-lg shadow-[#ED7D3B] w-full p-5 flex justify-around bg-[#182B5C] rounded-[10px]'>
              <img src={myProfile} className='h-full border border-[rgb(0,255,0)] rounded-[50%]' alt="" />
            </div>

            <div className='text-[#fff] rounded-[10px] shadow-lg shadow-[#ED7D3B] border bg-[#182B5C]' >
              <p className='p-9'>
                <p>{getGreeting()} {wavingHandEmoji}</p>
                <p>
                    I'm <strong>Gideon Kipkorir Yegon,</strong> <br />
                    A  <strong>Software Engineer</strong> with 3+ years of interacting with software engineering tools and content.
                    I have delved into building and development of softwares to enhace smooth business operations in the technology world. 
                    </p>
                    <p>
                    My greatest strength is collaborating and driving effectiveness across teams.
                    I have talent for designing and developing systems to successfully launch technology products.
                    </p>
                    <p>
                    I am passionate about scraping innovations using technology products including web and mobile development.
                    
                    </p>
                    <p>
                    I value being collaborative, inclusive, authentic and having fun  when doing it.
                    </p>
              </p>
          </div>
   </main>
  )
}

export default Hero