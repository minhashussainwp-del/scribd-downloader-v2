import { SupportedLanguage, LanguageOption } from "../types";

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  { code: "en", name: "English (US)", nativeName: "English", flag: "🇺🇸", country: "United States", urlPrefix: "en" },
  { code: "br", name: "Português (Brasil)", nativeName: "Português (BR)", flag: "🇧🇷", country: "Brasil", urlPrefix: "br" },
  { code: "es", name: "Español", nativeName: "Español", flag: "🇪🇸", country: "España / Latam", urlPrefix: "es" },
  { code: "fr", name: "Français", nativeName: "Français", flag: "🇫🇷", country: "France", urlPrefix: "fr" },
  { code: "de", name: "Deutsch", nativeName: "Deutsch", flag: "🇩🇪", country: "Deutschland", urlPrefix: "de" },
  { code: "id", name: "Bahasa Indonesia", nativeName: "Bahasa Indonesia", flag: "🇮🇩", country: "Indonesia", urlPrefix: "id" },
];

export type TranslationKey = string;

// Master comprehensive translation dictionaries for all 6 languages
const TRANSLATIONS: Record<SupportedLanguage, Record<string, string>> = {
  en: {
    "nav.home": "Home",
    "nav.howItWorks": "How It Works",
    "nav.blog": "Blog",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.admin": "Admin Panel",
    "nav.downloadPdf": "Download PDF",
    "nav.freeBadge": "Free",
    "nav.tagline": "Clean Document & Presentation Converter",

    "hero.badge": "Free • No Login • Fast",
    "hero.title": "Download Scribd PDFs Free, No Login Needed",
    "hero.subtitle": "Paste a Scribd link and get a clean, readable PDF. No account, no app to install, no cost.",
    "hero.placeholder": "Paste Scribd document URL here...",
    "hero.downloadBtn": "Download PDF",
    "hero.downloadingBtn": "Preparing your PDF...",
    "hero.check1": "No Login",
    "hero.check2": "High-Quality PDF",
    "hero.check3": "Works on All Devices",

    "how.title": "How It Works",
    "how.step1": "Copy the link",
    "how.step1Desc": "Find the Scribd document you want and copy its URL from the address bar.",
    "how.step2": "Paste it above",
    "how.step2Desc": "Drop the link into the download box at the top of this page.",
    "how.step3": "Download the PDF",
    "how.step3Desc": "Get a clean PDF you can read offline, print, or save for later.",

    "benefits.title": "Why Use This Tool",
    "benefits.fastTitle": "Quick",
    "benefits.fastDesc": "Paste a link and your PDF is ready shortly after. No waiting rooms, no countdown timers.",
    "benefits.safeTitle": "Private",
    "benefits.safeDesc": "No account means no sign-up forms and nothing personal to hand over.",
    "benefits.devicesTitle": "Works Everywhere",
    "benefits.devicesDesc": "Use it on your phone, tablet, or computer, right in the browser.",
    "benefits.freeTitle": "Free",
    "benefits.freeDesc": "Downloading public documents doesn't cost anything.",

    "guide.badge": "Knowledge Base",
    "guide.title": "The Complete Guide to Downloading Scribd Documents",
    "guide.p1": "Scribd hosts millions of user-shared documents: lecture notes, research papers, presentations, manuals, and books. Having an offline copy makes them easier to highlight, annotate, and carry around.",
    "guide.subheading": "Downloading in Three Steps",
    "guide.step1Title": "1. Copy the document link",
    "guide.step1Desc": "Open the Scribd document in your browser and copy the URL from the address bar.",
    "guide.step2Title": "2. Paste it into the downloader",
    "guide.step2Desc": "Put the link in the download box at the top of this page.",
    "guide.step3Title": "3. Save your PDF",
    "guide.step3Desc": "The tool reads the document's pages and builds a clean PDF for you to keep.",

    "faq.title": "Frequently Asked Questions",
    "faq.q1": "What is a Scribd downloader?",
    "faq.a1": "It's a free online tool that saves public Scribd documents to your device as PDF files, so you can read them offline, print them, or keep them in your study folder.",
    "faq.q2": "Do I need a Scribd account to use it?",
    "faq.a2": "No. There's no login or signup here — just paste the document link and download.",
    "faq.q3": "Is it really free?",
    "faq.a3": "Yes. Downloading public documents doesn't cost anything.",
    "faq.q4": "What file format will I get?",
    "faq.a4": "A standard PDF. It opens in any reader — your browser, Adobe Reader, or your phone's built-in viewer.",
    "faq.q5": "Can I download documents on my phone?",
    "faq.a5": "Yes. The tool runs in your mobile browser, so it works on phones and tablets as well as computers.",
    "faq.q6": "Why isn't my document downloading?",
    "faq.a6": "The tool can only process documents that are publicly viewable on Scribd. If a document is private, removed, or restricted, it won't go through — check that the link opens in your browser first.",
    "faq.q7": "Is downloading Scribd documents legal?",
    "faq.a7": "It depends on the document. Only download things you have the right to keep — your own uploads, public-domain works, or materials shared with permission. Always respect the author's copyright.",
    "faq.q8": "Do you keep copies of my downloads?",
    "faq.a8": "No. Files are processed temporarily and deleted automatically afterward.",

    "blog.previewTitle": "Latest Guides & Articles",
    "blog.previewSubtitle": "Explore tutorials on document formats, digital reading, and research methods.",
    "blog.readArticle": "Read Guide",
    "blog.viewAll": "View All Guides",
    "blog.backToGuides": "Back to Guides",
    "blog.tableOfContents": "Table of Contents",
    "blog.authorInsight": "Author Insight",
    "blog.quickCtaTitle": "Have a Scribd Link Ready to Convert?",
    "blog.quickCtaDesc": "Paste the URL into our web tool right now to preview pages and download your document as a pure PDF file.",
    "blog.quickCtaBtn": "Open PDF Downloader",

    "footer.tagline": "A simple online tool for reading and downloading Scribd documents and discovering audio guides and resources.",
    "footer.quickLinks": "Quick Links",
    "footer.resources": "Resources",
    "footer.legal": "Legal & Privacy",
    "footer.scribdGuide": "Scribd Guide",
    "footer.downloadTips": "Download Tips",
    "footer.studyResources": "Study Resources",
    "footer.faqs": "FAQs",
    "footer.rights": "All rights reserved. Not affiliated with Scribd Inc.",
    "footer.disclaimer": "This utility compiles publicly available document slides and tiles for personal academic research and fair-use archiving.",
    "footer.terms": "Terms of Service",
    "footer.privacy": "Privacy Policy",

    "lang.detectBanner": "We noticed you might prefer",
    "lang.switchBtn": "Switch to",
    "lang.dismiss": "Keep English",
  },

  br: {
    "nav.home": "Início",
    "nav.howItWorks": "Como Funciona",
    "nav.blog": "Blog",
    "nav.about": "Sobre",
    "nav.contact": "Contato",
    "nav.admin": "Painel Admin",
    "nav.downloadPdf": "Baixar PDF",
    "nav.freeBadge": "Grátis",
    "nav.tagline": "Conversor Limpo de Documentos e Apresentações",

    "hero.badge": "Grátis • Sem Login • Rápido",
    "hero.title": "Baixar PDFs do Scribd Grátis, Sem Login",
    "hero.subtitle": "Cole um link do Scribd e receba um PDF limpo e legível. Sem conta, sem instalar aplicativo, sem custo.",
    "hero.placeholder": "Cole a URL do documento Scribd aqui...",
    "hero.downloadBtn": "Baixar PDF",
    "hero.downloadingBtn": "Preparando seu PDF...",
    "hero.check1": "Sem Login",
    "hero.check2": "PDF de Alta Qualidade",
    "hero.check3": "Funciona em Todos os Dispositivos",

    "how.title": "Como Funciona",
    "how.step1": "Copie o link",
    "how.step1Desc": "Encontre o documento no Scribd e copie a URL da barra de endereços.",
    "how.step2": "Cole acima",
    "how.step2Desc": "Coloque o link na caixa de download no topo desta página.",
    "how.step3": "Baixe o PDF",
    "how.step3Desc": "Receba um PDF limpo para ler offline, imprimir ou guardar.",

    "benefits.title": "Por Que Usar Esta Ferramenta",
    "benefits.fastTitle": "Rápido",
    "benefits.fastDesc": "Cole o link e seu PDF fica pronto em seguida. Sem salas de espera, sem contagem regressiva.",
    "benefits.safeTitle": "Privado",
    "benefits.safeDesc": "Sem conta, sem formulários de cadastro e nada pessoal para informar.",
    "benefits.devicesTitle": "Funciona em Tudo",
    "benefits.devicesDesc": "Use no celular, tablet ou computador, direto no navegador.",
    "benefits.freeTitle": "Grátis",
    "benefits.freeDesc": "Baixar documentos públicos não custa nada.",

    "guide.badge": "Base de Conhecimento",
    "guide.title": "O Guia Completo para Baixar Documentos do Scribd",
    "guide.p1": "O Scribd reúne milhões de documentos compartilhados: apostilas, artigos, apresentações, manuais e livros. Ter uma cópia offline facilita grifar, anotar e levar com você.",
    "guide.subheading": "Baixando em Três Passos",
    "guide.step1Title": "1. Copie o link do documento",
    "guide.step1Desc": "Abra o documento no navegador e copie a URL da barra de endereços.",
    "guide.step2Title": "2. Cole no baixador",
    "guide.step2Desc": "Coloque o link na caixa de download no topo desta página.",
    "guide.step3Title": "3. Salve seu PDF",
    "guide.step3Desc": "A ferramenta lê as páginas do documento e monta um PDF limpo para você guardar.",

    "faq.title": "Perguntas Frequentes",
    "faq.q1": "O que é um baixador de Scribd?",
    "faq.a1": "É uma ferramenta online gratuita que salva documentos públicos do Scribd no seu dispositivo em PDF, para ler offline, imprimir ou guardar na sua pasta de estudos.",
    "faq.q2": "Preciso de uma conta no Scribd para usar?",
    "faq.a2": "Não. Aqui não há login nem cadastro — é só colar o link do documento e baixar.",
    "faq.q3": "É realmente grátis?",
    "faq.a3": "Sim. Baixar documentos públicos não custa nada.",
    "faq.q4": "Em que formato vem o arquivo?",
    "faq.a4": "Um PDF padrão. Abre em qualquer leitor — no navegador, no Adobe Reader ou no visualizador do celular.",
    "faq.q5": "Dá para baixar pelo celular?",
    "faq.a5": "Sim. A ferramenta roda no navegador do celular, então funciona em smartphones e tablets além do computador.",
    "faq.q6": "Por que meu documento não baixa?",
    "faq.a6": "A ferramenta só processa documentos visíveis publicamente no Scribd. Se o documento for privado, removido ou restrito, não vai funcionar — confira se o link abre no seu navegador.",
    "faq.q7": "Baixar documentos do Scribd é legal?",
    "faq.a7": "Depende do documento. Baixe apenas o que você tem direito de guardar — seus próprios uploads, obras em domínio público ou materiais compartilhados com permissão. Respeite sempre os direitos do autor.",
    "faq.q8": "Vocês guardam cópias dos meus downloads?",
    "faq.a8": "Não. Os arquivos são processados temporariamente e excluídos automaticamente depois.",

    "blog.previewTitle": "Últimos Guias e Artigos",
    "blog.previewSubtitle": "Tutoriais detalhados sobre formatos de documentos, leitura digital e pesquisa.",
    "blog.readArticle": "Ler Guia",
    "blog.viewAll": "Ver Todos os Guias",
    "blog.backToGuides": "Voltar aos Guias",
    "blog.tableOfContents": "Índice",
    "blog.authorInsight": "Dica do Autor",
    "blog.quickCtaTitle": "Tem um link do Scribd pronto para converter?",
    "blog.quickCtaDesc": "Cole a URL na nossa ferramenta agora mesmo para visualizar as páginas e baixar em formato PDF.",
    "blog.quickCtaBtn": "Abrir Baixador de PDF",

    "footer.tagline": "Uma ferramenta online simples para ler e baixar documentos do Scribd e descobrir recursos de estudo.",
    "footer.quickLinks": "Links Rápidos",
    "footer.resources": "Recursos",
    "footer.legal": "Termos e Privacidade",
    "footer.scribdGuide": "Guia Scribd",
    "footer.downloadTips": "Dicas de Download",
    "footer.studyResources": "Recursos de Estudo",
    "footer.faqs": "Perguntas Frequentes",
    "footer.rights": "Todos os direitos reservados. Sem afiliação com Scribd Inc.",
    "footer.disclaimer": "Esta ferramenta compila slides e documentos públicos para fins acadêmicos e de pesquisa pessoal.",
    "footer.terms": "Termos de Serviço",
    "footer.privacy": "Política de Privacidade",

    "lang.detectBanner": "Identificamos que você pode preferir",
    "lang.switchBtn": "Mudar para",
    "lang.dismiss": "Manter Inglês",
  },

  es: {
    "nav.home": "Inicio",
    "nav.howItWorks": "Cómo Funciona",
    "nav.blog": "Blog",
    "nav.about": "Acerca de",
    "nav.contact": "Contacto",
    "nav.admin": "Panel Admin",
    "nav.downloadPdf": "Descargar PDF",
    "nav.freeBadge": "Gratis",
    "nav.tagline": "Conversor Limpio de Documentos y Presentaciones",

    "hero.badge": "Gratis • Sin Registro • Rápido",
    "hero.title": "Descargar PDFs de Scribd Gratis, Sin Registro",
    "hero.subtitle": "Pega un enlace de Scribd y recibe un PDF limpio y legible. Sin cuenta, sin instalar nada, sin costo.",
    "hero.placeholder": "Pega aquí la URL del documento de Scribd...",
    "hero.downloadBtn": "Descargar PDF",
    "hero.downloadingBtn": "Preparando tu PDF...",
    "hero.check1": "Sin Registro",
    "hero.check2": "PDF de Alta Calidad",
    "hero.check3": "Funciona en Todos los Dispositivos",

    "how.title": "Cómo Funciona",
    "how.step1": "Copia el enlace",
    "how.step1Desc": "Encuentra el documento en Scribd y copia su URL de la barra de direcciones.",
    "how.step2": "Pégalo arriba",
    "how.step2Desc": "Coloca el enlace en la casilla de descarga en la parte superior de esta página.",
    "how.step3": "Descarga el PDF",
    "how.step3Desc": "Recibe un PDF limpio para leer sin conexión, imprimir o guardar.",

    "benefits.title": "Por Qué Usar Esta Herramienta",
    "benefits.fastTitle": "Rápido",
    "benefits.fastDesc": "Pega el enlace y tu PDF estará listo enseguida. Sin salas de espera ni temporizadores.",
    "benefits.safeTitle": "Privado",
    "benefits.safeDesc": "Sin cuenta no hay formularios de registro ni datos personales que entregar.",
    "benefits.devicesTitle": "Funciona en Todo",
    "benefits.devicesDesc": "Úsalo en tu móvil, tableta u ordenador, directo en el navegador.",
    "benefits.freeTitle": "Gratis",
    "benefits.freeDesc": "Descargar documentos públicos no cuesta nada.",

    "guide.badge": "Base de Conocimiento",
    "guide.title": "Guía Completa para Descargar Documentos de Scribd",
    "guide.p1": "Scribd reúne millones de documentos compartidos: apuntes, artículos, presentaciones, manuales y libros. Tener una copia sin conexión facilita subrayar, anotar y llevarlos contigo.",
    "guide.subheading": "Descargar en Tres Pasos",
    "guide.step1Title": "1. Copia el enlace del documento",
    "guide.step1Desc": "Abre el documento en tu navegador y copia la URL de la barra de direcciones.",
    "guide.step2Title": "2. Pégalo en el descargador",
    "guide.step2Desc": "Coloca el enlace en la casilla de descarga en la parte superior de esta página.",
    "guide.step3Title": "3. Guarda tu PDF",
    "guide.step3Desc": "La herramienta lee las páginas del documento y genera un PDF limpio para que lo guardes.",

    "faq.title": "Preguntas Frecuentes",
    "faq.q1": "¿Qué es un descargador de Scribd?",
    "faq.a1": "Es una herramienta online gratuita que guarda documentos públicos de Scribd en tu dispositivo como PDF, para leerlos sin conexión, imprimirlos o guardarlos en tu carpeta de estudio.",
    "faq.q2": "¿Necesito una cuenta de Scribd para usarlo?",
    "faq.a2": "No. Aquí no hay login ni registro: solo pega el enlace del documento y descarga.",
    "faq.q3": "¿Es realmente gratis?",
    "faq.a3": "Sí. Descargar documentos públicos no cuesta nada.",
    "faq.q4": "¿En qué formato recibiré el archivo?",
    "faq.a4": "Un PDF estándar. Se abre en cualquier lector: tu navegador, Adobe Reader o el visor de tu móvil.",
    "faq.q5": "¿Puedo descargar documentos en mi móvil?",
    "faq.a5": "Sí. La herramienta funciona en el navegador del móvil, así que sirve en teléfonos y tabletas además del ordenador.",
    "faq.q6": "¿Por qué no se descarga mi documento?",
    "faq.a6": "La herramienta solo procesa documentos visibles públicamente en Scribd. Si el documento es privado, fue eliminado o está restringido, no funcionará. Comprueba que el enlace se abra en tu navegador.",
    "faq.q7": "¿Es legal descargar documentos de Scribd?",
    "faq.a7": "Depende del documento. Descarga solo lo que tengas derecho a guardar: tus propias subidas, obras de dominio público o materiales compartidos con permiso. Respeta siempre los derechos del autor.",
    "faq.q8": "¿Guardan copias de mis descargas?",
    "faq.a8": "No. Los archivos se procesan de forma temporal y se eliminan automáticamente después.",

    "blog.previewTitle": "Últimas Guías y Artículos",
    "blog.previewSubtitle": "Explora tutoriales sobre formatos de documentos, lectura digital y métodos de investigación.",
    "blog.readArticle": "Leer Guía",
    "blog.viewAll": "Ver Todas las Guías",
    "blog.backToGuides": "Volver a Guías",
    "blog.tableOfContents": "Índice de Contenidos",
    "blog.authorInsight": "Consejo del Autor",
    "blog.quickCtaTitle": "¿Tienes un enlace de Scribd listo para convertir?",
    "blog.quickCtaDesc": "Pega la URL en nuestra herramienta ahora mismo para obtener tu documento en formato PDF.",
    "blog.quickCtaBtn": "Abrir Descargador de PDF",

    "footer.tagline": "Una herramienta online sencilla para leer y descargar documentos de Scribd y descubrir recursos educativos.",
    "footer.quickLinks": "Enlaces Rápidos",
    "footer.resources": "Recursos",
    "footer.legal": "Legal y Privacidad",
    "footer.scribdGuide": "Guía de Scribd",
    "footer.downloadTips": "Consejos de Descarga",
    "footer.studyResources": "Recursos de Estudio",
    "footer.faqs": "Preguntas Frecuentes",
    "footer.rights": "Todos los derechos reservados. No afiliado con Scribd Inc.",
    "footer.disclaimer": "Esta utilidad recopila diapositivas y documentos públicos con fines académicos y de uso legítimo.",
    "footer.terms": "Términos del Servicio",
    "footer.privacy": "Política de Privacidad",

    "lang.detectBanner": "Parece que prefieres usar",
    "lang.switchBtn": "Cambiar a",
    "lang.dismiss": "Continuar en Inglés",
  },

  fr: {
    "nav.home": "Accueil",
    "nav.howItWorks": "Comment ça marche",
    "nav.blog": "Blog",
    "nav.about": "À propos",
    "nav.contact": "Contact",
    "nav.admin": "Panneau Admin",
    "nav.downloadPdf": "Télécharger PDF",
    "nav.freeBadge": "Gratuit",
    "nav.tagline": "Convertisseur Propre de Documents et Présentations",

    "hero.badge": "Gratuit • Sans Compte • Rapide",
    "hero.title": "Télécharger des PDF Scribd Gratuitement, Sans Compte",
    "hero.subtitle": "Collez un lien Scribd et recevez un PDF propre et lisible. Sans compte, sans installation, sans frais.",
    "hero.placeholder": "Collez l'URL du document Scribd ici...",
    "hero.downloadBtn": "Télécharger PDF",
    "hero.downloadingBtn": "Préparation de votre PDF...",
    "hero.check1": "Sans Compte",
    "hero.check2": "PDF Haute Qualité",
    "hero.check3": "Sur Tous les Appareils",

    "how.title": "Comment Ça Marche",
    "how.step1": "Copiez le lien",
    "how.step1Desc": "Trouvez le document sur Scribd et copiez son URL depuis la barre d'adresse.",
    "how.step2": "Collez-le ci-dessus",
    "how.step2Desc": "Mettez le lien dans la zone de téléchargement en haut de cette page.",
    "how.step3": "Téléchargez le PDF",
    "how.step3Desc": "Recevez un PDF propre à lire hors ligne, à imprimer ou à garder.",

    "benefits.title": "Pourquoi Utiliser Cet Outil",
    "benefits.fastTitle": "Rapide",
    "benefits.fastDesc": "Collez un lien et votre PDF est prêt juste après. Ni salle d'attente, ni compte à rebours.",
    "benefits.safeTitle": "Privé",
    "benefits.safeDesc": "Sans compte, aucun formulaire d'inscription ni donnée personnelle à fournir.",
    "benefits.devicesTitle": "Partout",
    "benefits.devicesDesc": "Utilisez-le sur téléphone, tablette ou ordinateur, directement dans le navigateur.",
    "benefits.freeTitle": "Gratuit",
    "benefits.freeDesc": "Télécharger des documents publics ne coûte rien.",

    "guide.badge": "Base de Connaissances",
    "guide.title": "Le Guide Complet pour Télécharger des Documents Scribd",
    "guide.p1": "Scribd regroupe des millions de documents partagés : notes de cours, articles, présentations, manuels et livres. Une copie hors ligne, c'est plus simple à surligner, à annoter et à emporter.",
    "guide.subheading": "Télécharger en Trois Étapes",
    "guide.step1Title": "1. Copiez le lien du document",
    "guide.step1Desc": "Ouvrez le document dans votre navigateur et copiez l'URL depuis la barre d'adresse.",
    "guide.step2Title": "2. Collez-le dans l'outil",
    "guide.step2Desc": "Mettez le lien dans la zone de téléchargement en haut de cette page.",
    "guide.step3Title": "3. Enregistrez votre PDF",
    "guide.step3Desc": "L'outil lit les pages du document et génère un PDF propre à conserver.",

    "faq.title": "Questions Fréquentes",
    "faq.q1": "Qu'est-ce qu'un téléchargeur Scribd ?",
    "faq.a1": "C'est un outil en ligne gratuit qui enregistre les documents publics de Scribd sur votre appareil au format PDF, pour les lire hors ligne, les imprimer ou les garder dans votre dossier d'étude.",
    "faq.q2": "Faut-il un compte Scribd pour l'utiliser ?",
    "faq.a2": "Non. Ici, ni connexion ni inscription : collez simplement le lien du document et téléchargez.",
    "faq.q3": "C'est vraiment gratuit ?",
    "faq.a3": "Oui. Télécharger des documents publics ne coûte rien.",
    "faq.q4": "Dans quel format vais-je recevoir le fichier ?",
    "faq.a4": "Un PDF standard. Il s'ouvre dans n'importe quel lecteur : votre navigateur, Adobe Reader ou la visionneuse de votre téléphone.",
    "faq.q5": "Puis-je télécharger sur mon téléphone ?",
    "faq.a5": "Oui. L'outil fonctionne dans le navigateur mobile : il marche sur téléphones et tablettes comme sur ordinateur.",
    "faq.q6": "Pourquoi mon document ne se télécharge pas ?",
    "faq.a6": "L'outil ne traite que les documents visibles publiquement sur Scribd. Si un document est privé, supprimé ou restreint, cela ne marchera pas. Vérifiez d'abord que le lien s'ouvre dans votre navigateur.",
    "faq.q7": "Est-il légal de télécharger des documents Scribd ?",
    "faq.a7": "Cela dépend du document. Téléchargez uniquement ce que vous avez le droit de conserver : vos propres fichiers, des œuvres du domaine public ou des contenus partagés avec autorisation. Respectez toujours le droit d'auteur.",
    "faq.q8": "Conservez-vous des copies de mes téléchargements ?",
    "faq.a8": "Non. Les fichiers sont traités temporairement puis supprimés automatiquement.",

    "blog.previewTitle": "Derniers Guides et Articles",
    "blog.previewSubtitle": "Découvrez des tutoriels sur les formats de documents, la lecture numérique et les méthodes de recherche.",
    "blog.readArticle": "Lire le Guide",
    "blog.viewAll": "Voir Tous les Guides",
    "blog.backToGuides": "Retour aux Guides",
    "blog.tableOfContents": "Table des Matières",
    "blog.authorInsight": "Conseil de l'Auteur",
    "blog.quickCtaTitle": "Un lien Scribd prêt à être converti ?",
    "blog.quickCtaDesc": "Collez l'URL dès maintenant dans notre outil pour télécharger votre document en PDF.",
    "blog.quickCtaBtn": "Ouvrir le Téléchargeur",

    "footer.tagline": "Un outil web simple pour lire et télécharger des documents Scribd et découvrir des ressources éducatives.",
    "footer.quickLinks": "Liens Rapides",
    "footer.resources": "Ressources",
    "footer.legal": "Légal & Confidentialité",
    "footer.scribdGuide": "Guide Scribd",
    "footer.downloadTips": "Conseils de Téléchargement",
    "footer.studyResources": "Ressources d'Étude",
    "footer.faqs": "FAQ",
    "footer.rights": "Tous droits réservés. Non affilié à Scribd Inc.",
    "footer.disclaimer": "Cet outil extrait des documents publics pour des besoins personnels de recherche et d'usage loyal.",
    "footer.terms": "Conditions d'Utilisation",
    "footer.privacy": "Politique de Confidentialité",

    "lang.detectBanner": "Vous préférez peut-être consulter le site en",
    "lang.switchBtn": "Passer au",
    "lang.dismiss": "Garder l'Anglais",
  },

  de: {
    "nav.home": "Startseite",
    "nav.howItWorks": "Funktionsweise",
    "nav.blog": "Blog",
    "nav.about": "Über uns",
    "nav.contact": "Kontakt",
    "nav.admin": "Admin-Panel",
    "nav.downloadPdf": "PDF Herunterladen",
    "nav.freeBadge": "Kostenlos",
    "nav.tagline": "Präziser Dokumenten- & Präsentations-Konverter",

    "hero.badge": "Kostenlos • Ohne Anmeldung • Schnell",
    "hero.title": "Scribd-PDFs Kostenlos Herunterladen, Ohne Anmeldung",
    "hero.subtitle": "Scribd-Link einfügen und ein sauberes, gut lesbares PDF erhalten. Kein Konto, keine App-Installation, keine Kosten.",
    "hero.placeholder": "Scribd Dokumenten-URL hier einfügen...",
    "hero.downloadBtn": "PDF Herunterladen",
    "hero.downloadingBtn": "PDF wird vorbereitet...",
    "hero.check1": "Ohne Anmeldung",
    "hero.check2": "Hochwertiges PDF",
    "hero.check3": "Auf Allen Geräten",

    "how.title": "So Funktioniert's",
    "how.step1": "Link kopieren",
    "how.step1Desc": "Finde das gewünschte Dokument auf Scribd und kopiere die URL aus der Adresszeile.",
    "how.step2": "Oben einfügen",
    "how.step2Desc": "Füge den Link in das Download-Feld oben auf dieser Seite ein.",
    "how.step3": "PDF herunterladen",
    "how.step3Desc": "Du erhältst ein sauberes PDF zum Offline-Lesen, Drucken oder Speichern.",

    "benefits.title": "Warum Dieses Tool Nutzen",
    "benefits.fastTitle": "Schnell",
    "benefits.fastDesc": "Link einfügen und dein PDF ist kurz darauf fertig. Keine Warteschleife, kein Countdown.",
    "benefits.safeTitle": "Privat",
    "benefits.safeDesc": "Kein Konto bedeutet keine Anmeldeformulare und keine persönlichen Daten.",
    "benefits.devicesTitle": "Überall Nutzbar",
    "benefits.devicesDesc": "Auf Handy, Tablet oder Computer nutzen — direkt im Browser.",
    "benefits.freeTitle": "Kostenlos",
    "benefits.freeDesc": "Öffentliche Dokumente herunterzuladen kostet nichts.",

    "guide.badge": "Wissensdatenbank",
    "guide.title": "Der Komplette Leitfaden zum Herunterladen von Scribd-Dokumenten",
    "guide.p1": "Scribd versammelt Millionen geteilter Dokumente: Skripte, Arbeiten, Präsentationen, Handbücher und Bücher. Eine Offline-Kopie lässt sich leichter markieren, kommentieren und mitnehmen.",
    "guide.subheading": "In Drei Schritten Herunterladen",
    "guide.step1Title": "1. Dokument-Link kopieren",
    "guide.step1Desc": "Öffne das Dokument im Browser und kopiere die URL aus der Adresszeile.",
    "guide.step2Title": "2. In den Downloader einfügen",
    "guide.step2Desc": "Füge den Link in das Download-Feld oben auf dieser Seite ein.",
    "guide.step3Title": "3. PDF speichern",
    "guide.step3Desc": "Das Tool liest die Seiten des Dokuments und erstellt ein sauberes PDF für dich.",

    "faq.title": "Häufige Fragen",
    "faq.q1": "Was ist ein Scribd-Downloader?",
    "faq.a1": "Ein kostenloses Online-Tool, das öffentliche Scribd-Dokumente als PDF auf dein Gerät speichert — zum Offline-Lesen, Drucken oder Ablegen in deinem Studienordner.",
    "faq.q2": "Brauche ich ein Scribd-Konto?",
    "faq.a2": "Nein. Hier gibt es weder Login noch Registrierung — einfach Dokument-Link einfügen und herunterladen.",
    "faq.q3": "Ist das wirklich kostenlos?",
    "faq.a3": "Ja. Öffentliche Dokumente herunterzuladen kostet nichts.",
    "faq.q4": "In welchem Format erhalte ich die Datei?",
    "faq.a4": "Als Standard-PDF. Es lässt sich in jedem Reader öffnen — im Browser, in Adobe Reader oder in der Handy-App.",
    "faq.q5": "Kann ich Dokumente auf dem Handy herunterladen?",
    "faq.a5": "Ja. Das Tool läuft im mobilen Browser und funktioniert auf Smartphones und Tablets genauso wie am Computer.",
    "faq.q6": "Warum lässt sich mein Dokument nicht herunterladen?",
    "faq.a6": "Das Tool verarbeitet nur Dokumente, die auf Scribd öffentlich sichtbar sind. Ist ein Dokument privat, gelöscht oder eingeschränkt, klappt es nicht — prüfe zuerst, ob sich der Link im Browser öffnen lässt.",
    "faq.q7": "Ist das Herunterladen von Scribd-Dokumenten legal?",
    "faq.a7": "Das hängt vom Dokument ab. Lade nur herunter, was du behalten darfst: eigene Uploads, gemeinfreie Werke oder Inhalte mit entsprechender Erlaubnis. Beachte stets das Urheberrecht.",
    "faq.q8": "Speichert ihr Kopien meiner Downloads?",
    "faq.a8": "Nein. Dateien werden nur vorübergehend verarbeitet und danach automatisch gelöscht.",

    "blog.previewTitle": "Neueste Leitfäden & Artikel",
    "blog.previewSubtitle": "Praktische Anleitungen zu Dateiformaten, digitalem Lesen und akademischer Recherche.",
    "blog.readArticle": "Artikel Lesen",
    "blog.viewAll": "Alle Anleitungen",
    "blog.backToGuides": "Zurück zu den Artikeln",
    "blog.tableOfContents": "Inhaltsverzeichnis",
    "blog.authorInsight": "Tipp des Autors",
    "blog.quickCtaTitle": "Haben Sie einen Scribd-Link parat?",
    "blog.quickCtaDesc": "Fügen Sie den Link jetzt in unser Tool ein, um Ihr Dokument als PDF-Datei zu erhalten.",
    "blog.quickCtaBtn": "PDF-Downloader Öffnen",

    "footer.tagline": "Ein einfaches Online-Werkzeug zum Lesen und Herunterladen von Scribd-Dokumenten und Entdecken von Studienressourcen.",
    "footer.quickLinks": "Schnellzugriff",
    "footer.resources": "Ressourcen",
    "footer.legal": "Rechtliches & Datenschutz",
    "footer.scribdGuide": "Scribd Ratgeber",
    "footer.downloadTips": "Download-Tipps",
    "footer.studyResources": "Lernhilfen",
    "footer.faqs": "FAQ",
    "footer.rights": "Alle Rechte vorbehalten. Keine Verbindung zu Scribd Inc.",
    "footer.disclaimer": "Dieses Werkzeug erfasst öffentlich zugängliche Folien für wissenschaftliche Zwecke und faire Nutzung.",
    "footer.terms": "Nutzungsbedingungen",
    "footer.privacy": "Datenschutzerklärung",

    "lang.detectBanner": "Möchten Sie die Website lieber auf Deutsch nutzen?",
    "lang.switchBtn": "Zu Deutsch wechseln",
    "lang.dismiss": "Auf Englisch bleiben",
  },

  id: {
    "nav.home": "Beranda",
    "nav.howItWorks": "Cara Kerja",
    "nav.blog": "Blog",
    "nav.about": "Tentang",
    "nav.contact": "Kontak",
    "nav.admin": "Panel Admin",
    "nav.downloadPdf": "Unduh PDF",
    "nav.freeBadge": "Gratis",
    "nav.tagline": "Konverter Dokumen & Presentasi Cepat",

    "hero.badge": "Gratis • Tanpa Login • Cepat",
    "hero.title": "Unduh PDF Scribd Gratis, Tanpa Login",
    "hero.subtitle": "Tempel tautan Scribd dan dapatkan PDF yang rapi dan mudah dibaca. Tanpa akun, tanpa instal aplikasi, tanpa biaya.",
    "hero.placeholder": "Tempel tautan dokumen Scribd di sini...",
    "hero.downloadBtn": "Unduh PDF",
    "hero.downloadingBtn": "Menyiapkan PDF-mu...",
    "hero.check1": "Tanpa Login",
    "hero.check2": "PDF Berkualitas Tinggi",
    "hero.check3": "Di Semua Perangkat",

    "how.title": "Cara Kerja",
    "how.step1": "Salin tautan",
    "how.step1Desc": "Temukan dokumen Scribd yang kamu mau, lalu salin URL-nya dari bilah alamat.",
    "how.step2": "Tempel di atas",
    "how.step2Desc": "Masukkan tautan ke kolom unduhan di bagian atas halaman ini.",
    "how.step3": "Unduh PDF-nya",
    "how.step3Desc": "Dapatkan PDF rapi yang bisa dibaca luring, dicetak, atau disimpan.",

    "benefits.title": "Kenapa Pakai Alat Ini",
    "benefits.fastTitle": "Cepat",
    "benefits.fastDesc": "Tempel tautan dan PDF-mu siap tak lama kemudian. Tanpa antre, tanpa hitung mundur.",
    "benefits.safeTitle": "Privat",
    "benefits.safeDesc": "Tanpa akun berarti tanpa formulir pendaftaran dan tanpa data pribadi.",
    "benefits.devicesTitle": "Bisa Di Mana Saja",
    "benefits.devicesDesc": "Pakai di ponsel, tablet, atau komputer, langsung dari peramban.",
    "benefits.freeTitle": "Gratis",
    "benefits.freeDesc": "Mengunduh dokumen publik tidak dipungut biaya.",

    "guide.badge": "Pusat Pengetahuan",
    "guide.title": "Panduan Lengkap Mengunduh Dokumen Scribd",
    "guide.p1": "Scribd menghimpun jutaan dokumen: catatan kuliah, makalah, presentasi, panduan, dan buku. Salinan luring lebih mudah ditandai, dianotasi, dan dibawa ke mana-mana.",
    "guide.subheading": "Mengunduh dalam Tiga Langkah",
    "guide.step1Title": "1. Salin tautan dokumen",
    "guide.step1Desc": "Buka dokumen di peramban dan salin URL dari bilah alamat.",
    "guide.step2Title": "2. Tempel ke pengunduh",
    "guide.step2Desc": "Masukkan tautan ke kolom unduhan di bagian atas halaman ini.",
    "guide.step3Title": "3. Simpan PDF-mu",
    "guide.step3Desc": "Alat akan membaca halaman dokumen dan membuatkan PDF yang rapi untuk disimpan.",

    "faq.title": "Pertanyaan Umum",
    "faq.q1": "Apa itu pengunduh Scribd?",
    "faq.a1": "Alat online gratis yang menyimpan dokumen publik Scribd ke perangkatmu sebagai PDF, supaya bisa dibaca luring, dicetak, atau disimpan di folder belajarmu.",
    "faq.q2": "Perlu akun Scribd untuk menggunakannya?",
    "faq.a2": "Tidak. Di sini tanpa login atau daftar — cukup tempel tautan dokumen lalu unduh.",
    "faq.q3": "Benarkah gratis?",
    "faq.a3": "Ya. Mengunduh dokumen publik tidak dipungut biaya.",
    "faq.q4": "Format berkas apa yang akan saya terima?",
    "faq.a4": "PDF standar. Bisa dibuka di pembaca mana pun — peramban, Adobe Reader, atau penampil bawaan ponsel.",
    "faq.q5": "Bisa mengunduh dokumen lewat ponsel?",
    "faq.a5": "Bisa. Alat ini berjalan di peramban ponsel, jadi berfungsi di smartphone dan tablet maupun komputer.",
    "faq.q6": "Kenapa dokumen saya tidak terunduh?",
    "faq.a6": "Alat ini hanya memproses dokumen yang terlihat publik di Scribd. Kalau dokumen bersifat privat, dihapus, atau dibatasi, unduhan tidak akan jalan — pastikan tautannya bisa dibuka di peramban dulu.",
    "faq.q7": "Apakah mengunduh dokumen Scribd itu legal?",
    "faq.a7": "Tergantung dokumennya. Unduh hanya yang memang boleh kamu simpan: unggahanmu sendiri, karya domain publik, atau materi yang dibagikan dengan izin. Selalu hormati hak cipta penulisnya.",
    "faq.q8": "Apakah kalian menyimpan salinan unduhan saya?",
    "faq.a8": "Tidak. Berkas hanya diproses sementara lalu dihapus otomatis.",

    "blog.previewTitle": "Panduan & Artikel Terbaru",
    "blog.previewSubtitle": "Pelajari kiat praktis seputar format dokumen, membaca digital, dan metode riset.",
    "blog.readArticle": "Baca Panduan",
    "blog.viewAll": "Lihat Semua Panduan",
    "blog.backToGuides": "Kembali ke Panduan",
    "blog.tableOfContents": "Daftar Isi",
    "blog.authorInsight": "Wawasan Penulis",
    "blog.quickCtaTitle": "Punya tautan Scribd yang ingin diubah?",
    "blog.quickCtaDesc": "Tempel URL ke alat kami sekarang untuk mengunduh dokumen Anda sebagai file PDF utuh.",
    "blog.quickCtaBtn": "Buka Pengunduh PDF",

    "footer.tagline": "Alat daring sederhana untuk membaca dan mengunduh dokumen Scribd serta menemukan materi belajar.",
    "footer.quickLinks": "Tautan Cepat",
    "footer.resources": "Sumber Daya",
    "footer.legal": "Hukum & Privasi",
    "footer.scribdGuide": "Panduan Scribd",
    "footer.downloadTips": "Tips Mengunduh",
    "footer.studyResources": "Materi Kuliah",
    "footer.faqs": "Tanya Jawab",
    "footer.rights": "Hak cipta dilindungi. Tidak berafiliasi dengan Scribd Inc.",
    "footer.disclaimer": "Alat ini mengompilasi salindia dan dokumen publik untuk keperluan riset akademis dan penggunaan wajar.",
    "footer.terms": "Ketentuan Layanan",
    "footer.privacy": "Kebijakan Privasi",

    "lang.detectBanner": "Sepertinya Anda lebih nyaman membaca dalam",
    "lang.switchBtn": "Ganti ke",
    "lang.dismiss": "Tetap Bahasa Inggris",
  },

  pt: {
    // pt maps directly to br translations
  } as unknown as Record<string, string>
};

