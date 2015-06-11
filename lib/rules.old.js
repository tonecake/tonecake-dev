var rule = {
    "scale" : {
        fifth :['F', 'C', 'G', 'D', 'A', 'E', 'B'],
        fifthLong : ['Gb', 'Db', 'Ab', 'Eb', 'Bb', 'F', 'C', 'G', 'D', 'A', 'E', 'B', 'F#', 'C#', 'G#', 'D#'],
        chromaticFlat : ['C','Db','D','Eb','E','F','Gb','G','Ab','A','Bb','B'],
        chromaticSharp : ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B']
    },
    "accidentals" : [
        {
            "name" : "natural",
            "symbol" : "",
            "adjust" : 0
        },
        {
            "name" : "sharp",
            "symbol" : "#",
            "adjust" : 1
        },
        {
            "name" : "flat",
            "symbol" : "b",
            "adjust" : -1
        },
        {
            "name" : "doubleSharp",
            "symbol" : "x",
            "adjust" : 2
        },
        {
            "name" : "doubleFlat",
            "symbol" : "bb",
            "adjust" : -2
        }
    ],
    "notes" : [
        {
            "name": ["C", "B#","Dbb"],
            "freq": 262.81,
            "index" : 0
        },
        {
            "name": ["C#", "Db", "Bx"],
            "freq": 278.44,
            "index" : 1
        },
        {
            "name": ["D", "Cx", "Ebb"],
            "freq": 295,
            "index" : 2
        },
        {
            "name": ["D#", "Eb", "Fbb"],
            "freq": 312.54,
            "index" : 3
        },
        {
            "name": ["E", "Fb", "Dx"],
            "freq": 331.13,
            "index" : 4
        },
        {
            "name": ["F", "E#", "Gbb"],
            "freq": 350.82,
            "index" : 5
        },
        {
            "name": ["F#", "Gb", "Ex"],
            "freq": 371.68,
            "index" : 6
        },
        {
            "name": ["G", "Fx", "Abb"],
            "freq": 393.78,
            "index" : 7
        },
        {
            "name": ["G#" ,"Ab"],
            "freq": 417.19,
            "index" : 8
        },
        {
            "name": ["A", "Gx", "Bbb"],
            "freq": 442,
            "index" : 9
        },
        {
            "name": ["A#", "Bb", "Cbb"],
            "freq": 468.28,
            "index" : 10
        },
        {
            "name": ["B", "Cb", "Ax"],
            "freq": 496.13,
            "index" : 11
        }
    ],
    intervals : [
        {
            "name" : ["unison", "P1", "d2"],
            "index" : 0
        },
        {
            "name" : ["A1", "m2"],
            "index" : 1
        },
        {
            "name" : ["second", "M2", "d3"],
            "index" : 2
        },
        {
            "name" : ["A2", "m3", "dd4"],
            "index" : 3
        },
        {
            "name" : ["third", "M3", "d4"],
            "index" : 4
        },
        {
            "name" : ["fourth", "P4", "A3", "dd5"],
            "index" : 5
        },
        {
            "name" : ["A4", "d5"],
            "index" : 6
        },
        {
            "name" : ["fifth", "P5", "d6"],
            "index" : 7
        },
        {
            "name" : ["A5", "m6"],
            "index" : 8
        },
        {
            "name" : ["sixth", "M6", "d7"],
            "index" : 9
        },
        {
            "name" : ["A6", "m7", "dd8"],
            "index" : 10
        },
        {
            "name" : ["seventh", "M7", "d8"],
            "index" : 11
        },
        {
            "name" : ["octave", "P8"],
            "index" : 12
        },
    ],
    "chordPrefix" : {
        "major" : [0, 0, 0, -1],
        "minor" : [0, -1, 0, -1],
        "augment" : [0, 0, 1, -1],
        "diminished" : [0, -1, -1, -2]
    },
    "harmony": {
        "major": [
            {
                "roman" : "I",
                "function": "T",
                "tonality": "major",
                "seventh": "major",
                "interval": 0
            },
            {
                "roman" : "ii",
                "function": "Sp",
                "tonality": "minor",
                "interval": 2
            },
            {
                "roman" : "iii",
                "function": "Dp",
                "tonality": "minor",
                "interval": 4
            },
            {
                "roman" : "IV",
                "function": "S",
                "tonality": "major",
                "seventh": "major",
                "interval": 5
            },
            {
                "roman" : "V",
                "function": "D",
                "tonality": "major",
                "interval": 7
            },
            {
                "roman" : "vi",
                "function": "Tp",
                "tonality": "minor",
                "interval": 9
            },
            {
                "roman" : "viiº",
                "function": "d-",
                "tonality": "diminished",
                "interval": 11
            }
        ],
        "minor": [
            {
                "roman" : "i",
                "function": "t",
                "tonality": "minor",
                "interval": 0
            },
            {
                "roman" : "iiº",
                "function": "d-",
                "tonality": "diminished",
                "interval": 2
            },
            {
                "roman" : "III",
                "function": "tP",
                "tonality": "major",
                "seventh": "major",
                "interval": 3
            },
            {
                "roman" : "iv",
                "function": "s",
                "tonality": "minor",
                "interval": 5
            },
            {
                "roman" : "V",
                "function": "D",
                "tonality": "major",
                "interval": 7
            },
            {
                "roman" : "vi",
                "function": "sP",
                "tonality": "major",
                "seventh": "major",
                "interval": 8
            },
            {
                "roman" : "vii",
                "function": "dP",
                "tonality": "major",
                "interval": 10
            }
        ]
    },
    harmonyRelations : [
    ],
}