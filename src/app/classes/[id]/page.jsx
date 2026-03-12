import { cookies } from "next/headers";
import { getActivityById } from "../../lib/activities";
import ActivityCard from "@/app/components/ActivityCard";


export default async function SingleActivityPage ({ params }) {
    const { id } = await params;
    const activity = await getActivityById(id);

    let trainerAssetUrl = null;
    if (activity.trainer.assetId) {
        const res = await fetch(`http://localhost:4000/api/v1/assets/${activity.trainer.assetId}`);
        if (res.ok) {
            const trainerAsset = await res.json();
            trainerAssetUrl = trainerAsset.url;
        }
    }
    // Jeg har valgt at hente trainerens asset i dette komponent, da det er den eneste måde jeg kunne få det til at virke på, uden at downloade billedet.

    const cookieStore = await cookies();

    // Hvis brugeren ikke er logget ind, findes cookies ikke.
    // Derfor hentes de sikkert og sættes til null hvis de mangler.
    let userId = null;
    let token = null;

    const userIdCookie = cookieStore.get("userId");
    if (userIdCookie) {
        userId = userIdCookie.value;
    }

    const tokenCookie = cookieStore.get("authToken");
    if (tokenCookie) {
        token = tokenCookie.value;
    }

    /*
        token objekt ser sådanne ud (value er eksempel på token key):
        {
            name: "token",
            value: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3RuYW1lIjoiQW50b2tpdXMiLCJsYXN0bmFtZSI6IkFudG9raXVzIiwicm9sZSI6Imluc3RydWN0b3IiLCJpYXQiOjE2ODg4ODQyMDksImV4cCI6MTY4ODg5MjgwOX0.7n8jKqjLhHkK8a7e7nqjvHh8u9r2l5sPzqjvVwM8"}
        Derfor skriver jeg token.value for at få fat i selve token stringen, som skal bruges i min Authorization header
    */



    console.log(activity);

    // Standard: ikke tilmeldt.
    // Hvis vi har et userId, kan vi tjekke om brugeren er i activity.users.
    let isEnrolled = false;
    if (userId) {
        isEnrolled = activity.users.some(user => user.id === Number(userId));
    }
    // Sammenligner brugerens id fra arrayet med det id jeg har fisket ud a cookien og laver det om til number
    // for at finde ud af om brugeren er tilmeldt aktiviteten, så jeg kan vise det rigtige på knappen (join/leave)
    // Så jeg enten får true eller false

    console.log("isEnrolled", isEnrolled);
 
    
return (
    <>
        <article className="text-white">
            <ActivityCard
                activity={activity}
                isEnrolled={isEnrolled}
                userId={userId}
                token={token}
                trainerAssetUrl={trainerAssetUrl}
            />
        </article>
    </>
)
}