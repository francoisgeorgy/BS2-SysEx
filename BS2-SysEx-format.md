
# Bass Station II System Exclusive Messages specifications

## Summary

Ref: https://www.midi.org/specifications/item/table-1-summary-of-midi-message

A MIDI System Exclusive message has the following format:

`N` is the number of bytes of bytes of the messages.

| Offset | Data   | BS-II | Description                            |
| ------:| ------:| -----:|:-------------------------------------- |
|      0 |     F0 |    F0 | Mark the start of the SysEx message    | 
|      1 |   _id_ |    00 | Manufacturer's ID                      |
|      2 |   _id_ |    20 | Manufacturer's ID                      |
|      3 |   _id_ |    29 | Manufacturer's ID                      |
| 4.._N_-2 | _xx_ |       | sysex data (N-5 bytes)                 |
|    _N_-1 |   F7 |    F7 | Mark the end of the SysEx message      |

Note: "Japanese Group" manufacturers have only one ID byte. See [https://www.midi.org/specifications/item/manufacturer-id-numbers] for more details.

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

