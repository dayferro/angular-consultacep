import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  cep = '';
  endereco = {};

  constructor(private httpClient: HttpClient) { }

  public get_products() {
    this.httpClient.get(`https://viacep.com.br/ws/${this.cep}/json/`).subscribe((res) => {
        this.endereco = res;
    });
  }
}
