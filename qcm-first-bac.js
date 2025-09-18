// QCM Data for First Baccalaureate Level (الأولى بكالوريا)
// Enhanced version with all missing subjects - Generated from dashboard

const qcmFirstBac = {
    levelTitle: 'دروس الأولى بكالوريا',
    levelKey: 'first-bac',
    subjects: [
        {
            name: 'العربية',
            icon: '📝',
            lessons: [
                { 
                    title: 'الشعر العربي القديم', 
                    downloadNumber: '01',
                    quiz: [
                        {
                            question: 'ما هي خصائص الشعر الجاهلي؟',
                            options: ['البساطة والوضوح', 'القوة والجزالة وصدق التعبير', 'التعقيد اللغوي', 'الغموض في المعنى'],
                            correct: 1
                        },
                        {
                            question: 'من أشهر شعراء الجاهلية؟',
                            options: ['أبو تمام', 'امرؤ القيس', 'أبو نواس', 'المتنبي'],
                            correct: 1
                        },
                        {
                            question: 'ما هو البحر الشعري الأكثر استخداماً في الشعر الجاهلي؟',
                            options: ['البسيط', 'الطويل', 'الكامل', 'الوافر'],
                            correct: 1
                        }
                    ]
                },
                { 
                    title: 'النثر العربي', 
                    downloadNumber: '02',
                    quiz: [
                        {
                            question: 'ما هي أنواع النثر الجاهلي؟',
                            options: ['الخطابة والحكم والأمثال', 'الشعر والقصص', 'الرسائل والكتب', 'المقالات والتحقيقات'],
                            correct: 0
                        },
                        {
                            question: 'أي من التالي يعد من خصائص الخطابة؟',
                            options: ['الوزن والقافية', 'قوة التأثير والإقناع', 'الطول المفرط', 'الغموض'],
                            correct: 1
                        }
                    ]
                },
                { 
                    title: 'البلاغة المتقدمة', 
                    downloadNumber: '03',
                    quiz: [
                        {
                            question: 'ما هو الفرق بين الحقيقة والمجاز؟',
                            options: ['لا يوجد فرق', 'الحقيقة تستعمل الكلمة في معناها الأصلي والمجاز في غير معناها الأصلي', 'المجاز أفضل من الحقيقة', 'الحقيقة أصعب من المجاز'],
                            correct: 1
                        },
                        {
                            question: 'أي من التالي يعد من أنواع المجاز؟',
                            options: ['المجاز المرسل والاستعارة', 'النحو والصرف', 'الشعر والنثر', 'القديم والحديث'],
                            correct: 0
                        }
                    ]
                }
            ]
        },
        {
            name: 'الاجتماعيات',
            icon: '🌍',
            lessons: [
                { 
                    title: 'التاريخ المعاصر', 
                    downloadNumber: '01',
                    quiz: [
                        {
                            question: 'متى بدأت الحرب العالمية الأولى؟',
                            options: ['1913', '1914', '1915', '1916'],
                            correct: 1
                        },
                        {
                            question: 'ما هي أسباب الحرب العالمية الأولى؟',
                            options: ['الأسباب الاقتصادية فقط', 'التنافس الإمبريالي والتحالفات المتضاربة', 'الخلافات الدينية', 'الكوارث الطبيعية'],
                            correct: 1
                        }
                    ]
                },
                { 
                    title: 'الجغرافيا السياسية', 
                    downloadNumber: '02',
                    quiz: [
                        {
                            question: 'ما هو تعريف الدولة؟',
                            options: ['مجموعة من الناس فقط', 'إقليم جغرافي محدد بسكان وحكومة وسيادة', 'مدينة كبيرة', 'منظمة سياسية'],
                            correct: 1
                        },
                        {
                            question: 'أي من التالي يعد من مقومات الدولة؟',
                            options: ['الشعب والإقليم والسيادة', 'الجيش فقط', 'العاصمة فقط', 'الاقتصاد فقط'],
                            correct: 0
                        }
                    ]
                }
            ]
        },
        {
            name: 'الرياضيات',
            icon: '📐',
            lessons: [
                { 
                    title: 'الدوال العددية', 
                    downloadNumber: '01',
                    quiz: [
                        {
                            question: 'ما هو تعريف الدالة؟',
                            options: ['معادلة رياضية', 'قانون يربط كل عنصر من مجموعة انطلاق بعنصر واحد فقط من مجموعة الوصول', 'رقم ثابت', 'مجموعة من الأرقام'],
                            correct: 1
                        },
                        {
                            question: 'أي من التالي يمثل دالة خطية؟',
                            options: ['f(x) = x²', 'f(x) = 2x + 3', 'f(x) = 1/x', 'f(x) = √x'],
                            correct: 1
                        }
                    ]
                },
                { 
                    title: 'الهندسة التحليلية', 
                    downloadNumber: '02',
                    quiz: [
                        {
                            question: 'ما هي المعادلة العامة للخط المستقيم؟',
                            options: ['ax + by + c = 0', 'x² + y² = r²', 'y = x²', 'x = y'],
                            correct: 0
                        },
                        {
                            question: 'ما هي إحداثيات مركز الدائرة (x-2)² + (y-3)² = 25؟',
                            options: ['(0,0)', '(2,3)', '(-2,-3)', '(5,5)'],
                            correct: 1
                        }
                    ]
                }
            ]
        },
        {
            name: 'العلوم الفيزيائية',
            icon: '⚗️',
            lessons: [
                { 
                    title: 'الميكانيك', 
                    downloadNumber: '01',
                    quiz: [
                        {
                            question: 'ما هي وحدة قياس القوة؟',
                            options: ['متر', 'كيلوغرام', 'نيوتن', 'ثانية'],
                            correct: 2
                        },
                        {
                            question: 'ما هو القانون الثاني لنيوتن؟',
                            options: ['F = ma', 'E = mc²', 'P = mv', 'W = Fd'],
                            correct: 0
                        }
                    ]
                },
                { 
                    title: 'الكيمياء العضوية', 
                    downloadNumber: '02',
                    quiz: [
                        {
                            question: 'ما هي المجموعة الوظيفية للكحوليات؟',
                            options: ['-COOH', '-OH', '-CHO', '-NH₂'],
                            correct: 1
                        },
                        {
                            question: 'أي من التالي يعد كحولاً؟',
                            options: ['الإيثان', 'الإيثانول', 'الإيثانال', 'الإيثانويك'],
                            correct: 1
                        }
                    ]
                }
            ]
        },
        {
            name: 'علوم الحياة والأرض',
            icon: '🧬',
            lessons: [
                { 
                    title: 'التنوع البيولوجي', 
                    downloadNumber: '01',
                    quiz: [
                        {
                            question: 'ما هو التنوع البيولوجي؟',
                            options: ['تنوع الألوان', 'تنوع الأشكال الحية والنظم البيئية', 'تنوع المناخ', 'تنوع التربة'],
                            correct: 1
                        },
                        {
                            question: 'أي من التالي يهدد التنوع البيولوجي؟',
                            options: ['الحماية الطبيعية', 'تلوث البيئة وتدمير الموائل', 'الزراعة المستدامة', 'التعليم البيئي'],
                            correct: 1
                        }
                    ]
                }
            ]
        },
        {
            name: 'الفلسفة',
            icon: '🤔',
            lessons: [
                { 
                    title: 'مدخل إلى الفلسفة', 
                    downloadNumber: '01',
                    quiz: [
                        {
                            question: 'ما هو تعريف الفلسفة؟',
                            options: ['علم الرياضيات', 'محبة الحكمة والبحث في الأسئلة الجوهرية للوجود', 'علم الطبيعة', 'علم النفس'],
                            correct: 1
                        },
                        {
                            question: 'من يعتبر أبو الفلسفة اليونانية؟',
                            options: ['أفلاطون', 'أرسطو', 'سقراط', 'هيراقليطس'],
                            correct: 2
                        }
                    ]
                }
            ]
        },
        {
            name: 'الفرنسية',
            icon: '🇫🇷',
            lessons: [
                { 
                    title: 'القواعد والتراكيب', 
                    downloadNumber: '01',
                    quiz: [
                        {
                            question: 'Quel est le passé composé du verbe "aller" avec "je"?',
                            options: ['je suis allé(e)', 'j\'ai allé', 'je vais', 'j\'étais allé'],
                            correct: 0
                        },
                        {
                            question: 'Comment forme-t-on le futur simple du verbe "finir"?',
                            options: ['finir + ai, as, a...', 'fini + ai, as, a...', 'je finirai, tu finiras...', 'je finis, tu finis...'],
                            correct: 2
                        }
                    ]
                }
            ]
        },
        {
            name: 'الإنجليزية',
            icon: '🇺🇸',
            lessons: [
                { 
                    title: 'Grammar & Structures', 
                    downloadNumber: '01',
                    quiz: [
                        {
                            question: 'What is the past tense of "go"?',
                            options: ['goed', 'went', 'gone', 'going'],
                            correct: 1
                        },
                        {
                            question: 'Which is correct: "She don\'t like it" or "She doesn\'t like it"?',
                            options: ['She don\'t like it', 'She doesn\'t like it', 'Both are correct', 'Neither is correct'],
                            correct: 1
                        }
                    ]
                }
            ]
        }
    ]
};

// Export for Node.js environments (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = qcmFirstBac;
}
