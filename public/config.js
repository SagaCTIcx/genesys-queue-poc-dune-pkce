window.DUNE_CONFIG = {
  appTitle: 'Dune Queue Activity PoC - PKCE',
  genesysRegion: 'mypurecloud.ie',
  clientId: 'e6f47e59-cd46-4e5e-a60d-d88e2a7c0b9b',
  redirectUri: 'https://genesys-queue-poc-dune-pkce.vercel.app/',
  timezoneLabel: 'Europe/Belgrade',
  refreshSeconds: 60,
  queues: [
    { name: 'Card', id: '0815efc4-da90-4446-acf7-287205c24d77' },
    { name: 'General', id: 'ad89dec0-5f05-4d22-81bb-7b2cc67bbfa7' }
  ]
};
