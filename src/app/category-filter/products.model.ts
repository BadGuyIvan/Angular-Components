export class Products {
    constructor(
        private category: string,
        ) {}
    
    public get getCategory() : string {
        return this.category 
    }
    
}