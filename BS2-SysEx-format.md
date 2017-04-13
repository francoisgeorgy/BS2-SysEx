
# Bass Station II System Exclusive Messages specifications

## Summary

Ref: https://www.midi.org/specifications/item/table-1-summary-of-midi-message

A MIDI System Exclusive message has the following format:

`N` is the number of bytes of bytes of the messages.

| Offset | Data   | BS-II | Description                            |
| ------:| ------:| -----:|:-------------------------------------- |
|      0 |     F0 |       | Mark the start of the SysEx message    | 
|      1 |   _id_ |    00 | Manufacturer's ID                      |
|      2 |   _id_ |    20 | Manufacturer's ID                      |
|      3 |   _id_ |    29 | Manufacturer's ID                      |
| 4.._N_-2 | _xx_ |       | sysex data (N-5 bytes)                 |
|    _N_-1 |   F7 |       | Mark the end of the SysEx message      |

Note: "Japanese Group" manufacturers have only one ID byte. See [https://www.midi.org/specifications/item/manufacturer-id-numbers] for more details.

## Example
    
BS II SysEx length is 154 bytes.    
    
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

## Details

- **Offset**: index from the start of the SysEx data (first byte has offset=0)
- **Bytes**: number of bytes to consider for this parameter
- **Mask**: mask to apply to the above bytes to get the bits relative to the parameter
- **Shift**: how many bits to shift the data to the right to get the real value
- **Bits**: how many bits form the value
- **Value**: range of values

Example: TODO...

| Offset | Bytes | Hex mask   | Bin mask            | Shift | Bits | Value    | Description                            |
| ------:| -----:| ----------:| -------------------:| -----:|-----:|---------:|:-------------------------------------- |
|      0 |     1 |       `FF` |          `11111111` |     0 |    8 |     0xF0 | start of sysex data                    |
|      1 |     3 | `7F 7F 7F` |      3 * `01111111` |     0 |   24 | 0x002029 |                                        |
|        |       |            |                     |       |      |          |                                        |
|        |       |            |                     |       |      |          |                                        |
|        |       |            |                     |       |      |          |                                        |
|        |       |            |                     |       |      |          |                                        |
|        |       |            |                     |       |      |          |                                        |
|        |       |            |                     |       |      |          |                                        |
|        |       |            |                     |       |      |          |                                        |
|        |       |            |                     |       |      |          |                                        |
|     21 |     2 |    `03 7E` | `00000011 01111110` |     1 |    8 |   0..255 | Osc 1 fine                             |
|        |       |            |                     |       |      |          |                                        |
|        |       |            |                     |       |      |          |                                        |
|        |       |            |                     |       |      |          |                                        |
|        |       |            |                     |       |      |          |                                        |
|        |       |            |                     |       |      |          |                                        |
|        |       |            |                     |       |      |          |                                        |
|        |       |            |                     |       |      |          |                                        |
|        |       |            |                     |       |      |          |                                        |
|        |       |            |                     |       |      |          |                                        |
|        |       |            |                     |       |      |          |                                        |
|        |     1 |       `FF` |          `11111111` |     0 |    8 |     0xF7 | end of sysex data                      |

## Ranges

    osc
        range   16'=00111111     63
                 8'=01000000     64             
                 4'=01000001     65
                 2'=01000010     66
                              
        fine    min=00011011     27
                max=11100100    228
                   
        coarse  min=00000000
                max=11111111    127
                
        w.form  sin=00
                tri=01
                saw=10
                pul=11
                
        pul.wi. min=0000000
                max=1111111
    
## Values accross bytes

-127..127:

Example with Osc1 LFO1 Depth 

    mask:   00011111 01110000

    -127:   xxx00000 x000xxxx   00000 000 = 0         0 - 127 = -127
     -56:   xxx01000 x111xxxx   01000 111 = 71       71 - 127 = -56
      -1:   xxx01111 x110xxxx   01111 110 = 126     126 - 127 = -1 
       0:   xxx10000 x000xxxx   10000 000 = 128     128 - 128 = 0
       1:   xxx10000 x001xxxx   10000 001 = 129     129 - 128 = 1 
      56:   xxx10111 x000xxxx   10111 000 = 184     184 - 128 = 56
     127:   xxx11111 x111xxxx   11111 111 = 255     255 - 128 = 127

     rule: if msb==1 substract 128 else substract 127

## Two-bytes CC

Example with value = 23

    23 / 2 --> 11
    23 % 2 --> 1 --> 64

    MSB: 11 in binary = 00001011
    LSB: 64 in binary = 01000000

    shift MSB one bit to left and add LSB bit:
    
        00010110
      + 00000001
      ----------
        00010111
       
    binary 00010111 = decimal 23        

Example with value = 231                                  
    
    231 / 2 --> 115
    231 % 2 --> 1 --> 64

    MSB: 115 in binary = 01110011
    LSB:  64 in binary = 01000000

    shift MSB one bit to left and add LSB bit:
    
        11100110
      + 00000001
      ----------
        11100111
       
    binary 11100111 = decimal 231       

----

## Master

Patch volume 100

## Oscillators

              
Osc 1 range             19, 2, [0x07 0x78]
Osc 1 coarse            20, 2, [0x03 0x7c]
Osc 1 waveform          18, 1, [0x60]
Osc 1 Mod Env depth
Osc 1 LFO 1 depth
Osc 1 Mod Env PW mod
Osc 1 LFO 2 PW mod
Osc 1 manual PW

Osc 2 fine              27, 2, [0x0f 0x78]
Osc 2 range
Osc 2 coarse
Osc 2 waveform 
Osc 2 Mod Env depth
Osc 2 LFO 1 depth
Osc 2 env 2 PW mod
Osc 2 LFO 2 PW mod
Osc 2 manual PW

Sub Osc oct
Sub Osc wave 

## Mixer

Osc 1 level 
Osc 2 level 
Sub Osc level 
Select noise, ring, ext 
Noise level 
Ring mod level 
External signal level

## Filter

Type  
Slope 
Shape 
Frequency 
Resonance 
Mod Env depth 
LFO 2 depth 
Overdrive

## Portamento

Portamento time

## LFOs

LFO 1 speed
LFO 1 delay 
LFO 2 speed
LFO 2 delay 
LFO 1 wave 
LFO 2 wave  
LFO 1 Sync value  
LFO 2 Sync value 

## Enveloppes

Amp env attack 
Amp env decay 
Amp env sustain 
Amp env release 
Amp env triggering 
Mod Env attack 
Mod Env decay 
Mod Env sustain 
Mod Env release 
Mod Env triggering 
Amp and Mod Env triggering 

## Effects 

Distortion
Osc Filter Mod

## Arpeggiator

On 
Latch 
Rhythm 
Note mode 
Octaves 

## Octave Area

Key transpose
Octave

## Other

Mod

## Nod Wheel

LFO 2 Filter Freq
LFO 1 Osc Pitch 
Osc 2 Pitch

## Aftertouch

Filter Freq 
LFO 1 to Osc Pitch
LFO 2 Speed

## LFO 

Key Sync LFO 1 
Key Sync LFO 2 
Speed/Sync LFO 1 
Speed/Sync LFO 2 
Slew LFO 1
Slew LFO 2

## Oscillator

Bend Amount 
Osc 1-2 Sync 

## Velocity

Amp Env
Mod Env

## VCA

Limit

## ARP

Arp Swing 
Seq Retrig 

## Global

MIDI Chan 
Local 
Tune
Input Gain

