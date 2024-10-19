import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink} from '@angular/router';
import { SearchContainerComponent } from '../search-container/search-container.component';
import { DataService } from '../data.service';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import { JsonPipe } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import { MatCardActions } from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import { MatButton } from '@angular/material/button';
import { NgFor } from '@angular/common';
import Swal from 'sweetalert2'




@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    SearchContainerComponent,
    MatButtonModule, 
    MatCardModule, 
    MatListModule, 
    MatFormFieldModule, 
    JsonPipe, 
    MatInputModule, 
    MatCardActions, 
    MatSelectModule, 
    MatButton, 
    NgFor,
    RouterLink,
    
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit{

  public movieName: string [] = []
  public movieType: string [] = []
  public movieDuration: any [] = []
  public movieDirector: string [] = []
  public movieActors: string [] = []
  public moviePrice: any [] = []
  public movieRating: any [] = []

  
  // public qMovieName: string | null = null
  // public qMovieType: string | null = null
  // public qMovieDuration: any | any = null
  // public qMovieDirector: string | null = null
  // public qMovieActors: string | null = null
  // public qMoviePrice: any | any = null
  // public qMovieRating: any | any = null

  public smovieName : string [] | null = null
  public smovieType : string [] | null = null
  public smovieDuration : any [] | null = null
  public smovieDirector : string [] | null = null
  public smovieActors : string [] | null = null
  public smoviePrice : any [] | null = null
  public smovieRating : any [] | null = null


  constructor (private route: ActivatedRoute, private dataService: DataService) {
    
    this.dataService = new DataService()
  
  }

  
  
  ngOnInit(): void {
    this.route.queryParams.subscribe(params=>{

      this.smovieName = params['movieName'];
      this.smovieType = params['movieType'];
      this.smovieDuration = params['movieDuration'];
      this.smovieDirector = params['movieDirector'];
      this.smovieActors = params['movieActors'];
      this.smoviePrice = params['moviePrice'];
      this.smovieRating = params['movieRating'];

      // console.log(params['movieName'], params['movieType'])


    });

    
    this.movieName = this.dataService.getmovieName()
    this.movieType = this.dataService.getmovieType()
    this.movieDuration = this.dataService.getmovieDuration()
    this.movieDirector = this.dataService.getmovieDirector()
    this.movieActors = this.dataService.getmovieActors()
    this.moviePrice = this.dataService.getmoviePrice()
    this.movieRating = this.dataService.getmovieRating()

  }

  public doSearch () {
    console.log(this.smovieName, this.smovieType, this.smovieDuration, this.smovieDirector, this.smovieActors, this.smoviePrice, this.smovieRating);
    
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500
    });
  
  }


}
