// Javascript Document
// Control Library for Tonecake™

var Spieler = function()
{
    this.tonecake = new Tonecake();
    this.orgel = new Orgel();

    this.isPlay = false;
    this.isSustain = false;
}

Spieler.prototype.play = function()
{

}

Spieler.prototype.modulation = function( key, tonality )
{
    if( typeof key === 'string' ){
        tonality = key.substr(key.length-5);
        key = key.substr(0, key.length-6);
    }
    this.tonecake = new Tonecake({key:key,tonality:tonality});
}

Spieler.prototype.progression = function()
{
}

Spieler.prototype.positioning = function()
{
}
