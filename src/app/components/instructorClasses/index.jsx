import { getAllClasses } from "@/app/lib/classes";
import Link from "next/link";


export default async function InstructorClasses ({ userId }) {

    const instructorClasses = await getAllClasses();

    console.log(instructorClasses);
    


    return (
        <>
            <h1 className="font-bold text-2xl text-white">Mine hold</h1>
            <Link href={"/create-class"} className="text-white mb-4 inline-block">+</Link>
            <ul className="p-5 mt-4">
                {instructorClasses.map(activity => (
                    <li key={activity.id} className="border  p-5 rounded-xl mb-5 flex flex-col gap-2">
                        <h2 className="font-bold text-2xl">{activity.className}</h2>
                        <p>{activity.classDay} kl.{activity.classTime}</p>
                        <p>Max participants: {activity.maxParticipants} </p>
                        <Link href={`/profile/roster/${activity.id}`} className="uppercase font-bold bg-primary rounded-full inline-block text-center py-2 px-4 self-start">participants</Link>

                    </li>
                ))}
            </ul>
        </>

    )
}