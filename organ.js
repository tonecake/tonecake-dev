// JavaScript Document
// Audio Context Library for Tonecake™

var Organ = function( option )
{
    if( !option || !option.type )
    {
        option.channel = 4;
    }

    this.info = new Object();
    this.structure = new Object();
    this.defaultFrequency = 0;
    this.defaultVolumne = 0.05;
    this.channel = option.channel
}

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
}

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

Organ.prototype.setFrequency = function()
{
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
