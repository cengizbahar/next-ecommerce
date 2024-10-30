"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const Menu = () => {

    const [open, setOpen] = useState(false)
    return (
        <div className="">
            <Image src="/menu.png" alt="deneme" width={28} height={28} className="cursor-pointer" onClick={() =>setOpen((prev) => !prev)}/>
            {
                open && (
                    <div className="absolute bg-black text-white left-0 top-20 w-full flex flex-col items-center justify-center gap-8 text-xl z-10 h-[calc(100vh-80px)]">
                        <Link href="/">Anasayfa</Link>
                        <Link href="/">Mağaza</Link>
                        <Link href="/">Hakkımızda</Link>
                        <Link href="/">İletişim</Link>
                        <Link href="/">Beraber</Link>
                        <Link href="/">Deals</Link>
                        <Link href="/">Deals</Link>
                    </div>
                )
            }
        </div>
    )
}

export default Menu