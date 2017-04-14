/**
 * Bass Station II System Exclusive format
 */
BS2_SYSEX_LENGTH = 154;
BS2_SYSEX = [ // the number of masks define the number of bytes, so the "bytes" attribute is no longer necessary
    {
        id: "SYSEX_START",
        offset: 0,
        mask: [0xFF],
        range: [0xF0],
        description: "start of sysex data"
    }, {
        offset: 153,
        mask: [0xFF],
        range: [0xF7],
        description: "end of sysex data"
    },
    // Master
    {
        id: BS2_PARAM.PATCH_VOLUME,
        offset: 0,
        range: []
    },
    // Oscillator 1
    {
        id: BS2_PARAM.OSC1_FINE,
        offset: 22,
        mask: [0x03, 0x7E],
        range: [-100, 100],
        description: "Osc 1 fine"
    }, {
        id: BS2_PARAM.OSC1_RANGE,
        offset: 20,
        mask: [0x07, 0x78],
        range: [63, 66],
        description: "Osc 1 Range"
    }, {
        id: BS2_PARAM.OSC1_COARSE,
        offset: 21,
        mask: [0x03, 0x7C],
        range: [-12.0, 12.0],
        description: "Osc 1 coarse"
    }, {
        id: BS2_PARAM.OSC1_WAVEFORM,
        offset: 19,
        mask: [0x60],
        range: []
    }, {
        id: BS2_PARAM.OSC1_MOD_ENV_DEPTH,
        offset: 98,
        mask: [0x1F, 0x60],
        range: [-63, 63],
        description: "Osc 1 Mod Env depth"
    }, {
        id: BS2_PARAM.OSC1_LFO1_DEPTH,
        offset: 90,
        mask: [0x3F, 0x60],
        range: [-127, 127],
        description: "Osc 1 LFO 1 depth"
    }, {
        id: BS2_PARAM.OSC1_MOD_ENV_PW_MOD,
        offset: 101,
        mask: [0x01, 0x7C],
        range: [-90, 90]
    }, {
        id: BS2_PARAM.OSC1_LFO2_PW_MOD,
        offset: 93,
        mask: [0x03, 0x7C],
        range: [-90, 90]
    }, {
        id: BS2_PARAM.OSC1_MANUAL_PW,
        offset: 19,
        mask: [0x0F, 0x70],
        range: [5, 95],
        description: "Osc 1 Pulse Width Manual"
    },
    // Oscillator 2
    {
        id: BS2_PARAM.OSC2_FINE,
        offset: 28,
        mask: [0x0F, 0x78],
        range: [-100, 100],
        description: "Osc 2 fine"
    }, {
        id: BS2_PARAM.OSC2_RANGE,
        offset: 26,
        mask: [0x1F, 0x20],
        range: [63, 66],
        description: "Osc 2 Range"
    }, {
        id: BS2_PARAM.OSC2_COARSE,
        offset: 27,
        mask: [0x1F, 0x70],
        range: [-12.0, 12.0],
        description: "Osc 2 coarse"
    }, {
        id: BS2_PARAM.OSC2_WAVEFORM,
        offset: 24,
        mask: [0x03],
        range: []
    }, {
        id: BS2_PARAM.OSC2_MOD_ENV_DEPTH,
        offset: 99,
        mask: [0x0F, 0x70],
        range: [-63, 63],
        description: "Osc 2 Mod Env depth"
    }, {
        id: BS2_PARAM.OSC2_LFO1_DEPTH,
        offset: 91,
        mask: [0x1F, 0x70],
        range: [-127, 127],
        description: "Osc 2 LFO 1 depth"
    }, {
        id: BS2_PARAM.OSC2_ENV2_PW_MOD, // check
        offset: 0,
        range: [-90, 90]
    }, {
        id: BS2_PARAM.OSC2_LFO2_PW_MOD, // check
        offset: 0,
        range: [-90, 90]
    }, {
        id: BS2_PARAM.OSC2_MANUAL_PW,
        offset: 25,
        mask: [0x1F, 0x40],
        range: [5, 95],
        description: "Osc 2 Pulse Width"
    },
    // Sub oscillator
    {
        id: BS2_PARAM.SUB_OSC_OCT,
        offset: 37,
        mask: [0x08],
        range: [0, 0],
        description: "Sub Osc octave"
    }, {
        id: BS2_PARAM.SUB_OSC_WAVE,
        offset: 0,
        range: []
    },
    // Mixer
    {
        id: BS2_PARAM.MIXER_OSC_1_LEVEL,
        offset: 37,
        mask: [0x07, 0x7C],
        range: [0, 255]
    }, {
        id: BS2_PARAM.MIXER_OSC_2_LEVEL,
        offset: 38,
        mask: [0x03, 0x7E],
        range: []
    }, {
        id: BS2_PARAM.MIXER_SUB_OSC_LEVEL,
        offset: 39,
        mask: [0x01, 0x7F],
        range: [0, 255]
    }, {
        id: BS2_PARAM.MIXER_SELECT_NOISE_RING_EXT,
        offset: 0,
        range: []
    }, {
        id: BS2_PARAM.MIXER_NOISE_LEVEL,
        offset: 41,
        mask: [0x7F, 0x40],
        range: []
    }, {
        id: BS2_PARAM.MIXER_RING_MOD_LEVEL,
        offset: 42,
        mask: [0x3F, 0x60],
        range: []
    }, {
        id: BS2_PARAM.MIXER_EXTERNAL_SIGNAL_LEVEL,
        offset: 43,
        mask: [0x1F, 0x70],
        range: []
    },
    // Filter
    {
        id: BS2_PARAM.FILTER_TYPE,
        offset: 48,
        mask: [0x04],
        range: []   // todo
    }, {
        id: BS2_PARAM.FILTER_SLOPE,
        offset: 48,
        mask: [0x08],
        range: []   // todo
    }, {
        id: BS2_PARAM.FILTER_SHAPE,
        offset: 48,
        mask: [0x03],
        range: []   // todo
    }, {
        id: BS2_PARAM.FILTER_FREQUENCY,
        offset: 44,
        mask: [0x0F, 0x78],
        range: [0, 255],
        description: "Filter Frequency"
    }, {
        id: BS2_PARAM.FILTER_RESONANCE,
        offset: 45,
        mask: [0x03, 0x7C],
        range: [0, 127]
    }, {
        id: BS2_PARAM.FILTER_MOD_ENV_DEPTH,
        offset: 105,
        mask: [0x3F, 0x40],
        range: [-63, 63]
    }, {
        id: BS2_PARAM.FILTER_LFO2_DEPTH,
        offset: 97,
        mask: [0x3F, 0x40],
        range: [0, 127]
    }, {
        id: BS2_PARAM.FILTER_OVERDRIVE,
        offset: 46,
        mask: [0x01, 0x7E],
        range: [0, 127]
    },
    // Portamento
    {
        id: BS2_PARAM.PORTAMENTO_TIME,
        offset: 0,
        range: []
    },
    // LFOs
    {
        id: BS2_PARAM.LFO1_SPEED,
        offset: 66,
        mask: [0x3F, 0x60],
        range: [0, 255],
        description: "LFO 1 Speed"
    }, {
        id: BS2_PARAM.LFO1_DELAY,
        offset: 64,
        mask: [0x7F],
        range: [0, 127],
        description: "LFO 1 Delay"
    }, {
        id: BS2_PARAM.LFO2_SPEED,
        offset: 73,
        mask: [0x7F, 0x40],
        range: [0, 255],
        description: "LFO 2 Speed"
    }, {
        id: BS2_PARAM.LFO2_DELAY,
        offset: 70,
        mask: [0x01, 0x7E],
        range: [0, 127],
        description: "LFO 2 Delay"
    }, {
        id: BS2_PARAM.LFO1_WAVE,
        offset: 63,
        mask: [0x06],
        range: []   // todo
    }, {
        id: BS2_PARAM.LFO2_WAVE,
        offset: 70,
        mask: [0x0C],
        range: []   // todo
    }, {
        id: BS2_PARAM.LFO1_SYNC_VALUE,
        offset: 0,
         
        range: []
    }, {
        id: BS2_PARAM.LFO2_SYNC_VALUE,
        offset: 0,
         
        range: []
    },
    // Envelopes
    {
        id: BS2_PARAM.AMP_ENV_ATTACK,
        offset: 50,
        mask: [0x1F, 0x60],
        range: []
    }, {
        id: BS2_PARAM.AMP_ENV_DECAY,
        offset: 51,
        mask: [0x0F, 0x70],
        range: []
    }, {
        id: BS2_PARAM.AMP_ENV_SUSTAIN,
        offset: 52,
        mask: [0x07, 0x78],
        range: []
    }, {
        id: BS2_PARAM.AMP_ENV_RELEASE,
        offset: 53,
        mask: [0x03, 0x7C],
        range: []
    }, {
        id: BS2_PARAM.AMP_ENV_TRIGGERING,
        offset: 55,
        mask: [0x06],
        range: []
    }, {
        id: BS2_PARAM.MOD_ENV_ATTACK,
        offset: 57,
        mask: [0x3F, 0x40],
        range: []
    }, {
        id: BS2_PARAM.MOD_ENV_DECAY,
        offset: 58,
        mask: [0x1F, 0x60],
        range: []
    }, {
        id: BS2_PARAM.MOD_ENV_SUSTAIN,
        offset: 59,
        mask: [0x0F, 0x70],
        range: []
    }, {
        id: BS2_PARAM.MOD_ENV_RELEASE,
        offset: 60,
        mask: [0x07, 0x78],
        range: []
    }, {
        id: BS2_PARAM.MOD_ENV_TRIGGERING,
        range: []
    },
    // Effects
    {
        id: BS2_PARAM.FX_DISTORTION,
        range: []
    }, {
        id: BS2_PARAM.FX_OSC_FILTER_MOD,
        range: []
    },
    // Arpeggiator
    {
        id: BS2_PARAM.ARP_ON,
        range: []
    }, {
        id: BS2_PARAM.ARP_LATCH,
        range: []
    }, {
        id: BS2_PARAM.ARP_RHYTHM,
        range: []
    }, {
        id: BS2_PARAM.ARP_NOTE_MODE,
        range: []
    }, {
        id: BS2_PARAM.ARP_OCTAVES,
        range: []
    },
    // Other
    {
        id: BS2_PARAM.PITCH,
        range: []
    }, {
        id: BS2_PARAM.MOD,
        range: []
    }, {
        id: BS2_PARAM.SUSTAIN,
        range: []
    }, {
        id: BS2_PARAM.AFTER_TOUCH,
        range: []
    },
    // Mod wheel
    {
        id: BS2_PARAM.NOD_WHEEL_LFO2_FILTER_FREQ,
        range: []
    }, {
        id: BS2_PARAM.NOD_WHEEL_LFO1_OSC_PITCH,
        range: []
    }, {
        id: BS2_PARAM.NOD_WHEEL_OSC2_PITCH,
        range: []
    },
    // Aftertouch
    {
        id: BS2_PARAM.AFTERTOUCH_FILTER_FREQ,
        range: []
    }, {
        id: BS2_PARAM.AFTERTOUCH_LFO1_TO_OSC_PITCH,
        range: []
    }, {
        id: BS2_PARAM.AFTERTOUCH_LFO2_SPEED,
        range: []
    },
    // LFOs
    {
        id: BS2_PARAM.LFO_KEY_SYNC_LFO1,
        range: []
    }, {
        id: BS2_PARAM.LFO_KEY_SYNC_LFO2,
        range: []
    }, {
        id: BS2_PARAM.LFO_SPEED_SYNC_LFO1,
        range: []
    }, {
        id: BS2_PARAM.LFO_SPEED_SYNC_LFO2,
        range: []
    }, {
        id: BS2_PARAM.LFO_SLEW_LFO_1,
        range: []
    }, {
        id: BS2_PARAM.LFO_SLEW_LFO_2,
        range: []
    },
    // Oscillator
    {
        id: BS2_PARAM.OSC_BEND_AMOUNT,
        range: []
    }, {
        id: BS2_PARAM.OSC_1_2_SYNC,
        range: []
    },
    // Velocity
    {
        id: BS2_PARAM.VELOCITY_AMP_ENV,
        range: []
    }, {
        id: BS2_PARAM.VELOCITY_MOD_ENV,
        range: []
    },
    // VCA
    {
        id: BS2_PARAM.VCA_LIMIT,
        range: []
    },
    // Arpeggiator
    {
        id: BS2_PARAM.ARP_SWING,
        range: []
    }, {
        id: BS2_PARAM.ARP_SEQ_RETRIG,
        range: []
    },
    // Octave
    {
        id: BS2_PARAM.OCTAVE_KEY_TRANSPOSE,
        range: []
    }, {
        id: BS2_PARAM.OCTAVE,
        range: []
    },
    // Misc
    {
        id: BS2_PARAM.OTHER_MOD,
        range: []
    },
    // Global
    {
        id: BS2_PARAM.GLOBAL_MIDI_CHAN,
        range: []
    }, {
        id: BS2_PARAM.GLOBAL_LOCAL,
        range: []
    }, {
        id: BS2_PARAM.GLOBAL_TUNE,
        range: []
    }, {
        id: BS2_PARAM.GLOBAL_INPUT_GAIN,
        range: []
    }

];

console.log(BS2_SYSEX);