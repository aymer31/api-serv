<<<<<<< HEAD
# Ping API

Une API minimaliste en TypeScript qui fournit un endpoint `/ping` pour tester la connectivité du serveur et retourner les headers de la requête en format JSON.

## 📋 Description

Cette API répond aux spécifications suivantes:
- Retourne les **headers HTTP** en JSON au format structuré
- Dispose d'un endpoint `/ping` accessible via **GET**
- Port configurable via variable d'environnement `PING_LISTEN_PORT`
- Port par défaut: **3001**
- Inclut un endpoint `/stats` pour consulter les statistiques du serveur

## 🚀 Démarrage rapide

### Prérequis

- **Node.js** 16+ 
- **npm** 8+

### Installation

```bash
# Cloner ou télécharger le projet
cd api-serv

# Installer les dépendances
npm install
```

### Lancement

```bash
# Port par défaut (3001)
npm start

# Port personnalisé
PING_LISTEN_PORT=8000 npm start
```

Ou sur **Windows PowerShell**:
```powershell
$env:PING_LISTEN_PORT=8000; npm start
```

## 📡 Endpoints

### GET `/ping`

Retourne les headers HTTP de la requête en JSON.

**Réponse (200 OK):**
```json
{
  "host": "localhost:3001",
  "user-agent": "curl/7.64.1",
  "accept": "*/*",
  "connection": "keep-alive"
}
```

**Exemple:**
```bash
curl http://localhost:3001/ping
```

### GET `/stats`

Retourne les statistiques du serveur.

**Réponse (200 OK):**
```json
{
  "requestsProcessed": 42,
  "serverUptimeSeconds": 3600,
  "serverInstance": "DESKTOP-ABC123"
}
```

### Autres routes

Toute requête vers une route non définie retourne:

**Réponse (404 Not Found):**
```json
{
  "error": "Not Found"
}
```

## ⚙️ Configuration

### Variables d'environnement

| Variable | Description | Défaut |
|----------|-------------|--------|
| `PING_LISTEN_PORT` | Port d'écoute du serveur | `3001` |
| `INSTANCE_ID` | Identifiant de l'instance serveur | Nom de l'ordinateur |

### Fichier `.env`

```env
PING_LISTEN_PORT=3001
```

## 🏗️ Architecture

- **Langage:** TypeScript
- **Runtime:** Node.js
- **Framework:** HTTP natif (aucune dépendance externe)
- **Dépendances:** typescript, ts-node, @types/node

## 📁 Structure du projet

```
api-serv/
├── main.ts              # Code source principal
├── tsconfig.json        # Configuration TypeScript
├── package.json         # Dépendances et scripts
├── .env                 # Configuration locale
└── README.md           # Documentation
```

## 🧪 Tests manuels

```bash
# Tester l'endpoint /ping
curl -v http://localhost:3001/ping

# Tester l'endpoint /stats
curl -v http://localhost:3001/stats

# Tester un endpoint invalide (404)
curl -v http://localhost:3001/invalid
```

## 📝 Notes

- Le serveur compile et exécute le TypeScript automatiquement avec `ts-node`
- Les requêtes sont comptabilisées dans les statistiques
- L'uptime est calculé depuis le démarrage du serveur
- Tous les endpoints retournent du JSON avec le header `Content-Type: application/json`

## 📦 Installation des dépendances

Pour réinstaller les dépendances après avoir reçu le projet:

```bash
npm install
```

Cela installera automatiquement:
- `typescript` - Compilateur TypeScript
- `ts-node` - Exécution directe de fichiers TypeScript
- `@types/node` - Types TypeScript pour Node.js

---

**Version:** 1.0.0  
**License:** ISC
=======
# api-serv
>>>>>>> 7e72f52a55732a1698522bb8c8805f34fbe75911
