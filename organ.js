// JavaScript Document
// Audio Context Library for Tonecake™

var Organ = function( option )
{
    if( !option || !option.type )
    {
        option = new Object();
        option.channel = 4;
    }

    this.info = new Object();
    this.structure = new Object();
    this.defaultFrequency = 0;
    this.defaultVolumne = 0.05;
    this.channel = option.channel
    this.frequency = rule.frequency; // 외부라이브러리에 종속적임.. 패치요망..

    // create and start Audio Context
    this.created = this.create();
    this.started = this.start();
}

// return boolean
Organ.prototype.create = function()
{
    var organContext = this.context();
    this.info.startTime = organContext.currentTime;

    this.structure.osc = new Array();
    this.structure.gainNode = new Array();

    for( var i=0; i<this.channel; i++ )
    {
        this.structure.gainNode[i] = organContext.createGain();
        this.structure.osc[i] = organContext.createOscillator();
        this.structure.osc[i].connect(this.structure.gainNode[i]);
        this.structure.gainNode[i].connect(organContext.destination);
    }

    return true;
}

// return boolean
Organ.prototype.start = function()
{
    if( this.structure.osc.length === 0 )
    {
        return false;
    }
    for( var i=0; i<this.structure.osc.length; i++ )
    {
        this.structure.osc[i].frequency.value = this.defaultFrequency;
        this.structure.osc[i].start(this.info.startTime);
    }

    return true;
}

// return Object or false
Organ.prototype.context = function()
{
    var context = (window.AudioContext
                || window.webkitAudioContext
                || window.mozAudioContext
                || window.msAudioContext
                || window.oAudioContext);
    if( context )
    {
        return new context();
    }
    else
    {
        return false;
    }
}

// return undefined, value(int), node(int)
Organ.prototype.setVolume = function( value, node )
{
    if( node != undefined )
    {
        this.structure.gainNode[node].gain.value = value;
    }
    else
    {
        for( var i=0; i<this.structure.gainNode.length; i++ )
        {
            this.structure.gainNode[i].gain.value = value;
        }
    }
}

Organ.prototype.mute = function(){
    for( var i=0; i<this.structure.gainNode.length; i++ )
    {
        this.structure.gainNode[i].gain.value = 0;
    }
}

// return undefined, value(int or array), node(int)
Organ.prototype.setFrequency = Organ.prototype.setFreq = function( value, node )
{
    if( typeof value === 'string' && node != undefined )
    {
        this.structure.osc[node].frequency.value = value;
    }
    else if( typeof value === 'object' )
    {
        for( var i=0; i<this.structure.osc.length; i++ )
        {
            if( typeof value[i] === 'number' )
            {
                this.structure.osc[i].frequency.value = value[i];
            }
            else
            {
                var key = value[i].substr(0, value[i].length-1);
                var octave = value[i].substr(value[i].length-1);

                this.structure.osc[i].frequency.value = this.getFreq(key, octave);
            }
        }
    }
}

// return a ferquency(int)
Organ.prototype.getFrequency = Organ.prototype.getFreq = function( key, octave )
{
    if( !key || !octave )
    {
        return 0; // 조금 엄격한 룰을 적용하면 false로 해야하나, 유연한 환경을 위한다면 0으로 설정한다.
    }
    if( octave > 8 )
    {
        octave = 8;
    }
    if( typeof octave === 'string' ){
        octave = parseInt(octave);
    }

    var freq;

    for( var i=0; i<this.frequency.length; i++ )
    {
        if( this.frequency[i].name === key )
        {
            freq = this.frequency[i].freq;
        }
    }

    switch( octave ){
        case 0 :
            return freq / 16;
            break;
        case 1 :
            return freq / 8;
            break;
        case 2 :
            return freq / 4;
            break;
        case 3 :
            return freq / 2;
            break;
        case 4 :
            return freq;
            break;
        case 5 :
            return freq * 2
            break;
        case 6 :
            return freq * 4
            break;
        case 7 :
            return freq * 8
            break;
        case 8 :
            return freq * 16
    }
}
