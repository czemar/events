import { EventType } from '../enums/event-type.enum';
import { CustomEventsRegistry } from './custom-events-registry.class';

const EventOptions = {
  preventDefault: false
};

export class Events {
  static customEventsRegistry = new CustomEventsRegistry();

  private appliedElement: HTMLElement;
  private eventsList: {
    [key: string]: {
      fn: (args: any) => void,
      options: typeof EventOptions
    }[],
  } = {};

  private isCustom(eventType: EventType): boolean {
    return eventType.includes('-');
  }

  public on(eventType: EventType, fn: (args: any) => void, options?: typeof EventOptions): void {
    options = { ...EventOptions, ...options };
    if (!this.eventsList[eventType]) {
      this.eventsList[eventType] = [];
      this.applyEvent(eventType);
    }
    this.eventsList[eventType].push({ fn, options });
  }

  /**
   * 
   * @param eventType Type of the event to perform
   * @param args Arguments to pass to listeners
   */
  public emit(eventType: EventType, args: any = null): void {
    const perform = () => {
      if (this.eventsList[eventType]) {
        this.eventsList[eventType].forEach((entry) => {
          const { fn, options } = entry;
          const { preventDefault } = options;

          // Prevent default if this option is true
          if (preventDefault && args) { (args as Event).preventDefault(); }

          // Perform listener
          fn(args);
        });
      }
    };

    if (eventType === EventType.FOCUS) {
      window.requestAnimationFrame(perform);
    } else {
      perform();
    }
  }

  public apply(element: HTMLElement): void {
    this.appliedElement = element;
  }

  private applyEvent(eventType: EventType): void {
    if (!this.appliedElement) { return; }

    if (!this.isCustom(eventType)) {
      this.appliedElement.addEventListener(eventType, (e) => this.emit.apply(this, [ eventType, e ]));
    } else {
      Events.customEventsRegistry.getRegistry()[eventType].apply(this.appliedElement, (e) => this.emit.apply(this, [ eventType, e ]));
    }
    
  }

}
