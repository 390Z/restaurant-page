/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/navigation.js":
/*!**************************************!*\
  !*** ./src/components/navigation.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst loadNav = () => {\n    const nav = document.createElement('nav');\n    const navBar = document.createElement('ul');\n\n    nav.classList.add('topnav');\n\n    const navItems = ['HOME', 'ABOUT', 'MENU', 'GALLERY', 'CONTACT']\n    \n    for (let i = 0, n = navItems.length; i < n; i++) {\n        const navItem = document.createElement('li');\n        const navAnchor = document.createElement('a')\n\n        navAnchor.setAttribute('href', `#${navItems[i]}`)\n        navAnchor.innerHTML = navItems[i];\n        navAnchor.id = navItems[i].toLowerCase();\n        navItem.appendChild(navAnchor);\n        navBar.appendChild(navItem);\n    }\n\n    nav.appendChild(navBar);\n\n    return nav;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (loadNav);\n\n//# sourceURL=webpack:///./src/components/navigation.js?");

/***/ }),

/***/ "./src/components/screen.js":
/*!**********************************!*\
  !*** ./src/components/screen.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst loadScreen = () => {\n    const container = document.createElement('div');\n    container.classList.add('screen');\n\n    return container;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (loadScreen);\n\n//# sourceURL=webpack:///./src/components/screen.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_navigation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/navigation.js */ \"./src/components/navigation.js\");\n/* harmony import */ var _components_screen_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/screen.js */ \"./src/components/screen.js\");\n/* harmony import */ var _tabs_home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs/home.js */ \"./src/tabs/home.js\");\n/* harmony import */ var _tabs_about_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs/about.js */ \"./src/tabs/about.js\");\n/* harmony import */ var _tabs_menu_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabs/menu.js */ \"./src/tabs/menu.js\");\n/* harmony import */ var _tabs_gallery_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs/gallery.js */ \"./src/tabs/gallery.js\");\n/* harmony import */ var _tabs_contact_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs/contact.js */ \"./src/tabs/contact.js\");\n\n\n\n\n\n\n\n\n\n\nconst content = document.querySelector('#content');\n\nconst nav = Object(_components_navigation_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nconst screen = Object(_components_screen_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\nconst home = Object(_tabs_home_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\nconst about = Object(_tabs_about_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\nconst menu = Object(_tabs_menu_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\nconst gallery = Object(_tabs_gallery_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\nconst contact = Object(_tabs_contact_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n\ncontent.appendChild(nav);\ncontent.appendChild(screen);\n\nconst updateScreen = (tab) => {\n    screen.innerHTML = '';\n    screen.appendChild(tab);\n}\n\nnav.addEventListener('click', e => {\n    if (e.target.id) {\n        updateScreen(eval(e.target.id));\n    }\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/tabs/about.js":
/*!***************************!*\
  !*** ./src/tabs/about.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst loadAbout = () => {\n    const about = document.createElement('div');\n    \n    const title = document.createElement('h1');\n    title.innerHTML = 'About Us';\n    about.appendChild(title);\n\n    const text = [\n        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',\n        'Dictum varius duis at consectetur lorem donec massa sapien faucibus. Nibh nisl condimentum id venenatis a condimentum vitae. Vitae tempus quam pellentesque nec. Orci sagittis eu volutpat odio facilisis mauris sit amet. At imperdiet dui accumsan sit amet. Ut pharetra sit amet aliquam. Diam vulputate ut pharetra sit amet. Nulla posuere sollicitudin aliquam ultrices sagittis orci a. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Nullam ac tortor vitae purus faucibus ornare suspendisse sed. Integer quis auctor elit sed vulputate mi sit amet mauris. Tincidunt augue interdum velit euismod in pellentesque massa placerat duis. Pellentesque habitant morbi tristique senectus et netus et malesuada. Et egestas quis ipsum suspendisse ultrices gravida dictum fusce. Malesuada proin libero nunc consequat. Adipiscing diam donec adipiscing tristique. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum.',\n        'Ac tortor dignissim convallis aenean et tortor at. Interdum velit euismod in pellentesque massa. Quis viverra nibh cras pulvinar mattis nunc. Aliquet risus feugiat in ante metus dictum at tempor commodo. Volutpat sed cras ornare arcu dui vivamus arcu. Laoreet sit amet cursus sit amet dictum sit amet. Mi proin sed libero enim sed faucibus. Vulputate odio ut enim blandit volutpat maecenas volutpat. Quam pellentesque nec nam aliquam sem et tortor consequat id. Mattis molestie a iaculis at erat. Consequat nisl vel pretium lectus quam. Aliquet enim tortor at auctor urna. Et ultrices neque ornare aenean euismod elementum nisi quis eleifend. Diam volutpat commodo sed egestas egestas fringilla. Malesuada fames ac turpis egestas maecenas pharetra convallis posuere. Non enim praesent elementum facilisis. Quis imperdiet massa tincidunt nunc. Ullamcorper dignissim cras tincidunt lobortis feugiat.'\n    ];\n    text.forEach(item => {\n        const p = document.createElement('p');\n        p.innerHTML = item;\n        about.appendChild(p);\n    })\n\n    return about;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (loadAbout);\n\n//# sourceURL=webpack:///./src/tabs/about.js?");

/***/ }),

