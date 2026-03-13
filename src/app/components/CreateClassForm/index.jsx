"use client"

import { useActionState } from "react"
import { createClass } from "../../lib/classes"

const initialState = {
    className: null,
    classDescription: null,
    classDay: null,
    classTime: null,
    classTrainer: null,
    maxParticipants: null,
    asset: null
}

export default function CreateClassForm ({ trainerId, }) {

    const [state, formAction, isPending] = useActionState(createClass, initialState);

    return (
        <div className="p-5 mt-20">
            <h1 className="font-bold text-2xl mb-4">Create a new class</h1>
            <form className="flex flex-col gap-4" action={formAction} encType="multipart/form-data">
                <div className="relative">
                    <input
                        type="text"
                        id="className"
                        name="className"
                        placeholder=" "
                        className="peer w-full p-2 border rounded-full"
                    />
                    <label
                        htmlFor="className"
                        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 opacity-0 peer-placeholder-shown:opacity-100 peer-focus:opacity-0"
                    >
                        Class Name
                    </label>
                </div>
                <div className="relative">
                    <textarea
                        id="classDescription"
                        name="classDescription"
                        placeholder=" "
                        className="peer w-full h-32 resize-none p-2 border rounded-2xl"
                    />
                    <label
                        htmlFor="classDescription"
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
                <div className="relative flex-1">
                        <select
                            defaultValue=""
                            id="classTrainer"
                            name="trainerId"
                            required
                            className="peer w-full p-2 border rounded-full"
                        >
                            <option value="" disabled hidden></option>
                            <option value={1}>Davina Jones</option>
                            <option value={2}>Sara Connor</option>
                            <option value={3}>Michael Blake</option>
                            <option value={4}>Khaled Al-Sadek</option>
                        </select>
                        <label
                            htmlFor="classTrainer"
                            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 opacity-0 peer-invalid:opacity-100 peer-focus:opacity-0"
                        >
                            Class Trainer...
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
                        Max participants...
                    </label>
                </div>
                <div className="relative">
                    <label
                        htmlFor="asset"
                        className="pointer-events-none absolute left-4 bottom-10 text-gray-400"
                    >
                        Choose an image:
                    </label>
                    <input
                        type="file"
                        id="file"
                        name="file"
                        accept="image/*"
                        className="peer w-full p-2 border rounded-full"
                    />
                </div>

                <input type="hidden" name="trainerId" value={trainerId} />
                <button type="submit" className="bg-primary text-white font-bold py-2 px-4 rounded-full">Create class</button>
                
            </form>
        </div>
    )
}