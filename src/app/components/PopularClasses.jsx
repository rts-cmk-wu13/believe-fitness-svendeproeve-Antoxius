import Link from "next/link";
import { FaStar } from "react-icons/fa";

export default function PopularClasses({ classes, title = "Popular classes" }) {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl pb-4 pl-1">{title}</h1>
            <div className="flex gap-4 overflow-x-auto scroll-hidden">
                {classes.map((classItem) => (
                    <Link
                        href={`/classes/${classItem.id}`}
                        key={classItem.id}
                        className="shrink-0"
                    >
                        <div className="relative h-[40vw] w-[40vw] mb-8 rounded-4xl flex rounded-br-none overflow-hidden">
                            <img
                                src={classItem.asset.url}
                                alt={classItem.name}
                                className="h-full w-full object-cover"
                            />
                            <article className="absolute bottom-0 left-0 w-full bg-primary h-15 font-bold py-1 px-4 flex flex-col justify-center rounded-tr-4xl">
                                <h2 className="text-sm">{classItem.className}</h2>
                                <div className="flex gap-2 text-sm">
                                    <FaStar className="inline-block text-black" />
                                    <FaStar className="inline-block text-black" />
                                    <FaStar className="inline-block text-black" />
                                    <FaStar className="inline-block text-black" />
                                    <FaStar className="inline-block text-black" />
                                </div>
                            </article>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
