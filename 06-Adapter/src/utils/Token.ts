export default class Token{
    private _token: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlJ1c3NlbCBXZXN0YnJvb2siLCJudW1iZXIiOjB9.6XSXvf7eyWhNFXYUqvYOCVJrk2iTG9gyAyyGWeM-Qvk";
    
    public get token(): string {
        return this._token;
    }
    
}