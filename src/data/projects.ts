import type { Project } from "@/types";

export const featuredProjects: Project[] = [
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
    id: "novelverse",
    title: "NovelVerse",
    subtitle: { id: "Platform Baca Novel", en: "Novel Reading Platform" },
    description: {
      id: "Project mata kuliah Mobile Programming. Aplikasi mobile untuk membaca dan mengelola novel dengan fitur bookmark, katalog, dan pencarian.",
      en: "Mobile Programming course project. Mobile app to read and manage novels with bookmark, catalog, and search features.",
    },
    tech: ["Flutter", "Firebase", "Firestore"],
    highlights: [],
    image: "/images/novelverse.png",
    github: "https://github.com/SidqiRaafi/NovelVerse",
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
