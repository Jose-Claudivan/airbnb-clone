import { Imovel } from '../models/imovel'
import { Reserva } from '../models/reserva'



export class ImovelSerializer {
    fromJson(json: any): Imovel {
      let imovel = new Imovel()

      imovel.id = json.id
      imovel.nome = json.nome
      imovel.descricao = json.descricao
      imovel.tipo = json.tipo
      imovel.avaliacao = json.avaliacao
      imovel.taxa_diaria = json.taxa_diaria
      imovel.latitude = json.latitude
      imovel.longitude = json.longitude
      imovel.logradouro = json.logradouro
      imovel.bairro = json.bairro
      imovel.cidade = json.cidade
      imovel.telefone = json.telefone

      imovel.imagens = json.imagens
      imovel.proprietario = json.proprietario

      return imovel;
    }

    toJson(imovel: Imovel): any {
      let json = {
            'id' : imovel.id,
            'nome' : imovel.nome,
            'descricao' : imovel.descricao,
            'tipo' : imovel.tipo,
            'avaliacao' : imovel.avaliacao,
            'taxa_diaria' : imovel.taxa_diaria,
            'latitude' : imovel.latitude,
            'longitude' : imovel.longitude,
            'logradouro' : imovel.logradouro,
            'bairro' : imovel.bairro,
            'cidade' : imovel.cidade,
            'telefone' : imovel.telefone,
            'imagens' : imovel.imagens,
            'proprietario' : imovel.proprietario,
      }

      return json
    }


  }
