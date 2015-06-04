var rule = {
    "chordPrefix": {
        "major": [
            0,
            4,
            7,
            10,
            11
        ],
        "minor": [
            0,
            3,
            7,
            10,
            11
        ],
        "diminished": [
            0,
            3,
            6,
            9,
            9
        ],
        "augment": [
            0,
            4,
            8,
            10,
            10
        ]
    },
    "notes" : [
        {
            "name": ["C"],
            "freq": 262.81,
            "index" : 0
        },
        {
            "name": ["C#", "Db"],
            "freq": 278.44,
            "index" : 1
        },
        {
            "name": ["D"],
            "freq": 295,
            "index" : 2
        },
        {
            "name": ["D#", "Eb"],
            "freq": 312.54,
            "index" : 3
        },
        {
            "name": ["E"],
            "freq": 331.13,
            "index" : 3
        },
        {
            "name": ["F"],
            "freq": 350.82,
            "index" : 4
        },
        {
            "name": ["F#", "Gb"],
            "freq": 371.68,
            "index" : 5
        },
        {
            "name": ["G"],
            "freq": 393.78,
            "index" : 6
        },
        {
            "name": ["G#" ,"Ab"],
            "freq": 417.19,
            "index" : 7
        },
        {
            "name": ["A"],
            "freq": 442,
            "index" : 8
        },
        {
            "name": ["A#", "Bb"],
            "freq": 468.28,
            "index" : 9
        },
        {
            "name": ["B", "Cb"],
            "freq": 496.13,
            "index" : 10
        }
    ],
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
