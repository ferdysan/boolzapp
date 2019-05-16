// Milestone 1
// Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
// Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e cliccando invia il testo viene aggiunto al thread sopra, come messaggio verde

// Milestone 2
// - Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.
// - Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)

// Milestone 3
// - Click sul contatto mostra la conversazione del contatto cliccato, è possibile inserire nuovi messaggi per ogni conversazione
// - Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato

$('.icona-destra-footer').click(function() {
   send_message();
});

//intercetto il testo invio
$(".input-messaggi").keypress(function(event) {
   if (event.which==13) {
      send_message();
   }
});

//INSERISCO TUTTO IL BLOCCO DI ISTRUZIONI IN UNA FUNZIONE PER RIUTILIZZARLA IN PIU' PARTI DEL CODICE
function send_message(){
  var messaggio_utente =$(".input-messaggi").val();
  //inserisco un controllo per dire che solo se ci sta qualcosa nell'input messaggi allora pubblico altrimenti no
  if($(".input-messaggi").val()!=0){
    //leggo il meggaggio inserito dall'messaggio_utente

    console.log(messaggio_utente);
    //copio la struttura del messaggio base
    var message_template =$('.container_messaggi.nascondi_template').clone();
    console.log(message_template);
    message_template.removeClass('nascondi_template');
    //COPIO NEL FIGLIO MESSAGGI DI CONTAINER_MESSAGGI IL MESSAGGIO RICEVUTO IN INPUT DALL'UTENTE
    message_template.addClass('destra').children('.messaggi').addClass('mine').html(messaggio_utente);
    // INDERISCO ORA LA VARIABILE message_template DENTRO LA MIA STRUTTURA HTML
    $('.contenitore_messaggi_veri').append(message_template);
    //RESETTO LA INPUT
    $(".input-messaggi").val('');
  }
}


//cambio l'icona al focus
$('.input-messaggi').focus(function(){
  $('.icona-destra-footer i').toggleClass('fa-microphone fa-arrow-circle-right');
}).blur(function() {
  $('.icona-destra-footer i').toggleClass('fa-microphone fa-arrow-circle-right');
});
