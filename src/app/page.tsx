'use client';
import { useState } from 'react';
import { salesData } from '@/data/sales';
import SalesChart from '@/components/SalesChart';
import YearFilter from '@/components/YearFilter';
import { BarChart3, LineChart as LineIcon } from 'lucide-react';

export default function Dashboard() {
  const [year, setYear] = useState(2024);
  const [type, setType] = useState<'bar' | 'line'>('bar');

  const filteredData = salesData.filter(item => item.year === year);

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        <header className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Sales Dashboard</h1>
          <div className="flex gap-2 bg-white p-1 rounded-lg border shadow-sm">
            <button onClick={() => setType('bar')} className={`p-2 rounded ${type === 'bar' ? 'bg-blue-50 text-blue-600' : 'text-gray-400'}`}><BarChart3 size={20}/></button>
            <button onClick={() => setType('line')} className={`p-2 rounded ${type === 'line' ? 'bg-blue-50 text-blue-600' : 'text-gray-400'}`}><LineIcon size={20}/></button>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <YearFilter selectedYear={year} setSelectedYear={setYear} />
          <div className="md:col-span-3">
            <SalesChart data={filteredData} chartType={type} />
          </div>
        </div>
      </div>
    </main>
  );
}
