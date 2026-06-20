export type Locale = "uz" | "ru" | "en";

import type { LandingSectionsContent } from "./landing-sections";
import {
  landingSectionsEn,
  landingSectionsRu,
  landingSectionsUz,
} from "./landing-sections";

export const locales: Locale[] = ["uz", "ru", "en"];

export const defaultLocale: Locale = "uz";

export function isValidLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function localePath(locale: Locale, pathname = ""): string {
  const normalized = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return normalized === "/" ? `/${locale}` : `/${locale}${normalized}`;
}

export const localeLabels: Record<Locale, string> = {
  uz: "O'Z",
  ru: "RU",
  en: "EN",
};

export type Translations = {
  nav: {
    about: string;
    advantages: string;
    teachers: string;
    results: string;
    courses: string;
    branches: string;
    faq: string;
    cta: string;
    menu: string;
    close: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    titleLine3: string;
    subtitle: string;
    cta: string;
    ctaSecondary: string;
    marquee: string[];
  };
  advantages: {
    ariaLabel: string;
    items: {
      branches: { value: string; label: string };
      graduates: { value: string; label: string };
      staff: { value: string; label: string };
      experience: { value: string; label: string };
    };
  };
  introducing: {
    ariaLabel: string;
    badge: string;
    title: string;
    titleEm: string;
    description: string;
    pillars: Array<{
      index: string;
      title: string;
      text: string;
    }>;
  };
  studyExperience: {
    ariaLabel: string;
    badge: string;
    title: string;
    titleEm: string;
    description: string;
    features: Array<{
      slug:
        | "assistant-teacher"
        | "flexible-schedule"
        | "equipped-workspace"
        | "sew-your-clothes";
      title: string;
      text: string;
    }>;
  };
  why: {
    badge: string;
    title: string;
    titleEm: string;
    description: string;
    posts: Array<{
      title: string;
      description: string;
    }>;
    audience: {
      title: string;
      items: Array<{
        title: string;
        description: string;
        icon: "graduation" | "briefcase" | "home" | "users";
      }>;
    };
    market: {
      cta: string;
      ctaHref: string;
      items: Array<{
        icon: "clipboardList" | "wallet" | "mapPin" | "trending";
        value: string;
        tabLabel: string;
        label: string;
        description: string;
      }>;
    };
  };
  footer: LandingSectionsContent["footer"];
} & LandingSectionsContent;

