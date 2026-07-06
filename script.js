const taskSets = {
  game1: [
    {
      lines: [
        "Ruby has 38 stickers.",
        "Amira has 29 stickers.",
        "How many more stickers does Ruby have than Amira?"
      ],
      topName: "Ruby",
      bottomName: "Amira",
      image: "assets/game1-stickers.png",
      modelLabels: { top: "38", bottom: "29" },
      equation: { a: 38, operator: "-", b: 29, c: 9 },
      sentence: ["Ruby has", "more stickers than Amira."]
    },
    {
      lines: [
        "Mila has 31 shells.",
        "Omar has 47 shells.",
        "How many more shells does Omar have than Mila?"
      ],
      topName: "Mila",
      bottomName: "Omar",
      image: "assets/game1-shells.png",
      bars: { top: "short", bottom: "long" },
      modelLabels: { top: "31", bottom: "47" },
      equation: { a: 47, operator: "-", b: 31, c: 16 },
      sentence: ["Omar has", "more shells than Mila."]
    },
    {
      lines: [
        "Leo has 34 cards.",
        "Nina has 56 cards.",
        "How many more cards does Nina have than Leo?"
      ],
      topName: "Leo",
      bottomName: "Nina",
      image: "assets/game1-cards.png",
      bars: { top: "short", bottom: "long" },
      modelLabels: { top: "34", bottom: "56" },
      equation: { a: 56, operator: "-", b: 34, c: 22 },
      sentence: ["Nina has", "more cards than Leo."]
    },
    {
      lines: [
        "Sara has 64 marbles.",
        "Tom has 48 marbles.",
        "How many more marbles does Sara have than Tom?"
      ],
      topName: "Sara",
      bottomName: "Tom",
      image: "assets/game1-marbles.png",
      modelLabels: { top: "64", bottom: "48" },
      equation: { a: 64, operator: "-", b: 48, c: 16 },
      sentence: ["Sara has", "more marbles than Tom."]
    }
  ],
  game2: [
    {
      lines: [
        "In a class, there are 13 boys and 19 girls.",
        "How many more girls than boys are there?"
      ],
      topName: "Boys",
      bottomName: "Girls",
      image: "assets/game2-class.png",
      bars: { top: "short", bottom: "long" },
      modelLabels: { top: "13", bottom: "19" },
      equation: { a: 19, operator: "-", b: 13, c: 6 },
      sentence: ["There are", "more girls than boys."]
    },
    {
      lines: [
        "Emma has 98 seashells.",
        "Charles has 23 more seashells than Emma.",
        "How many seashells does Charles have?"
      ],
      topName: "Emma",
      bottomName: "Charles",
      image: "assets/game2-seashells.png",
      bars: { top: "short", bottom: "long" },
      modelLabels: { top: "98", bottom: "?", gap: "23" },
      equation: { a: 98, operator: "+", b: 23, c: 121 },
      sentence: ["Charles has", "seashells."]
    },
    {
      lines: [
        "Elliott collects 48 pressed flowers.",
        "He collects 16 fewer pressed flowers than Hannah.",
        "How many pressed flowers does Hannah collect?"
      ],
      topName: "Elliott",
      bottomName: "Hannah",
      image: "assets/game2-flowers.png",
      bars: { top: "short", bottom: "long" },
      modelLabels: { top: "48", bottom: "?", gap: "16" },
      equation: { a: 48, operator: "+", b: 16, c: 64 },
      sentence: ["Hannah collects", "pressed flowers."]
    },
    {
      lines: [
        "There are 71 women at a concert.",
        "There are 29 more women than men at the concert.",
        "How many men are there at the concert?"
      ],
      topName: "Women",
      bottomName: "Men",
      image: "assets/game2-concert.png",
      modelLabels: { top: "71", bottom: "?", gap: "29" },
      equation: { a: 71, operator: "-", b: 29, c: 42 },
      sentence: ["There are", "men at the concert."]
    }
  ],
  game3: [
    {
      lines: [
        "There are 24 marbles in a jar.",
        "Ravi puts 124 more marbles into the jar.",
        "How many marbles are there in the jar now?"
      ],
      topName: "Start",
      bottomName: "Put",
      image: "assets/game3-marbles-jar.png",
      bars: { top: "short", bottom: "long" },
      modelLabels: { top: "24", bottom: "?", gap: "124" },
      equation: { a: 24, operator: "+", b: 124, c: 148 },
      sentence: ["There are", "marbles in the jar now."]
    },
    {
      lines: [
        "A farmer collects 127 tomatoes and 235 strawberries.",
        "How many fruits does he collect together?"
      ],
      topName: "Tomatoes",
      bottomName: "Strawberries",
      image: "assets/game3-fruits.png",
      bars: { top: "short", bottom: "long" },
      modelLabels: { top: "127", bottom: "235" },
      equation: { a: 127, operator: "+", b: 235, c: 362 },
      sentence: ["He collects", "fruits together."]
    },
    {
      lines: [
        "Lulu has 500 buttons.",
        "She sells 201 buttons.",
        "How many buttons does Lulu have left?"
      ],
      topName: "Had",
      bottomName: "Sold",
      image: "assets/game3-buttons.png",
      modelLabels: { top: "500", bottom: "201", gap: "?" },
      equation: { a: 500, operator: "-", b: 201, c: 299 },
      sentence: ["Lulu has", "buttons left."]
    },
    {
      lines: [
        "A postman has to deliver 358 letters.",
        "He delivers some letters and has 289 letters left to deliver.",
        "How many letters has he delivered?"
      ],
      topName: "Letters",
      bottomName: "Left",
      image: "assets/game3-postman.png",
      modelLabels: { top: "358", bottom: "289", gap: "?" },
      equation: { a: 358, operator: "-", b: 289, c: 69 },
      sentence: ["He delivered", "letters."]
    }
  ],
  game4: [
    {
      lines: [
        "There are 140 rubbers in Box A and 96 rubbers in Box B.",
        "How many fewer rubbers are there in Box B than in Box A?"
      ],
      topName: "Box A",
      bottomName: "Box B",
      image: "assets/game4-rubbers.png",
      modelLabels: { top: "140", bottom: "96" },
      equation: { a: 140, operator: "-", b: 96, c: 44 },
      sentence: ["There are", "fewer rubbers in Box B than in Box A."]
    },
    {
      lines: [
        "Ravi has 136 stamps.",
        "Charles has 43 fewer stamps than Ravi.",
        "How many stamps does Charles have?"
      ],
      topName: "Ravi",
      bottomName: "Charles",
      image: "assets/game4-stamps.png",
      modelLabels: { top: "136", bottom: "?", gap: "43" },
      equation: { a: 136, operator: "-", b: 43, c: 93 },
      sentence: ["Charles has", "stamps."]
    },
    {
      lines: [
        "Lulu has 205 beads.",
        "Holly has 40 more beads than Lulu.",
        "How many beads does Holly have?"
      ],
      topName: "Lulu",
      bottomName: "Holly",
      image: "assets/game4-beads.png",
      bars: { top: "short", bottom: "long" },
      modelLabels: { top: "205", bottom: "?", gap: "40" },
      equation: { a: 205, operator: "+", b: 40, c: 245 },
      sentence: ["Holly has", "beads."]
    },
    {
      lines: [
        "Ruby folds 216 paper aeroplanes.",
        "She folds 39 more paper aeroplanes than Elliott.",
        "How many paper aeroplanes does Elliott fold?"
      ],
      topName: "Ruby",
      bottomName: "Elliott",
      image: "assets/game4-aeroplanes.png",
      modelLabels: { top: "216", bottom: "?", gap: "39" },
      equation: { a: 216, operator: "-", b: 39, c: 177 },
      sentence: ["Elliott folds", "paper aeroplanes."]
    }
  ]
};

