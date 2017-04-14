function buildSet(array) {
    var set = {};
    for (var i in array) {
        var item = array[i];
        set[item] = item;
    }
    return Object.freeze(set);
}

var BS2_PARAM = buildSet([
// Master
    'PATCH_VOLUME',
// Oscillator 1
    'OSC1_FINE',
    'OSC1_RANGE',
    'OSC1_COARSE',
    'OSC1_WAVEFORM',
    'OSC1_MOD_ENV_DEPTH',
    'OSC1_LFO1_DEPTH',
    'OSC1_MOD_ENV_PW_MOD',
    'OSC1_LFO2_PW_MOD',
    'OSC1_MANUAL_PW',
// Oscillator 2
    'OSC2_FINE',
    'OSC2_RANGE',
    'OSC2_COARSE',
    'OSC2_WAVEFORM',
    'OSC2_MOD_ENV_DEPTH',
    'OSC2_LFO1_DEPTH',
    'OSC2_ENV2_PW_MOD',
    'OSC2_LFO2_PW_MOD',
    'OSC2_MANUAL_PW',
// Sub oscillator
    'SUB_OSC_OCT',
    'SUB_OSC_WAVE',
// Mixer
    'MIXER_OSC_1_LEVEL',
    'MIXER_OSC_2_LEVEL',
    'MIXER_SUB_OSC_LEVEL',
    'MIXER_SELECT_NOISE_RING_EXT',
    'MIXER_NOISE_LEVEL',
    'MIXER_RING_MOD_LEVEL',
    'MIXER_EXTERNAL_SIGNAL_LEVEL',
// Filter
    'FILTER_TYPE',
    'FILTER_SLOPE',
    'FILTER_SHAPE',
    'FILTER_FREQUENCY',
    'FILTER_RESONANCE',
    'FILTER_MOD_ENV_DEPTH',
    'FILTER_LFO2_DEPTH',
    'FILTER_OVERDRIVE',
// Portamento
    'PORTAMENTO_TIME',
// LFOs
    'LFO1_SPEED',
    'LFO1_DELAY',
    'LFO2_SPEED',
    'LFO2_DELAY',
    'LFO1_WAVE',
    'LFO2_WAVE',
    'LFO1_SYNC_VALUE',
    'LFO2_SYNC_VALUE',
// Envelopes
    'AMP_ENV_ATTACK',
    'AMP_ENV_DECAY',
    'AMP_ENV_SUSTAIN',
    'AMP_ENV_RELEASE',
    'AMP_ENV_TRIGGERING',
    'MOD_ENV_ATTACK',
    'MOD_ENV_DECAY',
    'MOD_ENV_SUSTAIN',
    'MOD_ENV_RELEASE',
    'MOD_ENV_TRIGGERING',
// Effects
    'FX_DISTORTION',
    'FX_OSC_FILTER_MOD',
// Arpeggiator
    'ARP_ON',
    'ARP_LATCH',
    'ARP_RHYTHM',
    'ARP_NOTE_MODE',
    'ARP_OCTAVES',
// Other
    'PITCH',
    'MOD',
    'SUSTAIN',
    'AFTER_TOUCH',
// Mod wheel
    'NOD_WHEEL_LFO2_FILTER_FREQ',
    'NOD_WHEEL_LFO1_OSC_PITCH',
    'NOD_WHEEL_OSC2_PITCH',
// Aftertouch
    'AFTERTOUCH_FILTER_FREQ',
    'AFTERTOUCH_LFO1_TO_OSC_PITCH',
    'AFTERTOUCH_LFO2_SPEED',
// LFOs
    'LFO_KEY_SYNC_LFO1',
    'LFO_KEY_SYNC_LFO2',
    'LFO_SPEED_SYNC_LFO1',
    'LFO_SPEED_SYNC_LFO2',
    'LFO_SLEW_LFO_1',
    'LFO_SLEW_LFO_2',
// Oscillator
    'OSC_BEND_AMOUNT',
    'OSC_1_2_SYNC',
// Velocity
    'VELOCITY_AMP_ENV',
    'VELOCITY_MOD_ENV',
// VCA
    'VCA_LIMIT',
// Arpeggiator
    'ARP_SWING',
    'ARP_SEQ_RETRIG',
// Octave
    'OCTAVE_KEY_TRANSPOSE',
    'OCTAVE',
// Misc
    'OTHER_MOD',
// Global
    'GLOBAL_MIDI_CHAN',
    'GLOBAL_LOCAL',
    'GLOBAL_TUNE',
    'GLOBAL_INPUT_GAIN'
]);
    