# Holzis Holzkiste – PWA

Elf Holzspiele für Kinder in einer App. Jedes Spiel hat Level mit Altersangabe von „ab 4“ bis „12+“, dazu Profi-Ziel, Rekorde und Sterne.

| Spiel | Worum es geht |
|---|---|
| **Schieben** | Holzi muss unten durch den Schlitz (mit Bau-Modus und Lösbarkeits-Prüfung) |
| **Legen** | Tangram: 16 Figuren aus sieben Holzteilen, ab „Dreieck“ als Profi-Tangram (Tanne, Rakete, Hai, Beil …) |
| **Labyrinth** | Das Bienchen sucht den Weg durch die Rillen zum Honig, auch im Nebel |
| **Puzzle** | 12 Holzbilder mit geschwungenen Teilen (4 bis 100 Teile, Profis mit gedrehten Teilen) |
| **Sudoku** | Holz-Sudoku mit Birke, Kiefer, Kirsche & Co. statt Zahlen (4×4, 6×6, 9×9), auf Wunsch mit Zahlen |
| **Kreuzwort** | 10 Kreuzworträtsel rund um Baum, Wald, Werkstatt und Zimmerei, bis zum Profi-Rätsel „Holzmeister“ |
| **Wörter** | Wörter-Werkstatt: so viele Wörter wie möglich aus vorgegebenen Buchstaben bilden, erkannte Wörter zählen sofort |
| **Murmeln** | Rinnen drehen, bis die Murmel in Holzis Becher rollt. Punkte nach Bahngröße |
| **Turm** | Wackelturm mit echter Schwerkraft bis über die Fahne bauen |
| **Zimmerei** | Tierkunden bestellen Gebäude vom Hasenstall bis zum Rathaus: Balken zusägen, Holzverbindungen wählen, Fachwerk mit dem Kran aufrichten, Richtfest feiern, Zimmerei ausbauen |
| **Seifenkiste** | Rennen gegen Fuchs, Bär und Igel mit echter 3D-Fahrphysik, Eicheln sammeln und die Kiste in der Werkstatt aufrüsten |

## Aufbau

- **Startseite** mit allen Spielen in drei Gruppen (Knobeln & Legen, Wörter & Zahlen, Bauen & Fahren),
  Sternen je Spiel, Gesamtfortschritt und „Weiterspielen“.
- **Im Spiel:** Zurück-Knopf oben links (auch die Zurück-Taste von Android/Browser führt zur Startseite),
  „?“ für die Spielanleitung (erscheint beim ersten Öffnen eines Spiels von selbst),
  die Level-Wahl ist eine Zeile zum Aufklappen.
- **Tablet quer:** Spielfeld links, Level, Holzi, Knöpfe und Anleitung rechts.
  Die Spielfelder richten sich nach Breite **und** Höhe des Bildschirms.
- Die Spiel-Uhren halten an, wenn man zur Startseite geht oder die App in den Hintergrund legt.
- **Profile für mehrere Kinder** („Wer spielt?“ oben auf der Startseite): Name und Tier wählen, jedes Kind
  hat eigene Sterne, Rekorde und Spielstände. Das erste Profil übernimmt den bisherigen Spielstand.
  Technisch: Profil 1 nutzt die alten Speicher-Schlüssel `holzi-…`, weitere Profile `hz:p2:holzi-…`.
- **Statistik & Rangliste** (Knopf „Statistik“ auf der Startseite):
  Übersicht (Sterne, Level, Spielzeit, Serie, Siege, Abzeichen, zuletzt geschafft),
  Spiele (Fortschritt und Sterne je Level, Spielzeit, Rekorde), Verlauf (Spielzeit und
  geschaffte Level der letzten 14 Tage, Tageszeit), Rangliste der Kinder auf diesem Gerät
  (Treppchen, Titel, wer in welchem Spiel führt) und 16 Abzeichen.
  Spielzeit zählt nur, solange ein Spiel offen ist und in der letzten Minute getippt wurde.
  Alles bleibt auf dem Gerät (`holzi-stats` je Profil).

## Inhalt

| Datei | Zweck |
|---|---|
| `index.html` | Das komplette Spiel inkl. Startseite und Solver (läuft als Web Worker) |
| `fonts/` | Schriften Grandstander und Atkinson Hyperlegible (SIL Open Font License), lokal statt von Google |
| `manifest.webmanifest` | Name, Farben, Icons, Hochformat, Standalone-Modus |
| `sw.js` | Service Worker: speichert alles für den Offline-Betrieb |
| `icon-192.png`, `icon-512.png`, `maskable-512.png`, `apple-touch-icon.png` | App-Icons |
| `matter.min.js` | Physik-Bibliothek für den Wackelturm (matter-js 0.19, MIT-Lizenz) |
| `three.min.js` | 3D-Grafik für Zimmerei und Seifenkiste (three.js r128, MIT-Lizenz) |
| `cannon.min.js` | 3D-Physik für die Seifenkiste (cannon.js 0.6.2, MIT-Lizenz) |

## Lokal testen

```bash
cd holzi-pwa
python -m http.server 8000
# Browser: http://localhost:8000
```

Service Worker funktionieren nur über `https://` oder `localhost`, nicht per Doppelklick auf die Datei.

## Online stellen (kostenlos)

**GitHub Pages:** Neues Repository anlegen, den Inhalt dieses Ordners hochladen,
unter *Settings → Pages* den Branch `main` / Ordner `/ (root)` wählen.
Nach ein bis zwei Minuten läuft das Spiel unter `https://<name>.github.io/<repo>/`.

**Netlify Drop:** Den Ordner auf https://app.netlify.com/drop ziehen, fertig.

## Installieren

- **Android (Chrome):** Seite öffnen → Menü ⋮ → *App installieren* (oder *Zum Startbildschirm hinzufügen*).
  Holzi erscheint dann mit eigenem Icon im App-Drawer und startet ohne Browserleiste.
- **iPhone/iPad (Safari):** Teilen-Symbol → *Zum Home-Bildschirm*.
- **Windows/Mac (Chrome/Edge):** Installations-Symbol rechts in der Adressleiste.

Nach dem ersten Öffnen funktioniert das Spiel komplett offline. Es lädt nichts von fremden Servern,
auch die Schriften liegen in der App (`fonts/`).

## Echte Android-App (APK / Play Store)

Wenn die PWA unter einer https-Adresse online ist:

1. https://www.pwabuilder.com öffnen und die Adresse eingeben.
2. *Package for stores → Android* wählen. PWABuilder erzeugt eine Trusted Web Activity:
   ein `.apk` zum direkten Installieren (Sideload) und ein `.aab` für den Play Store.
3. Für den Play Store die mitgelieferte `assetlinks.json` unter `/.well-known/assetlinks.json`
   auf derselben Domain ablegen. Dann zeigt die App keine Browserleiste.

Ein Play-Store-Entwicklerkonto kostet einmalig 25 US-Dollar. Für die eigene Familie reicht das APK.

## Updates

Nach Änderungen an `index.html` in `sw.js` die Zeile `const VERSION = "holzi-v16";` hochzählen
(`holzi-v17` …). Sonst behalten installierte Geräte die alte Version im Cache.

## Quellen

Die Wortlisten der Wörter-Werkstatt sind aus der [deutschen Wortliste von davidak](https://github.com/davidak/wortliste) (GPL-3.0) und den [FrequencyWords von Hermit Dave](https://github.com/hermitdave/FrequencyWords) (CC-BY-SA-4.0) abgeleitet.
