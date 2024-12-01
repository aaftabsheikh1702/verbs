import React from "react";


export interface Verb {
    number: number;
    verb: string;
    pastSimple: string;
    pastParticiple: string;
    presentParticiple: string;
    hindiMeaning: string;
    example: string;
  }
  
interface VerbsTableProps {
  data: Verb[];
}

export const VerbsTable: React.FC<VerbsTableProps> = ({ data }) => {
  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
      <table className="min-w-full table-auto">
        <thead className="bg-black text-white">
          <tr>
            <th className="px-6 py-4 text-left text-sm font-medium">No</th>
            <th className="px-6 py-4 text-left text-sm font-medium">V1</th>
            <th className="px-6 py-4 text-left text-sm font-medium">V2</th>
            <th className="px-6 py-4 text-left text-sm font-medium">V3</th>
            <th className="px-6 py-4 text-left text-sm font-medium">V1 + ing</th>
            <th className="px-6 py-4 text-left text-sm font-medium">Hindi Meaning</th>
            <th className="px-6 py-4 text-left text-sm font-medium">Example</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-300">
          {data.map((verb) => (
            <tr key={verb.number} className="hover:bg-gray-50">
              <td className="px-6 py-4 text-sm text-gray-700">{verb.number}</td>
              <td className="px-6 py-4 text-sm text-gray-700">{verb.verb}</td>
              <td className="px-6 py-4 text-sm text-gray-700">{verb.pastSimple}</td>
              <td className="px-6 py-4 text-sm text-gray-700">{verb.pastParticiple}</td>
              <td className="px-6 py-4 text-sm text-gray-700">{verb.presentParticiple}</td>
              <td className="px-6 py-4 text-sm min-w-[15rem] text-gray-700">{verb.hindiMeaning}</td>
              <td className="px-6 py-4 text-sm min-w-[30rem] text-gray-700">{verb.example}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
