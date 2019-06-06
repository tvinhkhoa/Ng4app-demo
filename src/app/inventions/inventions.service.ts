import { Injectable } from '@angular/core';
import { Invention } from './model/inventions.class';

@Injectable()
export class InventionsService {
 // declare rawInventions array of type Invention to instantiate our mock inventions    
  rawInventions : Invention[] = [
    {
      id: 1,
      name : 'Java',
      inventor : 'James Ghosling',
      year : '1995'
    } , 
    {
      id: 2,
      name : 'Python', 
      inventor : 'Guido van Rosum',
      year: '1991'
    } , 
    {
      id: 3,
      name : 'C++',
      inventor : 'Bjarne Stroustrup',
      year : '1983'
    }
  ];

  constructor() { }

  // define a getInventions() method to get the default inventions  
  getInventions() : Invention[] {
    return this.rawInventions; 
  }

  pushInvention(invention: Invention): boolean {
    let before: number = this.rawInventions.length;
    let after: number = this.rawInventions.push(invention);
    if (before != after) return true;
    return false;
  }

  inventionDetail(id: number): Invention {
    for ( var i = 0 ; i < this.rawInventions.length ; i++ ) {
      if ( this.rawInventions[i].id == id )  {
        return this.rawInventions[i]; 
      }
    }
    return null;
  }

  getId(): number {
    return this.rawInventions.length + 1;
  }

}
