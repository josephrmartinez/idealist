/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// import createTopic and addIdea from functions/logic\n\nlet topics = [\"summer camps\", \"weekend coding projects\"]\n\n// on load: renderTopics(), renderBlankIdeasPanel()\n\n\n\nconst newTopicBtn = document.getElementById('newTopicBtn')\nconst topicList = document.getElementById('topicList')\n\nconst topic = document.createElement('div')\ntopic.classList.add('topic')\n\nnewTopicBtn.addEventListener('click', createTopicInput)\n\n\n\nfunction renderTopics(){\n    topics.forEach(item => {\n        topic.innerText = item; \n        topicList.appendChild(topic);\n    })\n}\n\nfunction createTopicInput(){\n    let newTopicInput = document.createElement('input')\n    newTopicInput.type.add('text');\n    newTopicInput.classList.add('topicInput');\n    newTopicInput.id = 'topicInput'\n    newTopicInput.addEventListener(\"keyup\", addNewTopic)\n    topicList.appendChild(newTopicInput)\n}\n\n\nrenderTopics()\n\n\nfunction addNewTopic() {\n    let newTopicInputText = document.getElementById('topicInput').value;\n    topics.push(newTopicInputText)\n    renderTopics()\n}\n\n\n\n\n// const addNewTopic = (inputText) => {\n//     topics.push({\n//         topic,\n//         ideaList: [],\n//     })\n// }\n\n    // createTopicInput();\n\n    // add new div in the form of an input field, add enter functionality to this field\n    // upon enter, add input to topics list\n    // then call render function to turn input field into div\n\n\n\n\n\n\n\n//# sourceURL=webpack://idealist/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;