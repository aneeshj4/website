import { Component } from '@angular/core';

@Component({
    selector: 'portfolio-grid',
    templateUrl: 'app/portfolio.grid.component.html',
    inputs: ['cards']
})

export class PortfolioGrid {
    cards: PortfolioCard[] = [
        {
            name: 'Secured In',
            imageUrl: "https://lh3.googleusercontent.com/a4oRnc9U1SnecDGPvXdT80BQ0a1K7FofyPvU4buJf0f83ivGpe2T6Ck1LXK2iGqYdgXsSs1lSartySMgJ0F1i2pXbGk_rAnIfpe9i8v9ePgPUPqdLa7_VH05gmwU1fOojS8YqXcF4ApIFtR5faswTAb1WE4Hbqnd_Dqv5MCyG6bZ7WgFXsUvmQonDBo5o46Pev86ckaLLTJwttCwaTOeG7Gwf0gKHPwxi9uG3wMmpKahYO3hPhKRp9QfrvH9kcP0SOV9Koi5Mt6w6dwNKGdPGgNq2nMayZrlqo2Q_K5ThU6ap_4hyRv_3gwToP5RP1412GwK7im5quOvRXANVUopoKr4UkuAKf035keJVdGaYx8jvxy0j88GHoi2cKHChqVZ_SO5MdvtV2V215NOa-CNov0f8cq1W5A9jYlfwe6FFYlGo5H71uYGU8knhqTY0a67XUQfcyxIn7xABNIcaMFLF3XJUXUX3ObIjx-0XDb1DKXl4XGlbTWhKFtPANEEReMeoeW8ZlLfKmhaO9YGIgxwYYKS0fYZ0fuAomcIe-jOYepbZe_fUenVRwpCPvQ2Fv6tMm9-vWhX=w1440-h714",
            description: "Secured In is a secure data storage application. As data security increases in importance, I took this opportunity to apply my research on cryptography to a real world situation. To not only meet but exceed the standards, Secured In uses AES256 to encrypt, HMAC with SHA256 to verify/authenticate, and PBKDF2 to guarantee the user is the only individual with access.",
            readMoreLink: "./securedin.html",
            projectLink: ""
        },
        {
            name: 'Intelli IM',
            imageUrl: "https://lh6.ggpht.com/HgjpI8GA7f1H_nfYNUtUdwSMkMCzLTkRR10ThCIfdbqadGVEibpMC7vb3RREaWY7uc8=w300-rw",
            description: "Intelli IM is an enterprise instant messaging application that is available for both iOS and Android. I was on the team that ported the application to Android. On top of much of the initial functionality, such as databases and notifications, most recently I have been working on improving performance and adding Material Design.",
            readMoreLink: "",
            projectLink: "https://play.google.com/store/apps/details?id=com.rapidcyber.intelliim.android"
        },
        {
            name: 'Assassins Guild',
            imageUrl: "https://lh3.googleusercontent.com/PohfMvtOwS_SFRCtKQusSWVGTOKsXgmJs28-grd6kK45fQQomfVO13_jG7EvwCQwOhA=w300-rw",
            description: "Assassins is a popular game played in high schools, colleges, clubs, and sometimes just between friends; the objective is to tag your target without them realizing that you are there. In the past, players needed an admin to set up the game and assign targets, but now, with Assassins Guild on Android, iOS, and web, all of that is taken care of so anyone can easily play.",
            readMoreLink: "",
            projectLink: "https://play.google.com/store/apps/details?id=org.assassinsguild.android"
        },
        {
            name: 'Qlic',
            imageUrl: "https://lh3.googleusercontent.com/2GMjIB4cyzjzWFpfDr_FgEiFfU4QRsmbJ9pPDrMgMDXCt0lsVJac8YtRsh_EkPDqMOg=w300-rw",
            description: "An Android application that utilizes Google's Nearby API to share contact information and social media profiles wirelessly among groups of people. We utilize AES128 and PBKDF2 to secure the data as well.",
            readMoreLink: "",
            projectLink: "https://play.google.com/store/apps/details?id=com.swap.mdb.qlic"
        },
        {
            name: 'Database Management System',
            imageUrl: "",
            description: "Implemented a datbase management system covering many aspects of datbase design. Records following different schemas were written to pages, with iterators for various types of page joins. Table locking was also implemented as well as System-R query optimizations.",
            readMoreLink: "",
            projectLink: ""
        },
        {
            name: 'Bear Maps',
            imageUrl: "",
            description: "Built an online map of UC Berkeley using open sourced data. Images at various zoom levels were stored in a quadtree, and as the user zoomed into and out of the map the tiles at the correct zoom level were stiched into one image. When 2 points were clicked, the A* algorithm was used to determine the shortest path between them using roads.",
            readMoreLink: "",
            projectLink: ""
        } 
    ]
}

export class PortfolioCard {
    name: string;
    imageUrl: string;
    description: string;
    readMoreLink: string;
    projectLink: string;
}