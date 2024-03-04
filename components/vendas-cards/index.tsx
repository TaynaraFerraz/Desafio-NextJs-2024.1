import { Star } from "lucide-react"
import Image from "next/image"

type produtosProps = {
    nome: string,
    valor: string,
    src: string
}

export default function Produtos({ nome, valor, src }: produtosProps) {
    return (
        <div className=" w-[318px] md:w-[500px] mt-12 flex bg-sky-600 text-white rounded-lg hover:shadow-2xl ">

            <div className="w-1/3 overflow-hidden rounded-l-lg">
                <Image src={src}
                    alt="Imagem dos produtos em destaque"
                    width={1920}
                    height={1080}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className=" flex flex-col justify-between mx-4 my-2">
                <div className="flex flex-col gap-2">
                    <span className="text-3xl ">{nome}</span>
                    <div className="flex gap-4">
                        <Star className="text-2xl text-yellow-500" />
                        <Star className="text-2xl text-yellow-500" />
                        <Star className="text-2xl text-yellow-500" />
                        <Star className="text-2xl text-yellow-500" />
                        <Star className="text-2xl text-yellow-500" />
                    </div>
                </div>

                <div>
                    <span className="text-2xl">{valor}</span>
                </div>

            </div>

        </div>
    )
}