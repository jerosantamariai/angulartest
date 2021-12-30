

import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { IindicadorUf } from 'src/app/interfaces/IindicadorUf';
import { IndicadoresService } from 'src/app/services/indicadores.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor(private indicadoresService: IndicadoresService) {

  }

  indicador = {};
  indicadorUF: IindicadorUf = { autor: "", codigo: "", nombre: "", unidad_medida: "", serie: [{ fecha: "", valor: 0 }] };
  indicadorDolar: IindicadorUf = { autor: "", codigo: "", nombre: "", unidad_medida: "", serie: [{ fecha: "", valor: 0 }] };
  indicadorDolarIntercambio: IindicadorUf = { autor: "", codigo: "", nombre: "", unidad_medida: "", serie: [{ fecha: "", valor: 0 }] };
  indicadorEuro: IindicadorUf = { autor: "", codigo: "", nombre: "", unidad_medida: "", serie: [{ fecha: "", valor: 0 }] };
  indicadorIpc: IindicadorUf = { autor: "", codigo: "", nombre: "", unidad_medida: "", serie: [{ fecha: "", valor: 0 }] };
  indicadorIvp: IindicadorUf = { autor: "", codigo: "", nombre: "", unidad_medida: "", serie: [{ fecha: "", valor: 0 }] };
  indicadorUtm: IindicadorUf = { autor: "", codigo: "", nombre: "", unidad_medida: "", serie: [{ fecha: "", valor: 0 }] };
  indicadorImacec: IindicadorUf = { autor: "", codigo: "", nombre: "", unidad_medida: "", serie: [{ fecha: "", valor: 0 }] };
  indicadorTpm: IindicadorUf = { autor: "", codigo: "", nombre: "", unidad_medida: "", serie: [{ fecha: "", valor: 0 }] };
  indicadorLibraCobre: IindicadorUf = { autor: "", codigo: "", nombre: "", unidad_medida: "", serie: [{ fecha: "", valor: 0 }] };
  indicadorBitcoin: IindicadorUf = { autor: "", codigo: "", nombre: "", unidad_medida: "", serie: [{ fecha: "", valor: 0 }] };
  indicadorTasaDesempleo: IindicadorUf = { autor: "", codigo: "", nombre: "", unidad_medida: "", serie: [{ fecha: "", valor: 0 }] };
  uf = {};
  ivp = {};
  dolar = {};
  euro = {};
  ipc = {};
  utm = {};
  imace = {};
  tpm = {};
  libraCobre = {};
  dolarIntercambio = {};
  bitcoin = {};
  tasaDesempleo = {};
  codigo = "";
  unidadValida = "";
  autor= "";
  nombre= "";
  fecha= "";
  valor= "";



  buscarAutor() {
    let autor = "";
    for (let e of this.indicadorUF.autor) {
      autor =  e + ""  ;
    }
    autor += "";
    return autor;
  }
  buscarIndicador() {
    let codigo = "";
    for (let e of this.indicadorUF.serie) {
      codigo =  e.valor + ""  ;
    }
    codigo += "";
    return codigo;
  }
  buscarNombre() {
    let  nombre = "";
    for (let e of this.indicadorUF.nombre) {
      
      nombre =  e + ""  ;
    }
    nombre += "";
    return  nombre;
  }
  buscarUnidadValida() {
    let  unidadValida = "";
    for (let e of this.indicadorUF.unidad_medida) {
      
      unidadValida =  e + ""  ;
    }
    unidadValida += "";
    return  unidadValida;
  }
  buscarFecha() {
    let  fecba = "";
    for (let e of this.indicadorUF.serie) {
      
      fecba =  e.fecha + ""  ;
    }
    fecba += "";
    return  fecba;
  
  }
  buscarValor() {
    let  valor = "";
    for (let e of this.indicadorUF.serie) {
      
      valor =  e.valor + ""  ;
    }
    valor += "";
    return  valor;
  
  }
  ngOnInit() {
   ( this.indicadoresService.getUf()
      .subscribe(
        uf => {
          this.indicadorUF = uf;
          this.autor = this.buscarAutor();
          this.codigo = this.buscarIndicador();
          this.nombre = this.buscarNombre();
          this.unidadValida =this.buscarUnidadValida();
          this.fecha =this.buscarFecha();
          this.valor =this.buscarValor();
          // console.log(res2.toString())
          console.log(this.indicadorUF.serie[0])
        },
        errUF => console.log(errUF)
      )),
      ( this.indicadoresService.getDolar()
        .subscribe(
          dolar => {
            this.indicadorDolar = dolar;
            this.autor = this.buscarAutor();
            this.codigo = this.buscarIndicador();
            this.nombre = this.buscarNombre();
            this.unidadValida =this.buscarUnidadValida();
            this.fecha =this.buscarFecha();
            this.valor =this.buscarValor();
            // console.log(res2.toString())
            console.log(this.indicadorDolar.serie[0])
          },
          errUF => console.log()
        )
      ),
      ( this.indicadoresService.getIvp()
      .subscribe(
        ivp => {
          this.indicadorIvp = ivp;
          this.autor = this.buscarAutor();
          this.codigo = this.buscarIndicador();
          this.nombre = this.buscarNombre();
          this.unidadValida =this.buscarUnidadValida();
          this.fecha =this.buscarFecha();
          this.valor =this.buscarValor();
          // console.log(res2.toString())
          console.log(this.indicadorIvp.serie[0])
        },
        errUF => console.log()
      )
    ),
    ( this.indicadoresService.getDolarIntercambio()
    .subscribe(
      dolar_intercambio => {
        this.indicadorDolarIntercambio = dolar_intercambio;
        this.autor = this.buscarAutor();
        this.codigo = this.buscarIndicador();
        this.nombre = this.buscarNombre();
        this.unidadValida =this.buscarUnidadValida();
        this.fecha =this.buscarFecha();
        this.valor =this.buscarValor();
        // console.log(res2.toString())
        console.log(this.indicadorDolarIntercambio.serie[0])
      },
        errUF => console.log()
      )
    ),
    ( this.indicadoresService.getEuro()
    .subscribe(
      euro => {
        this.indicadorEuro = euro;
        this.autor = this.buscarAutor();
        this.codigo = this.buscarIndicador();
        this.nombre = this.buscarNombre();
        this.unidadValida =this.buscarUnidadValida();
        this.fecha =this.buscarFecha();
        this.valor =this.buscarValor();
        // console.log(res2.toString())
        console.log(this.indicadorEuro.serie[0])
      },
        errUF => console.log()
      )
    ),
    ( this.indicadoresService.getIpc()
    .subscribe(
      ipc => {
        this.indicadorIpc = ipc;
        this.autor = this.buscarAutor();
        this.codigo = this.buscarIndicador();
        this.nombre = this.buscarNombre();
        this.unidadValida =this.buscarUnidadValida();
        this.fecha =this.buscarFecha();
        this.valor =this.buscarValor();
        // console.log(res2.toString())
        console.log(this.indicadorIpc.serie[0])
      },
        errUF => console.log()
      )
    ),
    ( this.indicadoresService.getUtm()
    .subscribe(
      utm => {
        this.indicadorUtm = utm;
        this.autor = this.buscarAutor();
        this.codigo = this.buscarIndicador();
        this.nombre = this.buscarNombre();
        this.unidadValida =this.buscarUnidadValida();
        this.fecha =this.buscarFecha();
        this.valor =this.buscarValor();
        // console.log(res2.toString())
        console.log(this.indicadorUtm.serie[0])
      },
        errUF => console.log()
      )
    ),
    ( this.indicadoresService.getImacec()
    .subscribe(
      imacec => {
        this.indicadorImacec = imacec;
        this.autor = this.buscarAutor();
        this.codigo = this.buscarIndicador();
        this.nombre = this.buscarNombre();
        this.unidadValida =this.buscarUnidadValida();
        this.fecha =this.buscarFecha();
        this.valor =this.buscarValor();
        // console.log(res2.toString())
        console.log(this.indicadorImacec.serie[0])
      },
        errUF => console.log()
      )
    ),
    ( this.indicadoresService.getTpm()
    .subscribe(
      tpm => {
        this.indicadorTpm = tpm;
        this.autor = this.buscarAutor();
        this.codigo = this.buscarIndicador();
        this.nombre = this.buscarNombre();
        this.unidadValida =this.buscarUnidadValida();
        this.fecha =this.buscarFecha();
        this.valor =this.buscarValor();
        // console.log(res2.toString())
        console.log(this.indicadorTpm.serie[0])
      },
        errUF => console.log()
      )
    ),
    ( this.indicadoresService.getLibraCobre()
    .subscribe(
        libraCobre => {
        this.indicadorLibraCobre = libraCobre;
        this.autor = this.buscarAutor();
        this.codigo = this.buscarIndicador();
        this.nombre = this.buscarNombre();
        this.unidadValida =this.buscarUnidadValida();
        this.fecha =this.buscarFecha();
        this.valor =this.buscarValor();
        // console.log(res2.toString())
        console.log(this.indicadorLibraCobre.serie[0])
      },
        errUF => console.log()
      )
    ),
    ( this.indicadoresService.getBitcoin()
    .subscribe(
      bitcoin => {
        this.indicadorBitcoin = bitcoin;
        this.autor = this.buscarAutor();
        this.codigo = this.buscarIndicador();
        this.nombre = this.buscarNombre();
        this.unidadValida =this.buscarUnidadValida();
        this.fecha =this.buscarFecha();
        this.valor =this.buscarValor();
        // console.log(res2.toString())
        console.log(this.indicadorBitcoin.serie[0])
      },
        errUF => console.log()
      )
    ),
    ( this.indicadoresService.getTasaDesempleo()
    .subscribe(
      tasaDesempleo => {
        this.indicadorTasaDesempleo = tasaDesempleo;
        this.autor = this.buscarAutor();
        this.codigo = this.buscarIndicador();
        this.nombre = this.buscarNombre();
        this.unidadValida =this.buscarUnidadValida();
        this.fecha =this.buscarFecha();
        this.valor =this.buscarValor();
        // console.log(res2.toString())
        console.log(this.indicadorTasaDesempleo.serie[0])
      },
        errUF => console.log()
      )
    )

  }

}