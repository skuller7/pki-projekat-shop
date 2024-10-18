import {Component, } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import { JsonPipe } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import { MatCardActions } from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import { DataService } from '../data.service';





@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatListModule, MatFormFieldModule, JsonPipe, MatInputModule, MatCardActions, MatSelectModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  typesOfAnimation = typesOfAnimations // Select from ENUM type of animations

  private dataService: DataService
  public movieName: string [] = []
  public movieType: string [] = []
  public movieDuration: any [] = []
  public movieDirector: string [] = []
  public movieActors: string [] = []
  public moviePrice: any [] = []
  public movieRating: any [] = []


  constructor() {
    this.dataService = new DataService()
  }

  ngOnInit(): void{
    this.movieName = this.dataService.getmovieName()
    this.movieType = this.dataService.getmovieType()
    this.movieDuration = this.dataService.getmovieDuration()
    this.movieDirector = this.dataService.getmovieDirector()
    this.movieActors = this.dataService.getmovieActors()
    this.moviePrice = this.dataService.getmoviePrice()
    this.movieRating = this.dataService.getmovieRating()

  }
  
  
  
  
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
