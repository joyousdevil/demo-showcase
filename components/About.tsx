import React from 'react'
import Member from './Member'

const About: React.FC = () => {
  return (
    <div className="bg-stone-100 min-h-screen flex flex-col items-center justify-center">
      <section className={`flex flex-col py-20 text-neutral-900 text-3xl md:text-4xl`}>
        <h1 className="pb-10 font-normal text-center">
          About
        </h1> 
        <div className="container mx-auto px-11">
          <p className="leading-tight max-w-5xl mx-auto text-4xl lg:text-4xl tracking-tight">
            <strong>We will help you ship better apps, faster. </strong>
            Our team of expert engineers has created the best user experience in the most popular apps worldwide.
          </p>
        </div>
        <div className="container mx-auto px-11 text-center mt-28">
          <h2>Our Team</h2>
          <div>the &ldquo;spec-ops&ldquo;</div>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-20">
            <Member
              id="vincent"
              name="Vincent"
              socialId="@vince_ntc"
              link="https://github.com/joyousdevil"
            />
            <Member
              id="john"
              name="Paolo"
              socialId="@relikz"
              link="https://github.com/joyousdevil"
            />
            <Member
              id="jennifer"
              name="Bot1"
              socialId="@bot1"
              link="https://github.com/joyousdevil"
            />
            <Member
              id="linda"
              name="Bot2"
              socialId="@bot2"
              link="https://github.com/joyousdevil"
            />
            <Member
              id="marcus"
              name="Angel"
              socialId="@AceJenko"
              link="https://github.com/joyousdevil"
            />
            <Member
              id="naomi"
              name="Bot3"
              socialId="@bot3"
              link="https://github.com/joyousdevil"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
