import { Component, OnInit, OnChanges, Input } from '@angular/core';
import {Coracao} from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {

  @Input() public tentativas: number;

  public coracoes: Array<Coracao> = [
    new Coracao(true),
    new Coracao(true),
    new Coracao(true)
  ];

  constructor() { }

  ngOnChanges(): void {
    //this.tentativas
    //this.coracoes.length;
    if(this.tentativas !== this.coracoes.length) {
      let indice = this.coracoes.length - this.tentativas
      console.log('this indice', indice);
      this.coracoes[indice - 1].cheio = false
    }
    console.log('Tentativas recebidas', this.tentativas);
  }

  ngOnInit(): void {
    
  }


}
