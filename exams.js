// GitHub configuration for exam data (public access only)
const GITHUB_CONFIG = {
    owner: 'omar-school1',
    repo: 'aminetafi',
    examFilePath: 'exams.js'
};

// Dynamic exam data loaded from GitHub
let dynamicExamSubjects = {};

// Regional and National Exams Data with Automatic Year Sorting (fallback data)
const examSubjects = {
    'first-bac': {
        title: 'امتحانات جهوية - الأولى بكالوريا',
        subjects: {
            'islamic-education': {
                name: 'التربية الإسلامية',
                icon: '🕌',
                exams: [
                    { title: 'امتحان جهوي 2024', date: '2024-06-15', year: 2024, downloadUrl: '#' },
                    { title: 'امتحان جهوي 2023', date: '2023-06-16', year: 2023, downloadUrl: '#' },
                    { title: 'امتحان جهوي 2022', date: '2022-06-17', year: 2022, downloadUrl: '#' },
                    { title: 'امتحان جهوي 2021', date: '2021-06-18', year: 2021, downloadUrl: '#' },
                    { title: 'امتحان جهوي 2020', date: '2020-06-19', year: 2020, downloadUrl: '#' }
                ]
            },
            'social-studies': {
                name: 'الاجتماعيات',
                icon: '🌍',
                exams: [
                    { title: 'امتحان جهوي 2024', date: '2024-06-12', year: 2024, downloadUrl: '#' },
                    { title: 'امتحان جهوي 2023', date: '2023-06-13', year: 2023, downloadUrl: '#' },
                    { title: 'امتحان جهوي 2022', date: '2022-06-14', year: 2022, downloadUrl: '#' },
                    { title: 'امتحان جهوي 2021', date: '2021-06-15', year: 2021, downloadUrl: '#' },
                    { title: 'امتحان جهوي 2020', date: '2020-06-16', year: 2020, downloadUrl: '#' }
                ]
            },
            'arabic': {
                name: 'اللغة العربية',
                icon: '📝',
                exams: [
                    { title: 'امتحان جهوي 2024', date: '2024-06-10', year: 2024, downloadUrl: '#' },
                    { title: 'امتحان جهوي 2023', date: '2023-06-11', year: 2023, downloadUrl: '#' },
                    { title: 'امتحان جهوي 2022', date: '2022-06-12', year: 2022, downloadUrl: '#' },
                    { title: 'امتحان جهوي 2021', date: '2021-06-13', year: 2021, downloadUrl: '#' },
                    { title: 'امتحان جهوي 2020', date: '2020-06-14', year: 2020, downloadUrl: '#' }
                ]
            },
            'french': {
                name: 'اللغة الفرنسية',
                icon: '🇫🇷',
                exams: [
                    { title: 'امتحان جهوي 2024', date: '2024-06-08', year: 2024, downloadUrl: '#' },
                    { title: 'امتحان جهوي 2023', date: '2023-06-09', year: 2023, downloadUrl: '#' },
                    { title: 'امتحان جهوي 2022', date: '2022-06-10', year: 2022, downloadUrl: '#' },
                    { title: 'امتحان جهوي 2021', date: '2021-06-11', year: 2021, downloadUrl: '#' },
                    { title: 'امتحان جهوي 2020', date: '2020-06-12', year: 2020, downloadUrl: '#' }
                ]
            },
            'mathematics': {
                name: 'الرياضيات',
                icon: '📐',
                exams: [
                    { title: 'امتحان جهوي 2024', date: '2024-06-05', year: 2024, downloadUrl: '#' },
                    { title: 'امتحان جهوي 2023', date: '2023-06-06', year: 2023, downloadUrl: '#' },
                    { title: 'امتحان جهوي 2022', date: '2022-06-07', year: 2022, downloadUrl: '#' },
                    { title: 'امتحان جهوي 2021', date: '2021-06-08', year: 2021, downloadUrl: '#' },
                    { title: 'امتحان جهوي 2020', date: '2020-06-09', year: 2020, downloadUrl: '#' }
                ]
            }
        }
    },
    'second-bac': {
        title: 'امتحانات وطنية - الثانية بكالوريا',
        subjects: {
            'physics': {
                name: 'الفيزياء',
                icon: '⚛️',
                exams: [
                    { title: 'امتحان وطني 2024', date: '2024-06-20', year: 2024, downloadUrl: '#' },
                    { title: 'امتحان وطني 2023', date: '2023-06-21', year: 2023, downloadUrl: '#' },
                    { title: 'امتحان وطني 2022', date: '2022-06-22', year: 2022, downloadUrl: '#' },
                    { title: 'امتحان وطني 2021', date: '2021-06-23', year: 2021, downloadUrl: '#' },
                    { title: 'امتحان وطني 2020', date: '2020-06-24', year: 2020, downloadUrl: '#' }
                ]
            },
            'biology': {
                name: 'علوم الحياة والأرض',
                icon: '🧬',
                exams: [
                    { title: 'امتحان وطني 2024', date: '2024-06-18', year: 2024, downloadUrl: '#' },
                    { title: 'امتحان وطني 2023', date: '2023-06-19', year: 2023, downloadUrl: '#' },
                    { title: 'امتحان وطني 2022', date: '2022-06-20', year: 2022, downloadUrl: '#' },
                    { title: 'امتحان وطني 2021', date: '2021-06-21', year: 2021, downloadUrl: '#' },
                    { title: 'امتحان وطني 2020', date: '2020-06-22', year: 2020, downloadUrl: '#' }
                ]
            },
            'english': {
                name: 'الإنجليزية',
                icon: '🇬🇧',
                exams: [
                    { title: 'امتحان وطني 2024', date: '2024-06-16', year: 2024, downloadUrl: '#' },
                    { title: 'امتحان وطني 2023', date: '2023-06-17', year: 2023, downloadUrl: '#' },
                    { title: 'امتحان وطني 2022', date: '2022-06-18', year: 2022, downloadUrl: '#' },
                    { title: 'امتحان وطني 2021', date: '2021-06-19', year: 2021, downloadUrl: '#' },
                    { title: 'امتحان وطني 2020', date: '2020-06-20', year: 2020, downloadUrl: '#' }
                ]
            },
            'philosophy': {
                name: 'الفلسفة',
                icon: '🤔',
                exams: [
                    { title: 'امتحان وطني 2024', date: '2024-06-14', year: 2024, downloadUrl: '#' },
                    { title: 'امتحان وطني 2023', date: '2023-06-15', year: 2023, downloadUrl: '#' },
                    { title: 'امتحان وطني 2022', date: '2022-06-16', year: 2022, downloadUrl: '#' },
                    { title: 'امتحان وطني 2021', date: '2021-06-17', year: 2021, downloadUrl: '#' },
                    { title: 'امتحان وطني 2020', date: '2020-06-18', year: 2020, downloadUrl: '#' }
                ]
            },
            'mathematics': {
                name: 'الرياضيات',
                icon: '📐',
                exams: [
                    { title: 'امتحان وطني 2024', date: '2024-06-12', year: 2024, downloadUrl: '#' },
                    { title: 'امتحان وطني 2023', date: '2023-06-13', year: 2023, downloadUrl: '#' },
                    { title: 'امتحان وطني 2022', date: '2022-06-14', year: 2022, downloadUrl: '#' },
                    { title: 'امتحان وطني 2021', date: '2021-06-15', year: 2021, downloadUrl: '#' },
                    { title: 'امتحان وطني 2020', date: '2020-06-16', year: 2020, downloadUrl: '#' }
                ]
            },
            'social-studies': {
                name: 'الاجتماعيات',
                icon: '🌍',
                exams: [
                    { title: 'امتحان وطني 2024', date: '2024-06-10', year: 2024, downloadUrl: '#' },
                    { title: 'امتحان وطني 2023', date: '2023-06-11', year: 2023, downloadUrl: '#' },
                    { title: 'امتحان وطني 2022', date: '2022-06-12', year: 2022, downloadUrl: '#' },
                    { title: 'امتحان وطني 2021', date: '2021-06-13', year: 2021, downloadUrl: '#' },
                    { title: 'امتحان وطني 2020', date: '2020-06-14', year: 2020, downloadUrl: '#' }
                ]
            }
        }
    }
};

