// Check if ANSI escape codes are supported
const isWindowsCmd = process.platform === "win32" && !process.env.TERM;

export const customLog: customLogType = (type, message) => {
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
