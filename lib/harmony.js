// JavaScript Document

var Harmony = function( tonality )
{
    this.tonality = tonality;
    this.key = tonality.substr(0, tonality.length - 6);
    this.quality = tonality.substr(tonality.length - 5);

    this.rule = Rules;

    this.scale = this.getScale();

}

// return Array
Harmony.prototype.getScale = function( tonality, type )
{
    if( !tonality )
    {
        tonality = this.tonality;
    }

    var key = tonality.substr(0, tonality.length - 6),
        quality = tonality.substr(tonality.length - 5);

    var normalScale = ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
        fifth = ['F', 'C', 'G', 'D', 'A', 'E', 'B'],
        prime = tonality.substr( 0, tonality.length - 6 ),
        primePosition = normalScale.indexOf( prime ),

        scaleFirst = normalScale.slice( 0, primePosition ),
        scaleSecond = normalScale.slice( primePosition, normalScale.length );

    normalScale = scaleSecond.concat( scaleFirst );

    var accidental = '#',
        numberOfAccidental,
        flatScales = ['F major', 'D minor', 'Bb major', 'G minor',
                      'Eb major', 'C minor', 'Ab major', 'F minor',
                      'Db major', 'Bb minor', 'Gb major', 'Eb minor'];

    for( var i=0; i<flatScales.length; i++ )
    {
        if( tonality === flatScales[i] )
        {
            fifth.reverse();
            accidental = 'b';
        }
    }

    for( var i=0; i<normalScale.length; i++ )
    {
        var foo = i,
            bar = i + 1

        if( bar === 7 )
        {
            bar = 0;
        }

        if( this.getInterval( normalScale[ foo ], normalScale[ bar ] ) != this.rule.scales[quality][i]  )
        {
            if( accidental === '#' )
            {
                normalScale[bar] = this.accidentalize( normalScale[bar], 1 );
            }
            else
            {
                normalScale[bar] = this.accidentalize( normalScale[bar], -1 );
            }
        }
    }

    return normalScale;
}

Harmony.prototype.getScale.chromatic = function( prime )
{
    var chromaticScale = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];

    var accidental = '#',
        numberOfAccidental,
        flatScales = ['Fb', 'Cb', 'Gb', 'Db', 'Ab', 'Eb', 'Bb'];

    for( var i=0; i<flatScales.length; i++ )
    {
        if( prime === flatScales[i] )
        {
            accidental = 'b';
            chromaticScale = ['C','Db','D','Eb','E','F','Gb','G','Ab','A','Bb','B']
        }
    }

    var primePosition = chromaticScale.indexOf( prime ),
        scaleFirst = chromaticScale.slice( 0, primePosition ),
        scaleSecond = chromaticScale.slice( primePosition, chromaticScale.length );

    return scaleSecond.concat( scaleFirst );
}

// return Array or Object
Harmony.prototype.getChord = function( key, quality, seventh, scale )
{
    var tonality = key + ' ' + quality,
        prefix = this.rule.chordPrefix,
        defaultPosition = [0, 2, 4, 6],
        seventhAdjust = 0;

    console.log(key, quality);

    if( seventh === 'major' )
    {
        seventhAdjust = 1;
    }

    if( !scale )
    {
        if( quality === 'augment' )
        {
            scale = this.getScale( key + ' major' );
        }
        else if( quality === 'diminished' )
        {
            // 기술적인 한계로 dimished chord는 chromatic스케일로 바꾸어서 계산한다.
            // 이에따라 defaultPosition도 chromatic스케일을 기준으로 바꾸어준다.
            scale = this.getScale.chromatic( key );
            defaultPosition = [0, 4, 7, 11];
        }
        else
        {
            scale = this.getScale( tonality );
        }
    }

    var result = {
        "root" : key,
        "third" : this.accidentalize( scale[ defaultPosition[1] ], prefix[ quality ][1]  ),
        "fifth" : this.accidentalize( scale[ defaultPosition[2] ], prefix[ quality ][2]  ),
        "seventh" : this.accidentalize( scale[ defaultPosition[3] ], prefix[ quality ][3] + seventhAdjust  )
    }

    return result;
}

// return Int(Number)
Harmony.prototype.getInterval = function( foo, bar )
{
    var indexFoo, indexBar;

    for( var i=0; i<this.rule.notes.length; i++ )
    {
        for( var j=0; j<this.rule.notes[i].name.length; j++ )
        {
            if( rule.notes[i].name[j] === foo )
            {
                indexFoo = rule.notes[i].index; // or i
            }
        }
        for( var j=0; j<this.rule.notes[i].name.length; j++ )
        {
            if( rule.notes[i].name[j] === bar )
            {
                indexBar = rule.notes[i].index; // or i
            }
        }
    }

    return this.adjustKeyindex( indexBar - indexFoo );
}

// return String
Harmony.prototype.accidentalize = function ( keyname, adjust )
{
    var key = keyname.substr(0,1),
        accidental = keyname.substr(1);

    for( var i=0; i<this.rule.accidentals.length; i++ )
    {
        if( accidental === this.rule.accidentals[i].symbol )
        {
            presentValue = this.rule.accidentals[i].adjust;
            for( var j=0; j<this.rule.accidentals.length; j++ )
            {
                if( presentValue + adjust === this.rule.accidentals[j].adjust )
                {
                    accidental = this.rule.accidentals[j].symbol;
                }
            }
            return key + accidental;
        }
    }
}

// return number(int)
Harmony.prototype.adjustKeyindex = function( num )
{
    if( num > 23 )
    {
        return num - 24;
    }
    else if( num < 24 && num > 11 )
    {
        return num - 12;
    }
    else if( num < 0 )
    {
        return num + 12;
    }
    else
    {
        return num;
    }
}
