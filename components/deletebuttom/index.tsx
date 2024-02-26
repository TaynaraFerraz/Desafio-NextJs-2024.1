'use client'

import Link from "next/link"


export default function DeleteButton({id}:{id: number | undefined}) {
    return (
        <Link href={`/manage/delete/${id}`}  className="bg-sky-600 text-white px-8 md:px-16 py-3 rounded-xl">
            Excluir
        </Link>
    )
}