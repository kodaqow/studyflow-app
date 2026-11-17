# StudyFlow

![Node.js](https://img.shields.io/badge/Node.js-LTS-339933?style=flat&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-4.x-000000?style=flat&logo=express&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/Status-In%20Development-2563eb?style=flat)

**StudyFlow** je responzivní webová aplikace pro podporu výuky a efektivního samostudia, vytvořená jako ročníkový projekt. Cílem aplikace je sjednotit studijní materiály a interaktivní nástroje pro procvičování učiva na jedno místo.

---

## Hlavní funkce

Aplikace rozlišuje dvě uživatelské role s odlišnými oprávněními:

* **Lektor:** Zakládá kurzy, generuje unikátní přístupové kódy pro studenty, nahrává studijní podklady a vytváří sady kartiček či kvízové otázky.
* **Žák:** Připojuje se do kurzů pomocí kódu od lektora, prohlíží si materiály, procvičuje pojmy na otáčecích kartičkách a ověřuje své znalosti v kvízech.
* **Časovač Pomodoro:** Vestavěný nástroj přímo v rozhraní aplikace pro rozdělení studia do soustředěných časových bloků (25 minut práce / 5 minut pauza).

---

## Použité technologie

* **Frontend:** HTML5, CSS3 (vlastní proměnné a responzivní layout), Vanilla JavaScript (ES6+)
* **Backend:** Node.js, Express.js (REST API)
* **Databáze:** Relační SQL databáze
* **Autentizace a bezpečnost:** JSON Web Tokens (JWT), hashování hesel pomocí `bcryptjs`, správa konfigurace přes `dotenv`

---

## Struktura projektu

```text
studyflow-app/
├── database/              # SQL skripty a návrh databáze
├── docs/                  # Dokumentace a podklady k práci
├── node_modules/          # Lokální závislosti (ignorováno v Gitu)
├── public/                # Klientská část aplikace (frontend)
│   ├── assets/            # Obrázky, ikony a statické soubory
│   ├── css/
│   │   ├── base.css
│   │   └── landing-page.css
│   ├── html/
│   │   └── landing-page.html
│   ├── js/
│   │   └── landing-page.js
│   ├── lecturer/          # Stránky a rozhraní pro lektora
│   └── student/           # Stránky a rozhraní pro žáka
├── src/                   # Serverová část aplikace (backend)
│   ├── controllers/       # Aplikační logika endpointů
│   ├── db/                # Připojení k SQL databázi
│   ├── middleware/
│   │   ├── auth.js        # Ověření JWT tokenu
│   │   └── roles.js       # Kontrola uživatelské role
│   ├── routes/            # Definice API tras (rout)
│   ├── utils/             # Pomocné funkce
│   └── server.js          # Vstupní bod Express serveru
├── .env                   # Citlivé proměnné prostředí (ignorováno v Gitu)
├── .env.example           # Šablona proměnných prostředí
├── .gitignore             # Soubory a složky vyloučené z Gitu
├── package-lock.json      # Přesné verze nainstalovaných balíčků
├── package.json           # Konfigurace projektu a skripty
└── README.md              # Úvodní dokumentace repozitáře
```

---

## Lokální spuštění

Pro spuštění projektu na vlastním počítači je potřeba mít nainstalovaný **Node.js** (doporučená LTS verze).

1. **Naklonování repozitáře**
   ```bash
   git clone [https://github.com/VASE-JMENO/studyflow-app.git](https://github.com/TVOJE-JMENO/studyflow-app.git)
   cd studyflow-app
   ```

2. **Instalace závislostí**
   ```bash
   npm install
   ```

3. **Nastavení proměnných prostředí**
   Zkopíruj soubor `.env.example`, přejmenuj ho na `.env` a doplň vlastní tajný klíč pro podpis JWT tokenů:
   ```bash
   cp .env.example .env
   ```

4. **Spuštění serveru**
   * **Vývojový režim** (automatický restart při úpravě kódu přes `nodemon`):
```bash
npm run dev
```
   * **Produkční spuštění:**
```bash
npm start
```

Aplikace po spuštění běží na adrese `http://localhost:3000`.