import prisma from "@/lib/db";
import { redirect } from "next/dist/server/api-utils";

export async function fetchBuscaMembros(query:string){
 
    const membros= await prisma.membro.findMany({
        where: {
            OR: [{ name:{contains: query, mode:"insensitive"}}],
        },
        
    })

    
    return membros;
}