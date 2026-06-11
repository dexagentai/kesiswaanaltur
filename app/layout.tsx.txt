'use client'

import Link from 'next/link'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="bg-gray-50">
        <nav className="bg-green-700 text-white px-6 py-3 flex justify-between items-center shadow">
          <h1 className="font-bold text-lg">SMK AL HUDA TURALAK</h1>
          <ul className="flex gap-6">
            <li><Link href="/home" className="hover:text-green-200">Dashboard</Link></li>
            <li><Link href="/siswa" className="hover:text-green-200">Data Siswa</Link></li>
            <li><Link href="/absensi" className="hover:text-green-200">Template Absensi</Link></li>
            <li><Link href="/administrasi" className="hover:text-green-200">Administrasi</Link></li>
          </ul>
        </nav>
        <main className="p-6">{children}</main>
        <footer className="text-center text-gray-500 mt-6">
          <small>© 2026 SMK AL HUDA TURALAK — Sistem Kesiswaan Terintegrasi</small>
        </footer>
      </body>
    </html>
  )
}
