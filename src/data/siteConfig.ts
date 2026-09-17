import {
  AdSettings,
  DownloadSettings,
  SiteSettings,
  MediaItem,
  PageContent,
  ContactMessage,
  CustomPage,
  BlogPost,
  SupportedLanguage,
} from "../types";

export const DEFAULT_AD_SETTINGS: AdSettings = {
  enabled: false,
  headerAd: false,
  inFeedAd: false,
  antiAdblock: false,
  preDownloadAd: false,
  preDownloadSeconds: 3,
  postDownloadAd: false,
  newTabOnDownload: false,
  newTabUrl: "https://pdfviewer.org",
  sidebarAd: false,
  popupAd: false,
  popupDelaySeconds: 15,
  adblockNotice: false,
  customBannerHtml: "",
  sponsorName: "CloudPDF Pro Tools",
  sponsorTagline: "Compress, OCR, and convert documents instantly with 1-click cloud workflows.",
  sponsorCta: "Try CloudPDF Free",
};

export const DEFAULT_DOWNLOAD_SETTINGS: DownloadSettings = {
  autoDownloadDefault: true,
  rateLimitPerMin: 15,
  cacheDurationHours: 4,
  maxFileSizeMb: 100,
  allowHighResThumbnails: true,
};

export const DEFAULT_SITE_SETTINGS: SiteSettings = {
  siteName: "Scribd Downloader",
  tagline: "Free High-Resolution Document & Slide Deck Converter",
  logoText: "Scribd Downloader",
  noticeBannerEnabled: false,
  noticeBannerText: "📢 Notice: High-speed extraction engine upgraded with 16x parallel workers.",
  contactEmail: "support@scribddownloader.org",
  footerCopyright: "© 2026 Scribd Downloader. Free educational document conversion.",
  headerScripts: "",
  footerScripts: "",
  maintenanceMode: false,
  defaultMetaTitle: "Scribd Downloader - Free, Fast & Lossless Document Converter",
  defaultMetaDescription: "Download Scribd documents, presentations, and research papers as high-resolution PDF files with zero wait time. 100% free and mobile friendly.",
};

export const INITIAL_MEDIA_ITEMS: MediaItem[] = [
  {
    id: "med-1",
    name: "scribd-sample-banner.png",
    url: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=1200&auto=format&fit=crop&q=80",
    sizeBytes: 184500,
    type: "image/png",
    createdAt: "2026-09-01",
  },
  {
    id: "med-2",
    name: "document-preview-artboard.png",
    url: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1200&auto=format&fit=crop&q=80",
    sizeBytes: 242000,
    type: "image/png",
    createdAt: "2026-09-05",
  },
  {
    id: "med-3",
    name: "study-guide-cover.png",
    url: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=1200&auto=format&fit=crop&q=80",
    sizeBytes: 310000,
    type: "image/png",
    createdAt: "2026-09-10",
  },
];

export const INITIAL_CATEGORIES = ["Guides", "Tutorials", "Tech", "Tips", "Research", "Education"];
export const INITIAL_TAGS = ["Scribd", "PDF", "Converter", "Academic", "Presentations", "Offline Reading", "E-Books"];

