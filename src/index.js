// import createTopic and addIdea from functions/logic

let topics = ["summer camps", "weekend coding projects"]


const newTopicBtn = document.getElementById('newTopicBtn')
const topicList = document.getElementById('topicList')

newTopicBtn.addEventListener('click', createTopicInput)


function renderTopics(){
    topicList.innerHTML = '';
    topics.forEach(item => {
        const topic = document.createElement('div')
        topic.classList.add('topic')
        topic.innerText = item; 
        topicList.appendChild(topic);
    })
}

function createTopicInput(){
    console.log('function called')
    let newTopicInput = document.createElement('input')
    newTopicInput.type = 'text';
    newTopicInput.classList.add('topicInput');
    newTopicInput.id = 'topicInput'
    newTopicInput.addEventListener("keydown", addNewTopic)
    topicList.appendChild(newTopicInput)
    newTopicInput.focus()
}


function addNewTopic(eventObj) {
    if (eventObj.keyCode===13) {
        let newTopicInputText = document.getElementById('topicInput').value;
        topics.push(newTopicInputText)
        renderTopics()
    }
    
}


renderTopics()











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





