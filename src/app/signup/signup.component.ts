import { Component } from '@angular/core';
import { MatCard, MatCardActions, MatCardContent } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [MatInputModule, MatCardContent, MatCard, MatFormFieldModule, MatOption, MatSelect, MatCardActions],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

}
