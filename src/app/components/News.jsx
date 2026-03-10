import Image from "next/image";

const NEWS_URL = "http://localhost:4000/api/v1/news";



export default async function NewsPage() {
    const res = await fetch(NEWS_URL);

    if (!res.ok) {
        return (
            <>
                {/* <h2 className="font-bold text-yellow-500 text-5xl m-8">News</h2> */}
                <div className="m-8">Kunne ikke hente news ({res.status}).</div>
            </>
        );
    }
    const news = await res.json();
    
    return (
        <>
            <div className="mx-5">

            <h2 className="font-bold text-yellow-400 text-5xl my-6">News</h2>
                {news.map(newsItem => (
                
                    <div key={newsItem.id}>
                        <h2 className="font-bold text-2xl">{newsItem.title}</h2>
                        <div className="relative h-[50vw] my-6 overflow-hidden">
                        <Image src={newsItem.asset.url} alt={newsItem.title} fill unoptimized className="h-full w-full object-cover"/>
                        </div>
                        <p className="text-black pb-5">{newsItem.text}</p>
                        
                    </div>
                    ))
                }
                
            </div>
        </>
    );
    
}