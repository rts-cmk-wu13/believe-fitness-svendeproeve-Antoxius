import { getClassById } from "@/app/lib/classes";
import Link from "next/link";
import { FaUser } from "react-icons/fa";


export default async function RosterPage ( { params } ) {
    const { id } = await params;

    const activity = await getClassById(id);
console.log(activity);

return (
        <>
        <h1 className="pl-7 pt-8 text-2xl">My profile</h1>
        <div className="mt-6 px-5">
            <div>
                <div className="flex gap-4">
                    <FaUser className="text-black text-6xl p-3 mb-5 rounded-full bg-primary"/>
                    <div>
                        <h2 className=" text-black text-2xl font-bold">Michael Blake</h2>
                        <h3>Instructor</h3>
                    </div>
                </div>
            </div>

            <h2 className="font-bold text-3xl">{activity.className}</h2>
            <p className="my-4 font-bold">Participants:</p>
            <ul className="">
                { activity.users.map( user => (
                    <li className="border rounded-full py-2 px-4 mb-2" key={user.id}> {user.userFirstName} {user.userLastName}</li>
                ))}
            </ul>
        </div>
        </>
    )
}