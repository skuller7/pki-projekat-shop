import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';




@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatListModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  typesOfPizzaOvens = typesOfPizzaOvens
}

enum typesOfPizzaOvens {

  option1 = 'Brick Pizza Oven',
  option2 = "Conveyor Pizza Oven",
  option3 = "Pizza Deck Oven",
  option4 = "Convection Pizza Oven",
  option5 = "Countertop Pizza Oven"

};

//console.log(typesOfPizzaOvens.option1);
