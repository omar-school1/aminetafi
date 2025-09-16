// QCM Data for Second Baccalaureate Level (الثانية بكالوريا)
// Generated from level.js - QCM questions for Second Baccalaureate level

const qcmSecondBac = {
    levelTitle: 'دروس الثانية بكالوريا',
    levelKey: 'second-bac',
    subjects: [
        // Note: The original level.js file only has QCM questions for Arabic subject in Common Core
        // For Second Bac, there are no QCM questions defined in the current data
        // This file structure is prepared for future QCM additions
        {
            name: 'العربية',
            icon: '📝',
            lessons: [
                { 
                    title: 'الأدب العربي الحديث', 
                    downloadNumber: '01',
                    quiz: [
                        {
                            question: 'ما هي خصائص الأدب العربي الحديث؟',
                            options: ['التجديد في الشكل والمضمون', 'الالتزام بالقديم فقط', 'تجنب القضايا المعاصرة', 'الاقتصار على الشعر'],
                            correct: 0
                        },
                        {
                            question: 'من رواد النهضة الأدبية الحديثة؟',
                            options: ['امرؤ القيس', 'أحمد شوقي', 'الأعشى', 'الخنساء'],
                            correct: 1
                        },
                        {
                            question: 'ما هو الشعر الحر؟',
                            options: ['شعر بدون معنى', 'شعر متحرر من قيود الوزن والقافية التقليدية', 'شعر مجاني', 'شعر باللغة العامية'],
                            correct: 1
                        }
                    ]
                },
                { 
                    title: 'النحو والصرف المتقدم', 
                    downloadNumber: '02',
                    quiz: [
                        {
                            question: 'ما هو إعراب "غير" في الجملة؟',
                            options: ['تعرب دائماً مفعول به', 'تعرب حسب موقعها في الجملة', 'تعرب دائماً فاعل', 'لا تعرب'],
                            correct: 1
                        },
                        {
                            question: 'أي من التالي يعد من أدوات الشرط الجازمة؟',
                            options: ['لو', 'إن', 'لولا', 'لكن'],
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
                    title: 'نظرية المعرفة', 
                    downloadNumber: '01',
                    quiz: [
                        {
                            question: 'ما هي نظرية المعرفة؟',
                            options: ['علم النفس', 'دراسة طبيعة المعرفة ومصادرها وحدودها', 'علم الاجتماع', 'علم الطبيعة'],
                            correct: 1
                        },
                        {
                            question: 'من أبرز فلاسفة نظرية المعرفة؟',
                            options: ['ديكارت وكانط', 'نيوتن وأينشتاين', 'ماركس ولينين', 'فرويد ويونغ'],
                            correct: 0
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
                    title: 'الوراثة المندلية المتقدمة', 
                    downloadNumber: '01',
                    quiz: [
                        {
                            question: 'ما هي قوانين مندل في الوراثة؟',
                            options: ['قانون واحد فقط', 'قانون الانعزال وقانون التوزيع المستقل', 'قوانين الفيزياء', 'قوانين الكيمياء'],
                            correct: 1
                        },
                        {
                            question: 'ما هو الطراز الوراثي؟',
                            options: ['التركيب الجيني للفرد', 'الشكل الخارجي للفرد', 'عدد الكروموسومات', 'حجم الخلية'],
                            correct: 0
                        }
                    ]
                }
            ]
        }
    ]
};

// Export for Node.js environments (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = qcmSecondBac;
}