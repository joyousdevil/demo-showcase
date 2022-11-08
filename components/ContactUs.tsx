import React, { useState, useCallback } from "react"
import Image from "next/image"

const ContactUs: React.FC = () => {
  return (
    <div className="bg-neutral-900 text-stone-100 flex flex-col justify-center pt-10 min-h-screen">
      <div className="flex-1 flex flex-col justify-center items-center pt-10 lg:pt-6">
      <div className="pb-5">
        <Image
          src="/assets/logo.png"
          width={96}
          height={96}
          alt="github logo" 
        />
      </div>
      <h2 className="text-4xl font-bold">Contact Us</h2>
      <form className="flex flex-col gap-4 mt-16 px-10 lg:mt-20 min-w-full lg:min-w-[500px]">
        <input 
          id="companyName" 
          name="companyName" 
          type="text"
          maxLength={128} 
          placeholder="Company Name" 
          className="bg-neutral-900 text-stone-100 outline-none border-2 border-stone-100 rounded-3xl px-8 py-2" 
          required 
        />
        <input
          id="email"
          name="email" 
          type="email"
          maxLength={128}
          placeholder="Your E-mail"
          className="bg-neutral-900 text-stone-100 outline-none border-2 border-stone-100 rounded-3xl px-8 py-2"
          required
        />
        <textarea
          id="message"
          name="message"
          maxLength={1000}
          placeholder="Additional information"
          className="bg-neutral-900 text-stone-100 outline-none border-2 border-stone-100 rounded-3xl px-8 py-2 min-h-[16em]"
          required
        />
        <div className="text-center mt-10">
          <button type="submit" className="bg-stone-100 text-neutral-900 rounded-3xl px-8 py-2">
            Submit
          </button>
        </div>
      </form>
      </div>
    </div>
  )
}

export default ContactUs