import { Imovel } from './../models/imovel';
import { Component, OnInit } from '@angular/core';
import { ImovelService } from '../services/imovel.service';
import { QueryOptions } from '../services/query-options';

@Component({
  selector: 'app-imovel-list',
  templateUrl: './imovel-list.component.html',
  styleUrls: ['./imovel-list.component.css']
})
export class ImovelListComponent implements OnInit {

  imoveis: Imovel[]
  constructor(private imovelService: ImovelService) { }

  ngOnInit(): void {

    let queryMap = new Map<string, string>();

    this.imovelService.
         list(new QueryOptions(queryMap)).
                  subscribe( imoveis => {
                            this.imoveis = imoveis
                            console.log(imoveis)
    })
  }

}
