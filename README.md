# Notch

Cypress automation test of wearenotch page

# Upute za instalaciju i pokretanje testova u projektu Notch

Ove upute opisuju kako instalirati projekt Notch, instalirati potrebne alate pomoću npm-a i pokrenuti testove u Cypress-u.

## Kloniranje repozitorija

1. Klonirajte repozitorij s GitHub-a na lokalno računalo:

   ```bash
   git clone https://github.com/babic743/Notch.git
   cd Notch

   ```

2. Instalacija npm paketa
   Instalirajte npm pakete koji su potrebni za projekt:

```bash
npm install
```

3. Instalacija Cypressa

````bash
  npm install cypress --save-dev
    ```

4. Pokretanje testova
```bash
  npx cypress open
````

Ova naredba će pokrenuti Cypress i otvoriti interaktivno sučelje gdje možete odabrati i pokrenuti testove.

Dodatne napomene
Testovi: Testovi se nalaze u direktoriju cypress/e2e. Možete dodavati, uređivati ili brisati testove prema potrebi.
Konfiguracija: Konfiguracija Cypress-a nalazi se u cypress.json. Podesite opcije prema vašim zahtjevima.
Dokumentacija: Za detaljnije informacije o korištenju Cypress-a pogledajte Cypress dokumentaciju.

```

```
