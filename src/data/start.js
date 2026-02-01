import * as icons from "../icons";
import facepalm from "./textFiles/amogus";
import squirtel from "./textFiles/squirtel";
import rollin from "./textFiles/rollin";
import sunscreen from "./textFiles/aimer";
import allStarTabs from "./textFiles/allStarTabs";
import readme from "./textFiles/readme";
import resume from "./textFiles/resume";

const accessories = [
  { title: "Entertainment", icon: icons.folderProgram16, options: [] },
  { title: "Internet Tools", icon: icons.folderProgram16, options: [] },
  { title: "System Tools", icon: icons.folderProgram16, options: [] },
  { title: "Calculator", icon: icons.calculator16, isDisabled: true },
  {
    title: "Notepad",
    icon: icons.notepad16,
    component: "Notepad",
    multiInstance: true
  },
  {
    title: "Paint",
    icon: icons.paint16,
    component: "IframeWindow",
    data: { src: "https://jspaint.app/", creator: "https://github.com/1j01" },
    multiInstance: true
  },
  {
    title: "SkiFree",
    icon: icons.skifree,
    component: "IframeWindow",
    data: {
      src: "https://basicallydan.github.io/skifree.js/"
    },
    multiInstance: true
  }
];

const startup = [
  {
    title: "README",
    icon: icons.htmlFile16,
    component: "InternetExplorer",
    data: {
      __html: readme
    }
  },
  {
    title: "Resume draft 17 final last 2025 nov final (1)",
    icon: icons.notepadFile16,
    component: "Notepad",
    data: {
      content: resume,
      readOnly: true
    }
  }
];

const onlineServices = [
  {
    title: "D4G Project (Disabled for cause on memory on the VPS)",
    icon: icons.htmlFile16,
    type: "ExternalLink",
    href: "https://nguengant.fr/d4g",
    isDisabled: true
  }
];

const programs = [
  { title: "Accessories", icon: icons.folderProgram16, options: accessories },
  { title: "Online Services", icon: icons.folderProgram16, options: onlineServices },
  { title: "StartUp", icon: icons.folderProgram16, options: startup },
  {
    title: "JS-DOS Prompt",
    icon: icons.msDos16,
    component: "JSDos",
    multiInstance: true
  },
  { title: "Outlook Express", icon: icons.outlook16, isDisabled: true },
  { title: "Windows Explorer", icon: icons.windowsExplorer16, isDisabled: true }
];

const favorites = [
  {
    title: "Projects",
    icon: icons.folder16,
    options: [
      {
        title: "D4G (Disabled for cause on memory on the VPS)",
        type: "ExternalLink",
        icon: icons.htmlFile16,
        href: "https://nguengant.fr/d4g",
        isDisabled: true
      },
      {
        title: "League of Legends : Guess The Splash",
        type: "ExternalLink",
        icon: icons.lolIcon,
        href: "https://nguengant.fr/gts",
      },
      {
        title: "Fitgirl Repacks Download Manager",
        type: "ExternalLink",
        icon: icons.fitgirl,
        href: "https://github.com/NhkI0/Fitgirl-FuckingFast-Scraper",
      },
      {
        title: "Discord Livechat",
        type: "ExternalLink",
        icon: icons.gitHubIcon,
        href: "https://github.com/NhkI0/discord-livechat",
      },
      {
        title: "Portfolio optimization",
        type: "ExternalLink",
        icon: icons.gitHubIcon,
        href: "https://github.com/NhkI0/multi-criteria-optimization"
      }
    ]
  },
  {
    title: "My Github",
    type: "ExternalLink",
    icon: icons.htmlFile16,
    href: "https://github.com/NhkI0"
  },
  {
    title: "My volunteering Article (French)",
    type: "ExternalLink",
    icon: icons.htmlFile16,
    href: "https://www.ouest-france.fr/pays-de-la-loire/saint-barthelemy-danjou-49124/laide-au-numerique-et-multimedia-a-saint-barthelemy-danjou-cest-reparti-pour-quatre-ans-cb2610e4-644c-11ee-ac02-c502cc724ccb"
  }
];

export const find = [
  { title: "Files or Folders...", icon: icons.findFiles16, isDisabled: true },
  {
    title: "Computer...",
    icon: icons.findComputer16,
    isDisabled: true
  },
  {
    title: "On the Internet...",
    icon: icons.findOnline16,
    type: "ExternalLink",
    href: "https://google.com"
  },
  {
    title: "People...",
    icon: icons.findPeople16,
    type: "ExternalLink",
    href: "https://facebook.com"
  }
];

const startMenuData = [
  {
    title: "Programs",
    icon: icons.folderProgram24,
    options: programs
  },
  {
    title: "Favorites",
    icon: icons.folderFavorites24,
    options: favorites,
  },
  {
    title: "Documents",
    icon: icons.folderOpen24,
    options: [
      {
        title: "ASCII Art",
        options: [
          {
            title: "amogus",
            icon: icons.notepadFile32,
            component: "Notepad",
            data: {
              content: facepalm
            }
          },
          {
            title: "squirtel",
            icon: icons.notepadFile32,
            component: "Notepad",
            data: {
              content: squirtel
            }
          }
        ],
        icon: icons.folder16
      },
      {
        title: "Lyrics",
        options: [
          {
            title: "aimer",
            icon: icons.notepadFile32,
            component: "Notepad",
            data: {
              content: sunscreen
            }
          },
          {
            title: "all star lyrics",
            icon: icons.notepadFile32,
            component: "Notepad",
            data: {
              content: allStarTabs
            }
          }
        ],
        icon: icons.folder16
      },
      {
        title: "Guitar Tabs",
        options: [
          {
            title: "rollin guitar tabs",
            icon: icons.notepadFile32,
            component: "Notepad",
            data: {
              content: rollin
            }
          },
          {
            title: "all star",
            icon: icons.notepadFile32,
            component: "Notepad",
            data: {
              content: allStarTabs
            }
          }
        ],
        icon: icons.folder16
      }
    ]
  }
];

export default startMenuData;
