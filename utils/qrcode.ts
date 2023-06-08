import QRCode from "qrcode";

export const createQrcode = async (url: string, width: number) => {
  return await QRCode.toDataURL(url, {
    width,
    margin: 0,
    errorCorrectionLevel: "M",
  });
};
