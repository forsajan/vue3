import { v4 as uuidv4 } from "uuid"

export interface Item {
  id: string;
  name: string;
  description?: string;
  quantity: number;
  createdAt: Date;
  deletedAt?: Date;
}

export const generateFakeData = (): Item => {
  return {
    id: uuidv4(),
    quantity: Math.random(),
    name: "lorem ipsum dolar " + Math.random(),
    description: "lorem ipsum dolar lorem ipsum dolar" + Math.random(),
    createdAt: new Date(),
  }
}