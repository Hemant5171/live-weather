import {Main} from './main';
import {Weather} from './weather';
import {Clouds} from './clouds';
import {Wind} from './wind';

export interface ListObj
{
    dt:number;
    main:Main;
    weather: Weather[],
    clouds:Clouds;
    wind:Wind;
    dt_txt:String;
}