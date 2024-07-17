import { Red_Hat_Display } from "next/font/google";
import React from "react";

const redHatDisplay = Red_Hat_Display({ subsets: ["latin"] });

type Props = {
  children: React.ReactNode;
};

function TNC(props: Props) {
  const { children } = props;
  return (
    <details
      open
      className={`${redHatDisplay.className} rounded-md p-4 shadow-xl [&_svg]:open:-rotate-180`}
    >
      <summary className="flex cursor-pointer list-none items-center gap-4">
        <svg
          className="rotate-0 transform text-slate-950 transition-all duration-300"
          fill="none"
          height="20"
          width="20"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
        <h1 className="font-semibold">Syarat &amp; Ketentuan</h1>
      </summary>
      <section>
        <ol className="mx-5 mt-2 list-decimal px-5 py-2 text-left sm:px-10 sm:text-sm">
          <li style={{ wordBreak: "break-all" }}>
            Pintu dibuka mulai 26 Oktober 2023, dengan detil jam buka sebagai berikut:
            <div className="px-0 py-2 sm:px-8">{children}</div>
          </li>
          <li style={{ wordBreak: "break-all" }}>
            Pick up dimulai 27 Oktober 2023, pukul 00.01 WIB atau pukul 01.01 WITA hingga selesai.
          </li>
          <li style={{ wordBreak: "break-all" }}>
            Harap membawa invoice dan identitas diri sesuai invoice untuk melakukan pick up
            Pre-Order.
          </li>
          <li style={{ wordBreak: "break-all" }}>
            Pick up yang diwakilkan harus menyertakan surat kuasa bermaterai Rp 10.000, fotokopi KTP
            Si Pemberi Kuasa, fotokopi KTP Si Penerima Kuasa, invoice pembelian, dan kode
            pengambilan.
          </li>
          <li style={{ wordBreak: "break-all" }}>Satu invoice berlaku untuk satu akses.</li>
          <li style={{ wordBreak: "break-all" }}>
            Mystery Package tersedia dalam kuota terbatas dan berdasarkan urutan antrian Anda.
            <table className="w-full border-collapse border border-slate-400 bg-white shadow-sm">
              <tbody>
                <tr>
                  <td className="border border-slate-300 p-2 text-center" rowSpan={2}>
                    <p>List Store</p>
                  </td>
                  <td className="border border-slate-300 p-2 text-center" colSpan={3}>
                    <p>Antrian Mystery Gift</p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-300 p-2 text-center">Senilai 4 Juta</td>
                  <td className="border border-slate-300 p-2 text-center">Senilai 2.2 Juta</td>
                  <td className="border border-slate-300 p-2 text-center">Senilai 1.1 Juta</td>
                </tr>
                <tr>
                  <td className="border border-slate-300 p-2 text-center">
                    iBox Central Park (Jakarta)
                  </td>
                  <td className="border border-slate-300 p-2 text-center">Antrian 1-50</td>
                  <td className="border border-slate-300 p-2 text-center">Antrian 51-200</td>
                  <td className="border border-slate-300 p-2 text-center">Antrian 201-600</td>
                </tr>
                <tr>
                  <td className="border border-slate-300 p-2 text-center">iBox Riau (Bandung)</td>
                  <td className="border border-slate-300 p-2 text-center">Antrian 1-5</td>
                  <td className="border border-slate-300 p-2 text-center">Antrian 6-20</td>
                  <td className="border border-slate-300 p-2 text-center">Antrian 21-50</td>
                </tr>
                <tr className="border">
                  <td className="border border-slate-300 p-2 text-center">Allegra (Surabaya)</td>
                  <td className="border border-slate-300 p-2 text-center">Antrian 1-10</td>
                  <td className="border border-slate-300 p-2 text-center">Antrian 11-40</td>
                  <td className="border border-slate-300 p-2 text-center">Antrian 41-150</td>
                </tr>
                <tr className="border">
                  <td className="border border-slate-300 p-2 text-center">
                    iBox Teuku Umar (Bali)
                  </td>
                  <td className="border border-slate-300 p-2 text-center">Antrian 1-10</td>
                  <td className="border border-slate-300 p-2 text-center">Antrian 11-30</td>
                  <td className="border border-slate-300 p-2 text-center">Antrian 31-100</td>
                </tr>
                <tr className="border">
                  <td className="border border-slate-300 p-2 text-center">
                    Hotel Gammara (Makassar)
                  </td>
                  <td className="border border-slate-300 p-2 text-center">Antrian 1-15</td>
                  <td className="border border-slate-300 p-2 text-center">Antrian 15-50</td>
                  <td className="border border-slate-300 p-2 text-center">Antrian 51-250</td>
                </tr>
              </tbody>
            </table>
          </li>
          <li style={{ wordBreak: "break-all" }}>
            Gunakan pakaian dan alas kaki yang nyaman selama acara.
          </li>
          <li style={{ wordBreak: "break-all" }}>
            Tidak diperkenankan untuk membawa senjata tajam.
          </li>
          <li style={{ wordBreak: "break-all" }}>
            Dengan bergabung dengan acara Midnight Launch, Anda secara sadar menyetujui segala
            persyaratan di atas dan membebaskan Erajaya dari segala resiko yang terjadi pada sebelum
            hingga sesudah acara berlangsung.
          </li>
          <li style={{ wordBreak: "break-all" }}>
            Erajaya Group berhak merubah peraturan sewaktu-waktu.
          </li>
        </ol>
      </section>
    </details>
  );
}

export default TNC;
