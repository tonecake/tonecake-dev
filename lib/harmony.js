// JavaScript Document

var Harmony = function( tonality )
{
    this.tonality = tonality;
    this.key = tonality.substr(0, tonality.length - 6);
    this.quality = tonality.substr(tonality.length - 5);

    this.rule = Rules;

}

// return Array
Harmony.prototype.getScale = function( tonality )
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

    normalScale = scaleSecond.concat( scaleFirst ); //

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

// return Array
Harmony.prototype.getChord = function( tonality )
{
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
