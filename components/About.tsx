import React from 'react'
import Member from './Member'

const About: React.FC = () => {
  return (
    <div className="bg-stone-100 min-h-screen flex flex-col items-center justify-center">
      <section className={`flex flex-col py-20 text-neutral-900 text-3xl md:text-4xl`}>
        <div className="container mx-auto px-11">
          <p className="leading-tight max-w-5xl mx-auto text-4xl lg:text-4xl tracking-tight">
            <strong>We will help you ship better apps, faster. </strong>
            Our team of expert engineers has created the best user experiences in some of the most popular apps worldwide.
          </p>
          <div className="leading-tight max-w-5xl mx-auto text 4xl lg:text-4xl tracking-tight pt-10">
            <div>Our services:</div>
            <div><strong>- From Idea to AppStore</strong>: Full App Design and Development</div>
            <div><strong>- Performance Optimization</strong>: Startup-time, Animation and overall smoothness optimization for existing apps</div>
            <div><strong>- Custom Module Development</strong>: Development of specific UIs, animations, gestures or native modules for existing apps</div>
            <div><strong>- Consulting</strong>: One-on-one consulting with a React Native, iOS or Android expert and bug fixing</div>
          </div>
        </div>
        <div className="container mx-auto px-5 text-center mt-28">
          <h2 className="font-black">Our Team</h2>
          <div>the &ldquo;spec-ops&ldquo;</div>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-10 lg:gap-20">
            <Member
              id="johnwick"
              name="John Wick"
              socialId="@boogeymannn"
              link="https://github.com/joyousdevil"
            />
            <Member
              id="vader"
              name="Darth Vader"
              socialId="@skywalker78"
              link="https://github.com/joyousdevil"
            />
            <Member
              id="hulk"
              name="The Hulk"
              socialId="@dr.bbanner"
              link="https://github.com/joyousdevil"
            />
            <Member
              id="dumbledore"
              name="Albus D."
              socialId="@head_master"
              link="https://github.com/joyousdevil"
            />
            <Member
              id="morpheus"
              name="Morpheus"
              socialId="@thredpill"
              link="https://github.com/joyousdevil"
            />
            <Member
              id="itachi"
              name="Itachi"
              socialId="@mangekyo.Sh"
              link="https://github.com/joyousdevil"
            />
            <Member
            id="thor"
            name="Thor"
            socialId="@GodOfThunder"
            link="https://github.com/joyousdevil" 
            />
            <Member
            id="kakashi"
            name="Kakashi"
            socialId="@SixthHokage"
            link="https://github.com/joyousdevil" 
            />
            <Member
            id="spiderman"
            name="Spiderman"
            socialId="@NYCwallcrawler"
            link="https://github.com/joyousdevil"
            />
            <Member
            id="wolverine"
            name="Logan"
            socialId="@xwolverine"
            link="https://github.com/joyousdevil" 
            />
            <Member
            id="thanos"
            name="Thanos"
            socialId="@infinitygemz"
            link="https://github.com/joyousdevil"
            />
            <Member
            id="ironman"
            name="Ironman"
            socialId="@realtonystark"
            link="https://github.com/joyousdevil"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
