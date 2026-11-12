document.addEventListener("DOMContentLoaded", () => {
    const now = new Date();
    const startOfYear = new Date(now.getFullYear(), 0, 0);
    const diff = now - startOfYear;
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);

    const currentMonth = now.getMonth;

    const specialDays = [
        1, // New Years Day
        2, // January 2nd
        45, // Valentines Day
        73, // Pi Day
        91, // April Fools
        151, // June 1st
        304, // Halloween
        359 // Christmas Day
    ];

    const specialMonths = [
        6 // June
    ]
    if (specialDays.includes(dayOfYear) || specialMonths.includes(currentMonth)) {
        const elements = document.querySelectorAll('.headerfont');

        elements.forEach(element => {
            element.classList.remove('headerfont');
            element.classList.add('specialfont');
        });
    }
});