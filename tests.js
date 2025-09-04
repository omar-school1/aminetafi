// وظائف صفحة الاختبارات - JavaScript
// هذا الملف يدير التفاعلات في صفحة الاختبارات الرئيسية

// Dynamic data fetching from test-engine.js file
let dynamicTestData = null;

// Function to dynamically load and parse test-engine.js data
async function loadDynamicTestData() {
    try {
        // Try to load test-engine.js content dynamically
        const response = await fetch('test-engine.js');
        const testEngineContent = await response.text();
        
        // Extract sampleQuestions from the file content using regex
        const sampleQuestionsMatch = testEngineContent.match(/const sampleQuestions = ({[\s\S]*?});/);
        
        if (sampleQuestionsMatch) {
            // Use eval to parse the JavaScript object (safe in this context since it's our own file)
            dynamicTestData = eval('(' + sampleQuestionsMatch[1] + ')');
            console.log('تم تحميل بيانات الاختبارات بنجاح:', Object.keys(dynamicTestData));
            return true;
        } else {
            throw new Error('لم يتم العثور على بيانات sampleQuestions في test-engine.js');
        }
    } catch (error) {
        console.warn('خطأ في تحميل بيانات الاختبارات:', error);
        console.log('سيتم استخدام البيانات الاحتياطية');
        
        // Fallback to static data if dynamic loading fails
        dynamicTestData = {
            'first-bac-french': { questions: Array(5).fill(null) },
            'first-bac-arabic': { questions: Array(3).fill(null) },
            'first-bac-social': { questions: Array(3).fill(null) },
            'first-bac-islamic': { questions: Array(70).fill(null) },
            'second-bac-math': { questions: Array(3).fill(null) },
            'second-bac-physics': { questions: Array(2).fill(null) },
            'second-bac-biology': { questions: Array(2).fill(null) },
            'second-bac-philosophy': { questions: Array(2).fill(null) },
            'second-bac-english': { questions: Array(2).fill(null) }
        };
        return false;
    }
}

// Function to get test data for counting questions
function getTestData(level, subject) {
    const testKey = `${level}-${subject}`;
    return dynamicTestData[testKey] || { questions: [] };
}

// Function to update test info display with dynamic question counts
async function updateTestInfo() {
    // Ensure dynamic test data is loaded
    if (!dynamicTestData) {
        await loadDynamicTestData();
    }

    document.querySelectorAll('.test-subject-card').forEach(card => {
        const title = card.querySelector('h3').textContent;
        const questionsSpan = card.querySelector('.questions-count');

        // Map Arabic names to English keys
        const subjectMap = {
            'الفرنسية': 'french',
            'العربية': 'arabic',
            'الاجتماعيات': 'social',
            'التربية الإسلامية': 'islamic',
            'علوم الحياة والأرض': 'biology',
            'الفيزياء': 'physics',
            'الرياضيات': 'math',
            'الفلسفة': 'philosophy',
            'الإنجليزية': 'english'
        };

        const subjectKey = subjectMap[title];
        if (subjectKey) {
            // Determine level
            const categoryElement = card.closest('.category-card').querySelector('h2');
            const level = categoryElement.textContent.includes('الأولى') ? 'first-bac' : 'second-bac';

            const testData = getTestData(level, subjectKey);
            const questionCount = testData.questions ? testData.questions.length : 0;

            // Update with more detailed info
            questionsSpan.innerHTML = `
                <span class="question-count-number">${questionCount}</span>
                <span class="question-count-label">${questionCount === 1 ? 'سؤال' : questionCount === 2 ? 'سؤالان' : 'أسئلة'}</span>
            `;
        }
    });

    console.log('تم تحديث إحصائيات الأسئلة بناءً على البيانات الديناميكية');
}

// Function to start a test - called when a subject card is clicked
function startTest(level, subject) {
    // Redirect to test page with parameters (level and subject)
    window.location.href = `index3.html?level=${level}&subject=${subject}`;
}

function getSubjectName(subject) {
    const subjects = {
        'french': 'الفرنسية',
        'arabic': 'العربية',
        'social': 'الاجتماعيات',
        'islamic': 'التربية الإسلامية',
        'biology': 'علوم الحياة والأرض',
        'physics': 'الفيزياء',
        'math': 'الرياضيات',
        'philosophy': 'الفلسفة',
        'english': 'الإنجليزية'
    };
    return subjects[subject] || subject;
}

function getLevelName(level) {
    const levels = {
        'first-bac': 'الأولى بكالوريا',
        'second-bac': 'الثانية بكالوريا'
    };
    return levels[level] || level;
}

document.addEventListener('DOMContentLoaded', async function() {
    // Load dynamic test data first
    await loadDynamicTestData();
    // Add motion effects on load
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Apply effects to category cards
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = `all 0.8s ease ${index * 0.3}s`;
        observer.observe(card);
    });

    // Additional effects for test cards
    const testCards = document.querySelectorAll('.test-subject-card');
    testCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Call updateTestInfo to set initial test details with dynamic data
    await updateTestInfo();
});