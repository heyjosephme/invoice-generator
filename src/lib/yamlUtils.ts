import yaml from "js-yaml";
import fs from "node:fs";
import path from "node:path";

export interface ClientAddress {
  address_1: string;
  address_2: string;
  street: string;
  city: string;
  postal_code: string;
}

export interface ClientContact {
  name: string;
  email: string;
  phone: string;
}

export interface Client {
  id: string;
  name: string;
  address: ClientAddress;
  contact: ClientContact;
  payment_terms: number;
  hourly_rate: number;
}

export function getClients(): Client[] {
  try {
    // Get the absolute path to the YAML file
    const filePath = path.resolve(process.cwd(), "src/data/clients.yml");

    // Read the file synchronously
    const fileContents = fs.readFileSync(filePath, "utf8");

    // Parse the YAML content
    const clients = yaml.load(fileContents) as Client[];
    console.log(clients);
    return clients;
  } catch (error) {
    console.error("Error reading clients.yml:", error);
    return [];
  }
}
