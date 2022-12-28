import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  display='';
  memori =[];
  operando='';
  operador='';

  numero(x){
    this.memori.push(x) //Agregar
    this.display=String(Number(this.memori.join(''))*1); //concatenar)
    
  }

  limpiar(){
    this.display='';
    this.memori=[];
  }

  operacion(sm){
    //console.log(operando) Muestra en consola
    if(sm=='sin'|| sm=='cos' || sm=='tan'){
      this.memori=[];
      this.operador=sm;
      this.display=this.operador;
    }else{
      this.operando=this.display;
      this.memori=[];
      this.operador=sm;
    }
    

  }

  igual(){
    if(this.operador=='+'){
      this.display=String(Number(this.operando)+Number(this.display));
    } else if(this.operador=='-'){
      this.display=String(Number(this.operando)-Number(this.display));
    } else if(this.operador=='*'){
      this.display=String(Number(this.operando)*Number(this.display));
    } else if(this.operador=='/'){
      this.display=String(Number(this.operando)/Number(this.display));
    } else if(this.operador=='^'){
      this.display=String(Math.pow(Number(this.operando),Number(this.display)));
    } else if(this.operador=='sin'){
      this.display=String(Math.sin(Number(this.display)));
    } else if(this.operador=='cos'){
      this.display=String(Math.cos(Number(this.display)));
    } else if(this.operador=='tan'){
      this.display=String(Math.tan(Number(this.display)));
    }else{
      this.display='datos vacios';
    }

  }

}
