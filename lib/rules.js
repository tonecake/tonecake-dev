var Rules = {
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
    "scales" : {
        "major" : [2, 2, 1, 2, 2, 2, 1],
        "minor" : [2, 1, 2, 2, 1, 2, 2],
        "harmonicMinor" : [2, 1, 2, 2, 1, 2, 1], // 쓰지말것
        "melodicMinor" : [2, 1, 2, 2, 2, 2, 1], // 쓰지말것
        "dorian" : [2, 1, 2, 2, 2, 1, 2] // 아래로 각종 스케일 추가할것
    },
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
                "quality": "major",
                "seventh": "major",
                "interval": 0
            },
            {
                "roman" : "ii",
                "function": "Sp",
                "quality": "minor",
                "interval": 'M2'
            },
            {
                "roman" : "iii",
                "function": "Dp",
                "quality": "minor",
                "interval": 'M3'
            },
            {
                "roman" : "IV",
                "function": "S",
                "quality": "major",
                "seventh": "major",
                "interval": 'P4'
            },
            {
                "roman" : "V",
                "function": "D",
                "quality": "major",
                "interval": 'P5'
            },
            {
                "roman" : "vi",
                "function": "Tp",
                "quality": "minor",
                "interval": 'M6'
            },
            {
                "roman" : "viiº",
                "function": "d-",
                "quality": "diminished",
                "interval": 'M7'
            }
        ],
        "minor": [
            {
                "roman" : "i",
                "function": "t",
                "quality": "minor",
                "interval": 0
            },
            {
                "roman" : "iiº",
                "function": "d-",
                "quality": "diminished",
                "interval": 'M2'
            },
            {
                "roman" : "III",
                "function": "tP",
                "quality": "major",
                "seventh": "major",
                "interval": 'm3'
            },
            {
                "roman" : "iv",
                "function": "s",
                "quality": "minor",
                "interval": 'P4'
            },
            {
                "roman" : "V",
                "function": "D",
                "quality": "major",
                "interval": 'P5'
            },
            {
                "roman" : "vi",
                "function": "sP",
                "quality": "major",
                "seventh": "major",
                "interval": 'm6'
            },
            {
                "roman" : "vii",
                "function": "dP",
                "quality": "major",
                "interval": 'm7'
            }
        ]
    }
}
