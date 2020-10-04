import { Avaliacao } from './../models/avaliacao';



export class AvaliacaoSerializer {
    fromJson(json: any): Avaliacao {
      let avaliacao = new Avaliacao()

      avaliacao.id = json.id
      avaliacao.nota = json.nota
      avaliacao.comentario =json.comentario
      avaliacao.imovel_id = json.imovel_id

      return avaliacao;
    }

    toJson(avaliacao: Avaliacao): any {
      let json = {
            'id' : avaliacao.id,
            'nota' : avaliacao.nota,
            'comentario' : avaliacao.comentario,
            'imovel_id' : avaliacao.imovel_id,
      }

      return json
    }


  }
