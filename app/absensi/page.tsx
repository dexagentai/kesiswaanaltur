'use client'

export default function AbsensiPage() {
  const siswa = [
    { id: 1, nama: 'Budi', jurusan: 'TKJ' },
    { id: 2, nama: 'Siti', jurusan: 'DKV' },
  ]

  return (
    <div className="container mx-auto mt-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-green-700">Template Absensi</h2>
        <p className="text-gray-500">Absensi siswa per kelas (1–31)</p>
        <hr className="my-4 border-green-300" />
      </div>

      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <table className="table-auto w-full border border-green-200 text-center">
          <thead className="bg-green-100">
            <tr>
              <th className="border p-2">Nama</th>
              <th className="border p-2">Jurusan</th>
              {Array.from({ length: 31 }, (_, i) => (
                <th key={i} className="border p-2">{i + 1}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {siswa.map((s) => (
              <tr key={s.id}>
                <td className="border p-2">{s.nama}</td>
                <td className="border p-2">{s.jurusan}</td>
                {Array.from({ length: 31 }, (_, i) => (
                  <td key={i} className="border p-2"></td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
