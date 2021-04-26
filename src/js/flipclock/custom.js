var clock;
// Instantiate a coutdown FlipClock 172800 = 48hrs
clock = $('.clock').FlipClock(5000000, {
    clockFace: 'DailyCounter',
    countdown: true,
    showSeconds: true,
});