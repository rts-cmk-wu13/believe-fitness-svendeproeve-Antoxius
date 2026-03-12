import SearchHeader from "../components/SearchHeader";
import PopularClasses from "../components/PopularClasses";
export default async function page ({ searchParams }) {

    const { query } = await searchParams

    // console.log(query);
    

    const res = await fetch(`http://localhost:4000/api/v1/classes`)
    const classes = await res.json();
    console.log(classes);
    
    const filteredClasses = query 
        ? classes.filter(classItem => classItem.className.toLowerCase().includes(query.toLowerCase()))
        : classes;
    console.log(filteredClasses);
    
return (
    <>
        <SearchHeader />
        <PopularClasses classes={filteredClasses} />
    </>
)
}