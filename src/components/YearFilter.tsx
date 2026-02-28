'use client';

interface Props {
  selectedYear: number;
  setSelectedYear: (year: number) => void;
}

export default function YearFilter({ selectedYear, setSelectedYear }: Props) {
  return (
    <div className="flex flex-col gap-2 p-4 bg-white rounded-lg shadow-sm border">
      <label className="text-sm font-medium text-gray-700">Filter by Year</label>
      <select 
        value={selectedYear} 
        onChange={(e) => setSelectedYear(Number(e.target.value))}
        className="p-2 border rounded-md bg-gray-50 focus:ring-2 focus:ring-blue-500"
      >
        <option value={2022}>2022 Sales</option>
        <option value={2023}>2023 Sales</option>
        <option value={2024}>2024 Sales</option>
      </select>
    </div>
  );
}