import React from "react"
import Link from "next/link"
import Image from "next/image"

const Footer: React.FC = () => (
  <footer className="min-h-full bg-neutral-900 text-stone-100 flex gap-8 items-center justify-center p-20">
    <Image
      src="/assets/github-filled.svg"
      width={28}
      height={28}
      alt="github logo"
    />
    <Link href="https://github.com/joyousdevil" target="_blank" rel="noreferrer">Github </Link>
    <Link href="https://instagram.com/joyousdevil" target="_blank" rel="noreferrer">Instagram </Link>
    <Link href="https://nolansbabyshower.com" target="_blank" rel="noreferrer">Nolan</Link>
  </footer>
)

export default Footer