const state = {
  currentGame: "game1",
  current: 0,
  selectedBar: null,
  slots: {
    top: null,
    bottom: null
  }
};

const barPalettes = [
  { long: "#56c983", long2: "#9ff0ad", short: "#f6d95b", short2: "#fff2a0" },
  { long: "#73b7e8", long2: "#b9def5", short: "#f49a77", short2: "#ffd0b5" },
  { long: "#c99adf", long2: "#ead0f3", short: "#8ccf9d", short2: "#d6efbe" },
  { long: "#f2a35f", long2: "#ffd690", short: "#ea7f95", short2: "#f8c5d0" },
  { long: "#7fa66a", long2: "#c6d9a1", short: "#7cc8c5", short2: "#cceee9" },
  { long: "#d69bc8", long2: "#f4d6e9", short: "#f0c84d", short2: "#ffe99b" },
  { long: "#8aa6dc", long2: "#ccd9f4", short: "#d7b36a", short2: "#f4ddb0" },
  { long: "#79c7a4", long2: "#d2edc0", short: "#f08c68", short2: "#ffc7a5" }
];

const els = {
  startScreen: document.querySelector("#startScreen"),
  levelScreen: document.querySelector("#levelScreen"),
  gameScreen: document.querySelector("#gameScreen"),
  startBtn: document.querySelector("#startBtn"),
  firstGameBtn: document.querySelector("#firstGameBtn"),
  secondGameBtn: document.querySelector("#secondGameBtn"),
  thirdGameBtn: document.querySelector("#thirdGameBtn"),
  fourthGameBtn: document.querySelector("#fourthGameBtn"),
  taskCounter: document.querySelector("#taskCounter"),
  problemText: document.querySelector("#problemText"),
  problemImage: document.querySelector("#problemImage"),
  topName: document.querySelector("#topName"),
  bottomName: document.querySelector("#bottomName"),
  topBarLabel: document.querySelector("#topBarLabel"),
  bottomBarLabel: document.querySelector("#bottomBarLabel"),
  gapLabel: document.querySelector("#gapLabel"),
  eqA: document.querySelector("#eqA"),
  eqOperator: document.querySelector("#eqOperator"),
  eqB: document.querySelector("#eqB"),
  eqC: document.querySelector("#eqC"),
  sentenceLead: document.querySelector("#sentenceLead"),
  sentenceTail: document.querySelector("#sentenceTail"),
  sentenceAnswer: document.querySelector("#sentenceAnswer"),
  feedback: document.querySelector("#feedback"),
  resetBtn: document.querySelector("#resetBtn"),
  checkBtn: document.querySelector("#checkBtn"),
  nextBtn: document.querySelector("#nextBtn"),
  tokens: document.querySelectorAll(".bar-token"),
  slots: document.querySelectorAll(".bar-slot"),
  inputs: document.querySelectorAll("input")
};

