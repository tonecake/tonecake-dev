// JavaScript Document
// Music Theory Library for Tonecake™

var Tonecake = function ( option )
{
    if( !option )
    {
        option = new Object();
        option.key = 'C';
        option.tonality = 'major';
    }

    this.created = true;
    this.key = option.key;
    this.tonality = option.tonality;
    this.rule = rule; // NOTE: 외부 파일에 의존적, 모듈화 해야함...
    this.scale = this.getScale();

    // make harmony
    this.harmony = this.getHarmony();
}

// return 7 Objects in Array
Tonecake.prototype.getHarmony = function ()
{
    var result = new Array();

    var set = this.rule.harmony;

    if ( this.tonality === 'major' )
    {
        set = set.major;
    } else {
        set = set.minor;
    }

    for( var i=0; i<set.length; i++ )
    {
        var seventh;

        if ( set[i].seventh === 'major' )
        {
            seventh = 'major';
        } else {
            seventh = undefined;
        }

        var resultPart = {
            "name" : set[i].name,
            "tonality" : this.getKeynameByInterval( this.key, set[i].interval ) + ' ' + set[i].tonality,
            "chord" : this.getChord( this.getKeynameByInterval( this.key, set[i].interval ), set[i].tonality, seventh ),
            "dominant" : this.getDominant( this.getKeynameByInterval( this.key, set[i].interval ) ),
            "dominant9" : this.getDiminish( this.getKeynameByInterval( this.key, set[i].interval ) )
        };
        result.push(resultPart);
    }
    return result;
}

// return Object
// 이거 꼭 해결보도록 합시다...
Tonecake.prototype.getScale = function ( tonality )
{
    if( !tonality )
    {
        var tonality = this.key + ' ' + this.tonality
    }

    var flatScales = ['F major', 'D minor', 'Bb major', 'G minor',
                      'Eb major', 'C minor', 'Ab major', 'F minor',
                      'Db major', 'Bb minor', 'Gb major', 'Eb minor', 'flat'];

    for( var i=0; flatScales.length>i; i++ )
    {
        if( flatScales[i] === tonality )
        {
            return this.rule.scale.chromaticFlat
            break;
        }
    }
    return this.rule.scale.chromaticSharp
}

Tonecake.prototype.getScaleNew = function ( tonality )
{
    var scale = this.rule.scale,
        tonalityPosition,
        key, quality, cIndex,
        result = new Object();

    result.default = ['C','D','E','F','G','A','B'];

    if( !tonality ){
        key = this.key,
        quality = this.tonality;
    } else {
        key = tonality.substr(0, tonality.length - 6),
        quality = tonality.substr(tonality.length - 5);
    }

    if( quality === 'major' ){
        cIndex = 6;
    } else {
        cIndex = 9;
    }

    for( var i=0; i<scale.fifthLong.length; i++ )
    {
        if( key === scale.fifthLong[i] )
        {
            var order;

            if( i < cIndex ){ // # scale
                order = scale.fifthLong.splice( 7, scale.fifthLong.length );
                result.chromatic = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];
            } else if( i > cIndex){ // b scale
                order = scale.fifthLong.splice( 0, 6).reverse();
                result.chromatic = ['C','Db','D','Eb','E','F','Gb','G','Ab','A','Bb','B'];
            } else {
                return;
            }

            for( var j=0; j<order.length; j++ )
            {
                if( key === order[j] )
                {
                    for( var k=0; k<=j; k++ )
                    {
                    }
                }
            }
        }
        break;
    }

}

// return Object
Tonecake.prototype.getChord = function ( key, quality, seventh )
{
    var prefix = this.rule.chordPrefix,
        defaultChordPosition = [0, 4, 7, 11], // major
        seventhAdjust = 0;

    if( seventh === 'major' )
    {
        seventhAdjust = 1;
    }

    return {
        "root" : key,
        "third" : this.accidentalize( this.getKeynameByInterval( key, defaultChordPosition[1] ), prefix[ quality ][1] ),
        "fifth" : this.accidentalize( this.getKeynameByInterval( key, defaultChordPosition[2] ), prefix[ quality ][2] ),
        "seventh" : this.accidentalize( this.getKeynameByInterval( key, defaultChordPosition[3] ), prefix[ quality ][3] + seventhAdjust )
    };
}

// return Object
Tonecake.prototype.getDominant = function ( parentKey )
{
    return this.getChord( this.getKeynameByInterval( parentKey, 'P5' ), 'major')
}

// return Object
Tonecake.prototype.getDiminish = function ( parentKey )
{
    return this.getChord( this.getKeynameByInterval( parentKey, 11 ), 'diminished')
}

//

// return string
Tonecake.prototype.accidentalize = function ( keyname, adjust )
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

//

// return string
Tonecake.prototype.getKeynameByInterval = function ( index, interval, direction )
{
    if( !index )
    {
        return false;
    }
    if( typeof interval != 'number' )
    {
        for( var i=0; i<this.rule.intervals.length; i++ )
        {
            for( var j=0; j<this.rule.intervals[i].name.length; j++ )
            {
                if( this.rule.intervals[i].name[j] === interval ){
                    interval = this.rule.intervals[i].index; // or i
                }
            }
        }
    }
    if( !direction )
    {
        direction = 'up';
    }
    return this.getKeynameByIndex( this.adjustKeyindex( this.getKeyindexByName( index ) + interval ) );
}

// return number(int)
Tonecake.prototype.getKeyindexByName = function ( keyname )
{
    var key = this.rule.notes

    for ( var i=0; i<key.length; i++ )
    {
        for( var j=0; j<key[i].name.length; j++ )
        {
            if ( key[i].name[j] === keyname )
            {
                return key[i].index; // or return i;
                break;
            }
        }
    }
    return false;
}

// return string
Tonecake.prototype.getKeynameByIndex = function ( keyindex, inheritScale )
{
    if( inheritScale === false )
    {
        return this.getScale('flat')[keyindex];
    } else {
        return this.getScale(this.key + ' ' + this.tonality)[keyindex];
    }
}

// return number(int)
Tonecake.prototype.adjustKeyindex = function( num )
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
