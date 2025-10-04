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
                                <div class="lesson-qcm" onclick="startQCMTest('${subject.name}', '${lesson.title}', ${index})">
                                    <span>اختبار QCM</span>
                                    <div class="qcm-icon">📝</div>
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
};

// Global QCM state
let currentQCM = null;
let currentQuestionIndex = 0;
let userAnswers = [];
let qcmStartTime = null;

function startQCMTest(subjectName, lessonTitle, lessonIndex) {
    const urlParams = new URLSearchParams(window.location.search);
    const level = urlParams.get('level');
    
    // Check if QCM data exists for this lesson
    if (!qcmData[level] || !qcmData[level][subjectName] || !qcmData[level][subjectName].lessons[lessonTitle]) {
        showQCMMessage('عذراً، لا توجد أسئلة متاحة لهذا الدرس حالياً', 'warning');
        return;
    }
    
    const questions = qcmData[level][subjectName].lessons[lessonTitle];
    
    if (questions.length === 0) {
        showQCMMessage('عذراً، لا توجد أسئلة متاحة لهذا الدرس حالياً', 'warning');
        return;
    }
    
    // Initialize QCM
    currentQCM = {
        subject: subjectName,
        lesson: lessonTitle,
        questions: questions,
        totalQuestions: questions.length
    };
    currentQuestionIndex = 0;
    userAnswers = [];
    qcmStartTime = new Date();
    
    // Show QCM interface
    showQCMInterface();
}

