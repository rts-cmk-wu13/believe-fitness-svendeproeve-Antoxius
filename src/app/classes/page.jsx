import Link from "next/link";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

export default async function page () {
    const res = await fetch(`http://localhost:4000/api/v1/classes`)
    const classes = await res.json();
    
return (
    <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl pb-4 pl-1">Popular classes</h1>
        {classes.map(classItem => (
            <Link href={`/classes/${classItem.id}`} key={classItem.id}>
                <div className="relative h-[80vw] mb-6 rounded-4xl flex flex-row rounded-br-none overflow-hidden">
                    <Image src={classItem.asset.url} alt={classItem.name} fill unoptimized className="h-full w-full object-cover"/>
                    <article className="absolute bottom-0 left-0 w-60 bg-primary font-bold p-4 flex flex-col gap-3 rounded-tr-4xl">
                        <h2>{classItem.className}</h2>
                        <div className="flex gap-2">
                            <FaStar className="inline-block text-black"/>
                            <FaStar className="inline-block text-black"/>
                            <FaStar className="inline-block text-black"/>
                            <FaStar className="inline-block text-black"/>
                            <FaStar className="inline-block text-black"/>
                        </div>
                    </article>
                </div>
            </Link>
            ))
        }
    </div>
)
}