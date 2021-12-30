import { Component, OnInit } from '@angular/core';

import { IndicadoresService } from '../app/services/indicadores.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'test3it';
  indicador = {};
  indicadorUF = {};

  constructor(private indicadoresService: IndicadoresService) {

  }

  ngOnInit(){
    this.indicadoresService.getIndicadores()
      .subscribe(
        res => {
          this.indicador = res,
          console.log()
          
        },
        errIndicador => console.log(errIndicador)
      )

  }

}

