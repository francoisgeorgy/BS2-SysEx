# BS2-SysEx

Reverse engineering of the Novation Bass Station II SysEx format.

Manufacturer ID for Novation: `00H 20H 29H	Focusrite/Novation`

## MIDI resources

- MIDI specifications: https://www.midi.org/specifications
  - https://www.midi.org/specifications/item/the-midi-1-0-specification  
  - https://www.midi.org/specifications/category/reference-tables
- Manufacturer MIDI ID Numbers: https://www.midi.org/specifications/item/manufacturer-id-numbers
- http://www.personal.kent.edu/~sbirch/Music_Production/MP-II/MIDI/midi_system_exclusive_messages.htm

## Sysex description format

I will use the following method to document the sysex data.

For each parameter: 

1. byte offset
2. length in bytes
3. binary mask

Example:

Byte offset = 17
Length = 2 bytes
Mask = 0x07 0xF8 (0b00000111 0b11111000)

