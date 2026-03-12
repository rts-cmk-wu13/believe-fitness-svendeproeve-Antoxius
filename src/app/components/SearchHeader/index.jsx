import { CiSearch } from "react-icons/ci";

    
export default function SearchHeader () {

return (
    <form className="flex items-center border-2 border-gray-300 rounded-full px-4 py-2 mx-5 mt-25">
        <button type="submit" className="shrink-0">
            <CiSearch />
        </button>

        <div className="relative flex-1">
            <input
                className="peer w-full bg-transparent outline-none"
                type="search"
                name="query"
                id="search"
                placeholder=" "
            />
            <label
                htmlFor="search"
                className="pointer-events-none absolute left-3 top-3 -translate-y-1/2 text-gray-400 opacity-0 peer-placeholder-shown:opacity-100 peer-focus:opacity-0"
            >
                Search classes
            </label>
        </div>
    </form>
)
}