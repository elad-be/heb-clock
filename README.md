# שעון מילים עברי - Hebrew Word Clock

A web application that displays the current time in Hebrew words with full niqqud (vocalization marks).

## Features

✨ **Full Niqqud** - All Hebrew words include complete vocalization marks  
🕐 **Real-Time Updates** - Clock updates every minute automatically  
🌓 **Dark/Light Theme** - Toggle between themes with persistent preference  
📱 **Responsive Design** - Works beautifully on all devices  
🎯 **Natural Hebrew** - Follows authentic Hebrew spoken time conventions  

## Time Examples

| Numeric Time | Hebrew Output |
|-------------|---------------|
| 05:30 | חָמֵשׁ וָחֵצִי בַּבֹּקֶר |
| 05:45 | רֶבַע לְשֵׁשׁ בַּבֹּקֶר |
| 08:15 | שְׁמוֹנֶה וָרֶבַע בַּבֹּקֶר |
| 12:00 | שְׁתֵּים עֶשְׂרֵה בַּצָּהֳרַיִם |
| 20:15 | שְׁמוֹנֶה וָרֶבַע בָּעֶרֶב |
| 00:00 | חֲצוֹת |
| 23:45 | רֶבַע לַחֲצוֹת בַּלַּיְלָה |

## Time Format Rules

### Exact Hour (HH:00)
- Shows hour name only
- Example: `08:00` → `שְׁמוֹנֶה`

### Quarter Past (HH:15)
- Format: `[hour] וָרֶבַע`
- Example: `08:15` → `שְׁמוֹנֶה וָרֶבַע`

### Half Past (HH:30)
- Format: `[hour] וָחֵצִי`
- Example: `05:30` → `חָמֵשׁ וָחֵצִי`

### Quarter To (HH:45)
- Format: `רֶבַע לְ[next hour]`
- Example: `05:45` → `רֶבַע לְשֵׁשׁ`

### Minutes After (1-29, excluding 15)
- Format: `[hour] וְ[minutes]`
- Example: `08:10` → `שְׁמוֹנֶה וְעֶשֶׂר דַּקּוֹת`

### Minutes Before (31-59, excluding 45)
- Format: `[minutes] לְ[next hour]`
- Example: `05:50` → `עֶשֶׂר לְשֵׁשׁ`

## Day Period Suffixes

| Time Range | Suffix | Translation |
|-----------|---------|-------------|
| 05:00-11:59 | בַּבֹּקֶר | in the morning |
| 12:00-16:59 | בַּצָּהֳרַיִם | at noon/afternoon |
| 17:00-20:59 | בָּעֶרֶב | in the evening |
| 21:00-04:59 | בַּלַּיְלָה | at night |

## Installation & Usage

### 📱 Mobile App Installation (PWA)

The Hebrew Word Clock is a Progressive Web App that can be installed on your mobile device:

#### iOS (iPhone/iPad)
1. Open http://localhost:8000 (or your deployed URL) in Safari
2. Tap the **Share** button (square with arrow pointing up)
3. Scroll down and tap **"Add to Home Screen"**
4. Name it "שעון עברי" and tap **Add**
5. The app icon will appear on your home screen

#### Android
1. Open the app URL in Chrome
2. Tap the **menu** (three dots) in the top-right
3. Tap **"Add to Home screen"** or **"Install app"**
4. Confirm the installation
5. The app will appear in your app drawer and home screen

#### Desktop (Chrome/Edge)
1. Visit the app URL in Chrome or Edge
2. Look for the install icon (⊕) in the address bar
3. Click **Install**

#### Features When Installed:
- ✅ Works offline
- ✅ Fullscreen experience (no browser UI)
- ✅ Appears like a native app
- ✅ Launches from home screen
- ✅ Proper notch/safe area support

**Note:** To generate app icons before deploying:
1. Open `generate-icons.html` in your browser
2. Download both icon files (192x192 and 512x512)
3. Place them in the app directory

### 🖥️ Local Development

#### Option 1: Local File
1. Download all files (`index.html`, `styles.css`, `script.js`)
2. Place them in the same folder
3. Open `index.html` in your web browser

### Option 2: Simple Web Server
```bash
# Using Python 3
python3 -m http.server 8000

# Using Node.js (with http-server)
npx http-server

# Then open: http://localhost:8000
```

### Option 3: Live Server (VS Code)
1. Install "Live Server" extension
2. Right-click `index.html`
3. Select "Open with Live Server"

## Technical Details

### Tech Stack
- **HTML5** - Semantic structure
- **CSS3** - Modern styling with CSS custom properties
- **Vanilla JavaScript** - No dependencies
- **PWA** - Progressive Web App with offline support
- **Service Worker** - Caching and offline functionality

### PWA Features
- 📦 Installable on mobile and desktop
- 🔌 Works offline after first visit
- 📱 Fullscreen app experience
- 🎯 Safe area support for notched devices
- 💾 Cached resources for instant loading

### Browser Support
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

### Performance
- Render time: <10ms
- No external API calls
- Minimal DOM manipulation
- Updates only once per minute

## Font Requirements

The app uses **Frank Ruhl Libre** font from Google Fonts, which includes excellent support for Hebrew niqqud. If the font doesn't load, it falls back to system Hebrew fonts.

## File Structure

```
hebrew-word-clock/
├── index.html              # Main HTML structure
├── styles.css              # Styling and themes
├── script.js               # Time conversion logic
├── manifest.json           # PWA manifest
├── service-worker.js       # Service worker for offline support
├── generate-icons.html     # Icon generator utility
├── icon-192.png           # App icon 192x192 (generate this)
├── icon-512.png           # App icon 512x512 (generate this)
└── README.md              # This file
```

## Customization

### Change Fonts
Edit the Google Fonts link in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Hebrew&display=swap" rel="stylesheet">
```

And update CSS:
```css
font-family: 'Noto Sans Hebrew', serif;
```

### Modify Colors
Edit CSS custom properties in `styles.css`:
```css
:root {
    --bg-color: #f5f5f7;
    --text-color: #1d1d1f;
    --accent-color: #0071e3;
}
```

### Adjust Font Size
Change the `clamp()` value in `.hebrew-time`:
```css
font-size: clamp(3rem, 8vw, 7rem);
```

## Known Edge Cases

✅ **Handled:**
- Midnight (00:00) → `חֲצוֹת`
- Noon (12:00) → `שְׁתֵּים עֶשְׂרֵה בַּצָּהֳרַיִם`
- Quarter to midnight (23:45) → `רֶבַע לַחֲצוֹת בַּלַּיְלָה`
- Minutes to midnight (23:50) → `עֶשֶׂר לַחֲצוֹת בַּלַּיְלָה`

## Testing

To test various times, you can temporarily modify the `updateClock` function in `script.js`:

```javascript
function updateClock() {
    // For testing: override with specific time
    const testHour = 23;
    const testMinute = 45;
    
    const hebrewTime = formatHebrewTime(testHour, testMinute);
    document.getElementById('hebrewClock').textContent = hebrewTime;
    // ...
}
```

## License

This project is open source and available for personal and educational use.

## Credits

Created according to PRD specifications for natural Hebrew time expressions with full niqqud support.
