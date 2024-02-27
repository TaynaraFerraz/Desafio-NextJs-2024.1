'use client'

import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";

const imagens = [
    { src: '/assets/footer/facebook.png', alt: "logo do facebook ", width: 30, href: '/' },
    { src: '/assets/footer/whatsapp.png', alt: "logo do whatsapp ", width: 30, href: '/'  },
    { src: '/assets/footer/instagram.png', alt: "logo instagram ", width: 30, href: '/'  },
    { src: '/assets/footer/tiktok.png', alt: "logo do tiktok ", width: 30, href: '/'  }
]

export default function Footer() {
    return (
        <footer className="bg-yellow-400 flex items-center">

            <div className=" w-1/2 md:w-1/6 m-4 ">
                <div className="flex">
                {imagens.map((imagens, index) =>
                    <Link href={imagens.href} >
                        <Image src={imagens.src} alt={imagens.alt} width={imagens.width} height={imagens.width}
                            className="m-3"
                        >
                        </Image>
                    </Link>
                    )}
                
                </div>
                   
                <span className=" flex gap-4 m-3 md:text-xl ">
                    <Phone />
                    (32) 99857-5521
                </span>

                <h3 className="m-3 md:text-xl">Rua Avelino da Costa e Silva,157, Belo Horizonte</h3>
            </div>


            <div className=" hidden  w-4/6 p-4 md:flex flex-col md:items-center md:block ">
                <h3 className="text-2xl">Equipe especializada em desenvolvimento de sorvetes a mais de 15 anos.</h3>
                <h3 className="text-2xl"> Entre em contato conosco para adquirir seu gelato!</h3>
            </div>


            <div className="w-1/2 flex items-center justify-center md:w-1/6 ">
                <Image src={'/assets/ConePronto.png'} alt="Logo da sorveteria" width={904} height={904}
                    className="w-24 h-24 "
                />
            </div>
        </footer>
    )
}