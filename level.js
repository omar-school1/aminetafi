// Level page JavaScript functionality
// مواد كل مستوى
const levelSubjects = {
    "common-core": [
        {
            "name": "العربية",
            "icon": "📝",
            "lessons": [
                {
                    "title": "النصوص الأدبية",
                    "downloadNumber": "01",
                    "quiz": [
                        {
                            "question": "ما هو التعريف الصحيح للنص الأدبي؟",
                            "options": [
                                "مجموعة من الكلمات المترابطة",
                                "نص يحمل قيمة جمالية وتعبيرية",
                                "أي نص مكتوب باللغة العربية",
                                "نص يحتوي على معلومات فقط"
                            ],
                            "correct": 1
                        },
                        {
                            "question": "أي من الآتي يعد من أنواع النصوص الأدبية؟",
                            "options": [
                                "الشعر والنثر",
                                "التقارير العلمية",
                                "القوانين والأنظمة",
                                "الكتب المدرسية"
                            ],
                            "correct": 0
                        },
                        {
                            "question": "ما هي أهم خصائص النص الأدبي؟",
                            "options": [
                                "الوضوح فقط",
                                "الجمال والتأثير والإبداع",
                                "الطول والتفصيل",
                                "المعلومات الكثيرة"
                            ],
                            "correct": 1
                        }
                    ]
                },
                {
                    "title": "علم البلاغة",
                    "downloadNumber": "02",
                    "quiz": [
                        {
                            "question": "ما هو تعريف علم البلاغة؟",
                            "options": [
                                "علم القواعد النحوية",
                                "علم مطابقة الكلام لمقتضى الحال",
                                "علم الإملاء والخط",
                                "علم التاريخ الأدبي"
                            ],
                            "correct": 1
                        },
                        {
                            "question": "كم عدد علوم البلاغة الأساسية؟",
                            "options": [
                                "علمان",
                                "ثلاثة علوم",
                                "أربعة علوم",
                                "خمسة علوم"
                            ],
                            "correct": 1
                        },
                        {
                            "question": "أي من الآتي يعد من علوم البلاغة؟",
                            "options": [
                                "علم العروض",
                                "علم المعاني والبيان والبديع",
                                "علم النحو",
                                "علم التجويد"
                            ],
                            "correct": 1
                        }
                    ]
                },
                {
                    "title": "القواعد النحوية",
                    "downloadNumber": "03",
                    "quiz": [
                        {
                            "question": "ما هي علامة رفع المفرد؟",
                            "options": [
                                "الفتحة",
                                "الضمة",
                                "الكسرة",
                                "السكون"
                            ],
                            "correct": 1
                        },
                        {
                            "question": "أي من الآتي يعد من أدوات النصب؟",
                            "options": [
                                "من وإلى",
                                "أن ولن وكي",
                                "في وعلى",
                                "قد ولقد"
                            ],
                            "correct": 1
                        },
                        {
                            "question": "ما هو إعراب كلمة \"محمدٌ\" في جملة \"محمدٌ مجتهد\"؟",
                            "options": [
                                "مفعول به منصوب",
                                "مبتدأ مرفوع",
                                "فاعل مرفوع",
                                "خبر مرفوع"
                            ],
                            "correct": 1
                        }
                    ]
                },
                {
                    "title": "التعبير والإنشاء",
                    "downloadNumber": "04",
                    "quiz": [
                        {
                            "question": "ما هي أنواع التعبير الرئيسية؟",
                            "options": [
                                "شفهي وكتابي فقط",
                                "وظيفي وإبداعي",
                                "قصير وطويل",
                                "بسيط ومعقد"
                            ],
                            "correct": 1
                        },
                        {
                            "question": "أي من الآتي يعد من أنواع الإنشاء الطلبي؟",
                            "options": [
                                "الخبر والاستفهام",
                                "الأمر والنهي والاستفهام",
                                "المبتدأ والخبر",
                                "الفعل والفاعل"
                            ],
                            "correct": 1
                        },
                        {
                            "question": "ما هو الهدف من التعبير الإبداعي؟",
                            "options": [
                                "نقل المعلومات فقط",
                                "التأثير في المشاعر والإمتاع",
                                "تعلم القواعد",
                                "حفظ النصوص"
                            ],
                            "correct": 1
                        }
                    ]
                }
            ],
            "exercises": [
                {
                    "title": "تحليل النصوص",
                    "downloadNumber": "01"
                },
                {
                    "title": "تمارين البلاغة",
                    "downloadNumber": "02"
                },
                {
                    "title": "تطبيقات نحوية",
                    "downloadNumber": "03"
                }
            ]
        },
        {
            "name": "الاجتماعيات",
            "icon": "🌍",
            "lessons": [
                {
                    "title": "التاريخ القديم",
                    "downloadNumber": "01",
                    "quiz": [
                        {
                            "question": "112121",
                            "options": [
                                "12",
                                "12"
                            ],
                            "correct": 0
                        }
                    ]
                },
                {
                    "title": "الجغرافيا الطبيعية",
                    "downloadNumber": "02"
                },
                {
                    "title": "التربية المدنية",
                    "downloadNumber": "03"
                }
            ],
            "exercises": [
                {
                    "title": "خرائط تاريخية",
                    "downloadNumber": "01"
                },
                {
                    "title": "دراسة حالة جغرافية",
                    "downloadNumber": "02"
                }
            ]
        },
        {
            "name": "التربية الإسلامية",
            "icon": "🕌",
            "lessons": [
                {
                    "title": "القرآن الكريم",
                    "downloadNumber": "01"
                },
                {
                    "title": "الحديث الشريف",
                    "downloadNumber": "02"
                },
                {
                    "title": "الفقه الإسلامي",
                    "downloadNumber": "03"
                }
            ],
            "exercises": [
                {
                    "title": "حفظ القرآن",
                    "downloadNumber": "01"
                },
                {
                    "title": "شرح الأحاديث",
                    "downloadNumber": "02"
                }
            ]
        },
        {
            "name": "علوم الحياة والأرض",
            "icon": "🧬",
            "lessons": [
                {
                    "title": "علم الأحياء",
                    "downloadNumber": "01"
                },
                {
                    "title": "علوم الأرض",
                    "downloadNumber": "02"
                },
                {
                    "title": "البيئة والتنمية",
                    "downloadNumber": "03"
                }
            ],
            "exercises": [
                {
                    "title": "تجارب مخبرية",
                    "downloadNumber": "01"
                },
                {
                    "title": "دراسة الكائنات",
                    "downloadNumber": "02"
                }
            ]
        },
        {
            "name": "الفيزياء",
            "icon": "⚛",
            "lessons": [
                {
                    "title": "الميكانيك",
                    "downloadNumber": "01"
                },
                {
                    "title": "الكهرباء الأساسية",
                    "downloadNumber": "02"
                },
                {
                    "title": "الضوء والصوت",
                    "downloadNumber": "03"
                }
            ],
            "exercises": [
                {
                    "title": "حل مسائل فيزيائية",
                    "downloadNumber": "01"
                },
                {
                    "title": "تجارب عملية",
                    "downloadNumber": "02"
                }
            ]
        },
        {
            "name": "الرياضيات",
            "icon": "📐",
            "lessons": [
                {
                    "title": "الجبر الأساسي",
                    "downloadNumber": "01"
                },
                {
                    "title": "الهندسة المسطحة",
                    "downloadNumber": "02"
                },
                {
                    "title": "الإحصاء",
                    "downloadNumber": "03"
                }
            ],
            "exercises": [
                {
                    "title": "مسائل جبرية",
                    "downloadNumber": "01"
                },
                {
                    "title": "تمارين هندسية",
                    "downloadNumber": "02"
                }
            ]
        },
        {
            "name": "الفلسفة",
            "icon": "🤔",
            "lessons": [
                {
                    "title": "مدخل إلى الفلسفة",
                    "downloadNumber": "01"
                },
                {
                    "title": "الفلسفة القديمة",
                    "downloadNumber": "02"
                },
                {
                    "title": "التفكير النقدي",
                    "downloadNumber": "03"
                }
            ],
            "exercises": [
                {
                    "title": "نقد النصوص",
                    "downloadNumber": "01"
                },
                {
                    "title": "تحليل الأفكار",
                    "downloadNumber": "02"
                }
            ]
        },
        {
            "name": "الإنجليزية",
            "icon": "🇬🇧",
            "lessons": [
                {
                    "title": "القواعد الأساسية",
                    "downloadNumber": "01"
                },
                {
                    "title": "المفردات والتعبير",
                    "downloadNumber": "02"
                },
                {
                    "title": "القراءة والفهم",
                    "downloadNumber": "03"
                }
            ],
            "exercises": [
                {
                    "title": "تمارين القواعد",
                    "downloadNumber": "01"
                },
                {
                    "title": "نصوص للقراءة",
                    "downloadNumber": "02"
                }
            ]
        },
        {
            "name": "المعلوميات",
            "icon": "💻",
            "lessons": [
                {
                    "title": "أساسيات الحاسوب",
                    "downloadNumber": "01"
                },
                {
                    "title": "البرمجة الأساسية",
                    "downloadNumber": "02"
                },
                {
                    "title": "الإنترنت والشبكات",
                    "downloadNumber": "03"
                }
            ],
            "exercises": [
                {
                    "title": "تطبيقات عملية",
                    "downloadNumber": "01"
                },
                {
                    "title": "مشاريع برمجية",
                    "downloadNumber": "02"
                }
            ]
        }
    ],
    "first-bac": [
        {
            "name": "العربية",
            "icon": "📝",
            "lessons": [
                {
                    "title": "الشعر العربي القديم",
                    "downloadNumber": "01"
                },
                {
                    "title": "النثر العربي",
                    "downloadNumber": "02"
                },
                {
                    "title": "البلاغة العربية",
                    "downloadNumber": "03"
                },
                {
                    "title": "علم العروض",
                    "downloadNumber": "04"
                }
            ],
            "exercises": [
                {
                    "title": "تحليل القصائد",
                    "downloadNumber": "01"
                },
                {
                    "title": "دراسة النثر",
                    "downloadNumber": "02"
                },
                {
                    "title": "تطبيقات بلاغية",
                    "downloadNumber": "03"
                }
            ]
        },
        {
            "name": "الاجتماعيات",
            "icon": "🌍",
            "lessons": [
                {
                    "title": "التاريخ المعاصر",
                    "downloadNumber": "01"
                },
                {
                    "title": "الجغرافيا البشرية",
                    "downloadNumber": "02"
                },
                {
                    "title": "التنمية الاقتصادية",
                    "downloadNumber": "03"
                },
                {
                    "title": "النظم السياسية",
                    "downloadNumber": "04"
                }
            ],
            "exercises": [
                {
                    "title": "دراسة وثائق تاريخية",
                    "downloadNumber": "01"
                },
                {
                    "title": "تحليل خرائط",
                    "downloadNumber": "02"
                },
                {
                    "title": "مشاريع بحثية",
                    "downloadNumber": "03"
                }
            ]
        },
        {
            "name": "التربية الإسلامية",
            "icon": "🕌",
            "lessons": [
                {
                    "title": "القرآن وعلومه",
                    "downloadNumber": "01"
                },
                {
                    "title": "الحديث وعلومه",
                    "downloadNumber": "02"
                },
                {
                    "title": "الفقه المقارن",
                    "downloadNumber": "03"
                },
                {
                    "title": "العقيدة الإسلامية",
                    "downloadNumber": "04"
                }
            ],
            "exercises": [
                {
                    "title": "تفسير آيات قرآنية",
                    "downloadNumber": "01"
                },
                {
                    "title": "دراسة الأحاديث",
                    "downloadNumber": "02"
                },
                {
                    "title": "مسائل فقهية",
                    "downloadNumber": "03"
                }
            ]
        },
        {
            "name": "علوم الحياة والأرض",
            "icon": "🧬",
            "lessons": [
                {
                    "title": "علم الوراثة",
                    "downloadNumber": "01"
                },
                {
                    "title": "علم البيئة",
                    "downloadNumber": "02"
                },
                {
                    "title": "الجيولوجيا",
                    "downloadNumber": "03"
                }
            ],
            "exercises": [
                {
                    "title": "تجارب وراثية",
                    "downloadNumber": "01"
                },
                {
                    "title": "دراسة النظم البيئية",
                    "downloadNumber": "02"
                }
            ]
        },
        {
            "name": "الفيزياء",
            "icon": "⚛",
            "lessons": [
                {
                    "title": "الموجات والاهتزازات",
                    "downloadNumber": "01"
                },
                {
                    "title": "الكهرباء والمغناطيسية",
                    "downloadNumber": "02"
                },
                {
                    "title": "البصريات",
                    "downloadNumber": "03"
                }
            ],
            "exercises": [
                {
                    "title": "تجارب الموجات",
                    "downloadNumber": "01"
                },
                {
                    "title": "تطبيقات كهربائية",
                    "downloadNumber": "02"
                }
            ]
        },
        {
            "name": "الرياضيات",
            "icon": "📐",
            "lessons": [
                {
                    "title": "الجبر المتقدم",
                    "downloadNumber": "01"
                },
                {
                    "title": "الهندسة التحليلية",
                    "downloadNumber": "02"
                },
                {
                    "title": "التفاضل والتكامل",
                    "downloadNumber": "03"
                }
            ],
            "exercises": [
                {
                    "title": "مسائل جبرية معقدة",
                    "downloadNumber": "01"
                },
                {
                    "title": "تمارين هندسية",
                    "downloadNumber": "02"
                }
            ]
        },
        {
            "name": "الفلسفة",
            "icon": "🤔",
            "lessons": [
                {
                    "title": "الفلسفة الإسلامية",
                    "downloadNumber": "01"
                },
                {
                    "title": "الفلسفة الغربية",
                    "downloadNumber": "02"
                },
                {
                    "title": "قضايا فلسفية معاصرة",
                    "downloadNumber": "03"
                }
            ],
            "exercises": [
                {
                    "title": "تحليل النصوص الفلسفية",
                    "downloadNumber": "01"
                },
                {
                    "title": "مناقشة قضايا فكرية",
                    "downloadNumber": "02"
                }
            ]
        },
        {
            "name": "الإنجليزية",
            "icon": "🇬🇧",
            "lessons": [
                {
                    "title": "الأدب الإنجليزي",
                    "downloadNumber": "01"
                },
                {
                    "title": "القواعد المتقدمة",
                    "downloadNumber": "02"
                },
                {
                    "title": "التعبير الأكاديمي",
                    "downloadNumber": "03"
                }
            ],
            "exercises": [
                {
                    "title": "تحليل النصوص الأدبية",
                    "downloadNumber": "01"
                },
                {
                    "title": "كتابة المقالات",
                    "downloadNumber": "02"
                }
            ]
        }
    ],
    "second-bac": [
        {
            "name": "العربية",
            "icon": "📝",
            "lessons": [
                {
                    "title": "الأدب العربي الحديث",
                    "downloadNumber": "01"
                },
                {
                    "title": "النحو والصرف المتقدم",
                    "downloadNumber": "02"
                },
                {
                    "title": "التعبير والإنشاء المتقدم",
                    "downloadNumber": "03"
                },
                {
                    "title": "النقد الأدبي",
                    "downloadNumber": "04"
                },
                {
                    "title": "البلاغة والأسلوب",
                    "downloadNumber": "05"
                }
            ],
            "exercises": [
                {
                    "title": "تحليل النصوص الأدبية",
                    "downloadNumber": "01"
                },
                {
                    "title": "الكتابة الإبداعية",
                    "downloadNumber": "02"
                },
                {
                    "title": "التطبيقات النحوية",
                    "downloadNumber": "03"
                },
                {
                    "title": "دراسات بلاغية",
                    "downloadNumber": "04"
                }
            ]
        },
        {
            "name": "التربية الإسلامية",
            "icon": "🕌",
            "lessons": [
                {
                    "title": "الفكر الإسلامي المعاصر",
                    "downloadNumber": "01"
                },
                {
                    "title": "فقه المعاملات",
                    "downloadNumber": "02"
                },
                {
                    "title": "الحضارة الإسلامية",
                    "downloadNumber": "03"
                },
                {
                    "title": "القضايا المعاصرة في الإسلام",
                    "downloadNumber": "04"
                }
            ],
            "exercises": [
                {
                    "title": "بحوث إسلامية متقدمة",
                    "downloadNumber": "01"
                },
                {
                    "title": "دراسات حضارية",
                    "downloadNumber": "02"
                },
                {
                    "title": "قضايا معاصرة",
                    "downloadNumber": "03"
                }
            ]
        },
        {
            "name": "علوم الحياة والأرض",
            "icon": "🧬",
            "lessons": [
                {
                    "title": "الوراثة المندلية المتقدمة",
                    "downloadNumber": "01"
                },
                {
                    "title": "علم المناعة والأمراض",
                    "downloadNumber": "02"
                },
                {
                    "title": "البيولوجيا الجزيئية",
                    "downloadNumber": "03"
                },
                {
                    "title": "الجيولوجيا المتقدمة",
                    "downloadNumber": "04"
                },
                {
                    "title": "علم البيئة التطبيقي",
                    "downloadNumber": "05"
                }
            ],
            "exercises": [
                {
                    "title": "مسائل الوراثة المعقدة",
                    "downloadNumber": "01"
                },
                {
                    "title": "تجارب المناعة",
                    "downloadNumber": "02"
                },
                {
                    "title": "دراسات بيئية",
                    "downloadNumber": "03"
                },
                {
                    "title": "تحليل الصخور",
                    "downloadNumber": "04"
                }
            ]
        },
        {
            "name": "الفيزياء",
            "icon": "⚛",
            "lessons": [
                {
                    "title": "الموجات والاهتزازات",
                    "downloadNumber": "01"
                },
                {
                    "title": "الكهرباء المتناوبة",
                    "downloadNumber": "02"
                },
                {
                    "title": "الفيزياء النووية",
                    "downloadNumber": "03"
                },
                {
                    "title": "الفيزياء الحديثة",
                    "downloadNumber": "04"
                },
                {
                    "title": "الطاقة المتجددة",
                    "downloadNumber": "05"
                }
            ],
            "exercises": [
                {
                    "title": "مسائل الموجات المعقدة",
                    "downloadNumber": "01"
                },
                {
                    "title": "تطبيقات الكهرباء",
                    "downloadNumber": "02"
                },
                {
                    "title": "حسابات نووية",
                    "downloadNumber": "03"
                },
                {
                    "title": "تجارب فيزيائية",
                    "downloadNumber": "04"
                }
            ]
        },
        {
            "name": "الرياضيات",
            "icon": "📐",
            "lessons": [
                {
                    "title": "التحليل الرياضي المتقدم",
                    "downloadNumber": "01"
                },
                {
                    "title": "الجبر الخطي والمصفوفات",
                    "downloadNumber": "02"
                },
                {
                    "title": "الهندسة الفضائية",
                    "downloadNumber": "03"
                },
                {
                    "title": "الإحصاء والاحتماليات",
                    "downloadNumber": "04"
                },
                {
                    "title": "المعادلات التفاضلية",
                    "downloadNumber": "05"
                }
            ],
            "exercises": [
                {
                    "title": "مسائل التفاضل والتكامل",
                    "downloadNumber": "01"
                },
                {
                    "title": "تطبيقات الجبر الخطي",
                    "downloadNumber": "02"
                },
                {
                    "title": "مسائل الهندسة المعقدة",
                    "downloadNumber": "03"
                },
                {
                    "title": "حل المعادلات",
                    "downloadNumber": "04"
                }
            ]
        },
        {
            "name": "الفلسفة",
            "icon": "🤔",
            "lessons": [
                {
                    "title": "نظرية المعرفة",
                    "downloadNumber": "01"
                },
                {
                    "title": "فلسفة الوجود والكينونة",
                    "downloadNumber": "02"
                },
                {
                    "title": "الأخلاق والقيم",
                    "downloadNumber": "03"
                },
                {
                    "title": "الفلسفة السياسية",
                    "downloadNumber": "04"
                },
                {
                    "title": "فلسفة العلوم",
                    "downloadNumber": "05"
                }
            ],
            "exercises": [
                {
                    "title": "مقالات فلسفية متقدمة",
                    "downloadNumber": "01"
                },
                {
                    "title": "تحليل النصوص الفلسفية",
                    "downloadNumber": "02"
                },
                {
                    "title": "المناقشات الفلسفية",
                    "downloadNumber": "03"
                },
                {
                    "title": "البحوث الفلسفية",
                    "downloadNumber": "04"
                }
            ]
        },
        {
            "name": "الإنجليزية",
            "icon": "🇬🇧",
            "lessons": [
                {
                    "title": "Advanced Grammar & Syntax",
                    "downloadNumber": "01"
                },
                {
                    "title": "Literature Analysis",
                    "downloadNumber": "02"
                },
                {
                    "title": "Academic Writing Skills",
                    "downloadNumber": "03"
                },
                {
                    "title": "Critical Thinking",
                    "downloadNumber": "04"
                },
                {
                    "title": "Communication Skills",
                    "downloadNumber": "05"
                }
            ],
            "exercises": [
                {
                    "title": "Complex Grammar Practice",
                    "downloadNumber": "01"
                },
                {
                    "title": "Literary Analysis Essays",
                    "downloadNumber": "02"
                },
                {
                    "title": "Research Papers",
                    "downloadNumber": "03"
                },
                {
                    "title": "Oral Presentations",
                    "downloadNumber": "04"
                }
            ]
        },
        {
            "name": "الفرنسية",
            "icon": "🇫🇷",
            "lessons": [
                {
                    "title": "Grammaire et Syntaxe",
                    "downloadNumber": "01"
                },
                {
                    "title": "Littérature Française",
                    "downloadNumber": "02"
                },
                {
                    "title": "Expression Écrite",
                    "downloadNumber": "03"
                },
                {
                    "title": "Analyse de Texte",
                    "downloadNumber": "04"
                }
            ],
            "exercises": [
                {
                    "title": "Exercices de Grammaire",
                    "downloadNumber": "01"
                },
                {
                    "title": "Essais Littéraires",
                    "downloadNumber": "02"
                },
                {
                    "title": "Analyse de Textes",
                    "downloadNumber": "03"
                }
            ]
        }
    ]
};

