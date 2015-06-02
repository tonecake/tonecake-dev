// JavaScript Document

var Tonecake = function ( option )
{
    if( !option )
    {
        return false;
    }

    this.created = true;
    this.key = option.key;
    this.tonality = option.tonality;
    this.rule = rule; // NOTE: 모듈방식으로 변경해야함
    this.scale = this.getScale();
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
            "tonality" : this.getKeynameByIndex( this.adjustKeyindex( this.getKeyindexByName( this.key ) + set[i].interval ) ) + ' ' + set[i].tonality,
            "chord" : this.getChord( this.getKeynameByIndex( this.adjustKeyindex( this.getKeyindexByName( this.key ) + set[i].interval ) ), set[i].tonality, seventh ),
            "dominant" : this.getDominant( this.getKeynameByIndex( this.adjustKeyindex( this.getKeyindexByName( this.key ) ) ) ),
            "diminishedDominant" : this.getDiminish( this.getKeynameByIndex( this.adjustKeyindex( this.getKeyindexByName( this.key ) ) ) )
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

    var flatScales = ['F major', 'D minor', 'Bb major', 'G minor', 'Eb major', 'C minor', 'Ab major', 'F minor', 'Db major', 'Bb minor', 'Gb major', 'Eb minor'];

    for( var i=0; flatScales.length>i; i++ )
    {
        if( flatScales[i] === tonality )
        {
            return ['C','Db','D','Eb','E','F','Gb','G','Ab','A','Bb','B'];
            break;
        }
    }
    return ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];
}

// return Object
Tonecake.prototype.getChord = function ( key, type, seventh )
{
    var chord,
        seventhChord,
        prefix = this.rule.codePrefix;

    if( seventh === 'major' )
    {
        seventhChord = this.getKeynameByIndex( this.adjustKeyindex( this.getKeyindexByName( key ) + prefix[type][4] ) );
    } else {
        seventhChord = this.getKeynameByIndex( this.adjustKeyindex( this.getKeyindexByName( key ) + prefix[type][3] ) );
    }
    return {
        "root" : key,
        "third" : this.getKeynameByIndex( this.adjustKeyindex( this.getKeyindexByName( key ) + prefix[type][1] ) ),
        "fifth" : this.getKeynameByIndex( this.adjustKeyindex( this.getKeyindexByName( key ) + prefix[type][2] ) ),
        "seventh" : seventhChord
    };
}

// return Object
Tonecake.prototype.getDominant = function ( parentKey )
{
    return this.getChord( this.getKeynameByIndex( this.adjustKeyindex( this.getKeyindexByName( parentKey ) + 7 ) ), 'major')
}

// return Object
Tonecake.prototype.getDiminish = function ( parentKey )
{
    return this.getChord( this.getKeynameByIndex( this.adjustKeyindex( this.getKeyindexByName( parentKey ) + 11 ) ), 'diminished')
}

//
// return number(int)
Tonecake.prototype.getKeyindexByName = function ( keyname )
{
    var key = this.rule.keyIndex;

    for ( var i=0; key.length>i; i++ )
    {
        if ( key[i].name === keyname )
        {
            return key[i].index;
            break;
        }
    }
    return false;
}

// return string
Tonecake.prototype.getKeynameByIndex = function ( keyindex )
{
    return this.getScale(this.key + ' ' + this.tonality)[keyindex];
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
    else
    {
        return num;
    }
}
