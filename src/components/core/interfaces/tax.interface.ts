export interface TaxInterface{
    id?:number;
    name:string;
    percentage:number;
    createdAt?:Date;
    updatedAt?:Date;
    deletedAt?:Date;
    status?:boolean;
}