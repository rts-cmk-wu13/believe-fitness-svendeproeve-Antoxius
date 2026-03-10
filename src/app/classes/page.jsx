import Link from "next/link";
import { FaStar } from "react-icons/fa";


export default async function page () {
    const res = await fetch(`http://localhost:4000/api/v1/classes`)
    const classes = await res.json();
    
    
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl pb-4 pl-1">Popular classes</h1>
            <div>
                {classes.map((classItem) => (
                    <Link href={`/classes/${classItem.id}`} key={classItem.id} className="hidden first:block">
                        <div className="relative h-[80vw] mb-8 rounded-4xl flex rounded-br-none overflow-hidden">
                            <img
                                src={classItem.asset.url}
                                alt={classItem.name}
                                className="h-full w-full object-cover"
                            />
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
                ))}
            </div>

            <h2 className="text-2xl pb-4 pl-1">Classes for You</h2>
            <div className="flex gap-4 overflow-x-auto pb-4">
                {classes.map((classItem) => (
                    <Link
                        href={`/classes/${classItem.id}`}
                        key={classItem.id}
                        className="shrink-0 w-[55vw] sm:w-65"
                    >
                        <div className="relative h-[55vw] rounded-4xl flex rounded-br-none overflow-hidden">
                            <img
                                src={classItem.asset.url}
                                alt={classItem.name}
                                className="h-full w-full object-cover"
                            />
                            <article className="absolute bottom-0 left-0 w-full bg-primary font-bold p-3 flex flex-col gap-2 rounded-tr-4xl">
                                <h3 className="text-sm">{classItem.className}</h3>
                                <div className="flex gap-1">
                                    <FaStar className="inline-block text-black"/>
                                    <FaStar className="inline-block text-black"/>
                                    <FaStar className="inline-block text-black"/>
                                    <FaStar className="inline-block text-black"/>
                                    <FaStar className="inline-block text-black"/>
                                </div>
                            </article>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
)
}