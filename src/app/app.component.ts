import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})


export class AppComponent implements OnInit {

constructor() { }


ngOnInit() { }

mesa = [
{equipe: 'EQ.001', assistente: 'Andreia', supervisor: 'Nésio'},
{equipe: 'EQ.002', assistente: 'Talita', supervisor: 'Ricardo'},
{equipe: 'EQ.003', assistente: 'Andreia', supervisor: 'Nésio'},
{equipe: 'EQ.004', assistente: 'Miquelia', supervisor: 'Andre Luis'},
{equipe: 'EQ.005', assistente: 'Debora Graziela', supervisor: 'Luiz Gustavo'},
{equipe: 'EQ.006', assistente: 'Debora Costa', supervisor: 'Marcos Ely'},
{equipe: 'EQ.008', assistente: 'Flávio', supervisor: 'Marcus Coutinho'},
{equipe: 'EQ.009', assistente: 'Mariana Romão', supervisor: 'Academus'},
{equipe: 'EQ.010', assistente: 'Debora Costa', supervisor: 'Academus'},
{equipe: 'EQ.012', assistente: 'Debora Costa', supervisor: 'Marcio Antônio'},
{equipe: 'EQ.013', assistente: 'Diego', supervisor: 'Ronaldo Simões'},
{equipe: 'EQ.014', assistente: 'Vitória', supervisor: 'Daniel Jesus'},
{equipe: 'EQ.016', assistente: 'Sandra', supervisor: 'Marcio Antônio'},
{equipe: 'EQ.020', assistente: 'Mariana Romão', supervisor: 'Jaime'},
{equipe: 'EQ.032', assistente: 'Bruna', supervisor: 'Revenda'},
{equipe: 'EQ.033', assistente: 'Mariana Romão', supervisor: 'Revenda'},
{equipe: 'EQ.036', assistente: 'Sandra', supervisor: 'Revenda'},
{equipe: 'EQ.039', assistente: 'Vitória', supervisor: 'Marcos Vinicius'},
{equipe: 'EQ.041', assistente: 'Flávio', supervisor: 'Marcos Vinicius'},
{equipe: 'EQ.053', assistente: 'Flávio', supervisor: 'Reginaldo Fernandes'},
{equipe: 'EQ.054', assistente: 'Mariana Romão', supervisor: 'Marcos Ely'},
{equipe: 'EQ.056', assistente: 'Greice', supervisor: 'Cristian Carvalho'},
{equipe: 'EQ.060', assistente: 'Sandra', supervisor: 'Revenda'},
{equipe: 'EQ.065', assistente: 'Debora Graziela', supervisor: 'Luiz Gustavo'},
{equipe: 'EQ.066', assistente: 'Flávio', supervisor: 'Revenda'},
{equipe: 'EQ.077', assistente: 'Greice', supervisor: 'Ricardo Alexandre'},
]
}