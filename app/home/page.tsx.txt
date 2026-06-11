'use client'

export default function HomePage() {
  return (
    <div className="container mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-green-700">Dashboard Kesiswaan</h2>
        <p className="text-gray-500">Sistem Data & Absensi SMK AL HUDA TURALAK</p>
        <hr className="my-4 border-green-300" />
      </div>

      {/* Statistik ringkas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-green-50 shadow rounded-lg p-4 text-center">
          <h6 className="text-gray-600">Total Siswa</h6>
          <h3 className="text-green-700 font-bold text-xl">0</h3>
        </div>
        <div className="bg-green-50 shadow rounded-lg p-4 text-center">
          <h6 className="text-gray-600">Siswa TRK</h6>
          <h3 className="text-green-700 font-bold text-xl">0</h3>
        </div>
        <div className="bg-green-50 shadow rounded-lg p-4 text-center">
          <h6 className="text-gray-600">Jurusan</h6>
          <h3 className="text-green-700 font-bold text-xl">6</h3>
        </div>
        <div className="bg-green-50 shadow rounded-lg p-4 text-center">
          <h6 className="text-gray-600">Total Kelas</h6>
          <h3 className="text-green-700 font-bold text-xl">19</h3>
        </div>
      </div>

      {/* Grafik jumlah siswa per jurusan */}
      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <h5 className="font-bold text-green-700 mb-3">Grafik Jumlah Siswa per Jurusan</h5>
        <canvas id="chartJurusan"></canvas>
      </div>

      {/* Daftar jurusan & kelas */}
      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <h5 className="font-bold text-green-700 mb-3">Daftar Jurusan & Kelas (Siswa Turalak)</h5>
        <p className="text-gray-500 mb-3">
          Data berikut hanya menampilkan jumlah siswa dengan pangkalan TRK (Turalak).
        </p>
        <table className="table-auto w-full border border-green-200 text-center">
          <thead className="bg-green-100">
            <tr>
              <th className="border p-2">Jurusan</th>
              <th className="border p-2">Kelas X</th>
              <th className="border p-2">Kelas XI</th>
              <th className="border p-2">Kelas XII</th>
            </tr>
          </thead>
          <tbody>
            {['LPS','MPLB','DKV','TKJ','TKRO','TF'].map((j) => (
              <tr key={j}>
                <td className="border p-2">{j}</td>
                <td className="border p-2">0</td>
                <td className="border p-2">0</td>
                <td className="border p-2">0</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
