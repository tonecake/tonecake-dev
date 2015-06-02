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
    this.scale = this.getScale();
    this.harmony = this.getHarmony();
}

// return 7 Objects in Array
Tonecake.prototype.getHarmony = function ()
{
    var result = new Array();

    var set = {"major":[{"name":"t","tonality":"major","seventh":"major","interval":0},{"name":"sp","tonality":"minor","interval":2},{"name":"dp","tonality":"minor","interval":4},{"name":"s","tonality":"major","seventh":"major","interval":5},{"name":"d","tonality":"major","interval":7},{"name":"tp","tonality":"minor","interval":9},{"name":"d-","tonality":"diminish","interval":11}],"minor":[{"name":"t","tonality":"minor","interval":0},{"name":"d-","tonality":"diminish","interval":2},{"name":"tp","tonality":"major","seventh":"major","interval":3},{"name":"s","tonality":"minor","interval":5},{"name":"d","tonality":"major","interval":7},{"name":"sp","tonality":"major","seventh":"major","interval":8},{"name":"dp","tonality":"major","interval":10}]}

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
        prefix = {
            "major": [0, 4, 7, 10, 11],
            "minor": [0, 3, 7, 10, 11],
            "diminish": [0, 3, 6, 9, 9],
            "augment": [0, 4, 8, 10, 10]
        };

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
    return this.getChord( this.getKeynameByIndex( this.adjustKeyindex( this.getKeyindexByName( parentKey ) + 11 ) ), 'diminish')
}

//
// return number(int)
Tonecake.prototype.getKeyindexByName = function ( keyname )
{
    var key = [{"name":"C","index":0},{"name":"C#","index":1},{"number":"Db","index":1},{"name":"D","index":2},{"name":"D#","index":3},{"amer":"Eb","index":3},{"name":"E","index":4},{"name":"F","index":5},{"name":"F#","index":6},{"name":"Gb","index":6},{"name":"G","index":7},{"name":"G#","index":8},{"name":"Ab","index":8},{"name":"A","index":9},{"name":"Bb","index":10},{"name":"A#","index":10},{"name":"B","index":11},{"name":"Cb","index":11}];

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