function showQCMInterface() {
    // Create QCM overlay
    const qcmOverlay = document.createElement('div');
    qcmOverlay.id = 'qcm-overlay';
    qcmOverlay.className = 'qcm-overlay';
    
    qcmOverlay.innerHTML = `
        <div class="qcm-container">
            <div class="qcm-header">
                <h2>اختبار ${currentQCM.lesson}</h2>
                <p>مادة: ${currentQCM.subject}</p>
                <div class="qcm-progress">
                    <span class="progress-text">السؤال <span id="current-question-num">1</span> من ${currentQCM.totalQuestions}</span>
                    <div class="progress-bar">
                        <div id="progress-fill" class="progress-fill"></div>
                    </div>
                </div>
                <button class="qcm-close" onclick="closeQCMTest()">×</button>
            </div>
            
            <div class="qcm-content">
                <div id="qcm-question-container">
                    <!-- Question will be loaded here -->
                </div>
            </div>
            
            <div class="qcm-footer">
                <button id="prev-btn" class="qcm-btn secondary" onclick="previousQuestion()" style="display: none;">السؤال السابق</button>
                <button id="next-btn" class="qcm-btn primary" onclick="nextQuestion()">التالي</button>
                <button id="finish-btn" class="qcm-btn success" onclick="finishQCMTest()" style="display: none;">إنهاء الاختبار</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(qcmOverlay);
    
    // Load first question
    loadQCMQuestion();
}

function loadQCMQuestion() {
    const question = currentQCM.questions[currentQuestionIndex];
    const container = document.getElementById('qcm-question-container');
    
    container.innerHTML = `
        <div class="qcm-question">
            <h3>${question.question}</h3>
            <div class="qcm-options">
                ${question.options.map((option, index) => `
                    <label class="qcm-option" data-index="${index}">
                        <input type="radio" name="qcm-answer" value="${index}">
                        <span class="option-text">${option}</span>
                        <span class="option-indicator"></span>
                    </label>
                `).join('')}
            </div>
        </div>
    `;
    
    // Update progress
    document.getElementById('current-question-num').textContent = currentQuestionIndex + 1;
    document.getElementById('progress-fill').style.width = ((currentQuestionIndex + 1) / currentQCM.totalQuestions) * 100 + '%';
    
    // Show/hide navigation buttons
    document.getElementById('prev-btn').style.display = currentQuestionIndex > 0 ? 'block' : 'none';
    document.getElementById('next-btn').style.display = currentQuestionIndex < currentQCM.totalQuestions - 1 ? 'block' : 'none';
    document.getElementById('finish-btn').style.display = currentQuestionIndex === currentQCM.totalQuestions - 1 ? 'block' : 'none';
    
    // Restore previous answer if exists
    if (userAnswers[currentQuestionIndex] !== undefined) {
        const radio = container.querySelector(`input[value="${userAnswers[currentQuestionIndex]}"]`);
        if (radio) radio.checked = true;
    }
}

function nextQuestion() {
    // Save current answer
    const selectedAnswer = document.querySelector('input[name="qcm-answer"]:checked');
    if (selectedAnswer) {
        userAnswers[currentQuestionIndex] = parseInt(selectedAnswer.value);
    }
    
    if (currentQuestionIndex < currentQCM.totalQuestions - 1) {
        currentQuestionIndex++;
        loadQCMQuestion();
    }
}

function previousQuestion() {
    // Save current answer
    const selectedAnswer = document.querySelector('input[name="qcm-answer"]:checked');
    if (selectedAnswer) {
        userAnswers[currentQuestionIndex] = parseInt(selectedAnswer.value);
    }
    
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQCMQuestion();
    }
}

function finishQCMTest() {
    // Save last answer
    const selectedAnswer = document.querySelector('input[name="qcm-answer"]:checked');
    if (selectedAnswer) {
        userAnswers[currentQuestionIndex] = parseInt(selectedAnswer.value);
    }
    
    // Calculate results
    const results = calculateQCMResults();
    
    // Show results
    showQCMResults(results);
}

function calculateQCMResults() {
    let correctAnswers = 0;
    const questionResults = [];
    
    currentQCM.questions.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer === question.correct;
        
        if (isCorrect) correctAnswers++;
        
        questionResults.push({
            questionIndex: index,
            question: question.question,
            userAnswer: userAnswer,
            correctAnswer: question.correct,
            isCorrect: isCorrect,
            explanation: question.explanation || '',
            options: question.options
        });
    });
    
    const percentage = Math.round((correctAnswers / currentQCM.totalQuestions) * 100);
    const endTime = new Date();
    const duration = Math.round((endTime - qcmStartTime) / 1000); // in seconds
    
    return {
        correctAnswers,
        totalQuestions: currentQCM.totalQuestions,
        percentage,
        duration,
        questionResults
    };
}

function showQCMResults(results) {
    const overlay = document.getElementById('qcm-overlay');
    
    // Generate motivation message
    let motivationMessage = '';
    let motivationClass = '';
    
    if (results.percentage >= 90) {
        motivationMessage = 'ممتاز! أداء رائع جداً 🎉';
        motivationClass = 'excellent';
    } else if (results.percentage >= 80) {
        motivationMessage = 'جيد جداً! استمر في التميز 👏';
        motivationClass = 'very-good';
    } else if (results.percentage >= 70) {
        motivationMessage = 'جيد! يمكنك تحسين الأداء 👍';
        motivationClass = 'good';
    } else if (results.percentage >= 60) {
        motivationMessage = 'مقبول، لكن يحتاج إلى مراجعة أكثر 📚';
        motivationClass = 'acceptable';
    } else {
        motivationMessage = 'يُنصح بمراجعة الدرس مرة أخرى 📖';
        motivationClass = 'needs-review';
    }
    
    overlay.innerHTML = `
        <div class="qcm-container results">
            <div class="qcm-results-header">
                <h2>نتيجة الاختبار</h2>
                <div class="result-score ${motivationClass}">
                    <div class="score-circle">
                        <span class="score-percentage">${results.percentage}%</span>
                    </div>
                    <div class="score-details">
                        <p>الإجابات الصحيحة: ${results.correctAnswers} من ${results.totalQuestions}</p>
                        <p>الوقت المستغرق: ${Math.floor(results.duration / 60)} دقيقة ${results.duration % 60} ثانية</p>
                    </div>
                </div>
                <div class="motivation-message ${motivationClass}">
                    <p>${motivationMessage}</p>
                </div>
            </div>
            
            <div class="qcm-results-content">
                <h3>مراجعة الأسئلة والأجوبة:</h3>
                <div class="questions-review">
                    ${results.questionResults.map((result, index) => `
                        <div class="question-review ${result.isCorrect ? 'correct' : 'incorrect'}">
                            <div class="question-header">
                                <span class="question-num">السؤال ${index + 1}</span>
                                <span class="result-indicator">${result.isCorrect ? '✓' : '✗'}</span>
                            </div>
                            <div class="question-text">${result.question}</div>
                            <div class="answer-comparison">
                                ${result.userAnswer !== undefined ? `
                                    <div class="user-answer ${result.isCorrect ? 'correct' : 'incorrect'}">
                                        <span class="answer-label">إجابتك:</span>
                                        <span class="answer-text">${result.options[result.userAnswer]}</span>
                                    </div>
                                ` : `
                                    <div class="user-answer unanswered">
                                        <span class="answer-label">لم تجب على هذا السؤال</span>
                                    </div>
                                `}
                                ${!result.isCorrect ? `
                                    <div class="correct-answer">
                                        <span class="answer-label">الإجابة الصحيحة:</span>
                                        <span class="answer-text">${result.options[result.correctAnswer]}</span>
                                    </div>
                                ` : ''}
                            </div>
                            ${result.explanation ? `
                                <div class="explanation">
                                    <span class="explanation-label">التوضيح:</span>
                                    <span class="explanation-text">${result.explanation}</span>
                                </div>
                            ` : ''}
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="qcm-results-footer">
                <button class="qcm-btn primary" onclick="retakeQCMTest()">إعادة الاختبار</button>
                <button class="qcm-btn secondary" onclick="closeQCMTest()">العودة للدروس</button>
            </div>
        </div>
    `;
}

function retakeQCMTest() {
    currentQuestionIndex = 0;
    userAnswers = [];
    qcmStartTime = new Date();
    showQCMInterface();
}

function closeQCMTest() {
    const overlay = document.getElementById('qcm-overlay');
    if (overlay) {
        overlay.remove();
    }
    
    // Reset QCM state
    currentQCM = null;
    currentQuestionIndex = 0;
    userAnswers = [];
    qcmStartTime = null;
}

function showQCMMessage(message, type = 'info') {
    // Create temporary message overlay
    const messageOverlay = document.createElement('div');
    messageOverlay.className = 'qcm-message-overlay';
    messageOverlay.innerHTML = `
        <div class="qcm-message ${type}">
            <p>${message}</p>
            <button onclick="this.parentElement.parentElement.remove()">حسناً</button>
        </div>
    `;
    
    document.body.appendChild(messageOverlay);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        if (messageOverlay.parentElement) {
            messageOverlay.remove();
        }
    }, 3000);
}
