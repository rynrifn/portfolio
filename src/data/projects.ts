import type { Project } from "@/types";

export const featuredProjects: Project[] = [
  {
      id: "sistem-akademik",
      title: "Sistem Akademik",
      subtitle: { id: "Aplikasi Web Manajemen Akademik", en: "Academic Management Web App" },
      description: {
        id: "Project mata kuliah Pemrograman Web. Aplikasi web untuk mengelola data akademik seperti mahasiswa, mata kuliah, dan nilai. Dibangun dengan Laravel 12 dan MySQL, dilengkapi fitur CRUD lengkap, authentication, dan export data.",
        en: "Web Programming course project. Web application to manage academic data such as students, courses, and grades. Built with Laravel 12 and MySQL, features full CRUD, authentication, and data export.",
      },
      tech: ["Laravel 12", "MySQL", "Bootstrap 5", "PHP"],
      highlights: [
        { id: "Authentication & role-based access", en: "Authentication & role-based access" },
        { id: "CRUD mahasiswa & mata kuliah", en: "CRUD students & courses" },
        { id: "Dashboard dengan statistik", en: "Dashboard with statistics" },
      ],
      image: "/images/sistem-akademik.png",
      github: "https://github.com/rynrifn/sistem-akademik-main",
      category: "featured",
    },
  {
      id: "youtube-transcript-api",
      title: "YouTube Transcript API",
      subtitle: { id: "REST API Transcript YouTube", en: "REST API for YouTube Transcripts" },
      description: {
        id: "Project magang di PT Minato Teknologi Global. REST API untuk mengekstrak transcript video YouTube menggunakan yt-dlp. Mendukung multiple bahasa, format timestamp, dan dijalankan dalam Docker container untuk portabilitas.",
        en: "Internship project at PT Minato Teknologi Global. REST API to extract YouTube video transcripts using yt-dlp. Supports multiple languages, timestamp format, and runs in Docker container for portability.",
      },
      tech: ["Node.js", "Express.js", "yt-dlp", "Docker", "REST API"],
      highlights: [
        { id: "Endpoint untuk extract transcript by video ID", en: "Endpoint to extract transcript by video ID" },
        { id: "Support multiple bahasa & format timestamp", en: "Multiple languages & timestamp formats" },
        { id: "Dockerized untuk portabilitas", en: "Dockerized for portability" },
      ],
      image: "/images/youtube-api.png",
      github: "https://gitlab.com/rynrifn-group/youtube-transcript-api",
      category: "featured",
    },
  {
      id: "lq-studio",
      title: "LQ Studio — Quality Assurance",
      subtitle: { id: "Manual QA Testing", en: "Manual QA Testing" },
      description: {
        id: "Project magang di PT Minato Teknologi Global. Melakukan manual testing terhadap aplikasi LQ Studio. Menyusun 140 test scenarios untuk 6 modul utama, mengidentifikasi 4 critical bugs, dan mendokumentasikan semuanya dalam spreadsheet terstruktur.",
        en: "Internship project at PT Minato Teknologi Global. Performed manual testing on LQ Studio application. Created 140 test scenarios across 6 main modules, identified 4 critical bugs, and documented everything in structured spreadsheets.",
      },
      tech: ["Manual Testing", "Black-box Testing", "Google Sheets", "DevTools"],
      highlights: [
        { id: "140 test scenarios", en: "140 test scenarios" },
        { id: "6 modul utama diuji", en: "6 main modules tested" },
        { id: "4 critical bugs ditemukan & didokumentasi", en: "4 critical bugs found & documented" },
      ],
      image: "/images/lq-studio.png",
      category: "featured",
    },
  {
      id: "duitku",
      title: "Duitku",
      subtitle: { id: "Personal Finance Tracker", en: "Personal Finance Tracker" },
      description: {
        id: "Project mata kuliah Pemrograman Web. Aplikasi pencatat pengeluaran harian dengan pendekatan local-first. Data disimpan di browser user sehingga tidak perlu daftar akun. Dilengkapi dashboard dengan chart, insight otomatis, dan budget tracker per kategori.",
        en: "Web Programming course project. A local-first expense tracker web app. Data stored in user's browser so no sign-up needed. Features dashboard with charts, automatic insights, and per-category budget tracker.",
      },
      tech: ["Next.js 16", "React 19", "TypeScript", "Tailwind v4", "Recharts", "localStorage"],
      highlights: [
        { id: "Zero-friction: tanpa daftar akun", en: "Zero-friction: no sign-up required" },
        { id: "Pie chart & bar chart interaktif", en: "Interactive pie & bar charts" },
        { id: "Insight otomatis deteksi pola boros", en: "Automatic spending pattern insights" },
        { id: "Budget tracker dengan progress bar", en: "Budget tracker with progress bars" },
      ],
      image: "/images/duitku.png",
      github: "https://github.com/rynrifn/Duitku-personal-finance-tracker",
      category: "featured",
    },
  {
      id: "novelverse",
      title: "NovelVerse",
      subtitle: { id: "Platform Baca & Kelola Novel", en: "Novel Reading & Management Platform" },
      description: {
        id: "Project mata kuliah Mobile Programming. Aplikasi mobile untuk membaca dan mengelola novel dengan fitur autentikasi Firebase, katalog buku, pencarian, statistik bacaan, dan CRUD novel. Dibangun dengan Flutter dan Firebase (Auth + Firestore).",
        en: "Mobile Programming course project. Mobile app to read and manage novels with Firebase authentication, book catalog, search, reading statistics, and CRUD features. Built with Flutter and Firebase (Auth + Firestore).",
      },
      tech: ["Flutter", "Dart", "Firebase Auth", "Firestore", "Android"],
      highlights: [
        { id: "Authentication Firebase (Email/Password)", en: "Firebase Authentication (Email/Password)" },
        { id: "CRUD novel: tambah, edit, hapus", en: "Novel CRUD: create, edit, delete" },
        { id: "Pencarian & filter genre", en: "Search & filter by genre" },
        { id: "Statistik bacaan user (Total Novels, Member Since)", en: "User reading stats (Total Novels, Member Since)" },
        { id: "Clean UI dengan tema gold/amber", en: "Clean UI with gold/amber theme" },
      ],
      image: "/images/novelverse.png",
      github: "https://github.com/SidqiRaafi/NovelVerse",
      category: "featured",
    },
  {
      id: "sirs",
      title: "SIRS — Sistem Informasi Rumah Sakit",
      subtitle: { id: "UI/UX Design — Mobile App", en: "UI/UX Design — Mobile App" },
      description: {
        id: "Desain UI/UX aplikasi mobile Sistem Informasi Rumah Sakit (SIRS) menggunakan Figma. Aplikasi ini memudahkan user mencari rumah sakit, melihat ketersediaan kamar, dan mengakses layanan kesehatan. Dilengkapi fitur Praktek Pribadi untuk dokter mengelola jadwal konsultasi.",
        en: "UI/UX design of a mobile Hospital Information System (SIRS) application using Figma. The app helps users find hospitals, check room availability, and access health services. Includes a Private Practice feature for doctors to manage consultation schedules.",
      },
      tech: ["Figma", "UI/UX Design", "Mobile Design", "Prototyping"],
      highlights: [
        { id: "10+ screen dengan flow lengkap", en: "10+ screens with complete flow" },
        { id: "Design system konsisten", en: "Consistent design system" },
        { id: "Fitur pencarian rumah sakit & ketersediaan kamar", en: "Hospital search & room availability" },
        { id: "Fitur Praktek Pribadi untuk dokter", en: "Private Practice feature for doctors" },
      ],
      image: "/images/sirs.png",
      github: "https://www.figma.com/design/TtMj4bjmhp4b9JtFdRz65Q/Untitled?node-id=0-1",
      category: "featured",
    },
];

