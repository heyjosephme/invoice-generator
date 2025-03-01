import React from "react";
import type { Client } from "../lib/yamlUtils";

interface ClientListProps {
  clients: Client[];
}

const ClientList: React.FC<ClientListProps> = ({ clients }) => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {clients.map((client) => (
        <div key={client.id} className="border rounded-lg p-4 shadow-sm">
          <h2 className="text-xl font-semibold">{client.name}</h2>
          <div className="mt-2">
            <p>postal_code: {client.address.postal_code}</p>
            <h3 className="font-medium">Address:</h3>
            <p>{client.address.address_1}</p>
            <p>{client.address.address_2}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ClientList;
