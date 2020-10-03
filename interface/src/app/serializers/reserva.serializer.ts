import { Reserva } from '../models/reserva'



export class ReservaSerializer {
    fromJson(json: any): Reserva {
      let reserva = new Reserva()

      reserva.id = json.id
      reserva.checkin = new Date(json.checkin)
      reserva.checkout = new Date(json.checkout)
      reserva.hospede = json.hospede
      reserva.valor = json.valor

      return reserva;
    }

    toJson(reserva: Reserva): any {
      let json = {
            'id' : reserva.id,
            'checkin' : reserva.checkin,
            'checkout' : reserva.checkout,
            'hospede' : reserva.hospede,
            'valor' : reserva.valor,
      }

      return json
    }


  }
