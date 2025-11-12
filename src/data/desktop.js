import * as icons from "../icons";
import resume from "./textFiles/resume";
import readme from "./textFiles/readme";

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
    title: "Resume draft 17 final last 2025 nov final (1)",
    icon: icons.notepadFile32,
    component: "Notepad",
    autostart: true, // Also opens on load
    autostartConfig: {
      initialX: 1000,      // Position on the right side of screen
      initialY: 80,        // Slightly lower
      initialWidth: 750,   // Smaller width
      initialHeight: 450   // Smaller height
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
      initialY: 50,        // Y position (top)
      initialWidth: 960,   // Window width
      initialHeight: 600   // Window height
    },
    data: {
      __html: readme
    }
  },
];

export default desktopData;
