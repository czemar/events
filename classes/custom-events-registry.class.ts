import { CustomEvent } from './custom-event.class';
import { EventType } from '../enums/event-type.enum';
import { CustomEventKeyTabDown } from './custom-events/custom-event-key-tab-down.class';

export class CustomEventsRegistry {
  private registry: { [key: string]: CustomEvent } = {
    [EventType.KEY_TAB_DOWN]: new CustomEventKeyTabDown()
  };

  public getRegistry(): { [key: string]: CustomEvent } {
    return this.registry;
  }

  public register(eventType: EventType, event: CustomEvent): void {
    this.registry[eventType] = event;
  }
}
