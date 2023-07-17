//array of Question and answer
let QuestionAndAnswer = [
    {
        Question: "Most popular programming language?",
        a: "C++",
        b: "Python",
        c: "Javascript",
        answer: "c"
    }
]


let question = document.getElementById('question');
console.log(QuestionAndAnswer[0].a)
let a = document.querySelector('.aLabel')
let b = document.querySelector('.bLabel')
let c = document.querySelector('.cLabel')



function Display(){
    question.innerHTML  = QuestionAndAnswer[0].Question;
    a.innerHTML = QuestionAndAnswer[0].a;
    b.innerHTML = QuestionAndAnswer[0].b;
    c.innerHTML = QuestionAndAnswer[0].c;
}

Display();





