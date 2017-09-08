# BS2-SysEx

Reverse engineering of the Novation Bass Station II SysEx format.

See also my other project: [Bass Station II Web Interface](https://github.com/francoisgeorgy/BS2-Web)

## Summary

Ref: https://www.midi.org/specifications/item/table-1-summary-of-midi-message

A MIDI System Exclusive message has the following format:

`N` is the number of bytes of bytes of the messages.

| Offset | Data   | BS-II | Description                            |
| ------:| ------:| -----:|:-------------------------------------- |
|      0 |     F0 |       | Mark the start of the SysEx message    | 
|      1 |   _id_ |  0x00 | Manufacturer's ID                      |
|      2 |   _id_ |  0x20 | Manufacturer's ID                      |
|      3 |   _id_ |  0x29 | Manufacturer's ID                      |
| 4.._N_-2 | _xx_ |       | data (N-5 bytes)                 |
|    _N_-1 |   F7 |       | Mark the end of the SysEx message      |

Note: "Japanese Group" manufacturers have only one ID byte. See [https://www.midi.org/specifications/item/manufacturer-id-numbers] for more details.

__Manufacturer ID for Focusrite/Novation__: `0x00 0x20 0x29` (in decimal: 00 32 41)

## SysEx messages understood by the Bass Station II

| Message                      | Description |
| ---------------------------- | ----------- |
| `F0 00 20 29 00 33 00 40 F7` | Request for SysEx. After receiving this message, the Bass Station II will send a SysEx dump of its current configuration. |
    
## SysEx data sent by the Bass Station II

By default, the Bass Station II send 154 bytes. However, a patch (.syx file) may be smaller.
    
- **Offset**: index from the start of the SysEx data. First byte (0xF0) has offset=0.
- **Bytes**: number of bytes to consider for this parameter
- **Mask**: mask to apply to the above bytes to get the bits relative to the parameter
- **Bits**: how many bits form the value

| Offset | Bytes | Hex mask   | Bin mask            | Bits | Description |
| ------:| -----:| :--------- | :------------------ | ----:| ----------- |
|      1 |     3 | `7F 7F 7F` | `01111111 01111111 01111111` | 3x 8 | Manufacturer ID |
|      9 |     1 | `7F`       | `01111111         ` |    8 | Patch number |
|     13 |     2 | `03 7C`    | `00000011 01111100` |    7 | Portamento Time |
|     16 |     1 | `7F   `    | `01111111         ` |    7 | Osc Pitch Bend Range |
|     18 |     1 | `40   `    | `01000000         ` |    1 | Osc 1-2 Sync |
|     19 |     1 | `60   `    | `01100000         ` |    2 | Osc 1 Waveform |
|     19 |     2 | `0F 70`    | `00001111 01110000` |    7 | Osc 1 Manual PW |
|     20 |     2 | `07 78`    | `00000111 01111000` |    7 | Osc 1 Range |
|     21 |     2 | `07 7C`    | `00000111 01111100` |    8 | Osc 1 Coarse |
|     22 |     2 | `03 7E`    | `00000011 01111110` |    8 | Osc 1 Fine |
|     24 |     1 | `03   `    | `00000011         ` |    2 | Osc 2 Waveform |
|     25 |     2 | `3F 40`    | `00111111 01000000` |    7 | Osc 2 Manual PW |
|     26 |     2 | `1F 60`    | `00011111 01100000` |    7 | Osc 2 Range |
|     27 |     2 | `1F 70`    | `00011111 01110000` |    8 | Osc 2 Coarse |
|     28 |     2 | `0F 78`    | `00001111 01111000` |    8 | Osc 2 Fine |
|     36 |     1 | `30   `    | `00110000         ` |    2 | Sub Osc Wave |
|     37 |     2 | `07 7C`    | `00000111 01111100` |    8 | Mixer Osc 1 Level |
|     37 |     1 | `08   `    | `00001000         ` |    1 | Sub Osc Oct |
|     38 |     2 | `03 7E`    | `00000011 01111110` |    8 | Mixer Osc 2 Level |
|     39 |     2 | `01 7F`    | `00000001 01111111` |    8 | Mixer Sub Osc Level |
|     41 |     2 | `7F 40`    | `01111111 01000000` |    8 | Mixer Noise Level |
|     42 |     2 | `3F 60`    | `00111111 01100000` |    8 | Mixer Ring Mod Level |
|     43 |     2 | `1F 70`    | `00011111 01110000` |    8 | Mixer External Signal Level |
|     44 |     2 | `0F 78`    | `00001111 01111000` |    8 | Filter Frequency |
|     45 |     2 | `03 7C`    | `00000011 01111100` |    7 | Filter Resonance |
|     46 |     2 | `01 7E`    | `00000001 01111110` |    7 | Filter Overdrive |
|     48 |     1 | `04   `    | `00000100         ` |    1 | Filter Type |
|     48 |     1 | `08   `    | `00001000         ` |    1 | Filter Slope |
|     49 |     2 | `3F 40`    | `00111111 01000000` |    7 | Velocity Amp Env |
|     50 |     2 | `1F 60`    | `00011111 01100000` |    7 | Amp Env Attack |
|     51 |     2 | `0F 70`    | `00001111 01110000` |    7 | Amp Env Decay |
|     52 |     2 | `07 78`    | `00000111 01111000` |    7 | Amp Env Sustain |
|     53 |     2 | `03 7C`    | `00000011 01111100` |    7 | Amp Env Release |
|     55 |     1 | `06   `    | `00000110         ` |    2 | Amp Env Triggering |
|     56 |     1 | `7F   `    | `01111111         ` |    7 | Velocity Mod Env |
|     57 |     2 | `3F 40`    | `00111111 01000000` |    7 | Mod Env Attack |
|     58 |     2 | `1F 60`    | `00011111 01100000` |    7 | Mod Env Decay |
|     59 |     2 | `0F 70`    | `00001111 01110000` |    7 | Mod Env Sustain |
|     60 |     2 | `07 78`    | `00000111 01111000` |    7 | Mod Env Release |
|     62 |     1 | `0C   `    | `00001100         ` |    2 | Mod Env Triggering |
|     63 |     1 | `06   `    | `00000110         ` |    2 | LFO1 Wave |
|     64 |     1 | `7F   `    | `01111111         ` |    7 | LFO1 Delay |
|     65 |     2 | `3F 40`    | `00111111 01000000` |    7 | LFO1 Slew |
|     66 |     2 | `3F 60`    | `00111111 01100000` |    8 | LFO1 Speed |
|     67 |     2 | `07 70`    | `00000111 01110000` |    6 | LFO1 Sync Value |
|     69 |     1 | `08   `    | `00001000         ` |    1 | LFO1 Speed/Sync |
|     69 |     1 | `10   `    | `00010000         ` |    1 | LFO1 Key Sync |
|     70 |     2 | `01 7E`    | `00000001 01111110` |    7 | LFO2 Delay |
|     70 |     1 | `0C   `    | `00001100         ` |    2 | LFO2 Wave |
|     72 |     1 | `7F   `    | `01111111         ` |    7 | LFO2 Slew |
|     73 |     2 | `7F 40`    | `01111111 01000000` |    8 | LFO2 Speed |
|     74 |     2 | `0F 60`    | `00001111 01100000` |    6 | LFO2 Sync Value |
|     76 |     1 | `10   `    | `00010000         ` |    1 | LFO2 Speed/Sync |
|     76 |     1 | `20   `    | `00100000         ` |    1 | LFO2 Key Sync |
|     77 |     1 | `08   `    | `00001000         ` |    1 | Arp On |
|     77 |     1 | `20   `    | `00100000         ` |    1 | Arp Seq Retrig |
|     78 |     1 | `1C   `    | `00011100         ` |    3 | Arp Octaves |
|     79 |     1 | `0E   `    | `00001110         ` |    3 | Arp Note Mode |
|     80 |     1 | `1F   `    | `00011111         ` |    5 | Arp Rhythm |
|     81 |     2 | `3F 40`    | `00111111 01000000` |    7 | Arp Swing |
|     82 |     2 | `1F 60`    | `00011111 01100000` |    7 | Mod Wheel Filter Freq |
|     83 |     2 | `0F 70`    | `00001111 01110000` |    7 | Mod Wheel LFO1 to Osc Pitch |
|     84 |     2 | `07 78`    | `00000111 01111000` |    7 | Mod Wheel LFO2 to Filter Freq |
|     85 |     2 | `03 7C`    | `00000011 01111100` |    7 | Mod Wheel Osc2 Pitch |
|     86 |     2 | `01 7E`    | `00000001 01111110` |    7 | Aftertouch Filter Freq |
|     88 |     1 | `7F   `    | `01111111         ` |    7 | Aftertouch LFO1 to Osc 1+2 Pitch |
|     89 |     2 | `3F 40`    | `00111111 01000000` |    7 | Aftertouch LFO2 Speed |
|     90 |     2 | `3F 60`    | `00111111 01100000` |    8 | Osc1 LFO1 Depth |
|     91 |     2 | `1F 70`    | `00011111 01110000` |    8 | Osc2 LFO1 Depth |
|     93 |     2 | `03 7C`    | `00000011 01111100` |    7 | Osc1 LFO2 PW Mod |
|     94 |     2 | `01 7E`    | `00000001 01111110` |    7 | Osc2 LFO2 PW Mod |
|     97 |     2 | `3F 40`    | `00111111 01000000` |    7 | Filter LFO2 Depth |
|     98 |     2 | `1F 60`    | `00011111 01100000` |    7 | Osc1 Mod Env Depth |
|     99 |     2 | `0F 70`    | `00001111 01110000` |    7 | Osc2 Mod Env Depth |
|    101 |     2 | `01 7C`    | `00000001 01111100` |    6 | Osc1 Mod Env PW Mod |
|    102 |     2 | `01 7E`    | `00000001 01111110` |    7 | Osc2 Mod Env PW Mod |
|    105 |     2 | `3F 40`    | `00111111 01000000` |    7 | Filter Mod Env Depth |
|    106 |     2 | `1F 60`    | `00011111 01100000` |    7 | Fx Osc Filter Mod |
|    107 |     2 | `0F 70`    | `00001111 01110000` |    7 | Fx Distortion |
|    108 |     2 | `07 78`    | `00000111 01111000` |    7 | VCA Limit |
|    137 |    16 | 16x `0x7F`  | 16x `01111111` | 16x 8 | Patch name (16 ASCII chars) |
 
### Multi-bytes values:
 
For multiple bytes value:

- The first byte in the dump is the MSB, _**M**ost **S**ignificant **B**yte_. 
- The second byte in the dump is the LSB, _**L**east **S**ignificant **B**yte_.
- The _msb_ (most significant __bit__) of any byte is always **0**. 
 
### Notes:

Some bytes seem to always have the same value. This is confirmed accross all patch I could get.

- byte 05 is always 0x33
- bytes 30..35 are always 0x01 0x00 0x43 0x40 0x20 0x00
- byte 96 is always 0x40
- byte 104 is always 0x40


## SysEx example
        
BS II SysEx Message in decimal:    
    
    240 000 032 041 000 051 000 000 000 000 000 000 000 000 001 000 
    076 000 000 072 004 000 002 000 002 032 016 000 007 048 001 000
    067 064 032 000 035 127 127 127 117 000 000 000 013 081 124 000
    008 032 001 068 032 000 000 000 113 002 071 071 000 000 000 000
    000 000 014 032 000 000 012 000 000 043 000 000 032 040 004 008
    029 025 019 104 004 002 001 020 064 032 032 016 008 002 001 000
    064 064 016 015 116 002 001 000 064 054 064 000 000 003 016 000
    000 000 000 000 000 000 000 000 000 000 000 000 000 000 000 000
    000 000 000 000 000 000 000 000 000 000 000 000 000 000 000 000
    000 000 000 000 000 000 000 000 000 247 
    
BS II SysEx Message in hexadecimal:     
     
    f0 00 20 29 00 33 00 00 00 00 00 00 00 00 01 00 
    4c 00 00 48 04 00 02 00 02 20 10 00 07 30 01 00
    43 40 20 00 23 7f 7f 7f 75 00 00 00 0d 51 7c 00
    08 20 01 44 20 00 00 00 71 02 47 47 00 00 00 00
    00 00 0e 20 00 00 0c 00 00 2b 00 00 20 28 04 08
    1d 19 13 68 04 02 01 14 40 20 20 10 08 02 01 00
    40 40 10 0f 74 02 01 00 40 36 40 00 00 03 10 00
    00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
    00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
    00 00 00 00 00 00 00 00 00 f7 


## Decoding example

Let's decode the _Osc 1 Range_ value. The definition is:

| Offset | Bytes | Hex mask | Bin mask            | Bits | Description |
| ------:| -----:| :------- | :------------------ | ----:| ----------- |
|     20 |     2 | `07 78`  | `00000111 01111000` |    7 | Osc 1 Range |

Take bytes 20 and 21 from the above example: 

    hex: 48 04
    bin: 01001000 01001000

Apply masks:

    bin:  01001000 01001000
    mask: 00000111 01111000
          -----------------
               000 01001

Value:

    value: 00001001 (bin) == 9 (dec)


## Encoding example

Let's encode the _Osc 1 Range_ value. The definition is:

| Offset | Bytes | Hex mask | Bin mask            | Bits | Description |
| ------:| -----:| :------- | :------------------ | ----:| ----------- |
|     20 |     2 | `07 78`  | `00000111 01111000` |    7 | Osc 1 Range |

The value we want to encode is 91:
 
    91 (dec) == 01011011 (bin) 

If the mask comprises two bytes, take the value as a sixteen-bits number, else take the value has an eight-bits value.

    01011011 --> 00000000 01011011 (MSB LSB) 

From the mask LSB, count how many bits we need to shift to the left:

    01111000 --> 3 bits
    
Shit the value:    

    0000000001011011 << 3 --> 0000001011011000   

Get the sysex LSB:
    
    0000001011011000 & 01111000 = 01011000

How many bits has gone into the sysex_lsb?:
                
    LSB_bits = 7 - 3 = 4

Discard, from the original value, this number of bits used for the sysex LSB:
     
    0000000001011011 >>> 4 --> 0000000000000101  

Get the sysex MSB:     

    0000000000000101 & 00000111 = 00000101 
     
We can now inject these sysex values into the sysex data:

    first, reset the target bits to zero with the inverted masks:     
     
    sysex MSB: sysex_data[offset]   = sysex_data[offset]   & 11111000   
    sysex LSB: sysex_data[offset+1] = sysex_data[offset+1] | 10000111
     
    then inject the value bits: 
     
    sysex MSB: sysex_data[offset]   = sysex_data[offset]   | 00000101   
    sysex LSB: sysex_data[offset+1] = sysex_data[offset+1] | 01011000

                                                             
# Init patch

    $ xxd -g 1 factory-patches/70-127_INIT\ PATCH.syx
    0000000: f0 00 20 29 00 33 00 00 00 00 00 00 00 00 01 00  .. ).3..........
    0000010: 4c 00 00 48 04 04 02 00 02 20 10 10 08 00 01 00  L..H..... ......
    0000020: 43 40 20 00 03 7f 7c 00 00 00 00 00 0f 78 00 00  C@ ...|......x..
    0000030: 08 20 00 00 07 78 00 00 40 00 00 0f 70 00 00 00  . ...x..@...p...
    0000040: 00 00 12 63 10 00 00 00 00 1a 06 20 20 20 04 00  ...c.......   ..
    0000050: 1f 19 10 09 24 02 01 14 40 20 20 10 08 02 01 00  ....$...@  .....
    0000060: 40 40 10 08 04 02 01 00 40 20 00 00 00 03 10 00  @@......@ ......
    0000070: 00 00 00 00 00 00 00 00 00 f7                    ..........


# MIDI resources

- MIDI specifications: https://www.midi.org/specifications
  - https://www.midi.org/specifications/item/the-midi-1-0-specification  
  - https://www.midi.org/specifications/category/reference-tables
- Manufacturer MIDI ID Numbers: https://www.midi.org/specifications/item/manufacturer-id-numbers
- http://www.personal.kent.edu/~sbirch/Music_Production/MP-II/MIDI/midi_system_exclusive_messages.htm
- SendMIDI and ReceiveMIDI tools:
    - https://github.com/gbevin/SendMIDI
    - https://github.com/gbevin/ReceiveMIDI

# Trademarks

Novation is a registered trade mark of Focusrite Audio Engineering Limited.

Bass Station II is a trade mark of Focusrite Audio Engineering Limited.
