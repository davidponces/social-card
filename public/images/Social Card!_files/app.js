var require = meteorInstall({"imports":{"ui":{"NavBar":{"NavBarMenu":{"NavBarMenu.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/ui/NavBar/NavBarMenu/NavBarMenu.js                                                                        //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
module.export({
  default: () => NavBarMenu
});
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);

class NavBarMenu extends React.Component {
  render() {
    return React.createElement("div", {
      className: "navbar-menu"
    }, React.createElement("img", {
      className: "navbar-menu__img",
      src: "/images/profile-picture.jpg",
      alt: "Profile Icon"
    }), React.createElement("a", {
      className: "navbar-menu__link",
      href: "#"
    }, "David"), React.createElement("a", {
      className: "navbar-menu__link",
      href: "#"
    }, "P\xE1gina Inicial"), React.createElement("a", {
      className: "navbar-menu__link",
      href: "#"
    }, "Criar"));
  }

}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"NavBar.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/ui/NavBar/NavBar.js                                                                                       //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
module.export({
  default: () => NavBar
});
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let NavBarMenu;
module.link("./NavBarMenu/NavBarMenu", {
  default(v) {
    NavBarMenu = v;
  }

}, 1);
let SearchBar;
module.link("./SearchBar", {
  default(v) {
    SearchBar = v;
  }

}, 2);

class NavBar extends React.Component {
  render() {
    return React.createElement("div", {
      className: "navbar-container"
    }, React.createElement("div", {
      className: "navbar"
    }, React.createElement(SearchBar, null), React.createElement(NavBarMenu, null)));
  }

}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"SearchBar.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/ui/NavBar/SearchBar.js                                                                                    //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
module.export({
  default: () => SearchBar
});
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);

class SearchBar extends React.Component {
  render() {
    return React.createElement("div", {
      className: "search-bar"
    }, React.createElement("img", {
      className: "search-bar__logo",
      src: "https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/facebook-icon-18-256.png",
      alt: "Facebook Logo"
    }), React.createElement("div", {
      className: "search-bar-text"
    }, React.createElement("input", {
      className: "search-bar-text__input",
      type: "search",
      name: "",
      id: "",
      placeholder: "Pesquisa"
    }), React.createElement("img", {
      className: "search-bar-text__icon",
      src: "../../images/search-icon.svg",
      alt: "search-bar-icon"
    })));
  }

}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"SocialCard":{"SocialCard.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/ui/SocialCard/SocialCard.js                                                                               //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
module.export({
  default: () => SocialCard
});
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let SocialCardTitle;
module.link("./SocialCardTitle", {
  default(v) {
    SocialCardTitle = v;
  }

}, 1);
let SocialCardImage;
module.link("./SocialCardImage", {
  default(v) {
    SocialCardImage = v;
  }

}, 2);
let SocialCardInfo;
module.link("./SocialCardInfo", {
  default(v) {
    SocialCardInfo = v;
  }

}, 3);
let SocialCardInteraction;
module.link("./SocialCardInteraction", {
  default(v) {
    SocialCardInteraction = v;
  }

}, 4);

class SocialCard extends React.Component {
  render() {
    return React.createElement("div", {
      className: "social-card"
    }, React.createElement(SocialCardTitle, null), React.createElement(SocialCardImage, null), React.createElement(SocialCardInfo, null), React.createElement(SocialCardInteraction, null));
  }

}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"SocialCardImage.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/ui/SocialCard/SocialCardImage.js                                                                          //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
module.export({
  default: () => SocialCardImage
});
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);

class SocialCardImage extends React.Component {
  render() {
    return React.createElement("div", {
      className: "social-card-img-container"
    }, React.createElement("img", {
      className: "social-card-img",
      src: "/images/social-card-img.jpg",
      alt: "Social Card Image"
    }));
  }

}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"SocialCardInfo.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/ui/SocialCard/SocialCardInfo.js                                                                           //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
module.export({
  default: () => SocialCardInfo
});
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);

class SocialCardInfo extends React.Component {
  render() {
    return React.createElement("div", {
      className: "social-card-info-container"
    }, React.createElement("div", {
      className: "social-card-info"
    }, React.createElement("p", {
      className: "social-card-info__title"
    }, "DOMING, 2/06 \xC0S 18:30"), React.createElement("p", {
      className: "social-card-subtitle"
    }, "Ant\xF3nio Dam\xE1sio: Cerebro, Corpo, e a Naturalidade da Consci\xEAncia"), React.createElement("div", {
      className: "social-card-people__container"
    }, React.createElement("img", {
      className: "social-card-info__img",
      src: "/images/diana-profile.jpg",
      alt: "Avatar Logos"
    }), React.createElement("img", {
      className: "social-card-info__img",
      src: "/images/profile-picture.jpg",
      alt: "avatar logo"
    }), React.createElement("span", {
      className: "social-card-info__people"
    }, "Diana, Diogo e outros 17 amigos"))), React.createElement("div", {
      className: "social-card-button-star-container"
    }, React.createElement("img", {
      className: "social-card-star__icon",
      src: "/images/star-24.ico",
      alt: "star logo"
    }), React.createElement("span", {
      className: "social-card-star__text"
    }, "Com Interesse")));
  }

}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"SocialCardInteraction.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/ui/SocialCard/SocialCardInteraction.js                                                                    //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
module.export({
  default: () => SocialCardInteraction
});
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);

class SocialCardInteraction extends React.Component {
  render() {
    return React.createElement("div", null, React.createElement("div", null, React.createElement("div", null, React.createElement("img", {
      src: "",
      alt: "Gosto Icon"
    }), React.createElement("p", null, "Gosto")), React.createElement("div", null, React.createElement("img", {
      src: "",
      alt: "Comentar Icon"
    }), React.createElement("p", null, "Comentar")), React.createElement("div", null, React.createElement("img", {
      src: "",
      alt: "Partilhar Icon"
    }), React.createElement("p", null, "Partilhar"))), React.createElement("div", null, React.createElement("img", {
      src: "",
      alt: ""
    }), React.createElement("div", null, React.createElement("input", {
      type: "text"
    }), React.createElement("img", {
      src: "",
      alt: "emoji logo"
    }), React.createElement("img", {
      src: "",
      alt: "camera logo"
    }), React.createElement("img", {
      src: "",
      alt: "gif logo"
    }), React.createElement("img", {
      src: "",
      alt: "sticker logo"
    }))));
  }

}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"SocialCardTitle.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/ui/SocialCard/SocialCardTitle.js                                                                          //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
module.export({
  default: () => SocialCardTitle
});
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);

class SocialCardTitle extends React.Component {
  render() {
    return React.createElement("div", {
      className: "social-card-title"
    }, React.createElement("div", {
      className: "social-card-title-container"
    }, React.createElement("img", {
      className: "social-card-title__img",
      src: "/images/diana-profile.jpg",
      alt: "Diana Oliveira Avatar"
    }), React.createElement("div", {
      className: "social-card-title__text"
    }, React.createElement("a", {
      className: "social-card-title__link",
      href: ""
    }, "Diana Oliveira"), ' ', "tem interesse num evento.", React.createElement("div", {
      className: "social-card-title__text__container"
    }, React.createElement("span", {
      className: "social-card-title__paragraph"
    }, " 34 mins. \u2022"), React.createElement("img", {
      className: "social-card__public-icon",
      src: "/images/world.png",
      alt: "Public Icon"
    })))), React.createElement("div", {
      className: "social-card-title__more-button"
    }, "..."));
  }

}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"App.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// imports/ui/App.js                                                                                                 //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let NavBar;
module.link("./NavBar/NavBar", {
  default(v) {
    NavBar = v;
  }

}, 1);
let SocialCard;
module.link("./SocialCard/SocialCard", {
  default(v) {
    SocialCard = v;
  }

}, 2);

const App = () => React.createElement("div", null, React.createElement(NavBar, null), React.createElement(SocialCard, null));

module.exportDefault(App);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"client":{"main.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// client/main.js                                                                                                    //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 1);
let render;
module.link("react-dom", {
  render(v) {
    render = v;
  }

}, 2);
let App;
module.link("../imports/ui/App", {
  default(v) {
    App = v;
  }

}, 3);
Meteor.startup(() => {
  render(React.createElement(App, null), document.getElementById('react-target'));
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json",
    ".html",
    ".scss",
    ".jsx"
  ]
});

var exports = require("/client/main.js");