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

export interface FreelancerAddress {
  address1: string;
  address2: string;
  street: string;
  city: string;
  postal_code: string;
}

export interface FreelancerContact {
  name: string;
  email: string;
  phone: string;
}

export interface Freelancer {
  name: string;
  postal_code: string;
  address: FreelancerAddress;
  contact: FreelancerContact;
  tax_id: string;
  bank: {
    name: string;
    branch: string;
    account_name: string; // usually the name of the account holder (when different?)
    account: string;
    type: string; // enum, normal
  };
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

export function getFreelancer(): Freelancer {
  try {
    // Get the absolute path to the YAML file
    const filePath = path.resolve(process.cwd(), "src/data/freelancer.yml");

    // Read the file synchronously
    const fileContents = fs.readFileSync(filePath, "utf8");

    // Parse the YAML content
    const freelancer = yaml.load(fileContents) as Freelancer;

    return freelancer;
  } catch (error) {
    console.error("Error reading freelancer.yml:", error);
    // Return a default empty freelancer object
    return {
      name: "",
      address: { street: "", city: "", postal_code: "" },
      contact: { name: "", email: "", phone: "" },
      tax_id: "",
      bank: { name: "", account: "" },
    };
  }
}
