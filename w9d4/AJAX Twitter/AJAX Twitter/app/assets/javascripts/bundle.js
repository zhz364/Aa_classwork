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
/******/ 	return __webpack_require__(__webpack_require__.s = "./frontend/twitter.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./frontend/follow_toggle.js":
/*!***********************************!*\
  !*** ./frontend/follow_toggle.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

class FollowToggle{
    //ifs = initial_follow_state
    constructor(data){
        // console.log(data)
        data = (data.dataset)
        this.userId = data.userId;
        // debugger
        if(data.initialFollowState === "true"){
            this.followState='followed'  
        }else{
            this.followState='unfollowed'
        }
        console.log(this)
        // this.followState = data.initialFollowState;
        // console.log(this.userId)
        this.render();
        this.handleClick = this.handleClick.bind(this);
        $(".follow-toggle").on("click", this.handleClick)
    }

    render(){
        console.log("in render")
        if(this.followState==="following" || this.followState==="unfollowing"){
            console.log("we disabled the prop")
            $(".follow-toggle").prop({"disabled":true})
        }
        else{
            $(".follow-toggle").empty()
            $(".follow-toggle").prop({ "disabled": false })
            if (this.followState === "followed") {
                $(".follow-toggle").append("Unfollow!")
            }
            else{
                $(".follow-toggle").append("Follow!")
            }
        }
    }

    handleClick(event){
        // debugger
        event.preventDefault();
        if(this.followState==="unfollowed"){
            this.followState = 'following'
            this.render();
            $.ajax({
                url: `/users/${this.userId}/follow`,
                method: "POST",
                dataType: 'JSON'
            }).then(() => {
                this.followState = 'followed'
                this.render()
            });
        }else{
            this.followState = 'unfollowing'
            this.render();
            $.ajax({
                url: `/users/${this.userId}/follow`,
                method: "DELETE",
                dataType: 'JSON'
            }).then(() => {
                this.followState = 'unfollowed'
                this.render()
            });
        }
        
    }

}
module.exports = FollowToggle;

/***/ }),

/***/ "./frontend/twitter.js":
/*!*****************************!*\
  !*** ./frontend/twitter.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const FollowToggle = __webpack_require__(/*! ./follow_toggle.js */ "./frontend/follow_toggle.js")
const UsersSearch = __webpack_require__(/*! ./users_search.js */ "./frontend/users_search.js")
$(() => {
    // let data = $(".follow-toggle")
    // console.log(data)
    // let follow = new FollowToggle(data); 
    $(".follow-toggle").each((index,ele) => new FollowToggle(ele));
    let data = $(".users-search")
    console.log(data)
    $(".users-search").each((index, ele) => new UsersSearch(ele));
});


/***/ }),

/***/ "./frontend/users_search.js":
/*!**********************************!*\
  !*** ./frontend/users_search.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

class UsersSearch {
    constructor(data){
        console.log(data)
        this.$data = data;
        this.input = ""
        let that = this;
        // console.log(this.$data.user-search-input)
        $('.user-search-input').on("input", function(event){
            that.input += this.value;
            $('.users').text(this.value)
            //grab all users (input)
            //for each user    user.include(str+=this.value)
            //if yes, push to new array
            //for each user in array. create new li and output name with follow button 
        })
    }

    handleInput(){
        
    }
    //keypress

}


module.exports = UsersSearch;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map