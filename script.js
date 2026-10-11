const scheduleData = [
{ day: "الجمعة", time: "09:00 - 10:00", subject: "Smart Robot", type: "محاضرة", instructor: "Dr. Muhammed Salah", place: "G205", sections: [1,2,3,4], week: "all" },
{ day: "الجمعة", time: "10:00 - 11:00", subject: "Smart Robot", type: "محاضرة", instructor: "Dr. Muhammed Salah", place: "G205", sections: [5,6,7,8], week: "all" },
{ day: "الجمعة", time: "11:00 - 12:00", subject: "Monitoring", type: "سكشن", instructor: "Eng. Mohamed Omar", place: "LAB D101", sections: [6], week: 1 },
{ day: "الجمعة", time: "11:00 - 12:00", subject: "Monitoring", type: "سكشن", instructor: "Eng. Mohamed Omar", place: "HALL G204", sections: [6], week: 2 },
{ day: "الجمعة", time: "12:00 - 01:00", subject: "Hacking methods", type: "سكشن", instructor: "Eng. Hana", place: "HALL G103", sections: [6], week: 2 },
{ day: "الجمعة", time: "02:00 - 03:00", subject: "Hacking methods", type: "سكشن", instructor: "Eng. Hana", place: "LAB D101", sections: [6], week: 1 },
{ day: "الجمعة", time: "03:00 - 04:00", subject: "Principles of Management", type: "محاضرة", instructor: "Dr. Naglaa Abdulmohsen", place: "O.L", sections: [1,2,3,4,5,6,7,8], week: "all" },
{ day: "الثلاثاء", time: "09:00 - 10:00", subject: "Data Engineering", type: "سكشن", instructor: "Eng. Naglaa", place: "HALL A202", sections: [4], week: 2 },
{ day: "الثلاثاء", time: "09:00 - 10:00", subject: "Data Engineering", type: "سكشن", instructor: "Eng. Naglaa", place: "LAB D104", sections: [5], week: 1 },
{ day: "الثلاثاء", time: "09:00 - 10:00", subject: "Monitoring", type: "سكشن", instructor: "Eng. Mohamed Omar", place: "cnc", sections: [7], week: 1 },
{ day: "الثلاثاء", time: "09:00 - 10:00", subject: "Monitoring", type: "سكشن", instructor: "Eng. Mohamed Omar", place: "lab d102", sections: [7], week: 2 },
{ day: "الثلاثاء", time: "09:00 - 10:00", subject: "Hacking methods", type: "سكشن", instructor: "Eng. Hana", place: "HALL D103", sections: [8], week: 2 },
{ day: "الثلاثاء", time: "10:00 - 11:00", subject: "Data Engineering", type: "سكشن", instructor: "Eng. Naglaa", place: "LAB D105", sections: [4], week: 1 },
{ day: "الثلاثاء", time: "10:00 - 11:00", subject: "Smart Robot", type: "سكشن", instructor: "Eng. Mohamed Omar", place: "LAB D101", sections: [5], week: 1 },
{ day: "الثلاثاء", time: "10:00 - 11:00", subject: "Hacking methods", type: "سكشن", instructor: "Eng. Hana", place: "LAB D102", sections: [7], week: 2 },
{ day: "الثلاثاء", time: "10:00 - 11:00", subject: "Monitoring", type: "سكشن", instructor: "Eng. Mohamed Omar", place: "LAB D102", sections: [8], week: 2 },
{ day: "الثلاثاء", time: "11:00 - 12:00", subject: "Smart Robot", type: "سكشن", instructor: "Eng. Hana", place: "LAB A02", sections: [3], week: 1 },
{ day: "الثلاثاء", time: "11:00 - 12:00", subject: "Smart Robot", type: "سكشن", instructor: "Eng. Hana", place: "HALL G203", sections: [3], week: 2 },
{ day: "الثلاثاء", time: "11:00 - 12:00", subject: "Smart Robot", type: "سكشن", instructor: "Eng. Mohamed Omar", place: "LAB D101", sections: [7], week: 1 },
{ day: "الثلاثاء", time: "11:00 - 12:00", subject: "Data Engineering", type: "سكشن", instructor: "Eng. Naglaa", place: "LAB D102", sections: [8], week: 1 },
{ day: "الثلاثاء", time: "12:00 - 01:00", subject: "Hacking methods", type: "سكشن", instructor: "Eng. Hana", place: "LAB D102", sections: [5], week: 1 },
{ day: "الثلاثاء", time: "12:00 - 01:00", subject: "Hacking methods", type: "سكشن", instructor: "Eng. Hana", place: "cnc", sections: [5], week: 2 },
{ day: "الثلاثاء", time: "12:00 - 01:00", subject: "Data Engineering", type: "سكشن", instructor: "Eng. Naglaa", place: "LAB D101", sections: [7], week: 2 },
{ day: "الثلاثاء", time: "12:00 - 01:00", subject: "Smart Robot", type: "سكشن", instructor: "Eng. Mohamed Omar", place: "LAB D103", sections: [8], week: 2 },
{ day: "الثلاثاء", time: "01:00 - 02:00", subject: "Statistics 2", type: "سكشن", instructor: "Eng. Shahd", place: "hydrolic lab", sections: [5], week: "all" },
{ day: "الثلاثاء", time: "01:00 - 02:00", subject: "Data Engineering", type: "سكشن", instructor: "Eng. Naglaa", place: "HALL G207", sections: [7], week: 1 },
{ day: "الثلاثاء", time: "01:00 - 02:00", subject: "Hacking methods", type: "سكشن", instructor: "Eng. Hana", place: "LAB D102", sections: [8], week: 1 },
{ day: "الثلاثاء", time: "02:00 - 03:00", subject: "Big Data", type: "محاضرة", instructor: "Dr. Mahmoud Samy", place: "A-NEW", sections: [1,2,3,4], week: "all" },
{ day: "الثلاثاء", time: "02:00 - 03:00", subject: "Data Engineering", type: "سكشن", instructor: "Eng. Naglaa", place: "HALL G201", sections: [5], week: 2 },
{ day: "الثلاثاء", time: "02:00 - 03:00", subject: "Statistics 2", type: "سكشن", instructor: "Eng. Shahd", place: "hydrolic lab", sections: [6], week: "all" },
{ day: "الثلاثاء", time: "02:00 - 03:00", subject: "Monitoring", type: "سكشن", instructor: "Eng. Mohamed Omar", place: "plc lab", sections: [8], week: 1 },
{ day: "الثلاثاء", time: "03:00 - 04:00", subject: "Statistics 2", type: "سكشن", instructor: "Eng. Shahd Abdelmonem", place: "HALL G106", sections: [3], week: "all" },
{ day: "الثلاثاء", time: "03:00 - 04:00", subject: "Monitoring", type: "سكشن", instructor: "Eng. Hana", place: "HALL G103", sections: [4], week: 1 },
{ day: "الثلاثاء", time: "03:00 - 04:00", subject: "Monitoring", type: "سكشن", instructor: "Eng. Hana", place: "LAB D101", sections: [4], week: 2 },
{ day: "الثلاثاء", time: "03:00 - 04:00", subject: "Big Data", type: "محاضرة", instructor: "Dr. Mahmoud Samy", place: "A-NEW", sections: [5,6,7,8], week: "all" },
{ day: "الثلاثاء", time: "04:00 - 05:00", subject: "Statistics 2", type: "سكشن", instructor: "Eng. Shahd", place: "HALL F-SEM", sections: [4], week: "all" },
{ day: "الثلاثاء", time: "04:00 - 05:00", subject: "Monitoring", type: "سكشن", instructor: "Eng. Hana", place: "HALL G201", sections: [5], week: 1 },
{ day: "الثلاثاء", time: "04:00 - 05:00", subject: "Monitoring", type: "سكشن", instructor: "Eng. Hana", place: "LAB D102", sections: [5], week: 2 },
{ day: "الثلاثاء", time: "04:00 - 05:00", subject: "Smart Robot", type: "سكشن", instructor: "Eng. Mohamed Omar", place: "HALL G201", sections: [7], week: 2 },
{ day: "الثلاثاء", time: "04:00 - 05:00", subject: "Smart Robot", type: "سكشن", instructor: "Eng. Mohamed Omar", place: "HALL G204", sections: [8], week: 1 },
{ day: "الثلاثاء", time: "04:00 - 05:00", subject: "Data Engineering", type: "سكشن", instructor: "Eng. Naglaa", place: "HALL g205", sections: [8], week: 2 },
{ day: "الثلاثاء", time: "05:00 - 06:00", subject: "Smart Robot", type: "سكشن", instructor: "Eng. Mohamed Omar", place: "HELL G106", sections: [5], week: 2 },
{ day: "الثلاثاء", time: "05:00 - 06:00", subject: "Data Engineering", type: "سكشن", instructor: "Eng. Naglaa", place: "LAB D102", sections: [6], week: 1 },
{ day: "الثلاثاء", time: "05:00 - 06:00", subject: "Data Engineering", type: "سكشن", instructor: "Eng. Naglaa", place: "HALL c107", sections: [6], week: 2 },
{ day: "الثلاثاء", time: "05:00 - 06:00", subject: "Hacking methods", type: "سكشن", instructor: "Eng. Hana", place: "HALL c107", sections: [7], week: 1 },
{ day: "الثلاثاء", time: "05:00 - 06:00", subject: "Big Data", type: "سكشن", instructor: "Eng. Shahd", place: "LAB D101", sections: [8], week: 1 },
{ day: "الثلاثاء", time: "05:00 - 06:00", subject: "Big Data", type: "سكشن", instructor: "Eng. Shahd", place: "HALL G202", sections: [8], week: 2 },
{ day: "الأربعاء", time: "09:00 - 10:00", subject: "Monitoring", type: "سكشن", instructor: "Eng. Hana", place: "LAB D103", sections: [1,2], week: 2 },
{ day: "الأربعاء", time: "09:00 - 10:00", subject: "Big Data", type: "سكشن", instructor: "Eng. Mohamed Amr", place: "LAB F202", sections: [6], week: 1 },
{ day: "الأربعاء", time: "09:00 - 10:00", subject: "Big Data", type: "سكشن", instructor: "Eng. Mohamed Amr", place: "HALL F202", sections: [6], week: 2 },
{ day: "الأربعاء", time: "09:00 - 10:00", subject: "Statistics", type: "محاضرة", instructor: "Dr. Doaa Roshdy", place: "A304", sections: [7,8], week: "all" },
{ day: "الأربعاء", time: "10:00 - 11:00", subject: "Big Data", type: "سكشن", instructor: "Eng. Mohamed Amr", place: "hydrolic lab", sections: [1,2], week: 2 },
{ day: "الأربعاء", time: "10:00 - 11:00", subject: "Statistics", type: "محاضرة", instructor: "Dr. Doaa Roshdy", place: "A304", sections: [3,4,5,6], week: "all" },
{ day: "الأربعاء", time: "11:00 - 12:00", subject: "Statistics", type: "محاضرة", instructor: "Dr. Doaa Roshdy", place: "G203", sections: [1,2,3], week: "all" },
{ day: "الأربعاء", time: "11:00 - 12:00", subject: "Data Engineering", type: "سكشن", instructor: "Eng. Naglaa", place: "hydrolic lab", sections: [4], week: 2 },
{ day: "الأربعاء", time: "12:00 - 01:00", subject: "Big Data", type: "سكشن", instructor: "Eng. Mohamed Amr", place: "LAB a02", sections: [1,2], week: 1 },
{ day: "الأربعاء", time: "12:00 - 01:00", subject: "Data Engineering", type: "سكشن", instructor: "Eng. Naglaa", place: "HALL G106", sections: [3,4], week: 1 },
{ day: "الأربعاء", time: "01:00 - 02:00", subject: "Data Engineering", type: "سكشن", instructor: "Eng. Naglaa", place: "HALL G106", sections: [1,2], week: 1 },
{ day: "الأربعاء", time: "01:00 - 02:00", subject: "Data Engineering", type: "سكشن", instructor: "Eng. Naglaa", place: "LAB A02", sections: [1,2], week: 2 },
{ day: "الأربعاء", time: "02:00 - 03:00", subject: "Smart Robot", type: "سكشن", instructor: "Eng. Hana", place: "LAB D104", sections: [1,2], week: 1 },
{ day: "الأربعاء", time: "02:00 - 03:00", subject: "Smart Robot", type: "سكشن", instructor: "Eng. Hana", place: "HALL G207", sections: [1,2], week: 2 },
{ day: "الأربعاء", time: "03:00 - 04:00", subject: "Hacking methods", type: "سكشن", instructor: "Eng. Hana", place: "LAB D103", sections: [1,2], week: 1 },
{ day: "الأربعاء", time: "03:00 - 04:00", subject: "Hacking methods", type: "سكشن", instructor: "Eng. Hana", place: "HALL A304", sections: [1,2], week: 2 },
{ day: "الأربعاء", time: "03:00 - 04:00", subject: "Data Engineering", type: "سكشن", instructor: "Eng. Naglaa", place: "LAB D104", sections: [3,4], week: 2 },
{ day: "الأربعاء", time: "03:00 - 04:00", subject: "Data Engineering", type: "سكشن", instructor: "Eng. Naglaa", place: "d104 lab", sections: [5], week: 1 },
{ day: "الأربعاء", time: "04:00 - 05:00", subject: "Data Engineering", type: "محاضرة", instructor: "Dr. Amr Keshk", place: "G205", sections: [1,2,3,4,5], week: "all" },
{ day: "الأربعاء", time: "05:00 - 06:00", subject: "Data Engineering", type: "محاضرة", instructor: "Dr. Amr Keshk", place: "G205", sections: [6,7,8], week: "all" },
{ day: "الخميس", time: "09:00 - 10:00", subject: "Hacking methods and Detection", type: "محاضرة", instructor: "Dr. Amr Keshk", place: "A304", sections: [1,2,3], week: "all" },
{ day: "الخميس", time: "09:00 - 10:00", subject: "Big Data", type: "سكشن", instructor: "Eng. Mohamed Amr", place: "LAB D102", sections: [4], week: 1 },
{ day: "الخميس", time: "09:00 - 10:00", subject: "Big Data", type: "سكشن", instructor: "Eng. Mohamed Amr", place: "HALL D103", sections: [4], week: 2 },
{ day: "الخميس", time: "10:00 - 11:00", subject: "Monitoring", type: "سكشن", instructor: "Eng. Hana", place: "HALL G103", sections: [1], week: 1 },
{ day: "الخميس", time: "10:00 - 11:00", subject: "Monitoring", type: "سكشن", instructor: "Eng. Hana", place: "LAB D105", sections: [3], week: 2 },
{ day: "الخميس", time: "10:00 - 11:00", subject: "Hacking methods and Detection", type: "محاضرة", instructor: "Dr. Amr Keshk", place: "A304", sections: [4,5,6], week: "all" },
{ day: "الخميس", time: "10:00 - 11:00", subject: "Big Data", type: "سكشن", instructor: "Eng. Shahd Abdelmonem", place: "plc lab", sections: [7], week: 1 },
{ day: "الخميس", time: "10:00 - 11:00", subject: "Big Data", type: "سكشن", instructor: "Eng. Shahd Abdelmonem", place: "D101", sections: [7], week: 2 },
{ day: "الخميس", time: "11:00 - 12:00", subject: "Hacking methods and Detection", type: "محاضرة", instructor: "Dr. Amr Keshk", place: "A304", sections: [7,8], week: "all" },
{ day: "الخميس", time: "12:00 - 01:00", subject: "Big Data", type: "سكشن", instructor: "Eng. Mohamed Amr", place: "LAB D104", sections: [2], week: 2 },
{ day: "الخميس", time: "12:00 - 01:00", subject: "Monitoring", type: "سكشن", instructor: "Eng. Hana", place: "HALL c107", sections: [3], week: 1 },
{ day: "الخميس", time: "12:00 - 01:00", subject: "Big Data", type: "سكشن", instructor: "Eng. Shahd", place: "LAB A01", sections: [3], week: 2 },
{ day: "الخميس", time: "12:00 - 01:00", subject: "Hacking methods", type: "سكشن", instructor: "Eng. Hana", place: "LAB D101", sections: [4], week: 2 },
{ day: "الخميس", time: "12:00 - 01:00", subject: "Network monitoring and Protection", type: "محاضرة", instructor: "Dr. Amr Keshk", place: "A304", sections: [5,6,7,8], week: "all" },
{ day: "الخميس", time: "01:00 - 02:00", subject: "Big Data", type: "سكشن", instructor: "Eng. Mohamed Amr", place: "HALL A303", sections: [2], week: 1 },
{ day: "الخميس", time: "01:00 - 02:00", subject: "Network monitoring and Protection", type: "محاضرة", instructor: "Dr. Amr Keshk", place: "A304", sections: [3,4,5,6,7,8], week: "all" },
{ day: "الخميس", time: "02:00 - 03:00", subject: "Network monitoring and Protection", type: "محاضرة", instructor: "Dr. Amr Keshk", place: "A304", sections: [1,2,3], week: "all" },
{ day: "الخميس", time: "02:00 - 03:00", subject: "Hacking methods", type: "سكشن", instructor: "Eng. Hana", place: "HALL A307", sections: [4], week: 1 },
{ day: "الخميس", time: "02:00 - 03:00", subject: "Smart Robot", type: "سكشن", instructor: "Eng. Mohamed Omar", place: "hall g203", sections: [6], week: 1 },
{ day: "الخميس", time: "03:00 - 04:00", subject: "Hacking methods", type: "سكشن", instructor: "Eng. Hana", place: "LAB D103", sections: [2], week: 1 },
{ day: "الخميس", time: "03:00 - 04:00", subject: "Hacking methods", type: "سكشن", instructor: "Eng. Hana", place: "HALL A 305", sections: [2], week: 2 },
{ day: "الخميس", time: "03:00 - 04:00", subject: "Smart Robot", type: "سكشن", instructor: "Eng. Mohamed Omar", place: "HALL A304", sections: [3], week: 1 },
{ day: "الخميس", time: "03:00 - 04:00", subject: "Smart Robot", type: "سكشن", instructor: "Eng. Mohamed Omar", place: "LAB D102", sections: [3], week: 2 },
{ day: "الخميس", time: "03:00 - 04:00", subject: "Big Data", type: "سكشن", instructor: "Eng. Shahd", place: "plc lab", sections: [7], week: 1 },
{ day: "الخميس", time: "03:00 - 04:00", subject: "Statistics 2", type: "سكشن", instructor: "Eng. Ahmed Amin", place: "HALL G104", sections: [8], week: "all" },
{ day: "الخميس", time: "04:00 - 05:00", subject: "Monitoring", type: "سكشن", instructor: "Eng. Hana", place: "LAB D104", sections: [2], week: 1 },
{ day: "الخميس", time: "04:00 - 05:00", subject: "Monitoring", type: "سكشن", instructor: "Eng. Hana", place: "HALL A304", sections: [2], week: 2 },
{ day: "الخميس", time: "04:00 - 05:00", subject: "Big Data", type: "سكشن", instructor: "Eng. Shahd", place: "HALL G205", sections: [3], week: 1 },
{ day: "الخميس", time: "04:00 - 05:00", subject: "Smart Robot", type: "سكشن", instructor: "Eng. Mohamed Omar", place: "HALL A303", sections: [4], week: 1 },
{ day: "الخميس", time: "04:00 - 05:00", subject: "Smart Robot", type: "سكشن", instructor: "Eng. Mohamed Omar", place: "LAB D102", sections: [4], week: 2 },
{ day: "الخميس", time: "04:00 - 05:00", subject: "Big Data", type: "سكشن", instructor: "Eng. Shahd", place: "HALL F-SEMINAR", sections: [7], week: 2 },
{ day: "الخميس", time: "04:00 - 05:00", subject: "Statistics 2", type: "سكشن", instructor: "Eng. Ahmed Amin", place: "HALL G104", sections: [8], week: "all" },
{ day: "الخميس", time: "05:00 - 06:00", subject: "Statistics 2", type: "سكشن", instructor: "Eng. Shahd", place: "HALL F-SEM", sections: [1], week: "all" },
{ day: "الخميس", time: "05:00 - 06:00", subject: "Hacking methods", type: "سكشن", instructor: "Eng. Hana", place: "HALL G202", sections: [3], week: 1 },
{ day: "الخميس", time: "05:00 - 06:00", subject: "Hacking methods", type: "سكشن", instructor: "Eng. Hana", place: "LAB D103", sections: [3], week: 2 },
{ day: "الخميس", time: "05:00 - 06:00", subject: "Smart Robot", type: "سكشن", instructor: "Eng. Mohamed Omar", place: "Lab d101", sections: [7], week: 2 }
];

