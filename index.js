const quiz = [
  {
    question: "Q1 牧野の血液型は？",
    answers: [
      "A",
      "B",
      "O"
    ],
    correct: "O"

  },{
    question: "Q２ 牧野の下の名前の漢字は？",
    answers: [
      "章泰",
      "晃泰",
      "彰泰"
    ],
    correct: "彰泰"

  },{
    question: "Q3 飼っている犬の犬種は？",
    answers: [
      "プードル",
      "ポメラニアン",
      "ダックスフンド"
    ],
    correct: "ポメラニアン"

  },{
    question: "Q4 牧野が幼少期から憧れた阪神のプロ野球選手は？",
    answers: [
      "関本",
      "今岡",
      "矢野"
    ],
    correct: "今岡"

  },{
    question: "Q5 牧野の初めての習い事は？",
    answers: [
      "水泳",
      "習字",
      "野球"
    ],
    correct: "水泳"

  },{
    question: "Q6 牧野自身が思っている牧野の自身がある体の部位は？",
    answers: [
      "鼻",
      "手首",
      "背中"
    ],
    correct: "手首"

  },{
    question: "Q7 牧野の前歯がなくなったバイク事故で当時聞いていた曲は？",
    answers: [
      "Ariana Grandeの「Break Free」",
      "Justin Bieber feat.Nicki Minajの「Beauty And A Beat」",
      "Bruno Marsの「Billionaire.」"
    ],
    correct: "Ariana Grandeの「Break Free」"

  },{
    question: "Q8 牧野の人生唯一の挫折は？",
    answers: [
      "社会人１年目の何もできない感じ",
      "大学生の時、気付いたら周りがイケメンしかいなかった事",
      "高校の野球部に入った初日の同級生とのノック"
    ],
    correct: "高校の野球部に入った初日の同級生とのノック"

  },{
    question: "Q9 牧野の人生で初めての彼女の名前は？",
    answers: [
      "のぞみ",
      "ゆみこ",
      "ななみ"
    ],
    correct: "ゆみこ"

  },{
    question: "Q10 報徳学園の野球部で唯一もらった背番号は何番？",
    answers: [
      "２",
      "１５",
      "１２"
    ],
    correct: "１２"

  },{
    question: "Q11 牧野が好きな女性芸能人は？",
    answers: [
      "新垣結衣",
      "横田真悠",
      "大原櫻子"
    ],
    correct: "横田真悠"

  },{
    question: "Q12 牧野の童貞卒業はいつ？",
    answers: [
      "１８歳",
      "２２歳",
      "２０歳"
    ],
    correct: "２０歳"

  },{
    question: "Q13 牧野が好きな女性の体の部位は？",
    answers: [
      "胸",
      "鎖骨",
      "お尻"
    ],
    correct: "鎖骨"

  },{
    question: "Q14 牧野が女性として見れなくなる1番のポイントは？",
    answers: [
      "太っている",
      "顔に不具合がある",
      "色が黒い"
    ],
    correct: "色が黒い"

  },{
    question: "Q15 牧野が好きな著名人は？",
    answers: [
      "キングコングの西野亮廣",
      "ホリエモン",
      "SHOWROOM代表の前田裕二"
    ],
    correct: "キングコングの西野亮廣"

  },{
    question: "Q16 牧野が家で一人でお酒を飲むときに聞いている歌手は？",
    answers: [
      "久保田利伸",
      "EXILEのATSUSHI",
      "玉置浩二"
    ],
    correct: "玉置浩二"

  },{
    question: "Q17 玉置浩二の曲で1番好きな曲は？",
    answers: [
      "君がいないから",
      "サーチライト",
      "メロディ"
    ],
    correct: "君がいないから"

  },{
    question: "Q18 牧野が1番好きなアニメは？",
    answers: [
      "BLEACH",
      "キングダム",
      "幽遊白書"
    ],
    correct: "キングダム"

  },{
    question: "Q19 キングダムで1番好きなキャラクターは？",
    answers: [
      "王騎(おうき)",
      "羌瘣(きょうかい)",
      "蒙恬(もうてん)"
    ],
    correct: "蒙恬(もうてん)"

  },{
    question: "Q20 牧野自身が思っているコンプレックスは？",
    answers: [
      "幼児体型",
      "早漏",
      "基本毛がないのに乳首だけ生える"
    ],
    correct: "早漏"

  }
];

const quizLength = quiz.length
let quizIndex = 0;
let score = 0;



const $button = document.getElementsByTagName("button")
let buttonLength = $button.length;

const setupQuiz = () => {
  document.getElementById("js-question").textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}

setupQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert("◯正解○");
    score++;
  } else {
     window.alert("×××不正解×××▶︎▶︎▶︎正解は" + quiz[quizIndex].correct);
  }

  quizIndex++;

  if(quizIndex < quizLength){
    setupQuiz();
  } else {
    window.alert("終了！！あなたの正解数は" + score + "／" + quizLength + "です！")
  }
};

let handlerIndex = 0;
while(handlerIndex < buttonLength){
  $button[handlerIndex].addEventListener("click", (e) => {
    clickHandler(e)
  });
handlerIndex++;
};