function task() {
  return taskSets[state.currentGame][state.current];
}

function activeTasks() {
  return taskSets[state.currentGame];
}

function expectedBars(current) {
  return current.bars || { top: "long", bottom: "short" };
}

function renderTask() {
  const current = task();
  const bars = expectedBars(current);
  const gameNumber = Number(state.currentGame.replace("game", "")) - 1;
  const palette = barPalettes[(gameNumber * activeTasks().length + state.current) % barPalettes.length];
  const count = `${state.current + 1} / ${activeTasks().length}`;
  els.taskCounter.textContent = count;
  els.gameScreen.style.setProperty("--bar-long", palette.long);
  els.gameScreen.style.setProperty("--bar-long-soft", palette.long2);
  els.gameScreen.style.setProperty("--bar-short", palette.short);
  els.gameScreen.style.setProperty("--bar-short-soft", palette.short2);
  els.problemText.innerHTML = current.lines.map((line) => `<p>${line}</p>`).join("");
  if (current.image) {
    els.problemImage.src = current.image;
    els.problemImage.alt = "";
    els.problemImage.classList.remove("is-hidden");
  } else {
    els.problemImage.removeAttribute("src");
    els.problemImage.classList.add("is-hidden");
  }
  els.topName.textContent = current.topName;
  els.bottomName.textContent = current.bottomName;
  els.sentenceLead.textContent = current.sentence[0];
  els.sentenceTail.textContent = current.sentence[1];
  const gapSlotName = bars.top === "short" ? "top" : "bottom";
  const gapSlot = document.querySelector(`.bar-slot[data-slot="${gapSlotName}"]`);
  if (gapSlot && els.gapLabel.parentElement !== gapSlot) {
    gapSlot.appendChild(els.gapLabel);
  }
  els.gapLabel.classList.toggle("is-hidden", current.modelLabels.gap == null);
  els.nextBtn.textContent = state.current === activeTasks().length - 1 ? "Choose game" : "Next";
  resetWork();
}

