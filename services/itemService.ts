

import { Item as ItemType } from "@/types";

export async function fetchItems(): Promise<ItemType[]> {
    try {
        const res = await fetch("/api/items/get-items");

        if(res.ok){
            const data:ItemType[] = await res.json();
            console.log("Fetched items: ", data);
            return data;
        }

        else {
            console.error("Failed to fetch items");
            return [];
        }
    }
    catch (error) {
        console.error("Failed to fetch items: ", error);
        return [];
    }
}