/**
 * Bass Station II System Exclusive format
 */

BS2_SYSEX_LENGTH = 154;
BS2_SYSEX = [   // the number of masks define the number of bytes, so the "bytes" attribute is no longer necessary
    {
        id: "SYSEX_START",
        offset: 0,
        //bytes: 1,
        mask: [0xFF],
        //shift: 0,
        range: [0xF0],
        description: "start of sysex data"
    }, {
        id: BS2_PARAM.OSC1_RANGE,
        offset: 20,
        //bytes: 2,
        mask: [0x07, 0x78],
        //shift: 0,
        range: [63, 66],
        description: "Osc 1 Range"
    },
    {
        offset: 21,
        //bytes: 2,
        mask: [0x03, 0x7C],
        //shift: 0,
        range: [-12.0, 12.0],
        description: "Osc 1 coarse"
    }, {
        offset: 22,
        //bytes: 2,
        mask: [0x03, 0x7E],
        //shift: 0,
        range: [-100, 100],
        description: "Osc 1 fine"
    }, {
        offset: 26,
        //bytes: 2,
        mask: [0x1F, 0x20],
        //shift: 0,
        range: [63, 66],
        description: "Osc 2 Range"
    }, {
        offset: 27,
        //bytes: 2,
        mask: [0x1F, 0x70],
        //shift: 0,
        range: [-12.0, 12.0],
        description: "Osc 2 coarse"
    },  {
        offset: 28,
        //bytes: 2,
        mask: [0x0F, 0x78],
        //shift: 0,
        range: [-100, 100],
        description: "Osc 2 fine"
    }, {
        offset: 98,
        //bytes: 2,
        mask: [0x1F, 0x60],
        //shift: 0,
        range: [-63, 63],
        description: "Osc 1 Mod Env depth"
    }, {
        offset: 37,
        //bytes: 1,
        mask: [0x08],
        //shift: 0,
        range: [0, 0],
        description: "Sub Osc octave"
    }, {
        offset: 44,
        //bytes: 2,
        mask: [0x0F, 0x78],
        //shift: 0,
        range: [0, 255],
        description: "Filter Frequency"
    }, {
        offset: 90,
        //bytes: 2,
        mask: [0x3F, 0x60],
        //shift: 0,
        range: [-127, 127],
        description: "Osc 1 LFO 1 depth"
    }, {
        offset: 91,
        //bytes: 2,
        mask: [0x1F, 0x70],
        //shift: 0,
        range: [-127, 127],
        description: "Osc 2 LFO 1 depth"
    }, {
        offset: 99,
        //bytes: 2,
        mask: [0x0F, 0x70],
        //shift: 0,
        range: [-63, 63],
        description: "Osc 2 Mod Env depth"
    }, {
    offset: 101,
    //bytes: 2,
    mask: [0x03,0x7C],
    //shift: 0,
    range: [-90, 90],
    description: "Osc 1 Pulse Width"
},{
    offset: 102,
    //bytes: 2,
    mask: [0x01,0x7E],
    //shift: 0,
    range: [-90, 90],
    description: "Osc 2 Pulse Width"
},{
    offset: 66,
    //bytes: 2,
    mask: [0x3F,0x60],
    //shift: 0,
    range: [0, 255],
    description: "LFO 1 Speed"
},{
    offset: 73,
    //bytes: 2,
    mask: [0x7F,0x40],
    //shift: 0,
    range: [0, 255],
    description: "LFO 2 Speed"
},{
    offset: 64,
    //bytes: 1,
    mask: [0x7F],
    //shift: 0,
    range: [0, 127],
    description: "LFO 1 Delay"
},{
    offset: 70,
    //bytes: 2,
    mask: [0x01,0x7E],
    //shift: 0,
    range: [0, 127],
    description: "LFO 2 Delay"
},{
        offset: 153,
        //bytes: 1,
        mask: [0xFF],
        //shift: 0,
        range: [0xF7],
        description: "end of sysex data"
    }
];

console.log(BS2_SYSEX);
