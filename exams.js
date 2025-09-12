// Modern Exams Management System - Following lessons pattern
// نظام إدارة الامتحانات الحديث - يحاكي نهج الدروس مع وظائف إدارية متقدمة

// هيكل البيانات الجديد - يحاكي نهج الدروس مع تحسينات احترافية
const examSubjects = {
    'first-bac': [
        {
            name: 'التربية الإسلامية',
            icon: '🕌',
            key: 'islamic-education',
            description: 'امتحانات التربية الإسلامية للأولى بكالوريا',
            exams: [
                { 
                    title: 'الامتحان الجهوي للتربية الإسلامية 2024', 
                    year: 2024, 
                    type: 'regional',
                    downloadUrl: 'https://drive.google.com/file/d/1KXyZ9sample/view', 
                    correctionUrl: 'https://drive.google.com/file/d/1KXyZ9sample-correction/view'
                },
                { 
                    title: 'الامتحان الجهوي للتربية الإسلامية 2023', 
                    year: 2023, 
                    type: 'regional',
                    downloadUrl: 'https://drive.google.com/file/d/2KXyZ9sample/view', 
                    correctionUrl: 'https://drive.google.com/file/d/2KXyZ9sample-correction/view'
                },
                { 
                    title: 'امتحان تجريبي - التربية الإسلامية', 
                    year: 2024, 
                    type: 'practice',
                    downloadUrl: 'https://drive.google.com/file/d/3KXyZ9sample/view', 
                    correctionUrl: null
                }
            ]
        },
        {
            name: 'الاجتماعيات',
            icon: '🌍',
            key: 'social-studies',
            description: 'امتحانات التاريخ والجغرافيا للأولى بكالوريا',
            exams: [
                { 
                    title: 'الامتحان الجهوي للاجتماعيات 2024', 
                    year: 2024, 
                    type: 'regional',
                    downloadUrl: 'https://drive.google.com/file/d/4KXyZ9sample/view', 
                    correctionUrl: 'https://drive.google.com/file/d/4KXyZ9sample-correction/view'
                },
                { 
                    title: 'الامتحان الجهوي للاجتماعيات 2023', 
                    year: 2023, 
                    type: 'regional',
                    downloadUrl: 'https://drive.google.com/file/d/5KXyZ9sample/view', 
                    correctionUrl: null
                }
            ]
        },
        {
            name: 'اللغة العربية',
            icon: '📝',
            key: 'arabic',
            description: 'امتحانات الأدب والنحو للأولى بكالوريا',
            exams: [
                { 
                    title: 'الامتحان الجهوي للغة العربية 2024', 
                    year: 2024, 
                    type: 'regional',
                    downloadUrl: 'https://drive.google.com/file/d/6KXyZ9sample/view', 
                    correctionUrl: 'https://drive.google.com/file/d/6KXyZ9sample-correction/view'
                }
            ]
        },
        {
            name: 'اللغة الفرنسية',
            icon: '🇫🇷',
            key: 'french',
            description: 'امتحانات اللغة الفرنسية للأولى بكالوريا',
            exams: [
                { 
                    title: 'Examen régional de français 2024', 
                    year: 2024, 
                    type: 'regional',
                    downloadUrl: 'https://drive.google.com/file/d/7KXyZ9sample/view', 
                    correctionUrl: null
                }
            ]
        },
        {
            name: 'الرياضيات',
            icon: '📐',
            key: 'mathematics',
            description: 'امتحانات الرياضيات للأولى بكالوريا',
            exams: [
                { 
                    title: 'الامتحان الجهوي للرياضيات 2024', 
                    year: 2024, 
                    type: 'regional',
                    downloadUrl: 'https://drive.google.com/file/d/8KXyZ9sample/view', 
                    correctionUrl: 'https://drive.google.com/file/d/8KXyZ9sample-correction/view'
                }
            ]
        }
    ],
    'second-bac': [
        {
            name: 'الفيزياء',
            icon: '⚛️',
            key: 'physics',
            description: 'امتحانات الفيزياء للثانية بكالوريا',
            exams: [
                { 
                    title: 'الامتحان الوطني للفيزياء 2024', 
                    year: 2024, 
                    type: 'national',
                    downloadUrl: 'https://drive.google.com/file/d/9KXyZ9sample/view', 
                    correctionUrl: 'https://drive.google.com/file/d/9KXyZ9sample-correction/view'
                },
                { 
                    title: 'امتحان تجريبي - الفيزياء', 
                    year: 2024, 
                    type: 'practice',
                    downloadUrl: 'https://drive.google.com/file/d/10KXyZ9sample/view', 
                    correctionUrl: null
                }
            ]
        },
        {
            name: 'علوم الحياة والأرض', 
            icon: '🧬',
            key: 'biology',
            description: 'امتحانات علوم الحياة والأرض للثانية بكالوريا',
            exams: [
                { 
                    title: 'الامتحان الوطني لعلوم الحياة والأرض 2024', 
                    year: 2024, 
                    type: 'national',
                    downloadUrl: 'https://drive.google.com/file/d/11KXyZ9sample/view', 
                    correctionUrl: 'https://drive.google.com/file/d/11KXyZ9sample-correction/view'
                }
            ]
        },
        {
            name: 'الإنجليزية',
            icon: '🇬🇧',
            key: 'english',
            description: 'امتحانات اللغة الإنجليزية للثانية بكالوريا',
            exams: [
                { 
                    title: 'National English Exam 2024', 
                    year: 2024, 
                    type: 'national',
                    downloadUrl: 'https://drive.google.com/file/d/12KXyZ9sample/view', 
                    correctionUrl: null
                }
            ]
        },
        {
            name: 'الفلسفة',
            icon: '🤔',
            key: 'philosophy',
            description: 'امتحانات الفلسفة للثانية بكالوريا',
            exams: [
                { 
                    title: 'الامتحان الوطني للفلسفة 2024', 
                    year: 2024, 
                    type: 'national',
                    downloadUrl: 'https://drive.google.com/file/d/13KXyZ9sample/view', 
                    correctionUrl: 'https://drive.google.com/file/d/13KXyZ9sample-correction/view'
                }
            ]
        },
        {
            name: 'الرياضيات',
            icon: '📐',
            key: 'mathematics',
            description: 'امتحانات الرياضيات للثانية بكالوريا',
            exams: [
                { 
                    title: 'الامتحان الوطني للرياضيات 2024', 
                    year: 2024, 
                    type: 'national',
                    downloadUrl: 'https://drive.google.com/file/d/14KXyZ9sample/view', 
                    correctionUrl: 'https://drive.google.com/file/d/14KXyZ9sample-correction/view'
                }
            ]
        },
        {
            name: 'الاجتماعيات',
            icon: '🌍',
            key: 'social-studies',
            description: 'امتحانات التاريخ والجغرافيا للثانية بكالوريا',
            exams: [
                { 
                    title: 'الامتحان الوطني للاجتماعيات 2024', 
                    year: 2024, 
                    type: 'national',
                    downloadUrl: 'https://drive.google.com/file/d/15KXyZ9sample/view', 
                    correctionUrl: null
                }
            ]
        }
    ]
};

