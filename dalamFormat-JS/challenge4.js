//membuat function untuk mengubah kata
function changeWord(selectedText, changedText, text) {
    let newStr = text.replace(selectedText, changedText);
    return newStr;
  }
  const kalimat1 = "Andini suka makan mie";
  const kalimat2 = "Gunung bromo meletus";

  const result1 = changeWord("suka", "tidak suka", kalimat1);
  const result2 = changeWord("meletus", "tidak meletus", kalimat2);

  //Keluar di Console
  console.log(changeWord("suka", "tidak suka", kalimat1));
  console.log(changeWord("meletus", "tidak meletus", kalimat2));