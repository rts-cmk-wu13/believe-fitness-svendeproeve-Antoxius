"use client"

export default function CreateActivity () {

    return (
        <div className="p-5 mt-20">
            <h1 className="font-bold text-2xl mb-4">Create a new class</h1>
            <form className="flex flex-col gap-4" action="">
                <div className="relative">
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder=" "
                        className="peer w-full p-2 border rounded-full"
                    />
                    <label
                        htmlFor="name"
                        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 opacity-0 peer-placeholder-shown:opacity-100 peer-focus:opacity-0"
                    >
                        Class Name
                    </label>
                </div>
                <div className="relative">
                    <textarea
                        id="description"
                        name="description"
                        placeholder=" "
                        className="peer w-full h-32 resize-none p-2 border rounded-2xl"
                    />
                    <label
                        htmlFor="description"
                        className="pointer-events-none absolute left-4 top-4 text-gray-400 opacity-0 peer-placeholder-shown:opacity-100 peer-focus:opacity-0"
                    >
                        Class Description
                    </label>
                </div>
                <div className="flex gap-4">
                    <div className="relative flex-1">
                        <select
                            defaultValue=""
                            id="weekday"
                            name="classDay"
                            required
                            className="peer w-full p-2 border rounded-full"
                        >
                            <option value="" disabled hidden></option>
                            <option value="Monday">Monday</option>
                            <option value="Tuesday">Tuesday</option>
                            <option value="Wednesday">Wednesday</option>
                            <option value="Thursday">Thursday</option>
                            <option value="Friday">Friday</option>
                            <option value="Saturday">Saturday</option>
                            <option value="Sunday">Sunday</option>
                        </select>
                        <label
                            htmlFor="weekday"
                            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 opacity-0 peer-invalid:opacity-100 peer-focus:opacity-0"
                        >
                            Class day...
                        </label>
                    </div>

                    <div className="relative flex-1">
                        <input
                            type="time"
                            id="time"
                            name="classTime"
                            placeholder=" "
                            className="peer w-full p-2 border rounded-full"
                        />
                        <label
                            htmlFor="time"
                            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 opacity-0 peer-placeholder-shown:opacity-100 peer-focus:opacity-0"
                        >
                            Class time
                        </label>
                    </div>
                </div>
                <div className="relative">
                    <input
                        type="text"
                        id="class-trainer"
                        name="classTrainer"
                        placeholder=" "
                        className="peer w-full p-2 border rounded-full"
                    />
                    <label
                        htmlFor="class-trainer"
                        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 opacity-0 peer-placeholder-shown:opacity-100 peer-focus:opacity-0"
                    >
                        Class trainer
                    </label>
                </div>
                <div className="relative">
                    <input
                        type="number"
                        id="max-participants"
                        name="maxParticipants"
                        placeholder=" "
                        className="peer w-full p-2 border rounded-full"
                    />
                    <label
                        htmlFor="max-participants"
                        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 opacity-0 peer-placeholder-shown:opacity-100 peer-focus:opacity-0"
                    >
                        Max participants
                    </label>
                </div>
                <div className="relative">
                    <input
                        type="text"
                        id="asset-url"
                        name="assetUrl"
                        placeholder=" "
                        className="peer w-full p-2 border rounded-full"
                    />
                    <label
                        htmlFor="asset-url"
                        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 opacity-0 peer-placeholder-shown:opacity-100 peer-focus:opacity-0"
                    >
                        Asset URL
                    </label>
                </div>
                <button type="submit" className="bg-primary text-white font-bold py-2 px-4 rounded-full">Create class</button>
                
            </form>
        </div>
    )
}