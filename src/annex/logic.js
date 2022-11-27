import { topics } from ".."
import { renderHeading, renderTopics } from "./render";


export const createTopic = (topicText) => {
    topics.push({
        topicText,
        ideas: [],
        active: true,
    })
    renderTopics();
    // renderIdeas();
}

export const addIdea = (ideaText) => {
    activeTopic().ideas.push({
        ideaText
    })
}

export function activeTopic(){
    let activeTopicArray = topics.filter(topic => topic.active);
    return activeTopicArray[0]
}

export function switchActiveTopic(index){
    _clearActiveTopics();
    topics[index].active = true;
    renderHeading();


}


function _clearActiveTopics(){
    topics.forEach(topic => topic.active = false);
}