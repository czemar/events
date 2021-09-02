import { CustomEvent } from '../custom-event.class';
import { EventType } from '../../enums/event-type.enum';
import keyboardKey from 'keyboard-key';

export class CustomEventKeyDeleteBackspaceDown extends CustomEvent {
  public apply(element: HTMLElement, fn: (...args: any) => void): void {
    element.addEventListener(EventType.KEY_DOWN, (e) => {
      if (([
        keyboardKey.Delete,
        keyboardKey.Backspace
      ] as number[]).includes(keyboardKey.getCode(e.key))) {
        fn (e);
      }
    });
  }
}