// عناوين المستويات
const levelTitles = {
    "common-core": "دروس الجذع المشترك",
    "first-bac": "دروس الأولى بكالوريا",
    "second-bac": "دروس الثانية بكالوريا"
};

// باقي الكود الأصلي للملف إذا كان موجوداً

document.addEventListener('DOMContentLoaded', function() {
    // الحصول على معاملات URL
    const urlParams = new URLSearchParams(window.location.search);
    const level = urlParams.get('level');
    const title = urlParams.get('title');

    // تحديث عنوان الصفحة
    const levelTitle = document.getElementById('level-title');
    if (title) {
        levelTitle.textContent = `دروس ${title}`;
    } else if (levelTitles[level]) {
        levelTitle.textContent = levelTitles[level];
    }

    // عرض المواد
    displaySubjects(level);
});

function displaySubjects(level) {
    const container = document.getElementById('subjects-container');

    if (!level || !levelSubjects[level]) {
        container.innerHTML = '<div class="loading">مستوى غير متاح</div>';
        return;
    }

    const subjects = levelSubjects[level];

    // عرض رسالة التحميل
    container.innerHTML = '<div class="loading">جاري تحميل المواد...</div>';

    // محاكاة تأخير التحميل
    setTimeout(() => {
        container.innerHTML = '';

        subjects.forEach(subject => {
            const subjectElement = createSubjectElement(subject);
            container.appendChild(subjectElement);
        });

        // إضافة تأثير الظهور
        const subjectContainers = container.querySelectorAll('.subject-container');
        subjectContainers.forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';

            setTimeout(() => {
                element.style.transition = 'all 0.6s ease';
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }, 1000);
}

function createSubjectElement(subject) {
    const subjectDiv = document.createElement('div');
    subjectDiv.className = 'subject-container';

    subjectDiv.innerHTML = `
        <div class="subject-header" onclick="toggleSubjectContent(this)">
            <div class="subject-icon-large">${subject.icon}</div>
            <h2>${subject.name}</h2>
            <div class="expand-arrow">▼</div>
        </div>
        <div class="subject-content" style="display: none;">
            <div class="content-section">
                <h3>📚 الدروس (${subject.lessons.length})</h3>
                <ul class="lessons-list">
                    ${subject.lessons.map((lesson, index) => `
                        <li>
                            <div class="lesson-number">${lesson.downloadNumber}</div>
                            <div class="lesson-title">${lesson.title}</div>
                            <div class="lesson-actions">
                                ${lesson.quiz && lesson.quiz.length > 0 ? `
                                <button class="lesson-quiz-btn" onclick="showQuizPreview('${lesson.title}', '${subject.name}', ${index})" title="عرض اختبار QCM">
                                    <span>QCM</span>
                                    <div class="quiz-icon">🧠</div>
                                    <div class="quiz-count">${lesson.quiz.length}</div>
                                </button>` : ''}
                                <button class="lesson-download" onclick="downloadLesson('${lesson.title}', '${subject.name}')" title="تحميل الدرس">
                                    <span>تحميل</span>
                                    <div class="download-icon">⬇</div>
                                </button>
                            </div>
                        </li>
                    `).join('')}
                </ul>
            </div>
            <div class="content-section">
                <h3>✏ التمارين (${subject.exercises.length})</h3>
                <ul class="exercises-list">
                    ${subject.exercises.map((exercise, index) => `
                        <li onclick="downloadExercise('${exercise.title}', '${subject.name}')">
                            <div class="exercise-number">${exercise.downloadNumber}</div>
                            <div class="exercise-title">${exercise.title}</div>
                            <div class="exercise-download">تحميل</div>
                            <div class="download-icon">⬇</div>
                        </li>
                    `).join('')}
                </ul>
            </div>
        </div>
    `;

    return subjectDiv;
}

function toggleSubjectContent(header) {
    const content = header.nextElementSibling;
    const arrow = header.querySelector('.expand-arrow');

    if (content.style.display === 'none') {
        content.style.display = 'block';
        arrow.style.transform = 'rotate(180deg)';

        // إضافة تأثير الانزلاق
        content.style.maxHeight = '0';
        content.style.overflow = 'hidden';
        content.style.transition = 'max-height 0.5s ease';

        setTimeout(() => {
            content.style.maxHeight = content.scrollHeight + 'px';
        }, 10);
    } else {
        content.style.maxHeight = '0';
        arrow.style.transform = 'rotate(0deg)';

        setTimeout(() => {
            content.style.display = 'none';
        }, 500);
    }
}

function downloadLesson(lessonTitle, subjectName) {
    // محاكاة رابط التحميل
    const downloadUrl = `https://drive.google.com/file/download?lesson=${encodeURIComponent(lessonTitle)}&subject=${encodeURIComponent(subjectName)}`;

    // في التطبيق الحقيقي، ستستخدم روابط حقيقية
    alert(`سيتم تحميل الدرس: ${lessonTitle}\nمن مادة: ${subjectName}\n\nرابط التحميل: ${downloadUrl}`);

    // فتح رابط التحميل (في التطبيق الحقيقي)
    // window.open(downloadUrl, '_blank');
}

function downloadExercise(exerciseTitle, subjectName) {
    // محاكاة رابط التحميل
    const downloadUrl = `https://drive.google.com/file/download?exercise=${encodeURIComponent(exerciseTitle)}&subject=${encodeURIComponent(subjectName)}`;

    // في التطبيق الحقيقي، ستستخدم روابط حقيقية
    alert(`سيتم تحميل التمرين: ${exerciseTitle}\nمن مادة: ${subjectName}\n\nرابط التحميل: ${downloadUrl}`);

    // فتح رابط التحميل (في التطبيق الحقيقي)
    // window.open(downloadUrl, '_blank');
}

// QCM Quiz System
let currentQuiz = null;
let currentQuestionIndex = 0;
let userAnswers = [];
let quizStartTime = null;

function showQuizPreview(lessonTitle, subjectName, lessonIndex) {
    // الحصول على معاملات URL للعثور على المستوى الحالي
    const urlParams = new URLSearchParams(window.location.search);
    const level = urlParams.get('level');
    
    // العثور على الدرس والاختبار المطلوب
    const subjects = levelSubjects[level];
    const subject = subjects.find(s => s.name === subjectName);
    
    if (!subject || !subject.lessons[lessonIndex] || !subject.lessons[lessonIndex].quiz) {
        showNotification('عذراً، لا يتوفر اختبار لهذا الدرس حالياً', 'warning');
        return;
    }

    const quiz = subject.lessons[lessonIndex].quiz;
    
    // إنشاء modal المعاينة
    let previewModal = document.getElementById('quiz-preview-modal');
    if (!previewModal) {
        previewModal = document.createElement('div');
        previewModal.id = 'quiz-preview-modal';
        previewModal.className = 'quiz-preview-modal';
        document.body.appendChild(previewModal);
    }

    previewModal.innerHTML = `
        <div class="quiz-preview-content">
            <div class="quiz-preview-header">
                <div class="quiz-preview-info">
                    <h2>🧠 اختبار QCM</h2>
                    <h3>${lessonTitle}</h3>
                    <p class="subject-name">مادة: ${subjectName}</p>
                </div>
                <button class="quiz-preview-close-btn" onclick="closeQuizPreview()">&times;</button>
            </div>
            
            <div class="quiz-preview-stats">
                <div class="quiz-stat-item">
                    <div class="quiz-stat-number">${quiz.length}</div>
                    <div class="quiz-stat-label">سؤال</div>
                </div>
                <div class="quiz-stat-item">
                    <div class="quiz-stat-number">${Math.ceil(quiz.length * 1.5)}</div>
                    <div class="quiz-stat-label">دقيقة</div>
                </div>
                <div class="quiz-stat-item">
                    <div class="quiz-stat-number">QCM</div>
                    <div class="quiz-stat-label">نوع الاختبار</div>
                </div>
            </div>

            <div class="quiz-preview-questions">
                <h4>معاينة الأسئلة:</h4>
                <div class="questions-preview-list">
                    ${quiz.slice(0, 3).map((question, index) => `
                        <div class="question-preview-item">
                            <div class="question-preview-number">${index + 1}</div>
                            <div class="question-preview-text">${question.question}</div>
                        </div>
                    `).join('')}
                    ${quiz.length > 3 ? `
                        <div class="question-preview-item more-questions">
                            <div class="question-preview-number">...</div>
                            <div class="question-preview-text">و ${quiz.length - 3} أسئلة أخرى</div>
                        </div>
                    ` : ''}
                </div>
            </div>

            <div class="quiz-preview-actions">
                <button class="quiz-action-btn secondary" onclick="closeQuizPreview()">
                    <span>إلغاء</span>
                </button>
                <button class="quiz-action-btn primary" onclick="startQuizFromPreview('${lessonTitle}', '${subjectName}', ${lessonIndex})">
                    <span>بدء الاختبار</span>
                    <div class="action-icon">🚀</div>
                </button>
            </div>
        </div>
    `;

    previewModal.style.display = 'flex';
    document.body.classList.add('modal-open');
}

function closeQuizPreview() {
    const previewModal = document.getElementById('quiz-preview-modal');
    if (previewModal) {
        previewModal.style.display = 'none';
        document.body.classList.remove('modal-open');
    }
}

function startQuizFromPreview(lessonTitle, subjectName, lessonIndex) {
    closeQuizPreview();
    startQuiz(lessonTitle, subjectName, lessonIndex);
}

function startQuiz(lessonTitle, subjectName, lessonIndex) {
    // الحصول على معاملات URL للعثور على المستوى الحالي
    const urlParams = new URLSearchParams(window.location.search);
    const level = urlParams.get('level');
    
    // العثور على الدرس والاختبار المطلوب
    const subjects = levelSubjects[level];
    const subject = subjects.find(s => s.name === subjectName);
    
    if (!subject || !subject.lessons[lessonIndex] || !subject.lessons[lessonIndex].quiz) {
        showNotification('عذراً، لا يتوفر اختبار لهذا الدرس حالياً', 'warning');
        return;
    }

    currentQuiz = {
        lessonTitle: lessonTitle,
        subjectName: subjectName,
        questions: subject.lessons[lessonIndex].quiz
    