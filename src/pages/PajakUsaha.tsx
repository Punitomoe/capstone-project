import React from "react";
import Layout from "../layout/Layout";
import "../style/Konten.css";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link } from "react-router-dom";

function PajakUsaha() {
  return (
    <>
      <Layout>
        <div className="indexKendaraan">
          <div className="breadcrumbs">
            <Link to="/menu"> Menu </Link>
            <NavigateNextIcon />
            <Link to="/menu/pajak"> Pajak </Link>
            <NavigateNextIcon />
            <p>Pajak Usaha</p>
          </div>
          <div className="containing">
          <center>
            <div className="judul">
              <h1>Pajak Usaha</h1>
            </div>
            <div className="vidio">
              <iframe
                title="Penghitungan PPh Orang Pribadi Usaha/Pekerjaan Bebas"
                width="724"
                height="385"
                src="https://www.youtube.com/embed/SuYBHrVe1gg"
                alt="Penghitungan PPh Orang Pribadi Usaha/Pekerjaan Bebas"
              />
            </div>
            <div className="content">
              <h3>Mengapa perlu membayar pajak usaha?</h3>
              <p>
                Pajak usaha adalah pajak yang dikenakan pada pelaku usaha
                berdasarkan nominal omzet yang didapat. nah sobat redi pasti
                bertanya-tanya, apasih manfaat dari membayar pajak usaha? kan
                kita sendiri yang membangun usaha, membangun nama, menaikkan
                penjualan dan lain-lain, eh tapi kok tetep aja harus membayar
                pajak? pajak usaha bertujuan sebagai kontrol pada sumbangsih
                kita pada pemerataan kekayaan di masyarakat Indonesia. Tentu hal
                ini juga berguna untuk menaikkan citra negara dan akhirnya roda
                bisnis yang bersifat iinternasional dapat terbangun dengan baik.
                Nah tentu akhirnya imbas dari membayar pajak akan merata ke
                seluruh rakyat di negeri ini.
              </p>
              <h3>
                Kapan dan bagaimana saya sebagai pemilik usaha membayar pajak
                saya?
              </h3>
              <p>
                Pajak usaha, baru diberlakukan setelah 12 bulan terhitung dari
                mulai berdirinya suatu usaha. Pembayaran pajaknya pun dilakukan
                setahun sekali sama seperti pajak karyawan. Tempat untuk
                membayar pajak tentu bisa dilakukan secara langsung di dirjen
                pajak terdekat atau online melalui djponline.pajak.go.id
              </p>
            </div>
            </center>
          </div>
        </div>
      </Layout>
    </>
  );
}
export default PajakUsaha;