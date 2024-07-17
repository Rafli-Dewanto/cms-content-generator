export function formatRupiah(amount: number) {
  if (!amount || amount === 0) {
    return "";
  }

  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 2,
  }).format(amount);
}
