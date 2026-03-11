"use client";
import { FaStar } from "react-icons/fa";
import Navigation from "../Navigation";
import JoinClassButton from "@/app/components/JoinClassButton";
import LeaveClassButton from "@/app/components/LeaveClassButton";


export default function ActivityCard ({ activity, isEnrolled, userId, token, trainerAssetUrl }) {
    let isLoggedIn;
    if (token && userId) {
        isLoggedIn = true;
    } else {
        isLoggedIn = false;
    }

    return (
        <>
            <div className="relative h-[50vh]">
                <Navigation />
                <h1 className="absolute bottom-20 left-4 z-10 color-primary text-3xl w-40 font-bold">
                    {activity.className}
                </h1>
                <div className="absolute bottom-10 left-4 right-4 z-10 text-md font-bold">

                <div className="flex gap-2 w-full items-center color-primary">
                    <FaStar className="inline-block"/>
                    <FaStar className="inline-block"/>
                    <FaStar className="inline-block"/>
                    <FaStar className="inline-block"/>
                    <FaStar className="inline-block"/>
                    <p className="color-primary">5/5</p>
                    <button className="ml-auto border-2 rounded-full px-8 py-2">Rate</button>
                </div>
                </div>
                <img src={activity.asset.url} alt={activity.name} className="w-full h-full object-cover" />

                
            </div>
            
                <article className="m-5 flex flex-col gap-5 text-black">
                    <p className="font-bold">{activity.classDay} - {activity.classTime}</p>
                    <p>{activity.classDescription}</p>
                    <h2 className="font-bold text-xl">Trainer</h2>
                    <div className="flex items-center gap-3">
                        <img className="w-20 rounded-xl" src={trainerAssetUrl} />
                        <h3 className="font-bold">{activity.trainer.trainerName}</h3>
                    </div>
                </article>

				{isLoggedIn ? (
					<div className="w-full px-5 pb-7 text-black ">
						{isEnrolled 
                        ? <LeaveClassButton classId={activity.id} className="uppercase bg-primary text-center w-full font-bold py-3 rounded-full" />
                        : <JoinClassButton classId={activity.id} className="uppercase bg-primary text-center w-full font-bold py-3 rounded-full" />
					}
					</div>
				) : null}
        </>
    )
}