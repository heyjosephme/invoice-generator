import React from "react";
import type { WorklogEntry } from "../lib/yamlUtils";

interface WorklogListProps {
  worklogs: WorklogEntry[];
  clientMap: Record<string, string>;
}

const WorklogList: React.FC<WorklogListProps> = ({ worklogs, clientMap }) => {
  // Calculate total hours
  const totalHours = worklogs.reduce(
    (sum, entry) => sum + Number(entry.hours),
    0
  );

  return (
    <div>
      <div className="mb-4">
        <p className="text-lg font-semibold">Total Hours: {totalHours}</p>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border">Date</th>
              <th className="py-2 px-4 border">Client</th>
              <th className="py-2 px-4 border">Hours</th>
              <th className="py-2 px-4 border">Description</th>
            </tr>
          </thead>
          <tbody>
            {worklogs.map((entry, index) => (
              <tr key={index} className="border-b">
                <td className="py-2 px-4 border">{entry.date}</td>
                <td className="py-2 px-4 border">
                  {clientMap[entry.client_id] || entry.client_id}
                </td>
                <td className="py-2 px-4 border text-right">{entry.hours}</td>
                <td className="py-2 px-4 border">{entry.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WorklogList;
