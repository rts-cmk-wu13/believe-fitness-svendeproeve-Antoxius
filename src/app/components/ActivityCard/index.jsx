"use client";
import Image from "next/image";
import {useRouter} from "next/navigation";

export default function ActivityCard ({ activity, isEnrolled, userId, token }) {
    const router = useRouter();

    const handleLeave = async () => {
        await fetch(`http://localhost:4000/api/v1/users/${userId}/activities/${activity.id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        router.refresh();
    }
    
    const handleJoin = async () => {
        await fetch(`http://localhost:4000/api/v1/users/${userId}/activities/${activity.id}`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        router.refresh();
    }

    return (
        <>
            <div className="relative h-[50vh]">
                <Image src={activity.asset.url} alt={activity.name} fill unoptimized className="w-full h-full object-cover" />
                {isEnrolled 
                    ? <button onClick={handleLeave} className="absolute bottom-7 right-7 bg-color text-white px-20 py-3 rounded">Afmeld</button> 
                    : <button onClick={handleJoin} className="absolute bottom-7 right-7 bg-color text-white px-20 py-3 rounded">Tilmeld</button>
                }
            </div>
                <article className="m-5">
                    <h1>{activity.name}</h1>
                    <p>{activity.minAge} - {activity.maxAge} år</p>
                    <p>{activity.description}</p>
                </article>
        </>
    )
}