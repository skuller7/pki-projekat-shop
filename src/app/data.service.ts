import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  public getmovieName(): string[] {
    return [
      'Batman', 'John Wick', 'League of Justice', 'Matrix 2', 'Insidious', 'Interstellar'
    ]
  }

  public getmovieType(): string[] {
    return [
      'Comedy', 'Drama', 'Action', 'Sci-fi'
    ]
  }

  public getmovieDuration(): any[] {
    return [
      100, 120, 140, 160, 180, 200
    ]
  }

  public getmovieDirector(): string[] {
    return [
      'Martin Scorsese', 'Sam Esmail', 'Christopher Nolan', 'Joel Coen', 'Clint Eastwood', 'Peter Jackson'
    ]
  }

  public getmovieActors(): string[] {
    return [
      'Rami Malek', 'Bryan Cranston', 'Dean Norris', 'Christian Slater', 'Steve Carrel', 'Rainn Wilson', 'Joaquin Phoenix', 'Eddie Murphy'
    ]
  }

  public getmoviePrice(): any[] {
    return [
      500, 600, 700, 800, 1000, 1200
    ]
  }

  public getmovieRating(): any[] {
    return [
      1.0, 2.0, 3.0, 4.0, 5.0
    ]
  }

}

