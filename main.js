// JavaScript Document

var Main = function( option )
{
    this.orgel = new Orgel();
    this.tonecake = new Tonecake({
        key : option.key,
        tonality : option.tonality
    });
    this.window = window;
}
