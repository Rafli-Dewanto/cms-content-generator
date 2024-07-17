import { bankTabs } from "@/helper/constants";

const BsiTabContent = () => {
  const {
    bsi: { id, imageSource, imageAlt },
  } = bankTabs;

  return (
    <section className={`mx-auto mt-1 w-full py-4 peer-checked/${id}:block lg:w-[810px]`}>
      <div className="border border-[#dedede] p-4">
        <img className="mx-auto mb-5 block" src={imageSource} alt={imageAlt} width={160} />
        <div className="p-4">
          <p className="text-sm font-bold">Bebas 1 bulan cicilan</p>
          <ul className="mb-3 list-disc pl-4">
            <li className="text-sm">
              Nikmati bebas 1 bulan cicilan dengan cicilan 0% tenor 24 bulan untuk produk iPhone 15,
              iPhone 15 Plus, iPhone 15 Pro, dan iPhone 15 Pro Max.
            </li>
            <li className="text-sm">
              Promo berlaku untuk pembayaran menggunakan Kartu Kredit BSI. Untuk mendapatkan promo,
              Konsumen wajib memilih metode pembayaran sesuai tenor cicilan promo yang berlaku.
            </li>
            <li className="text-sm">
              Pada saat checkout pesanan, akan ada potongan Rp 1 sebagai penanda bahwa Konsumen
              berhak mendapatkan promo bebas 1 bulan cicilan. Apabila tidak ada potongan Rp 1,
              artinya kuota promo telah habis.
            </li>
            <li className="text-sm">
              Promo berlaku untuk Pre-Order di toko iBox dan website iBox.co.id.
            </li>
            <li className="text-sm">Kuota terbatas, syarat dan ketentuan berlaku.</li>
          </ul>
          <p className="text-sm font-bold">Hemat hingga Rp 1.500.000</p>
          <ul className="list-disc pl-4">
            <li className="text-sm">
              Promo berlaku untuk pembelian produk iPhone 15, iPhone 15 Plus, iPhone 15 Pro, dan
              iPhone 15 Pro Max.
            </li>
            <li className="text-sm">
              Potongan Rp 500.000 untuk transaksi Rp 10.000.000 - Rp 19.999.999.
            </li>
            <li className="text-sm">
              Potongan Rp 1.000.000 untuk transaksi Rp 20.000.000 - Rp 29.999.999.
            </li>
            <li className="text-sm">
              Potongan Rp 1.500.000 untuk transaksi minimal Rp 30.000.000.
            </li>
            <li className="text-sm">
              Promo berlaku untuk pembayaran dengan cicilan 0% 3 / 6 / 12 / 24 bulan menggunakan
              Kartu Kredit BSI.
            </li>
            <li className="text-sm">Promo berlaku untuk Pre-Order di toko iBox.</li>
            <li className="text-sm">
              Promo berlaku untuk transaksi tukar tambah dan transaksi gabungan dengan produk
              lainnya.
            </li>
            <li className="text-sm">Kuota terbatas, syarat dan ketentuan berlaku.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BsiTabContent;