// Fill pt with br as fallback
TRANSLATIONS.pt = TRANSLATIONS.br;

export const CUSTOM_TRANSLATIONS_STORAGE_KEY = "scribd_custom_translations";

export function getCustomTranslations(): Record<string, Record<string, string>> {
  try {
    const raw = localStorage.getItem(CUSTOM_TRANSLATIONS_STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.error("Error reading custom translations", e);
  }
  return {};
}

export function saveCustomTranslation(lang: SupportedLanguage, key: string, value: string) {
  try {
    const custom = getCustomTranslations();
    if (!custom[lang]) custom[lang] = {};
    custom[lang][key] = value;
    localStorage.setItem(CUSTOM_TRANSLATIONS_STORAGE_KEY, JSON.stringify(custom));
  } catch (e) {
    console.error("Error saving custom translation", e);
  }
}

export function t(key: string, lang: SupportedLanguage = "en"): string {
  // Normalize pt -> br
  const targetLang = lang === "pt" ? "br" : lang;

  // Check custom database overrides first
  const custom = getCustomTranslations();
  if (custom[targetLang]?.[key]) {
    return custom[targetLang][key];
  }

  // Check language dictionary
  const dict = TRANSLATIONS[targetLang];
  if (dict && dict[key]) {
    return dict[key];
  }

  // Fallback to English
  if (TRANSLATIONS.en[key]) {
    return TRANSLATIONS.en[key];
  }

  // Fallback to key itself
  return key;
}

export function detectBrowserLanguage(): SupportedLanguage {
  if (typeof navigator === "undefined") return "en";

  const languages = navigator.languages || [navigator.language || "en"];
  for (const l of languages) {
    const lower = l.toLowerCase();
    if (lower.startsWith("pt") || lower.includes("br")) return "br";
    if (lower.startsWith("es") || lower.includes("mx") || lower.includes("es")) return "es";
    if (lower.startsWith("fr")) return "fr";
    if (lower.startsWith("de")) return "de";
    if (lower.startsWith("id")) return "id";
  }
  return "en";
}
