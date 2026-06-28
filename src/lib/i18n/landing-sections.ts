import type { IconName } from "@/components/ui/Icon";
import type { SocialIconName } from "@/components/ui/SocialIcon";

export type EventSlug =
  | "fashion-show"
  | "turkey-study"
  | "masterclass"
  | "team-join";

export type BranchSlug = "tashkent" | "andijon" | "fargona" | "samarqand";

export type LandingSectionsContent = {
  events: {
    ariaLabel: string;
    number: string;
    badge: string;
    title: string;
    titleEm: string;
    description: string;
    items: Array<{
      slug: EventSlug;
      title: string;
      text: string;
      icon: IconName;
    }>;
  };
  teachers: {
    ariaLabel: string;
    number: string;
    badge: string;
    title: string;
    titleEm: string;
    description: string;
    experienceLabel: string;
    studentsLabel: string;
    items: Array<{
      id: string;
      name: string;
      experience: string;
      students: string;
      specialty: string;
    }>;
  };
  branches: {
    ariaLabel: string;
    number: string;
    badge: string;
    title: string;
    titleEm: string;
    description: string;
    mapLinkLabel: string;
    items: Array<{
      slug: BranchSlug;
      city: string;
      address: string;
      phone: string;
      link: string;
    }>;
  };
  courses: {
    ariaLabel: string;
    number: string;
    badge: string;
    title: string;
    titleEm: string;
    description: string;
    enrollCta: string;
    featuredBadge: string;
    items: Array<{
      id: string;
      label: string;
      title: string;
      age: string;
      featured?: boolean;
      specs: Array<{ label: string; value: string }>;
    }>;
  };
  results: {
    ariaLabel: string;
    number: string;
    badge: string;
    title: string;
    titleEm: string;
    description: string;
    placeholder: string;
    items: Array<{
      id: string;
      name: string;
      role: string;
      text: string;
      placeholder?: boolean;
    }>;
  };
  faq: {
    ariaLabel: string;
    number: string;
    badge: string;
    title: string;
    titleEm: string;
    description: string;
    items: Array<{ index: string; question: string; answer: string }>;
  };
  footer: {
    tagline: string;
    rights: string;
    navTitle: string;
    contactTitle: string;
    socialTitle: string;
    phone: string;
    email: string;
    address: string;
    cta: string;
    social: Array<{
      id: string;
      label: string;
      href: string;
      icon: SocialIconName;
    }>;
  };
};