/***/ "./src/tabs/contact.js":
/*!*****************************!*\
  !*** ./src/tabs/contact.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst loadContact = () => {\n    const contact = document.createElement('div');\n\n    const title = document.createElement('h1');\n    title.innerHTML = 'Contact Info';\n    contact.appendChild(title);\n\n    const info = [\n        'Phone: 123-456-7890',\n        'E-mail: manager@mssushi.com'\n    ];\n    info.forEach(item => {\n        const p = document.createElement('p');\n        p.innerHTML = item;\n        contact.appendChild(p);\n    })\n\n    return contact;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (loadContact);\n\n//# sourceURL=webpack:///./src/tabs/contact.js?");

/***/ }),

/***/ "./src/tabs/gallery.js":
/*!*****************************!*\
  !*** ./src/tabs/gallery.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst loadGallery = () => {\n    const gallery = document.createElement('div');\n\n    const galleryItems = [{\n        img: './images/gallery/sushi-1.jpg',\n        desc: 'A tasty roll 1'\n    }, {\n        img: './images/gallery/sushi-2.jpg',\n        desc: 'A tasty roll 2'\n    }, {\n        img: './images/gallery/sushi-3.jpg',\n        desc: 'A tasty roll 3'\n    }, {\n        img: './images/gallery/sushi-4.jpg',\n        desc: 'A tasty roll 4'\n    }, {\n        img: './images/gallery/sushi-5.jpg',\n        desc: 'A tasty roll 5'\n    }, {\n        img: './images/gallery/sushi-6.jpg',\n        desc: 'A tasty roll 6'\n    }, {\n        img: './images/gallery/sushi-7.jpg',\n        desc: 'A tasty roll 7'\n    }, {\n        img: './images/gallery/sushi-8.jpg',\n        desc: 'A tasty roll 8'\n    }]\n\n    for (let i = 0, n = galleryItems.length; i < n; i++) {\n        const image = document.createElement('img');\n        const imgSrc = galleryItems[i].img;\n        image.src = imgSrc;\n\n        const description = document.createElement('div');\n        const desc = galleryItems[i].desc;\n        const descText = document.createTextNode(`${desc}`);       \n        description.appendChild(descText);\n\n        const responsive = document.createElement('div');\n        const galleryItem = document.createElement('div');\n        galleryItem.appendChild(image);\n        galleryItem.appendChild(description);\n        responsive.appendChild(galleryItem);\n        responsive.classList.add('responsive');\n        galleryItem.classList.add('gallery');\n        gallery.appendChild(responsive);        \n    }\n\n    return gallery;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (loadGallery);\n\n//# sourceURL=webpack:///./src/tabs/gallery.js?");

/***/ }),

/***/ "./src/tabs/home.js":
/*!**************************!*\
  !*** ./src/tabs/home.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst loadHome = () => {\n    const home = document.createElement('div');\n\n    const bgImage = document.createElement('div');\n    bgImage.classList.add('bg-image');\n\n    const text = document.createElement('div');\n    const title = document.createElement('h2');\n    const subtitle = document.createElement('h3');\n    title.innerHTML = 'MS Sushi'\n    subtitle.innerHTML = 'Japanese Restaurant'\n    text.appendChild(title)\n    text.appendChild(subtitle);\n\n    home.appendChild(bgImage);\n    home.appendChild(text);\n\n    return home;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (loadHome);\n\n//# sourceURL=webpack:///./src/tabs/home.js?");

/***/ }),

/***/ "./src/tabs/menu.js":
/*!**************************!*\
  !*** ./src/tabs/menu.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst loadMenu = () => {\n    const menu = document.createElement('div');\n    \n    const menuItems = [{\n        name: 'Rainbow Roll',\n        desc: 'california roll topped with fresh fish & avocado',\n        price: 10.95\n    }, {\n        name: 'Dragon Roll',\n        desc: 'eel avocado roll topped with avocado',\n        price: 12.95\n    }, {\n        name: 'Kamikaze Roll',\n        desc: 'shrimp tempura avocado roll topped with crunch & spicy tuna'\n    }, {\n        name: 'Lady in Red Roll',\n        desc: 'spicy tuna Roll topped with tuna',\n        price: 10.95\n    }, {\n        name: 'Spicy Crispy Crunch',\n        desc: 'deep fried spicy tuna avocado roll topped with crab & masago',\n        price: 11.95\n    }, {\n        name: 'Rose Garden Roll',\n        desc: 'tuna roll topped with spicy tuna, mango, avocado, crunch & masago',\n        price: 14.95\n    }]\n    \n    for (let i = 0, x = menuItems.length; i < x; i++) {\n        let obj = menuItems[i];\n        const ul = document.createElement('ul');\n\n        for (let property in obj) {\n            const li = document.createElement('li');\n            li.innerHTML = obj[property];\n            ul.appendChild(li);\n        }\n        \n        const menuItem = document.createElement('div');\n        menuItem.appendChild(ul);\n        menu.appendChild(menuItem);\n    }\n\n    return menu;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (loadMenu);\n\n//# sourceURL=webpack:///./src/tabs/menu.js?");

/***/ })

/******/ });