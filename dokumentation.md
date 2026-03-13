# Believe Fitness — Projekt Dokumentation
Xenius Tolderlund, WU13

Dato: 13-03-2026

## 1) Hvad er mit projekt?
**Believe Fitness** er en Next.js app, som viser fitness hold, og hvor man kan søge efter hold og se detaljer om et hold.

Hvis man logger ind, kan man også:
- se sin profil
- tilmelde og framelde hold

Forsiden (/home) bruger jeg som min landing page. Den indeholder ting som nyheder, testimonials, nyhedsbrev og en kontakt formular.

### Valgfri opgave
Jeg har valgt at lave valgrfi opgave B - Opret bruger.
Jeg har valgt ikke at lave ratings funktionaliteten men kun lave UI delen så det ligner layoutet

## 2) Installerede pakker (Tech Stack)
- **Next.js** er et JS framework, som er komponent-baseret. Next har filbaseret routing, så jeg fx undgår at bruge React-Router og have en Router.js fil og giver mig også mulighed for at afvikle kode og komponenter på serveren. Derudover giver det en større beskyttelse af sensitive data fordi jeg kan afvikle og håndtere data på serveren
- **React** er et js bibliotek som giver mig adgang til fx. React-icons
- **Tailwind CSS** Giver mig adgang til en en god del predeffinerede css klasser, så jeg undgår at at skrive meget styling selv. Det gør det generelt hurtigere for mig at lave styling og jeg undgår derudover at have css dokumenter liggende, så min filstruktur er mere overskuelig at kigge på
- **Zod**
- **API** 

## 3) Kode eksempel
Fil: [src/app/lib/activities.js](src/app/lib/activities.js)

Kode eksempel (udsnit):
```js
export async function getAllActivities () {
	const res = await fetch("http://localhost:4000/api/v1/classes");
	if (!res.ok) {
		throw new Error("Failed to fetch classes");
	}
	return res.json();
}
```

### 1: Hvad er det?
Det er en lille helper funktion som henter alle hold (classes) fra mit API og returnerer det som JSON.

### 2: Hvad er formålet med mit eksempel?
Formålet er at jeg kan genbruge det samme fetch-kald flere steder i projektet, i stedet for at skrive `fetch("/api/v1/classes")` inde på hver enkelte side/komponent.

Det gør også at:
- koden bliver mere overskuelig
- jeg har ét sted at ændre URL eller fejl-håndtering

### 3: Hvordan virker mit eksempel?
1. Funktionen er `async`, så jeg kan bruge `await`.
2. Jeg laver et HTTP request med `fetch` til `http://localhost:4000/api/v1/classes`.
3. Jeg tjekker `res.ok`:
   - hvis request fejler (fx 500 eller 404), så kaster jeg en fejl (`throw new Error(...)`).
   - hvis det går godt, så parser jeg svaret med `res.json()` og returnerer dataen.

Når jeg så bruger funktionen et andet sted (fx på en side), kan jeg bare skrive `const activities = await getAllActivities();`.


## 4) Perspektivering - Hvorfor jeg gjorde det sådan (meget kort)
- App Router + server components er en "Nice to have" ting fordi man kan fetch’e data server-side og ikke smide tokens ud i client. Derudover kan jeg genbruge komponenter lige så meget som jeg har lyst, så jeg undgår at skrive det samme kode flere forskellige steder
- Server actions gør det nemmere at arbejde med fx. cookies, fordi jeg kan læse/sætte/slette dem server-side med `cookies()`. Det gør det også mere sikkert da koden bliver afviklet på serveren.
- Zod gør at validering og fejl er ret nemt at vise i UI.

lille note: Fik oprettet and class der hedder LilleHest, og k
an ikke slette den igen uden at opgradere til SQLite Viewer PRO

