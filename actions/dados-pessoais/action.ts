"use server"

import prisma from "@/lib/db"

export async function fetchDados(){

    const dados = await prisma.membro.findMany({
       where:{
        published: true
       },
       select:{
            name: true,
            cargo: true,
            email: true
       },
       
    })

    return dados;
}