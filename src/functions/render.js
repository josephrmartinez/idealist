import { topics } from ".."
import { activeTopic, switchActiveTopic } from "./logic";
// import { createTopicBtnListeners } from "./dynamicListeners";


const topicList = document.getElementById('topicList')



export function renderTopics(){
    _clearTopics();
    topics.forEach((item, index) => {
        const topic = document.createElement('div')
        topic.classList.add('topic')
        topic.dataset.value = index;
        topic.innerText = item.topicText;
        topic.addEventListener('click', switchActiveTopic(index)) 
        topicList.appendChild(topic);
    })
}

function _clearTopics(){
    topicList.innerHTML = '';
}


export function renderHeading(){
    console.log('render heading called')
    const topicTitle = document.getElementById('topicTitle')
    topicTitle.textContent = activeTopic().topicText
}

export function renderIdeas(){
    activeTopic().ideas 

}