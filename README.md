# Holzis Holzkiste – PWA

Achtzehn Holzspiele für Kinder in einer App. Jedes Spiel hat Level mit Altersangabe von „ab 4“ bis „12+“, dazu Profi-Ziel, Rekorde und Sterne.

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
| **Seifenkiste** | Rennen gegen Fuchs, Bär und Igel mit echter 3D-Fahrphysik auf 9 Strecken mit eigener Stimmung (Sommer, Wald, Berg, Festtag, Herbstlaub, Winter mit Glätte, Mondschein mit Laternen und Glühwürmchen); Startampel, Curbs, Banden, Wimpelketten, Zuschauer mit Fähnchen; orange Schwung-Pfeile, Schanzen und ein Turbo, den jede Eichel auflädt; Werkstatt mit 6 Karosserien (bis Badewanne, Fass, Rakete), Rädern, Achse, Bremse, Lenkung, Flügel, Farbe, Zierstreifen und Startnummer; Zeitfahren gegen den eigenen Geist (Bestfahrt); Tacho und Fortschrittsleiste |
| **Biberbau** (3D) | Als Biber Laubbäume annagen (Pappel, Weide, Birke, Erle; Eiche dauert, Fichten mag der Biber nicht), Stämme zum Damm tragen oder im Bach treiben lassen; das Wasser staut sich zum Teich, darin entsteht die Biberburg, und die Biberfamilie zieht ein. Steuerung per Antippen oder Joystick, 6 Level bis Frost-Zeitlimit, Hochwasser und Fuchs am Ufer |
| **Aufräumen** | Holzi schiebt Kisten auf ihre Plätze (Sokoban): 10 per Löser geprüfte Lager, Lösung zum Zuschauen |
| **Kiste füllen** | Holzteile lückenlos in eine Kiste legen (Polyomino/Pentomino), bis zu den 12 Pentominos im 6×10- und 8×8-Kasten |
| **Klötzchenregen** | Fallende Holzklötze aus 4 bis 8 Holzarten (jeder Klotz mindestens zweifarbig): volle Reihen verschwinden, vier gleiche Holzarten platzen, Kettenreaktionen, Astknoten-Level |
| **Forstbetrieb** (ab 12) | Wirtschaftsspiel: Wald kaufen, Baumarten passend zum Boden pflanzen, durchforsten, ernten, Holzmarkt, Sturm, Dürre, Borkenkäfer; Ausrüstung von Handsäge über Motorsäge bis Harvester und Forwarder; Wachstumskurven je Baumart (Höhe, Vorrat); Klimabaumarten Zerreiche, Orientbuche, Baumhasel; eigenes Sägewerk mit Schnittholz, Aufträgen und Ausbauten; Einführung „Erste Schritte“ und Vorschläge „Was jetzt?“; 6 Szenarien bis 60 Jahre |
| **Wortwald** | Wörter legen wie beim Scrabble, aber ohne Buchstabenwerte: Punkte für Länge und **Seltenheit** des Wortes (Rang in einer Häufigkeitsliste, 1–5 Blätter von „Alltagswort“ bis „Rarität“), **Naturwörter zählen doppelt, Wald- und Holzwörter (auch Waldtiere) dreifach**; auf dem Feld stehen Tannen (+5 beim Zudecken) und alte Eichen (Wort ×2). Tipps vom Zug-Sucher, drei Level allein mit Punktzielen, drei gegen Holzi (leicht/mittel/stark) |
| **Lückenrätsel** | 30 Rätsel über Wald, Tiere und Werkstatt: erst fehlende Buchstaben, dann ganze Wörter (mit Ablenkwörtern), am Ende „Wer bin ich?“ |

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
- **Münzen & Forschung** (Startseite → „Münzen & Forschung“): 10 Münzen je neuem Stern (Startguthaben für
  schon vorhandene Sterne), 2 je Sieg (höchstens 40 am Tag), dazu tägliches Einkommen. Vier Forschungspfade:
  Werkstatt (mehr pro Stern), Wald (pro Tag), Fleiß (pro Sieg, höhere Tagesgrenze) und Profi-Werkstätten,
  die je Spiel die schwersten Level freischalten. Level mit Sternen bleiben immer spielbar. Kaufen mit
  zweimal Tippen. Daten je Profil in `holzi-coins`.
