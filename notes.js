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

console.log(notes)