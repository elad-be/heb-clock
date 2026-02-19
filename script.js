// Hebrew Word Clock - Full Implementation with Niqqud
// =====================================================

// Hour dictionary (1-12) with full niqqud
const HOURS = {
    1: "אַחַת",
    2: "שְׁתַּיִם",
    3: "שָׁלוֹשׁ",
    4: "אַרְבַּע",
    5: "חָמֵשׁ",
    6: "שֵׁשׁ",
    7: "שֶׁבַע",
    8: "שְׁמוֹנֶה",
    9: "תֵּשַׁע",
    10: "עֶשֶׂר",
    11: "אַחַת עֶשְׂרֵה",
    12: "שְׁתֵּים עֶשְׂרֵה"
};

// Minutes 1-29 with full niqqud
const MINUTES = {
    1: "דַּקָּה",
    2: "שְׁתֵּי דַּקּוֹת",
    3: "שָׁלוֹשׁ דַּקּוֹת",
    4: "אַרְבַּע דַּקּוֹת",
    5: "חֲמִשָּׁה",
    6: "שֵׁשׁ דַּקּוֹת",
    7: "שֶׁבַע דַּקּוֹת",
    8: "שְׁמוֹנֶה דַּקּוֹת",
    9: "תֵּשַׁע דַּקּוֹת",
    10: "עֶשֶׂר דַּקּוֹת",
    11: "אַחַת עֶשְׂרֵה דַּקּוֹת",
    12: "שְׁתֵּים עֶשְׂרֵה דַּקּוֹת",
    13: "שְׁלוֹשׁ עֶשְׂרֵה דַּקּוֹת",
    14: "אַרְבַּע עֶשְׂרֵה דַּקּוֹת",
    16: "שֵׁשׁ עֶשְׂרֵה דַּקּוֹת",
    17: "שְׁבַע עֶשְׂרֵה דַּקּוֹת",
    18: "שְׁמוֹנֶה עֶשְׂרֵה דַּקּוֹת",
    19: "תְּשַׁע עֶשְׂרֵה דַּקּוֹת",
    20: "עֶשְׂרִים דַּקּוֹת",
    21: "עֶשְׂרִים וְאַחַת דַּקּוֹת",
    22: "עֶשְׂרִים וּשְׁתַּיִם דַּקּוֹת",
    23: "עֶשְׂרִים וְשָׁלוֹשׁ דַּקּוֹת",
    24: "עֶשְׂרִים וְאַרְבַּע דַּקּוֹת",
    25: "עֶשְׂרִים וְחָמֵשׁ דַּקּוֹת",
    26: "עֶשְׂרִים וְשֵׁשׁ דַּקּוֹת",
    27: "עֶשְׂרִים וְשֶׁבַע דַּקּוֹת",
    28: "עֶשְׂרִים וּשְׁמוֹנֶה דַּקּוֹת",
    29: "עֶשְׂרִים וָתֵשַׁע דַּקּוֹת",
    31: "שְׁלוֹשִׁים וְאַחַת דַּקּוֹת",
    32: "שְׁלוֹשִׁים וּשְׁתַּיִם דַּקּוֹת",
    33: "שְׁלוֹשִׁים וְשָׁלוֹשׁ דַּקּוֹת",
    34: "שְׁלוֹשִׁים וְאַרְבַּע דַּקּוֹת",
    36: "שְׁלוֹשִׁים וְשֵׁשׁ דַּקּוֹת",
    37: "שְׁלוֹשִׁים וְשֶׁבַע דַּקּוֹת",
    38: "שְׁלוֹשִׁים וּשְׁמוֹנֶה דַּקּוֹת",
    39: "שְׁלוֹשִׁים וָתֵשַׁע דַּקּוֹת",
    41: "אַרְבָּעִים וְאַחַת דַּקּוֹת",
    42: "אַרְבָּעִים וּשְׁתַּיִם דַּקּוֹת",
    43: "אַרְבָּעִים וְשָׁלוֹשׁ דַּקּוֹת",
    44: "אַרְבָּעִים וְאַרְבַּע דַּקּוֹת",
    46: "אַרְבָּעִים וְשֵׁשׁ דַּקּוֹת",
    47: "אַרְבָּעִים וְשֶׁבַע דַּקּוֹת",
    48: "אַרְבָּעִים וּשְׁמוֹנֶה דַּקּוֹת",
    49: "אַרְבָּעִים וָתֵשַׁע דַּקּוֹת",
    51: "חֲמִשִּׁים וְאַחַת דַּקּוֹת",
    52: "חֲמִשִּׁים וּשְׁתַּיִם דַּקּוֹת",
    53: "חֲמִשִּׁים וְשָׁלוֹשׁ דַּקּוֹת",
    54: "חֲמִשִּׁים וְאַרְבַּע דַּקּוֹת",
    56: "חֲמִשִּׁים וְשֵׁשׁ דַּקּוֹת",
    57: "חֲמִשִּׁים וְשֶׁבַע דַּקּוֹת",
    58: "חֲמִשִּׁים וּשְׁמוֹנֶה דַּקּוֹת",
    59: "חֲמִשִּׁים וָתֵשַׁע דַּקּוֹת"
};

// Minutes for "X to" format - ONLY special times (25, 20, 15, 10, 5 to)
const MINUTES_TO = {
    35: "עֶשְׂרִים וַחֲמִשָּׁה",    // 25 to
    40: "עֶשְׂרִים",              // 20 to
    50: "עֶשֶׂר",                 // 10 to
    55: "חָמֵשׁ"                  // 5 to
};

