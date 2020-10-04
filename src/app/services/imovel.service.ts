import { Injectable } from '@angular/core';
import { ResourceService } from './resource.service';
import { ResourceServiceInterface } from './resource.service.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ReservaSerializer } from '../serializers/reserva.serializer';
import { environment } from 'src/environments/environment';
import { Imovel } from '../models/imovel';
import { ImovelSerializer } from '../serializers/imovel.serializer';



@Injectable({
  providedIn: 'root'
})
export class ImovelService extends ResourceService<Imovel> implements ResourceServiceInterface<Imovel>{

  constructor(httpClient: HttpClient) {
    super(
      httpClient,
      environment.request_base_url,
      'imovel',
      new ImovelSerializer());
  }
}
