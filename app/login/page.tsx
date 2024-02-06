'use client'

import { UserRound } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Page() {
    return (
        <div className="min-h-screen">
            <div className="flex items-center justify-center mb-6 mt-6 md:mt-24">
            <div className=" w-11/12 md:w-2/3 flex flex-col flex-wrap items-center justify-center md:flex-row ">
                    <div className="w-full flex flex-col items-center justify-center p-20 rounded-t-lg bg-slate-200 lg:rounded-none lg:rounded-l-lg lg:w-1/2 ">
                        <div className="bg-indigo-400 p-6 rounded-full">
                            <UserRound className="w-14 h-14  text-blue-900"/>
                        </div>
                        <form className="mt-20 flex flex-col">
                            
                                <label className="text-3xl"> Email: </label>
                                <input type="text" id="email" placeholder="Digite seu email" className="w-64 h-10 text-xl
                                shadow p-2 rounded-lg bg-gray-300 outline-none md:w-96"></input>
                            

                            <div className="flex flex-col mt-8">
                                <label className="text-3xl"> Senha: </label>
                                <input type="password" id="password" placeholder="Digite sua senha" className="w-64 h-10 p-2 rounded-lg bg-gray-300 shadow text-xl outline-none md:w-96"></input>
                            </div>
                        </form>

                        <Link href={'/manage'}
                        className="bg-sky-700 text-3xl text-white py-2 px-24 mt-12 rounded-2xl hover:bg-sky-600"
                        >Login</Link>
                    </div>

                    <div className="bg-blue-300 flex rounded-b-lg lg:rounded-none lg:rounded-r-lg lg:mb-0 lg:w-1/2  lg:h-[628px] ">
                        <Image src={'/foto-login.svg'} alt="Imagem ilustrativa do login" width={904} height={904} className=""/>
                    </div>
                 </div>
            </div>
        </div>
    )
}