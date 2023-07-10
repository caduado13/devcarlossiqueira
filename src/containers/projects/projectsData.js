import { dwFull, spotifyImg, lpChatGPTImg,moviesApiImg } from "../../containers/projects/imports";

export const projectData = [
    {
        title: "Drink Water App",
        desc: "Application for manipulate your wather consum per day.",
        image: dwFull,
        tags: ["HTML", "CSS", "JavaScript"],
        source: "https://github.com/caduado13/Drink-water-app",
        visit: "https://caduado13.github.io/Drink-water-app/",
        id: 0,
    },{
        title: "Movies API",
        desc: "Website with the upcoming and trending movies getting data of the The Movie Data Base Api",
        image: moviesApiImg,
        tags: ["React", "Axios", "ContextAPI"],
        source: "https://github.com/caduado13/Movies-api-react",
        visit: "https://caduado13.github.io/Movies-api-react/",
        id: 1,
    },{
        title: "Task-management",
        desc: "Task management.",
        image: spotifyImg,
        tags: ["React", "Typescript"],
        source: "https://github.com/caduado13/Task-management",
        visit: "https://caduado13.github.io/Task-management/",
        id: 2,
    },{
        title: "ChatGPT3 LP",
        desc: "A modern landing page telling a little about the new chatGPT",
        image: lpChatGPTImg,
        tags: ["React", "CSS"],
        source: "https://github.com/caduado13/landing-page-cgpt3",
        visit: "...",
        id: 3,
    }
]