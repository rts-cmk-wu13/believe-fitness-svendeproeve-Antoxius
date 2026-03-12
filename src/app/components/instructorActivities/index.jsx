import { getAllActivities } from "@/app/lib/activities";
import Link from "next/link";


export default async function InstructorActivities ({ userId }) {

    const activities = await getAllActivities();

    const instructorActivities = activities.filter(activity => activity.instructorId === userId);
    console.log("Instruktørens hold", instructorActivities);
    

    return (
        <>
            <h1 className="font-bold text-2xl text-white">Mine hold</h1>
            <Link href={"/create-class"} className="text-white mb-4 inline-block">+</Link>
            <ul className="p-5 mt-4">
                {instructorActivities.map(activity => (
                    <li key={activity.id} className="bg-white/70 p-5 rounded-xl mb-5 flex flex-col gap-2">
                        <h2 className="font-bold text-2xl">{activity.name}</h2>
                        <p>{activity.weekday} kl.{activity.time}</p>
                        <p>Max participants: {activity.maxParticipants} joined: {activity.users.length}</p>
                        <Link href={`/profile/roster/${activity.id}`} className="uppercase">participants</Link> 
                    </li>
                ))}
            </ul>
        </>

    )
}