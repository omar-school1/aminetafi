
// دالة التنقل بين مستويات المواد الدراسية
// هذه الدالة تستدعى عند النقر على بطاقة مستوى تعليمي (جذع مشترك، أولى باك، ثانية باك)
function navigateToLevel(level) {
    // إضافة تأثير بصري عند النقر (تصغير البطاقة قليلاً)
    const card = event.currentTarget;  // البطاقة التي تم النقر عليها
    card.style.transform = 'scale(0.98)';  // تصغير البطاقة بـ 2%
    card.style.opacity = '0.8';            // جعل البطاقة شفافة قليلاً
    
    setTimeout(() => {
        switch(level) {
            case 'common-core':
                window.location.href = `index2.html?level=common-core&title=الجذع المشترك`;
                break;
            case 'first-bac':
                window.location.href = `index2.html?level=first-bac&title=الأولى بكالوريا`;
                break;
            case 'second-bac':
                window.location.href = `index2.html?level=second-bac&title=الثانية بكالوريا`;
                break;
            default:
                console.log('مستوى غير معروف');
        }
    }, 200);
}

// Add smooth scrolling and animations
document.addEventListener('DOMContentLoaded', function() {
    // Animate level cards on scroll
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

    // Apply animation to level cards
    const levelCards = document.querySelectorAll('.level-card');
    levelCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = `all 0.6s ease ${index * 0.2}s`;
        observer.observe(card);
    });

    // Add hover effects for better UX
    levelCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});
// Dynamic data fetching from level.js file
// This will ensure the counts are always up-to-date with the actual content

let dynamicLevelSubjects = null;

// Function to dynamically load and parse level.js data
async function loadDynamicLevelData() {
    try {
        // Try to load level.js content dynamically
        const response = await fetch('level.js');
        const levelJsContent = await response.text();
        
        // Extract levelSubjects from the file content using regex
        const levelSubjectsMatch = levelJsContent.match(/const levelSubjects = ({[\s\S]*?});/);
        
        if (levelSubjectsMatch) {
            // Use eval to parse the JavaScript object (safe in this context since it's our own file)
            dynamicLevelSubjects = eval('(' + levelSubjectsMatch[1] + ')');
            console.log('تم تحميل بيانات المواد بنجاح:', dynamicLevelSubjects);
            return true;
        } else {
            throw new Error('لم يتم العثور على بيانات levelSubjects في level.js');
        }
    } catch (error) {
        console.warn('خطأ في تحميل البيانات الديناميكية:', error);
        console.log('سيتم استخدام البيانات الاحتياطية');
        
        // Fallback to static data if dynamic loading fails
        dynamicLevelSubjects = {
            'common-core': [
                { name: 'العربية' }, { name: 'الاجتماعيات' }, { name: 'التربية الإسلامية' }, 
                { name: 'علوم الحياة والأرض' }, { name: 'الفيزياء' }, { name: 'الرياضيات' }, 
                { name: 'الفلسفة' }, { name: 'الإنجليزية' }, { name: 'المعلوميات' }
            ],
            'first-bac': [
                { name: 'العربية' }, { name: 'الاجتماعيات' }, { name: 'التربية الإسلامية' }, 
                { name: 'علوم الحياة والأرض' }, { name: 'الفيزياء' }, { name: 'الرياضيات' }, 
                { name: 'الفلسفة' }, { name: 'الإنجليزية' }
            ],
            'second-bac': [
                { name: 'العربية' }, { name: 'التربية الإسلامية' }, { name: 'علوم الحياة والأرض' }, 
                { name: 'الفيزياء' }, { name: 'الرياضيات' }, { name: 'الفلسفة' }, 
                { name: 'الإنجليزية' }, { name: 'الفرنسية' }
            ]
        };
        return false;
    }
}

// Function to update subject counts with detailed information
async function updateSubjectCounts() {
    // Ensure data is loaded
    if (!dynamicLevelSubjects) {
        await loadDynamicLevelData();
    }

    // Function to count lessons and exercises for a level
    function countLevelDetails(levelKey) {
        const subjects = dynamicLevelSubjects[levelKey] || [];
        let totalLessons = 0;
        let totalExercises = 0;
        
        subjects.forEach(subject => {
            if (subject.lessons) totalLessons += subject.lessons.length;
            if (subject.exercises) totalExercises += subject.exercises.length;
        });
        
        return { 
            subjects: subjects.length, 
            lessons: totalLessons, 
            exercises: totalExercises 
        };
    }

    // Update Common Core count with detailed info
    const commonCoreDetails = countLevelDetails('common-core');
    const commonCoreElement = document.getElementById('common-core-count');
    if (commonCoreElement) {
        commonCoreElement.innerHTML = `
            <div class="count-details">
                <span class="main-count">${commonCoreDetails.subjects} مواد دراسية</span>
                <small class="sub-count">${commonCoreDetails.lessons} درس • ${commonCoreDetails.exercises} تمرين</small>
            </div>
        `;
    }

    // Update First Bac count with detailed info
    const firstBacDetails = countLevelDetails('first-bac');
    const firstBacElement = document.getElementById('first-bac-count');
    if (firstBacElement) {
        firstBacElement.innerHTML = `
            <div class="count-details">
                <span class="main-count">${firstBacDetails.subjects} مواد أساسية</span>
                <small class="sub-count">${firstBacDetails.lessons} درس • ${firstBacDetails.exercises} تمرين</small>
            </div>
        `;
    }

    // Update Second Bac count with detailed info
    const secondBacDetails = countLevelDetails('second-bac');
    const secondBacElement = document.getElementById('second-bac-count');
    if (secondBacElement) {
        secondBacElement.innerHTML = `
            <div class="count-details">
                <span class="main-count">${secondBacDetails.subjects} مواد أساسية</span>
                <small class="sub-count">${secondBacDetails.lessons} درس • ${secondBacDetails.exercises} تمرين</small>
            </div>
        `;
    }

    console.log('تم تحديث إحصائيات المواد:', {
        'الجذع المشترك': commonCoreDetails,
        'الأولى بكالوريا': firstBacDetails,
        'الثانية بكالوريا': secondBacDetails
    });
}

// Courses page JavaScript functionality

document.addEventListener('DOMContentLoaded', async function() {
    // Show loading state
    const countElements = ['common-core-count', 'first-bac-count', 'second-bac-count'];
    countElements.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = 'جاري تحميل البيانات...';
        }
    });

    // Load dynamic data and update counts
    await loadDynamicLevelData();
    await updateSubjectCounts();
    // Navigation functionality for level cards
    const levelCards = document.querySelectorAll('.level-card');
    
    levelCards.forEach(card => {
        card.addEventListener('click', function() {
            const levelInfo = this.querySelector('.level-info h2').textContent;
            let levelPath = '';
            
            if (levelInfo.includes('الجذع المشترك')) {
                levelPath = 'index2.html?level=common-core';
            } else if (levelInfo.includes('الأولى بكالوريا')) {
                levelPath = 'index2.html?level=first-bac';
            } else if (levelInfo.includes('الثانية بكالوريا')) {
                levelPath = 'index2.html?level=second-bac';
            }
            
            if (levelPath) {
                window.location.href = levelPath;
            }
        });
    });

    // Animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Apply animation to level cards
    levelCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = `all 0.6s ease ${index * 0.2}s`;
        observer.observe(card);
    });

    // Add hover effects for better UX
    levelCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});
