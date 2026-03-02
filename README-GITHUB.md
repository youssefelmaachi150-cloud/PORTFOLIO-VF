# 📋 Comment uploader sur GitHub — étapes EXACTES

## ⚠️ Règle numéro 1 : respecter la structure des dossiers

Sur GitHub, vous devez avoir **exactement cette structure** :

```
votre-repo/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── main.js
│   └── base-url.js
├── images/
│   ├── logo-portfolio.png
│   ├── logo-nouveau.png
│   ├── hero/
│   │   ├── photo-profil-youssef.jpg
│   │   ├── logo-thales.png
│   │   ├── logo-uvsq.png
│   │   ├── logo-enp-promofi.png
│   │   ├── logo-groupe-bir.png
│   │   ├── logo-ldm.png
│   │   └── reality-h-thales.jpg
│   ├── hunters/
│   │   ├── hunters-poster.jpg
│   │   ├── equipe-podium.jpg
│   │   ├── competition-trophee.jpg
│   │   ├── competition-robot.jpg
│   │   ├── stand-competition-lyon.jpg
│   │   ├── pieces-usinees-nouvelle.jpg
│   │   ├── triangle-von-mises-v1.jpg
│   │   ├── triangle-maillage-v2.jpg
│   │   ├── triangle-von-mises-v2.jpg
│   │   └── ... (toutes les autres images hunters)
│   ├── sky-rotor/
│   │   └── ... (toutes les images sky-rotor)
│   ├── parcours/
│   ├── skills/
│   ├── certifications/
│   └── simulation-plaque/
├── hunters-vues-3d-robot.mp4
├── hunters-vues-eclatees.mp4
├── hunters-simulation-propulsion.mp4
├── hunters-cinematique-tir.mp4
├── hunters-dynamique-tir.mp4
├── hunters-essai-direction.mp4
├── hunters-essai-propulsion.mp4
├── hunters-essai-tir.mp4
├── hunters-competition-lyon.mp4
├── hunters-course-robot.mp4
├── hunters-fao-support-pattes.mp4
├── hunters-fao-triangle-haut.mp4
├── hunters-usinage-fao.mp4
├── sky-rotor-animation-rotation.mp4
├── sky-rotor-animation-collectif.mp4
├── sky-rotor-animation-cyclique.mp4
├── sky-rotor-animation-leadlag.mp4
├── sky-rotor-role-demo.mp4
├── sky-rotor-queue-tailrotor.mp4
├── sky-rotor-queue-tailrotor-2.mp4
└── sky-rotor-queue-tailrotor-3.mp4
```

## ✅ Méthode recommandée : GitHub Desktop

1. Téléchargez **GitHub Desktop** : https://desktop.github.com
2. Clonez votre repo en local
3. Copiez TOUS les fichiers dedans (en respectant les sous-dossiers)
4. Faites **Commit** puis **Push**

## ✅ Méthode web (pour les petits fichiers)

Sur github.com → votre repo → **Add file > Upload files**
- Glissez-déposez les fichiers **un dossier à la fois**
- Le chemin du fichier dans GitHub doit correspondre exactement

## ❌ Erreur fréquente

Ne pas uploader les images dans un sous-dossier différent.
Par exemple `images/hero/photo-profil-youssef.jpg` doit être dans
`images/` → `hero/` → `photo-profil-youssef.jpg`
et PAS directement à la racine.
