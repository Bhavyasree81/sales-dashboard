export interface SalesRecord {
  year: number;
  month: string;
  amount: number;
}
export const salesData: SalesRecord[] = [
  { year: 2022, month: "Jan", amount: 4500 },
  { year: 2022, month: "Feb", amount: 5200 },
  { year: 2023, month: "Jan", amount: 6100 },
  { year: 2023, month: "Feb", amount: 5900 },
  { year: 2024, month: "Jan", amount: 8400 },
  { year: 2024, month: "Feb", amount: 9100 },
];