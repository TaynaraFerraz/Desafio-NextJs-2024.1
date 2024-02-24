'use client'

import Link from "next/link";

export default function EditButton({id}:{id: number}) {
    return (
        <Link href={`/manage/edit/${id}`}>
            <button  className="bg-sky-600 text-white px-8 md:px-16 py-2  rounded-xl">
                Editar
            </button>
        </Link>
    )
}