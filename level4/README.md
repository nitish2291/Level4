# Level 4 — Restaurant Website

## 🚀 Project Overview

Static site built with Astro.
Menu is generated via script and rendered dynamically with filters (Veg Mode).

---

## 📦 Setup (First Time Only)

```bash
npm install
```

---

## ▶️ Run the App

```bash
npm run dev
```

Open:

```
http://localhost:4321
```

---

## 🧠 Important Folder Rules

| Folder    | Purpose                      | Accessible via URL |
| --------- | ---------------------------- | ------------------ |
| `/public` | Static assets (images, PDFs) | ✅ YES              |
| `/src`    | Code, JSON, components       | ❌ NO               |

👉 Example:

* `/public/menu.pdf` → works at `/menu.pdf`
* `/src/content/menu.pdf` → **404**

---

## 📄 Full Menu PDF

Place file here:

```
/public/menu.pdf
```

Access via:

```html
<a href="/menu.pdf" target="_blank">Browse Full Menu</a>
```

---

## 🧾 Menu JSON (Auto Generated)

Menu lives at:

```
/src/content/menu.json
```

DO NOT edit manually if using generator.

---

## ⚙️ Generate Menu JSON

Script:

```
/scripts/generateMenu.js
```

### Run it:

```bash
node scripts/generateMenu.js
```

---

## ⚠️ Common Errors (You Already Hit These)

### 1. `require is not defined`

Fix:

```js
import fs from "fs";
```

Reason:

* Project uses `"type": "module"`

---

### 2. Wrong working directory

❌ Don’t run from `/src`

✔ Always run from root:

```bash
node scripts/generateMenu.js
```

---

### 3. Images not loading

Ensure images exist:

```
/public/images/menu/
```

Required:

```
soup.jpg
drinks.jpg
starters.jpg
tandoor-veg.jpg
tandoor-nonveg.jpg
chinese.jpg
biryani.jpg
curry.jpg
rice.jpg
dal.jpg
bread.jpg
thali.jpg
default.jpg
```

---

## 🥗 Veg Mode Filter Logic

* Hides:

  * `nonveg`
  * `egg`
* Shows:

  * `veg`

👉 Works automatically for all categories (including Thali)

---

## 🧱 Menu Structure (Important)

Keep categories separate:

* Veg Starters
* Non-Veg Starters
* Tandoor (Veg)
* Tandoor (Non-Veg)
* Chinese
* Biryani
* Main Course
* Thali

❌ Don’t mix veg + nonveg in same category

---

## 🎯 Key Design Decisions

* Images assigned at **category level**
* JSON contains `image` per item (no runtime mapping)
* Filtering done via DOM (not re-rendering)

---

## 🧪 Dev Workflow

1. Update `/scripts/generateMenu.js`
2. Run:

   ```bash
   node scripts/generateMenu.js
   ```
3. Refresh browser

---

## 🧨 Things That Will Break If You Forget

* PDF inside `/src` → 404
* Missing images → broken UI
* Mixing categories → filter bugs
* Editing JSON manually → gets overwritten

---

## 📈 Future Improvements (Optional)

* Search (with highlight + category awareness)
* Class-based filtering (remove inline styles)
* Lazy load images
* Popular / Recommended tagging

---

## 🧠 Bottom Line

* Data → controlled via script
* UI → driven by JSON
* Assets → must be in `/public`

Keep it simple. Don’t over-engineer.
