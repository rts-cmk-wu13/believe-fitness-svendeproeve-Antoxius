"use client"

import LogoutAction, { isUserLoggedIn } from "./action"
import { useEffect, useState } from "react";

export default function LogoutButton ({ onClick }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // UseEffect er en React hook, som tager 2 parametre.
    // Det første parameter er en funktion, som bliver kørt når komponentet bliver renderet første gang.
    // Det andet parameter er et array (dependency array) som bestemmer hvornår useEffect funktionen skal køres
    // Så hver gang der er noget i dependency arrayet der bliver ændret (Fx et state), så bliver useEffect funktionen kørt igen.
    useEffect(function() {
        // IIFE (Immidiately Invoked Function Expression) er en funktion som bliver defineret og kørt med det samme.
        (async function() {
            setIsLoggedIn (await isUserLoggedIn()); 
        }) ()
        }, []);

    return isLoggedIn ? <button onClick={LogoutAction}>Log Out</button> : null;
}