import { Component } from '@angular/core';
import { DrinkService } from 'src/services/drink';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mostrar = "principal";
  dataElement: any = [];
  dataheader: any = [];
  constructor(
    private drinkService: DrinkService,
  ) {

  }
  editardrink() {
    this.dataElement = []
    this.dataheader=[]
    this.mostrar = "editar";
    const parameters = 11007;
    this.drinkService.getIDdrinks(parameters).subscribe(
      response => {
        for (let propiedad in response.drinks[0]) {
          this.dataheader.push(propiedad)
        }
        this.dataElement = response.drinks
        this.verificartipocampo();
        console.log(this.dataheader,this.dataElement)
      },
      error => {
        console.log(error);
      }
    );
  }
  verificartipocampo() {
  }
  listardrink() {
    this.mostrar = "listar";
    this.dataElement = []
    this.dataheader=[]
    this.drinkService.listdrinksAll().subscribe(
      response => {

        for (let propiedad in response.drinks[0]) {
          this.dataheader.push(propiedad)
        }

        this.dataElement=response.drinks
        console.log(this.dataheader)
      },
      error => {
        console.log(error);
      }
    )
  }
}

