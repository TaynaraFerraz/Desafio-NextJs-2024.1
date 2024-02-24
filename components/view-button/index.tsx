'use client'

import Link from "next/link";

export default function ViewButton({ id }: { id: number }) {
    return (
        <Link href={`/manage/view/${id}`}  >
            <button className="bg-sky-600 text-white px-6 md:px-12 py-2 rounded-xl ">
                Visualizar
            </button>
        </Link>
    )


}