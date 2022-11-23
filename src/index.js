// import createTopic and addIdea from functions/logic

let topics = ["summer camps", "weekend coding projects"]

// on load: renderTopics(), renderBlankIdeasPanel()



const newTopicBtn = document.getElementById('newTopicBtn')
const topicList = document.getElementById('topicList')

const topic = document.createElement('div')
topic.classList.add('topic')

newTopicBtn.addEventListener('click', createTopicInput)



function renderTopics(){
    topics.forEach(item => {
        topic.innerText = item; 
        topicList.appendChild(topic);
    })
}

function createTopicInput(){
    let newTopicInput = document.createElement('input')
    newTopicInput.type.add('text');
    newTopicInput.classList.add('topicInput');
    newTopicInput.id = 'topicInput'
    newTopicInput.addEventListener("keyup", addNewTopic)
    topicList.appendChild(newTopicInput)
}


renderTopics()


function addNewTopic() {
    let newTopicInputText = document.getElementById('topicInput').value;
    topics.push(newTopicInputText)
    renderTopics()
}




// const addNewTopic = (inputText) => {
//     topics.push({
//         topic,
//         ideaList: [],
//     })
// }

    // createTopicInput();

    // add new div in the form of an input field, add enter functionality to this field
    // upon enter, add input to topics list
    // then call render function to turn input field into div





