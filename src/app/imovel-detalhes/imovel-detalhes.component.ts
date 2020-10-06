import { ActivatedRoute } from '@angular/router';
import { ImovelService } from './../services/imovel.service';
import { Imovel } from './../models/imovel';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-imovel-detalhes',
  templateUrl: './imovel-detalhes.component.html',
  styleUrls: ['./imovel-detalhes.component.css']
})
export class ImovelDetalhesComponent implements OnInit {

  imovel: Imovel

  constructor(private imovelService: ImovelService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.imovelService.read(id).
                        subscribe( imovel => {
                                    this.imovel = imovel
    })

  }

  onSubmit(){
    
  }

}
