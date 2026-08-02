# IdeenGames Website

> **Minigames mit Liebe zum Detail** – Die offizielle Website für das Minecraft-Projekt IdeenGames auf Cytooxien.net

---

## 📌 Über das Projekt

IdeenGames ist ein Minecraft-Minigames-Projekt, das auf dem **Cytooxien.net**-Server als Realm gehostet wird. Diese Website dient dazu, das Projekt zu präsentieren und neue Spieler auf den Discord und den Server zu bringen.

### ✨ Besonderheiten

- ✅ **Eigene Maps** – Spezial für IdeenGames erstellt oder individuell angepasst
- ✅ **Eigene Skript-Systeme** – Alles basiert auf selbst geschriebenen Skripten (keine Plugins!)
- ✅ **Regelmäßige Updates** – Ständige Verbesserungen und neue Inhalte
- ✅ **Community-Mitbestimmung** – Die Community stimmt über neue Maps und Inhalte ab

---

## 🚀 Wie kann ich mitspielen?

1. **Minecraft starten** – Öffne Minecraft Java Edition (Version **1.21.11+**)
2. **Cytooxien.net betreten** – Verbinde dich mit dem Server `cytooxien.net`
3. **Realm-Kompass öffnen** – Drücke `F3 + G` oder nutze den Realm-Kompass
4. **IdeenGames auswählen** – Wähle den Realm **IdeenGames** aus der Liste aus

---

## 📁 Projektstruktur

```
IdeenGames-Website/
├── index.html          # Hauptseite
├── impressum.html      # Impressum
├── datenschutz.html    # Datenschutzerklärung
├── README.md           # Diese Datei
│
├── css/
│   ├── style.css       # Hauptstile (Variablen, Layout, Komponenten)
│   ├── animations.css  # Animationen (Fade-In, Slide-Up, Hover, etc.)
│   └── responsive.css  # Responsive Design (Mobile, Tablet, Desktop)
│
├── js/
│   └── script.js       # Vanilla JavaScript (Navigation, Lightbox, Scroll-Effekte)
│
└── assets/
    ├── images/         # Galerie-Bilder
    │   ├── galerie-1.jpg
    │   ├── galerie-2.jpg
    │   └── ...
    ├── icons/          # Icons (falls benötigt)
    ├── logo.svg        # IdeenGames Logo
    └── favicon.ico     # Favicon
```

---

## 🎨 Design

### Farben

| Farbe | Hex-Code | Verwendung |
|-------|----------|------------|
| Hintergrund | `#070B12` | Dunkles Theme |
| Akzent Lila | `#7C4DFF` | Primäre Akzentfarbe |
| Akzent Cyan | `#38BDF8` | Sekundäre Akzentfarbe |
| Text Primär | `#FFFFFF` | Haupttext |
| Text Sekundär | `#E0E0E0` | Nebentext |

### Design-Richtung

- 🌙 **Dunkles Theme** – Modernes, dunkles Farbschema
- 💎 **Glassmorphism** – Glaseffekte mit Unschärfe
- 🌈 **Neon-Effekte** – Leuchtende Akzente
- ✨ **Animationen** – Weiche Übergänge, Hover-Effekte, Scroll-Animationen
- 📱 **Responsive** – Optimiert für Handy, Tablet und Desktop

---

## 🛠 Technologien

- **HTML5** – Semantisches HTML
- **CSS3** – Moderne Stile mit Flexbox, Grid, Animationen
- **Vanilla JavaScript** – Keine Frameworks, reine Vanilla JS

### ❌ Nicht verwendet

- ❌ Bootstrap
- ❌ Tailwind CSS
- ❌ React
- ❌ Vue
- ❌ jQuery
- ❌ Andere Frameworks/Libraries

---

## 📦 Features

### 🎯 Hauptfunktionen

| Feature | Beschreibung |
|---------|--------------|
| **Responsive Navigation** | Sticky Navigation mit Mobile-Menu |
| **Hero Section** | Große Hero-Section mit Call-to-Action-Buttons |
| **Server-Anleitung** | Schritt-für-Schritt-Anleitung zum Beitreten |
| **Features** | Vorstellung der Besonderheiten |
| **Galerie** | Bildgalerie mit Lightbox |
| **FAQ** | Häufig gestellte Fragen |
| **Discord Widget** | Integration des Discord-Widgets |
| **Back to Top** | Button zum Zurückscrollen |

### 🎭 Animationen

- **Fade In** – Elemente erscheinen sanft
- **Slide Up** – Elemente gleiten von unten nach oben
- **Hover-Effekte** – Buttons, Karten und Links reagieren auf Hover
- **Glow-Effekte** – Neon-Glow für Buttons und Karten
- **Parallax** – Hintergrund-Animationen
- **Scroll Reveal** – Elemente erscheinen beim Scrollen
- **Smooth Scroll** – Sanftes Scrollen zu Ankerpunkten

### 📱 Responsive Design

- **Desktop** – Volle Breite, optimale Darstellung
- **Tablet** – Angepasste Layouts für mittlere Bildschirme
- **Handy** – Mobile-optimiert mit Hamburger-Menu

