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
let submit = document.getElementById('submit')
let answers = document.querySelectorAll('.answer')


function SubmitAnswer(){
    submit.addEventListener('click',function(event){
        event.preventDefault();

        //getting answer from user
        let result = getUserAnswer();

        if(result == QuestionAndAnswer[0].answer ){
            alert('Your answer is correct')
        }
        else{
            alert("your answer is wrong")
        }


        
        
    })

}



function Display(){
    question.innerHTML  = QuestionAndAnswer[0].Question;
    a.innerHTML = QuestionAndAnswer[0].a;
    b.innerHTML = QuestionAndAnswer[0].b;
    c.innerHTML = QuestionAndAnswer[0].c;
}
function getUserAnswer(){
    let userAnswer;
    answers.forEach(function(answer){
        console.log(answer)
        if(answer.checked == true){
            userAnswer = answer.id
        }
    })
    return userAnswer;
}

Display();
SubmitAnswer();





