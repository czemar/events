import { CustomEvent } from '../custom-event.class';
import { EventType } from '../../enums/event-type.enum';
import keyboardKey from 'keyboard-key';

export class CustomEventKeySpecialCharacterDown extends CustomEvent {
  public apply(element: HTMLElement, fn: (...args: any) => void): void {
    element.addEventListener(EventType.KEY_DOWN, (e) => {
      if (/[^0-9a-zA-Z]+/g.test(e.key)) {
        fn (e);
      }
    });
  }
}