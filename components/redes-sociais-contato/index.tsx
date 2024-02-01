import Image from "next/image"
import Link from "next/link"
import Text from "../text"

const imagens = [
    { src: '/assets/footer/facebook.png', alt: "logo do facebook ", width: 30 },
    { src: '/assets/footer/whatsapp.png', alt: "logo do whatsapp ", width: 30 },
    { src: '/assets/footer/instagram.png', alt: "logo instagram ", width: 30 },
    { src: '/assets/footer/tiktok.png', alt: "logo do tiktok ", width: 30 }
]

export default function RedesSociais() {
    return (
        <div>
            <div className="flex flex-col items-center justify-center gap-20 lg:grid lg:grid-cols-2 ">
                <div className="flex items-center justify-center gap-12 lg:grid-span-1">
                    <Link href={'/'} className=" ">
                        {imagens.map((imagens, index) =>
                            <Image src={imagens.src} alt={imagens.alt} width={imagens.width} height={imagens.width}
                                className="my-20"
                            >
                            </Image>
                        )}
                    </Link>
                    <div className="flex flex-col my-20 gap-20">
                        <span className="text-3xl">Gran Gelato Sorveteria</span>
                        <span className="text-3xl ">(32) 99857-5521</span>
                        <span className="text-3xl">@gran.gelato</span>
                        <span className="text-3xl">Gran Gelato Sorveteria</span>
                    </div>


                </div>

                <div className=" w-2/3 lg:grid-span-1">
                    <Image src={'/foto-conato.svg'} alt="Foto ilustrativa de comunicação" width={904} height={904} className="w-full " />
                </div>
            </div>

        <div className="mt-10 mb-24">

            <Text text='Caso queira ter uma experiência total das nossas delícias, venha nos visitar em Rua Avelino da Costa e Silva,157, Belo Horizonte ou qualquer outra franquia que terá sua localização exposta nas redes sociais acima.' />
        </div>
        </div>
    )
}