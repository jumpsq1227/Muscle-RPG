let player = {
  chest: 1,
  back: 1,
  leg: 1
};

// 初期ロード
window.onload = () => {
  const saved = localStorage.getItem("growfit_player");
  if (saved) {
    player = JSON.parse(saved);
  }
  updateStatus();
};

function updateStatus() {
  document.getElementById("chestLv").textContent = player.chest;
  document.getElementById("backLv").textContent = player.back;
  document.getElementById("legLv").textContent = player.leg;
}

function startTraining() {
  const type = document.getElementById("trainingType").value;

  // レベルアップ
  player[type]++;
  localStorage.setItem("growfit_player", JSON.stringify(player));

  // 画面切り替え
  document.getElementById("main-screen").classList.add("hidden");
  document.getElementById("result-screen").classList.remove("hidden");

  // リザルト表示
  const textMap = {
    chest: "胸筋力 Lv UP！",
    back: "背筋力 Lv UP！",
    leg: "脚力 Lv UP！"
  };

  const resultText = document.getElementById("resultText");
  resultText.textContent = textMap[type];
  resultText.className = "level-up";
}

function backToMain() {
  document.getElementById("result-screen").classList.add("hidden");
  document.getElementById("main-screen").classList.remove("hidden");
  updateStatus();
}