// عناوين المستويات
const levelTitles = {
    'first-bac': 'الامتحانات الجهوية - الأولى بكالوريا',
    'second-bac': 'الامتحانات الوطنية - الثانية بكالوريا'
};

// أنواع الامتحانات
const examTypes = {
    'regional': {
        name: 'جهوي',
        icon: '🏛️',
        color: '#007bff',
        description: 'امتحان إقليمي'
    },
    'national': {
        name: 'وطني',
        icon: '🏆',
        color: '#dc3545',
        description: 'امتحان وطني'
    },
    'practice': {
        name: 'تجريبي',
        icon: '📝',
        color: '#28a745',
        description: 'امتحان تجريبي'
    }
};

// متغيرات عامة
let currentLevel = null;
let currentExamSubjects = null;

document.addEventListener('DOMContentLoaded', function() {
    // الحصول على معاملات URL
    const urlParams = new URLSearchParams(window.location.search);
    const level = urlParams.get('level');
    
    // تحديث عنوان الصفحة
    const levelTitle = document.getElementById('page-title');
    if (levelTitle && levelTitles[level]) {
        levelTitle.textContent = levelTitles[level];
    }

    // عرض المواد
    displayExamSubjects(level);
});

// الدالة الرئيسية لعرض مواد الامتحانات
function displayExamSubjects(level) {
    const container = document.getElementById('exams-container');
    
    if (!level || !examSubjects[level]) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-exclamation-triangle"></i>
                <h3>مستوى غير متاح</h3>
                <p>المستوى المطلوب غير متوفر حالياً</p>
            </div>
        `;
        return;
    }

    currentLevel = level;
    currentExamSubjects = examSubjects[level];
    const subjects = examSubjects[level];
    
    // عرض رسالة التحميل مع تحسين بصري
    container.innerHTML = `
        <div class="loading-state">
            <div class="loading-spinner"></div>
            <h3>جاري تحميل الامتحانات...</h3>
            <p>يرجى الانتظار بينما نحضر لك أحدث الامتحانات</p>
        </div>
    `;
    
    // محاكاة تأخير التحميل مع انيميشن محسّن
    setTimeout(() => {
        container.innerHTML = '';
        
        // إنشاء عنوان إحصائي
        const statsHeader = createStatsHeader(subjects);
        container.appendChild(statsHeader);
        
        // إنشاء عناصر المواد
        subjects.forEach((subject, index) => {
            const subjectElement = createExamSubjectElement(subject, level, index);
            container.appendChild(subjectElement);
        });
        
        // إضافة تأثير الظهور المحسّن
        animateSubjectsAppearance(container);
    }, 800);
}

// إنشاء عنوان إحصائي للامتحانات
function createStatsHeader(subjects) {
    const totalExams = subjects.reduce((total, subject) => total + subject.exams.length, 0);
    const subjectsCount = subjects.length;
    
    const statsDiv = document.createElement('div');
    statsDiv.className = 'exams-stats-header';
    statsDiv.innerHTML = `
        <div class="stats-container">
            <div class="stat-item">
                <div class="stat-number">${subjectsCount}</div>
                <div class="stat-label">مادة دراسية</div>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
                <div class="stat-number">${totalExams}</div>
                <div class="stat-label">امتحان متاح</div>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
                <div class="stat-number">${new Date().getFullYear()}</div>
                <div class="stat-label">آخر تحديث</div>
            </div>
        </div>
    `;
    
    return statsDiv;
}

// إنشاء عنصر مادة الامتحان
function createExamSubjectElement(subject, level, index) {
    const subjectDiv = document.createElement('div');
    subjectDiv.className = 'exam-subject-container';
    subjectDiv.setAttribute('data-subject-key', subject.key);
    
    const examTypeDistribution = getExamTypeDistribution(subject.exams);
    
    subjectDiv.innerHTML = `
        <div class="exam-subject-header" onclick="toggleExamSubjectContent(this)">
            <div class="subject-main-info">
                <div class="subject-icon-wrapper">
                    <div class="subject-icon">${subject.icon}</div>
                </div>
                <div class="subject-details">
                    <h2 class="subject-name">${subject.name}</h2>
                    <p class="subject-description">${subject.description}</p>
                    <div class="subject-stats">
                        <span class="exam-count">${subject.exams.length} امتحان</span>
                        ${examTypeDistribution.map(type => 
                            `<span class="exam-type-badge ${type.key}">${type.count} ${type.name}</span>`
                        ).join('')}
                    </div>
                </div>
            </div>
            <div class="expand-controls">
                <button class="add-exam-btn" onclick="event.stopPropagation(); openAddExamModal('${subject.key}')" title="إضافة امتحان جديد">
                    <i class="fas fa-plus"></i>
                </button>
                <div class="expand-arrow">
                    <i class="fas fa-chevron-down"></i>
                </div>
            </div>
        </div>
        
        <div class="exam-subject-content" style="display: none;">
            <div class="exams-grid">
                ${subject.exams.map((exam, examIndex) => createExamCard(exam, examIndex, subject.key)).join('')}
            </div>
        </div>
    `;
    
    return subjectDiv;
}

// الحصول على توزيع أنواع الامتحانات
function getExamTypeDistribution(exams) {
    const distribution = {};
    exams.forEach(exam => {
        const type = exam.type || 'practice';
        distribution[type] = (distribution[type] || 0) + 1;
    });
    
    return Object.entries(distribution).map(([key, count]) => ({
        key,
        name: examTypes[key]?.name || key,
        count
    }));
}

// إنشاء بطاقة امتحان
function createExamCard(exam, examIndex, subjectKey) {
    const examType = examTypes[exam.type] || examTypes['practice'];
    const hasCorrection = exam.correctionUrl && exam.correctionUrl.trim() !== '';
    
    return `
        <div class="exam-card ${exam.type}-exam">
            <div class="exam-card-header">
                <div class="exam-type-indicator">
                    <span class="exam-type-icon">${examType.icon}</span>
                    <span class="exam-type-name">${examType.name}</span>
                </div>
                <div class="exam-year">${exam.year}</div>
                <div class="exam-actions">
                    <button class="action-btn edit-btn" onclick="editExam('${subjectKey}', ${examIndex})" title="تعديل">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="action-btn delete-btn" onclick="deleteExam('${subjectKey}', ${examIndex})" title="حذف">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
            
            <div class="exam-card-content">
                <h4 class="exam-title">${exam.title}</h4>
                <div class="exam-meta">
                    <span class="exam-meta-item">
                        <i class="fas fa-calendar-alt"></i>
                        سنة ${exam.year}
                    </span>
                    <span class="exam-meta-item">
                        <i class="fas fa-file-pdf"></i>
                        ${examType.description}
                    </span>
                </div>
            </div>
            
            <div class="exam-card-footer">
                <button class="exam-download-btn primary" onclick="downloadExam('${exam.downloadUrl}')">
                    <i class="fas fa-download"></i>
                    تحميل الامتحان
                </button>
                ${hasCorrection ? `
                    <button class="exam-download-btn secondary" onclick="downloadExam('${exam.correctionUrl}')">
                        <i class="fas fa-check-circle"></i>
                        التصحيح
                    </button>
                ` : `
                    <div class="no-correction-note">
                        <i class="fas fa-info-circle"></i>
                        لا يتوفر تصحيح
                    </div>
                `}
            </div>
        </div>
    `;
}

// تبديل إظهار/إخفاء محتوى المادة
function toggleExamSubjectContent(header) {
    const content = header.nextElementSibling;
    const arrow = header.querySelector('.expand-arrow i');
    const container = header.parentElement;
    
    if (content.style.display === 'none') {
        // فتح المحتوى
        content.style.display = 'block';
        arrow.classList.remove('fa-chevron-down');
        arrow.classList.add('fa-chevron-up');
        container.classList.add('expanded');
        
        // انيميشن الانزلاق
        content.style.maxHeight = '0';
        content.style.overflow = 'hidden';
        content.style.transition = 'max-height 0.4s ease-out';
        
        setTimeout(() => {
            content.style.maxHeight = content.scrollHeight + 'px';
        }, 10);
        
        // انيميشن البطاقات
        const examCards = content.querySelectorAll('.exam-card');
        examCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                card.style.transition = 'all 0.3s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100 + 200);
        });
    } else {
        // إغلاق المحتوى
        content.style.maxHeight = '0';
        arrow.classList.remove('fa-chevron-up');
        arrow.classList.add('fa-chevron-down');
        container.classList.remove('expanded');
        
        setTimeout(() => {
            content.style.display = 'none';
        }, 400);
    }
}

// انيميشن ظهور المواد
function animateSubjectsAppearance(container) {
    const statsHeader = container.querySelector('.exams-stats-header');
    const subjectContainers = container.querySelectorAll('.exam-subject-container');
    
    // انيميشن الإحصائيات
    if (statsHeader) {
        statsHeader.style.opacity = '0';
        statsHeader.style.transform = 'translateY(-20px)';
        
        setTimeout(() => {
            statsHeader.style.transition = 'all 0.5s ease';
            statsHeader.style.opacity = '1';
            statsHeader.style.transform = 'translateY(0)';
        }, 100);
    }
    
    // انيميشن المواد
    subjectContainers.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px) scale(0.95)';
        
        setTimeout(() => {
            element.style.transition = 'all 0.6s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0) scale(1)';
        }, 300 + index * 150);
    });
}

// تحميل الامتحان
function downloadExam(url) {
    if (!url || url.trim() === '') {
        showNotification('رابط التحميل غير متوفر', 'warning');
        return;
    }
    
    // فتح الرابط في نافذة جديدة
    window.open(url, '_blank');
    showNotification('تم فتح رابط التحميل', 'success');
}

// إظهار الإشعارات
function showNotification(message, type = 'info') {
    // إنشاء عنصر الإشعار
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${
                type === 'success' ? 'fa-check-circle' :
                type === 'warning' ? 'fa-exclamation-triangle' :
                type === 'error' ? 'fa-times-circle' :
                'fa-info-circle'
            }"></i>
            <span>${message}</span>
        </div>
    `;
    
    // إضافة الإشعار إلى الصفحة
    document.body.appendChild(notification);
    
    // انيميشن الظهور
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // إزالة الإشعار بعد 3 ثوان
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// وظائف الإدارة الكاملة
function openAddExamModal(subjectKey) {
    const subject = currentExamSubjects.find(s => s.key === subjectKey);
    if (!subject) {
        showNotification('خطأ: لم يتم العثور على المادة', 'error');
        return;
    }
    
    showNotification(`سيتم إضافة امتحان جديد لمادة ${subject.name} قريباً`, 'info');
    console.log(`Opening add exam modal for subject: ${subjectKey}`);
}

function editExam(subjectKey, examIndex) {
    const subject = currentExamSubjects.find(s => s.key === subjectKey);
    if (!subject || !subject.exams[examIndex]) {
        showNotification('خطأ: لم يتم العثور على الامتحان', 'error');
        return;
    }
    
    const exam = subject.exams[examIndex];
    showNotification(`سيتم تعديل امتحان "${exam.title}" قريباً`, 'info');
    console.log(`Editing exam: ${exam.title} for subject: ${subjectKey}`);
}

function deleteExam(subjectKey, examIndex) {
    const subject = currentExamSubjects.find(s => s.key === subjectKey);
    if (!subject || !subject.exams[examIndex]) {
        showNotification('خطأ: لم يتم العثور على الامتحان', 'error');
        return;
    }
    
    const exam = subject.exams[examIndex];
    const confirmed = confirm(`هل أنت متأكد من حذف امتحان "${exam.title}"؟\n\nهذا الإجراء لا يمكن التراجع عنه.`);
    
    if (confirmed) {
        showNotification(`تم حذف امتحان "${exam.title}" بنجاح`, 'success');
        console.log(`Deleting exam: ${exam.title} for subject: ${subjectKey}`);
        
        // إزالة الامتحان من البيانات (محلياً فقط)
        subject.exams.splice(examIndex, 1);
        
        // إعادة عرض المحتوى
        displayExamSubjects(currentLevel);
    }
}

// Navigation function from homepage
function navigateToExams(level) {
    window.location.href = `exams.html?level=${level}`;
}
