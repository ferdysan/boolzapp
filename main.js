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
   setTimeout(risposta_pc, 1000);
});

//setto una funzione per rispondere automaticamente al mio messaggio
function risposta_pc(){
  var message_template =$('.container_messaggi.ricevuti.nascondi_template').clone();
  message_template.removeClass('nascondi_template');
  message_template.children('testo-messaggi').text('ok');
  $('.contenitore_messaggi_veri').append(message_template);
}

//intercetto il testo invio
$(".input-messaggi").keypress(function(event) {
   if (event.which==13) {
      send_message();
      setTimeout(risposta_pc, 1000);
   }
});

//INSERISCO TUTTO IL BLOCCO DI ISTRUZIONI IN UNA FUNZIONE PER RIUTILIZZARLA IN PIU' PARTI DEL CODICE
function send_message(){
  var messaggio_utente =$(".input-messaggi").val();
  //inserisco un controllo per dire che solo se ci sta qualcosa nell'input messaggi allora pubblico altrimenti no
  if($(".input-messaggi").val()!=0){

    //copio la struttura del messaggio base
    var message_template =$('.container_messaggi.inviati.nascondi_template').clone();

    message_template.removeClass('nascondi_template');
    //COPIO NEL FIGLIO MESSAGGI DI CONTAINER_MESSAGGI IL MESSAGGIO RICEVUTO IN INPUT DALL'UTENTE
    message_template.addClass('destra').children('.testo-messaggi').addClass('mine').html(messaggio_utente);
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


// INTEGRO LA RICERCA UTENTE



$('.cerca_utente').click(function(){
var ricerca_utente = $('.input-contatti').val();
  // seleziono gli li e al click metto a tutti il display none
  $('li').hide();

  $('li').each(function(){
    if (ricerca_utente.toLowerCase() == $(this).text().toLowerCase()) {
       $(this).show();
    }
  });


  //TEST RICERCA utente
  // (function(){
  //   var $contact =$('.contatti ul li');
  //   var $ricerca =$('input-contatti');
  //   var cache=[];
  //
  //   $contact.each(function(){
  //     cache.push({
  //      element : this,
  //      text: this.text().trim().toLowerCase()
  //     });
  //   });
  //
  //   function filter(){
  //     var query = this.value.trim().toLowerCase();
  //
  //     cache.forEach(function(li){
  //       var index =0;
  //       if(query){
  //         index=li.text.indexOf(query);
  //       }
  //       li.element.style.display =index === -1 ? 'none' : '';
  //     });
  //   }
  //   if('oninput' in $search[0]){
  //     $search.on('input', filter);
  //   }else{
  //     $search.one('keyup', filter);
  //   }
  // }());

  //RESETTO LA INPUT
  $(".input-contatti").val('');
});
