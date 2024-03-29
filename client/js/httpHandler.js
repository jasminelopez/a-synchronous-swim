(function() {

  const serverUrl = 'http://127.0.0.1:8080';

  var input;

  const ajaxGetRequest = (input) => { 
    $.ajax({
      type: 'GET',
      url: serverUrl,
      //cache: false,
      //contentType: 'text/plain',
      success: (input) => {
        SwimTeam.move(input);
        console.log('Your team moved with ajax', input);
      }
    });
  };

  $('body').on('keydown', (event) => {
    var arrowPress = event.key.match(/Arrow(Up|Down|Left|Right)/);
    if (arrowPress) {
      var direction = arrowPress[1];
      SwimTeam.move(direction.toLowerCase());
      input = direction.toLowerCase()
      ajaxGetRequest(input);
      console.log('Got to bottom of keydown');
    }
  });
  
  console.log('Client is running in the browser!');

  /////////////////////////////////////////////////////////////////////
  // The ajax file uplaoder is provided for your convenience!
  // Note: remember to fix the URL below.
  /////////////////////////////////////////////////////////////////////

  const ajaxFileUpload = (file) => {
    var formData = new FormData();
    formData.append('file', file);
    $.ajax({
      type: 'POST',
      data: formData,
      url: serverUrl + '/background.jpg',
      cache: false,
      contentType: false,
      processData: false,
      success: () => {
        // reload the page
        window.location = window.location.href;
      }
    });
  };

  $('form').on('submit', function(e) {
    e.preventDefault();

    var form = $('form .file')[0];
    if (form.files.length === 0) {
      console.log('No file selected!');
      return;
    }

    var file = form.files[0];
    if (file.type !== 'image/jpeg') {
      console.log('Not a jpg file!');
      return;
    }

    console.log('file passed two checks', form.files);
    ajaxFileUpload(file); //this needs to go somewhere
  });

})();
