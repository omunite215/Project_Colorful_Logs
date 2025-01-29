type LogType = "error" | "info" | "log" | "success" | "warning";

type customLogType = (type: LogType, message: string) => void;
