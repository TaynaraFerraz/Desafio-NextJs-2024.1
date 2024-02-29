'use client'

import { deletarMembro } from "@/actions/dados-pessoais/action";
import { Membro } from "@prisma/client";
import { X } from "lucide-react";
import { redirect } from "next/dist/server/api-utils";


export default function CardModal({ isOpen, setCloseModal, id }: { isOpen: boolean, setCloseModal:boolean, id:number }) {

    
    if (isOpen) {
        return (
            <div className="fixed inset-x-0 inset-y-0 bg-[rgb(0,0,0,0.7)] z-50 ">
                <div className="fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-white h-96 border-2 rounded-xl w-[320px] sm:w-[520px] ">
                    <div className="flex justify-end">
                        <X className="w-8 h-8 mb-6 m-2 cursor-pointer" onClick={setCloseModal} />
                    </div>
                    <div className=" flex flex-col justify-center items-center gap-16 " id="modal">
                        <p className="text-3xl text-center mt-12">Deseja excluir permanentemente esse membro?</p>

                        <button className="bg-red-500 text-white text-2xl p-4 rounded-xl" onClick={() =>deletarMembro(id)}
                        >Excluir</button>
                    </div>
                </div>
            </div>
        )
    }

    return null


}