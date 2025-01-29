export const customLog= (type, message) => {
    // ANSI color codes
    const styles= {
      error: "\x1b[1m\x1b[37m\x1b[41m", // Bold White text on Red background
      log: "\x1b[1m\x1b[37m\x1b[47m", // Bold White text on White background
      success: "\x1b[1m\x1b[37m\x1b[42m", // Bold White text on Green background
      warning: "\x1b[1m\x1b[30m\x1b[43m", // Bold Black text on Yellow background
      info: "\x1b[1m\x1b[37m\x1b[46m" // Bold Text with Aqua Blue background
    };
  
    const reset = "\x1b[0m"; // Reset styles
  
    switch (styles[type]) {
      case "error":
        return console.error(`${styles.error}${message}${reset}`);
      case "info":
        return console.info(`${styles.warning}${message}${reset}`);
      case "warning":
        return console.warn(`${styles.warning}${message}${reset}`);
      default:
        return console.log(`${styles[type]}${message}${reset}`);
    }
  };
  