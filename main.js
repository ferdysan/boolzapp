// Milestone 1
// Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
// Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e cliccando invia il testo viene aggiunto al thread sopra, come messaggio verde

$('.fa-paper-plane').click(function() {
  //leggo il meggaggio inserito dall'messaggio_utente
  var messaggio_utente =$("input[type=text][name=messaggio_utente]").val();
  console.log(messaggio_utente);
  //copio la struttura del messaggio base
  var message_template =$('.container_messaggi').clone();

  message_template.removeClass('nascondi_template');
  //COPIO NEL FIGLIO MESSAGGI DI CONTAINER_MESSAGGI IL MESSAGGIO RICEVUTO IN INPUT DALL'UTENTE
  message_template.addClass('destra').children('messaggi').html(messaggio_utente);

  // INDERISCO ORA LA VARIABILE message_template DENTRO LA MIA STRUTTURA HTML
  $('.contenitore_messaggi_veri').append(message_template);

});

//SUGGERIMENTI DI CODICE DA PARTE DI SOFIA

//
// var message_template = $('.message_container.template').clone();
//
// message_template.removeClass('template');
//
// message_template.children('message').html('<p>lorem imsum</p>');
//
// $('.real_messages_container').append(message_template);
