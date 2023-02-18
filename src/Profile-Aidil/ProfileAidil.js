import React from "react";
import "./ProfileAidil.css";
import "bootstrap/dist/css/bootstrap.min.css";

const ProfileAidil = () => {
return (
<div>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
<a className="navbar-brand" href="#">
Profil Aidil
</a>
<button
       className="navbar-toggler"
       type="button"
       data-toggle="collapse"
       data-target="#navbarNav"
       aria-controls="navbarNav"
       aria-expanded="false"
       aria-label="Toggle navigation"
     >
<span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarNav">
<ul className="navbar-nav">
<li className="nav-item">
<a className="nav-link" href="#pendidikan">
Pendidikan
</a>
</li>
<li className="nav-item">
<a className="nav-link" href="#pengalaman">
Pengalaman
</a>
</li>
<li className="nav-item">
<a className="nav-link" href="#keahlian">
Keahlian
</a>
</li>
<li className="nav-item">
<a className="nav-link" href="#portfolio">
Portfolio
</a>
</li>
<li className="nav-item">
<a className="nav-link" href="#kontak">
Kontak
</a>
</li>
</ul>
</div>
</nav>
<div className="profile-container">
    <div className="header">
      <h1>Profil Aidil</h1>
    </div>
    <div className="profile-info">
      <div className="profile-image">
        <img
          src="https://via.placeholder.com/200x200"
          alt="profile-image"
        />
      </div>
      <div className="info">
        <h3>Biodata</h3>
        <ul>
          <li>
            <strong>Nama:</strong> Aidil
          </li>
          <li>
            <strong>Umur:</strong> 27 tahun
          </li>
          <li>
            <strong>Alamat:</strong> Jakarta
          </li>
          <li>
            <strong>Email:</strong> aidil@email.com
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div id="pendidikan" className="education-container">
    <h2>Riwayat Pendidikan</h2>
    <ul>
      <li>
        <strong>Tahun:</strong> 2016-2020
        </li>
      <li>
        <strong>Institusi:</strong> Universitas X
      </li>
      <li>
        <strong>Bidang Studi:</strong> Teknik Informatika
      </li>
    </ul>
  </div>
  <div id="pengalaman" className="work-experience-container">
    <h2>Pengalaman Kerja</h2>
    <ul>
      <li>
        <strong>Tahun:</strong> 2020-Sekarang
      </li>
      <li>
        <strong>Perusahaan:</strong> PT Y
      </li>
      <li>
        <strong>Jabatan:</strong> Full Stack Developer
      </li>
    </ul>
  </div>
  <div id="keahlian" className="skills-container">
    <h2>Keahlian</h2>
    <ul>
      <li>JavaScript</li>
      <li>ReactJS</li>
      <li>NodeJS</li>
      <li>ExpressJS</li>
    </ul>
  </div>
  <div id="portfolio" className="portfolio-container">
    <h2>Portfolio</h2>
    <ul>
      <li>
        <strong>Nama Proyek:</strong> Aplikasi X
      </li>
      <li>
        <strong>Tahun:</strong> 2022
      </li>
      <li>
        <strong>Deskripsi:</strong> Aplikasi X adalah sebuah aplikasi
        berbasis web yang membantu pengguna dalam mengelola tugas dan
        prioritas mereka.
      </li>
    </ul>
  </div>
  <div id="kontak" className="contact-container">
    <h2>Kontak</h2>
    <form>
      <div className="form-group">
        <label htmlFor="nama">Nama</label>
        <input
          type="text"
          className="form-control"
          id="nama"
          placeholder="Masukkan Nama"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Masukkan Email"
        />
      </div>
      <div className="form-group">
        <label htmlFor="pesan">Pesan</label>
        <textarea
          className="form-control"
          id="pesan"
          rows="3"
          placeholder="Masukkan Pesan"
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Kirim
      </button>
    </form>
  </div>
  <footer className="footer">
    <p>© 2023 Aidil - Semua Hak Dilindungi.</p>
  </footer>
 
  <div id="kontak" className="contact-container">
    <h2>Kontak</h2>
    <ul>
      <li>
        <strong>Email:</strong> aidil@email.com
      </li>
      <li>
        <strong>Telepon:</strong> +62 123 456 789
      </li>
      <li>
        <strong>Sosial Media:</strong>
        <a href="https://www.linkedin.com/in/aidil">LinkedIn</a>
      </li>
    </ul>
  </div>
</div>
);
};
export default ProfileAidil;