export const INITIAL_PAGE_CONTENT: PageContent[] = [
  // 1. HOME PAGE - 6 Variations
  {
    id: "home-en",
    pageKey: "home",
    language: "en",
    title: "Scribd Downloader – Free PDF Downloads, No Login Needed",
    subtitle: "Save Scribd documents, presentations, and research papers as clean, readable PDFs. Paste a link, hit download, done.",
    content: `A Scribd downloader is a free online tool that saves public Scribd documents to your device as PDF files. No account, no app install, no subscription. You paste the link to a document, and you get a clean PDF you can read offline, print, or keep in your study folder.

Scribd hosts millions of documents — lecture notes, research papers, slide presentations, manuals, and ebooks. Reading them online is fine, but an offline copy is easier to highlight, annotate, and carry around. That's what this tool is for: turning a Scribd page you can view into a PDF you can keep.

![Illustration of downloading a Scribd document as a PDF on a laptop](/images/home-download-guide.jpg)

## How to download a Scribd document

It takes three steps, and you don't need to create an account at any point.

**1. Copy the document link.** Open the Scribd document in your browser and copy the URL from the address bar.

**2. Paste it above.** Put the link in the download box at the top of this page.

**3. Download the PDF.** The tool reads the document's pages and builds a PDF for you. Save it to your phone, tablet, or computer.

## What you can download

- **Documents and ebooks** — notes, guides, manuals, and books shared publicly on Scribd.
- **Research papers** — academic papers and reports, handy for citations and offline reading.
- **Presentations** — slide decks saved page by page, so nothing gets cut off.
- **Study materials** — past papers, summaries, and class notes.

The output is always a standard PDF, so it opens in any reader — your browser, Adobe Reader, Preview, or your phone's built-in viewer.

## Why people use a Scribd downloader

- **No login.** There's no account system, so there's nothing to sign up for.
- **Free.** Downloading public documents costs nothing.
- **Clean PDFs.** Pages come out readable and print-friendly.
- **Works everywhere.** It's a website, so it runs on phones, tablets, laptops, and desktops.

## A quick note on copyright

Only download documents you have the right to keep — your own uploads, public-domain works, or materials shared with permission. Creators put real work into their documents. If something helped you, consider supporting the author or getting it through official channels too.

Files you generate here are processed temporarily and deleted automatically afterward. We don't keep copies of your downloads.`
  },,
  {
    id: "home-br",
    pageKey: "home",
    language: "br",
    title: "Scribd Downloader – Baixar PDFs Grátis, Sem Login",
    subtitle: "Salve documentos, apresentações e artigos do Scribd em PDF. Cole o link, baixe, pronto.",
    content: `Um baixador de Scribd é uma ferramenta online gratuita que salva documentos públicos do Scribd no seu dispositivo em formato PDF. Sem conta, sem instalar aplicativo, sem assinatura. Você cola o link do documento e recebe um PDF limpo para ler offline, imprimir ou guardar na sua pasta de estudos.

O Scribd reúne milhões de documentos — apostilas, artigos acadêmicos, apresentações de slides, manuais e livros. Ler online funciona, mas ter uma cópia offline facilita grifar, anotar e levar com você. É para isso que esta ferramenta serve: transformar uma página do Scribd que você pode ver em um PDF que você pode guardar.

![Ilustração de download de documento do Scribd em PDF no notebook](/images/home-download-guide.jpg)

## Como baixar um documento do Scribd

São três passos, e você não precisa criar conta em nenhum momento.

**1. Copie o link do documento.** Abra o documento no navegador e copie a URL da barra de endereços.

**2. Cole o link acima.** Coloque o endereço na caixa de download no topo desta página.

**3. Baixe o PDF.** A ferramenta lê as páginas do documento e monta um PDF para você. Salve no celular, tablet ou computador.

## O que você pode baixar

- **Documentos e livros** — apostilas, guias, manuais e livros compartilhados publicamente no Scribd.
- **Artigos acadêmicos** — trabalhos e relatórios, úteis para citações e leitura offline.
- **Apresentações** — slides salvos página por página, sem cortes.
- **Materiais de estudo** — provas antigas, resumos e anotações de aula.

O resultado é sempre um PDF padrão, que abre em qualquer leitor.

## Por que usar um baixador de Scribd

- **Sem login.** Não há sistema de contas, então não há cadastro.
- **Grátis.** Baixar documentos públicos não custa nada.
- **PDFs limpos.** Páginas legíveis e prontas para impressão.
- **Funciona em tudo.** É um site, então roda no celular, tablet e computador.

## Uma nota sobre direitos autorais

Baixe apenas documentos que você tem direito de guardar — seus próprios uploads, obras em domínio público ou materiais compartilhados com permissão. Os arquivos gerados são processados temporariamente e excluídos automaticamente depois. Não guardamos cópias dos seus downloads.`
  },,
  {
    id: "home-es",
    pageKey: "home",
    language: "es",
    title: "Scribd Downloader – Descargar PDF Gratis, Sin Registro",
    subtitle: "Guarda documentos, presentaciones y artículos de Scribd en PDF. Pega el enlace, descarga, listo.",
    content: `Un descargador de Scribd es una herramienta online gratuita que guarda documentos públicos de Scribd en tu dispositivo como archivos PDF. Sin cuenta, sin instalar nada, sin suscripción. Pegas el enlace del documento y recibes un PDF limpio para leer sin conexión, imprimir o guardar en tu carpeta de estudio.

Scribd reúne millones de documentos: apuntes, artículos académicos, presentaciones, manuales y libros. Leerlos online está bien, pero una copia sin conexión es más fácil de subrayar, anotar y llevar contigo. Para eso sirve esta herramienta: convertir una página de Scribd que puedes ver en un PDF que puedes guardar.

![Ilustración de descarga de un documento de Scribd en PDF en un portátil](/images/home-download-guide.jpg)

## Cómo descargar un documento de Scribd

Son tres pasos, y no necesitas crear una cuenta en ningún momento.

**1. Copia el enlace del documento.** Abre el documento en tu navegador y copia la URL de la barra de direcciones.

**2. Pégalo arriba.** Coloca el enlace en la casilla de descarga en la parte superior de esta página.

**3. Descarga el PDF.** La herramienta lee las páginas del documento y genera un PDF. Guárdalo en tu móvil, tableta u ordenador.

## Qué puedes descargar

- **Documentos y libros** — apuntes, guías, manuales y libros compartidos públicamente en Scribd.
- **Artículos académicos** — trabajos e informes, útiles para citas y lectura sin conexión.
- **Presentaciones** — diapositivas guardadas página por página, sin recortes.
- **Material de estudio** — exámenes anteriores, resúmenes y apuntes de clase.

El resultado es siempre un PDF estándar, que se abre en cualquier lector.

## Por qué usar un descargador de Scribd

- **Sin registro.** No hay sistema de cuentas, así que no hay nada que crear.
- **Gratis.** Descargar documentos públicos no cuesta nada.
- **PDF limpios.** Páginas legibles y listas para imprimir.
- **Funciona en todo.** Es una web, así que funciona en móvil, tableta y ordenador.

## Una nota sobre derechos de autor

Descarga solo documentos que tengas derecho a guardar: tus propias subidas, obras de dominio público o materiales compartidos con permiso. Los archivos generados se procesan de forma temporal y se eliminan automáticamente después. No conservamos copias de tus descargas.`
  },,
  {
    id: "home-fr",
    pageKey: "home",
    language: "fr",
    title: "Scribd Downloader – Télécharger des PDF Gratuitement, Sans Compte",
    subtitle: "Enregistrez documents, présentations et articles Scribd en PDF. Collez le lien, téléchargez, c'est tout.",
    content: `Un téléchargeur Scribd est un outil en ligne gratuit qui enregistre les documents publics de Scribd sur votre appareil au format PDF. Sans compte, sans installation, sans abonnement. Vous collez le lien du document et vous recevez un PDF propre à lire hors ligne, à imprimer ou à garder dans votre dossier d'étude.

Scribd regroupe des millions de documents : notes de cours, articles de recherche, présentations, manuels et livres. Les lire en ligne, c'est bien, mais une copie hors ligne est plus simple à surligner, à annoter et à emporter. C'est à cela que sert cet outil : transformer une page Scribd que vous pouvez voir en un PDF que vous pouvez garder.

![Illustration du téléchargement d'un document Scribd en PDF sur un ordinateur portable](/images/home-download-guide.jpg)

## Comment télécharger un document Scribd

Trois étapes suffisent, et vous n'avez besoin d'aucun compte.

**1. Copiez le lien du document.** Ouvrez le document dans votre navigateur et copiez l'URL depuis la barre d'adresse.

**2. Collez-le ci-dessus.** Mettez le lien dans la zone de téléchargement en haut de cette page.

**3. Téléchargez le PDF.** L'outil lit les pages du document et génère un PDF. Enregistrez-le sur votre téléphone, tablette ou ordinateur.

## Ce que vous pouvez télécharger

- **Documents et livres** — notes, guides, manuels et livres partagés publiquement sur Scribd.
- **Articles de recherche** — travaux et rapports, pratiques pour les citations et la lecture hors ligne.
- **Présentations** — diapositives enregistrées page par page, sans coupure.
- **Supports d'étude** — anciens examens, résumés et notes de cours.

Le résultat est toujours un PDF standard, lisible dans n'importe quel lecteur.

## Pourquoi utiliser un téléchargeur Scribd

- **Sans compte.** Il n'y a pas de système de comptes, donc rien à créer.
- **Gratuit.** Télécharger des documents publics ne coûte rien.
- **Des PDF propres.** Des pages lisibles, prêtes à imprimer.
- **Partout.** C'est un site web : il fonctionne sur téléphone, tablette et ordinateur.

## Un mot sur le droit d'auteur

Téléchargez uniquement les documents que vous avez le droit de conserver : vos propres fichiers, des œuvres du domaine public ou des contenus partagés avec autorisation. Les fichiers générés sont traités temporairement puis supprimés automatiquement. Nous ne conservons aucune copie de vos téléchargements.`
  },,
  {
    id: "home-de",
    pageKey: "home",
    language: "de",
    title: "Scribd Downloader – Kostenlos PDFs laden, ohne Anmeldung",
    subtitle: "Scribd-Dokumente, Präsentationen und Studienarbeiten als saubere PDFs speichern. Link einfügen, laden, fertig.",
    content: `Ein Scribd-Downloader ist ein kostenloses Online-Tool, das öffentliche Scribd-Dokumente als PDF auf dein Gerät speichert. Kein Konto, keine App-Installation, kein Abo. Du fügst den Link zum Dokument ein und erhältst ein sauberes PDF zum Offline-Lesen, Drucken oder Ablegen in deinem Studienordner.

Scribd versammelt Millionen von Dokumenten: Skripte, wissenschaftliche Arbeiten, Präsentationen, Handbücher und Bücher. Online lesen geht, aber eine Offline-Kopie lässt sich leichter markieren, kommentieren und mitnehmen. Genau dafür ist dieses Tool da: Es macht aus einer Scribd-Seite, die du sehen kannst, ein PDF, das du behalten kannst.

![Illustration: Scribd-Dokument als PDF auf einen Laptop herunterladen](/images/home-download-guide.jpg)

## So lädst du ein Scribd-Dokument herunter

Drei Schritte genügen, ganz ohne Konto.

**1. Link kopieren.** Öffne das Dokument im Browser und kopiere die URL aus der Adresszeile.

**2. Oben einfügen.** Füge den Link in das Download-Feld oben auf dieser Seite ein.

**3. PDF herunterladen.** Das Tool liest die Seiten des Dokuments und erstellt ein PDF. Speichere es auf Handy, Tablet oder Computer.

## Was du herunterladen kannst

- **Dokumente und Bücher** — Skripte, Anleitungen, Handbücher und Bücher, die öffentlich auf Scribd geteilt werden.
- **Wissenschaftliche Arbeiten** — Aufsätze und Berichte, praktisch für Zitate und zum Offline-Lesen.
- **Präsentationen** — Folien, Seite für Seite gespeichert, nichts wird abgeschnitten.
- **Lernmaterial** — alte Klausuren, Zusammenfassungen und Vorlesungsnotizen.

Das Ergebnis ist immer ein Standard-PDF, das sich in jedem Reader öffnen lässt.

## Warum ein Scribd-Downloader nützlich ist

- **Ohne Anmeldung.** Es gibt kein Kontosystem, also nichts einzurichten.
- **Kostenlos.** Öffentliche Dokumente zu laden kostet nichts.
- **Saubere PDFs.** Lesbare Seiten, druckfertig aufbereitet.
- **Überall nutzbar.** Es ist eine Website und läuft auf Handy, Tablet und Rechner.

## Ein Hinweis zum Urheberrecht

Lade nur Dokumente herunter, die du behalten darfst: eigene Uploads, gemeinfreie Werke oder Inhalte, die mit Erlaubnis geteilt wurden. Erzeugte Dateien werden nur vorübergehend verarbeitet und danach automatisch gelöscht. Wir speichern keine Kopien deiner Downloads.`
  },,
  {
    id: "home-id",
    pageKey: "home",
    language: "id",
    title: "Scribd Downloader – Unduh PDF Gratis, Tanpa Login",
    subtitle: "Simpan dokumen, presentasi, dan makalah Scribd sebagai PDF yang rapi. Tempel tautan, unduh, selesai.",
    content: `Pengunduh Scribd adalah alat online gratis yang menyimpan dokumen publik Scribd ke perangkatmu sebagai berkas PDF. Tanpa akun, tanpa instal aplikasi, tanpa langganan. Kamu tempel tautan dokumen, lalu dapat PDF yang rapi untuk dibaca luring, dicetak, atau disimpan di folder belajarmu.

Scribd menghimpun jutaan dokumen: catatan kuliah, makalah penelitian, presentasi slide, panduan, dan buku. Membacanya online boleh saja, tapi salinan luring lebih mudah ditandai, dianotasi, dan dibawa ke mana-mana. Di situlah gunanya alat ini: mengubah halaman Scribd yang bisa kamu lihat menjadi PDF yang bisa kamu simpan.

![Ilustrasi mengunduh dokumen Scribd sebagai PDF di laptop](/images/home-download-guide.jpg)

## Cara mengunduh dokumen Scribd

Cukup tiga langkah, tanpa perlu membuat akun sama sekali.

**1. Salin tautan dokumen.** Buka dokumen di peramban, lalu salin URL dari bilah alamat.

**2. Tempel di atas.** Masukkan tautan ke kolom unduhan di bagian atas halaman ini.

**3. Unduh PDF-nya.** Alat akan membaca halaman dokumen dan membuatkan PDF untukmu. Simpan ke ponsel, tablet, atau komputermu.

## Yang bisa kamu unduh

- **Dokumen dan buku** — catatan, panduan, manual, dan buku yang dibagikan secara publik di Scribd.
- **Makalah penelitian** — artikel dan laporan, berguna untuk sitasi dan bacaan luring.
- **Presentasi** — slide tersimpan halaman demi halaman, tidak ada yang terpotong.
- **Materi belajar** — soal ujian lama, rangkuman, dan catatan kuliah.

Hasilnya selalu PDF standar yang bisa dibuka di pembaca mana pun.

## Kenapa memakai pengunduh Scribd

- **Tanpa login.** Tidak ada sistem akun, jadi tidak ada yang perlu didaftarkan.
- **Gratis.** Mengunduh dokumen publik tidak dipungut biaya.
- **PDF yang rapi.** Halaman mudah dibaca dan siap cetak.
- **Bisa di mana saja.** Ini situs web, jadi berjalan di ponsel, tablet, maupun komputer.

## Catatan soal hak cipta

Unduh hanya dokumen yang memang boleh kamu simpan: unggahanmu sendiri, karya domain publik, atau materi yang dibagikan dengan izin. Berkas yang dihasilkan hanya diproses sementara lalu dihapus otomatis. Kami tidak menyimpan salinan unduhanmu.`
  },,

  // 2. ABOUT PAGE - 6 Variations
  {
    id: "about-en",
    pageKey: "about",
    language: "en",
    title: "About Our Project",
    subtitle: "Empowering global learners with open access to digital knowledge",
    content: "We believe that educational resources and knowledge should be freely accessible to everyone. Our free tool was built by a group of open-source enthusiasts to help students and researchers worldwide download presentations and documents for offline studying. Our servers process thousands of requests daily, ensuring fast and reliable access without any tracking or hidden fees."
  },
  {
    id: "about-br",
    pageKey: "about",
    language: "br",
    title: "Sobre o Nosso Projeto",
    subtitle: "Promovendo o acesso livre ao conhecimento educacional",
    content: "Acreditamos que os recursos educacionais e o conhecimento devem ser acessíveis a todos. Nossa ferramenta gratuita foi criada para ajudar estudantes e pesquisadores em todo o mundo a baixar apresentações e documentos para estudo offline, com total rapidez e sem taxas ocultas."
  },
  {
    id: "about-es",
    pageKey: "about",
    language: "es",
    title: "Acerca de Nuestro Proyecto",
    subtitle: "Facilitando el acceso libre al conocimiento educativo",
    content: "Creemos firmemente que los recursos educativos deben estar al alcance de todos. Esta herramienta fue desarrollada para ayudar a estudiantes e investigadores de todo el mundo a descargar presentaciones y apuntes para estudiar sin conexión de forma transparente y gratuita."
  },
  {
    id: "about-fr",
    pageKey: "about",
    language: "fr",
    title: "À Propos de Notre Projet",
    subtitle: "Rendre le savoir et l'éducation accessibles à tous",
    content: "Nous croyons que les ressources pédagogiques doivent être librement accessibles. Notre outil permet aux étudiants et universitaires du monde entier de sauvegarder des documents pour un usage d'apprentissage personnel, en toute sécurité et sans frais."
  },
  {
    id: "about-de",
    pageKey: "about",
    language: "de",
    title: "Über Unser Projekt",
    subtitle: "Freier Zugang zu Wissen für Lernende weltweit",
    content: "Wir sind überzeugt, dass Bildungsmaterialien für alle Menschen frei zugänglich sein sollten. Unser Projekt hilft Forschern und Studierenden dabei, Dokumente für wissenschaftliche Recherchen offline verfügbar zu machen."
  },
  {
    id: "about-id",
    pageKey: "about",
    language: "id",
    title: "Tentang Proyek Kami",
    subtitle: "Mendukung kemudahan akses ilmu pengetahuan bagi semua",
    content: "Kami percaya bahwa materi pendidikan dan pengetahuan harus dapat diakses secara bebas oleh siapa saja. Alat gratis ini dibuat untuk membantu mahasiswa dan peneliti mengunduh dokumen untuk belajar secara luring tanpa dipungut biaya."
  },

  // 3. HOW IT WORKS PAGE - 6 Variations
  {
    id: "how-it-works-en",
    pageKey: "how-it-works",
    language: "en",
    title: "How Scribd Downloader Operates",
    subtitle: "Step-by-step breakdown of document streaming and PDF compilation",
    content: "Our document extractor inspects public manifest streams, processes high-resolution slide canvases, and compiles vector PDF documents with original typographic alignment in under 10 seconds. Simply paste your URL, verify thumbnails, and save your universal PDF."
  },
  {
    id: "how-it-works-br",
    pageKey: "how-it-works",
    language: "br",
    title: "Como Opera o Baixador de PDF",
    subtitle: "Passo a passo da compilação e extração de documentos",
    content: "Nosso extrator analisa os manifestos públicos de slides, processa as páginas em alta definição e compila um PDF vetorial fiel em menos de 10 segundos. Basta colar a URL, conferir as miniaturas e salvar seu arquivo."
  },
  {
    id: "how-it-works-es",
    pageKey: "how-it-works",
    language: "es",
    title: "Cómo Funciona el Descargador",
    subtitle: "Guía paso a paso de extracción y generación de archivos PDF",
    content: "El extractor procesa las diapositivas del documento en alta resolución y genera un documento PDF universal respetando la tipografía original en menos de 10 segundos. Pega tu enlace y descarga directamente."
  },
  {
    id: "how-it-works-fr",
    pageKey: "how-it-works",
    language: "fr",
    title: "Fonctionnement du Téléchargeur",
    subtitle: "Étapes claires pour convertir et assembler votre document",
    content: "Notre moteur d'extraction examine les pages publiques, assemble les couches vectorielles et compile un PDF haute définition en moins de 10 secondes. Collez simplement le lien et sauvegardez votre document."
  },
  {
    id: "how-it-works-de",
    pageKey: "how-it-works",
    language: "de",
    title: "Funktionsweise des PDF-Downloaders",
    subtitle: "Schritt-für-Schritt-Anleitung zur Konvertierung",
    content: "Unsere Engine liest die öffentlichen Folienstrukturen aus und bündelt alle Seiten zu einem sauberen, druckbaren PDF-Dokument in unter 10 Sekunden. Link einfügen, Vorschau prüfen und herunterladen."
  },
  {
    id: "how-it-works-id",
    pageKey: "how-it-works",
    language: "id",
    title: "Cara Kerja Pengunduh PDF",
    subtitle: "Panduan langkah demi langkah ekstraksi dokumen",
    content: "Alat kami membaca data halaman publik, menyusunnya dengan resolusi optimal, dan menghasilkan berkas PDF utuh dalam waktu kurang dari 10 detik. Cukup tempelkan tautan dokumen dan klik unduh."
  },

  // 4. CONTACT PAGE - 6 Variations
  {
    id: "contact-en",
    pageKey: "contact",
    language: "en",
    title: "Contact & Support",
    subtitle: "We are here to assist with document formats and platform questions",
    content: "Our engineering team is here to help with any issues you encounter while using the Scribd Downloader. Whether you are facing problems downloading a specific document, have a feature request, or want to report a bug, please reach out to us."
  },
  {
    id: "contact-br",
    pageKey: "contact",
    language: "br",
    title: "Contato e Suporte",
    subtitle: "Estamos à disposição para ajudar com dúvidas e relatórios",
    content: "Nossa equipe técnica está pronta para tirar suas dúvidas ou resolver problemas no download de documentos. Envie sua mensagem e responderemos em até 24 horas."
  },
  {
    id: "contact-es",
    pageKey: "contact",
    language: "es",
    title: "Contacto y Soporte",
    subtitle: "Estamos aquí para resolver cualquier duda o incidencia",
    content: "Nuestro equipo de soporte te ayudará ante cualquier problema con la descarga de documentos o sugerencia de mejora. Responderemos a tu consulta a la mayor brevedad."
  },
  {
    id: "contact-fr",
    pageKey: "contact",
    language: "fr",
    title: "Contact et Assistance",
    subtitle: "Une question ou un problème ? Notre équipe vous répond",
    content: "Notre équipe technique est à votre écoute pour toute demande d'assistance ou suggestion concernant le service. Nous traitons vos messages sous 24 à 48 heures."
  },
  {
    id: "contact-de",
    pageKey: "contact",
    language: "de",
    title: "Kontakt & Hilfe",
    subtitle: "Wir unterstützen Sie bei Fragen und technischen Anliegen",
    content: "Haben Sie Fragen zur Konvertierung oder Anregungen zu unserer Plattform? Unser Support-Team freut sich über Ihre Nachricht und antwortet zeitnah."
  },
  {
    id: "contact-id",
    pageKey: "contact",
    language: "id",
    title: "Kontak & Bantuan",
    subtitle: "Tim kami siap membantu kendala pengunduhan Anda",
    content: "Jika Anda mengalami kendala dalam mengunduh dokumen tertentu atau memiliki saran fitur baru, silakan hubungi tim pengembang kami."
  },

  // 5. LEGAL & PRIVACY - 6 Variations
  {
    id: "legal-en",
    pageKey: "legal",
    language: "en",
    title: "Legal & Privacy Terms",
    subtitle: "Compliance, fair use principles, and temporary processing policies",
    content: "We respect user privacy and intellectual property rights. Our tool functions as an automated proxy that fetches public assets on behalf of the user. We do not store, host, or distribute copyrighted materials on our servers. All generated files are temporarily cached and automatically deleted shortly after generation. By using this service, you agree to use it strictly for personal, non-commercial, and fair-use educational purposes."
  },
  {
    id: "legal-br",
    pageKey: "legal",
    language: "br",
    title: "Termos Legais e Privacidade",
    subtitle: "Conformidade, uso justo e descarte seguro de arquivos temporários",
    content: "Respeitamos a privacidade do usuário e os direitos de propriedade intelectual. Esta ferramenta opera como um intermediário técnico para leitura de materiais públicos para fins de estudo acadêmico e uso justo. Nenhum arquivo permanente é armazenado em nossos servidores."
  },
  {
    id: "legal-es",
    pageKey: "legal",
    language: "es",
    title: "Términos Legales y Privacidad",
    subtitle: "Privacidad, política de uso justo y eliminación de archivos temporales",
    content: "Respetamos los derechos de autor y la privacidad. Esta herramienta está pensada para fines educativos y de investigación personal amparados en el uso legítimo. Los archivos generados se eliminan automáticamente de forma inmediata."
  },
  {
    id: "legal-fr",
    pageKey: "legal",
    language: "fr",
    title: "Mentions Légales et Confidentialité",
    subtitle: "Engagements de confidentialité et respect du droit d'usage loyal",
    content: "Nous respectons la vie privée et les droits de propriété intellectuelle. Ce service est réservé à un usage privé, pédagogique et de recherche loyale. Aucun document n'est conservé de façon pérenne sur nos serveurs."
  },
  {
    id: "legal-de",
    pageKey: "legal",
    language: "de",
    title: "Rechtliche Hinweise & Datenschutz",
    subtitle: "Datenschutzbestimmungen und Fair-Use-Prinzipien",
    content: "Wir respektieren den Schutz persönlicher Daten und das Urheberrecht. Unser Service dient ausschließlich privaten Bildungs- und Forschungszwecken im Rahmen des Fair-Use. Temporäre Zwischendateien werden unverzüglich gelöscht."
  },
  {
    id: "legal-id",
    pageKey: "legal",
    language: "id",
    title: "Ketentuan Hukum & Privasi",
    subtitle: "Kebijakan privasi dan prinsip penggunaan wajar untuk pendidikan",
    content: "Kami menghormati hak cipta dan privasi pengguna. Layanan ini dibuat khusus untuk keperluan belajar dan riset mandiri. Berkas yang dihasilkan tidak disimpan secara permanen di peladen kami."
  }
];

