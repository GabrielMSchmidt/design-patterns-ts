import Endereco from "./Endereco";
import Telefone from "./Telefone";

export default class Cliente {
    private _nome : string;
    private _cpf : number;
    private _data_nascimento : string;
    private _sexo : string;
    private _endereco : Endereco;
    private _telefones : Telefone[];

    /**
     * Getter nome
     * @return {string}
     */
	public get nome(): string {
		return this._nome;
	}

    /**
     * Getter cpf
     * @return {number}
     */
	public get cpf(): number {
		return this._cpf;
	}

    /**
     * Getter data_nascimento
     * @return {string}
     */
	public get data_nascimento(): string {
		return this._data_nascimento;
	}

    /**
     * Getter sexo
     * @return {string}
     */
	public get sexto(): string {
		return this._sexo;
	}

    /**
     * Getter endereco
     * @return {Endereco}
     */
	public get endereco(): Endereco {
		return this._endereco;
	}

    /**
     * Getter telefones
     * @return {Telefone[]}
     */
	public get telefones(): Telefone[] {
		return this._telefones;
	}

    /**
     * Setter nome
     * @param {string} value
     */
	public set nome(value: string) {
		this._nome = value;
	}

    /**
     * Setter cpf
     * @param {number} value
     */
	public set cpf(value: number) {
		this._cpf = value;
	}

    /**
     * Setter data_nascimento
     * @param {string} value
     */
	public set data_nascimento(value: string) {
		this._data_nascimento = value;
	}

    /**
     * Setter sexo
     * @param {string} value
     */
	public set sexto(value: string) {
		this._sexo = value;
	}

    /**
     * Setter endereco
     * @param {Endereco} value
     */
	public set endereco(value: Endereco) {
		this._endereco = value;
	}

    /**
     * Setter telefones
     * @param {Telefone[]} value
     */
	public set telefones(value: Telefone[]) {
		this._telefones = value;
	}

    
}