export default class Salad{
    constructor(private _type: string){}
    
    public get type(): string {
        return this._type;
    }
    public set type(value: string) {
        this._type = value;
    }
}