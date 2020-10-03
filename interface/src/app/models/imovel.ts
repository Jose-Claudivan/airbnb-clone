export interface Imovel {
    id?: number //id é opcional na criacao do imovel
    nome: string
    descricao: string
    tipo: string
    avaliacao: number 
    taxa: number
    localizacao: number 
    endereco: string
    telefone: number
    imagens: number
    proprietario: string
}