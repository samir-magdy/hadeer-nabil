export type Language = "en" | "ar";

export interface PageContent {
  navbar: {
    links: Array<{ label: string; href: string }>;
    logo: string;
    menuAria: string;
  };
  hero: {
    title: string;
    emphasis: string;
    description: string;
    cta: string;
  };
  about: {
    heading: string;
    paragraph1: string;
    paragraph2: string;
    trustCards: Array<{ label: string; detail: string }>;
  };
  services: {
    heading: string;
    items: Array<{ title: string; description: string }>;
  };
  contact: {
    heading: string;
    description: string;
    cta: string;
  };

}

export const pageContent: Record<Language, PageContent> = {
  en: {
    navbar: {
      logo: "Hadeer Nabil",
      menuAria: "Toggle menu",
      links: [
        { label: "About", href: "#about" },
        { label: "Services", href: "#services" },
        { label: "Contact", href: "#contact" },
      ],
    },
    hero: {
      title: "Learn English",
      emphasis: "with confidence",
      description:
        "Private English lessons, online and in-person. Personalized and designed to help you communicate with confidence.",
      cta: "Find out your English level",
    },
    about: {
      heading: "A tutor who listens before she teaches.",
      paragraph1:
        "Hi, I’m Hadeer — an English teacher based in Cairo with a passion for helping people find their voice in English. I’ve been teaching for several years and I work with students of all ages and goals, from young learners building their foundations to professionals preparing for interviews and exams.",
      paragraph2:
        "I believe lessons should feel like conversations, not lectures. Every student is different, so every lesson plan is too — built around your goals, your pace, and what actually motivates you to keep going.",
      trustCards: [
        { label: "All levels welcome", detail: "From complete beginners to advanced speakers" },
        { label: "Online & in-person", detail: "Flexible lessons wherever works for you" },
      ],
    },
    services: {
      heading: "What I teach",
      items: [
        {
          title: "Phonics & Early Reading",
          description:
            "Help children learn letter sounds, blend them into words, and build confidence through fun, engaging activities and short stories using Jolly Phonics.",
        },
        {
          title: "Summer Course",
          description:
            "A summer program reviewing grammar, improving writing and reading, building translation skills, fluency, and confidence to prepare students for the school year.",
        },
        {
          title: "Everyday Conversation",
          description:
            "Build real fluency and confidence in everyday English, learning to speak naturally and clearly in real-life situations without pausing, translating, or hesitating.",
        },
        {
          title: "School Support",
          description:
            "Help students excel in school English, offering support with homework, essays, reading comprehension, and exam preparation to boost both grades and confidence.",
        },
      ],
    },
    contact: {
      heading: "Ready to get started?",
      description:
        "Reach out and we’ll figure out the best lesson plan for you — no pressure, just a conversation.",
      cta: "Chat on WhatsApp",
    },
  
  },
  ar: {
    navbar: {
      logo: "هدير نبيل",
      menuAria: "تبديل القائمة",
      links: [
        { label: "كيف أعمل", href: "#about" },
        { label: "الخدمات", href: "#services" },
        { label: "تواصل معي", href: "#contact" },
      ],
    },
    hero: {
      title: "تعلّم الإنجليزية",
      emphasis: "بثقة",
      description:
        "دروس خاصة للإنجليزية، أونلاين أو حضورياً. مصممة لمساعدتك على التواصل بثقة.",
      cta: "اكتشف مستواك في الإنجليزية",
    },
    about: {
      heading: "مُدرسة تستمع قبل أن تُعلّم.",
      paragraph1:
        "مرحبا، أنا هدير — معلمة إنجليزية في القاهرة وأحب مساعدة الناس على إيجاد صوتهم في الإنجليزية. أدرّس لعدة سنوات وأعمل مع طلاب من مختلف الأعمار والأهداف، من المتعلمين الصغار الذين يبنون أساسهم إلى المهنيين الذين يستعدون للمقابلات والامتحانات.",
      paragraph2:
        "أؤمن أن الدروس يجب أن تشعر وكأنها محادثة، وليس محاضرة. كل طالب مختلف، لذلك كل خطة درس مختلفة أيضًا — مبنية على أهدافك وسرعتك وما يحفّزك حقًا على الاستمرار.",
      trustCards: [
        { label: "مُرحّب بجميع المستويات", detail: "من المبتدئين تمامًا إلى المتحدثين المتقدمين" },
        { label: "أونلاين ووجاهي", detail: "دروس مرنة أينما يناسبك" },
      ],
    },
    services: {
      heading: "الدروس الخاصة",
      items: [
        {
          title: "القراءة المبكرة والتهجئة",
          description:
            "مساعدة الأطفال على تعلم أصوات الحروف ودمجها في كلمات وبناء الثقة من خلال أنشطة ممتعة وقصص قصيرة.",
        },
        {
          title: "دورة الصيف",
          description:
            "برنامج صيفي لمراجعة القواعد وتحسين الكتابة والقراءة وبناء مهارات الترجمة والطلاقة والثقة لإعداد الطلاب للسنة الدراسية.",
        },
        {
          title: "المحادثة اليومية",
          description:
            "بناء الطلاقة والثقة في الإنجليزية اليومية، والتحدث بطلاقة ووضوح في مواقف الحياة الواقعية دون التوقف أو الترجمة أو التردد.",
        },
        {
          title: "دعم المدرسة",
          description:
            "مساعدة الطلاب على التفوق في الإنجليزية المدرسية من خلال دعم الواجبات والرسائل وفهم المقروء والاستعداد للامتحانات لرفع الدرجات والثقة.",
        },
      ],
    },
    contact: {
      heading: "مستعد للبدء؟",
      description:
        "تواصل معي وسنحدد لك أفضل خطة دراسية.",
      cta: "تواصل عبر الواتساب",
    },
 
  },
};
