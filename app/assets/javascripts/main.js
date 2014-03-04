//(function() {
  //'use strict';\
  var settings = {
    gutter: 10,
    size: {
      width: 300,
      height: 210
    },
    windowHeight: $(window).height(),
    windowWidth: $(window).width(),
    resource: ["https://mail.google.com/mail/ca/u/0/?ui=2&ik=a11958858d&view=att&th=1448bf558e17803f&attid=0.9&disp=safe&zw", "https://mail.google.com/mail/ca/u/0/?ui=2&ik=a11958858d&view=att&th=1448bf558e17803f&attid=0.5&disp=safe&zw", "https://mail.google.com/mail/ca/u/0/?ui=2&ik=a11958858d&view=att&th=1448bf558e17803f&attid=0.7&disp=safe&zw","https://mail.google.com/mail/ca/u/0/?ui=2&ik=a11958858d&view=att&th=1448bf558e17803f&attid=0.3&disp=safe&zw","https://mail.google.com/mail/ca/u/0/?ui=2&ik=a11958858d&view=att&th=1448bf558e17803f&attid=0.1&disp=safe&zw"
    ]
  };

  function Photo( pIndex , resource) {
    this.pIndex = pIndex;
    this.size = this.calculateSize();
    this.resource =  resource;

    // Placed after size is calculated
    this.position = this.calculatePosition();

    return this;
  };


  Photo.prototype.calculateSize = function() {
    var size = $.extend({}, settings.size);
   
    if ( this.pIndex === 2 ) {
      size.width = size.width * 3;
      size.height = size.height * 3;
    }

    return size;
  };

  Photo.prototype.calculatePosition = function() {
    var top = ( settings.windowHeight - this.size.height ) / 2,
        left = ( settings.windowWidth - settings.size.width * 3 ) / 2;

    if (this.pIndex < 2) {
      left = left - settings.size.width - settings.gutter;
    }

    if (this.pIndex > 2) {
      left = left + settings.size.width * 3 + settings.gutter + ( this.pIndex - 3 ) * ( settings.gutter + settings.size.width );
    }

    return {
      top: top,
      left: left
    };
  };

  Photo.prototype.render = function() {
    var $container = $('main'), 
        _this = this,
        url = 'url(' + _this.resource + ')',
        $imageContainer = $('<div></div>')
          .addClass('my-photo')
          .css({
            left: _this.position.left,
            top: _this.position.top,
            width: _this.size.width,
            height: _this.size.height,
            backgroundImage: url
          });

    $container.append($imageContainer);
  };

  

  function init() {

    for ( var i = 0; i < 3 ; i++ ) {
      var photo = new Photo( i + 2 , settings.resource[i]);
      photo.render();
    }
  };




//})()