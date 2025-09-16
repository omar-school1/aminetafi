// QCM Data for First Baccalaureate Level (الأولى بكالوريا)
// Generated from level.js - QCM questions for First Baccalaureate level

const qcmFirstBac = {
    levelTitle: 'دروس الأولى بكالوريا',
    levelKey: 'first-bac',
    subjects: [
        // Note: The original level.js file only has QCM questions for Arabic subject in Common Core
        // For First Bac, there are no QCM questions defined in the current data
        // This file structure is prepared for future QCM additions
        {
            name: 'العربية',
            icon: '📝',
            lessons: [
                { 
                    title: 'الشعر العربي القديم', 
                    downloadNumber: '01',
                    quiz: [
                        // QCM questions can be added here for First Bac Arabic
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
                }
            ]
        }
    ]
};

// Export for Node.js environments (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = qcmFirstBac;
}