function resetWork() {
  state.selectedBar = null;
  state.slots.top = null;
  state.slots.bottom = null;
  els.inputs.forEach((input) => {
    input.value = "";
    input.classList.remove("is-correct", "is-wrong");
  });
  els.feedback.textContent = "";
  els.feedback.className = "feedback";
  els.tokens.forEach((token) => token.classList.remove("selected"));
  els.slots.forEach((slot) => {
    slot.classList.remove("hover", "is-correct", "is-wrong");
    slot.querySelectorAll(".placed-bar").forEach((bar) => bar.remove());
  });
}

function pickBar(barType) {
  state.selectedBar = barType;
  els.tokens.forEach((token) => {
    token.classList.toggle("selected", token.dataset.bar === barType);
  });
}

function clearBarSelection() {
  state.selectedBar = null;
  els.tokens.forEach((token) => token.classList.remove("selected"));
}

function placeBar(slotName, barType) {
  if (!barType) return;

  const otherSlot = slotName === "top" ? "bottom" : "top";
  if (state.slots[otherSlot] === barType) {
    state.slots[otherSlot] = null;
  }
  state.slots[slotName] = barType;
  renderBars();
  clearBarSelection();
}

function renderBars() {
  els.slots.forEach((slot) => {
    const barType = state.slots[slot.dataset.slot];
    slot.querySelectorAll(".placed-bar").forEach((bar) => bar.remove());
    slot.classList.remove("is-correct", "is-wrong");
    if (!barType) return;

    const bar = document.createElement("div");
    bar.className = `placed-bar ${barType}`;
    slot.prepend(bar);
  });
}

function cleanValue(value) {
  return value.trim().replace(",", ".");
}

function isNumber(input, expected) {
  return Number(cleanValue(input.value)) === expected;
}

function isOperator(input, expected) {
  return cleanValue(input.value) === expected;
}

function isLabel(input, expected) {
  return cleanValue(input.value) === expected;
}

function markInput(input, correct) {
  input.classList.toggle("is-correct", correct);
  input.classList.toggle("is-wrong", !correct);
}

function markSlot(slot, correct) {
  slot.classList.toggle("is-correct", correct);
  slot.classList.toggle("is-wrong", !correct);
}

function checkWork() {
  const current = task();
  const equation = current.equation;
  const modelLabels = current.modelLabels;
  const bars = expectedBars(current);
  const checks = [
    state.slots.top === bars.top,
    state.slots.bottom === bars.bottom,
    isLabel(els.topBarLabel, modelLabels.top),
    isLabel(els.bottomBarLabel, modelLabels.bottom),
    modelLabels.gap == null || isLabel(els.gapLabel, modelLabels.gap),
    isNumber(els.eqA, equation.a),
    isOperator(els.eqOperator, equation.operator),
    isNumber(els.eqB, equation.b),
    isNumber(els.eqC, equation.c),
    isNumber(els.sentenceAnswer, equation.c)
  ];

  els.slots.forEach((slot) => {
    markSlot(slot, state.slots[slot.dataset.slot] === bars[slot.dataset.slot]);
  });

  markInput(els.topBarLabel, checks[2]);
  markInput(els.bottomBarLabel, checks[3]);
  if (modelLabels.gap != null) {
    markInput(els.gapLabel, checks[4]);
  }
  markInput(els.eqA, checks[5]);
  markInput(els.eqOperator, checks[6]);
  markInput(els.eqB, checks[7]);
  markInput(els.eqC, checks[8]);
  markInput(els.sentenceAnswer, checks[9]);

  const solved = checks.every(Boolean);
  els.feedback.className = `feedback ${solved ? "success" : "error"}`;
  els.feedback.textContent = solved
    ? "WELL DONE"
    : "TRY AGAIN";
}

