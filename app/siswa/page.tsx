'use client'

export default function SiswaPage() {
  const siswa = [
    { id: 1, nama: 'Budi', kelas: 'X-TKJ', jurusan: 'TKJ', pangkalan: 'TRK' },
    { id: 2, nama: 'Siti', kelas: 'XI-DKV', jurusan: 'DKV', pangkalan: 'TRK' },
  ]

  return (
    <div className="container mx-auto mt-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-green-700">Data Siswa</h2>
        <p className="text-gray-500">Daftar siswa SMK AL HUDA TURALAK</p>
        <hr className="my-4 border-green-300" />
      </div>

      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 mb-4">
          + Tambah Siswa
        </button>
        <table className="table-auto w-full border border-green-200 text-center">
          <thead className="bg-green-100">
            <tr>
              <th className="border p-2">Nama</th>
              <th className="border p-2">Kelas</th>
              <th className="border p-2">Jurusan</th>
              <th className="border p-2">Pangkalan</th>
              <th className="border p-2">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {siswa.map((s) => (
              <tr key={s.id}>
                <td className="border p-2">{s.nama}</td>
                <td className="border p-2">{s.kelas}</td>
                <td className="border p-2">{s.jurusan}</td>
                <td className="border p-2">{s.pangkalan}</td>
                <td className="border p-2">
                  <button className="text-blue-600 hover:underline mr-2">Edit</button>
                  <button className="text-red-600 hover:underline">Hapus</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
