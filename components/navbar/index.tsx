'use client'

import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useState } from "react"

const links = [
    {href: '/', label: 'Home'},
    {href: '/contact', label: 'Contato'},
    {href: '/membros', label: 'Membros'},
    {href: '/manage', label: 'Gerenciamento de membros'},
    {href: '/login', label: 'Login'}
]

export default function NavBar() {
    const [isNavOpen, setIsNavOpen] = useState(false)
    const alternaIcone =() => setIsNavOpen(!isNavOpen)


   return (
        <header className="bg-yellow-400 sticky top-0 z-20 w-full py-7 px-4 md:p-4  ">
            <div className="flex flex-wrap items-center justify-between w-full md: w-10/12 mx-auto">
                <div className="px-4">
                    <Link href={'/'} className="flex items-center gap-4">
                        <Image src={'/assets/ConePronto.png'}
                            alt="Logo da sorveteria"
                            width={904}
                            height={904}
                            className="w-20 h-20 "
                        >
                        </Image>
                        <span className="text-3xl hidden md:block ">Gran Gelato</span>
                    </Link>

                </div>

                <nav className="flex justify-end px-4  ">
                    <div className="flex place-items-center gap-4 hidden md:inline-flex ">
                        {links.map((link, index)=>
                            <Link href={link.href}>
                                <span className="flex flex-wrap text-2xl text-center p-4 rounded-xl hover:bg-white/50 transition-all duration-200">{link.label}</span>
                            </Link>
                        )}
                    </div>

                    <div className="md:hidden">
                        {isNavOpen ?
                          <X 
                          onClick={alternaIcone}
                          className="w-12 h-12 cursor-pointer"
                          />
                          :
                          <div className="flex gap-4">
                            <Menu 
                            onClick={alternaIcone}
                            className="w-12 h-12 cursor-pointer"
                            />

                          </div>

                        }
                    </div>
                </nav>
                {isNavOpen &&
                <div className="md:hidden gap-3 grid grid-cols-2 basis-full pt-4 ">
                    {links.map((link, index)=>
                            <Link href={link.href}>
                                <span className="flex flex-wrap text-2xl p-4 rounded-xl hover:bg-white/50 transition-all duration-200">{link.label}</span>
                            </Link>
                        )} 
                </div>
                }
            </div>

        </header>
    )
}