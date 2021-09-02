export enum EventType {

  // User Interface Events
  LOAD = 'load',
  UNLOAD = 'unload',
  ABORT = 'abort',
  ERROR = 'error',
  SELECT = 'select',

  // Focus Events
  BLUR = 'blur',
  FOCUS = 'focus',
  FOCUS_IN = 'focusin',
  FOCUS_OUT = 'focusout',

  // Mouse Events
  CLICK = 'click',
  DB_CLICK = 'dbclick',
  MOUSE_DOWN = 'mousedown',
  MOUSE_ENTER = 'mouseenter',
  MOUSE_LEAVE = 'mouseleave',
  MOUSE_MOVE = 'mousemove',
  MOUSE_OUT = 'mouseout',
  MOUSE_OVER = 'mouseover',
  MOUSE_UP = 'mouseup',

  // Drag and drop Events
  DROP = 'drop',

  // Wheel Events
  WHEEL = 'wheel',

  // Input Events
  BEFORE_INPUT = 'beforeinput',
  INPUT = 'input',

  // Keyboard Events
  KEY_DOWN = 'keydown',
  KEY_UP = 'keyup',

  // Custom keyboard events
  KEY_ARROW_LEFT_DOWN = 'key-arrow-left-down',
  KEY_ARROW_RIGHT_DOWN = 'key-arrow-right-down',
  KEY_ARROW_UP_DOWN = 'key-arrow-up-down',
  KEY_ARROW_DOWN_DOWN = 'key-arrow-down-down',
  KEY_TAB_DOWN = 'key-tab-press',
  KEY_SPECIAL_CHARACTER_DOWN = 'key-special-character-down',
  KEY_DELETE_BACKSPACE_DOWN = 'key-delete-backspace-down',
  KEY_ENTER_DOWN = 'key-enter-down'

}
