const qwertyLayout = {
  alpha_numerics: [
    "`1234567890-=",
    "qwertyuiop[]",
    "asdfghjkl;'\\",
    "\\zxcvbnm,./",
  ],
  alpha_numerics_alt: [
    "~!@#$%^&*()_+",
    "QWERTYUIOP{}",
    'ASDFGHJKL:"|',
    "|ZXCVBNM<>?",
  ],
  last_row: [
    "ControlLeft",
    "MetaLeft",
    "AltLeft",
    "Space",
    "AltRight",
    "ControlRight",
  ],
  special_keys_first: [[], ["Tab"], ["CapsLock"], ["ShiftLeft"]],
  special_keys_last: [["Backspace"], [], ["Enter"], ["ShiftRight"]],
  finger_mapping: {
    LeftIndex: [
      "4",
      "r",
      "f",
      "v",
      "5",
      "t",
      "g",
      "b",
      "$",
      "R",
      "F",
      "V",
      "%",
      "T",
      "G",
      "B",
    ],
    RightIndex: [
      "6",
      "y",
      "h",
      "n",
      "7",
      "u",
      "j",
      "m",
      "^",
      "Y",
      "H",
      "N",
      "7",
      "U",
      "J",
      "M",
    ],
    LeftRing: ["2", "w", "s", "x", "@", "W", "S", "X"],
    RightRing: ["9", "o", "l", ".", "(", "O", "L", ">"],
    LeftMiddle: ["3", "e", "d", "c", "#", "E", "D", "C"],
    RightMiddle: ["8", "i", "k", ",", "*", "I", "K", "<"],
    LeftPinky: [
      "1",
      "q",
      "a",
      "z",
      "!",
      "Q",
      "A",
      "Z",
      "`",
      "Tab",
      "CapsLock",
      "LeftShift",
      "LeftAlt",
      "LeftControl",
    ],
    RightPinky: [
      "0",
      "p",
      ";",
      "/",
      ")",
      "P",
      ":",
      "?",
      "-",
      "[",
      "'",
      '"',
      "/",
      "_",
      "{",
      '"',
      "?",
      "=",
      "]",
      "\\",
      "+",
      "}",
      "|",
      "BackSpace",
      "Enter",
      "RightShift",
      "RightAlt",
      "RightControl",
    ],
  },
};

export {qwertyLayout};