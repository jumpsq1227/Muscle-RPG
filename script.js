// 初期ステータス
const status = {
  chest: 1,
  back: 1,
  leg: 1
};

// 表示更新
function updateStatusView() {
  document.getElementById("chestLv").textContent = status.chest;
  document.getElementById("backLv").textContent = status.back;
  document.getElementById("legLv").textContent = status.leg;
}

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
      status.HPLv += 1;
      break;
    case "chest":
      status.chestLv += 1;
      break;
    case "back":
      status.backLv += 1;
      break;
    case "leg":
      status.legLv += 1;
      break;
  }

  updateStatusView();
  
  avatar.src = `images/${training}.png`;

}








