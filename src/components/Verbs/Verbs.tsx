"use client";
import { Pagination, VerbsTable } from "@/features";
import React, { useState } from "react";
import { verbs } from "./verblist";


export const Verbs: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 50;

  const totalPages = Math.ceil(verbs.length / itemsPerPage);

  const currentData = verbs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section className="p-4 bg-gray-100 min-h-screen">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold text-center mb-4">Verbs Table</h1>
        <VerbsTable data={currentData} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </section>
  );
};
