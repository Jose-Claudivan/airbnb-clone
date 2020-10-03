
import { Reserva } from './../models/reserva';
import { Injectable } from '@angular/core';
import { ResourceService } from './resource.service';
import { ResourceServiceInterface } from './resource.service.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ReservaSerializer } from '../serializers/reserva.serializer';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class UnidadeService extends ResourceService<Reserva> implements ResourceServiceInterface<Reserva>{

  constructor(httpClient: HttpClient) {
    super(
      httpClient,
      environment.request_base_url,
      'reserva',
      new ReservaSerializer);
  }
}