export const translations: Record<Locale, Translations> = {
  uz: {
    nav: {
      about: "Biz haqimizda",
      advantages: "Afzalliklar",
      teachers: "Ustozlar",
      results: "Natijalar",
      courses: "Kurslar",
      branches: "Filiallar",
      faq: "Savollar",
      cta: "Ro'yxatdan o'tish",
      menu: "Menyu",
      close: "Yopish",
    },
    hero: {
      badge: "Moda Akademiyasi",
      titleLine1: "Kelajak",
      titleLine2: "modangizni",
      titleLine3: "shu yerda yarating",
      subtitle:
        "GIGU Moda Akademiyasi — tikuvchilik va dizaynerlik sohasida professional ta'lim markazi",
      cta: "Birinchi bepul darsga yoziling",
      ctaSecondary: "Kurslarni ko'rish",
      marquee: [
        "MODA & SAN'AT",
        "TIKUVCHILIK",
        "PROFESSIONAL TA'LIM",
        "TAJRIBALI USTOZLAR",
        "IJODIY MUHIT",
        "ENG NUFUZLI AKADEMIYA",
      ],
    },
    advantages: {
      ariaLabel: "Afzalliklar",
      items: {
        branches: { value: "4", label: "Filial" },
        graduates: { value: "5000+", label: "Bitiruvchi" },
        staff: { value: "100+", label: "Xodimlar" },
        experience: { value: "14", label: "Yillik tajriba" },
      },
    },
    introducing: {
      ariaLabel: "Nega GIGU",
      badge: "Nega GIGU?",
      title: "Nega ayol-qizlar",
      titleEm: "GIGU akademiyasini tanlashmoqda?",
      description:
        "Biz faqat tikuv o'rgatmaymiz — sizga o'z qo'lingiz bilan yaratadigan, daromad topadigan va o'z brendingizni quradigan kuch beramiz.",
      pillars: [
        {
          index: "01",
          title: "5 ta yo'nalish — bitta kursda",
          text: "Tikuv texnologiyasi, modellashtirish, eskiz chizish, moda va stil hamda bezatish darslari bitta tizimda o'qitiladi.",
        },
        {
          index: "02",
          title: "Tajribali va mehribon ustozlar",
          text: "3 yildan 25 yilgacha tajribaga ega mutaxassislar individual yondashuv bilan o'rgatishadi.",
        },
        {
          index: "03",
          title: "80% amaliyot, 20% nazariya",
          text: "Darslar asosan amaliy ko'nikmalarga asoslangan — o'rganib darhol qo'llaysiz.",
        },
        {
          index: "04",
          title: "Faqat ayol-qizlar muhiti",
          text: "Erkin, qulay va motivatsion muhitda rivojlanasiz.",
        },
        {
          index: "05",
          title: "Daromadga chiqish imkoniyati",
          text: "Ko'plab o'quvchilar kurs davomidayoq buyurtma olib daromad qilishni boshlaydi.",
        },
      ],
    },
    studyExperience: {
      ariaLabel: "O'qish sharoiti",
      badge: "O'qish sharoiti",
      title: "GIGU'da o'qish",
      titleEm: "qanday tashkil etilgan?",
      description:
        "Har bir o'quvchi uchun qulay, xavfsiz va to'liq jihozlangan muhit yaratilgan — siz faqat o'rganishga e'tibor qaratishingiz kifoya.",
      features: [
        {
          slug: "assistant-teacher",
          title: "Yordamchi ustoz",
          text: "Darsni tushunmay qolgan yoki o'tkazib yuborgan o'quvchilarga alohida yordam beriladi.",
        },
        {
          slug: "flexible-schedule",
          title: "Qulay dars jadvali",
          text: "Ertalab, tushlik va kechki guruhlar mavjud — o'zingizga mos vaqtda o'qishingiz mumkin.",
        },
        {
          slug: "equipped-workspace",
          title: "To'liq jihozlangan ish muhiti",
          text: "Tikuv mashinasi, maneken, dazmol va barcha kerakli ish qurollari taqdim etiladi.",
        },
        {
          slug: "sew-your-clothes",
          title: "O'z kiyimingizni tikish",
          text: "O'zingizga va boshqalarga professional darajada kiyim tikishni o'rganasiz.",
        },
      ],
    },
    why: {
      badge: "Afzalliklar",
      title: "Nega aynan tikuvchilik va",
      titleEm: "dizaynerlik?",
      description:
        "Bu yo'nalish nafaqat kasb, balki shaxsiy o'sish, ijod va mustaqillik sari ochilgan eshik.",
      posts: [
        {
          title: "Shaxsiy rivojlanish, ijod va mustaqillik",
          description:
            "Bu yerda nafaqat kasb o'rganasiz — o'z qadr-qimmatingizni his qilasiz, hayotingizni ijobiy o'zgartirasiz va mustaqil qarorlar qabul qila boshlaysiz.",
        },
        {
          title: "Ayol-qizlar muhiti",
          description:
            "Bir maqsad sari intilayotgan faol va izlanuvchan ayol-qizlar davrasida rivojlanasiz.",
        },
        {
          title: "Dunyoqarash va fikrlash o'zgaradi",
          description:
            "Moda va dizayn olami ijodkorlikni rivojlantiradi, yangi g'oyalar va imkoniyatlarni ko'rishga yordam beradi.",
        },
        {
          title: "Daromad topishni boshlaysiz",
          description:
            "Tikuvchilik xizmatlari, buyurtmalar yoki o'z mahsulotlaringiz orqali daromad manbaiga ega bo'lasiz.",
        },
        {
          title: "O'z brendingizni yaratasiz",
          description:
            "Bilim va tajriba orttirib, kelajakda shaxsiy brendingizni yo'lga qo'yish va mashhurlikka erishish imkoniyatiga ega bo'lasiz.",
        },
      ],
      audience: {
        title: "Kimlar uchun?",
        items: [
          {
            title: "Maktab o'quvchilari",
            description:
              "O'qishdan keyin qisqa muddatda kasb egallash, ijodiy qiziqishni rivojlantirish va mustaqil daromad manbasiga ega bo'lish imkoniyati.",
            icon: "graduation",
          },
          {
            title: "O'z ishini boshlamoqchi bo'lganlar",
            description:
              "Tikuvchilik va dizayn sohasida o'z studiyangiz, brendingiz yoki xizmat ko'rsatish markazingizni ochish uchun zarur bilim va amaliy ko'nikmalarni olasiz.",
            icon: "briefcase",
          },
          {
            title: "Uy bekalari va kelinlar",
            description:
              "Uydan chiqmasdan qulay vaqt rejimida o'rganib, oila byudjetiga hissa qo'shish va o'z qiziqishingizni kasbga aylantirish imkoniyati.",
            icon: "home",
          },
          {
            title: "Ayolar va onalar",
            description:
              "Bolalar ta'limiga qaramay mos jadvalda o'rganish, qo'llab-quvvatlovchi ayollar muhitida rivojlanish va yangi imkoniyatlar ochish.",
            icon: "users",
          },
        ],
      },
      market: {
        cta: "Batafsil",
        ctaHref: "https://tashkent.hh.uz/vacancies/dizayner_po_tekstilyu",
        items: [
          {
            icon: "clipboardList",
            value: "170+",
            tabLabel: "Faol vakansiyalar",
            label: "Faol vakansiyalar",
            description:
              "Libos dizayner va konstruktor-modelyer bo'yicha ochiq ish o'rinlari — hh.uz va boshqa platformalarda.",
          },
          {
            icon: "wallet",
            value: "8–15 mln",
            tabLabel: "O'rtacha maosh",
            label: "O'rtacha maosh",
            description:
              "Toshkent shahrida tajribali libos dizaynerlari uchun oylik daromad diapazoni (so'm).",
          },
          {
            icon: "mapPin",
            value: "4,5–6 mln",
            tabLabel: "Viloyatlarda",
            label: "Viloyatlarda",
            description:
              "Andijon, Samarqand, Farg'ona va boshqa viloyatlardagi o'rtacha maosh ko'rsatkichlari.",
          },
          {
            icon: "trending",
            value: "+26%",
            tabLabel: "Ish haqi o'sishi",
            label: "Ish haqi o'sishi",
            description:
              "San'at, ko'ngilochar va ijod sohasida 2025 yilda kutilayotgan ish haqi o'sishi.",
          },
        ],
      },
    },
    ...landingSectionsUz,
  },
  ru: {
    nav: {
      about: "О нас",
      advantages: "Преимущества",
      teachers: "Преподаватели",
      results: "Результаты",
      courses: "Курсы",
      branches: "Филиалы",
      faq: "Вопросы",
      cta: "Записаться",
      menu: "Меню",
      close: "Закрыть",
    },
    hero: {
      badge: "Модная Академия",
      titleLine1: "Будущее",
      titleLine2: "вашей моды",
      titleLine3: "создайте здесь",
      subtitle:
        "GIGU Moda Akademiyasi — профессиональный учебный центр в сфере шитья и дизайна",
      cta: "Запишитесь на первый бесплатный урок",
      ctaSecondary: "Смотреть курсы",
      marquee: [
        "МОДА И ИСКУССТВО",
        "ШИТЬЁ",
        "ПРОФЕССИОНАЛЬНОЕ ОБУЧЕНИЕ",
        "ОПЫТНЫЕ ПРЕПОДАВАТЕЛИ",
        "ТВОРЧЕСКАЯ АТМОСФЕРА",
        "САМАЯ ПРЕСТИЖНАЯ АКАДЕМИЯ",
      ],
    },
    advantages: {
      ariaLabel: "Преимущества",
      items: {
        branches: { value: "4", label: "Филиала" },
        graduates: { value: "5000+", label: "Выпускников" },
        staff: { value: "100+", label: "Сотрудников" },
        experience: { value: "14", label: "Лет опыта" },
      },
    },
    introducing: {
      ariaLabel: "Почему GIGU",
      badge: "Почему GIGU?",
      title: "Почему девушки",
      titleEm: "выбирают академию GIGU?",
      description:
        "Мы не просто учим шить — мы даём силу создавать своими руками, зарабатывать и строить собственный бренд.",
      pillars: [
        {
          index: "01",
          title: "5 направлений — один курс",
          text: "Технология шитья, моделирование, эскиз, мода и стиль, а также декорирование — всё в одной системе обучения.",
        },
        {
          index: "02",
          title: "Опытные и доброжелательные преподаватели",
          text: "Специалисты с опытом от 3 до 25 лет обучают с индивидуальным подходом.",
        },
        {
          index: "03",
          title: "80% практики, 20% теории",
          text: "Занятия сосредоточены на практических навыках — учитесь и сразу применяете.",
        },
        {
          index: "04",
          title: "Только женская среда",
          text: "Развиваетесь в свободной, комфортной и мотивирующей атмосфере.",
        },
        {
          index: "05",
          title: "Возможность зарабатывать",
          text: "Многие ученицы уже во время курса начинают принимать заказы и получать доход.",
        },
      ],
    },
    studyExperience: {
      ariaLabel: "Условия обучения",
      badge: "Условия обучения",
      title: "Как организовано",
      titleEm: "обучение в GIGU?",
      description:
        "Для каждой ученицы создана комфортная, безопасная и полностью оснащённая среда — вам остаётся сосредоточиться только на учёбе.",
      features: [
        {
          slug: "assistant-teacher",
          title: "Помощник преподавателя",
          text: "Ученицам, которые не поняли урок или пропустили занятие, оказывается отдельная помощь.",
        },
        {
          slug: "flexible-schedule",
          title: "Удобное расписание",
          text: "Есть утренние, дневные и вечерние группы — можно учиться в удобное для вас время.",
        },
        {
          slug: "equipped-workspace",
          title: "Полностью оснащённая мастерская",
          text: "Предоставляются швейная машина, манекен, утюг и все необходимые инструменты.",
        },
        {
          slug: "sew-your-clothes",
          title: "Шитьё собственной одежды",
          text: "Вы научитесь шить одежду для себя и других на профессиональном уровне.",
        },
      ],
    },
    why: {
      badge: "Преимущества",
      title: "Почему именно шитьё и",
      titleEm: "дизайн?",
      description:
        "Это направление — не просто профессия, а путь к росту, творчеству и независимости.",
      posts: [
        {
          title: "Личностный рост, творчество и независимость",
          description:
            "Здесь вы получаете не только профессию — вы ощущаете свою ценность, меняете жизнь к лучшему и учитесь принимать самостоятельные решения.",
        },
        {
          title: "Женская среда",
          description:
            "Вы развиваетесь в кругу активных и целеустремлённых девушек, идущих к одной цели.",
        },
        {
          title: "Меняется мировоззрение",
          description:
            "Мир моды и дизайна развивает креативность и помогает видеть новые идеи и возможности.",
        },
        {
          title: "Начнёте зарабатывать",
          description:
            "Получите источник дохода через услуги шитья, заказы или собственные изделия.",
        },
        {
          title: "Создадите свой бренд",
          description:
            "Накопив знания и опыт, вы сможете запустить личный бренд и добиться признания.",
        },
      ],
      audience: {
        title: "Для кого?",
        items: [
          {
            title: "Школьницы",
            description:
              "Возможность быстро освоить профессию после учёбы, развить творческий интерес и получить источник дохода.",
            icon: "graduation",
          },
          {
            title: "Те, кто хочет начать своё дело",
            description:
              "Знания и практические навыки для открытия студии, бренда или сервиса в сфере шитья и дизайна.",
            icon: "briefcase",
          },
          {
            title: "Домохозяйки и невесты",
            description:
              "Обучение в удобном графике без выхода из дома, вклад в семейный бюджет и превращение хобби в профессию.",
            icon: "home",
          },
          {
            title: "Женщины и мамы",
            description:
              "Гибкий график, поддерживающая женская среда и новые возможности для развития.",
            icon: "users",
          },
        ],
      },
      market: {
        cta: "Подробнее",
        ctaHref: "https://tashkent.hh.uz/vacancies/dizayner_po_tekstilyu",
        items: [
          {
            icon: "clipboardList",
            value: "170+",
            tabLabel: "Активные вакансии",
            label: "Активные вакансии",
            description:
              "Открытые вакансии для дизайнеров одежды и конструкторов-модельеров на hh.uz и других площадках.",
          },
          {
            icon: "wallet",
            value: "8–15 млн",
            tabLabel: "Средняя зарплата",
            label: "Средняя зарплата",
            description:
              "Диапазон месячного дохода опытных дизайнеров одежды в Ташкенте (сум).",
          },
          {
            icon: "mapPin",
            value: "4,5–6 млн",
            tabLabel: "По регионам",
            label: "По регионам",
            description:
              "Средние зарплаты в Андижане, Самарканде, Фергане и других регионах.",
          },
          {
            icon: "trending",
            value: "+26%",
            tabLabel: "Рост зарплат",
            label: "Рост зарплат",
            description:
              "Ожидаемый рост заработной платы в сфере искусства и досуга в 2025 году.",
          },
        ],
      },
    },
    ...landingSectionsRu,
  },
  en: {
    nav: {
      about: "About",
      advantages: "Advantages",
      teachers: "Teachers",
      results: "Results",
      courses: "Courses",
      branches: "Branches",
      faq: "FAQ",
      cta: "Enroll Now",
      menu: "Menu",
      close: "Close",
    },
    hero: {
      badge: "Fashion Academy",
      titleLine1: "Create",
      titleLine2: "your fashion",
      titleLine3: "future here",
      subtitle:
        "GIGU Fashion Academy — a professional training center in sewing and design",
      cta: "Sign up for your first free lesson",
      ctaSecondary: "View Courses",
      marquee: [
        "FASHION & ART",
        "SEWING",
        "PROFESSIONAL EDUCATION",
        "EXPERIENCED TEACHERS",
        "CREATIVE ENVIRONMENT",
        "MOST PRESTIGIOUS ACADEMY",
      ],
    },
    advantages: {
      ariaLabel: "Advantages",
      items: {
        branches: { value: "4", label: "Branches" },
        graduates: { value: "5000+", label: "Graduates" },
        staff: { value: "100+", label: "Staff" },
        experience: { value: "14", label: "Years of Experience" },
      },
    },
    introducing: {
      ariaLabel: "Why GIGU",
      badge: "Why GIGU?",
      title: "Why do women",
      titleEm: "choose GIGU Academy?",
      description:
        "We don't just teach sewing — we give you the power to create with your own hands, earn income, and build your own brand.",
      pillars: [
        {
          index: "01",
          title: "5 directions — one course",
          text: "Sewing technology, pattern making, sketching, fashion & styling, and embellishment — all taught in one integrated system.",
        },
        {
          index: "02",
          title: "Experienced, caring teachers",
          text: "Specialists with 3 to 25 years of experience teach with a personal approach.",
        },
        {
          index: "03",
          title: "80% practice, 20% theory",
          text: "Classes focus on hands-on skills — learn and apply immediately.",
        },
        {
          index: "04",
          title: "Women-only environment",
          text: "Grow in a free, comfortable, and motivating atmosphere.",
        },
        {
          index: "05",
          title: "Path to earning income",
          text: "Many students start taking orders and earning while still on the course.",
        },
      ],
    },
    studyExperience: {
      ariaLabel: "Study experience",
      badge: "Study experience",
      title: "How learning",
      titleEm: "works at GIGU",
      description:
        "Every student gets a comfortable, safe, and fully equipped environment — so you can focus entirely on learning.",
      features: [
        {
          slug: "assistant-teacher",
          title: "Assistant teacher",
          text: "Students who miss a lesson or need extra help receive dedicated support.",
        },
        {
          slug: "flexible-schedule",
          title: "Flexible schedule",
          text: "Morning, afternoon, and evening groups are available — study at a time that suits you.",
        },
        {
          slug: "equipped-workspace",
          title: "Fully equipped workspace",
          text: "Sewing machines, mannequins, irons, and all essential tools are provided.",
        },
        {
          slug: "sew-your-clothes",
          title: "Sew your own clothes",
          text: "Learn to sew professional-quality garments for yourself and others.",
        },
      ],
    },
    why: {
      badge: "Benefits",
      title: "Why sewing and",
      titleEm: "design?",
      description:
        "This path is not just a career — it's a doorway to personal growth, creativity, and independence.",
      posts: [
        {
          title: "Personal growth, creativity, and independence",
          description:
            "Here you gain more than a skill — you discover your self-worth, reshape your life for the better, and learn to make independent decisions.",
        },
        {
          title: "A women's community",
          description:
            "You thrive among active, curious women who share the same goals and ambitions.",
        },
        {
          title: "A shift in perspective",
          description:
            "The world of fashion and design nurtures creativity and helps you see new ideas and opportunities.",
        },
        {
          title: "Start earning income",
          description:
            "Gain a revenue stream through sewing services, custom orders, or your own products.",
        },
        {
          title: "Build your own brand",
          description:
            "With knowledge and experience, you can launch a personal brand and achieve recognition.",
        },
      ],
      audience: {
        title: "Who is it for?",
        items: [
          {
            title: "School students",
            description:
              "A chance to master a profession quickly after school, nurture creative interests, and build an income stream.",
            icon: "graduation",
          },
          {
            title: "Aspiring entrepreneurs",
            description:
              "The knowledge and practical skills to launch your own studio, brand, or sewing service business.",
            icon: "briefcase",
          },
          {
            title: "Homemakers and brides",
            description:
              "Learn on a flexible schedule from home, contribute to the family budget, and turn your passion into a career.",
            icon: "home",
          },
          {
            title: "Women and mothers",
            description:
              "Flexible timing around family life, a supportive women's community, and new opportunities to grow.",
            icon: "users",
          },
        ],
      },
      market: {
        cta: "Details",
        ctaHref: "https://tashkent.hh.uz/vacancies/dizayner_po_tekstilyu",
        items: [
          {
            icon: "clipboardList",
            value: "170+",
            tabLabel: "Active vacancies",
            label: "Active vacancies",
            description:
              "Open roles for apparel designers and pattern makers on hh.uz and other job platforms.",
          },
          {
            icon: "wallet",
            value: "8–15 mln",
            tabLabel: "Average salary",
            label: "Average salary",
            description:
              "Monthly income range for experienced apparel designers in Tashkent (UZS).",
          },
          {
            icon: "mapPin",
            value: "4.5–6 mln",
            tabLabel: "Regional markets",
            label: "Regional markets",
            description:
              "Average salaries in Andijan, Samarkand, Fergana, and other regions.",
          },
          {
            icon: "trending",
            value: "+26%",
            tabLabel: "Wage growth",
            label: "Wage growth",
            description:
              "Expected wage growth in arts, entertainment, and recreation in 2025.",
          },
        ],
      },
    },
    ...landingSectionsEn,
  },
};

export type AboutDropdownKey = "advantages" | "teachers" | "branches";
export type MainNavKey = "courses" | "results" | "faq";

export const aboutDropdownLinks: {
  key: AboutDropdownKey;
  href: string;
}[] = [
  { key: "advantages", href: "#advantages" },
  { key: "teachers", href: "#teachers" },
  { key: "branches", href: "#branches" },
];

export const mainNavLinks: { key: MainNavKey; href: string }[] = [
  { key: "courses", href: "#courses" },
  { key: "results", href: "#results" },
  { key: "faq", href: "#faq" },
];