---

## 🚀 Deployment

### GitHub Pages

1. **Repository klonen**
   ```bash
   git clone https://github.com/McAffe13/Ideengames-website.git
   cd Ideengames-website
   ```

2. **Änderungen vornehmen** (optional)
   - Bilder in `assets/images/` austauschen
   - Texte in den HTML-Dateien anpassen
   - Farben in `css/style.css` ändern

3. **Auf GitHub pushen**
   ```bash
   git add .
   git commit -m "Update Website"
   git push origin main
   ```

4. **GitHub Pages aktivieren**
   - Gehe zu **Settings → Pages**
   - Wähle **Branch: `main`** und **Folder: `/ (root)`**
   - Klicke auf **Save**

5. **Website aufrufen**
   - Die Website ist unter `https://McAffe13.github.io/Ideengames-website/` verfügbar

---

## 📝 Anpassungen

### Bilder austauschen

1. **Echte Bilder hochladen**
   - Ersetze die SVG-Platzhalter in `assets/images/` mit echten Bildern
   - Bilder sollten im Format **16:9** (z. B. 1920x1080) sein
   - Unterstützte Formate: `.jpg`, `.png`, `.webp`

2. **Bildnamen anpassen**
   - Die HTML-Datei verweist auf:
     - `galerie-1.jpg` bis `galerie-6.jpg`
   - Falls du mehr Bilder hast, passe die `index.html` an

### Texte anpassen

- **Hero-Titel/Untertitel**: `index.html` (Zeile ~50-60)
- **Server-Anleitung**: `index.html` (Zeile ~100-130)
- **Features**: `index.html` (Zeile ~140-180)
- **FAQ**: `index.html` (Zeile ~250-300)
- **Discord-Info**: `index.html` (Zeile ~310-340)

### Farben anpassen

Öffne `css/style.css` und ändere die CSS-Variablen:

```css
:root {
    --accent-purple: #7C4DFF;  /* Ändere hier die Lila-Farbe */
    --accent-cyan: #38BDF8;    /* Ändere hier die Cyan-Farbe */
    --bg-primary: #070B12;     /* Ändere hier den Hintergrund */
    /* ... */
}
```

---

## 🔧 JavaScript-Funktionen

| Funktion | Beschreibung |
|----------|--------------|
| `initMobileNavigation()` | Mobile Navigation (Hamburger-Menu) |
| `initScrollEffects()` | Scroll-Effekte (Navigation, Back-to-Top) |
| `initScrollAnimation()` | Scroll-Animationen (AOS) |
| `initLightbox()` | Galerie-Lightbox |
| `initNavigationHighlight()` | Navigation-Highlight beim Scrollen |
| `initLazyLoading()` | Lazy Loading für Bilder |
| `initDiscordWidget()` | Discord Widget Integration |
| `initParticles()` | Partikel-Animation im Hintergrund |

---

## 📊 Browser-Unterstützung

| Browser | Unterstützt |
|---------|-------------|
| Chrome | ✅ Ja |
| Firefox | ✅ Ja |
| Safari | ✅ Ja |
| Edge | ✅ Ja |
| Opera | ✅ Ja |
| Mobile (iOS/Android) | ✅ Ja |

---

## 🤝 Mitwirken

1. **Forken** – Erstelle einen Fork dieses Repositories
2. **Änderungen vornehmen** – Arbeite in einem neuen Branch
3. **Pull Request erstellen** – Sende deine Änderungen zur Überprüfung

### Beitragsrichtlinien

- ✅ **Sauberer Code** – HTML, CSS, JS sollten gut strukturiert sein
- ✅ **Kommentare** – Wichtige Code-Abschnitte kommentieren
- ✅ **Responsive** – Alle Änderungen müssen auf allen Geräten funktionieren
- ✅ **Keine Frameworks** – Nur Vanilla HTML, CSS, JS
- ❌ **Keine Bootstrap/Tailwind** – Nur reines CSS

---

## 📄 Rechtliches

- **Impressum**: [impressum.html](impressum.html)
- **Datenschutz**: [datenschutz.html](datenschutz.html)

---

## 📞 Kontakt

- **Discord**: [https://discord.gg/sVFsuaKJCG](https://discord.gg/sVFsuaKJCG)
- **Server**: Cytooxien.net → Realm-Kompass → IdeenGames

---

## 🏆 Credits

- **Design & Entwicklung**: IdeenGames Team
- **Inspiration**: Moderne Gaming-Websites
- **Technologien**: HTML5, CSS3, Vanilla JavaScript

---

## 📅 Changelog

### v1.0.0 (2025-XX-XX)
- ✅ Erste Version der IdeenGames Website
- ✅ Alle Seiten (Home, Impressum, Datenschutz) erstellt
- ✅ Responsive Design für alle Geräte
- ✅ Animationen und Effekte hinzugefügt
- ✅ Galerie mit Lightbox
- ✅ Discord Widget Integration

---

## 🎉 Danke!

Vielen Dank, dass du die IdeenGames Website besuchst! 🎮✨

> **"Minigames mit Liebe zum Detail"** – IdeenGames
