const header = {
    // all the properties are optional - can be left empty or deleted
    homepage: 'https://asish-dewan.github.io/react-portfolio/',
    title: 'AD-Portfolio',
    }

    const about = {

    name: 'ASISH DEWAN',
    role: 'Full stack developer',
    description:
        'Monash University bootcamp student currently based in Melbourne. Curious about Web Development and building applications',
    resume: '',
    social: {
        linkedin: 'https://www.linkedin.com/in/asishdewan/',
        github: 'https://github.com/asish-dewan',
    },
    }

    const projects = [

    // if there are no projects, Projects section won't show up
    {
        name: 'Word-UP',
        description:
        'AS A creative professional, I WANT to be able to translate a word into multiple languages, SO THAT I can spark ideas for brand or product names, or assist in copy writing and campaigns.',
        stack: ['localstorage', 'Random Word API', 'Lecto API'],
        sourceCode: 'https://github.com/Samantha-Sokolis/team-project-1',
        livePreview: 'https://samantha-sokolis.github.io/team-project-1/',
    },
    {
        name: 'Inter-Book',
        description:
        'A place where people can book services and offer services. this was developed so people could find an easy way to connect to a service they need.',
        stack: ['npm', 'sequelize','bcrypt','handlebars','express','nodejs'],
        sourceCode: 'https://github.com/breakfireaus/Inter-book',
        livePreview: 'https://inter-book.herokuapp.com/signin',
    },
    {
        name: 'Work Day Scheduler',
        description:
        ' This app is designed to run in the browser and feature dynamically updated HTML and CSS powered by jQuery.',
        stack: ['HTML', 'CSS', 'JavaScript'],
        sourceCode: 'https://github.com/asish-dewan/scheduler',
        
    },
    {
        name: 'Quiz App',
        description:
        'To create an timed coding quiz with multiple-choice questions that will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code.',
        stack: ['html-css-javascript', 'sequelize', 'React'],
        sourceCode: 'https://github.com/asish-dewan/code_quiz',
        livePreview: 'https://asish-dewan.github.io/code_quiz/',
    },
    ]

    // change contact to FORM type
    const contact = {
        email: 'asish3110@gmail.com',
    }

export { header, about, projects, contact}