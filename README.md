# Genesys Queue Activity PoC - PKCE version

Static browser-only PoC that authenticates to Genesys Cloud using Authorization Code + PKCE and displays day-to-now Queue Activity style metrics.

## Setup

1. In Genesys Cloud, create OAuth Client:
   - Grant type: Code Authorization / PKCE
   - Redirect URI for local test: http://localhost:3000/
   - Redirect URI for Vercel: https://YOUR-VERCEL-DOMAIN.vercel.app/
   - Assign roles/permissions to the user who will log in. The app uses that user's permissions.

2. Edit `public/config.js`:
   - `clientId`
   - `redirectUri`
   - queues if needed

3. Run locally:

```bash
npm install
npm run dev
```

4. Open:

```text
http://localhost:3000/
```

## Notes

- No client secret is used in this version.
- Access token is stored only in browser session storage.
- This version calls Genesys Cloud APIs directly from the browser.
- For production usage, add proper access governance, permissions, deployment controls, and security review.
