// ボタン実行
function runTraining() {
  const training = document.getElementById("training").value;
  const avatar = document.getElementById("avatarImage");

  if (!training) {
    alert("筋トレ内容を選択してください");
    return;
  }

  switch (training) {
    case "run":
      status.run += 1;
      break;
    case "chest":
      status.chest += 1;
      break;
    case "back":
      status.back += 1;
      break;
    case "leg":
      status.leg += 1;
      break;
  }
  
  avatar.src = `images/${training}.png`;

}






