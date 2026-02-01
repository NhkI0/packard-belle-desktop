import * as icons from "../icons";
import resume from "./textFiles/resume";
import readme from "./textFiles/readme";
import volunteer from "./textFiles/volunteer";

const desktopData = [
  {
    title: "My Computer",
    icon: icons.computer32,
    component: "ExplorerWindow",
    data: {
      content: [
        {
          title: "(C:)",
          icon: "cd32",
          failState: {
            message:
              "This is a React App, there is no CD drive, your laptop probably doesn't have one either",
            loadTime: 4000
          }
        },
        {
          title: "(D:)",
          icon: "hdd32",
          failState: {
            message: "This is a React App, there is no hard drive",
            loadTime: 1000
          }
        },
        {
          title: "3 1/2 Floppy (A:)",
          icon: "floppy32",
          failState: {
            message:
              "Did everyone else's computer take ages to load the 'no floppy disc inserted' message or was that just mine?",
            loadTime: 8000
          }
        }
      ]
    }
  },
  {
    title: "As a volunteer",
    icon: icons.notepadFile32,
    component: "Notepad",
    initialWidth: 600,
    initialHeight: 400,
    autostart: true,
    data: {
      content: volunteer,
      readOnly: true
    }
  },
  {
    title: "Resume draft 17 final last 2025 nov final (1)",
    icon: icons.notepadFile32,
    component: "Notepad",
    autostart: true, // Also opens on load
    autostartConfig: {
      initialX: 600,      // Position on the right side of screen
      initialY: 80,        // Slightly lower
      initialWidth: 850,   // Window width
      initialHeight: 600   // Window height
    },
    data: {
      content: resume,
      readOnly: true
    }
  },
  {
    title: "README",
    icon: icons.htmlFile32,
    component: "InternetExplorer",
    autostart: true, // This window will open automatically on load
    autostartConfig: {
      // Position and size preset for autostart
      initialX: 50,        // X position (left side)
      initialY: 100,        // Y position (top)
      initialWidth: 960,   // Window width
      initialHeight: 600   // Window height
    },
    data: {
      __html: readme
    }
  },
  // {
  //   title: "D4G Project",
  //   icon: icons.htmlFile32,
  //   onClick: () => window.open("https://nguengant.fr/d4g", "_blank")
  // },
  {
    title: "My volunteering Article",
    icon: icons.htmlFile32,
    onClick: () => window.open("https://www.ouest-france.fr/pays-de-la-loire/saint-barthelemy-danjou-49124/laide-au-numerique-et-multimedia-a-saint-barthelemy-danjou-cest-reparti-pour-quatre-ans-cb2610e4-644c-11ee-ac02-c502cc724ccb", "_blank")
  }
];

export default desktopData;
