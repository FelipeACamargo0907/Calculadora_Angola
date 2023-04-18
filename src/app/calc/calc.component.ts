import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent {
  val1: number = 0;
  val2: number = 0;
  resultado: number = 0;


  Calcular(op: string): number {
    if (op == '+')
      this.resultado = this.val1 + this.val2;
    if (op == '-')
      this.resultado = this.val1 - this.val2;
    if (op == '*')
      this.resultado = this.val1 * this.val2;
    if (op == '/')
      this.resultado = this.val1 / this.val2;

    return this.resultado;
  }

}