// Storage keys
const AD_SETTINGS_KEY = "scribd_ad_settings_v1";
const DOWNLOAD_SETTINGS_KEY = "scribd_download_settings_v1";
const SITE_SETTINGS_KEY = "scribd_site_settings_v1";
const MEDIA_ITEMS_KEY = "scribd_media_items_v1";
const CATEGORIES_KEY = "scribd_categories_v1";
const TAGS_KEY = "scribd_tags_v1";
const PAGE_CONTENT_KEY = "scribd_page_content_v6";
const CONTACT_MESSAGES_KEY = "scribd_contact_messages_v1";
const CORE_PAGE_SEO_KEY = "scribd_core_page_seo_v1";

export interface CorePageSeo {
  id: string;
  route?: string;
  metaTitle: string;
  metaDescription: string;
}

export function loadCorePageSeo(): CorePageSeo[] {
  try {
    const raw = localStorage.getItem(CORE_PAGE_SEO_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.error(e);
  }
  return [];
}

export function saveCorePageSeo(pages: CorePageSeo[]) {
  try {
    localStorage.setItem(CORE_PAGE_SEO_KEY, JSON.stringify(pages));
  } catch (e) {
    console.error(e);
  }
}

export function loadAdSettings(): AdSettings {
  try {
    const raw = localStorage.getItem(AD_SETTINGS_KEY);
    if (raw) return { ...DEFAULT_AD_SETTINGS, ...JSON.parse(raw) };
  } catch (e) {
    console.error(e);
  }
  return DEFAULT_AD_SETTINGS;
}

export function saveAdSettings(settings: AdSettings) {
  try {
    localStorage.setItem(AD_SETTINGS_KEY, JSON.stringify(settings));
  } catch (e) {
    console.error(e);
  }
}

export function loadDownloadSettings(): DownloadSettings {
  try {
    const raw = localStorage.getItem(DOWNLOAD_SETTINGS_KEY);
    if (raw) return { ...DEFAULT_DOWNLOAD_SETTINGS, ...JSON.parse(raw) };
  } catch (e) {
    console.error(e);
  }
  return DEFAULT_DOWNLOAD_SETTINGS;
}

export function saveDownloadSettings(settings: DownloadSettings) {
  try {
    localStorage.setItem(DOWNLOAD_SETTINGS_KEY, JSON.stringify(settings));
  } catch (e) {
    console.error(e);
  }
}

export function loadSiteSettings(): SiteSettings {
  try {
    const raw = localStorage.getItem(SITE_SETTINGS_KEY);
    if (raw) return { ...DEFAULT_SITE_SETTINGS, ...JSON.parse(raw) };
  } catch (e) {
    console.error(e);
  }
  return DEFAULT_SITE_SETTINGS;
}

export function saveSiteSettings(settings: SiteSettings) {
  try {
    localStorage.setItem(SITE_SETTINGS_KEY, JSON.stringify(settings));
  } catch (e) {
    console.error(e);
  }
}

export function loadMediaItems(): MediaItem[] {
  try {
    const raw = localStorage.getItem(MEDIA_ITEMS_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.error(e);
  }
  return INITIAL_MEDIA_ITEMS;
}

export function saveMediaItems(items: MediaItem[]) {
  try {
    localStorage.setItem(MEDIA_ITEMS_KEY, JSON.stringify(items));
  } catch (e) {
    console.error(e);
  }
}

export function loadCategories(): string[] {
  try {
    const raw = localStorage.getItem(CATEGORIES_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.error(e);
  }
  return INITIAL_CATEGORIES;
}

export function saveCategories(cats: string[]) {
  try {
    localStorage.setItem(CATEGORIES_KEY, JSON.stringify(cats));
  } catch (e) {
    console.error(e);
  }
}

export function loadTags(): string[] {
  try {
    const raw = localStorage.getItem(TAGS_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.error(e);
  }
  return INITIAL_TAGS;
}

export function saveTags(tags: string[]) {
  try {
    localStorage.setItem(TAGS_KEY, JSON.stringify(tags));
  } catch (e) {
    console.error(e);
  }
}

export function loadPageContent(): PageContent[] {
  try {
    const raw = localStorage.getItem(PAGE_CONTENT_KEY);
    if (raw) {
      const parsed: PageContent[] = JSON.parse(raw);
      const cleaned = parsed.map((p) => {
        if (p.pageKey === "home" || p.id?.startsWith("home-")) {
          const cleanContent = p.content
            ? p.content
                .replace(/^## The Ultimate Free Scribd Downloader\s*\n?/m, "")
                .replace(/^## Download Seguro e Sem Assinatura\s*\n?/m, "")
                .replace(/^## Descargas Rápidas y Sin Registros\s*\n?/m, "")
                .replace(/^## Accès Hors Ligne Garanti\s*\n?/m, "")
                .replace(/^## Schnell, Sicher und Ohne Registrierung\s*\n?/m, "")
                .replace(/^## Akses Luring Tanpa Ribet\s*\n?/m, "")
            : p.content;
          return { ...p, content: cleanContent };
        }
        return p;
      });
      const merged = [...cleaned];
      for (const init of INITIAL_PAGE_CONTENT) {
        if (!merged.some((p) => p.id === init.id || (p.pageKey && p.pageKey === init.pageKey && p.language === init.language))) {
          merged.push(init);
        }
      }
      return merged;
    }
  } catch (e) {
    console.error(e);
  }
  return INITIAL_PAGE_CONTENT;
}

export function savePageContent(content: PageContent[]) {
  try {
    localStorage.setItem(PAGE_CONTENT_KEY, JSON.stringify(content));
  } catch (e) {
    console.error(e);
  }
}

export function loadContactMessages(): ContactMessage[] {
  try {
    const raw = localStorage.getItem(CONTACT_MESSAGES_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.error(e);
  }
  return [];
}

export function saveContactMessages(messages: ContactMessage[]) {
  try {
    localStorage.setItem(CONTACT_MESSAGES_KEY, JSON.stringify(messages));
  } catch (e) {
    console.error(e);
  }
}

// -------------------------------------------------------------
// CUSTOM PAGES STORAGE & PRESETS
// -------------------------------------------------------------
export const CUSTOM_PAGES_KEY = "scribd_custom_pages";
export const ROBOTS_TXT_KEY = "scribd_robots_txt";
export const SITEMAP_XML_KEY = "scribd_sitemap_xml";

export const DEFAULT_CUSTOM_PAGES: CustomPage[] = [
  {
    id: "page-dmca",
    slug: "dmca",
    title: "DMCA Copyright Compliance & Takedown Policy",
    subtitle: "Digital Millennium Copyright Act Notice and Compliance Guidelines",
    status: "published",
    showInHeader: false,
    showInFooter: true,
    language: "all",
    metaTitle: "DMCA Copyright Compliance - Scribd Downloader",
    metaDescription: "Learn about our compliance with the Digital Millennium Copyright Act (DMCA) and how to submit takedown notices.",
    lastModified: "2026-09-15",
    createdAt: "2026-09-01",
    authorName: "Legal Compliance Team",
    content: `# DMCA Copyright Compliance & Notice

Scribd Downloader ("the Service") respects the intellectual property rights of authors, publishers, and content creators. We comply with the provisions of Title 17 of the United States Code, Section 512, commonly known as the **Digital Millennium Copyright Act ("DMCA")**.

## Notice of Non-Hosting & Transient Processing
Our service operates purely as a transient protocol converter and client-side document retrieval utility. We do **not** permanently store, host, re-publish, or index proprietary documents on public databases. All temporary processing files are purged automatically from cache memory every 24 hours.

## Filing a DMCA Notice of Infringement
If you are a copyright owner or authorized representative and believe any content accessed through our service infringes your rights, please provide our designated copyright agent with the following details:

1. **Identification of the copyrighted work**: A description or link to the original copyrighted material.
2. **Identification of the infringing material**: The specific URL or reference location on Scribd.
3. **Contact information**: Your full legal name, company/organization, physical address, telephone number, and official email.
4. **Statement of good faith**: A statement that you have a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law.
5. **Statement of accuracy**: A statement under penalty of perjury that the information in your notice is accurate and that you are authorized to act on behalf of the owner.
6. **Physical or electronic signature**: Of the copyright owner or person authorized to act on their behalf.

## Designated Copyright Contact
Please send all official DMCA notices to:
- **Email**: dmca@scribddownloader.org
- **Response Time**: All valid notices are processed within 24–48 business hours.`
  },
  {
    id: "page-faq",
    slug: "faq",
    title: "Frequently Asked Questions & Support",
    subtitle: "Everything you need to know about downloading, converting, and reading documents offline",
    status: "published",
    showInHeader: false,
    showInFooter: true,
    language: "all",
    metaTitle: "Frequently Asked Questions (FAQ) - Scribd Downloader",
    metaDescription: "Answers to common questions about downloading Scribd documents, high-resolution PDFs, supported formats, and troubleshooting.",
    lastModified: "2026-09-15",
    createdAt: "2026-09-05",
    authorName: "Support Team",
    content: `# Frequently Asked Questions (FAQ)

Find answers to common questions about using Scribd Downloader, supported document types, and troubleshooting extraction issues.

## 1. Is Scribd Downloader completely free to use?
Yes! Our online converter is 100% free with no hidden charges, required account registration, or premium subscription tiers. You can download and convert public documents without submitting personal information.

## 2. What types of Scribd documents are supported?
We support:
- Standard multi-page research documents and academic papers
- Presentations and slide decks (converted to landscape or portrait PDFs)
- Technical guides, spreadsheets, and public whitepapers
- Embedded image and vector illustrations

## 3. Why did my download say "Document Not Found or Private"?
Some documents on Scribd are restricted to private accounts or marked by their authors as non-downloadable. If a document is protected by strict DRM or private viewer permissions, our scraper cannot access public slides. Please ensure the document is publicly accessible in a web browser without requiring a login.

## 4. How long does the extraction take?
Our parallel scraper engine retrieves vector tiles concurrently. Most standard documents (10–30 pages) are compiled in under 3 to 5 seconds!

## 5. Are downloaded files safe?
Yes. We generate standard, clean PDF files that contain no executable code or macros. Downloaded documents open safely in Adobe Acrobat, Google Chrome, Apple Preview, and all standard PDF viewers.

## 6. How can I contact support?
If you run into any issues, visit our **Contact Us** page or email our engineering desk at **support@scribddownloader.org**.`
  },
  {
    id: "page-fair-use",
    slug: "fair-use",
    title: "Educational Fair Use & Research Guidelines",
    subtitle: "Understanding fair use rights for academic study, research analysis, and criticism",
    status: "published",
    showInHeader: false,
    showInFooter: true,
    language: "all",
    metaTitle: "Fair Use Guidelines for Research & Education - Scribd Downloader",
    metaDescription: "Learn how the Fair Use doctrine applies to educational research, study materials, and non-commercial document conversion.",
    lastModified: "2026-09-15",
    createdAt: "2026-09-08",
    authorName: "Editorial Staff",
    content: `# Educational Fair Use & Research Guidelines

The doctrine of Fair Use is a vital legal principle codified under **Section 107 of the U.S. Copyright Act**. It permits the limited, non-commercial use of copyrighted materials without requiring prior permission from the rights holder under specific educational and research circumstances.

## The Four Pillars of Fair Use

When determining whether a specific use of study materials constitutes Fair Use, courts evaluate four primary factors:

### 1. Purpose and Character of the Use
Transformative uses for non-profit educational purposes, academic scholarship, commentary, and scientific research weigh heavily in favor of fair use compared to commercial monetization.

### 2. Nature of the Copyrighted Work
Accessing factual, informational, or scientific research materials receives broader fair-use leeway than purely creative or fictional works.

### 3. Amount and Substantiality
Using only the portion of material necessary for academic study or citation is standard educational practice.

### 4. Effect on the Potential Market
Educational offline reading for personal study does not substitute for original market publication or commercial sales.

## Responsible User Conduct
We encourage all users to respect creators' rights. Use downloaded materials responsibly for personal research, educational citation, and offline study.`
  }
];

export function loadCustomPages(): CustomPage[] {
  try {
    const raw = localStorage.getItem(CUSTOM_PAGES_KEY);
    if (raw) {
      const parsed: CustomPage[] = JSON.parse(raw);
      // Merge with default pages if any missing and ensure header is clean
      const merged = parsed.map((p) => {
        if (p.slug === "mcp-docs" || p.slug === "faq") {
          return { ...p, showInHeader: false };
        }
        return p;
      });
      for (const def of DEFAULT_CUSTOM_PAGES) {
        if (!merged.some((p) => p.slug === def.slug || p.id === def.id)) {
          merged.push(def);
        }
      }
      return merged;
    }
  } catch (e) {
    console.error(e);
  }
  return DEFAULT_CUSTOM_PAGES;
}

export function saveCustomPages(pages: CustomPage[]) {
  try {
    localStorage.setItem(CUSTOM_PAGES_KEY, JSON.stringify(pages));
    // Also sync to server in background
    fetch("/api/custom-pages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pages }),
    }).catch(() => {});
  } catch (e) {
    console.error(e);
  }
}

// -------------------------------------------------------------
// ROBOTS.TXT & SITEMAP.XML GENERATION & PERSISTENCE
// -------------------------------------------------------------
export function buildDefaultRobotsTxt(origin?: string): string {
  const base = origin || (typeof window !== "undefined" ? window.location.origin : "https://example.com");
  return `# robots.txt for Scribd Downloader
# Auto-generated by Admin SEO Controller

User-agent: *
Allow: /

# Disallow admin control panels and private routes
Disallow: /admin123
Disallow: /admin
Disallow: /admin/*
Disallow: /api/
Disallow: /temp_downloads/

# Sitemap location
Sitemap: ${base}/sitemap.xml
`;
}

export function loadRobotsTxt(origin?: string): string {
  try {
    const saved = localStorage.getItem(ROBOTS_TXT_KEY);
    if (saved && saved.trim()) return saved;
  } catch (e) {
    console.error(e);
  }
  return buildDefaultRobotsTxt(origin);
}

export function saveRobotsTxt(content: string) {
  try {
    localStorage.setItem(ROBOTS_TXT_KEY, content);
    fetch("/api/seo/robots", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content }),
    }).catch(() => {});
  } catch (e) {
    console.error(e);
  }
}

export function buildDynamicSitemapXml(
  origin: string,
  posts: BlogPost[] = [],
  customPages: CustomPage[] = [],
  languages: SupportedLanguage[] = ["en", "br", "es", "fr", "de", "id"]
): string {
  const base = origin.replace(/\/$/, "");
  const today = new Date().toISOString().split("T")[0];

  const coreRoutes = [
    { path: "", priority: "1.0", changefreq: "daily" },
    { path: "how-it-works", priority: "0.8", changefreq: "weekly" },
    { path: "blog", priority: "0.9", changefreq: "daily" },
    { path: "about", priority: "0.7", changefreq: "monthly" },
    { path: "contact", priority: "0.6", changefreq: "monthly" },
    { path: "privacy", priority: "0.5", changefreq: "monthly" },
    { path: "terms", priority: "0.5", changefreq: "monthly" },
  ];

  const xmlEntries: string[] = [];

  // 1. Core localized routes
  for (const lang of languages) {
    for (const r of coreRoutes) {
      const fullPath = r.path ? `/${lang}/${r.path}` : `/${lang}`;
      xmlEntries.push(`  <url>
    <loc>${base}${fullPath}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`);
    }
  }

  // Root fallback
  xmlEntries.push(`  <url>
    <loc>${base}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>`);

  // 2. Published Blog Articles
  for (const post of posts) {
    if (post.status === "draft") continue;
    const postLang = (post.language as string) || "en";
    xmlEntries.push(`  <url>
    <loc>${base}/${postLang}/blog/${post.slug}</loc>
    <lastmod>${post.date || today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`);
  }

  // 3. Published Custom Pages
  for (const page of customPages) {
    if (page.status === "draft") continue;
    const pageLang = page.language && page.language !== "all" ? page.language : "en";
    xmlEntries.push(`  <url>
    <loc>${base}/${pageLang}/${page.slug}</loc>
    <lastmod>${page.lastModified || today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`);
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlEntries.join("\n")}
</urlset>`;
}

export function loadSitemapXml(
  origin?: string,
  posts: BlogPost[] = [],
  customPages: CustomPage[] = []
): string {
  try {
    const saved = localStorage.getItem(SITEMAP_XML_KEY);
    if (saved && saved.trim()) return saved;
  } catch (e) {
    console.error(e);
  }
  const base = origin || (typeof window !== "undefined" ? window.location.origin : "https://example.com");
  return buildDynamicSitemapXml(base, posts, customPages);
}

export function saveSitemapXml(content: string) {
  try {
    localStorage.setItem(SITEMAP_XML_KEY, content);
    fetch("/api/seo/sitemap", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content }),
    }).catch(() => {});
  } catch (e) {
    console.error(e);
  }
}

