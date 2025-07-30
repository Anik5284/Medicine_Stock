// app/viewrecord/page.tsx

export default function ViewRecordPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-8">
      <h1 className="text-2xl font-bold mb-6">View Records</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 text-sm text-left">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-3 border-b">Batch No</th>
              <th className="px-4 py-3 border-b">Med Name</th>
              <th className="px-4 py-3 border-b">Manf. Name</th>
              <th className="px-4 py-3 border-b">Manf. Date</th>
              <th className="px-4 py-3 border-b">Exp. Date</th>
              <th className="px-4 py-3 border-b">Buying Cost</th>
              <th className="px-4 py-3 border-b">MRP</th>
              <th className="px-4 py-3 border-b">Discount Cost</th>
              <th className="px-4 py-3 border-b">Consumer Cost</th>
              <th className="px-4 py-3 border-b">Prescription</th>
            </tr>
          </thead>
          <tbody>
            {/* Future data rows go here */}
          </tbody>
        </table>
      </div>
    </div>
  );
}
