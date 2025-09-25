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
                    "downloadUrl": "https://drive.google.com/file/d/sample1/view"
                },
                {
                    "title": "الشعر العربي",
                    "downloadNumber": "02",
                    "downloadUrl": "https://drive.google.com/file/d/sample2/view"
                }
            ],
            "exercises": []
        },
        {
            "name": "الاجتماعيات",
            "icon": "🌍",
            "lessons": [],
            "exercises": []
        },
        {
            "name": "التربية الإسلامية",
            "icon": "🕌",
            "lessons": [],
            "exercises": []
        },
        {
            "name": "علوم الحياة والأرض",
            "icon": "🧬",
            "lessons": [],
            "exercises": []
        },
        {
            "name": "الفيزياء",
            "icon": "⚛️",
            "lessons": [],
            "exercises": []
        },
        {
            "name": "الرياضيات",
            "icon": "📐",
            "lessons": [],
            "exercises": []
        },
        {
            "name": "الفلسفة",
            "icon": "🤔",
            "lessons": [],
            "exercises": []
        },
        {
            "name": "الإنجليزية",
            "icon": "🇬🇧",
            "lessons": [],
            "exercises": []
        },
        {
            "name": "الفرنسية",
            "icon": "🇫🇷",
            "lessons": [],
            "exercises": []
        },
        {
            "name": "المعلوميات",
            "icon": "💻",
            "lessons": [],
            "exercises": []
        }
    ],
    "first-bac": [
        {
            "name": "العربية",
            "icon": "📝",
            "lessons": [],
            "exercises": []
        },
        {
            "name": "الاجتماعيات",
            "icon": "🌍",
            "lessons": [
                {
                    "title": "جميع دروس او",
                    "downloadNumber": "1",
                    "url": "https://www.mediafire.com/file/uxys0jeor33l2o3/%25D8%25AF%25D8%25B1%25D9%2588%25D8%25B3_%25D8%25A7%25D9%2584%25D8%25A3%25D9%2588%25D9%2584%25D9%2589_%25D8%25A8%25D8%25A7%25D9%2583_%25D8%25A7%25D9%2584%25D8%25AA%25D8%25B1%25D8%25A8%25D9%258A%25D8%25A9_%25D8%25A7%25D9%2584%25D8%25A5%25D8%25B3%25D9%2584%25D8%25A7%25D9%2585%25D9%258A%25D8%25A9_%25D9%2583%25D8%25A7%255D9%2584%25D8%25A9.pdf/file"
                }
            ],
            "exercises": []
        },
        {
            "name": "التربية الإسلامية",
            "icon": "🕌",
            "lessons": [],
            "exercises": []
        },
        {
            "name": "علوم الحياة والأرض",
            "icon": "🧬",
            "lessons": [],
            "exercises": []
        },
        {
            "name": "الفيزياء",
            "icon": "⚛️",
            "lessons": [],
            "exercises": []
        },
        {
            "name": "الرياضيات",
            "icon": "📐",
            "lessons": [],
            "exercises": []
        },
        {
            "name": "الفلسفة",
            "icon": "🤔",
            "lessons": [],
            "exercises": []
        },
        {
            "name": "الإنجليزية",
            "icon": "🇬🇧",
            "lessons": [],
            "exercises": []
        },
        {
            "name": "الفرنسية",
            "icon": "🇫🇷",
            "lessons": [],
            "exercises": []
        }
    ],
    "second-bac": [
        {
            "name": "العربية",
            "icon": "📝",
            "lessons": [],
            "exercises": []
        },
        {
            "name": "الاجتماعيات",
            "icon": "🌍",
            "lessons": [],
            "exercises": []
        },
        {
            "name": "التربية الإسلامية",
            "icon": "🕌",
            "lessons": [],
            "exercises": []
        },
        {
            "name": "علوم الحياة والأرض",
            "icon": "🧬",
            "lessons": [],
            "exercises": []
        },
        {
            "name": "الفيزياء",
            "icon": "⚛️",
            "lessons": [],
            "exercises": []
        },
        {
            "name": "الرياضيات",
            "icon": "📐",
            "lessons": [],
            "exercises": []
        },
        {
            "name": "الفلسفة",
            "icon": "🤔",
            "lessons": [],
            "exercises": []
        },
        {
            "name": "الإنجليزية",
            "icon": "🇬🇧",
            "lessons": [],
            "exercises": []
        },
        {
            "name": "الفرنسية",
            "icon": "🇫🇷",
            "lessons": [],
            "exercises": []
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

// باقي الكود الأصلي للملف إذا كان موجوداً

// باقي الكود الأصلي للملف إذا كان موجوداً

// باقي الكود الأصلي للملف إذا كان موجوداً

// باقي الكود الأصلي للملف إذا كان موجوداً

// باقي الكود الأصلي للملف إذا كان موجوداً

// باقي الكود الأصلي للملف إذا كان موجوداً

// باقي الكود الأصلي للملف إذا كان موجوداً

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
                        <li class="lesson-item">
                            <div class="lesson-number">${lesson.downloadNumber}</div>
                            <div class="lesson-title">${lesson.title}</div>
                            <div class="lesson-actions">
                                <div class="lesson-download" onclick="downloadLesson('${lesson.title}', '${subject.name}', '${lesson.downloadUrl || ''}')">
                                    <span>تحميل</span>
                                    <div class="download-icon">⬇️</div>
                                </div>
                                <div class="lesson-qcm" onclick="handleQCMButtonClick('${subject.name}', '${lesson.title}', ${index})">
                                    <span>اختبار QCM</span>
                                    <div class="quiz-icon">📝</div>
                                </div>
                            </div>
                        </li>
                    `).join('')}
                </ul>
            </div>
            <div class="content-section">
                <h3>✏️ التمارين (${subject.exercises.length})</h3>
                <ul class="exercises-list">
                    ${subject.exercises.map((exercise, index) => `
                        <li onclick="downloadExercise('${exercise.title}', '${subject.name}', '${exercise.downloadUrl || ''}')">
                            <div class="exercise-number">${exercise.downloadNumber}</div>
                            <div class="exercise-title">${exercise.title}</div>
                            <div class="exercise-download">تحميل</div>
                            <div class="download-icon">⬇️</div>
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

function downloadLesson(lessonTitle, subjectName, downloadUrl) {
    if (downloadUrl && downloadUrl !== 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing') {
        // فتح الرابط الحقيقي
        window.open(downloadUrl, '_blank');
    } else {
        // إظهار رسالة في حال عدم وجود رابط
        alert(`الرابط غير متوفر حاليًا للدرس: ${lessonTitle}\nمن مادة: ${subjectName}\n\nيرجى المحاولة لاحقًا.`);
    }
}

function downloadExercise(exerciseTitle, subjectName, downloadUrl) {
    if (downloadUrl && downloadUrl !== 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing') {
        // فتح الرابط الحقيقي
        window.open(downloadUrl, '_blank');
    } else {
        // إظهار رسالة في حال عدم وجود رابط
        alert(`الرابط غير متوفر حاليًا للتمرين: ${exerciseTitle}\nمن مادة: ${subjectName}\n\nيرجى المحاولة لاحقًا.`);
    }
}

// ================= QCM Functionality =================

// QCM sample data structure (will be loaded from admin panel)
const qcmData = {
    "common-core": {
        "العربية": {
            lessons: {
                "النصوص الأدبية": [
                    {
                        question: "ما هو التعريف الأكثر دقة للنص الأدبي؟",
                        options: [
                            "مجموعة من الكلمات المترابطة",
                            "نص يحمل قيمة جمالية وتعبيرية",
                            "أي نص مكتوب باللغة العربية",
                            "نص يحتوي على معلومات فقط"
                        ],
                        correct: 1,
                        explanation: "النص الأدبي يتميز بحمله للقيمة الجمالية والتعبيرية إلى جانب المعنى"
                    },
                    {
                        question: "من أهم خصائص النص الأدبي:",
                        options: [
                            "الوضوح والمباشرة فقط",
                            "الجمال اللغوي والتأثير النفسي",
                            "السهولة المفرطة",
                            "عدم الحاجة للتفسير"
                        ],
                        correct: 1,
                        explanation: "النص الأدبي يتميز بالجمال اللغوي والقدرة على التأثير النفسي في القارئ"
                    }
                ]
            }
        },
        "الرياضيات": {
            lessons: {
                "الأعداد الطبيعية": [
                    {
                        question: "ما هو أصغر عدد طبيعي؟",
                        options: ["0", "1", "-1", "لا يوجد"],
                        correct: 0,
                        explanation: "العدد 0 هو أصغر عدد طبيعي"
                    }
                ]
            }
        }
    }
