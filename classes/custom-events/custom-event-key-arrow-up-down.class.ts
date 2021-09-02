import { CustomEvent } from '../custom-event.class';
import { EventType } from '../../enums/event-type.enum';
import keyboardKey from 'keyboard-key';

export class CustomEventKeyArrowUpDown extends CustomEvent {
  public apply(element: HTMLElement, fn: (...args: any) => void): void {
    element.addEventListener(EventType.KEY_DOWN, (e) => {
      if (keyboardKey.getCode(e.key) === keyboardKey.ArrowUp) {
        fn (e);
      }
    });
  }
}