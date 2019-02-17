Jolley.ready(function() {
  let form = Jolley.get('commentform')

  if (form) {

    // Set up any content editors
    document.querySelectorAll('div[contenteditable].plaintext').forEach(function(editor) {
      // Set up the content editable div
      try {
          editor.contentEditable="PLAINTEXT-ONLY";
      } catch(e) {
          // Firefox hack to prevent rich text from being pasted.
          editor.contentEditable="true"
          editor.addEventListener("paste", function(e) {
            e.preventDefault();
            if (e.clipboardData && e.clipboardData.getData) {
              var text = e.clipboardData.getData("text/plain").replace(/(?:\r\n|\r|\n)/g, '<br />')
              document.execCommand("insertHTML", false, text)
            } else if (window.clipboardData && window.clipboardData.getData) {
              var text = window.clipboardData.getData("Text")
              insertTextAtCursor(text)
            }
          })
      }

      var targetHiddenInput = Jolley.get(editor.dataset.target)
      if (targetHiddenInput) {
        editor.oninput = (e) => {
          targetHiddenInput.value = e.target.innerText
        }
      }
    })

    // Set up other stuff
    var emailRegex = /[^@\s]+@[^@\s]+\.[^@\s]+$/
    var avatarPreview = Jolley.get('avatarPreview')
    avatarPreview.onerror = (e) => { tryLoad(e.target, 1) }

    function changeAvatar() {
      let image = avatarPreview
      image.possible = buildPossibleAvatars(Jolley.get('identity').value)
      image.currentIndex = 0
      tryLoad(image)
    }

    function tryLoad(image, increment) {
      if (increment) {
        image.currentIndex += increment
      }

      if (image.currentIndex < image.possible.length) {
        image.src = image.possible[image.currentIndex]
      }
      else {
        image.onerror = null
        image.src = image.dataset.fallbacksrc;
      }
    }

    function buildPossibleAvatars(identity) {
      let possibleAvatars = []

      if (identity.match(emailRegex)) {
        possibleAvatars.push('https://secure.gravatar.com/avatar/' + md5(identity) + '?s=80&d=identicon&r=pg')
      } else {
        possibleAvatars.push('https://github.com/' + identity.replace('@','') + '.png')
        possibleAvatars.push('https://avatars.io/twitter/' + identity + '/medium')
      }

      return possibleAvatars
    }

    Jolley.get('identity').onchange = () => {
      changeAvatar()
    }

    function storeUser(name, identity) {
      window.localStorage.name = name;
      window.localStorage.identity = identity;
    }

    function retrieveUser(nameInput, identityInput, rememberCheckbox) {
      var rememberMe = false
      if (window.localStorage.name) {
        nameInput.value = window.localStorage.name;
        rememberMe = true
      }
      if (window.localStorage.identity) {
        identityInput.value = window.localStorage.identity;
        rememberMe = true
      }
      if (rememberMe) {
        rememberCheckbox.checked = true
      }
    }

    $('#commentbutton').click(function(e) {
      let button = $('#commentbutton');
      var status = $('#commentstatus')
      status.text('');

      var missing = Array.from(form.querySelectorAll('[data-required]')).filter(el => el.value === '').map(el => el.name);
      if (missing.length > 0) {
        status.text('Some required fields are missing - (' + missing.join(', ') + ')');
        return;
      }

      if (button.text() != 'Confirm') {
        button.attr('title', 'Click the button again to confirm the comment');
        button.addClass('confirm-button');
        button.text('Confirm');
        return;
      }

      var name = Jolley.get('name')
      var identity = Jolley.get('identity')

      if ($('#remember').prop('checked')) {
        storeUser(name.value, identity.value)
      }
      else {
        storeUser('', '')
      }
      $('#avatarInput').val(avatarPreview.src);

      identity.value = "";
      button.attr('disabled', 'disabled');
      button.text('Posting...');
      button.removeClass('confirm-button');
      form.action = form.dataset.action
      form.submit()
    });

    // Load values from Local Storage.
    retrieveUser(Jolley.get('name'), Jolley.get('identity'), Jolley.get('remember'))
    changeAvatar() // initial load of avatar
  }
})