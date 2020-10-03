import { Resource } from './resource'

export class Reserva extends Resource{
    checkin: Date
    checkout: Date
    hospede: number
    valor: number
    imovel_id: string

}
