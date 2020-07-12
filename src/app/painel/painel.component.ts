import { Component, OnInit } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES;
  public instrucao: string = 'Traduza a frase';
  public resposta: string = ''
  public rodada: number = 0;
  public rodadaFrase: Frase;
  public progresso: number = 0;

  constructor() {
    this.atualizaRodada();
  }

  public atualizarResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value;
    //console.log(this.resposta);
  }

  public verificarResposta(): void {


    if(this.rodadaFrase.frase_pt == this.resposta) {
      alert('Tradução correta!');
      this.rodada++
      this.progresso = this.progresso + 25;
      //Atualiza rodada frase
      this.atualizaRodada();

    } else {
      alert('Tradução incorreta');
    }


  }

  public atualizaRodada(): void {

    //Define a frase da rodada com base em algum logica
    this.rodadaFrase = this.frases[this.rodada]
    //limpar resposta
    this.resposta = ''
  }


  ngOnInit(): void {
  }

}
