// JavaScript Document

var Tonecake = function ( option )
{
    if( !option )
    {
        return false;
    }

    this.info = new Object();
    this.key = option.key;
    this.tonality = option.tonality;
    this.scale = this.getScale();

}

// return 7 Objects in Array
Tonecake.prototype.harmony = function ()
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

    var flatScales = ['f major', 'd minor', 'b- major', 'g minor', 'e- major', 'c minor', 'a- major', 'f minor', 'd- major', 'b- minor', 'g- major', 'e- minor'];

    for( var i=0; flatScales.length>i; i++ )
    {
        if( flatScales[i] === tonality )
        {
            return ['c','d-','d','e-','e','f','g-','g','a-','a','b-','b'];
            break;
        }
    }
    return ['c','c+','d','d+','e','f','f+','g','g+','a','a+','b'];
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
    var key = [{"name":"c","index":0},{"name":"c+","index":1},{"number":"d-","index":1},{"name":"d","index":2},{"name":"d+","index":3},{"amer":"e-","index":3},{"name":"e","index":4},{"name":"f","index":5},{"name":"f+","index":6},{"name":"g-","index":6},{"name":"g","index":7},{"name":"g+","index":8},{"name":"a-","index":8},{"name":"a","index":9},{"name":"b-","index":10},{"name":"a+","index":10},{"name":"b","index":11},{"name":"c-","index":11}];

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