export const landingSectionsUz: LandingSectionsContent = {
  events: {
    ariaLabel: "Qo'shimcha tadbirlar",
    number: "06",
    badge: "Tadbirlar",
    title: "Bilimdan",
    titleEm: "haqiqiy tajribaga",
    description:
      "Darsdan tashqari imkoniyatlar — sahna, xalqaro tajriba va professional hamjamiyat.",
    items: [
      {
        slug: "fashion-show",
        title: "GIGU Fashion Show",
        text: "O'quvchilar o'z kolleksiyalarini katta sahnalarda namoyish qiladi, mashhurlar ishtirok etadigan tadbirlarda qatnashadi.",
        icon: "sparkles",
      },
      {
        slug: "turkey-study",
        title: "Turkiyada ta'lim",
        text: "Malaka oshirish uchun Turkiyadagi hamkor akademiyalarda o'qish va tajriba orttirish imkoniyati mavjud.",
        icon: "plane",
      },
      {
        slug: "masterclass",
        title: "Bepul master-klass va treninglar",
        text: "Psixologlar, tajribali dizaynerlar va tadbirkorlar ishtirokida qo'shimcha bilimlar beriladi.",
        icon: "lightbulb",
      },
      {
        slug: "team-join",
        title: "Jamoaga qo'shilish imkoniyati",
        text: "Faol o'quvchilar GIGU jamoasi va loyihalariga jalb qilinadi.",
        icon: "users",
      },
    ],
  },
  teachers: {
    ariaLabel: "Ustozlar",
    number: "07",
    badge: "Ustozlar",
    title: "Tajribali",
    titleEm: "ustozlar jamoasi",
    description:
      "Har bir ustoz o'z yo'nalishida chuqur bilim va amaliy tajribaga ega mutaxassis.",
    experienceLabel: "Tajriba",
    studentsLabel: "O'quvchilar soni",
    items: [
      {
        id: "1",
        name: "Nilufar Karimova",
        experience: "10+ yil",
        students: "500+",
        specialty:
          "Tikuv texnologiyasi va amaliy mashg'ulotlarda aniqlik va tez o'rgatish uslubi",
      },
      {
        id: "2",
        name: "Madina Tosheva",
        experience: "15+ yil",
        students: "800+",
        specialty: "Moda dizayni va eskiz chizishda kreativ yondashuv",
      },
      {
        id: "3",
        name: "Dilnoza Rahimova",
        experience: "20+ yil",
        students: "1000+",
        specialty:
          "Konstruktsiya va modellashtirish bo'yicha chuqur bilim",
      },
      {
        id: "4",
        name: "Kamola Ergasheva",
        experience: "7+ yil",
        students: "300+",
        specialty:
          "O'quvchilar bilan individual ishlash va motivatsiya",
      },
      {
        id: "5",
        name: "Sevara Yusupova",
        experience: "12+ yil",
        students: "600+",
        specialty:
          "Bichish va tikishda zamonaviy texnikalar bo'yicha mutaxassis",
      },
      {
        id: "6",
        name: "Gulnoza Sobirova",
        experience: "9+ yil",
        students: "450+",
        specialty: "Trikotaj va bezak ishlarida amaliy yondashuv",
      },
      {
        id: "7",
        name: "Feruza Olimova",
        experience: "18+ yil",
        students: "900+",
        specialty:
          "Milliy va zamonaviy liboslar konstruksiyasi bo'yicha tajriba",
      },
      {
        id: "8",
        name: "Shahnoza Aliyeva",
        experience: "8+ yil",
        students: "400+",
        specialty: "Stil va imidj yaratishda kreativ yondashuv",
      },
    ],
  },
  branches: {
    ariaLabel: "Filiallar",
    number: "08",
    badge: "Filiallar",
    title: "4 ta filial —",
    titleEm: "sizga yaqin",
    description:
      "Har bir filial zamonaviy jihozlangan ustaxonalar va qulay o'qish muhiti bilan jihozlangan.",
    mapLinkLabel: "Xaritada ko'rish",
    items: [
      {
        slug: "tashkent",
        city: "Toshkent",
        address: "Toshkent sh., manzil qo'shiladi",
        phone: "+998 71 000 00 00",
        link: "https://maps.google.com",
      },
      {
        slug: "andijon",
        city: "Andijon",
        address: "Andijon sh., manzil qo'shiladi",
        phone: "+998 74 000 00 00",
        link: "https://maps.google.com",
      },
      {
        slug: "fargona",
        city: "Farg'ona",
        address: "Farg'ona sh., manzil qo'shiladi",
        phone: "+998 73 000 00 00",
        link: "https://maps.google.com",
      },
      {
        slug: "samarqand",
        city: "Samarqand",
        address: "Samarqand sh., manzil qo'shiladi",
        phone: "+998 66 000 00 00",
        link: "https://maps.google.com",
      },
    ],
  },
  courses: {
    ariaLabel: "Kurslar",
    number: "09",
    badge: "Kurslar",
    title: "Sizga mos",
    titleEm: "ta'lim dasturi",
    description:
      "Yosh dizaynerlar va professional tikuvchilik yo'nalishida ikkita asosiy dastur.",
    enrollCta: "Ro'yxatdan o'tish",
    featuredBadge: "Tavsiya etiladi",
    items: [
      {
        id: "young-designer",
        label: "KURS 1",
        title: "Men — yosh dizaynerman",
        age: "11–14 yosh",
        specs: [
          { label: "Kurs davomiyligi", value: "12 oy" },
          { label: "Dars", value: "Haftada 2 marta" },
          { label: "Dars davomiyligi", value: "Har bir dars 2,5 soat" },
          { label: "Oyiga", value: "8 ta amaliy dars" },
          { label: "Qo'shimcha", value: "Yordamchi ustoz" },
          { label: "Ish qurollari", value: "Taqdim qilinadi" },
          { label: "Darsdan tashqari shug'ullanish", value: "Imkoniyati mavjud" },
        ],
      },
      {
        id: "professional",
        label: "KURS 2",
        title: "Noldan boshlab professional ta'lim dasturi",
        age: "14+ yosh",
        featured: true,
        specs: [
          { label: "Semestrlar", value: "4 ta semestr" },
          { label: "Dars", value: "Haftada 3 marta" },
          { label: "Dars davomiyligi", value: "Har bir dars 2,5 soat" },
          { label: "Ish qurollari", value: "Taqdim qilinadi" },
          { label: "Qo'shimcha", value: "Yordamchi ustoz" },
          { label: "Darsdan tashqari shug'ullanish", value: "Imkoniyati mavjud" },
        ],
      },
    ],
  },
  results: {
    ariaLabel: "Natijalar",
    number: "10",
    badge: "Natijalar",
    title: "O'quvchilarimiz",
    titleEm: "natijalari",
    description:
      "Ayol-qizlarimiz kurs davomida va kursdan so'ng turli xil kiyimlarni noldan tikishni o'rganishadi, atelye ochishadi, o'z brendini yaratishadi, daromad topishni boshlashadi.",
    placeholder: "Ma'lumot qo'shiladi",
    items: [
      {
        id: "1",
        name: "O'quvchi 1",
        role: "MIRASSA brendi asoschisi",
        text: "15 yoshida o'qishni boshlagan. Bugun o'z brendiga ega va mashhur blogerlar bilan hamkorlik qiladi.",
      },
      {
        id: "2",
        name: "O'quvchi 2",
        role: "Bitiruvchi",
        text: "",
        placeholder: true,
      },
    ],
  },
  faq: {
    ariaLabel: "Savollar",
    number: "11",
    badge: "Savollar",
    title: "Ko'p beriladigan",
    titleEm: "savollar",
    description: "Qisqa va aniq javoblar — ro'yxatdan o'tishdan oldin bilishingiz kerak bo'lgan narsalar.",
    items: [
      {
        index: "01",
        question: "Manzil qulaymi?",
        answer:
          "Ha, 4 ta filialimiz ham qulay hududlarda — shahar markaziga yaqin joylashgan. Avtobus, marshrutka va Toshkentda esa metro orqali bemalol yetib kelish mumkin.",
      },
      {
        index: "02",
        question: "Dars soatlari mos keladimi?",
        answer:
          "Ha, bizda 3 xil smena mavjud: ertalab, tushlik va kechki. Siz o'zingizga eng qulay vaqtni tanlaysiz.",
      },
      {
        index: "03",
        question: "Ish qurollari bepul beriladimi yoki sotib olinadimi?",
        answer:
          "Ish qurollari sotib olinmaydi. Ular akademiya ichida foydalanish uchun taqdim qilinadi va dars jarayonida bemalol ishlatiladi.",
      },
      {
        index: "04",
        question: "Narxi qimmat emasmi?",
        answer:
          "Kurs narxi berilayotgan imkoniyatlar va bozor qiymatiga nisbatan eng maqbul darajada. Ko'plab o'quvchilarimiz kurs davomida yoki yakunidan so'ng sarflagan pulini qaytarib olish darajasiga chiqishadi.",
      },
    ],
  },
  footer: {
    tagline: "Kelajak modangizni shu yerda yarating",
    rights: "Barcha huquqlar himoyalangan.",
    navTitle: "Navigatsiya",
    contactTitle: "Aloqa",
    socialTitle: "Ijtimoiy tarmoqlar",
    phone: "+998 71 000 00 00",
    email: "info@gigu.uz",
    address: "Toshkent, O'zbekiston",
    cta: "Birinchi bepul darsga yoziling",
    social: [
      {
        id: "instagram",
        label: "Instagram",
        href: "https://instagram.com/gigu.uz",
        icon: "instagram",
      },
      {
        id: "telegram",
        label: "Telegram",
        href: "https://t.me/giguuz",
        icon: "telegram",
      },
      {
        id: "youtube",
        label: "YouTube",
        href: "https://youtube.com/@giguuz",
        icon: "youtube",
      },
      {
        id: "facebook",
        label: "Facebook",
        href: "https://facebook.com/giguuz",
        icon: "facebook",
      },
    ],
  },
};

