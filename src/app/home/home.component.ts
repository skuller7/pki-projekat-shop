import {Component, } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import { JsonPipe } from '@angular/common';
import {MatInputModule} from '@angular/material/input';





@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatListModule, MatFormFieldModule, JsonPipe, MatInputModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  typesOfPizzaOvens = typesOfPizzaOvens
  public typesPizza: string [] = ['Margharita', 'Pepperoni', 'Funghi']
  public auto = [
    {
      id: 1,
      model: 'Fiat Panda',
      vendor : this.typesPizza[0],
    },
    {
      id: 2,
      model: 'BMW Colos 3',
      vendor : this.typesPizza[1],
    },    
  ]

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

