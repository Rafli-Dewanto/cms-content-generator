import { bankTabs } from "@/helper/constants";

const MaybankTabContent = () => {
  const {
    maybank: { id, imageSource, imageAlt },
  } = bankTabs;

  return (
    <section className={`mx-auto mt-1 w-full py-4 peer-checked/${id}:block lg:w-[810px]`}>
      <div className="border border-[#dedede] p-4">
        <img className="mx-auto mb-5 block" src={imageSource} alt={imageAlt} width={160} />
        <div className="p-4">
          <p className="text-sm font-bold">Bebas hingga 2 bulan cicilan</p>
          <ul className="mb-3 list-disc pl-4">
            <li className="text-sm">
              Nikmati bebas 1 bulan cicilan dengan cicilan 0% tenor 12 bulan untuk produk iPhone 15,
              iPhone 15 Plus, iPhone 15 Pro, dan iPhone 15 Pro Max.
            </li>
            <li className="text-sm">
              Nikmati bebas 2 bulan cicilan dengan cicilan 0% tenor 24 bulan untuk produk iPhone 15,
              iPhone 15 Plus, iPhone 15 Pro, dan iPhone 15 Pro Max.
            </li>
            <li className="text-sm">
              Promo berlaku untuk pembayaran menggunakan Kartu Kredit Maybank. Untuk mendapatkan
              promo, Konsumen wajib memilih metode pembayaran sesuai tenor cicilan promo yang
              berlaku.
            </li>
            <li className="text-sm">
              Pada saat checkout pesanan, akan ada potongan Rp 1 sebagai penanda bahwa Konsumen
              berhak mendapatkan promo bebas hingga 2 bulan cicilan. Apabila tidak ada potongan Rp
              1, artinya kuota promo telah habis.
            </li>
            <li className="text-sm">
              Promo berlaku untuk Pre-Order di toko iBox dan website iBox.co.id.
            </li>
            <li className="text-sm">Kuota terbatas, syarat dan ketentuan berlaku.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MaybankTabContent;
