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
    var t, sp, dp, s, d, tp, d7;


}

// return Object
Tonecake.prototype.getScale = function ( tonality )
{
    if( !tonality )
    {
        var tonality = this.key + ' ' + this.tonality
    }

    var flatScales = ['f major', 'd minor', 'b- major', 'g minor', 'e- major', 'c minor', 'a- major', 'f minor', 'd- major', 'b- minor', 'g- major', 'e- minor', 'c- major', 'a- minor'];

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
        prefix = {
            "major": [0, 4, 7, 10, 11],
            "minor": [0, 3, 7, 10, 11],
            "diminish": [0, 3, 6, 9, 9],
            "augment": [0, 4, 8, 10, 10]
        };

    return {
        "root" : key,
        "third" : this.getKeynameByIndex( this.adjustKeyindex( this.getKeyindexByName( key ) + prefix[type][1] ) ),
        "fifth" : this.getKeynameByIndex( this.adjustKeyindex( this.getKeyindexByName( key ) + prefix[type][2] ) ),
        "seventh" : this.getKeynameByIndex( this.adjustKeyindex( this.getKeyindexByName( key ) + prefix[type][3] ) ),
        "major seventh" : this.getKeynameByIndex( this.adjustKeyindex( this.getKeyindexByName( key ) + prefix[type][4] ) )
    };
}

// return Object
Tonecake.prototype.getDominant = function ()
{
}

// return Object
Tonecake.prototype.getDiminish = function ()
{
}

// functions...

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
    if( num > 11 ){
        return num - 12;
    } else {
        return num;
    }
}
