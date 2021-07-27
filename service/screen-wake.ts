class ScreenWake {
  private wakeLock: WakeLockSentinel | undefined;

  async lock() {
    try {
      this.wakeLock = await navigator.wakeLock?.request('screen')
    } catch (_) {
      // ignored
    }
  }

  async release() {
    try {
      if (this.wakeLock) {
        await this.wakeLock.release()
        this.wakeLock = undefined
      }
    } catch (_) {
      // ignored
    }
  }
}

export const screenWake = new ScreenWake()