// Function to automatically sort exams by year (newest first)
function sortExamsByYear(exams) {
    return exams.sort((a, b) => b.year - a.year);
}

// Navigation function from homepage
function navigateToExams(level) {
    window.location.href = `exams.html?level=${level}`;
}

// GitHub API Functions for Exam Data
async function fetchExamDataFromGitHub() {
    try {
        console.log('🔄 محاولة تحميل بيانات الامتحانات من GitHub...');
        
        // Using public GitHub API (no authentication required for public repos)
        const response = await fetch(`https://api.github.com/repos/${GITHUB_CONFIG.owner}/${GITHUB_CONFIG.repo}/contents/${GITHUB_CONFIG.examFilePath}`, {
            headers: {
                'Accept': 'application/vnd.github.v3+json'
            }
        });

        if (!response.ok) {
            if (response.status === 404) {
                console.warn('⚠️ ملف الامتحانات غير موجود - استخدام البيانات المحلية');
            } else {
                console.warn(`⚠️ خطأ في تحميل البيانات (${response.status}) - استخدام البيانات المحلية`);
            }
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const content = atob(data.content);
        
        // Parse the exam data from GitHub
        const examMatch = content.match(/const examSubjects = ({[\s\S]*?});/);
        if (examMatch) {
            const examDataString = examMatch[1];
            try {
                dynamicExamSubjects = eval('(' + examDataString + ')');
                console.log('📁 تم تحميل بيانات الامتحانات من GitHub بنجاح');
                console.log('📊 تم العثور على', Object.keys(dynamicExamSubjects).length, 'مستوى دراسي');
                return true;
            } catch (parseError) {
                console.error('❌ خطأ في تحليل بيانات الامتحانات:', parseError);
                return false;
            }
        } else {
            console.warn('⚠️ لم يتم العثور على بيانات الامتحانات في الملف');
            return false;
        }
        
        return false;
    } catch (error) {
        console.error('❌ خطأ في تحميل بيانات الامتحانات:', error);
        console.log('📁 سيتم استخدام البيانات المحلية');
        return false;
    }
}

// Get active exam data (GitHub first, fallback to static)
function getActiveExamData() {
    return Object.keys(dynamicExamSubjects).length > 0 ? dynamicExamSubjects : examSubjects;
}

// Refresh exam data and display
function refreshExamData() {
    console.log('🔄 تحديث بيانات الامتحانات...');
    
    // Get current URL parameters to maintain state
    const urlParams = new URLSearchParams(window.location.search);
    const level = urlParams.get('level');
    const subject = urlParams.get('subject');
    
    // Reload the display with current parameters
    if (level && !subject) {
        displayLevelSubjects(level);
    } else if (level && subject) {
        displaySubjectExams(level, subject);
    }
    
    console.log('✅ تم تحديث بيانات الامتحانات');
}

// Initialize exams page
document.addEventListener('DOMContentLoaded', async function() {
    console.log('🚀 تشغيل صفحة الامتحانات...');
    
    // Load exam data from GitHub first
    const githubDataLoaded = await fetchExamDataFromGitHub();
    
    if (!githubDataLoaded) {
        console.log('📁 استخدام البيانات المحلية الافتراضية');
    }
    
    // Get URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const level = urlParams.get('level');
    const subject = urlParams.get('subject');

    if (!level && window.location.pathname.includes('exams.html')) {
        // Redirect to homepage if no level specified
        console.log('🔀 توجيه إلى الصفحة الرئيسية');
        window.location.href = 'index.html';
        return;
    }

    if (level && !subject) {
        // Show subjects for the selected level
        displayLevelSubjects(level);
    } else if (level && subject) {
        // Show exams for the selected subject
        displaySubjectExams(level, subject);
    }
    
    console.log('✅ تم تشغيل صفحة الامتحانات بنجاح');
});

function displayLevelSubjects(level) {
    const activeData = getActiveExamData();
    const levelData = activeData[level];
    if (!levelData) {
        console.error('❌ مستوى غير متاح:', level);
        document.getElementById('exams-container').innerHTML = '<div class="error">مستوى غير متاح</div>';
        return;
    }

    console.log('📚 عرض مواد المستوى:', level, 'عدد المواد:', Object.keys(levelData.subjects).length);

    // Update page title
    document.getElementById('page-title').textContent = levelData.title;
    
    const container = document.getElementById('exams-container');
    const subjects = Object.entries(levelData.subjects);

    if (subjects.length === 0) {
        container.innerHTML = '<div class="no-data">لا توجد مواد متاحة لهذا المستوى</div>';
        return;
    }

    container.innerHTML = `
        <div class="subjects-grid">
            ${subjects.map(([key, subject]) => `
                <div class="subject-exam-card" onclick="selectSubject('${level}', '${key}')">
                    <div class="subject-icon-large">${subject.icon}</div>
                    <h3>${subject.name}</h3>
                    <p>${subject.exams.length} امتحان متاح</p>
                    <div class="years-preview">
                        ${subject.exams.slice(0, 3).map(exam => `<span>${exam.year}</span>`).join('')}
                        ${subject.exams.length > 3 ? '<span>...</span>' : ''}
                    </div>
                    <button class="view-exams-btn">عرض الامتحانات</button>
                </div>
            `).join('')}
        </div>
    `;

    // Add animation
    setTimeout(() => {
        const cards = container.querySelectorAll('.subject-exam-card');
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            setTimeout(() => {
                card.style.transition = 'all 0.6s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 150);
        });
    }, 100);
}

function selectSubject(level, subjectKey) {
    window.location.href = `exams.html?level=${level}&subject=${subjectKey}`;
}

function displaySubjectExams(level, subjectKey) {
    const activeData = getActiveExamData();
    const levelData = activeData[level];
    const subjectData = levelData?.subjects[subjectKey];
    
    if (!subjectData) {
        document.getElementById('exams-container').innerHTML = '<div class="error">مادة غير متاحة</div>';
        return;
    }

    // Update page title
    document.getElementById('page-title').textContent = `امتحانات ${subjectData.name}`;
    
    // Sort exams by year (newest first)
    const sortedExams = sortExamsByYear([...subjectData.exams]);
    
    const container = document.getElementById('exams-container');
    
    container.innerHTML = `
        <div class="subject-header-info">
            <div class="subject-icon-large">${subjectData.icon}</div>
            <h2>${subjectData.name}</h2>
            <p>${levelData.title}</p>
            <button class="back-to-subjects-btn" onclick="window.history.back()">← العودة للمواد</button>
        </div>
        
        <div class="exams-grid">
            ${sortedExams.map((exam, index) => `
                <div class="exam-card" data-year="${exam.year}">
                    <div class="exam-year">${exam.year}</div>
                    <h3>${exam.title}</h3>
                    <div class="exam-date">
                        <span class="date-icon">📅</span>
                        <span>${formatDate(exam.date)}</span>
                    </div>
                    <button class="download-exam-btn" onclick="downloadExam('${exam.title}', '${exam.downloadUrl}')">
                        <span>تحميل الامتحان</span>
                        <span class="download-icon">⬇️</span>
                    </button>
                </div>
            `).join('')}
        </div>
    `;

    // Add animation
    setTimeout(() => {
        const cards = container.querySelectorAll('.exam-card');
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
                card.style.transition = 'all 0.5s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }, 200);
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('ar-MA', options);
}

function downloadExam(title, url) {
    // In a real application, this would handle the actual download
    alert(`سيتم تحميل: ${title}`);
    // window.open(url, '_blank');
}

// Modern Exam Management Functions
function showAddExamModal(level, subjectKey) {
    currentExamLevel = level;
    currentExamSubject = subjectKey;
    
    const modalHTML = `
        <div id="add-exam-modal" class="modern-exam-modal">
            <div class="modern-modal-overlay" onclick="closeExamModal()"></div>
            <div class="modern-exam-modal-content">
                <div class="modern-exam-header">
                    <div class="exam-header-info">
                        <div class="exam-icon">
                            <i class="fas fa-file-alt"></i>
                        </div>
                        <div class="exam-title-section">
                            <h2>إضافة امتحان جديد</h2>
                            <p class="exam-subtitle">أضف امتحان ${examSubjects[level].subjects[subjectKey].name}</p>
                        </div>
                    </div>
                    <button class="modern-close-btn" onclick="closeExamModal()">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                
                <form id="add-exam-form" class="modern-exam-form">
                    <div class="modern-exam-body">
                        <div class="exam-form-section">
                            <div class="exam-section-header">
                                <div class="exam-section-icon">
                                    <i class="fas fa-calendar"></i>
                                </div>
                                <div class="exam-section-title">
                                    <h3>معلومات الامتحان</h3>
                                    <p>أدخل تفاصيل الامتحان</p>
                                </div>
                            </div>
                            
                            <div class="exam-form-grid">
                                <div class="exam-form-group">
                                    <label for="exam-title">عنوان الامتحان</label>
                                    <div class="exam-input-wrapper">
                                        <input type="text" id="exam-title" class="exam-input" required placeholder="مثل: امتحان جهوي 2024">
                                        <div class="exam-input-line"></div>
                                    </div>
                                </div>
                                
                                <div class="exam-form-group">
                                    <label for="exam-year">السنة</label>
                                    <div class="exam-input-wrapper">
                                        <input type="number" id="exam-year" class="exam-input" required min="2020" max="2030" placeholder="2024">
                                        <div class="exam-input-line"></div>
                                    </div>
                                </div>
                                
                                <div class="exam-form-group">
                                    <label for="exam-date">تاريخ الامتحان</label>
                                    <div class="exam-input-wrapper">
                                        <input type="date" id="exam-date" class="exam-input" required>
                                        <div class="exam-input-line"></div>
                                    </div>
                                </div>
                                
                                <div class="exam-form-group">
                                    <label for="exam-url">رابط التحميل</label>
                                    <div class="exam-input-wrapper">
                                        <input type="url" id="exam-url" class="exam-input" required placeholder="https://drive.google.com/file/...">
                                        <div class="exam-input-line"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="modern-exam-footer">
                        <button type="button" class="modern-exam-btn secondary" onclick="closeExamModal()">
                            <i class="fas fa-times"></i>
                            <span>إلغاء</span>
                        </button>
                        <button type="submit" class="modern-exam-btn primary">
                            <i class="fas fa-plus"></i>
                            <span>إضافة الامتحان</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    document.getElementById('add-exam-modal').style.display = 'flex';
    
    // Handle form submission
    document.getElementById('add-exam-form').addEventListener('submit', async function(e) {
        e.preventDefault();
        await saveNewExam();
    });
}

function closeExamModal() {
    const modal = document.getElementById('add-exam-modal');
    if (modal) {
        modal.remove();
    }
}

async function saveNewExam() {
    const title = document.getElementById('exam-title').value.trim();
    const year = parseInt(document.getElementById('exam-year').value);
    const date = document.getElementById('exam-date').value;
    const downloadUrl = document.getElementById('exam-url').value.trim();
    
    if (!title || !year || !date || !downloadUrl) {
        showNotification('يرجى ملء جميع الحقول', 'error');
        return;
    }
    
    const examData = {
        title,
        date,
        year,
        downloadUrl
    };
    
    try {
        // Get active data source and add exam
        const activeData = getActiveExamData();
        activeData[currentExamLevel].subjects[currentExamSubject].exams.push(examData);
        
        // Sort exams by year
        activeData[currentExamLevel].subjects[currentExamSubject].exams = 
            sortExamsByYear(activeData[currentExamLevel].subjects[currentExamSubject].exams);
        
        // If we're using dynamic data, update it
        if (Object.keys(dynamicExamSubjects).length > 0) {
            dynamicExamSubjects = activeData;
        }
        
        showNotification('تم إضافة الامتحان بنجاح', 'success');
        closeExamModal();
        
        // Refresh the display
        setTimeout(() => refreshExamData(), 500);
        
    } catch (error) {
        console.error('Error saving exam:', error);
        showNotification('حدث خطأ في حفظ الامتحان', 'error');
    }
}

function deleteExam(level, subjectKey, examIndex) {
    if (confirm('هل أنت متأكد من حذف هذا الامتحان؟')) {
        try {
            // Get active data source and delete exam
            const activeData = getActiveExamData();
            activeData[level].subjects[subjectKey].exams.splice(examIndex, 1);
            
            // If we're using dynamic data, update it
            if (Object.keys(dynamicExamSubjects).length > 0) {
                dynamicExamSubjects = activeData;
            }
            
            showNotification('تم حذف الامتحان بنجاح', 'success');
            
            // Refresh the display
            setTimeout(() => refreshExamData(), 500);
            
        } catch (error) {
            console.error('Error deleting exam:', error);
            showNotification('حدث خطأ في حذف الامتحان', 'error');
        }
    }
}

// Enhanced download function
function downloadExam(title, downloadUrl) {
    if (downloadUrl === '#') {
        showNotification('رابط التحميل غير متوفر حالياً', 'warning');
        return;
    }
    
    showNotification('جار تحضير التحميل...', 'info');
    
    // Open download link
    setTimeout(() => {
        window.open(downloadUrl, '_blank');
        showNotification(`تم بدء تحميل: ${title}`, 'success');
    }, 1000);
}

// Function to add new exam (for admin use)
function addExam(level, subjectKey, examData) {
    if (examSubjects[level] && examSubjects[level].subjects[subjectKey]) {
        examSubjects[level].subjects[subjectKey].exams.push(examData);
        // Auto-sort after adding
        examSubjects[level].subjects[subjectKey].exams = sortExamsByYear(examSubjects[level].subjects[subjectKey].exams);
    }
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `exam-notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <div class="notification-icon">
                ${type === 'success' ? '<i class="fas fa-check-circle"></i>' : 
                  type === 'error' ? '<i class="fas fa-times-circle"></i>' : 
                  type === 'warning' ? '<i class="fas fa-exclamation-triangle"></i>' : 
                  '<i class="fas fa-info-circle"></i>'}
            </div>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}
