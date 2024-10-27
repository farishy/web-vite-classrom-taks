export const generateKey = (baseString, index) => {
  const timestamp = Date.now();
  const array = new Uint32Array(1);
  window.crypto.getRandomValues(array);
  const randomNum = array[0] % 1000000;
  return `${baseString}-${index}-${timestamp}-${randomNum}`;
};

export const formatToRupiah = (amount) => {
  const numberString = amount.toString();
  const split = numberString.split(",");
  let sisa = split[0].length % 3;
  let rupiah = split[0].substr(0, sisa);
  const ribuan = split[0].substr(sisa).match(/\d{3}/gi);

  if (ribuan) {
    const separator = sisa ? "." : "";
    rupiah += separator + ribuan.join(".");
  }

  rupiah = split[1] !== undefined ? rupiah + "," + split[1] : rupiah;
  return "Rp " + rupiah; // Adding "Rp" symbol
};
