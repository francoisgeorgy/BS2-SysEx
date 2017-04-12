/**
 * Bass Station II System Exclusive format
 */

export const BS2_SYSEX = [
    {
        offset: 0,
        bytes: 1,
        masks: [0xFF],
        shift: 0,
        range: [0, 0],
        description: "start of sysex data"
    },{
        offset: 1,
        bytes: 0,
        masks: [0b0],
        shift: 0,
        range: [0, 0],
        description: ""
    }
]

