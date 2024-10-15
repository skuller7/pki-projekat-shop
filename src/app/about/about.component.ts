import { JsonPipe, NgFor, NgIf } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [HttpClientModule, JsonPipe, NgIf, NgFor],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  public recommended: any[] | undefined = undefined

  constructor(client: HttpClient) {
    const url = 'https://private-anon-2bccf8be10-pizzaapp.apiary-mock.com/restaurants/'
    client.get<any>(url, {
      headers: {
        'Accept': 'application/json'
      }
    }).subscribe(rsp => this.recommended = rsp)
  }
}
