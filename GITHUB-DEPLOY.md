# 🚀 Guide déploiement GitHub Pages — Portfolio Youssef EL MAACHI

## ✅ Étape 1 — Modifiez le fichier `js/base-url.js`

Ouvrez le fichier `js/base-url.js` et remplacez les deux lignes :

```js
const GITHUB_USERNAME = 'VOTRE-USERNAME'; // ← mettez votre pseudo GitHub
const GITHUB_REPO     = 'VOTRE-REPO';     // ← mettez le nom de votre dépôt
```

**Exemple :** si votre URL GitHub Pages sera `https://youssef-elmaachi.github.io/portfolio/`
```js
const GITHUB_USERNAME = 'youssef-elmaachi';
const GITHUB_REPO     = 'portfolio';
```

---

## ✅ Étape 2 — Créez le dépôt GitHub

1. Allez sur [github.com](https://github.com) → **New repository**
2. Nom du dépôt : `portfolio` (ou ce que vous voulez)
3. Visibilité : **Public** ✅
4. Cliquez **Create repository**

---

## ✅ Étape 3 — Uploadez TOUS les fichiers

Dans votre dépôt, cliquez **"uploading an existing file"** et glissez-déposez :

```
index.html
css/style.css
js/main.js
js/base-url.js          ← NOUVEAU fichier important !
images/                 ← tout le dossier images/
hunters-*.mp4           ← toutes les vidéos hunters
sky-rotor-*.mp4         ← toutes les vidéos sky-rotor
```

> ⚠️ Les vidéos font parfois plus de 25 Mo → utilisez GitHub Desktop ou `git push` en ligne de commande si l'upload web bloque.

---

## ✅ Étape 4 — Activez GitHub Pages

1. Dans votre dépôt → **Settings** → **Pages**
2. Source : **Deploy from a branch**
3. Branch : **main** / **root**
4. Cliquez **Save**
5. Attendez ~2 minutes → votre site sera en ligne à :
   `https://VOTRE-USERNAME.github.io/VOTRE-REPO/`

---

## 🔧 Si les images ne s'affichent toujours pas

Vérifiez que dans `js/base-url.js` :
- `GITHUB_USERNAME` correspond exactement à votre pseudo GitHub (sensible à la casse)
- `GITHUB_REPO` correspond exactement au nom du dépôt (sensible à la casse)
