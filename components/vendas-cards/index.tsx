import { Star } from "lucide-react"
import Image from "next/image"

type produtosProps = {
    nome: string,
    valor: string,
    src: string
}

export default function Produtos({ nome, valor, src }: produtosProps) {
    return (
        <div className=" mt-12 flex bg-sky-600 text-white rounded-lg hover:shadow-xl ">

            <div>
                <Image src={src}
                    alt="Imagem dos produtos em destaque"
                    width={904}
                    height={904}
                    className="w-40 rounded-l-lg static"
                />
            </div>

            <div className=" flex flex-col justify-between mx-4 my-2">
                <div className="">
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