// Special minute expressions
const SPECIAL_MINUTES = {
    15: "וָרֶבַע",
    30: "וָחֵצִי",
    45: "רֶבַע"
};

// Day period suffixes
const DAY_PERIODS = {
    morning: "בַּבֹּקֶר",      // 05:00-11:59
    noon: "בַּצָּהֳרַיִם",      // 12:00-16:59
    evening: "בָּעֶרֶב",        // 17:00-20:59
    night: "בַּלַּיְלָה"       // 21:00-04:59
};

/**
 * Get day period suffix based on hour
 * @param {number} hour24 - Hour in 24-hour format (0-23)
 * @returns {string} - Hebrew day period suffix or empty string
 */
function getDayPeriod(hour24) {
    if (hour24 >= 5 && hour24 < 12) {
        return DAY_PERIODS.morning;
    } else if (hour24 >= 12 && hour24 < 17) {
        return DAY_PERIODS.noon;
    } else if (hour24 >= 17 && hour24 < 21) {
        return DAY_PERIODS.evening;
    } else if (hour24 >= 21 || hour24 < 5) {
        return DAY_PERIODS.night;
    }
    return "";
}

/**
 * Convert 24-hour to 12-hour format
 * @param {number} hour24 - Hour in 24-hour format (0-23)
 * @returns {number} - Hour in 12-hour format (1-12)
 */
function to12Hour(hour24) {
    if (hour24 === 0) return 12;
    if (hour24 > 12) return hour24 - 12;
    return hour24;
}

/**
 * Main function to format time in Hebrew with full niqqud
 * @param {number} hour24 - Hour in 24-hour format (0-23)
 * @param {number} minute - Minute (0-59)
 * @returns {string} - Hebrew time string with niqqud
 */
function formatHebrewTime(hour24, minute) {
    // Special case: Midnight
    if (hour24 === 0 && minute === 0) {
        return "חֲצוֹת";
    }
    
    // Special case: Noon
    if (hour24 === 12 && minute === 0) {
        return "שְׁתֵּים עֶשְׂרֵה בַּצָּהֳרַיִם";
    }
    
    let result = "";
    let hour12 = to12Hour(hour24);
    let nextHour = hour12 === 12 ? 1 : hour12 + 1;
    
    // Handle different minute cases
    if (minute === 0) {
        // Exact hour
        result = HOURS[hour12];
        
    } else if (minute === 15) {
        // Quarter past
        result = HOURS[hour12] + " " + SPECIAL_MINUTES[15];
        
    } else if (minute === 30) {
        // Half past
        result = HOURS[hour12] + " " + SPECIAL_MINUTES[30];
        
    } else if (minute === 45) {
        // Quarter to
        // Special case: Quarter to midnight
        if (hour24 === 23 && minute === 45) {
            result = SPECIAL_MINUTES[45] + " לַחֲצוֹת";
        } else {
            result = SPECIAL_MINUTES[45] + " לְ" + HOURS[nextHour];
        }
        
    } else if (minute >= 1 && minute <= 29) {
        // Minutes after the hour (excluding 15)
        result = HOURS[hour12] + " וְ" + MINUTES[minute];
        
    } else if (minute >= 31 && minute <= 59) {
        // Check if this is a special "to" time (35, 40, 50, 55)
        if (MINUTES_TO[minute]) {
            // Use "to" format for special times
            if (hour24 === 23) {
                result = MINUTES_TO[minute] + " לַחֲצוֹת";
            } else {
                result = MINUTES_TO[minute] + " לְ" + HOURS[nextHour];
            }
        } else {
            // Use "after" format for non-special times (31-34, 36-39, 41-44, 46-49, 51-54, 56-59)
            result = HOURS[hour12] + " וְ" + MINUTES[minute];
        }
    }
    
    // Add day period suffix (except for special times)
    if (!(hour24 === 0 && minute === 0) && !(hour24 === 12 && minute === 0)) {
        const period = getDayPeriod(hour24);
        if (period) {
            result += " " + period;
        }
    }
    
    return result;
}

/**
 * Update the clock display
 */
function updateClock() {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    
    // Update Hebrew time
    const hebrewTime = formatHebrewTime(hour, minute);
    document.getElementById('hebrewClock').textContent = hebrewTime;
    
    // Update digital time (HH:MM format)
    const digitalTime = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
    document.getElementById('digitalTime').textContent = digitalTime;
}

/**
 * Initialize theme
 */
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        document.querySelector('.theme-icon').textContent = '☀️';
    }
}

/**
 * Toggle theme
 */
function toggleTheme() {
    const body = document.body;
    const icon = document.querySelector('.theme-icon');
    
    body.classList.toggle('dark-theme');
    
    if (body.classList.contains('dark-theme')) {
        icon.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        icon.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    }
}

/**
 * Initialize the app
 */
function init() {
    // Set initial theme
    initTheme();
    
    // Update clock immediately
    updateClock();
    
    // Update every minute (at the start of each minute)
    const now = new Date();
    const delay = (60 - now.getSeconds()) * 1000 - now.getMilliseconds();
    
    setTimeout(() => {
        updateClock();
        setInterval(updateClock, 60000);
    }, delay);
    
    // Theme toggle button
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
}

// Start the app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
