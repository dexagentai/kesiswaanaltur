'use client'

export default function AdministrasiPage() {
  const dokumen = [
    { nama: 'Surat Izin Siswa.docx', path: '/dokumen/surat_izin_siswa.docx' },
    { nama: 'Surat Izin Guru.pdf', path: '/dokumen/surat_izin_guru.pdf' },
    { nama: 'Formulir Izin Kegiatan.xlsx', path: '/dokumen/formulir_izin_kegiatan.xlsx' },
    { nama: 'Rekap Absensi Bulanan.xlsx', path: '/dokumen/rekap_absensi_bulanan.xlsx' },
  ]

  return (
    <div className="container mx-auto mt-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-green-700">Menu Administrasi</h2>
        <p className="text-gray-500">Dokumen administrasi sekolah yang siap diunduh.</p>
        <hr className="my-4 border-green-300" />
      </div>

      {/* Grid card dokumen */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {dokumen.map((file) => (
          <div key={file.nama} className="bg-green-50 shadow rounded-lg p-6 text-center">
            <i className="bi bi-file-earmark-text text-green-700 text-4xl mb-3"></i>
            <h5 className="font-bold text-green-700 mb-2">{file.nama}</h5>
            <a
              href={file.path}
              download
              className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
            >
              Unduh
            </a>
          </div>
        ))}
      </div>

      <footer className="text-center text-gray-500 mt-6">
        <small>© 2026 SMK AL HUDA TURALAK — Administrasi Sekolah</small>
      </footer>
    </div>
  )
}
