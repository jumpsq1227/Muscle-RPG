// ボタン実行
function runTraining() {
  const training = document.getElementById("training").value;
  const avatar = document.getElementById("avatarImage");

  if (!training) {
    alert("筋トレ内容を選択してください");
    return;
  }

  switch (training) {
    case "bench":
      status.chest += 1;
      break;
    case "pullup":
      status.back += 1;
      break;
    case "legpress":
      status.leg += 1;
      break;
  }
  avatar.src = `images/${training}.png`;
  // avatar.src = `images/player_lv100.png`;

}




