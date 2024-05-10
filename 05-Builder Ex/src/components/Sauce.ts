export default class Sauce{
    constructor(private _flavor: string){}
    
    public get type(): string {
        return this._flavor;
    }
    public set type(value: string) {
        this._flavor = value;
    }
}