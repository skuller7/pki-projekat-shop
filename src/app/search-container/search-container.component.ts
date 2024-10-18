import { Component, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import { JsonPipe } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import { MatCardActions } from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-search-container',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatListModule, MatFormFieldModule, JsonPipe, MatInputModule, MatCardActions, MatSelectModule, MatButton, RouterLink, NgFor],
  templateUrl: './search-container.component.html',
  styleUrl: './search-container.component.css'
})
export class SearchContainerComponent {
  @Input() movieName : string[] | undefined
  @Input() movieType : string[] | undefined
  @Input() movieActors : string[] | undefined
  @Input() movieDirector : string[] | undefined
  @Input() movieDuration : any[] | undefined
  @Input() moviePrice : any[] | undefined
  @Input() movieRating : any[] | undefined
  
  @Input() defaultmovieName : string [] | null = null
  @Input() defaultmovieType : string [] | null = null
  @Input() defaultmovieDuration : any [] | null = null
  @Input() defaultmovieDirector : string [] | null = null
  @Input() defaultmovieActors : string [] | null = null
  @Input() defaultmoviePrice : any [] | null = null
  @Input() defaultmovieRating : any [] | null = null

}
