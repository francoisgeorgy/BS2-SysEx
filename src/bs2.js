BS2 = {
    meta: {
        sysex_length: 154
    },
    param: {
        patch_volume: {
            description: "Patch Volume",
            type: "cc",
            cc: [],
            range: [],
            sysex: {
                offset: 0,
                mask: []
            }
        },
        osc1_fine: {
            description: "Osc1 Fine",
            type: "cc",
            cc: [],
            range: [ -100, 100 ],
            sysex: {
                offset: 22,
                mask: [0x03,0x7E]
            }
        },
        osc1_range: {
            description: "Osc1 Range",
            type: "cc",
            cc: [],
            range: [ 63, 66 ],
            sysex: {
                offset: 20,
                mask: [0x07,0x78]
            }
        },
        osc1_coarse: {
            description: "Osc1 Coarse",
            type: "cc",
            cc: [],
            range: [ -12, 12 ],
            sysex: {
                offset: 21,
                mask: [0x03,0x7C]
            }
        },
        osc1_waveform: {
            description: "Osc1 Waveform",
            type: "cc",
            cc: [],
            range: [],
            sysex: {
                offset: 19,
                mask: [0x60]
            }
        },
        osc1_mod_env_depth: {
            description: "Osc1 Mod Env Depth",
            type: "cc",
            cc: [],
            range: [ -63, 63 ],
            sysex: {
                offset: 98,
                mask: [0x1F,0x60]
            }
        },
        osc1_lfo1_depth: {
            description: "Osc1 LFO1 Depth",
            type: "cc",
            cc: [],
            range: [ -127, 127 ],
            sysex: {
                offset: 90,
                mask: [0x3F,0x60]
            }
        },
        osc1_mod_env_pw_mod: {
            description: "Osc1 Mod Env PW Mod",
            type: "cc",
            cc: [],
            range: [ -90, 90 ],
            sysex: {
                offset: 101,
                mask: [0x01,0x7C]
            }
        },
        osc1_lfo2_pw_mod: {
            description: "Osc1 LFO2 PW Mod",
            type: "cc",
            cc: [],
            range: [ -90, 90 ],
            sysex: {
                offset: 93,
                mask: [0x03,0x7C]
            }
        },
        osc1_manual_pw: {
            description: "Osc1 Manual PW",
            type: "cc",
            cc: [],
            range: [ 5, 95 ],
            sysex: {
                offset: 19,
                mask: [0x0F,0x70]
            }
        },
        osc2_fine: {
            description: "Osc2 Fine",
            type: "cc",
            cc: [],
            range: [ -100, 100 ],
            sysex: {
                offset: 28,
                mask: [0x0F,0x78]
            }
        },
        osc2_range: {
            description: "Osc2 Range",
            type: "cc",
            cc: [],
            range: [ 63, 66 ],
            sysex: {
                offset: 26,
                mask: [0x1F,0x20]
            }
        },
        osc2_coarse: {
            description: "Osc2 Coarse",
            type: "cc",
            cc: [],
            range: [ -12, 12 ],
            sysex: {
                offset: 27,
                mask: [0x1F,0x70]
            }
        },
        osc2_waveform: {
            description: "Osc2 Waveform",
            type: "cc",
            cc: [],
            range: [],
            sysex: {
                offset: 24,
                mask: [0x03]
            }
        },
        osc2_mod_env_depth: {
            description: "Osc2 Mod Env Depth",
            type: "cc",
            cc: [],
            range: [ -63, 63 ],
            sysex: {
                offset: 99,
                mask: [0x0F,0x70]
            }
        },
        osc2_lfo1_depth: {
            description: "Osc2 LFO1 Depth",
            type: "cc",
            cc: [],
            range: [ -127, 127 ],
            sysex: {
                offset: 91,
                mask: [0x1F,0x70]
            }
        },
        osc2_env2_pw_mod: {
            description: "Osc2 Env2 PW Mod",
            type: "cc",
            cc: [],
            range: [ -90, 90 ],
            transform: v => Math.trunc(180/127 * v) - 90,
            sysex: {
                offset: 102,
                mask: [0x01,0x7E]
            }
        },
        osc2_lfo2_pw_mod: {
            description: "Osc2 LFO2 PW Mod",
            type: "cc",
            cc: [],
            range: [ -90, 90 ],
            sysex: {
                offset: 94,
                mask: [0x01,0x7E]
            }
        },
        osc2_manual_pw: {
            description: "Osc2 Manual PW",
            type: "cc",
            cc: [],
            range: [ 5, 95 ],
            sysex: {
                offset: 25,
                mask: [0x1F,0x40]
            }
        },
        sub_osc_oct: {
            description: "Sub Osc Oct",
            type: "cc",
            cc: [],
            range: [ 0, 0 ],
            sysex: {
                offset: 37,
                mask: [0x08]
            }
        },
        sub_osc_wave: {
            description: "Sub Osc Wave",
            type: "cc",
            cc: [],
            range: [],
            sysex: {
                offset: 36,
                mask: [0x30]
            }
        },
        mixer_osc_1_level: {
            description: "Mixer Osc 1 Level",
            type: "cc",
            cc: [],
            range: [ 0, 255 ],
            sysex: {
                offset: 37,
                mask: [0x07,0x7C]
            }
        },
        mixer_osc_2_level: {
            description: "Mixer Osc 2 Level",
            type: "cc",
            cc: [],
            range: [],
            sysex: {
                offset: 38,
                mask: [0x03,0x7E]
            }
        },
        mixer_sub_osc_level: {
            description: "Mixer Sub Osc Level",
            type: "cc",
            cc: [],
            range: [ 0, 255 ],
            sysex: {
                offset: 39,
                mask: [0x01,0x7F]
            }
        },
        mixer_select_noise_ring_ext: {
            description: "Mixer Select Noise Ring Ext",
            type: "cc",
            cc: [],
            range: [],
            sysex: {
                offset: 0,
                mask: []
            }
        },
        mixer_noise_level: {
            description: "Mixer Noise Level",
            type: "cc",
            cc: [],
            range: [],
            sysex: {
                offset: 41,
                mask: [0x7F,0x40]
            }
        },
        mixer_ring_mod_level: {
            description: "Mixer Ring Mod Level",
            type: "cc",
            cc: [],
            range: [],
            sysex: {
                offset: 42,
                mask: [0x3F,0x60]
            }
        },
        mixer_external_signal_level: {
            description: "Mixer External Signal Level",
            type: "cc",
            cc: [],
            range: [],
            sysex: {
                offset: 43,
                mask: [0x1F,0x70]
            }
        },
        filter_type: {
            description: "Filter Type",
            type: "cc",
            cc: [],
            range: [],
            sysex: {
                offset: 48,
                mask: [0x04]
            }
        },
        filter_slope: {
            description: "Filter Slope",
            type: "cc",
            cc: [],
            range: [],
            sysex: {
                offset: 48,
                mask: [0x08]
            }
        },
        filter_shape: {
            description: "Filter Shape",
            type: "cc",
            cc: [],
            range: [],
            sysex: {
                offset: 48,
                mask: [0x03]
            }
        },
        filter_frequency: {
            description: "Filter Frequency",
            type: "cc",
            cc: [],
            range: [ 0, 255 ],
            sysex: {
                offset: 44,
                mask: [0x0F,0x78]
            }
        },
        filter_resonance: {
            description: "Filter Resonance",
            type: "cc",
            cc: [],
            range: [ 0, 127 ],
            sysex: {
                offset: 45,
                mask: [0x03,0x7C]
            }
        },
        filter_mod_env_depth: {
            description: "Filter Mod Env Depth",
            type: "cc",
            cc: [],
            range: [ -63, 63 ],
            sysex: {
                offset: 105,
                mask: [0x3F,0x40]
            }
        },
        filter_lfo2_depth: {
            description: "Filter LFO2 Depth",
            type: "cc",
            cc: [],
            range: [ 0, 127 ],
            sysex: {
                offset: 97,
                mask: [0x3F,0x40]
            }
        },
        filter_overdrive: {
            description: "Filter Overdrive",
            type: "cc",
            cc: [],
            range: [ 0, 127 ],
            sysex: {
                offset: 46,
                mask: [0x01,0x7E]
            }
        },
        portamento_time: {
            description: "Portamento Time",
            type: "cc",
            cc: [],
            range: [],
            sysex: {
                offset: 13,
                mask: [0x03,0x7C]
            }
        },
        lfo1_speed: {
            description: "LFO1 Speed",
            type: "cc",
            cc: [],
            range: [ 0, 255 ],
            sysex: {
                offset: 66,
                mask: [0x3F,0x60]
            }
        },
        lfo1_delay: {
            description: "LFO1 Delay",
            type: "cc",
            cc: [],
            range: [ 0, 127 ],
            sysex: {
                offset: 64,
                mask: [0x7F]
            }
        },
        lfo2_speed: {
            description: "LFO2 Speed",
            type: "cc",
            cc: [],
            range: [ 0, 255 ],
            sysex: {
                offset: 73,
                mask: [0x7F,0x40]
            }
        },
        lfo2_delay: {
            description: "LFO2 Delay",
            type: "cc",
            cc: [],
            range: [ 0, 127 ],
            sysex: {
                offset: 70,
                mask: [0x01,0x7E]
            }
        },
        lfo1_wave: {
            description: "LFO1 Wave",
            type: "cc",
            cc: [],
            range: [],
            sysex: {
                offset: 63,
                mask: [0x06]
            }
        },
        lfo2_wave: {
            description: "LFO2 Wave",
            type: "cc",
            cc: [],
            range: [],
            sysex: {
                offset: 70,
                mask: [0x0C]
            }
        },
        lfo1_sync_value: {
            description: "LFO1 Sync Value",
            type: "cc",
            cc: [],
            range: [],
            sysex: {
                offset: 0,
                mask: []
            }
        },
        lfo2_sync_value: {
            description: "LFO2 Sync Value",
            type: "cc",
            cc: [],
            range: [],
            sysex: {
                offset: 0,
                mask: []
            }
        },
        amp_env_attack: {
            description: "Amp Env Attack",
            type: "cc",
            cc: [],
            range: [0, 127],
            sysex: {
                offset: 50,
                mask: [0x1F,0x60]
            }
        },
        amp_env_decay: {
            description: "Amp Env Decay",
            type: "cc",
            cc: [],
            range: [0, 127],
            sysex: {
                offset: 51,
                mask: [0x0F,0x70]
            }
        },
        amp_env_sustain: {
            description: "Amp Env Sustain",
            type: "cc",
            cc: [],
            range: [0, 127],
            sysex: {
                offset: 52,
                mask: [0x07,0x78]
            }
        },
        amp_env_release: {
            description: "Amp Env Release",
            type: "cc",
            cc: [],
            range: [0, 127],
            sysex: {
                offset: 53,
                mask: [0x03,0x7C]
            }
        },
        amp_env_triggering: {
            description: "Amp Env Triggering",
            type: "cc",
            cc: [],
            range: [],
            sysex: {
                offset: 55,
                mask: [0x06]
            }
        },
        mod_env_attack: {
            description: "Mod Env Attack",
            type: "cc",
            cc: [],
            range: [0, 127],
            sysex: {
                offset: 57,
                mask: [0x3F,0x40]
            }
        },
        mod_env_decay: {
            description: "Mod Env Decay",
            type: "cc",
            cc: [],
            range: [0, 127],
            sysex: {
                offset: 58,
                mask: [0x1F,0x60]
            }
        },
        mod_env_sustain: {
            description: "Mod Env Sustain",
            type: "cc",
            cc: [],
            range: [0, 127],
            sysex: {
                offset: 59,
                mask: [0x0F,0x70]
            }
        },
        mod_env_release: {
            description: "Mod Env Release",
            type: "cc",
            cc: [],
            range: [0, 127],
            sysex: {
                offset: 60,
                mask: [0x07,0x78]
            }
        },
        mod_env_triggering: {
            description: "Mod Env Triggering",
            type: "cc",
            cc: [],
            range: [],
            sysex: {
                offset: 55,
                mask: [0x06]    
            }
        },
        fx_distortion: {
            description: "Fx Distortion",
            type: "cc",
            cc: [],
            range: [0, 127],
            sysex: {
                offset: 107,
                mask: [0x0F,0x70]
            }
        },
        fx_osc_filter_mod: {
            description: "Fx Osc Filter Mod",
            type: "cc",
            cc: [],
            range: [],
            sysex: {
                offset: 106,
                mask: [0x1F,0x60]
            }
        },
        arp_on: {
            description: "Arp On",
            type: "cc",
            cc: [],
            range: [0, 1],
            sysex: {
                offset: 77,
                mask: [0x08]
            }
        },
        arp_latch: {
            description: "Arp Latch",
            type: "cc",
            cc: [],
            range: [0, 1],
            sysex: {
                offset: 77,
                mask: [0x10]
            }
        },
        arp_rhythm: {
            description: "Arp Rhythm",
            type: "cc",
            cc: [],
            range: [1, 32],
            sysex: {
                offset: 80,
                mask: [0x1F]
            }
        },
        arp_note_mode: {
            description: "Arp Note Mode",
            type: "cc",
            cc: [],
            range: [],
            sysex: {
                offset: -1,
                mask: []
            }
        },
        arp_octaves: {
            description: "Arp Octaves",
            type: "cc",
            cc: [],
            range: [],
            sysex: {
                offset: -1,
                mask: []
            }
        },
        pitch: {
            description: "Pitch",
            type: "cc",
            cc: [],
            range: []   /*,
            sysex: {
                offset: -1,
                mask: []
            } */
        },
        mod: {
            description: "Mod",
            type: "cc",
            cc: [],
            range: []   /*,
            sysex: {
                offset: -1,
                mask: []
            } */
        },
        sustain: {
            description: "Sustain",
            type: "cc",
            cc: [],
            range: [],
            sysex: {
                offset: -1,
                mask: []
            }
        },
        after_touch: {
            description: "After Touch",
            type: "cc",
            cc: [],
            range: [],
            sysex: {
                offset: -1,
                mask: []
            }
        },
        mod_wheel_lfo2_filter_freq: {
            description: "Mod Wheel LFO2 Filter Freq",
            type: "cc",
            cc: [],
            range: [],
            sysex: {
                offset: -1,
                mask: []
            }
        },
        mod_wheel_lfo1_osc_pitch: {
            description: "Mod Wheel LFO1 Osc Pitch",
            type: "cc",
            cc: [],
            range: [],
            sysex: {
                offset: -1,
                mask: []
            }
        },
        mod_wheel_osc2_pitch: {
            description: "Mod Wheel Osc2 Pitch",
            type: "cc",
            cc: [],
            range: [],
            sysex: {
                offset: -1,
                mask: []
            }
        },
        aftertouch_filter_freq: {
            description: "Aftertouch Filter Freq",
            type: "cc",
            cc: [],
            range: [],
            sysex: {
                offset: -1,
                mask: []
            }
        },
        aftertouch_lfo1_to_osc_pitch: {
            description: "Aftertouch LFO1 To Osc Pitch",
            type: "cc",
            cc: [],
            range: [],
            sysex: {
                offset: -1,
                mask: []
            }
        },
        aftertouch_lfo2_speed: {
            description: "Aftertouch LFO2 Speed",
            type: "cc",
            cc: [],
            range: [],
            sysex: {
                offset: -1,
                mask: []
            }
        },
        lfo_key_sync_lfo1: {
            description: "LFO Key Sync LFO1",
            type: "cc",
            cc: [],
            range: [],
            sysex: {
                offset: -1,
                mask: []
            }
        },
        lfo_key_sync_lfo2: {
            description: "LFO Key Sync LFO2",
            type: "cc",
            cc: [],
            range: [],
            sysex: {
                offset: -1,
                mask: []
            }
        },
        lfo_speed_sync_lfo1: {
            description: "LFO Speed Sync LFO1",
            type: "cc",
            cc: [],
            range: [],
            sysex: {
                offset: -1,
                mask: []
            }
        },
        lfo_speed_sync_lfo2: {
            description: "LFO Speed Sync LFO2",
            type: "cc",
            cc: [],
            range: [],
            sysex: {
                offset: -1,
                mask: []
            }
        },
        lfo_slew_lfo_1: {
            description: "LFO Slew LFO 1",
            type: "cc",
            cc: [],
            range: [],
            sysex: {
                offset: -1,
                mask: []
            }
        },
        lfo_slew_lfo_2: {
            description: "LFO Slew LFO 2",
            type: "cc",
            cc: [],
            range: [],
            sysex: {
                offset: -1,
                mask: []
            }
        },
        osc_bend_amount: {
            description: "Osc Bend Amount",
            type: "cc",
            cc: [],
            range: [],
            sysex: {
                offset: -1,
                mask: []
            }
        },
        osc_1_2_sync: {
            description: "Osc 1 2 Sync",
            type: "cc",
            cc: [],
            range: [],
            sysex: {
                offset: -1,
                mask: []
            }
        },
        velocity_amp_env: {
            description: "Velocity Amp Env",
            type: "cc",
            cc: [],
            range: [],
            sysex: {
                offset: -1,
                mask: []
            }
        },
        velocity_mod_env: {
            description: "Velocity Mod Env",
            type: "cc",
            cc: [],
            range: [],
            sysex: {
                offset: -1,
                mask: []
            }
        },
        vca_limit: {
            description: "Vca Limit",
            type: "cc",
            cc: [],
            range: [],
            sysex: {
                offset: -1,
                mask: []
            }
        },
        arp_swing: {
            description: "Arp Swing",
            type: "cc",
            cc: [],
            range: [],
            sysex: {
                offset: -1,
                mask: []
            }
        },
        arp_seq_retrig: {
            description: "Arp Seq Retrig",
            type: "cc",
            cc: [],
            range: [],
            sysex: {
                offset: -1,
                mask: []
            }
        },
        octave_key_transpose: {
            description: "Octave Key Transpose",
            type: "cc",
            cc: [],
            range: [],
            sysex: {
                offset: -1,
                mask: []
            }
        },
        octave: {
            description: "Octave",
            type: "cc",
            cc: [],
            range: [],
            sysex: {
                offset: -1,
                mask: []
            }
        },
        other_mod: {
            description: "Other Mod",
            type: "cc",
            cc: [],
            range: [],
            sysex: {
                offset: -1,
                mask: []
            }
        },
        global_midi_chan: {
            description: "Global Midi Chan",
            type: "cc",
            cc: [],
            range: [],
            sysex: {
                offset: -1,
                mask: []
            }
        },
        global_local: {
            description: "Global Local",
            type: "cc",
            cc: [],
            range: [],
            sysex: {
                offset: -1,
                mask: []
            }
        },
        global_tune: {
            description: "Global Tune",
            type: "cc",
            cc: [],
            range: [],
            sysex: {
                offset: -1,
                mask: []
            }
        },
        global_input_gain: {
            description: "Global Input Gain",
            type: "cc",
            cc: [],
            range: [],
            sysex: {
                offset: -1,
                mask: []
            }
        }
    }
}

console.log(BS2);