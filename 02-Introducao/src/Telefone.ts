export default class Telefone {
    private _ddd : string;
    private _numero : string;
    private _tipo : string;


    /**
     * Getter ddd
     * @return {string}
     */
	public get ddd(): string {
		return this._ddd;
	}

    /**
     * Getter numero
     * @return {string}
     */
	public get numero(): string {
		return this._numero;
	}

    /**
     * Getter tipo
     * @return {string}
     */
	public get tipo(): string {
		return this._tipo;
	}

    /**
     * Setter ddd
     * @param {string} value
     */
	public set ddd(value: string) {
		this._ddd = value;
	}

    /**
     * Setter numero
     * @param {string} value
     */
	public set numero(value: string) {
		this._numero = value;
	}

    /**
     * Setter tipo
     * @param {string} value
     */
	public set tipo(value: string) {
		this._tipo = value;
	}


	constructor() {
	}

}