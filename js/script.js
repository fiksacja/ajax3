console.log(`Warsztat - Pobierz dane po kliknięciu przycisku – jQuery`);

$(document).ready(function () {

    $('#get-data').click(function () {

        // wariant 1 za pomoca GET

        /*        $.get('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js')
                   .done(function(data) {
       
                       let pId = $('<p></p>').text(`Post ID: ${data.id}`);
                       let pUserId = $('<p></p>').text(`User ID: ${data.userId}`);
                       let pTitle = $('<p></p>').text(`Title: ${data.title}`);
                       let pBody = $('<p></p>').text(`Body: ${data.body}`);
                       let hr = $('<hr />');
       
                       let jqBody = $('body');
                       
                       jqBody.append(pId);
                       jqBody.append(pUserId);
                       jqBody.append(pTitle);
                       jqBody.append(pBody);
                       jqBody.append(hr);
       
                    //   console.log(pId);
                   })
       
                   .fail(function(error) {
                       console.error(error);
       
       
                   });
           });
       
       });
        */
        // wariant 2 z metoda GET JSON

        $.getJSON('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js')
            .done(function (data) {

                let pId = $('<p></p>').text(`Post ID: ${data.id}`);
                let pUserId = $('<p></p>').text(`User ID: ${data.userId}`);
                let pTitle = $('<p></p>').text(`Title: ${data.title}`);
                let pBody = $('<p></p>').text(`Body: ${data.body}`);
                let hr = $('<hr />');

                let jqBody = $('body');

                jqBody.append(pId);
                jqBody.append(pUserId);
                jqBody.append(pTitle);
                jqBody.append(pBody);
                jqBody.append(hr);

                //   console.log(pId);
            })

            .fail(function (error) {
                console.error(error);


            });
    });
});