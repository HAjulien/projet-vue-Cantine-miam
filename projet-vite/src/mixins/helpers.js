export const calculateMoyenne = (critiquesObject) => {
    const SommeAllNotes = critiquesObject
        .map( critique => critique.note )   //note est obligatoire
        .reduce((sommeNotes, note) => sommeNotes += note ) 
        const moyenne = SommeAllNotes / critiquesObject.length
        return moyenne
}