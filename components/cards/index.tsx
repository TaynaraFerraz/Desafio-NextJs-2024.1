import { Award } from "lucide-react";
import Image from "next/image";

type CardsProps={
    src:string,
    text:string
}

export default function Cards({text, src}:CardsProps){
    return(
        <div className="flex flex-col items-center justify-center w-72 h-72 md:w-80 h-80 bg-gray-300 rounded-xl p-12 mx-3 md:mx-0 hover:shadow-xl">
           <div>
            <Image 
            src={src}
            alt="Informações sobre a loja"
            width={904}
            height={904}
            className="w-8"
            />
           </div>

            <div className=" mt-6 ">
            <p className="text-2xl text-center">{text}</p>
            </div>
        </div>
    )
}