export const landingSectionsRu: LandingSectionsContent = {
  events: {
    ariaLabel: "Дополнительные мероприятия",
    number: "06",
    badge: "Мероприятия",
    title: "От знаний —",
    titleEm: "к реальному опыту",
    description:
      "Возможности за рамками занятий — сцена, международный опыт и профессиональное сообщество.",
    items: [
      {
        slug: "fashion-show",
        title: "GIGU Fashion Show",
        text: "Ученицы представляют коллекции на больших сценах и участвуют в мероприятиях со знаменитостями.",
        icon: "sparkles",
      },
      {
        slug: "turkey-study",
        title: "Обучение в Турции",
        text: "Возможность учиться и повышать квалификацию в академиях-партнёрах в Турции.",
        icon: "plane",
      },
      {
        slug: "masterclass",
        title: "Бесплатные мастер-классы",
        text: "Дополнительные знания от психологов, опытных дизайнеров и предпринимателей.",
        icon: "lightbulb",
      },
      {
        slug: "team-join",
        title: "Вступление в команду GIGU",
        text: "Активные ученицы привлекаются к команде и проектам GIGU.",
        icon: "users",
      },
    ],
  },
  teachers: {
    ariaLabel: "Преподаватели",
    number: "07",
    badge: "Преподаватели",
    title: "Команда",
    titleEm: "опытных наставников",
    description:
      "Каждый преподаватель — специалист с глубокими знаниями и практическим опытом.",
    experienceLabel: "Опыт",
    studentsLabel: "Учениц",
    items: landingSectionsUz.teachers.items.map((item) => ({ ...item })),
  },
  branches: {
    ariaLabel: "Филиалы",
    number: "08",
    badge: "Филиалы",
    title: "4 филиала —",
    titleEm: "рядом с вами",
    description:
      "Каждый филиал оснащён современными мастерскими и комфортной средой для обучения.",
    mapLinkLabel: "Открыть на карте",
    items: [
      {
        slug: "tashkent",
        city: "Ташкент",
        address: "г. Ташкент, адрес будет добавлен",
        phone: "+998 71 000 00 00",
        link: "https://maps.google.com",
      },
      {
        slug: "andijon",
        city: "Андижан",
        address: "г. Андижан, адрес будет добавлен",
        phone: "+998 74 000 00 00",
        link: "https://maps.google.com",
      },
      {
        slug: "fargona",
        city: "Фергана",
        address: "г. Фергана, адрес будет добавлен",
        phone: "+998 73 000 00 00",
        link: "https://maps.google.com",
      },
      {
        slug: "samarqand",
        city: "Самарканд",
        address: "г. Самарканд, адрес будет добавлен",
        phone: "+998 66 000 00 00",
        link: "https://maps.google.com",
      },
    ],
  },
  courses: {
    ariaLabel: "Курсы",
    number: "09",
    badge: "Курсы",
    title: "Подходящая",
    titleEm: "программа",
    description: "Две основные программы для юных дизайнеров и профессионального обучения.",
    enrollCta: "Записаться",
    featuredBadge: "Рекомендуем",
    items: [
      {
        id: "young-designer",
        label: "КУРС 1",
        title: "Я — юный дизайнер",
        age: "11–14 лет",
        specs: [
          { label: "Длительность", value: "12 месяцев" },
          { label: "Занятия", value: "2 раза в неделю" },
          { label: "Длительность урока", value: "2,5 часа" },
          { label: "В месяц", value: "8 практических занятий" },
          { label: "Дополнительно", value: "Помощник преподавателя" },
          { label: "Инструменты", value: "Предоставляются" },
          { label: "Внеурочные занятия", value: "Доступны" },
        ],
      },
      {
        id: "professional",
        label: "КУРС 2",
        title: "Профессиональная программа с нуля",
        age: "14+ лет",
        featured: true,
        specs: [
          { label: "Семестры", value: "4 семестра" },
          { label: "Занятия", value: "3 раза в неделю" },
          { label: "Длительность урока", value: "2,5 часа" },
          { label: "Инструменты", value: "Предоставляются" },
          { label: "Дополнительно", value: "Помощник преподавателя" },
          { label: "Внеурочные занятия", value: "Доступны" },
        ],
      },
    ],
  },
  results: {
    ariaLabel: "Результаты",
    number: "10",
    badge: "Результаты",
    title: "Результаты",
    titleEm: "наших учениц",
    description:
      "Ученицы учатся шить с нуля, открывают ателье, создают бренды и начинают зарабатывать.",
    placeholder: "Информация будет добавлена",
    items: [
      {
        id: "1",
        name: "Ученица 1",
        role: "Основатель бренда MIRASSA",
        text: "Начала учиться в 15 лет. Сегодня имеет свой бренд и сотрудничает с известными блогерами.",
      },
      {
        id: "2",
        name: "Ученица 2",
        role: "Выпускница",
        text: "",
        placeholder: true,
      },
    ],
  },
  faq: {
    ariaLabel: "Вопросы",
    number: "11",
    badge: "FAQ",
    title: "Часто задаваемые",
    titleEm: "вопросы",
    description: "Краткие ответы на главные вопросы перед записью.",
    items: [
      {
        index: "01",
        question: "Удобно ли добираться?",
        answer:
          "Да, все 4 филиала расположены в удобных районах, близко к центру города.",
      },
      {
        index: "02",
        question: "Подходят ли часы занятий?",
        answer:
          "Да, у нас 3 смены: утренняя, дневная и вечерняя. Вы выбираете удобное время.",
      },
      {
        index: "03",
        question: "Инструменты бесплатные?",
        answer:
          "Инструменты не нужно покупать — они предоставляются для использования в академии.",
      },
      {
        index: "04",
        question: "Не слишком ли дорого?",
        answer:
          "Стоимость курса оптимальна относительно возможностей и рыночной ценности.",
      },
    ],
  },
  footer: {
    tagline: "Создайте будущее своей моды здесь",
    rights: "Все права защищены.",
    navTitle: "Навигация",
    contactTitle: "Контакты",
    socialTitle: "Соцсети",
    phone: "+998 71 000 00 00",
    email: "info@gigu.uz",
    address: "Ташкент, Узбекистан",
    cta: "Запишитесь на первый бесплатный урок",
    social: landingSectionsUz.footer.social.map((item) => ({ ...item })),
  },
};

