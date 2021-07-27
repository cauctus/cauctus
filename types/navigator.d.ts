interface BaseWebLockSentinelEventMap {
  'onrelease': Event;
}

interface WakeLockSentinel {
  readonly released: Boolean;
  readonly type: string;
  release() : Promise<void>
  addEventListener(type: string, listener: (this: Event, ev: BaseWebLockSentinelEventMap) => any, options?: boolean | AddEventListenerOptions): void;
  addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
  removeEventListener(type: string, listener: (this: Event, ev: BaseWebLockSentinelEventMap) => any, options?: boolean | EventListenerOptions): void;
  removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

type WakeLockRequestType = 'screen'

interface Navigator {
  wakeLock?: {
    request: (type: WakeLockRequestType) => Promise<WakeLockSentinel>
  }
}