let selectedSection = null;
let selectedWeek = null;

// Initialize tsParticles
try {
    if (window.tsParticles) {
        tsParticles.load("tsparticles", {
            background: { color: { value: "transparent" } },
            fpsLimit: 60,
            particles: {
                color: { value: ["#8B5CF6", "#F472D0", "#22D3EE"] },
                links: { enable: false },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: { default: "bounce" },
                    random: true,
                    speed: 0.5,
                    straight: false,
                },
                number: {
                    density: { enable: true, area: 800 },
                    value: 60,
                },
                opacity: {
                    value: 0.5,
                    random: true,
                    animation: { enable: true, speed: 1, minimumValue: 0.1, sync: false }
                },
                shape: { type: "circle" },
                size: {
                    value: { min: 1, max: 3 },
                    random: true,
                    animation: { enable: true, speed: 2, minimumValue: 0.5, sync: false }
                },
            },
            detectRetina: true,
        });
    }
} catch (e) {
    console.warn("tsParticles not loaded: ", e);
}

// App Initialization
function initApp() {
    if (window.gsap && window.ScrollTrigger) {
        gsap.registerPlugin(ScrollTrigger);
    }
    
    initSections();

    // Setup Back Buttons
    const btnBackSections = document.getElementById('btn-back-sections');
    const btnBackWeeks = document.getElementById('btn-back-weeks');
    
    if (btnBackSections) btnBackSections.addEventListener('click', () => switchScreen('screen-weeks', 'screen-sections'));
    if (btnBackWeeks) btnBackWeeks.addEventListener('click', () => switchScreen('screen-schedule', 'screen-weeks'));

    // GSAP Hover on Back Buttons
    [btnBackSections, btnBackWeeks].forEach(btn => {
        if (!btn) return;
        btn.addEventListener('mouseenter', () => {
            if (window.gsap) gsap.to(btn, { scale: 1.05, duration: 0.2, ease: "power1.out" });
        });
        btn.addEventListener('mouseleave', () => {
            if (window.gsap) gsap.to(btn, { scale: 1, duration: 0.2, ease: "power1.out" });
        });
    });

    // Week cards setup
    const weekCards = document.querySelectorAll('.week-card');
    weekCards.forEach(card => {
        card.addEventListener('click', (e) => {
            selectedWeek = parseInt(e.target.dataset.week);
            generateSchedule();
            switchScreen('screen-weeks', 'screen-schedule');
        });
        // GSAP Hover
        card.addEventListener('mouseenter', () => {
            if (window.gsap) gsap.to(card, { scale: 1.05, y: -5, duration: 0.3, ease: "power2.out", borderColor: "#A855F7", boxShadow: "0 8px 32px rgba(168, 85, 247, 0.3)" });
        });
        card.addEventListener('mouseleave', () => {
            if (window.gsap) gsap.to(card, { scale: 1, y: 0, duration: 0.3, ease: "power2.out", borderColor: "rgba(139, 92, 246, 0.3)", boxShadow: "0 4px 30px rgba(0, 0, 0, 0.5)" });
        });
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}

function initSections() {
    const grid = document.getElementById('sections-grid');
    if (!grid) return;
    grid.innerHTML = '';
    for (let i = 1; i <= 8; i++) {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `<h2>سكشن ${i}</h2>`;
        card.addEventListener('click', () => {
            selectedSection = i;
            document.getElementById('week-title').innerText = `جدول سكشن ${i}`;
            switchScreen('screen-sections', 'screen-weeks');
        });
        
        // GSAP hover effect for the section cards
        card.addEventListener('mouseenter', () => {
            if (window.gsap) gsap.to(card, { scale: 1.05, y: -5, duration: 0.3, ease: "power2.out", borderColor: "#A855F7", boxShadow: "0 8px 32px rgba(168, 85, 247, 0.3)" });
        });
        card.addEventListener('mouseleave', () => {
            if (window.gsap) gsap.to(card, { scale: 1, y: 0, duration: 0.3, ease: "power2.out", borderColor: "rgba(139, 92, 246, 0.3)", boxShadow: "0 4px 30px rgba(0, 0, 0, 0.5)" });
        });
        
        grid.appendChild(card);
    }

    // Page Load Cinematic Animation
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!prefersReducedMotion && window.gsap) {
        try {
            // Pre-hide elements to prevent FOUC
            gsap.set("#screen-sections header h1, #screen-sections header p, #sections-grid .card", { opacity: 0 });
            
            const tl = gsap.timeline();
            tl.fromTo("#screen-sections header h1", 
                { y: -30, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: "power3.out", clearProps: "all" }
              )
              .fromTo("#screen-sections header p", 
                { y: -20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", clearProps: "all" }, 
                "-=0.6"
              )
              .fromTo("#sections-grid .card", 
                  { y: 40, opacity: 0 },
                  { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "back.out(1.5)", clearProps: "all" }, 
                  "-=0.4"
              );
        } catch(e) {
            console.error("GSAP Page Load Animation Error:", e);
            gsap.set("#screen-sections header h1, #screen-sections header p, #sections-grid .card", { opacity: 1, y: 0, clearProps: "all" });
        }
    }
}

function switchScreen(hideId, showId) {
    const hideScreen = document.getElementById(hideId);
    const showScreen = document.getElementById(showId);
    
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion || !window.gsap) {
        hideScreen.classList.remove('active');
        hideScreen.classList.add('hidden');
        hideScreen.style.display = 'none';
        
        showScreen.classList.remove('hidden');
        showScreen.classList.add('active');
        showScreen.style.display = 'block';
        if (showId === 'screen-schedule' && window.ScrollTrigger) ScrollTrigger.refresh();
        return;
    }

    const slideOffset = 30;

    gsap.to(hideScreen, { 
        opacity: 0, 
        y: -slideOffset, 
        duration: 0.4, 
        ease: "power2.inOut",
        onComplete: () => {
            hideScreen.classList.remove('active');
            hideScreen.classList.add('hidden');
            hideScreen.style.display = 'none';
            
            showScreen.classList.remove('hidden');
            showScreen.classList.add('active');
            showScreen.style.display = 'block';
            
            gsap.set(showScreen, { opacity: 0, y: slideOffset });
            if (window.ScrollTrigger) ScrollTrigger.refresh();
            
            gsap.to(showScreen, { 
                opacity: 1, 
                y: 0, 
                duration: 0.5, 
                ease: "power3.out",
                clearProps: "opacity,transform",
                onComplete: () => {
                    if (window.ScrollTrigger) ScrollTrigger.refresh();
                }
            });
            
            // Re-animate week cards if navigating to weeks screen
            if (showId === 'screen-weeks') {
                gsap.fromTo("#screen-weeks .robot-wrapper", 
                    { opacity: 0, scale: 0 }, 
                    { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.2)", delay: 0.2, clearProps: "all" }
                );
                
                gsap.fromTo("#screen-weeks .week-card", 
                    { opacity: 0, scale: 0.9, y: 20 }, 
                    { opacity: 1, scale: 1, y: 0, duration: 0.5, stagger: 0.15, ease: "back.out(1.5)", delay: 0.4, clearProps: "all" }
                );
            }
        }
    });
}

const timeOrder = {
    "09:00 - 10:00": 1,
    "10:00 - 11:00": 2,
    "11:00 - 12:00": 3,
    "12:00 - 01:00": 4,
    "01:00 - 02:00": 5,
    "02:00 - 03:00": 6,
    "03:00 - 04:00": 7,
    "04:00 - 05:00": 8,
    "05:00 - 06:00": 9
};

function generateSchedule() {
    document.getElementById('schedule-title').innerText = `سكشن ${selectedSection} - الأسبوع ${selectedWeek === 1 ? 'الأول' : 'الثاني'}`;
    const container = document.getElementById('schedule-content');
    container.innerHTML = '';
    
    // Filter data
    const filtered = scheduleData.filter(item => 
        item.sections.includes(selectedSection) && 
        (item.week === "all" || item.week === selectedWeek)
    );
    
    // Group by day
    const days = ["الثلاثاء", "الأربعاء", "الخميس", "الجمعة"];
    const grouped = {};
    days.forEach(day => grouped[day] = []);
    
    filtered.forEach(item => {
        if(grouped[item.day]) {
            grouped[item.day].push(item);
        }
    });
    
    // Sort each day by time
    days.forEach(day => {
        grouped[day].sort((a, b) => (timeOrder[a.time] || 0) - (timeOrder[b.time] || 0));
    });
    
    // Create Days Off Card
    const offCard = document.createElement('div');
    offCard.className = 'day-section';
    offCard.innerHTML = `
        <h2 class="day-title">السبت - الأحد - الإثنين</h2>
        <div class="day-off">إجازة - DAY OFF</div>
    `;
    container.appendChild(offCard);
    
    // Create Working Days Cards
    days.forEach(day => {
        if (grouped[day].length > 0) {
            const daySection = document.createElement('div');
            daySection.className = 'day-section';
            
            let eventsHtml = '';
            grouped[day].forEach(event => {
                eventsHtml += `
                    <div class="event-card">
                        <div class="event-time">${event.time}</div>
                        <div class="event-details">
                            <h3>${event.subject}</h3>
                            <div class="event-info">
                                <span>${event.type}</span>
                                <span>${event.instructor}</span>
                                <span>${event.place}</span>
                            </div>
                        </div>
                    </div>
                `;
            });
            
            daySection.innerHTML = `
                <h2 class="day-title">${day}</h2>
                ${eventsHtml}
            `;
            container.appendChild(daySection);
        }
    });
    
    // Setup GSAP ScrollTrigger
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!prefersReducedMotion && window.gsap && window.ScrollTrigger) {
        ScrollTrigger.getAll().forEach(t => t.kill());

        const daySections = document.querySelectorAll('.day-section');
        daySections.forEach((section) => {
            gsap.fromTo(section, 
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 95%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });

        const eventCards = document.querySelectorAll('.event-card');
        eventCards.forEach((card, index) => {
            gsap.fromTo(card, 
                { opacity: 0, x: 30 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.5,
                    ease: "power2.out",
                    delay: 0.05,
                    scrollTrigger: {
                        trigger: card,
                        start: "top 95%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
            
            // GSAP Hover
            card.addEventListener('mouseenter', () => {
                if (window.gsap) gsap.to(card, { x: -5, backgroundColor: "rgba(16, 10, 32, 0.9)", borderColor: "#22D3EE", duration: 0.3, ease: "power2.out", overwrite: "auto" });
            });
            card.addEventListener('mouseleave', () => {
                if (window.gsap) gsap.to(card, { x: 0, backgroundColor: "rgba(8, 6, 17, 0.6)", borderColor: "#8B5CF6", duration: 0.3, ease: "power2.out", overwrite: "auto" });
            });
        });
    }
}
