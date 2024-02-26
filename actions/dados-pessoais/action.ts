"use server"

import prisma from "@/lib/db"
import { Membro } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function fetchDados(){

    const dados = await prisma.membro.findMany({
       where:{
        published: true
       },
       select:{
            id: true,
            name: true,
            cargo: true,
            email: true,
            published:true
       },
       
    })

    return dados;
}

export async function deletarMembro(id: number){
    await prisma.membro.delete({
        where: {id},
    });

    revalidatePath("/manage")
}

export async function criarMembro(formData:FormData) {
    const name = formData.get("name") as string;
    const cargo = formData.get("cargo") as string;
    const email = formData.get("email") as string;

    const published = true;

    await prisma.membro.create({
        data:{
            name,
            cargo,
            email,
            published
        }
    })

    redirect("/manage")
}

export async function fetchDadosById(id:number){
    const dados = await prisma.membro.findUnique({
        where: {id},
        select:{
            id: true,
            name: true,
            cargo: true,
            email: true,
        }
    })

    return dados;
}

export async function EditMembro(id:number, formData: FormData){
    const name = formData.get("name") as string;
    const cargo = formData.get("cargo") as string;
    const email = formData.get("email") as string;

    await prisma.membro.update({
        where:{id},
        data:{
            name,
            cargo, 
            email
        },
    });

    redirect("/manage")
}

export async function VerificaNomeEmail(name: string, email: string, formData:FormData){
    const nome = formData.get("name") as string;
    const newemail = formData.get("email") as string;

    const result = await prisma.membro.count({
        where:{
            name : nome,
            email : newemail
        }
    })

   return result;
}

