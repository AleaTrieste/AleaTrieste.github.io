# Alea-UI

parte front-end per il sito-web dell'associazione no-profit Alea.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build --configuration production` per buildare una versione da deployare (l'artefatto si trova nella cartella `dist`)

## Tests

Run `http-server -c-1` nel progetto buildato per avviare un server e testare

## Aggiungere modificare informazioni

per modificare informazioni inserite nel template, modificare i file in `src/assets`
<br>
`font` -> file per i font del sito<br>
`i18n` -> testo tradotto<br>
`img` -> immagini<br>

per modificare il contenuto del sito / aggiungere eventi / aggiungere immagini ...
dal progetto buildato andare nella cartella `assets`

<h2>per aggiungere un evento</h2>

in `.\assets\i18n` modificare entrambi i file json.<br>
aggiungere all'array `EVENTS` un nuovo oggetto copiandolo dal precdente<br>
<b>ATTENZIONE</b> il nuovo oggetto va aggiunto in fondo all'array<br>

<h4> come sono composti gli eventi EVENTS</h4>

`DATE` -> ultima data valida dell'evento, serve a comparare con `now` e decidere l'indice iniziale della locandina eventi.<br>
`IMAGE` -> path per l'immagine della locandina. (la cartella attuale è `./assets/img/events/`)<br>
`TITLE` -> titolo della locandina, visibile sopra l'immagine dell'evento<br>
`DESCRIPTION` -> descrizione della locandina visibile sopra l'immagine dell'evento<br>
`EXPANSION` -> array di oggetti che contiene le sezioni che vengono visualizzate quando si clicca sulla locandina dell'evento (vengono renderizzate dal componente `section-extension`)<br>

<h4>com'è composta la Descrizione DESCRIPTION</h4>

`TITLE` -> titolo di questa sezione.<br>
`INTRO` -> testo introduttivo visualizzabile fin da subito all'utente.<br>
`TEXT` -> probabilmente si può rimuovere.<br>
`IMAGE` -> immagine associata a questa sezione. (la cartella attuale è `./assets/img/`)<br>
`ALT_TEXT` -> testo visualizzabile nel caso non sia visibile l'immmagine o se si va in hover con il puntatore.<br>
`EXPANSION` -> array di oggetti che contiene le sezioni che vengono visualizzate quando si clicca sulla locandina dell'evento (vengono renderizzate dal componente `section-extension`)<br>

<h4>com'è composta la sezione dei giochi GAMES</h4>

`TITLE` -> titolo di questa sezione.<br>
`IMG_SRC` -> immagine associata a questa sezione. (la cartella attuale è `./assets/img/games/`)<br>
`EXPANSION` -> array di oggetti che contiene le sezioni che vengono visualizzate quando si clicca sulla locandina dell'evento (vengono renderizzate dal componente `section-extension`)<br>

<h4>com'è composto un oggetto di pop-up EXPANSION </h4>

`TEXT` -> testo di questo paragrafo
`IMAGE` -> percorso dell'immagine associata a questo paragrafo.<br>
`ALT_TEXT` -> testo visualizzabile nel caso non sia visibile l'immmagine o se si va in hover con il puntatore.<br>

