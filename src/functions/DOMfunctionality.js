import { topics } from "..";
import { createTopic } from "./logic";
import { renderTopics } from "./render";

export const newTopicDOM = (() => {
    const newTopicBtn = document.querySelector('#newTopicBtn')
    const topicList = document.getElementById('topicList')

    function createNewTopicInput(){
        let newTopicInput = document.createElement('input')
        newTopicInput.type = 'text';
        newTopicInput.classList.add('topicInput');
        newTopicInput.id = 'topicInput'
        newTopicInput.addEventListener("keydown", _addNewTopic)
        topicList.appendChild(newTopicInput)
        newTopicInput.focus()
    }

    function _addNewTopic(eventObj) {
        if (eventObj.keyCode===13) {
            let newTopicInputText = document.getElementById('topicInput').value;
            createTopic(newTopicInputText)
        }
    }
    return {
        newTopicBtn,
        createNewTopicInput
    };
})();
