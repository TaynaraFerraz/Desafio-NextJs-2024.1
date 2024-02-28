"use server"

import { deletarMembro } from "@/actions/dados-pessoais/action"
import CardModal from "@/components/card-modal";
import { useState } from "react";

export default async function ModalPage({ params }: { params: { id: string } }) {

   const id = parseInt(params.id, 10);
   const dados = await deletarMembro(id);

   const [openModal, setOpenModal] = useState(false)

   return (

      <CardModal dados={dados} isOpen={openModal}/>
   )

}