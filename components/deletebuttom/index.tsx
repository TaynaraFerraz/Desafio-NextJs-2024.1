"use client"

import Link from "next/link"
import CardModal from "../card-modal"
import { deletarMembro } from "@/actions/dados-pessoais/action";
import { useState } from "react";


export default  function DeleteButton({id}:{id:number}) {
    const [openModal, setOpenModal] = useState(false)
    
    return (
        <div>

            <button onClick={() => setOpenModal(true)}  className="bg-sky-600 text-white xl:text-2xl px-8 md:px-16 py-2 rounded-xl">
                Excluir
            </button>
    
            <CardModal id={id} isOpen={openModal} setCloseModal={() => setOpenModal(!openModal)}/>
        </div>
    )
}