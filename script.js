// 初期ステータス
const status = {
  chest: 1,
  back: 1,
  leg: 1
};

function runTraining() {
  const training = document.getElementById("training").value;
  const avatar = document.getElementById("avatarImage");

  if (!training) {
    alert("筋トレ内容を選択してください");
    return;
  }

  avatar.src = `images/${training}.png`;
  // avatar.src = `images/player_lv100.png`;

}

// 表示更新
function updateStatusView() {
  document.getElementById("chestLv").textContent = status.chest;
  document.getElementById("backLv").textContent = status.back;
  document.getElementById("legLv").textContent = status.leg;
}