- **Spielstand übertragen** („Wer spielt?“ → „⇄ Übertragen“): ein Kind als Datei (Teilen/AirDrop) oder als Text-Code
  (gzip + Base64) mitnehmen und auf dem anderen Gerät empfangen. Gibt es dort ein Kind mit gleichem Namen und Tier, wird
  zusammengeführt (Sterne je Level das Maximum, Rekorde das Bessere, Forschung vereinigt, Münzstand vom Gerät mit mehr
  verdienten Münzen, Statistik ohne Doppelte); sonst entsteht ein neues Kind. Kein Server, keine Anmeldung.
- **Kein Zoom-Gefängnis:** Pinch- und Doppeltipp-Zoom sind aus; ist die Seite doch vergrößert, erscheint „Normale Größe“.
- **Mitspieler-Übersicht:** Startseite zeigt die drei Besten; die Rangliste vergleicht alle Kinder über Sterne,
  Level, Münzen/Vermögen, Forschung, Spielzeit, Serie und Abzeichen (Krone für den Besten je Spalte).

## Inhalt

| Datei | Zweck |
|---|---|
| `index.html` | Das komplette Spiel inkl. Startseite und Solver (läuft als Web Worker) |
| `fonts/` | Schriften Grandstander und Atkinson Hyperlegible (SIL Open Font License), lokal statt von Google |
| `manifest.webmanifest` | Name, Farben, Icons, Hochformat, Standalone-Modus |
| `sw.js` | Service Worker: speichert alles für den Offline-Betrieb |
| `icon-192.png`, `icon-512.png`, `maskable-512.png`, `apple-touch-icon.png` | App-Icons |
| `matter.min.js` | Physik-Bibliothek für den Wackelturm (matter-js 0.19, MIT-Lizenz) |
| `three.min.js` | 3D-Grafik für Zimmerei, Seifenkiste und Biberbau (three.js r128, MIT-Lizenz) |
| `qrcode.js` | QR-Code für „Teilen“ auf der Startseite (qrcode-generator von Kazuhiko Arase, MIT-Lizenz) |
| `cannon.min.js` | 3D-Physik für die Seifenkiste (cannon.js 0.6.2, MIT-Lizenz) |
| `wortwald.txt` | Wörterbuch für den Wortwald (~78 000 Wörter mit 2–9 Buchstaben, häufige zuerst = Seltenheits-Rang); wird erst beim Öffnen des Spiels geladen. Lizenz und Quellen in `wortwald-lizenz.txt` |

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

Nach Änderungen an `index.html` in `sw.js` die Zeile `const VERSION = "holzi-v26";` hochzählen
(`holzi-v27` …). Sonst behalten installierte Geräte die alte Version im Cache.

## Quellen

Die Wortlisten der Wörter-Werkstatt sind aus der [deutschen Wortliste von davidak](https://github.com/davidak/wortliste) (GPL-3.0) und den [FrequencyWords von Hermit Dave](https://github.com/hermitdave/FrequencyWords) (CC-BY-SA-4.0) abgeleitet.

Das Wörterbuch des Wortwalds (`wortwald.txt`) ist aus [igerman98](https://www.j3e.de/ispell/igerman98/) von Björn Jacke (GPLv2/GPLv3, über [wooorm/dictionaries](https://github.com/wooorm/dictionaries)) erzeugt: alle Wortformen ausgeschrieben, Großbuchstaben, ß als SS, 2–9 Buchstaben, ein Filter für Schimpfwörter. Die Reihenfolge (Seltenheit) und ein Teil der zusammengesetzten Wörter stammen aus den FrequencyWords (CC-BY-SA-4.0). Details in `wortwald-lizenz.txt`.

## Forstbetrieb – Modell

Höhenwachstum je Baumart nach Chapman-Richards, angepasst an die Oberhöhen der Ertragstafeln
(EKl I, NW-FVA 2021, Näherung); Standort (Wasser/Nährstoff) skaliert die Bonität. Vorrat ≈ Formzahl × Höhe²
× Bestockung, Mischbestände +8 % und weniger Schadrisiko. Durchforsten senkt die Bestockung um 25 %, hebt
Qualität und Stabilität; überdichte Bestände verlieren Qualität. Risiken (Trockenheit, Borkenkäfer, Sturm,
Verbiss) steigen mit dem Klimawandel über die Spielzeit. Sägewerk: 1 Fm Rundholz → 0,6 m³ Schnittholz + 0,35 Fm
Nebenprodukte; es lohnt sich vor allem in langen Szenarien (Probespieler: Großforstbetrieb etwa +35 %, kurze Szenarien eher Verlust). Die Ziele der Szenarien sind mit zwei Probespielern
(passiv / klug wirtschaftend) abgestimmt.
