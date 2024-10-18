import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchContainerComponent } from '../search-container/search-container.component';
import { DataService } from '../data.service';


@Component({
  selector: 'app-search',
  standalone: true,
  imports: [SearchContainerComponent],
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

  
  public qMovieName: string | null = null
  public qMovieType: string | null = null
  public qMovieDuration: any | null = null
  public qMovieDirector: string | null = null
  public qMovieActors: string | null = null
  public qMoviePrice: any | null = null
  public qMovieRating: any | null = null


  constructor (
    private route: ActivatedRoute,
    private dataService: DataService
    ) {}
  
  ngOnInit(): void {
    this.route.queryParams.subscribe(params=>{
      this.qMovieName = params['movieName']
      this.qMovieType = params['movieType']
      this.qMovieDuration = params['movieDuration']
      this.qMovieDirector = params['movieDirector']
      this.qMovieActors = params['movieActors']
      this.qMoviePrice = params['moviePrice']
      this.qMovieRating = params['movieRating']


      // console.log(params['movieName'], params['movieType'])
    })

    this.movieName = this.dataService.getmovieName()
    this.movieType = this.dataService.getmovieType()
    this.movieDuration = this.dataService.getmovieDuration()
    this.movieDirector = this.dataService.getmovieDirector()
    this.movieActors = this.dataService.getmovieActors()
    this.moviePrice = this.dataService.getmoviePrice()
    this.movieRating = this.dataService.getmovieRating()

  }


}
