import React from "react";
import "../../style/Konten.css";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link } from "react-router-dom";

const LegalDokumenSIM = () => {
  return (
    <>
      <div className="indexKendaraan mb-5 pb-5">
        <div className="breadcrumbs">
          <Link to="/menu"> Menu </Link>
          <NavigateNextIcon />
          <Link to="/menu/dokumen"> Legal Dokumen </Link>
          <NavigateNextIcon />
          <p>SIM</p>
        </div>
        <div className="containing">
          <div className="text-center">
            <div className="judul">
              <h1>Pengurusan pembuatan SIM</h1>
            </div>
            <div className="vidio">
              <iframe
                title="d'Tutorial Pembuatan SIM"
                width="724"
                height="385"
                src="https://www.youtube.com/embed/QDSZxPKy6kA"
              />
            </div>
            <div className="content">
              <h3>
                Apa persyaratan berkas yang harus dibawa seseorang agar bisa
                mendapatkan SIM?
              </h3>
              <p>
                Mengutip dari Peraturan Kepolisian (Perpol) Nomor 5 Tahun 2021
                tentang Penerbitan dan Penandaan SIM, dijelaskan mengenai
                sejumlah persyaratan untuk mengurus SIM baru, yakni:
                <br></br>- Usia
                <br></br>- Administrasi Kesehatan
                <br></br>- Lulus ujian
                <h3 className="text-center">Usia Persyaratan</h3>
                Usia untuk penerbitan SIM baru harus memenuhi ketentuan usia
                paling rendah yang disesuaikan dengan jenis SIM.
                <li className="mt-2">
                  17 (tujuh belas) tahun untuk SIM A, SIM C, SIM D dann SIM DI{" "}
                </li>
                <li>18 (delapan belas) tahun untuk SIM CI </li>
                <li>19 (sembilan belas) tahun untuk SIM CII </li>
                <li>20 (dua puluh) tahun untuk SIM A umum dan SIM BI</li>
                <li>21 (dua puluh satu) tahun untuk SIM BII </li>
                <li>22 (dua puluh dua) tahun untuk SIM BI umum </li>
                <li>23 (dua puluh tiga) tahun untuk SIM BII umum.</li>
                <br></br>
                <br></br>
                <h3 className="text-center">Syarat membuat SIM </h3>
                <div className="mb-2">
                  Kemudian, persyaratan administrasi untuk penerbitan SIM
                  dilakukan dengan ketentuan:
                </div>
                1. Mengisi dan menyerahkan formulir pendaftaran SIM secara
                manual atau menunjukkan tanda bukti pendaftaran secara
                elektronik.
                <br></br>2. Melampirkan fotokopi dan memperlihatkan identitas
                diri Kartu Tanda Penduduk (KTP) elektronik bagi WNI atau dokumen
                keimigrasian bagi WNA.
                <br></br>3. Melampirkan fotokopi sertifikat pendidikan dan
                pelatihan mengemudi yang asli yang dikeluarkan oleh sekolah
                mengemudi terakreditas, paling lama 6 bulan sejak tanggal
                diterbitkan.
                <br></br>4. Melampirkan fotokopi surat izin kerja asli dari
                kementerian yang membidangi ketenagakerjaan bagi warga negara
                asing yang bekerja di Indonesia.
                <br></br>5. Melaksanakan perekaman biometri berupa sidik jari
                dan/atau pengenalan wajah maupun retina mata.
                <br></br>6. Menyerahkan bukti pembayaran penerimaan negara bukan
                pajak.
              </p>
              <h3>Syarat kesehatan </h3>
              <p>
                Untuk membuat SIM Persyaratan kesehatan untuk penerbitan SIM
                meliputi kesehatan jasmani dan kesehatan rohani.
                <br></br>Kesehatan jasmani:
                <br></br>- Penglihatan
                <br></br>- Pendengaran
                <br></br>- Fisik anggota gerak dan perawakan fisik lain.
              </p>
              <p>
                Adapun pemeriksaan kesehatan jasmani dilakukan oleh dokter Polri
                atau dokter umum yang telah mendapat rekomendasi dari Pusat
                Kedokteran dan Kesehatan Polri atau Bidang Kedokteran dan
                Kesehatan Kepolisian Daerah, dan dibuktikan dengan surat
                keterangan dokter. Surat keterangan dokter dapat digunakan
                paling lama 14 (empat belas) hari sejak diterbitkan.
                <br></br>Kesehatan rohani:
                <br></br>- Kemampuan kognitif
                <br></br>- Kemampuan psikomotorik
                <br></br>- Kepribadian<br></br>
                Pemeriksaan psikologi dilakukan oleh psikolog Polri atau
                psikolog di luar Polri yang telah mendapat rekomendasi dari Biro
                Psikologi Staf Sumber Daya Manusia Polri atau Bagian Psikologi
                Biro Sumber Daya Manusia Kepolisian Daerah. Pemeriksaan
                psikologi dibuktikan dengan surat keterangan lulus tes
                psikologi, dan dapat digunakan paling lama 6 (enam) bulan sejak
                diterbitkan.<br></br>
                <h3 className="text-center">
                  Biaya pembuatan/penerbitan SIM baru{" "}
                </h3>
                <br></br>
                <ul>
                  1. Biaya bikin baru SIM A adalah Rp 120.000 per penerbitan.
                </ul>
                <ul>
                  2. Biaya bikin baru SIM B I maupun SIM B II adalah Rp 120.000
                  per penerbitan.
                </ul>
                <ul>
                  3. Biaya bikin baru SIM C, SIM C I, SIM C II adalah Rp 100.000
                  per penerbitan.
                </ul>
                <ul>
                  4. Biaya bikin baru SIM D maupun SIM D II adalah Rp 50.000 per
                  penerbitan.
                </ul>
              </p>
              <h3>Mengapa kita harus membuat SIM?</h3>
              <p>
                SIM atau Surat Ijin Mengemudi adalah bukti kompetensi bagi
                seseorang yang telah lulus uji pengetahuan, kemampuan dan
                keterampilan mengemudi di jalan sesuai persyaratan yang
                ditentukan berdasarkan Undang-Undang Lalu Lintas dan Angkutan
                Jalan. Kompetensi mengemudi adalah kemampuan seseorang pengemudi
                dalam bidang pengetahuan, kemampuan, dan ketrampilan untuk
                mengemudikan kendaraan bermotor di jalan dengan benar sesuai
                pernyataan yang ditentukan berdasarkan Undang-Undang Nomor 22
                tahun 2009 tentang Lalu Lintas dan Angkutan Jalan.
                <br></br>
                <div className="mb-2 mt-4">
                  Fungsi SIM (surat ijin mengemudi) adalah :
                </div>
                1. Sebagai bukti kompetensi mengemudi,
                <br></br>2. Sebagai registrasi pengemudi kendaraan bermotor yang
                memuat keterangan identitas lengkap pengemudi,
                <br></br>3. Untuk mendukung kegiatan penyelidikan, penyidikan
                dan identifikasi forensik Kepolisian.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default LegalDokumenSIM;
