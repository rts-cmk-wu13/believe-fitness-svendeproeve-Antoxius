"use client";
import { useActionState } from "react"; 
import { loginUser } from "../../lib/actions";


const initialState = {
    values: {
        username: "",
        password: ""
    },
    errors: undefined
}

export default function LoginForm () {

    const [state, formAction, isPending] = useActionState(loginUser, initialState);
    
    return (
        <form action={formAction} noValidate className="flex mt-5 flex-col gap-5 w-84 mx-auto">
            <h3 className="text-xl font-bold">Log in with your credentials</h3>
            <div>
                <label className="sr-only" htmlFor="username">Brugernavn</label>
                <input className="border border-gray-300 w-full rounded-full text-black p-2" type="text" id="username" name="username" defaultValue={state.values.username}/>
                {state.errors?.username && <p className="text-red-500">{state.errors.username}</p>}
                {/*(optional chaining) ? = Hvis sandt: fortsæt til username og skriv username-fejlen fra loginScheme i vores action.js i et <p>-tag. */}
            </div>
            <div>
                <label className="sr-only" htmlFor="password">Adgangskode</label>
                <input className="border border-gray-300 w-full rounded-full text-black p-2" type="password" id="password" name="password" defaultValue={state.values.password} />
                {state.errors?.password && <p className="text-red-500">{state.errors.password}</p>}
            </div>
            { state.errors?.form && <p className="text-red-500">{state.errors.form}</p>}
            <button disabled={isPending} className="bg-primary w-full disabled:bg-gray-400 px-5 py-3 rounded-full text-black font-bold" type="submit">{ isPending ? "Logger ind..." : "Log ind"}</button>
        </form>
)
}