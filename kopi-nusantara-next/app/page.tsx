import MenuCard from "./components/MenuCard";
import FaqList from "./components/FaqList";

const menus = [
  {
    image: "/images/kopi-susu-gula-aren.jpeg",
    name: "Kopi Susu Gula Aren",
    description:
      "Espresso robusta lokal dipadukan susu segar dan gula aren asli.",
    price: "Rp 25.000",
  },
  {
    image: "/images/kopi-tubruk.jpeg",
    name: "Kopi Tubruk Nusantara",
    description:
      "Kopi hitam tradisional, diseduh kasar khas warung kopi rumahan.",
    price: "Rp 27.000",
  },
  {
    image: "/images/cappucino.jpeg",
    name: "Cappuccino",
    description:
      "Minuman kopi khas Italia yang dibuat dari perbandingan seimbang antara espreso, susu panas, dan busa susu.",
    price: "Rp 24.000",
  },
  {
    image: "/images/americano.jpeg",
    name: "Americano",
    description:
      "Minuman kopi hitam yang dibuat dengan mencampurkan satu atau dua shot espresso dengan air panas",
    price: "Rp 22.000",
  },
];

const faqs = [
  {
    question: "Apakah kopi yang digunakan asli dari petani lokal?",
    answer:
      "Ya, seluruh biji kopi yang kami gunakan berasal dari petani di berbagai daerah di Indonesia dan diseleksi langsung oleh tim kami.",
  },
  {
    question: "Apakah tersedia layanan pesan antar?",
    answer:
      "Tersedia. Kamu bisa memesan melalui WhatsApp di 0812-3456-7890 dan pesanan akan diantar ke area sekitar kedai.",
  },
  {
    question: "Bisakah tingkat kemanisan atau gula diatur sesuai selera?",
    answer:
      "Tentu. Kamu bisa meminta tingkat gula lebih sedikit, normal, atau lebih banyak saat memesan, baik langsung maupun via WhatsApp.",
  },
  {
    question: "Apakah ada menu kopi tanpa kafein atau non-kopi?",
    answer:
      "Saat ini fokus menu kami adalah racikan kopi. Untuk pilihan rendah kafein, kamu bisa memilih Kopi Susu Gula Aren dengan porsi espresso lebih sedikit — cukup sampaikan saat memesan.",
  },
  {
    question: "Apakah kedai buka setiap hari termasuk hari libur?",
    answer:
      "Kedai kami buka setiap hari, termasuk akhir pekan dan sebagian besar hari libur nasional, pukul 08.00 - 21.00 WIB.",
  },
];

export default function Home() {
  return (
    <>

      <header className="site-header">
        <div className="nav-wrap">
          <a href="#beranda" className="brand">
            Kopi Nusantara
          </a>

          <input type="checkbox" id="nav-toggle" className="nav-toggle" />
          <label
            htmlFor="nav-toggle"
            className="nav-burger"
            aria-label="Buka menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </label>

          <nav className="main-nav">
            <a href="#beranda">Beranda</a>
            <a href="#menu">Menu</a>
            <a href="#tentang">Tentang</a>
            <a href="#faq">FAQ</a>
            <a href="#kontak">Kontak</a>
          </nav>
        </div>
      </header>

      <section id="beranda" className="hero">
        <div className="hero-text">
          <h1>
            Secangkir Nusantara,
            <br />
            Diseduh dengan Cerita
          </h1>
          <p>
            Kedai kopi rumahan yang mengangkat biji kopi asli daerah. Diseduh
            hangat, disajikan dekat dengan rumahmu.
          </p>
          <a href="#menu" className="btn-primary">
            Lihat Menu
          </a>
        </div>
      </section>

      <main>
        <section id="menu" className="menu-section">
          <h2>Menu Favorit Kami</h2>
          <p className="section-lead">
            Dipilih dari biji kopi pilihan berbagai daerah di Indonesia.
          </p>
          <div className="menu-grid">
            {menus.map((menu) => (
              <MenuCard key={menu.name} {...menu} />
            ))}
          </div>
        </section>

        <section id="tentang" className="about-section">
          <div className="about-flex">
            <div className="about-text">
              <h2>Cerita Kami</h2>
              <p>
                Kopi Nusantara dimulai dari dapur rumah kecil dengan satu mesin
                seduh manual. Kami percaya kopi terbaik datang dari biji yang
                jujur dan proses yang sabar. Setiap cangkir yang kami sajikan
                membawa cerita petani kopi dari berbagai daerah di Indonesia.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat">
                <strong>7+</strong>
                <span>Daerah Asal Kopi</span>
              </div>
              <div className="stat">
                <strong>50+</strong>
                <span>Menu Racikan</span>
              </div>
              <div className="stat">
                <strong>3</strong>
                <span>Tahun Beroperasi</span>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="faq-section">
          <h2>Pertanyaan yang Sering Diajukan</h2>
          <p className="section-lead">
            Masih ada yang ingin ditanyakan? Klik pertanyaan di bawah untuk
            melihat jawabannya.
          </p>
          <FaqList items={faqs} />
        </section>
      </main>

      <footer id="kontak" className="site-footer">
        <div className="footer-grid">
          <div>
            <h3>Kopi Nusantara</h3>
            <p>Kedai kopi rumahan, dekat dengan rasa dan rumahmu.</p>
          </div>
          <div>
            <h3>Kontak</h3>
            <p>WhatsApp: 0812-3456-7890</p>
            <p>Email: ngopi@kopinusantara.id</p>
          </div>
          <div>
            <h3>Jam Buka</h3>
            <p>Setiap hari, Pukul 08.00 - 21.00 WIB</p>
          </div>
        </div>
        <p className="copyright">&copy; 2026 Kopi Nusantara</p>
      </footer>
    </>
  );
}