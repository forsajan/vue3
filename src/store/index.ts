import { Item } from "../models/item.model"
import { defineStore } from "pinia"

export type RootState = {
  items: Item[]
}

export const useMainStore = defineStore({
  id: "mainStore",
  state: () =>
   ({
     items: [],
   } as RootState),

   actions: {
     createNewItem(item: Item) {
       if (!item) return
       this.items.push(item)
     },

     updateItem(id: string, item: Item) {
       if(!id || !item) return
       const index = this.findIndexById(id)

       if(index === -1) return
       this.items[index] = item

     },
     
     deleteItem(id: string) {
       const index = this.findIndexById(id)

       if(index === -1) return
       this.items.splice(index, 1)
     },

     findIndexById(id: string) {
       return this.items.findIndex((item: Item) => item.id === id)
     }
   }
})