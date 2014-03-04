//(function() {
  //'use strict';\
  var settings = {
    gutter: 10,
    size: {
      width: 300,
      height: 210
    },
    windowHeight: $(window).height(),
    windowWidth: $(window).width()
  };

  function Photo( pIndex ) {
    this.pIndex = pIndex;
    this.size = this.calculateSize();

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
        $imageContainer = $('<div></div>')
          .addClass('my-photo')
          .css({
            left: _this.position.left,
            top: _this.position.top,
            width: _this.size.width,
            height: _this.size.height
          });

    $container.append($imageContainer);
  };

  function init() {
  	var settings = {
  		count: 3
  	};

    for ( var i = 0; i < settings.count; i++ ) {
      var photo = new Photo( i + 2 );
      photo.render();
    }
  };
//})()