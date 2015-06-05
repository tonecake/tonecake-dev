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

// return Object
Tonecake.prototype.getChord = function ( key, type, seventh )
{
    var chord,
        seventhChord,
        prefix = this.rule.chordPrefix;

    if( seventh === 'major' )
    {
        seventhChord = this.getKeynameByIndex( this.adjustKeyindex( this.getKeyindexByName( key ) + prefix[type][4] ), false ); // 정확한 음이름의 출력을 위해 getKeynameByInterval method를 쓰지 않는다.
    } else {
        seventhChord = this.getKeynameByIndex( this.adjustKeyindex( this.getKeyindexByName( key ) + prefix[type][3] ), false )
    }
    return {
        "root" : key,
        "third" : this.getKeynameByInterval( key, prefix[type][1] ),
        "fifth" : this.getKeynameByInterval( key, prefix[type][2] ),
        "seventh" : seventhChord
    };
}

Tonecake.prototype.getChordNew = function ( key, type, seventh )
{
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
