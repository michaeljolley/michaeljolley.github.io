/*globals jQuery, document */
(function($) {
  "use strict";

  $(document).ready(function() {
    // Responsive video embeds
    $(".entry-content").fitVids();

    // Navigation
    $("#menu-toggle").click(function() {
      var _this = $(this);
      _this
        .toggleClass("toggled-on")
        .attr(
          "aria-expanded",
          _this.attr("aria-expanded") === "false" ? "true" : "false"
        );
      $(".nav-menu").slideToggle();
    });
    $(window).bind("resize orientationchange", function() {
      if ($("#menu-toggle").is(":hidden")) {
        $("#menu-toggle")
          .removeClass("toggled-on")
          .attr("aria-expanded", "false");
        $(".nav-menu").removeAttr("style");
      }
    });

    // Scroll to top
    $("#top-link").on("click", function(e) {
      $("html, body").animate({ scrollTop: 0 });
      e.preventDefault();
    });

    let form = $("#commentform")[0];

    if (form) {
      // Set up any content editors
      document
        .querySelectorAll("div[contenteditable].plaintext")
        .forEach(function(editor) {
          // Set up the content editable div
          try {
            editor.contentEditable = "PLAINTEXT-ONLY";
          } catch (e) {
            // Firefox hack to prevent rich text from being pasted.
            editor.contentEditable = "true";
            editor.addEventListener("paste", function(e) {
              e.preventDefault();
              if (e.clipboardData && e.clipboardData.getData) {
                var text = e.clipboardData
                  .getData("text/plain")
                  .replace(/(?:\r\n|\r|\n)/g, "<br />");
                document.execCommand("insertHTML", false, text);
              } else if (window.clipboardData && window.clipboardData.getData) {
                var text = window.clipboardData.getData("Text");
                insertTextAtCursor(text);
              }
            });
          }

          var targetHiddenInput = $(`#${editor.dataset.target}`)[0];
          if (targetHiddenInput) {
            editor.oninput = e => {
              targetHiddenInput.value = e.target.innerText;
            };
          }
        });

      // Set up other stuff
      var emailRegex = /[^@\s]+@[^@\s]+\.[^@\s]+$/;
      var avatarPreview = $("#avatarPreview")[0];
      avatarPreview.onerror = e => {
        tryLoad(e.target, 1);
      };

      function changeAvatar() {
        let image = avatarPreview;
        image.possible = buildPossibleAvatars($("#identity").val());
        image.currentIndex = 0;
        tryLoad(image);
      }

      function tryLoad(image, increment) {
        if (increment) {
          image.currentIndex += increment;
        }

        if (image.currentIndex < image.possible.length) {
          image.src = image.possible[image.currentIndex];
        } else {
          image.onerror = null;
          image.src = image.dataset.fallbacksrc;
        }
      }

      function buildPossibleAvatars(identity) {
        let possibleAvatars = [];

        if (identity.match(emailRegex)) {
          possibleAvatars.push(
            "https://secure.gravatar.com/avatar/" +
              md5(identity) +
              "?s=80&d=identicon&r=pg"
          );
        } else {
          possibleAvatars.push("https://github.com/" + identity + ".png");
          possibleAvatars.push(
            "https://avatars.io/twitter/" + identity + "/medium"
          );
        }

        return possibleAvatars;
      }

      $("#identity").onchange = () => {
        changeAvatar();
      };

      function storeUser(name, identity) {
        window.localStorage.name = name;
        window.localStorage.identity = identity;
      }

      function retrieveUser(nameInput, identityInput, rememberCheckbox) {
        var rememberMe = false;
        if (window.localStorage.name) {
          nameInput.value = window.localStorage.name;
          rememberMe = true;
        }
        if (window.localStorage.identity) {
          identityInput.value = window.localStorage.identity;
          rememberMe = true;
        }
        if (rememberMe) {
          rememberCheckbox.checked = true;
        }
      }

      $("#commentbutton").click(function(e) {
        let button = $("#commentbutton");
        var status = $("#commentstatus");
        status.text("");

        var missing = Array.from(document.querySelectorAll("[data-required]"))
          .filter(el => el.value === "")
          .map(el => el.name);
        if (missing.length > 0) {
          status.text(
            "Some required fields are missing - (" + missing.join(", ") + ")"
          );
          return;
        }

        if (button.text() != "Confirm") {
          button.attr("title", "Click the button again to confirm the comment");
          button.addClass("confirm-button");
          button.text("Confirm");
          return;
        }

        var name = $("#name")[0];
        var identity = $("#identity")[0];

        if ($("#remember").prop("checked")) {
          storeUser(name.value, identity.value);
        } else {
          storeUser("", "");
        }
        $("#avatarInput").val(avatarPreview.src);

        identity.value = "";
        button.attr("disabled", "disabled");
        button.text("Posting...");
        button.removeClass("confirm-button");
        form.action = form.dataset.action;
        form.submit();
      });

      // Load values from Local Storage.
      retrieveUser($("#name")[0], $("#identity")[0], $("#remember")[0]);
      changeAvatar(); // initial load of avatar
    }
  });
})(jQuery);
