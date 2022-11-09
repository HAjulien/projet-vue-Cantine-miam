export const calculateMoyenne = (critiquesObject) => {
    const sommeAllNotes = critiquesObject
        .map( critique => critique.note )   //note est obligatoire
        .reduce((sommeNotes, note) => sommeNotes += note ) 
        const moyenne = sommeAllNotes / critiquesObject.length
        return moyenne
}