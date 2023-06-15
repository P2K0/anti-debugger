import type { Config } from "../types/types";

class AntiDebugger {
  constructor(config: Config) {
    this.startupAntiDebugger(config);
  }

  private startupAntiDebugger(config: Config): void {
    if (config.disableKeyboard)
      this.disableKeyboard();

    if (config.disableDebugger)
      this.disableDebugger();

    if (config.disableConsole)
      this.disableConsole();
  }

  private disableKeyboard(): void {
    window.addEventListener("keydown", (event: KeyboardEvent): void => {
      if (event.key === "F12" || (event.ctrlKey && event.shiftKey && event.key === "I"))
        event.preventDefault();
    });

    window.addEventListener("keyup", (event: KeyboardEvent): void => {
      if (event.key === "F12")
        event.preventDefault();
    });
  }

  private disableDebugger(): void {
    const prevOnDevTools: any = null;

    const checkForDevTools = function (): void {
      const devtools = /./;
      devtools.toString = function (): string {
        if (prevOnDevTools)
          prevOnDevTools.call(this);

        return "";
      };
    };

    setInterval((): void => {
      checkForDevTools();

      try {
        // eslint-disable-next-line no-eval
        eval("debugger;");
      }
      catch (e) {}
    }, 50);
  }

  private disableConsole(): void {
    const noop = (): void => {};

    const disableConsoleOutput = (): void => {
      console.log = noop;
      console.info = noop;
      console.warn = noop;
      console.error = noop;
    };

    try {
      Object.defineProperty(window, "console", {
        get(): undefined {
          return undefined;
        },
        set(): void {}
      });
    }
    catch {
      disableConsoleOutput();
    }
  }
}

export default AntiDebugger;
