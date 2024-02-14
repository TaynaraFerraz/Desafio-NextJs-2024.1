import prisma from "@/lib/db";

export async function fetchBuscaMembros(query:string){
 
    const membros= await prisma.membro.findMany({
        where: {
            OR: [{ name:{contains: query, mode:"insensitive"}}],
        },
        
        orderBy:{
            name: 'asc',
        }
    })

    return membros;
}