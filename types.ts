export interface Item {
    id: number;
    name: string;
    quantity: number;
    vendorLink?: string;
}


export interface Beverage {
    id: number;
    name: string;
    quantity: number;
  }
  
  export interface Restock {
    id: number;
    beverageId: number;
    dateTime: string; // Using string to represent ISO 8601 format
    amount: number;
  }
  
  export interface Count {
    id: number;
    beverageId: number;
    dateTime: string; // Using string to represent ISO 8601 format
    amount: number;
  }