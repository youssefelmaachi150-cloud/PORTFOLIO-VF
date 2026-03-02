/**
 * base-url.js — Correction automatique des chemins pour GitHub Pages
 * Place ce script AVANT tout autre script dans <head>
 */
(function () {
    // Détecte si on est sur GitHub Pages (username.github.io/repo/)
    const path = window.location.pathname; // ex: /mon-repo/index.html
    const host = window.location.hostname; // ex: username.github.io

    if (!host.endsWith('github.io')) return; // Pas sur GitHub Pages → rien à faire

    // Extrait le nom du repo depuis le chemin
    // pathname = "/nom-repo/" ou "/nom-repo/index.html"
    const parts = path.split('/').filter(Boolean);
    const repo = parts[0] || '';

    if (!repo) return;

    // Injecte un <base href> qui préfixe tous les chemins relatifs automatiquement
    const base = document.createElement('base');
    base.href = `https://${host}/${repo}/`;
    document.head.insertBefore(base, document.head.firstChild);
})();
