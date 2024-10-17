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
  typesOfPizzaOvens = typesOfPizzaOvens
  public typesPizza: string [] = ['Margharita', 'Pepperoni', 'Funghi']
  public pizza = [
    {
      id: 1,
      model: 'Pizza Margharita',
      vendor : this.typesPizza[0],
    },
    {
      id: 2,
      model: 'Pizza Pepperoni',
      vendor : this.typesPizza[1],
    },
    {
      id: 3,
      model: 'Pizza Funghi',
      vendor : this.typesPizza[2],
    },      
  ]

  public size: string [] = ['Small', 'Medium', 'Large']
  
  public location: string [] = ['Kungsgatan 1, 111 43', 'Långholmsgatan 34, 117 33']

  public delivery: string [] = ['Deliver Online', 'Pick up the food']

}

enum typesOfPizzaOvens {

  option1 = 'Brick Pizza Oven',
  option2 = "Conveyor Pizza Oven",
  option3 = "Pizza Deck Oven",
  option4 = "Convection Pizza Oven",
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

