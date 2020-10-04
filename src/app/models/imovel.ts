import { Resource } from './resource'

export class Imovel extends Resource{
    nome: string
    descricao: string
    tipo: string
    avaliacao: number
    taxa_diaria: number
    latitude: number
    longitude: number
    logradouro: string
    bairro: string
    cidade: string
    telefone: string
    imagens: string[]
    proprietario: string
}