export const landingSectionsEn: LandingSectionsContent = {
  events: {
    ariaLabel: "Extra events",
    number: "06",
    badge: "Events",
    title: "From learning to",
    titleEm: "real experience",
    description:
      "Opportunities outside lessons — the runway, international experience, and a professional community.",
    items: [
      {
        slug: "fashion-show",
        title: "GIGU Fashion Show",
        text: "Students showcase collections on major stages and join events featuring celebrities.",
        icon: "sparkles",
      },
      {
        slug: "turkey-study",
        title: "Training in Turkey",
        text: "Advance your skills at partner academies in Turkey.",
        icon: "plane",
      },
      {
        slug: "masterclass",
        title: "Free masterclasses",
        text: "Extra knowledge from psychologists, experienced designers, and entrepreneurs.",
        icon: "lightbulb",
      },
      {
        slug: "team-join",
        title: "Join the GIGU team",
        text: "Active students are invited into GIGU projects and the core team.",
        icon: "users",
      },
    ],
  },
  teachers: {
    ariaLabel: "Teachers",
    number: "07",
    badge: "Teachers",
    title: "Experienced",
    titleEm: "mentors",
    description:
      "Each teacher is a specialist with deep knowledge and hands-on experience.",
    experienceLabel: "Experience",
    studentsLabel: "Students",
    items: landingSectionsUz.teachers.items.map((item) => ({ ...item })),
  },
  branches: {
    ariaLabel: "Branches",
    number: "08",
    badge: "Branches",
    title: "4 branches —",
    titleEm: "near you",
    description:
      "Every branch features modern workshops and a comfortable learning environment.",
    mapLinkLabel: "View on map",
    items: [
      {
        slug: "tashkent",
        city: "Tashkent",
        address: "Tashkent, address to be added",
        phone: "+998 71 000 00 00",
        link: "https://maps.google.com",
      },
      {
        slug: "andijon",
        city: "Andijan",
        address: "Andijan, address to be added",
        phone: "+998 74 000 00 00",
        link: "https://maps.google.com",
      },
      {
        slug: "fargona",
        city: "Fergana",
        address: "Fergana, address to be added",
        phone: "+998 73 000 00 00",
        link: "https://maps.google.com",
      },
      {
        slug: "samarqand",
        city: "Samarkand",
        address: "Samarkand, address to be added",
        phone: "+998 66 000 00 00",
        link: "https://maps.google.com",
      },
    ],
  },
  courses: {
    ariaLabel: "Courses",
    number: "09",
    badge: "Courses",
    title: "The right",
    titleEm: "program for you",
    description: "Two core programs for young designers and professional training.",
    enrollCta: "Enroll now",
    featuredBadge: "Recommended",
    items: [
      {
        id: "young-designer",
        label: "COURSE 1",
        title: "I'm a young designer",
        age: "Ages 11–14",
        specs: [
          { label: "Duration", value: "12 months" },
          { label: "Classes", value: "Twice a week" },
          { label: "Class length", value: "2.5 hours each" },
          { label: "Monthly", value: "8 practical sessions" },
          { label: "Extra", value: "Assistant teacher" },
          { label: "Tools", value: "Provided" },
          { label: "After-class practice", value: "Available" },
        ],
      },
      {
        id: "professional",
        label: "COURSE 2",
        title: "Professional program from scratch",
        age: "Ages 14+",
        featured: true,
        specs: [
          { label: "Semesters", value: "4 semesters" },
          { label: "Classes", value: "3 times a week" },
          { label: "Class length", value: "2.5 hours each" },
          { label: "Tools", value: "Provided" },
          { label: "Extra", value: "Assistant teacher" },
          { label: "After-class practice", value: "Available" },
        ],
      },
    ],
  },
  results: {
    ariaLabel: "Results",
    number: "10",
    badge: "Results",
    title: "Our students'",
    titleEm: "achievements",
    description:
      "Students learn to sew from scratch, open ateliers, build brands, and start earning.",
    placeholder: "Details coming soon",
    items: [
      {
        id: "1",
        name: "Student 1",
        role: "Founder of MIRASSA brand",
        text: "Started at 15. Now runs her own brand and collaborates with popular bloggers.",
      },
      {
        id: "2",
        name: "Student 2",
        role: "Graduate",
        text: "",
        placeholder: true,
      },
    ],
  },
  faq: {
    ariaLabel: "FAQ",
    number: "11",
    badge: "FAQ",
    title: "Frequently asked",
    titleEm: "questions",
    description: "Quick answers before you enroll.",
    items: [
      {
        index: "01",
        question: "Is the location convenient?",
        answer:
          "Yes, all 4 branches are in convenient areas, close to city centers.",
      },
      {
        index: "02",
        question: "Do class times work for me?",
        answer:
          "Yes, we offer morning, afternoon, and evening groups.",
      },
      {
        index: "03",
        question: "Are tools provided for free?",
        answer:
          "Tools are not purchased — they are provided for use during classes.",
      },
      {
        index: "04",
        question: "Is it too expensive?",
        answer:
          "The course price is fair relative to the opportunities and market value.",
      },
    ],
  },
  footer: {
    tagline: "Create the future of your fashion here",
    rights: "All rights reserved.",
    navTitle: "Navigation",
    contactTitle: "Contact",
    socialTitle: "Social media",
    phone: "+998 71 000 00 00",
    email: "info@gigu.uz",
    address: "Tashkent, Uzbekistan",
    cta: "Sign up for your first free lesson",
    social: landingSectionsUz.footer.social.map((item) => ({ ...item })),
  },
};
