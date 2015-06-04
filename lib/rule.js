var rule = {
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
            "index" : 3
        },
        {
            "name": ["F", "E#", "Gbb"],
            "freq": 350.82,
            "index" : 4
        },
        {
            "name": ["F#", "Gb", "Ex"],
            "freq": 371.68,
            "index" : 5
        },
        {
            "name": ["G", "Fx", "Abb"],
            "freq": 393.78,
            "index" : 6
        },
        {
            "name": ["G#" ,"Ab"],
            "freq": 417.19,
            "index" : 7
        },
        {
            "name": ["A", "Gx", "Bbb"],
            "freq": 442,
            "index" : 8
        },
        {
            "name": ["A#", "Bb", "Cbb"],
            "freq": 468.28,
            "index" : 9
        },
        {
            "name": ["B", "Cb", "Ax"],
            "freq": 496.13,
            "index" : 10
        }
    ],
    "chordPrefix": {
        "major" : [0, 4, 7, 10, 11],
        "minor" : [0, 3, 7, 10, 11],
        "augment" : [0, 4, 8, 10, 10],
        "diminished" : [0, 3, 6, 9, 9]
    },
    "harmony": {
        "major": [
            {
                "name": "t",
                "tonality": "major",
                "seventh": "major",
                "interval": 0
            },
            {
                "name": "sp",
                "tonality": "minor",
                "interval": 2
            },
            {
                "name": "dp",
                "tonality": "minor",
                "interval": 4
            },
            {
                "name": "s",
                "tonality": "major",
                "seventh": "major",
                "interval": 5
            },
            {
                "name": "d",
                "tonality": "major",
                "interval": 7
            },
            {
                "name": "tp",
                "tonality": "minor",
                "interval": 9
            },
            {
                "name": "d-",
                "tonality": "diminished",
                "interval": 11
            }
        ],
        "minor": [
            {
                "name": "t",
                "tonality": "minor",
                "interval": 0
            },
            {
                "name": "d-",
                "tonality": "diminished",
                "interval": 2
            },
            {
                "name": "tp",
                "tonality": "major",
                "seventh": "major",
                "interval": 3
            },
            {
                "name": "s",
                "tonality": "minor",
                "interval": 5
            },
            {
                "name": "d",
                "tonality": "major",
                "interval": 7
            },
            {
                "name": "sp",
                "tonality": "major",
                "seventh": "major",
                "interval": 8
            },
            {
                "name": "dp",
                "tonality": "major",
                "interval": 10
            }
        ]
    }
}
