const notes = [
    {
        id: 1,
        subject: "flexbox",
        date: "May 19, 2021", 
        feeling: "Very hard concept... Still currently learning. More practice needed.",
        timeSpent: 1200
    },
    {
        id: 2,
        subject: "git/github",
        date: "May 21, 2021", 
        feeling: "Very complicated process, but extremely helpful when using with team. Once I got the hang of the different commands, it was not all that bad. Okay feeling currently",
        timeSpent: 2000
    }

]

const pushNote = {
    id: 3,
    subject: ".push in array",
    date: "May 27, 2021", 
    feeling: "easy concept once I knew what it does. Extremely helpful as I have noticed. Hope to use it more!! Hope it doesn't get too complicated.",
    timeSpent: 30
}

notes.push(pushNote)

// for (const note of notes) {
//     console.log(`${note.date}
//     I learned ${note.subject} today. After spending ${note.timeSpent} minutes on it, my final thoughts are: ${note.feeling}.`)
// }

// const findNote = 2
// for (const note of notes) {
//     if (note.id === findNote) {
//         console.log(`${note.date}
//     I learned ${note.subject} today. After spending ${note.timeSpent} minutes on it, my final thoughts are: ${note.feeling}.`)
//     }
// }

const addNewNote = (noteObject) => {
    const lastIndex = notes.length - 1
    const currentLastNote = notes[lastIndex]
    const maxId = currentLastNote.id
    const idNewNote = maxId + 1

noteObject.id = idNewNote
notes.push(noteObject)
}

const addNewNotes = {
    subject: "adding new notes",
    date: "May 27, 2021",
    feeling: "I am unsure if I will ever remember this code. It's a hard concept to grasp and to remember. I'm still having to refer back to the example for assistance, but I do understand why this needs to be done.",
    timeSpent: 75
}

addNewNote(addNewNotes)

console.log(notes)

for (const note of notes) {
    console.log(`${note.date}
    I learned ${note.subject} today. After spending ${note.timeSpent} minutes on it, my final thoughts are: ${note.feeling}.`)
    
}