# Project_Colorful_Logs

![image](https://github.com/user-attachments/assets/00f90012-be67-4d73-b172-46f55c37f226)

Meaningful Customized Colorful Log Messages for your terminal without needing any External Library

Motivation: When I saw other libraries like colors were just used for making some lines colorful in terminal.
I came up with this solution where you do not need to install any third party library and easily define beautiful 
log just by putting this function wherever you want.

### How to use this repository
Just copy and paste this code in your typescript project
```bash
type LogType = "error" | "info" | "log" | "success" | "warning";

type CustomLogType = (type: LogType, message: string) => void;

// Check if ANSI escape codes are supported
const isWindowsCmd = process.platform === "win32" && !process.env.TERM;

export const customLog: CustomLogType = (type, message) => {
  // ANSI color codes (only if supported)
  const styles: Record<LogType, string> = isWindowsCmd
    ? { error: "", log: "", success: "", warning: "", info: "" } // No colors in Windows CMD
    : {
        error: "\x1b[1m\x1b[37m\x1b[41m", // Bold White text on Red background
        log: "\x1b[1m\x1b[37m\x1b[47m", // Bold White text on White background
        success: "\x1b[1m\x1b[37m\x1b[42m", // Bold White text on Green background
        warning: "\x1b[1m\x1b[30m\x1b[43m", // Bold Black text on Yellow background
        info: "\x1b[1m\x1b[37m\x1b[46m" // Bold Text with Aqua Blue background
      };

  const reset = isWindowsCmd ? "" : "\x1b[0m"; // Reset styles (only if supported)

  const formattedMessage = `${styles[type]}${message}${reset}`;

  switch (type) {
    case "error":
      console.error(formattedMessage);
      break;
    case "info":
      console.info(formattedMessage);
      break;
    case "warning":
      console.warn(formattedMessage);
      break;
    default:
      console.log(formattedMessage);
  }
};

```

### Here's a Demo
```bash
import { customLog } from "path_to_file";
customLog("error", "This is a Sample Error Message");
customLog("info", "This is a Sample Info Message");
customLog("log", "This is a Sample Log Message");
customLog("success", "This is a Sample Success Message");
customLog("warning", "This is a Sample Warning Message");
```

### Compatibility:
[![My Skills](https://skillicons.dev/icons?i=js,ts)](https://skillicons.dev)

- ✅ Mac (Terminal, iTerm, VS Code Terminal, etc.) → Works fine.
- ✅ Windows (PowerShell, Windows Terminal, VS Code Terminal) → Works fine.
- ⚠️ Windows (Command Prompt) → ANSI codes may not work correctly. Use PowerShell or install chalk for compatibility.

### Want a JavaScript Version ?
#### [customLog.js](src/customLogs/customLogs.js)

## :star: Give A Star

You can also give this repository a star to show more people and they can use this repository.

## 🏠 Built With:

[![My Skills](https://skillicons.dev/icons?i=ts,bun,vscode,arch,linux)](https://skillicons.dev)

## 🛠 Skills

[![My Skills](https://skillicons.dev/icons?i=git,github)](https://skillicons.dev)


## 🙋‍♂️ Connect With Me

[<img src="https://skillicons.dev/icons?i=github" />](https://github.com/omunite215)&nbsp;
[<img src="https://skillicons.dev/icons?i=linkedin" />](https://www.linkedin.com/in/om-patel-401068143/)&nbsp;
[<img src="https://skillicons.dev/icons?i=instagram" />](https://www.instagram.com/_21omp/)&nbsp;
[<img src="https://skillicons.dev/icons?i=devto" />](https://portfolio-jade-gamma-13.vercel.app/)


## 🗒️ Authors
- Om Patel

<p align="left">
  <a href="https://skillicons.dev">
    <a href="https://github.com/omunite215">
      <img src="https://skillicons.dev/icons?i=github" />
    </a>
  </a>
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/c1599499-a256-4900-a3d8-25d20dc7f5ae" alt="Om's Logo Image"/>
</p>
