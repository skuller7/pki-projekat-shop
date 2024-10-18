import {Component, } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import { JsonPipe } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import { MatCardActions } from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';





@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatListModule, MatFormFieldModule, JsonPipe, MatInputModule, MatCardActions, MatSelectModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  typesOfAnimation = typesOfAnimations // Select from ENUM type of animations

  public movieName: string [] = ['Batman', 'John Wick', 'League of Justice']

  public movieType: string [] = ['Comedy', 'Drama', 'Action', 'Sci-fi']

  public movieDuration: any [] = [100, 120, 140, 160, 180, 200]

  public movieDirector: string [] = ['Martin Scorsese', 'Sam Esmail', 'Christopher Nolan', 'Joel Coen', 'Clint Eastwood', 'Peter Jackson']

  public movieActors: string [] = ['Rami Malek', 'Bryan Cranston', 'Dean Norris', 'Christian Slater', 'Steve Carrel', 'Rainn Wilson', 'Joaquin Phoenix', 'Eddie Murphy']

  public moviePrice: any [] = [500, 600, 700, 800, 1000, 1200]

  public movieRating: any [] = [1.0, 2.0, 3.0, 4.0, 5.0]


  // public size: string [] = ['Small', 'Medium', 'Large']
  
  // public location: string [] = ['Kungsgatan 1, 111 43', 'Långholmsgatan 34, 117 33']

  // public delivery: string [] = ['Deliver Online', 'Pick up the food']

}

enum typesOfAnimations {

  option1 = "2D",
  option2 = "IMAX 2D",
  option3 = "MX4D 2D",
  option4 = "3D",
  option5 = "Countertop Pizza Oven"

};

//console.log(typesOfPizzaOvens.option1);


// public auto = [
//   {
//     id: 1,
//     model: 'Fiat Panda',
//     vendor : this.vendors[0],
//   },
//   {
//     id: 2,
//     model: 'BMW Colos 3',
//     vendor : this.vendors[1],
//   },    
// ]
// }



// public movieName: string [] = ['Margharita', 'Pepperoni', 'Funghi']
//   public pizza = [
//     {
//       id: 1,
//       model: 'Pizza Margharita',
//       vendor : this.movieName[0],
//     },
//     {
//       id: 2,
//       model: 'Pizza Pepperoni',
//       vendor : this.movieName[1],
//     },
//     {
//       id: 3,
//       model: 'Pizza Funghi',
//       vendor : this.movieName[2],
//     },      
//   ]
