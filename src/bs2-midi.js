
const MIDI_CC = "CC";
const MIDI_NRPN = "NRPN"
/*
BS2_MIDI = [
    {
        param: BS2_PARAM.OSC1_RANGE,
        type: MIDI_CC,
        cc: [70],
        range: function (v) { return v; },
    }, {
        param: BS2_PARAM.OSC1_FINE,
        type: MIDI_CC,
        cc: [26, 58],
        range: [-100, 100],
    }
];

BS2_CC = {
    70: {
        param: BS2_PARAM.OSC1_RANGE,
        range: function (v) { return v; },
    }
};

console.log(BS2_MIDI);
console.log(BS2_CC);
*/

BS2 = {
    osc1_range : {
        description: "Osc 1 Range",
        type: MIDI_CC,
        cc: [70],
        range: function (v) { return v; },
        sysex: {
            offset: 20,
            mask: [0x07, 0x78],
        }
    }


    
}

