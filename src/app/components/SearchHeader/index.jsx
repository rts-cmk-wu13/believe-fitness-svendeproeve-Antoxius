import { CiSearch } from "react-icons/ci";

    
export default function SearchHeader () {

return (
    <form className="flex justify-between border-2 border-gray-300 rounded-full px-4 py-2 mx-5 mt-25">
        <button type="submit"><CiSearch /></button>
        <label htmlFor="search" className="text-gray-400">Search classes</label>
        <input type="search" name="query" id="search" />
    </form>
)
}