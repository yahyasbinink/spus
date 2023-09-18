const fieldsForTest = [
  "HM", // Human Medicine (HM)
  "PHY", // Pharmacy (PHY)
  "DNT", // Dentistry (DNT)
  "PT", // Physical Therapy (PT)
  "HS", // Health Sciences (HS)
  "NRS", // Nursing (NRS)
  "BE", // Biomedical Engineering (BE)
  "HA", // Hospital Administration (HA)
  "COS", // Cosmetology (COS)
  "CCE", // Computer and Communication Engineering (CCE)
  "CE", // Civil Engineering (CE)
  "AE", // Architectural Engineering (AE)
  "CHE", // Chemical Engineering (CHE)
  "PE", // Petroleum Engineering (PE)
  "BA", // Business Administration (BA)
  "LAW", // Law (LAW)
  "ENT", // Entrepreneurship (ENT)
  "EL", // English Language (EL)
  "IRD", // International Relations and Diplomacy (IRD)
  "ART", // Arts (ART)
  "ACT", // Acting (ACT)
];
const HM = `/icons/Human Medicine.png`;

export const universities = [
  {
    id: 15,
    name: "جامعة الشام الخاصة",
    EnName: "Al-Sham Private University",
    acronym: "ASPU",
    image: "/images/unis/ASPU.jpg",
    mainImage: `/Unis Logo/ASPU.png`,
    website: "https://www.aspu.edu.sy/site/arabic/index.php",
    facebook: "https://ar-ar.facebook.com/Al.Sham.University/",
    address: "دمشق - البرامكة- جانب ملعب تشرين - قرب مسجد مصعب بن عمير",
    phoneA: "0096311-2066",
    phoneB: "X",
    phoneC: "X",
    fieldsForFilter: ["HM", "PHY", "CCE", "IRD", "LAW", "BA", "DNT"],
    fieldsForCards: [
      {
        specialization: " HM",
        icon: `/icons/".png`,
        name: "الطب البشري",
        address: "دمشق - التل",
        years: "6",
        hours: "250",
      },
      {
        specialization: "PHY",
        icon: "/icons/PHY.png",
        name: "الصيدلة",
        address: "دمشق - التل",
        years: "5",
        hours: "175",
      },
      {
        specialization: "CCE",
        icon: "/icons/CCE.png",
        name: "الهندسة المعلوماتية والإتصالات",
        address: "دمشق - التل",
        years: "5",
        hours: "165",
      },
      {
        specialization: "IRD",
        icon: "/icons/IRD.png",
        name: "العلاقات الدولية والدبلوماسية",
        address: "دمشق - التل",
        years: "4",
        hours: "135",
      },
      {
        specialization: "LAW",
        icon: "/icons/LAW1.png",
        name: "كلية الحقوق",
        address: "دمشق - البرامكة",
        years: "4",
        hours: "135",
      },
      {
        specialization: "BA",
        icon: "/icons/BA.png",
        name: "كلية إدارة الأعمال",
        address: "دمشق - البرامكة",
        years: "4",
        hours: "135",
      },
      {
        specialization: "DNT",
        icon: "/icons/DNT.png",
        name: "طب الاسنان",
        address: "دمشق - المزرعة",
        years: "5",
        hours: "190",
      },
      {
        specialization: "DNT",
        icon: "/icons/DNT.png",
        name: "طب الاسنان",
        address: "اللاذقية - الصليبة",
        years: "5",
        hours: "190",
      },
      {
        specialization: "PHY",
        icon: "/icons/PHY.png",
        name: "الصيدلة",
        address: "اللاذقية - الصليبة",
        years: "5",
        hours: "175",
      },
      {
        specialization: "LAW",
        icon: "/icons/LAW1.png",
        name: "كلية الحقوق",
        address: "اللاذقية - الصليبة",
        years: "4",
        hours: "135",
      },
    ],
  },
  {
    id: 1,
    name: "الجامعة العربية الدولية",
    EnName: "Arab International University",
    acronym: "AIU",
    image: `/images/unis/AIU.jpg`,
    mainImage: `/Unis Logo/AIU2.png`, // fOR card
    website: "https://www.aiu.edu.sy/",
    facebook: "https://fb.com/ArabInternationalUniversity",
    address: "أوتستراد (دمشق - درعا) - غباغب",
    phoneA: "00963- 15- 2050",
    phoneB: "00963- 15- 860 3801",
    phoneC: "00963- 15- 860 3802",
    fieldsForFilter: ["PHY", "DNT", "CCE", "CE", "AE", "BA", "LAW", "ART"], //['it','civil']
    fieldsForCards: [
      {
        specialization: "PHY",
        icon: "/icons/PHY.png",
        name: "الصيدلة",
        address: "أوتستراد (دمشق - درعا) - غباغب",
        years: "5",
        hours: "175",
      },
      {
        specialization: "DNT",
        icon: "/icons/DNT.png",
        name: "طب الاسنان",
        address: "أوتستراد (دمشق - درعا) - غباغب",
        years: "5",
        hours: "190",
      },
      {
        specialization: "CCE",
        icon: "/icons/CCE.png",
        name: "الهندسة المعلوماتية والإتصالات",
        address: "أوتستراد (دمشق - درعا) - غباغب",
        years: "5",
        hours: "165",
      },
      {
        specialization: "CE",
        icon: "/icons/CE.png",
        name: "الهندسة المدنية",
        address: "أوتستراد (دمشق - درعا) - غباغب",
        years: "5",
        hours: "165",
      },
      {
        specialization: "AE",
        icon: "/icons/AE.png",
        name: "الهندسة المعمارية",
        address: "أوتستراد (دمشق - درعا) - غباغب",
        years: "5",
        hours: "165",
      },
      {
        specialization: "BA",
        icon: "/icons/BA.png",
        name: "ادارة الاعمال",
        address: "أوتستراد (دمشق - درعا) - غباغب",
        years: "4",
        hours: "135",
      },
      {
        specialization: "LAW",
        icon: "/icons/LAW1.png",
        name: "الحقوق",
        address: "أوتستراد (دمشق - درعا) - غباغب",
        years: "4",
        hours: "135",
      },
      {
        specialization: "ART",
        icon: "/icons/ART.png",
        name: "الفنون",
        address: "أوتستراد (دمشق - درعا) - غباغب",
        years: "4",
        hours: "135",
      },
    ],
  },

  {
    id: 2,
    name: "جامعة الشهباء الخاصة",
    EnName: "Al-Shahbaa Private University",
    acronym: "SU",
    image: "/images/unis/SU.jpg",
    mainImage: `/Unis Logo/SU.png`,
    website: "http://su.edu.sy/ar/home",
    facebook: "https://fb.com/AlshahbaaUnV/",
    address: "حلب - حلب الجديدة شمالي",
    phoneA: "0096321-5212078",
    phoneB: "0096321-5212079",
    phoneC: "0986485096",
    fieldsForFilter: ["DNT", "CCE", "BA"],
    fieldsForCards: [
      {
        specialization: "DNT",
        icon: "/icons/DNT.png",
        name: "طب الاسنان",
        address: "أوتستراد (دمشق - درعا) - غباغب",
        years: "5",
        hours: "190",
      },
      {
        specialization: "CCE",
        icon: "/icons/CCE.png",
        name: "الهندسة المعلوماتية والإتصالات",
        address: "أوتستراد (دمشق - درعا) - غباغب",
        years: "5",
        hours: "165",
      },
      {
        specialization: "BA",
        icon: "/icons/BA.png",
        name: "ادارة الاعمال",
        address: "أوتستراد (دمشق - درعا) - غباغب",
        years: "4",
        hours: "135",
      },
    ],
  },
  {
    id: 3,
    name: "جامعة الرشيد الخاصة",
    EnName: "AL-Rasheed Private University",
    acronym: "RU",
    image: "/images/unis/RU.jpg",
    mainImage: `/Unis Logo/RU.png`,
    website: "https://ru.edu.sy/AboutUni/UniColleges",
    facebook: "https://fb.com/RasheedUniv",
    address: "أوتستراد (دمشق - درعا) - غباغب",
    phoneA: "0096315-8691200",
    phoneB: "",
    phoneC: "",
    fieldsForFilter: ["PHY", "DNT", "CCE", "AE", "PT", "BA", "LAW"],
    fieldsForCards: [
      {
        specialization: "PHY",
        icon: "/icons/PHY.png",
        name: "الصيدلة",
        address: "أوتستراد (دمشق - درعا) - غباغب",
        years: "5",
        hours: "175",
      },
      {
        specialization: "DNT",
        icon: "/icons/DNT.png",
        name: "طب الاسنان",
        address: "أوتستراد (دمشق - درعا) - غباغب",
        years: "5",
        hours: "190",
      },
      {
        specialization: "CCE",
        icon: "/icons/CCE.png",
        name: "الهندسة المعلوماتية والإتصالات",
        address: "أوتستراد (دمشق - درعا) - غباغب",
        years: "5",
        hours: "165",
      },
      {
        specialization: "AE",
        icon: "/icons/AE.png",
        name: "الهندسة المعمارية",
        address: "أوتستراد (دمشق - درعا) - غباغب",
        years: "5",
        hours: "165",
      },
      {
        specialization: "PT",
        icon: "/icons/PT.png",
        name: "العلاج الفيزيائي",
        address: "أوتستراد (دمشق - درعا) - غباغب",
        years: "4",
        hours: "135",
      },
      {
        specialization: "BA",
        icon: "/icons/BA.png",
        name: "ادارة الاعمال",
        address: "أوتستراد (دمشق - درعا) - غباغب",
        years: "4",
        hours: "135",
      },
      {
        specialization: "LAW",
        icon: "/icons/LAW1.png",
        name: "الحقوق",
        address: "أوتستراد (دمشق - درعا) - غباغب",
        years: "4",
        hours: "135",
      },
    ],
  },
  {
    id: 4,
    name: "جامعة قاسيون الخاصة",
    EnName: "Qasyoun Private University",
    acronym: "QPU",
    image: "/images/unis/QPU.jpg",
    mainImage: `/Unis Logo/QPU.png`,
    website: "https://qpu.edu.sy/",
    facebook: "https://fb.com/QasyounPrivateUniversity/",
    address: "أوتستراد (دمشق - درعا) - غباغب",
    phoneA: "00963953313394",
    phoneB: "",
    phoneC: "",
    fieldsForFilter: ["PHY", "DNT", "CCE", "AE", "EL", "BA"],
    fieldsForCards: [
      {
        specialization: "PHY",
        icon: "/icons/PHY.png",
        name: "الصيدلة",
        address: "أوتستراد (دمشق - درعا) - غباغب",
        years: "5",
        hours: "175",
      },
      {
        specialization: "DNT",
        icon: "/icons/DNT.png",
        name: "طب الاسنان",
        address: "أوتستراد (دمشق - درعا) - غباغب",
        years: "5",
        hours: "190",
      },
      {
        specialization: "CCE",
        icon: "/icons/CCE.png",
        name: "الهندسة المعلوماتية والإتصالات",
        address: "أوتستراد (دمشق - درعا) - غباغب",
        years: "5",
        hours: "165",
      },
      {
        specialization: "AE",
        icon: "/icons/AE.png",
        name: "الهندسة المعمارية",
        address: "أوتستراد (دمشق - درعا) - غباغب",
        years: "5",
        hours: "165",
      },
      {
        specialization: "EL",
        icon: "/icons/EL.png",
        name: "اللغة الإنكليزية",
        address: "أوتستراد (دمشق - درعا) - غباغب",
        years: "4",
        hours: "135",
      },
      {
        specialization: "BA",
        icon: "/icons/BA.png",
        name: "ادارة الاعمال",
        address: "أوتستراد (دمشق - درعا) - غباغب",
        years: "4",
        hours: "135",
      },
    ],
  },
  {
    id: 5,
    name: "الجامعة العربية للعلوم والتكنولوجيا",
    EnName: "Arab University for Science and Technology",
    acronym: "AUST",
    image: "/images/unis/AUST.jpg",
    mainImage: `/Unis Logo/AUST.png`,
    website: "https://aust.edu.sy/",
    facebook: "https://fb.com/aust.hama/",
    address: "حماة - طريق حماة حمص الدولي",
    phoneA: "00963-994554140",
    phoneB: "00963-930404411",
    phoneC: "00963-995234246",
    fieldsForFilter: ["DNT", "PHY", "CCE", "CHE", "PE", "AE", "EL"],
    fieldsForCards: [
      {
        specialization: "DNT",
        icon: "/icons/DNT.png",
        name: "طب الاسنان",
        address: "حماة - طريق حماة حمص الدولي",
        years: "5",
        hours: "190",
      },
      {
        specialization: "PHY",
        icon: "/icons/PHY.png",
        name: "الصيدلة",
        address: "حماة - طريق حماة حمص الدولي",
        years: "5",
        hours: "175",
      },
      {
        specialization: "CCE",
        icon: "/icons/CCE.png",
        name: "الهندسة المعلوماتية والإتصالات",
        address: "حماة - طريق حماة حمص الدولي",
        years: "5",
        hours: "165",
      },
      {
        specialization: "CHE",
        icon: "/icons/CHE.png",
        name: "الهندسة الكيميائية",
        address: "حماة - طريق حماة حمص الدولي",
        years: "5",
        hours: "165",
      },
      {
        specialization: "PE",
        icon: "/icons/PE.png",
        name: "الهندسة البترولية",
        address: "حماة - طريق حماة حمص الدولي",
        years: "5",
        hours: "165",
      },
      {
        specialization: "AE",
        icon: "/icons/AE.png",
        name: "الهندسة المعمارية",
        address: "حماة - طريق حماة حمص الدولي",
        years: "5",
        hours: "165",
      },
      {
        specialization: "EL",
        icon: "/icons/EL.png",
        name: "اللغة الإنكليزية",
        address: "حماة - طريق حماة حمص الدولي",
        years: "4",
        hours: "135",
      },
    ],
  },
  {
    id: 6,
    name: "جامعة قرطبة الخاصة",
    EnName: "Cordoba Private University",
    acronym: "CPU",
    image: "/images/unis/CPU.jpg",
    mainImage: `/Unis Logo/CPU.png`,
    website: "https://www.cpu.edu.sy/",
    facebook: "https://fb.com/Cordoba.Private.University.Official",
    address: "حلب - جمعية المهندسين",
    phoneA: "0955009898",
    phoneB: "00963 021 5234071",
    phoneC: "00963 021 5234072",
    fieldsForFilter: ["DNT", "AE", "CCE", "BA", "EL"],
    fieldsForCards: [
      {
        specialization: "DNT",
        icon: "/icons/DNT.png",
        name: "طب الاسنان",
        address: "حلب - جمعية المهندسين",
        years: "5",
        hours: "190",
      },
      {
        specialization: "AE",
        icon: "/icons/AE.png",
        name: "الهندسة المعمارية",
        address: "حلب - جمعية المهندسين",
        years: "5",
        hours: "165",
      },
      {
        specialization: "CCE",
        icon: "/icons/CCE.png",
        name: "الهندسة المعلوماتية والإتصالات",
        address: "القامشلي",
        years: "5",
        hours: "165",
      },
      {
        specialization: "CCE",
        icon: "/icons/CCE.png",
        name: "الهندسة المعلوماتية والإتصالات",
        address: "ريف حلب",
        years: "5",
        hours: "165",
      },
      {
        specialization: "BA",
        icon: "/icons/BA.png",
        name: "ادارة الاعمال",
        address: "حلب - جمعية المهندسين",
        years: "4",
        hours: "135",
      },
      {
        specialization: "EL",
        icon: "/icons/EL.png",
        name: "اللغة الإنكليزية",
        address: "القامشلي",
        years: "4",
        hours: "135",
      },
      {
        specialization: "EL",
        icon: "/icons/EL.png",
        name: "اللغة الإنكليزية",
        address: "ريف حلب",
        years: "4",
        hours: "135",
      },
    ],
  },
  {
    id: 7,
    name: "جامعة إيبلا الخاصة",
    EnName: "Ebla Private University",
    acronym: "EBLA",
    image: "/images/unis/EBLA.jpg",
    mainImage: `/Unis Logo/Ebla.png`,
    website: "http://www.ebla.edu.sy/ar/home",
    facebook: "https://fb.com/eblauniversity",
    address: "حلب - الحمدانية",
    phoneA: "00963215720388",
    phoneB: "",
    phoneC: "",
    fieldsForFilter: ["PHY", "CE", "AE", "CCE", "BA"],
    fieldsForCards: [
      {
        specialization: "PHY",
        icon: "/icons/PHY.png",
        name: "الصيدلة",
        address: "حلب - الحمدانية",
        years: "5",
        hours: "175",
      },
      {
        specialization: "CE",
        icon: "/icons/CE.png",
        name: "الهندسة المدنية",
        address: "حلب - الحمدانية",
        years: "5",
        hours: "165",
      },
      {
        specialization: "AE",
        icon: "/icons/AE.png",
        name: "الهندسة المعمارية",
        address: "حلب - الحمدانية",
        years: "5",
        hours: "165",
      },
      {
        specialization: "CCE",
        icon: "/icons/CCE.png",
        name: "الهندسة المعلوماتية والإتصالات",
        address: "حلب - الحمدانية",
        years: "5",
        hours: "165",
      },
      {
        specialization: "BA",
        icon: "/icons/BA.png",
        name: "ادارة الاعمال",
        address: "حلب - الحمدانية",
        years: "4",
        hours: "135",
      },
    ],
  },
  {
    id: 8,
    name: "جامعة أنطاكية السورية الخاصة",
    EnName: "Antioch Syrian Private University",
    acronym: "ASU",
    image: "/images/unis/ASU.jpg",
    mainImage: `/Unis Logo/ASU.png`,
    website: "https://asu.edu.sy/ar/home",
    facebook: "https://www.fb.com/Antioch.Syrian.University",
    address: "ريف دمشق - معرة صيدنايا",
    phoneA: "009635954910",
    phoneB: "",
    phoneC: "",
    fieldsForFilter: ["PHY", "DNT", "CCE", "CE", "AE", "BA", "LAW"],
    fieldsForCards: [
      {
        specialization: "PHY",
        icon: "/icons/PHY.png",
        name: "الصيدلة",
        address: "ريف دمشق - معرة صيدنايا",
        years: "5",
        hours: "175",
      },
      {
        specialization: "DNT",
        icon: "/icons/DNT.png",
        name: "طب الاسنان",
        address: "ريف دمشق - معرة صيدنايا",
        years: "5",
        hours: "190",
      },
      {
        specialization: "CCE",
        icon: "/icons/CCE.png",
        name: "الهندسة المعلوماتية والإتصالات",
        address: "ريف دمشق - معرة صيدنايا",
        years: "5",
        hours: "165",
      },
      {
        specialization: "CE",
        icon: "/icons/CE.png",
        name: "الهندسة المدنية",
        address: "ريف دمشق - معرة صيدنايا",
        years: "5",
        hours: "165",
      },
      {
        specialization: "AE",
        icon: "/icons/AE.png",
        name: "الهندسة المعمارية",
        address: "ريف دمشق - معرة صيدنايا",
        years: "5",
        hours: "165",
      },
      {
        specialization: "BA",
        icon: "/icons/BA.png",
        name: "ادارة الاعمال",
        address: "ريف دمشق - معرة صيدنايا",
        years: "4",
        hours: "135",
      },
      {
        specialization: "LAW",
        icon: "/icons/LAW1.png",
        name: "الحقوق",
        address: "ريف دمشق - معرة صيدنايا",
        years: "4",
        hours: "135",
      },
    ],
  },
  {
    id: 9,
    name: "جامعة الاتحاد الخاصة",
    EnName: "ITTIHAD Private University",
    acronym: "IPU",
    image: "/images/unis/IPU.jpg",
    mainImage: `/Unis Logo/IPU.png`,
    website: "http://www.ipu.edu.sy/",
    facebook: "https://fb.com/www.ipu.edu.sy/",
    address: "أوتستراد (دمشق - درعا) - غباغب",
    phoneA: "021-2622795",
    phoneB: "021-2622796",
    phoneC: "",
    fieldsForFilter: ["PHY", "BA", "CCE", "AE"],
    fieldsForCards: [
      {
        specialization: "PHY",
        icon: "/icons/PHY.png",
        name: "الصيدلة",
        address: "أوتستراد (دمشق - درعا) - غباغب",
        years: "5",
        hours: "175",
      },
      {
        specialization: "BA",
        icon: "/icons/BA.png",
        name: "ادارة الاعمال",
        address: "أوتستراد (دمشق - درعا) - غباغب",
        years: "4",
        hours: "135",
      },
      {
        specialization: "CCE",
        icon: "/icons/CCE.png",
        name: "الهندسة المعلوماتية والإتصالات",
        address: "أوتستراد (دمشق - درعا) - غباغب",
        years: "5",
        hours: "165",
      },
      {
        specialization: "AE",
        icon: "/icons/AE.png",
        name: "الهندسة المعمارية",
        address: "أوتستراد (دمشق - درعا) - غباغب",
        years: "5",
        hours: "165",
      },
    ],
  },
  {
    id: 10,
    name: "جامعة اليرموك الخاصة",
    EnName: "Yarmouk Private University",
    acronym: "YPU",
    image: "/images/unis/YPU.jpg",
    mainImage: `/Unis Logo/YPU.png`,
    website: "https://site.ypu.edu.sy/",
    facebook: "https://fb.com/Yarmouk.Private.University/",
    address: "أوتستراد (دمشق - درعا) - جباب",
    phoneA: "01568691414",
    phoneB: "0930011037",
    phoneC: "",
    fieldsForFilter: ["PHY", "ART", "CCE", "CE", "AE", "BA"],
    fieldsForCards: [
      {
        specialization: "PHY",
        icon: "/icons/PHY.png",
        name: "الصيدلة",
        address: "أوتستراد (دمشق - درعا) - جباب",
        years: "5",
        hours: "175",
      },
      {
        specialization: "ART",
        icon: "/icons/ART.png",
        name: "الفنون",
        address: "أوتستراد (دمشق - درعا) - جباب",
        years: "4",
        hours: "135",
      },
      {
        specialization: "CCE",
        icon: "/icons/CCE.png",
        name: "الهندسة المعلوماتية والإتصالات",
        address: "أوتستراد (دمشق - درعا) - جباب",
        years: "5",
        hours: "165",
      },
      {
        specialization: "CE",
        icon: "/icons/CE.png",
        name: "الهندسة المدنية",
        address: "أوتستراد (دمشق - درعا) - جباب",
        years: "5",
        hours: "165",
      },
      {
        specialization: "AE",
        icon: "/icons/AE.png",
        name: "الهندسة المعمارية",
        address: "أوتستراد (دمشق - درعا) - جباب",
        years: "5",
        hours: "165",
      },
      {
        specialization: "BA",
        icon: "/icons/BA.png",
        name: "ادارة الاعمال",
        address: "أوتستراد (دمشق - درعا) - جباب",
        years: "4",
        hours: "135",
      },
    ],
  },
  {
    id: 11,
    name: "جامعة الوادي الدولية الخاصة",
    EnName: "Wadi International Private University",
    acronym: "WIU",
    image: "/images/unis/WIU.jpg",
    mainImage: `/Unis Logo/WIU.png`,
    website: "https://wiu.edu.sy/",
    facebook: "https://fb.com/WiuUniversity/",
    address: "اوتوستراد حمص طرطوس - مفرق وادي النصارى",
    phoneA: "009633174398001",
    phoneB: "009633174398002",
    phoneC: "009633174398003",
    fieldsForFilter: ["PHY", "DNT", "CCE", "CE", "AE", "BA", "LAW"],
    fieldsForCards: [
      {
        specialization: "PHY",
        icon: "/icons/PHY.png",
        name: "الصيدلة",
        address: "اوتوستراد حمص طرطوس - مفرق وادي النصارى",
        years: "5",
        hours: "175",
      },
      {
        specialization: "DNT",
        icon: "/icons/DNT.png",
        name: "طب الاسنان",
        address: "اوتوستراد حمص طرطوس - مفرق وادي النصارى",
        years: "5",
        hours: "190",
      },
      {
        specialization: "CCE",
        icon: "/icons/CCE.png",
        name: "الهندسة المعلوماتية والإتصالات",
        address: "اوتوستراد حمص طرطوس - مفرق وادي النصارى",
        years: "5",
        hours: "165",
      },
      {
        specialization: "CE",
        icon: "/icons/CE.png",
        name: "الهندسة المدنية",
        address: "اوتوستراد حمص طرطوس - مفرق وادي النصارى",
        years: "5",
        hours: "165",
      },
      {
        specialization: "AE",
        icon: "/icons/AE.png",
        name: "الهندسة المعمارية",
        address: "اوتوستراد حمص طرطوس - مفرق وادي النصارى",
        years: "5",
        hours: "165",
      },
      {
        specialization: "BA",
        icon: "/icons/BA.png",
        name: "ادارة الاعمال",
        address: "اوتوستراد حمص طرطوس - مفرق وادي النصارى",
        years: "4",
        hours: "135",
      },
      {
        specialization: "LAW",
        icon: "/icons/LAW1.png",
        name: "الحقوق",
        address: "اوتوستراد حمص طرطوس - مفرق وادي النصارى",
        years: "4",
        hours: "135",
      },
    ],
  },
  {
    id: 12,
    name: "جامعة الحواش الخاص",
    EnName: "Al-Hawash Private University",
    acronym: "HPU",
    image: "/images/unis/HPU.jpg",
    mainImage: `/Unis Logo/HPU.png`,
    website: "http://www.hpu.edu.sy/ar/index.php",
    facebook: "https://fb.com/AlHawashPrivateUniversity",
    address: "حمص - الحواش",
    phoneA: "00963-31-7747935",
    phoneB: "00963-31-2080",
    phoneC: "X",
    fieldsForFilter: [
      "HM",
      "DNT",
      "PHY",
      "CCE",
      "CE",
      "AE",
      "NRS",
      "LAW",
      "COS",
      "ENT",
    ],
    fieldsForCards: [
      {
        specialization: " HM",
        icon: "/icons/HM.png",
        name: "الطب البشري",
        address: "حمص - الحواش",
        years: "6",
        hours: "250",
      },
      {
        specialization: "DNT",
        icon: "/icons/DNT.png",
        name: "طب الاسنان",
        address: "حمص - الحواش",
        years: "5",
        hours: "190",
      },
      {
        specialization: "PHY",
        icon: "/icons/PHY.png",
        name: "الصيدلة",
        address: "حمص - الحواش",
        years: "5",
        hours: "175",
      },
      {
        specialization: "CCE",
        icon: "/icons/CCE.png",
        name: "الهندسة المعلوماتية والإتصالات",
        address: "حمص - الحواش",
        years: "5",
        hours: "165",
      },
      {
        specialization: "CE",
        icon: "/icons/CE.png",
        name: "الهندسة المدنية",
        address: "حمص - الحواش",
        years: "5",
        hours: "165",
      },
      {
        specialization: "AE",
        icon: "/icons/AE.png",
        name: "الهندسة المعمارية",
        address: "حمص - الحواش",
        years: "5",
        hours: "165",
      },
      {
        specialization: "NRS",
        icon: "/icons/NRS.png",
        name: "التمريض",
        address: "حمص - الحواش",
        years: "4",
        hours: "144",
      },
      {
        specialization: "LAW",
        icon: "/icons/LAW1.png",
        name: "الحقوق",
        address: "حمص - الحواش",
        years: "4",
        hours: "135",
      },
      {
        specialization: "COS",
        icon: "/icons/COS.png",
        name: "التجميل",
        address: "حمص - الحواش",
        years: "4",
        hours: "144",
      },
      {
        specialization: "ENT",
        icon: "/icons/ENT.png",
        name: "ريادة الأعمال",
        address: "حمص - الحواش",
        years: "4",
        hours: "144",
      },
    ],
  },
  {
    id: 13,
    name: "الجامعة الوطنية الخاصة",
    EnName: "Al-Wataniya Private University",
    acronym: "WPU",
    image: "/images/unis/WPU.jpg",
    mainImage: `/Unis Logo/WPU.png`,
    website: "https://wpu.edu.sy/en/home-e/",
    facebook: "https://fb.com/AlWataniya.Private.University",
    address: "حماة - أوتستراد حمص حماة الدولي",
    phoneA: "00963-33-5033",
    phoneB: "00963-33-4589094",
    phoneC: "00963-33-4589095",
    fieldsForFilter: ["DNT", "PHY", "CCE", "CE", "AE", "BA"],
    fieldsForCards: [
      {
        specialization: "DNT",
        icon: "/icons/DNT.png",
        name: "طب الاسنان",
        address: "حماة - أوتستراد حمص حماة الدولي",
        years: "5",
        hours: "190",
      },
      {
        specialization: "PHY",
        icon: "/icons/PHY.png",
        name: "الصيدلة",
        address: "حماة - أوتستراد حمص حماة الدولي",
        years: "5",
        hours: "175",
      },
      {
        specialization: "CCE",
        icon: "/icons/CCE.png",
        name: "الهندسة المعلوماتية والإتصالات",
        address: "حماة - أوتستراد حمص حماة الدولي",
        years: "5",
        hours: "165",
      },
      {
        specialization: "CE",
        icon: "/icons/CE.png",
        name: "الهندسة المدنية",
        address: "حماة - أوتستراد حمص حماة الدولي",
        years: "5",
        hours: "165",
      },
      {
        specialization: "AE",
        icon: "/icons/AE.png",
        name: "الهندسة المعمارية",
        address: "حماة - أوتستراد حمص حماة الدولي",
        years: "5",
        hours: "165",
      },
      {
        specialization: "BA",
        icon: "/icons/BA.png",
        name: "ادارة الاعمال",
        address: "حماة - أوتستراد حمص حماة الدولي",
        years: "4",
        hours: "135",
      },
    ],
  },
  {
    id: 14,
    name: "جامعة المنارة الخاصة",
    EnName: "Al-Manara Private University",
    acronym: "Manara",
    image: "/images/unis/Manara.jpg",
    mainImage: `/Unis Logo/MANARA.png`,
    website: "https://www.manara.edu.sy/",
    facebook: "https://fb.com/ManaraUniv/",
    address: "اللاذقية - المشروع العاشر",
    phoneA: "X",
    phoneB: "X",
    phoneC: "X",
    fieldsForFilter: ["HS", "DNT", "PHY", "CE", "AE", "CCE", "BA", "ACT"],
    fieldsForCards: [
      {
        specialization: "HS",
        icon: "/icons/HS.png",
        name: "العلوم الصحية",
        address: "اللاذقية - المشروع العاشر",
        years: "4",
        hours: "135",
      },
      {
        specialization: "DNT",
        icon: "/icons/DNT.png",
        name: "طب الاسنان",
        address: "اللاذقية - المشروع العاشر",
        years: "5",
        hours: "190",
      },
      {
        specialization: "PHY",
        icon: "/icons/PHY.png",
        name: "الصيدلة",
        address: "اللاذقية - المشروع العاشر",
        years: "5",
        hours: "175",
      },
      {
        specialization: "CE",
        icon: "/icons/CE.png",
        name: "الهندسة المدنية",
        address: "اللاذقية - المشروع العاشر",
        years: "5",
        hours: "165",
      },
      {
        specialization: "AE",
        icon: "/icons/AE.png",
        name: "الهندسة المعمارية",
        address: "اللاذقية - المشروع العاشر",
        years: "5",
        hours: "165",
      },
      {
        specialization: "CCE",
        icon: "/icons/CCE.png",
        name: "الهندسة المعلوماتية والإتصالات",
        address: "اللاذقية - المشروع العاشر",
        years: "5",
        hours: "165",
      },
      {
        specialization: "BA",
        icon: "/icons/BA.png",
        name: "ادارة الاعمال",
        address: "اللاذقية - المشروع العاشر",
        years: "4",
        hours: "135",
      },
      {
        specialization: "ACT",
        icon: "/icons/ACT.png",
        name: "التمثيل (كلية فنون الأداء)",
        address: "اللاذقية - المشروع العاشر",
        years: "غير معروف",
        hours: "غير معروف",
      },
    ],
  },

  {
    id: 16,
    name: "جامعة الجزيرة الخاصة",
    EnName: "Al-Jazeera Private University",
    acronym: "JPU",
    image: "/images/unis/JPU.jpg",
    mainImage: `/Unis Logo/JPU.svg`,
    website: "https://jude.edu.sy/",
    facebook: "https://www.fb.com/jude.edu.sy/?locale=ar_AR",
    address: "أوتستراد (دمشق - درعا) - غباغب",
    phoneA: "X",
    phoneB: "X",
    phoneC: "X",
    fieldsForFilter: ["PHY", "BA", "CCE", "CE", "AE"],
    fieldsForCards: [
      {
        specialization: "PHY",
        icon: "/icons/PHY.png",
        name: "كلية الصيدلة",
        address: "KR",
        years: "5",
        hours: "175",
      },
      {
        specialization: "BA",
        icon: "/icons/BA.png",
        name: "إدارة الأعمال",
        address: "KR",
        years: "4",
        hours: "135",
      },
      {
        specialization: "CCE",
        icon: "/icons/CCE.png",
        name: "الهندسة المعلوماتية والإتصالات",
        address: "KR",
        years: "5",
        hours: "165",
      },
      {
        specialization: "CE",
        icon: "/icons/CE.png",
        name: "الهندسة المدنية",
        address: "KR",
        years: "5",
        hours: "165",
      },
      {
        specialization: "AE",
        icon: "/icons/AE.png",
        name: "هندسة العمارة",
        address: "KR",
        years: "5",
        hours: "165",
      },
    ],
  },
  {
    id: 17,
    name: "الجامعة الدولية الخاصة للعلوم والتكنولوجيا",
    EnName: "International University For Science and Technology",
    acronym: "IUST",
    image: "/images/unis/IUST.jpg",
    mainImage: `/Unis Logo/UOK.gif`,
    website: "https://iust.edu.sy/ar/",
    facebook: "https://fb.com/iustofficial1",
    address: "أوتستراد (دمشق - درعا) - غباغب",
    phoneA: "00963-15-2094",
    phoneB: "X",
    phoneC: "X",
    fieldsForFilter: ["DNT", "PHY", "CCE", "CE", "AE", "BA", "ART", "EL"],
    fieldsForCards: [
      {
        specialization: "DNT",
        icon: "/icons/DNT.png",
        name: "طب الأسنان",
        address: "KR",
        years: "6",
        hours: "250",
      },
      {
        specialization: "PHY",
        icon: "/icons/PHY.png",
        name: "الصيدلة",
        address: "KR",
        years: "5",
        hours: "190",
      },
      {
        specialization: "CCE",
        icon: "/icons/CCE.png",
        name: "الهندسة المعلوماتية والإتصالات",
        address: "KR",
        years: "5",
        hours: "175",
      },
      {
        specialization: "CE",
        icon: "/icons/CE.png",
        name: "الهندسة المدنية",
        address: "KR",
        years: "5",
        hours: "165",
      },
      {
        specialization: "AE",
        icon: "/icons/AE.png",
        name: "الهندسة المعمارية",
        address: "KR",
        years: "5",
        hours: "165",
      },
      {
        specialization: "BA",
        icon: "/icons/BA.png",
        name: "إدارة الأعمال",
        address: "KR",
        years: "5",
        hours: "165",
      },
      {
        specialization: "ART",
        icon: "/icons/ART.png",
        name: "الفنون",
        address: "KR",
        years: "4",
        hours: "135",
      },
      {
        specialization: "EL",
        icon: "/icons/EL.png",
        name: "اللغة الإنجليزية",
        address: "KR",
        years: "4",
        hours: "135",
      },
    ],
  },
  {
    id: 18,
    name: "جامعة القلمون الخاصة",
    EnName: "Kalamoon Private University",
    acronym: "UOK",
    image: "/images/unis/UOK.jpg",
    mainImage: `/Unis Logo/UOK.gif`,
    website: "http://www.uok.edu.sy/",
    facebook: "https://fb.com/kalamoonofficial",
    address: "أوتستراد (دمشق - حمص) الدولي - دير عطية",
    phoneA: "00963-11-7833999",
    phoneB: "X",
    phoneC: "X",
    fieldsForFilter: [
      "HM",
      "DNT",
      "PHY",
      "CCE",
      "CE",
      "AE",
      "ART",
      "LAW",
      "BA",
      "HS",
    ],
    fieldsForCards: [
      {
        specialization: "HM",
        icon: "/icons/HM.png",
        name: "الطب البشري",
        address: "KR",
        years: "6",
        hours: "250",
      },
      {
        specialization: "DNT",
        icon: "/icons/DNT.png",
        name: "طب الاسنان",
        address: "KR",
        years: "5",
        hours: "190",
      },
      {
        specialization: "PHY",
        icon: "/icons/PHY.png",
        name: "الصيدلة",
        address: "KR",
        years: "5",
        hours: "175",
      },
      {
        specialization: "CCE",
        icon: "/icons/CCE.png",
        name: "الهندسة المعلوماتية والإتصالات",
        address: "KR",
        years: "5",
        hours: "165",
      },
      {
        specialization: "CE",
        icon: "/icons/CE.png",
        name: "الهندسة المدنية",
        address: "KR",
        years: "5",
        hours: "165",
      },
      {
        specialization: "AE",
        icon: "/icons/AE.png",
        name: "الهندسة المعمارية",
        address: "KR",
        years: "5",
        hours: "165",
      },
      {
        specialization: "ART",
        icon: "/icons/ART.png",
        name: "الفنون",
        address: "KR",
        years: "4",
        hours: "135",
      },
      {
        specialization: "LAW",
        icon: "/icons/LAW1.png",
        name: "الحقوق",
        address: "KR",
        years: "4",
        hours: "135",
      },
      {
        specialization: "BA",
        icon: "/icons/BA.png",
        name: "إدارة الأعمال",
        address: "KR",
        years: "4",
        hours: "135",
      },
      {
        specialization: "HS",
        icon: "/icons/HS.png",
        name: "العلوم الصحية",
        address: "KR",
        years: "4",
        hours: "135",
      },
    ],
  },
  {
    id: 19,
    name: "الجامعة السورية الخاصة",
    EnName: "Syrian Private University",
    acronym: "SPU",
    image: "/images/unis/SPU.jpg",
    mainImage: `/Unis Logo/SPU.png`,
    website: "https://www.spu.edu.sy/index.php?lang=2",
    facebook: "https://fb.com/SPUpage.sy/?ref=bookmarks",
    address: "أوتستراد (دمشق - درعا) - بعد بلدة الكسوة",
    phoneA: "00963 11 639 021000",
    phoneB: "X",
    phoneC: "X",
    fieldsForFilter: ["HM", "DNT", "PHY", "CCE", "PE", "BA"],
    fieldsForCards: [
      {
        specialization: "HM",
        icon: "/icons/HM.png",
        name: "الطب البشري",
        address: "KR",
        years: "6",
        hours: "250",
      },
      {
        specialization: "DNT",
        icon: "/icons/DNT.png",
        name: "طب الاسنان",
        address: "KR",
        years: "5",
        hours: "190",
      },
      {
        specialization: "PHY",
        icon: "/icons/PHY.png",
        name: "الصيدلة",
        address: "KR",
        years: "5",
        hours: "175",
      },
      {
        specialization: "CCE",
        icon: "/icons/CCE.png",
        name: "الهندسة المعلوماتية والإتصالات",
        address: "KR",
        years: "5",
        hours: "165",
      },
      {
        specialization: "PE",
        icon: "/icons/PE.png",
        name: "الهندسة البترولية",
        address: "KR",
        years: "5",
        hours: "165",
      },
      {
        specialization: "BA",
        icon: "/icons/BA.png",
        name: "إدارة الأعمال",
        address: "KR",
        years: "4",
        hours: "135",
      },
    ],
  },
  {
    id: 20,
    name: "جامعة الأندلس الخاصة",
    EnName: "Al-Andalus Private University",
    acronym: "AMU",
    image: "/images/unis/AMU.jpg",
    mainImage: `/Unis Logo/AMU.png`,
    website: "https://au.edu.sy/ar/home",
    facebook: "https://fb.com/andalusuni.ms",
    address: "طرطوس - القدموس",
    phoneA: "00963-41-7557600",
    phoneB: "X",
    phoneC: "X",
    fieldsForFilter: ["HM", "DNT", "PHY", "NRS", "BE", "HA"],
    fieldsForCards: [
      {
        specialization: "HM",
        icon: "/icons/HM.png",
        name: "الطب البشري",
        address: "KR",
        years: "6",
        hours: "250",
      },
      {
        specialization: "DNT",
        icon: "/icons/DNT.png",
        name: "طب الأسنان",
        address: "KR",
        years: "5",
        hours: "190",
      },
      {
        specialization: "PHY",
        icon: "/icons/PHY.png",
        name: "الصيدلة",
        address: "KR",
        years: "5",
        hours: "175",
      },
      {
        specialization: "NRS",
        icon: "/icons/NRS.png",
        name: "التمريض",
        address: "KR",
        years: "4",
        hours: "135",
      },
      {
        specialization: "BE",
        icon: "/icons/BE.png",
        name: "الهندسة الطبية",
        address: "KR",
        years: "5",
        hours: "165",
      },
      {
        specialization: "HA",
        icon: "/icons/HA.png",
        name: "إدارة المشفى",
        address: "KR",
        years: "4",
        hours: "135",
      },
    ],
  },
];
