import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
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
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';





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
    MatPaginator,
    MatPaginatorModule,
    MatTableModule,
    NgFor,
    RouterLink,
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit, AfterViewInit {

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

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<ExampleElement>(ELEMENT_DATA);
  

  ngAfterViewInit() {
    
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
      showConfirmButton: true,
      timer: 1500
    });
  
  }


}


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export interface ExampleElement {
  Index: number;
  MovieName: string;
  MovieType: string;
  MovieDuration: number;
  
}


const ELEMENT_DATA: ExampleElement[] = [
  {Index: 1, MovieName: 'Batman 2', MovieType: 'Drama', MovieDuration: 100},
  {Index: 2, MovieName: 'John Wick 3 Barabellum', MovieType: 'Action', MovieDuration: 115},
  {Index: 3, MovieName: 'Justice League', MovieType: 'Action', MovieDuration: 120},
  {Index: 4, MovieName: 'Matrix 2', MovieType: 'Action', MovieDuration: 100},
  {Index: 5, MovieName: 'Insidious 3: The last Key', MovieType: 'Sci-Fi', MovieDuration: 18},
  {Index: 6, MovieName: 'Interstellar I', MovieType: 'Sci-Fi', MovieDuration: 90},
  {Index: 7, MovieName: 'Blade Runner 2049', MovieType: 'Action', MovieDuration: 120},
  {Index: 8, MovieName: 'The Avengers', MovieType: 'Action', MovieDuration: 80},
  {Index: 9, MovieName: 'Baby Driver', MovieType: 'Drama', MovieDuration: 200},
  {Index: 10, MovieName: 'Joker 2019', MovieType: 'Drama', MovieDuration: 170},
  

];
