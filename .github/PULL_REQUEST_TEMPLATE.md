## Wat en waarom

<!-- Wat verandert er en waarom. Link de issue of het ticket. -->

## Hoe getest

<!-- Commando's, schermen of URL's waarmee je het hebt gecontroleerd. "Draait lokaal" is geen test. -->

## Checklist

- [ ] Geen secrets, tokens of .env-waarden in de diff of in de commits
- [ ] Lockfile(s) bijgewerkt en consistent; geen tweede lockfile toegevoegd
- [ ] Nieuwe dependency nodig? Waarom, en is hij onderhouden?
- [ ] Database-migratie? Achterwaarts compatibel en getest op een kopie
- [ ] Wijzigt dit `.github/`, een Dockerfile of de deployroute? Benoem het hieronder
- [ ] De `security`-check is groen, of een onderdrukking heeft een reden en een herbeoordelingsdatum

## Deploy-impact

<!-- Wat moet er bij de release gebeuren: env-variabelen, migraties, volgorde. "Geen" mag. -->
