export default class Topic {
    constructor(name) {
        this.name = name;
        this.ideas = [];
    }

    setName(name){
        this.name = name;
    }

    getName(){
        return this.name;
    }

    setIdeas(ideas){
        this.ideas = ideas;
    }

    getIdeas(){
        return this.ideas
    }

    addIdea(newIdea){
        this.ideas.push(newIdea)
    }

    deleteIdea(ideaName){
        this.ideas = this.ideas.filter((idea) => idea.name !== ideaName)
    }



}