export const otherProjects: Project[] = [
  {
    id: "exploremap",
    title: "ExploreMap",
    subtitle: { id: "Aplikasi Peta Lokasi", en: "Location Map App" },
    description: {
      id: "Project UTS mata kuliah Pemrograman Mobile 2. Aplikasi mobile berbasis Flutter untuk eksplorasi lokasi dengan Google Maps API, search, filter kategori, marker, dan authentication.",
      en: "Midterm project for Mobile Programming 2 course. Flutter mobile app for location exploration with Google Maps API, search, category filter, markers, and authentication.",
    },
    tech: ["Flutter", "Dart", "Google Maps API"],
    highlights: [],
    image: "/images/exploremap.png",
    github: "https://github.com/rynrifn/Rifki_Febrian_UTS_PEMMOB2",
    category: "other",
  },
  {
    id: "digipustaka",
    title: "DigiPustaka",
    subtitle: { id: "Sistem Perpustakaan Digital", en: "Digital Library System" },
    description: {
      id: "Project mata kuliah Pemrograman Web. Sistem informasi perpustakaan berbasis web untuk manajemen buku, anggota, dan peminjaman.",
      en: "Web Programming course project. Web-based library information system for managing books, members, and borrowings.",
    },
    tech: ["PHP", "MySQL", "Bootstrap"],
    highlights: [],
    image: "/images/digipustaka.png",
    github: "https://github.com/rynrifn/DigiPustaka",
    category: "other",
  },
];
