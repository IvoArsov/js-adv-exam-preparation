

class TrainingCourse{
    constructor(title, trainer){
        this.title = title;
        this.trainer = trainer;
        this.topics = [];
    }

    addTopic(title, date){
        this.topics.push({
            title: title,
            date: date
        });
        this.topics.sort((a,b) => a.date - b.date);
        return this;
    }

    get firstTopic(){
        return this.topics[0];
    }

    get lastTopic(){
        return this.topics[this.topics.length - 1];
    }

    toString(){
        let result = `Course \"${this.title}\" by ${this.trainer}`;
        for(let topic of this.topics){
            if(topic.title == undefined){
                result += '\n';
            }else{
                result += `\n * ${topic.title} - ${topic.date}`;
            }
        }


        return result;
    }
}

let course = new TrainingCourse("JS", "Nakov")
    .addTopic("Strings", new Date(2017, 2, 16, 18, 0))
    .addTopic("PHP First Steps", new Date(2017, 2, 12, 18, 0))
    .addTopic("Arrays", new Date(2017, 2, 14, 18, 0))
    .addTopic()
    .addTopic("Arrays", new Date(2017, 2, 14, 18, 0));

console.log(course.toString());

