<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>الامتحانات الجهوية والوطنية - مدرستي الرقمية</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="exams.css">
</head>
<body>
    <!-- Header -->
    <header class="header">
        <nav class="nav">
            <div class="nav-brand">
                <h2>مدرستي الرقمية</h2>
            </div>
            <ul class="nav-links">
                <li><a href="index.html">الرئيسية</a></li>
                <li><a href="index5.html">المواد</a></li>
                <li><a href="index4.html">الاختبارات</a></li>
                <li><a href="#about">من نحن</a></li>
            </ul>
        </nav>
    </header>

    <!-- Page Header -->
    <section class="exams-header">
        <div class="exams-header-content">
            <button class="back-btn" onclick="window.location.href='index.html'">← العودة للرئيسية</button>
            <h1 id="page-title">الامتحانات الجهوية والوطنية</h1>
            <p>تحضير شامل للامتحانات الرسمية</p>
        </div>
    </section>

    <!-- Exams Content -->
    <section class="exams-section">
        <div class="exams-container" id="exams-container">
            <!-- Content will be loaded dynamically -->
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="footer-content">
            <div class="footer-brand">
                <h3>مدرستي الرقمية</h3>
                <p>بوابتك للتميز الدراسي</p>
            </div>
            <div class="social-icons">
                <div class="social-icon facebook" onclick="window.open('https://www.facebook.com/academy.najah', '_blank')">
                    <i class="fab fa-facebook-f"></i>
                </div>
                <div class="social-icon youtube" onclick="window.open('https://www.youtube.com/@academy-najah', '_blank')">
                    <i class="fab fa-youtube"></i>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2024 مدرستي الرقمية. جميع الحقوق محفوظة.</p>
            </div>
        </div>
    </footer>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/js/all.min.js"></script>
    <script src="exams.js"></script>
</body>
</html>