function nextTask() {
  if (state.current === activeTasks().length - 1) {
    els.gameScreen.classList.add("is-hidden");
    els.levelScreen.classList.remove("is-hidden");
    return;
  }
  state.current = (state.current + 1) % activeTasks().length;
  renderTask();
}

function startGame(gameName) {
  state.currentGame = gameName;
  state.current = 0;
  renderTask();
  els.levelScreen.classList.add("is-hidden");
  els.gameScreen.classList.remove("is-hidden");
}

els.tokens.forEach((token) => {
  token.addEventListener("click", () => pickBar(token.dataset.bar));
  token.addEventListener("dragstart", (event) => {
    pickBar(token.dataset.bar);
    event.dataTransfer.setData("text/plain", token.dataset.bar);
  });
});

els.slots.forEach((slot) => {
  const labelInput = slot.dataset.slot === "top" ? els.topBarLabel : els.bottomBarLabel;
  const placeSelected = () => {
    if (state.selectedBar) {
      placeBar(slot.dataset.slot, state.selectedBar);
    }
  };
  const focusLabel = (event) => {
    if (!state.selectedBar && state.slots[slot.dataset.slot]) {
      const gapIsVisible = !els.gapLabel.classList.contains("is-hidden");
      const gapSlotName = els.gapLabel.parentElement?.dataset.slot;
      if (slot.dataset.slot === gapSlotName && gapIsVisible && event) {
        const rect = slot.getBoundingClientRect();
        const clickRatio = (event.clientX - rect.left) / rect.width;
        if (clickRatio > 0.67) {
          els.gapLabel.focus();
          return;
        }
      }
      labelInput.focus();
    }
  };

  slot.addEventListener("pointerdown", (event) => {
    if (event.target.closest("input")) return;
    if (state.selectedBar) {
      event.preventDefault();
      placeSelected();
    } else if (state.slots[slot.dataset.slot]) {
      event.preventDefault();
      focusLabel(event);
    }
  });
  slot.addEventListener("click", (event) => {
    if (state.selectedBar) {
      placeSelected();
    } else {
      focusLabel(event);
    }
  });
  slot.addEventListener("keydown", (event) => {
    if ((event.key === "Enter" || event.key === " ") && state.selectedBar) {
      event.preventDefault();
      placeSelected();
    }
  });
  slot.addEventListener("dragover", (event) => {
    event.preventDefault();
    slot.classList.add("hover");
  });
  slot.addEventListener("dragleave", () => slot.classList.remove("hover"));
  slot.addEventListener("drop", (event) => {
    event.preventDefault();
    slot.classList.remove("hover");
    const barType = event.dataTransfer.getData("text/plain") || state.selectedBar;
    if (barType) {
      placeBar(slot.dataset.slot, barType);
    }
  });
});

els.resetBtn.addEventListener("click", resetWork);
els.checkBtn.addEventListener("click", checkWork);
els.nextBtn.addEventListener("click", nextTask);
els.startBtn.addEventListener("click", () => {
  els.startScreen.classList.add("is-hidden");
  els.levelScreen.classList.remove("is-hidden");
});
els.firstGameBtn.addEventListener("click", () => {
  startGame("game1");
});
els.secondGameBtn.addEventListener("click", () => {
  startGame("game2");
});
els.thirdGameBtn.addEventListener("click", () => {
  startGame("game3");
});
els.fourthGameBtn.addEventListener("click", () => {
  startGame("game4");
});

renderTask();
