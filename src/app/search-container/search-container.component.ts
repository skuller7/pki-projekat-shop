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
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
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
  @Input() movieDuration : any[] | undefined
  @Input() movieDirector : string[] | undefined
  @Input() movieActors : string[] | undefined
  @Input() moviePrice : any[] | undefined
  @Input() movieRating : any[] | undefined
  
  public smovieName : string [] | null = null
  public smovieType : string [] | null = null
  public smovieDuration : any [] | null = null
  public smovieDirector : string [] | null = null
  public smovieActors : string [] | null = null
  public smoviePrice : any [] | null = null
  public smovieRating : any [] | null = null

  constructor (
    private router: Router,
    private activeRoute: ActivatedRoute 
  ) {}

  public onChange() {

  }

  public doSearch () {
    if (this.router.url != "/search") {
      this.router.navigate(['/search'], {relativeTo: this.activeRoute} )
    }
    
    console.log(this.smovieName, this.smovieType, this.smovieDuration, this.smovieDirector, this.smovieActors, this.smoviePrice, this.smovieRating);

  }

}
