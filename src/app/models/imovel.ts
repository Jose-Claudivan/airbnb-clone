import { Avaliacao } from './avaliacao';
import { Resource } from './resource'

export class Imovel extends Resource{
    nome: string
    descricao: string
    tipo: string
    avaliacao: number
    taxa: number
    localizacao: number
    endereco: string
    telefone: number
    imagens: string[]
    proprietario: string
    avaliacoes: Avaliacao[]
}
