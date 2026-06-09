const STORAGE_KEY = "audioprompter.songs.v1";
const SETTINGS_KEY = "audioprompter.settings.v1";
const LEARN_MAPS_KEY = "audioprompter.learnMaps.v1";
const ACTIVE_LINE_RATIO = 0.34;
const FIRST_LINE_HOLD_RATIO = 0.65;

const rhythms = [
  { id: "casio013", name: "013 OLDIES POP", aliases: ["Rytm 013"], beats: 4, factor: 1.00 },
  { id: "casio014", name: "014 UK BEAT", aliases: ["Rytm 014"], beats: 4, factor: 1.00 },
  { id: "casio034", name: "034 RYTM 034", aliases: ["Rytm 034"], beats: 4, factor: 1.00 },
  { id: "casio044", name: "044 RYTM 044", aliases: ["Rytm 044"], beats: 4, factor: 1.00 },
  { id: "casio074", name: "074 ORCHESTRA SWING 1", aliases: ["Rytm 074"], beats: 4, factor: 1.00 },
  { id: "casio077", name: "077 ORCHESTRA SWING 2", aliases: ["Rytm 077"], beats: 4, factor: 1.00 },
  { id: "casio209", name: "209 RYTM 209", aliases: ["Rytm 209"], beats: 4, factor: 1.00 },
  { id: "casio210", name: "210 RYTM 210", aliases: ["Rytm 210"], beats: 4, factor: 1.00 },
  { id: "pop44", name: "Pop 4/4", beats: 4, factor: 1.00 },
  { id: "rock44", name: "Rock 4/4", beats: 4, factor: 1.08 },
  { id: "ballad44", name: "Ballada 4/4", beats: 4, factor: 0.78 },
  { id: "waltz34", name: "Walc 3/4", beats: 3, factor: 0.86 },
  { id: "shuffle44", name: "Shuffle 4/4", beats: 4, factor: 0.92 },
  { id: "disco44", name: "Disco 4/4", beats: 4, factor: 1.18 },
  { id: "latin44", name: "Latin 4/4", beats: 4, factor: 1.05 },
  { id: "polka24", name: "Polka 2/4", beats: 2, factor: 1.16 },
];

const demoSongs = [
  {
    id: "demo-przykladowa-piosenka",
    raw: `# Przykladowa piosenka
@artist: Moj repertuar
@bpm: 96
@rhythm: Pop 4/4
@scroll: 1.00

[Intro]
[C]Raz, dwa, [G]trzy, zaczynamy [Am]grac
[F]Tempo trzyma rytm, a tekst prowadzi [G]nas

[Zwrotka 1]
[C]Tu wpisz swoj tekst i [G]akordy nad slowami
[Am]Kazda linia bedzie [F]czytelna pod palcami
[C]Gdy wlaczysz Start, ekran [G]sam powoli plynie
[F]Aktywna linia jasniej [G]pokazuje, gdzie jestes

[Refren]
[C]Gram i spiewam, [G]patrze tylko tu
[Am]Akord czeka zawsze [F]nad poczatkiem slow
[C]Jesli tempo zmienisz [G]w instrumencie
[F]Zmien BPM tutaj i [G]wszystko idzie rowno`
  },
  {
    id: "my-way-szczescie-jest-we-mnie",
    raw: `# My way (Szczęście jest we mnie)
@artist: Zbigniew Wodecki
@bpm: 75
@rhythm: 013 OLDIES POP
@tone: 016
@transpose: -3,-2
@scroll: 1.00

[Info]
Muzyka: Jacques Revaux, Claude François, Gilles Thibaut
Tekst angielski: Paul Anka
Tekst polski: Jan Jakub Należyty

[Zwrotka 1]
[C]Dni złe zwodziły [Em]mnie
[Gm]na krętych dróg [A7]rozstaje.
[Dm]We mgle gubiłem [Dm7]się,
[G7]by przyjaźń znów gdzieś [C]odnaleźć.
[C]Sens słów znalazłem [C7]znów,
[F]gdy radość mnie w świat do [Fm]Was niosła.
[C]Przez szarość kocich [G7]łbów
[F]światła [C]autostrad.

[Zwrotka 2]
[C]Znam szyk złoconych [Em]sal,
[Gm]gdzie wielka gra [A7]orkiestra.
[Dm]Znam też niejeden [Dm7]bar
[G7]i skromność znam małych [C]estrad.
[C]Ktoś chciał, bym mógł Wam [C7]grać
[F]i brać Wam czas.
[Fm]Czy daremnie?
[C]Dziś chcę Wam szczęście [G]dać,
[F]które jest we [C]mnie.

[Refren]
[C]Dobro i zło,
[C7]tysiące dróg.
[F]Sam nie wiem, kto - diabeł czy Bóg -
[Dm]kto sprawił [G7]to, że żyć się chce.
[Em7]Gdy dla Was gram, [Am]los śmieje się.
[Dm]Nie jestem sam,
[G7]gdy śpiewam Wam.
[F]Szczęście jest we [C]mnie.

[Zwrotka 3]
[C]Gdy dni wyblakną [Em]mi
[Gm]i powiem tak: [A7]Żegnaj mój świecie,
[Dm]podjedzie tu kierowca [Dm7]z mgły
[G7]w niebieskim swym [C]kabriolecie.
[C]Ja sam dojadę [C7]tam,
[F]gdzie czeka mnie ostatnia [Fm]puenta.
[C]Nie dziś, bo koncert [G]mam,
[F]a to rzecz [C]święta.

[Refren]
[C]Dobro i zło,
[C7]tysiące dróg.
[F]Sam nie wiem, kto - diabeł czy Bóg -
[Dm]kto sprawił [G7]to, że żyć się chce.
[Em7]Gdy dla Was gram, [Am]los śmieje się.
[Dm]Nie jestem sam,
[G7]gdy śpiewam Wam.
[F]Szczęście jest we [C]mnie.`
  },
  {
    id: "czas-relaksu",
    raw: `# Czas relaksu
@artist: Repertuar
@bpm: 100
@rhythm: 077 ORCHESTRA SWING 2
@tone: 005
@scroll: 1.00

[Info]
Ustawienia z szablonu: RYTM 077 ORCHESTRA SWING 2 lub 074 ORCHESTRA SWING 1, TEMPO 100 lub 120, TONE 005

[Zwrotka 1]
[C]Kiedy świat wielki hałasem mnie [Em]nuży
[C7]A w barze, ulica, ten sam nudny [F]tłum
[Fm]Mój Pacard mnie niesie do [C]celu [A7]podróży
[Dm7]U boku dziewczyna mych [G7]snów
[C]Czeka tam na nas bungallow mój [Em]mały
[C7]Ukryty dyskretnie wśród skalistych [F]gór
[Fm]Tu księżyc wschodzi jak nad [C]Alaba[A7]mą
[Dm7]Wystarczy [G7]przekręcić [C]klucz

[Refren x 2]
[D7]Tlidy tlidy [G7]tlidy di
[C]Czas relaksu, [C]relaksu to [C7]czas
[D7]Tlidy tlidy [G7]tlidy di
[C]Czas relaksu, [C]relaksu to [C7]czas

[Zwrotka 2]
[C]Kiedy zmęczeni po długiej [Em]podróży
[C7]W ramiona padniemy znów sobie bez [F]tchu
[Fm]Wtedy pomyślę, że świat, choć tak [C]du[A7]ży
[Dm7]Najbardziej smakuje mi [G7]tu
[C]Wniosę bagaże i zaraz po [Em]chwili
[C7]W fotelu bujanym upadnę bez [F]sił
[Fm]Głowę pochylę nad szklanką [C]Marti[A7]ni
[Dm7]A [G7]Ona zaśpiewa [C]mi

[Refren]
[D7]Tlidy tlidy [G7]tlidy di
[C]Czas relaksu, [C]relaksu to [C7]czas

[Zwrotka 3]
[C]Teraz gdy w ciszy letniego [Em]poranka
[C7]Ptaki mnie budzą piosenką bez [F]słów
[Fm]Gdy w oknie tańczy na wietrze [C]firan[A7]ka
[Dm7]Jak kocham powiedzieć [G7]mu
[C]Oddałbym chyba pieniądze i [Em]sławę
[C7]Zapomniał, że życie gdzieś toczy swój [F]rytm
[Fm]Oddałbym chętnie i świat niemal [C]ca[A7]ły
[Dm]Gdy ona [G7]tak śpiewa [C]mi

[Refren]
[D7]Tlidy tlidy [G7]tlidy di
[C]Czas relaksu, [C]relaksu to [C7]czas`
  }
];

const state = {
  songs: loadSongs(),
  currentId: "",
  isPlaying: false,
  lastFrame: 0,
  activeLine: -1,
  startedSong: false,
  playStartTime: null,
  playStartScrollTop: 0,
  firstLineHoldMs: 0,
  firstPlayableLineIndex: -1,
  playStartBar: 0,
  playbackTimer: null,
  midiAccess: null,
  midiClockCount: 0,
  midiLog: [],
  midiWaitForStart: false,
  midiSustainDown: false,
  midiSustainHighIsDown: null,
  midiAwaitInitialSustainRelease: false,
  midiPedalMode: false,
  isLearning: false,
  learningStartTime: null,
  learningTransitions: [],
  autoMapMode: false,
  autoMap: null,
  autoMapStartTime: null,
  autoMapNextTransition: 0,
  settings: loadSettings(),
};

const els = {
  songSelect: document.querySelector("#songSelect"),
  newSongBtn: document.querySelector("#newSongBtn"),
  duplicateSongBtn: document.querySelector("#duplicateSongBtn"),
  deleteSongBtn: document.querySelector("#deleteSongBtn"),
  exportBtn: document.querySelector("#exportBtn"),
  importInput: document.querySelector("#importInput"),
  fullscreenBtn: document.querySelector("#fullscreenBtn"),
  artistLabel: document.querySelector("#artistLabel"),
  titleLabel: document.querySelector("#titleLabel"),
  playbackStatus: document.querySelector("#playbackStatus"),
  midiBtn: document.querySelector("#midiBtn"),
  learnBtn: document.querySelector("#learnBtn"),
  autoMapBtn: document.querySelector("#autoMapBtn"),
  midiDialog: document.querySelector("#midiDialog"),
  midiCloseBtn: document.querySelector("#midiCloseBtn"),
  midiConnectBtn: document.querySelector("#midiConnectBtn"),
  midiArmStartBtn: document.querySelector("#midiArmStartBtn"),
  midiClearBtn: document.querySelector("#midiClearBtn"),
  midiStatus: document.querySelector("#midiStatus"),
  midiModeLabel: document.querySelector("#midiModeLabel"),
  midiInputsLabel: document.querySelector("#midiInputsLabel"),
  midiLastLabel: document.querySelector("#midiLastLabel"),
  midiClockLabel: document.querySelector("#midiClockLabel"),
  midiLog: document.querySelector("#midiLog"),
  playBtn: document.querySelector("#playBtn"),
  resetBtn: document.querySelector("#resetBtn"),
  rhythmSelect: document.querySelector("#rhythmSelect"),
  bpmInput: document.querySelector("#bpmInput"),
  bpmDownBtn: document.querySelector("#bpmDownBtn"),
  bpmUpBtn: document.querySelector("#bpmUpBtn"),
  speedInput: document.querySelector("#speedInput"),
  speedNumberInput: document.querySelector("#speedNumberInput"),
  speedDownBtn: document.querySelector("#speedDownBtn"),
  speedUpBtn: document.querySelector("#speedUpBtn"),
  speedLabel: document.querySelector("#speedLabel"),
  fontInput: document.querySelector("#fontInput"),
  prompter: document.querySelector("#prompter"),
  songEditor: document.querySelector("#songEditor"),
  saveBtn: document.querySelector("#saveBtn"),
  lineTemplate: document.querySelector("#lineTemplate"),
};

function loadSongs() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    const builtInSongs = getBuiltInSongs();
    if (!Array.isArray(saved) || !saved.length) return builtInSongs;
    const normalized = saved.map(normalizeSavedSong);
    const savedTitles = new Set(saved.map((song) => getSongTitle(song.raw).toLowerCase()));
    const missingDemos = builtInSongs.filter((song) => !savedTitles.has(getSongTitle(song.raw).toLowerCase()));
    return [...normalized, ...missingDemos];
  } catch {
    return getBuiltInSongs();
  }
}

function getBuiltInSongs() {
  const imported = Array.isArray(window.extraDemoSongs) ? window.extraDemoSongs : [];
  return [...demoSongs, ...imported];
}

function getSongTitle(raw) {
  const titleLine = String(raw || "").split(/\r?\n/).find((line) => line.startsWith("# "));
  return titleLine ? titleLine.slice(2).trim() : "";
}

function normalizeSavedSong(song) {
  if (!song?.raw) return song;
  const title = getSongTitle(song.raw).toLowerCase();
  if (!title.includes("my way") && !title.includes("szczęście") && !title.includes("szczescie")) return song;
  let raw = song.raw;
  raw = raw.replace(/^@scroll:\s*0\.82\s*$/m, "@scroll: 1.00");
  return { ...song, raw };
}

function loadSettings() {
  try {
    return { fontSize: 28, ...JSON.parse(localStorage.getItem(SETTINGS_KEY) || "{}") };
  } catch {
    return { fontSize: 28 };
  }
}

function saveSongs() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.songs));
}

function saveSettings() {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(state.settings));
}

function loadLearnMaps() {
  try {
    const maps = JSON.parse(localStorage.getItem(LEARN_MAPS_KEY) || "{}");
    return maps && typeof maps === "object" ? maps : {};
  } catch {
    return {};
  }
}

function saveLearnMap(songId, map) {
  const maps = loadLearnMaps();
  maps[songId] = map;
  localStorage.setItem(LEARN_MAPS_KEY, JSON.stringify(maps));
}

function getLearnMap(songId) {
  return loadLearnMaps()[songId] || null;
}

function parseSong(raw) {
  const lines = raw.replace(/\r\n/g, "\n").split("\n");
  const meta = { title: "Bez tytulu", artist: "", bpm: 96, rhythm: "Pop 4/4", tone: "", transpose: "", scroll: 1 };
  const body = [];

  for (const line of lines) {
    if (line.startsWith("# ")) {
      meta.title = line.slice(2).trim() || meta.title;
      continue;
    }

    const metaMatch = line.match(/^@([a-zA-Z]+):\s*(.*)$/);
    if (metaMatch) {
      const key = metaMatch[1].toLowerCase();
      const value = metaMatch[2].trim();
      if (key === "bpm") meta.bpm = clamp(Number(value) || meta.bpm, 30, 240);
      if (key === "artist") meta.artist = value;
      if (key === "rhythm") meta.rhythm = value;
      if (key === "tone") meta.tone = value;
      if (key === "transpose") meta.transpose = value;
      if (key === "scroll") meta.scroll = clamp(Number(value) || meta.scroll, 0.25, 2.5);
      continue;
    }

    body.push(line);
  }

  return { meta, body };
}

function renderSong() {
  const song = getCurrentSong();
  const parsed = parseSong(song.raw);
  const details = [
    parsed.meta.artist || "Repertuar",
    parsed.meta.tone ? `Tone ${parsed.meta.tone}` : "",
    parsed.meta.transpose ? `Trans ${parsed.meta.transpose}` : "",
  ].filter(Boolean);
  els.artistLabel.textContent = details.join(" | ");
  els.titleLabel.textContent = parsed.meta.title;
  els.bpmInput.value = parsed.meta.bpm;
  els.speedInput.value = parsed.meta.scroll;
  els.speedNumberInput.value = Number(parsed.meta.scroll).toFixed(2);
  els.speedLabel.textContent = `${Number(parsed.meta.scroll).toFixed(2)}x`;
  setRhythmByName(parsed.meta.rhythm);
  els.songEditor.value = song.raw;
  els.prompter.style.setProperty("--song-font", `${state.settings.fontSize}px`);
  els.fontInput.value = state.settings.fontSize;
  els.prompter.replaceChildren();
  state.activeLine = -1;
  state.startedSong = false;
  state.midiSustainDown = false;
  state.midiSustainHighIsDown = null;
  state.midiAwaitInitialSustainRelease = false;
  state.midiPedalMode = false;
  state.isLearning = false;
  state.learningStartTime = null;
  state.learningTransitions = [];
  state.autoMapMode = false;
  state.autoMap = null;
  state.autoMapStartTime = null;
  state.autoMapNextTransition = 0;
  updateLearnButton();
  updateAutoMapButton();

  let currentSection = "";

  parsed.body.forEach((line, index) => {
    const node = els.lineTemplate.content.firstElementChild.cloneNode(true);
    node.dataset.index = String(index);

    if (!line.trim()) {
      node.classList.add("blank");
    } else if (/^\[[^\[\]]+\]$/.test(line.trim())) {
      currentSection = line.replace(/^\[|\]$/g, "").trim().toLowerCase();
      node.classList.add("section");
      node.dataset.section = currentSection;
      node.querySelector(".line-content").textContent = currentSection;
    } else {
      if (currentSection === "info") node.classList.add("note");
      const parsedLine = parseBars(line, parsed.meta.title, currentSection);
      node.dataset.bars = String(parsedLine.bars);
      node.querySelector(".line-content").append(...parseChordLine(parsedLine.text));
    }

    node.addEventListener("click", () => {
      state.isPlaying = false;
      updatePlayButton();
      node.scrollIntoView({ block: "center", behavior: "smooth" });
      setActiveLine(index);
    });

    els.prompter.append(node);
  });

  requestAnimationFrame(updateActiveLine);
}

function getPlayableLines() {
  return [...els.prompter.querySelectorAll(".song-line:not(.blank):not(.section):not(.note)")];
}

function getLineTop(line) {
  return line.offsetTop - els.prompter.offsetTop;
}

function getScrollTopForLine(line) {
  return Math.max(0, getLineTop(line) - getActiveLineOffset());
}

function getFirstPerformanceLine() {
  return getPlayableLines()[0] || null;
}

function cueFirstLine() {
  const firstLine = getFirstPerformanceLine();
  if (!firstLine) return;
  els.prompter.scrollTop = getScrollTopForLine(firstLine);
  window.scrollTo(0, 0);
  state.firstPlayableLineIndex = Number(firstLine.dataset.index);
  setActiveLine(state.firstPlayableLineIndex);
  setLineProgress(0);
}

function getActiveLineOffset() {
  return Math.max(92, Math.round(els.prompter.clientHeight * ACTIVE_LINE_RATIO));
}

function getAverageLineDistance() {
  const playable = getPlayableLines();
  if (playable.length < 2) return Math.max(86, state.settings.fontSize * 3);
  const distances = [];

  for (let index = 1; index < playable.length; index += 1) {
    const previousTop = playable[index - 1].offsetTop - els.prompter.offsetTop;
    const currentTop = playable[index].offsetTop - els.prompter.offsetTop;
    const distance = currentTop - previousTop;
    if (distance > 20) distances.push(distance);
  }

  if (!distances.length) return Math.max(86, state.settings.fontSize * 3);
  return distances.reduce((sum, distance) => sum + distance, 0) / distances.length;
}

function getPixelsPerSecond() {
  const rhythm = rhythms.find((item) => item.id === els.rhythmSelect.value) || rhythms[0];
  const speed = clamp(Number(els.speedInput.value) || 1, 0.25, 2.5);
  return (getAverageLineDistance() / getSecondsPerLine()) * rhythm.factor * speed;
}

function getSecondsPerLine() {
  const rhythm = rhythms.find((item) => item.id === els.rhythmSelect.value) || rhythms[0];
  const bpm = clamp(Number(els.bpmInput.value) || 96, 30, 240);
  return (60 / bpm) * rhythm.beats;
}

function getLinePositionForDatasetIndex(datasetIndex) {
  const playable = getPlayableLines();
  const position = playable.findIndex((line) => Number(line.dataset.index) === datasetIndex);
  return Math.max(0, position);
}

function getBarsAtLinePosition(position) {
  return getPlayableLines().slice(0, position).reduce((sum, line) => sum + getLineBars(line), 0);
}

function getLineBars(line) {
  return clamp(Number(line?.dataset.bars) || 1, 0.25, 16);
}

function getBarProgress(elapsed) {
  const rhythm = rhythms.find((item) => item.id === els.rhythmSelect.value) || rhythms[0];
  const speed = clamp(Number(els.speedInput.value) || 1, 0.25, 2.5);
  return (elapsed / getSecondsPerLine()) * rhythm.factor * speed;
}

function advancePlayback(now = performance.now()) {
  if (!state.isPlaying || state.playStartTime === null) return;
  const elapsed = Math.max(0, (now - state.playStartTime) / 1000);
  const playable = getPlayableLines();
  if (!playable.length) return;

  if (state.autoMapMode) {
    advanceAutoMap(elapsed);
    return;
  }

  if (state.midiPedalMode) {
    let currentLine = playable.find((line) => Number(line.dataset.index) === state.activeLine);
    if (!currentLine) {
      currentLine = playable[0];
      setActiveLine(Number(currentLine.dataset.index));
    }

    const currentBars = getLineBars(currentLine);
    const lineProgress = clamp(getBarProgress(elapsed) / currentBars, 0, 1);
    els.prompter.scrollTop = getScrollTopForLine(currentLine);
    els.playbackStatus.textContent = state.isLearning
      ? `nauka: ${state.learningTransitions.length} przejsc`
      : `${lineProgress >= 1 ? "czeka na pedal" : `${lineProgress.toFixed(2)} linii`}`;
    window.scrollTo(0, 0);
    setLineProgress(lineProgress);
    return;
  }

  const totalProgress = state.playStartBar + getBarProgress(elapsed);
  let currentPosition = playable.length - 1;
  let currentStartBar = 0;

  for (let position = 0, barCursor = 0; position < playable.length; position += 1) {
    const duration = getLineBars(playable[position]);
    if (totalProgress < barCursor + duration || position === playable.length - 1) {
      currentPosition = position;
      currentStartBar = barCursor;
      break;
    }
    barCursor += duration;
  }

  const nextPosition = Math.min(playable.length - 1, currentPosition + 1);
  const currentLine = playable[currentPosition];
  const nextLine = playable[nextPosition];
  const currentBars = getLineBars(currentLine);
  const fraction = clamp((totalProgress - currentStartBar) / currentBars, 0, 1);
  const currentTop = getScrollTopForLine(currentLine);
  const nextTop = getScrollTopForLine(nextLine);

  els.prompter.scrollTop = currentTop + (nextTop - currentTop) * fraction;
  els.playbackStatus.textContent = `${totalProgress.toFixed(2)} takt`;
  window.scrollTo(0, 0);
  if (elapsed < state.firstLineHoldMs / 1000 && state.firstPlayableLineIndex >= 0) {
    setActiveLine(state.firstPlayableLineIndex);
    setLineProgress(elapsed / Math.max(state.firstLineHoldMs / 1000, 0.1));
  } else {
    setActiveLine(Number(currentLine.dataset.index));
    setLineProgress(fraction);
  }

  if (currentPosition >= playable.length - 1 && fraction >= 0.98) {
    stopPlayback();
  }
}

function startPlayback() {
  const shouldCueFirstLine = !state.startedSong;
  state.isPlaying = true;
  state.startedSong = true;
  state.lastFrame = 0;
  updatePlayButton();

  if (shouldCueFirstLine) cueFirstLine();
  const now = performance.now();
  state.firstLineHoldMs = shouldCueFirstLine && !state.midiPedalMode ? getSecondsPerLine() * FIRST_LINE_HOLD_RATIO * 1000 : 0;
  state.playStartTime = now + state.firstLineHoldMs;
  state.playStartScrollTop = els.prompter.scrollTop;
  state.playStartBar = getBarsAtLinePosition(getLinePositionForDatasetIndex(state.firstPlayableLineIndex));
  state.lastFrame = now;

  if (state.playbackTimer) clearInterval(state.playbackTimer);
  state.playbackTimer = setInterval(() => advancePlayback(), 50);
}

function startPedalPlayback() {
  state.midiPedalMode = true;
  state.isPlaying = true;
  state.startedSong = true;
  state.lastFrame = 0;
  cueFirstLine();

  const now = performance.now();
  state.firstLineHoldMs = 0;
  state.playStartTime = now;
  state.playStartScrollTop = els.prompter.scrollTop;
  state.playStartBar = getBarsAtLinePosition(getLinePositionForDatasetIndex(state.firstPlayableLineIndex));
  state.lastFrame = now;

  updatePlayButton();
  els.playbackStatus.textContent = "czeka na pedal";

  if (state.playbackTimer) clearInterval(state.playbackTimer);
  state.playbackTimer = setInterval(() => advancePlayback(), 50);
}

function advanceAutoMap(elapsed) {
  const map = state.autoMap;
  if (!map?.transitions?.length) return;

  while (
    state.autoMapNextTransition < map.transitions.length
    && elapsed * 1000 >= map.transitions[state.autoMapNextTransition].atMs
  ) {
    const transition = map.transitions[state.autoMapNextTransition];
    const line = els.prompter.querySelector(`.song-line[data-index="${transition.toIndex}"]`);
    if (line) {
      els.prompter.scrollTop = getScrollTopForLine(line);
      window.scrollTo(0, 0);
      setActiveLine(Number(line.dataset.index));
      setLineProgress(0);
    }
    state.autoMapNextTransition += 1;
  }

  const next = map.transitions[state.autoMapNextTransition];
  if (next) {
    const remaining = Math.max(0, (next.atMs - elapsed * 1000) / 1000);
    els.playbackStatus.textContent = `auto: ${state.autoMapNextTransition}/${map.transitions.length}  ${remaining.toFixed(1)}s`;
  } else {
    els.playbackStatus.textContent = `auto: ${map.transitions.length}/${map.transitions.length}`;
  }
}

function updateAutoMapButton() {
  els.autoMapBtn.textContent = state.autoMapMode ? "Stop mapa" : "Auto z mapy";
  els.autoMapBtn.classList.toggle("primary", state.autoMapMode);
}

function startAutoMapPlayback() {
  const map = getLearnMap(getCurrentSong().id);
  if (!map?.transitions?.length) {
    els.playbackStatus.textContent = "brak mapy";
    return;
  }

  state.isLearning = false;
  state.learningStartTime = null;
  state.autoMapMode = true;
  state.autoMap = map;
  state.autoMapNextTransition = 0;
  state.autoMapStartTime = performance.now();
  state.midiPedalMode = false;
  state.isPlaying = true;
  state.startedSong = true;
  state.lastFrame = 0;

  cueFirstLine();
  state.playStartTime = state.autoMapStartTime;
  state.playStartScrollTop = els.prompter.scrollTop;
  state.playStartBar = 0;

  updateLearnButton();
  updateAutoMapButton();
  updatePlayButton();
  els.playbackStatus.textContent = `auto: 0/${map.transitions.length}`;

  if (state.playbackTimer) clearInterval(state.playbackTimer);
  state.playbackTimer = setInterval(() => advancePlayback(), 50);
}

function stopAutoMapPlayback() {
  state.autoMapMode = false;
  state.autoMap = null;
  state.autoMapStartTime = null;
  state.autoMapNextTransition = 0;
  updateAutoMapButton();
}

function toggleAutoMap() {
  if (state.autoMapMode) {
    stopPlayback();
    return;
  }
  startAutoMapPlayback();
}

function stopPlayback() {
  state.isPlaying = false;
  state.playStartTime = null;
  state.lastFrame = 0;
  if (state.playbackTimer) clearInterval(state.playbackTimer);
  state.playbackTimer = null;
  stopAutoMapPlayback();
  updatePlayButton();
}

function parseChordLine(line) {
  const parts = [];
  const regex = /\[([^\]]+)\]/g;
  let pendingChord = "";
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(line))) {
    if (match.index > lastIndex) {
      parts.push(createToken(pendingChord, line.slice(lastIndex, match.index)));
      pendingChord = "";
    }
    pendingChord = match[1];
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < line.length) {
    parts.push(createToken(pendingChord, line.slice(lastIndex)));
  } else if (pendingChord) {
    parts.push(createToken(pendingChord, " "));
  }

  return parts.length ? parts : [createToken("", line)];
}

function parseBars(line, title = "", section = "") {
  const match = String(line).match(/\s*\{(\d+(?:[.,]\d+)?)\}\s*$/);
  if (!match) return { text: line, bars: inferBars(title, section, line) };
  const bars = clamp(Number(match[1].replace(",", ".")) || 1, 0.25, 16);
  return {
    text: line.slice(0, match.index).trimEnd(),
    bars,
  };
}

function inferBars(title, section, line) {
  const normalizedTitle = String(title).toLowerCase();
  const normalizedSection = String(section).toLowerCase();
  const text = String(line).toLowerCase();

  if (normalizedTitle.includes("czas relaksu")) {
    return 2;
  }

  if (normalizedTitle.includes("my way") || normalizedTitle.includes("szcz")) {
    if (normalizedSection.includes("refren")) {
      if (text.includes("[c]dobro") || text.includes("[c7]tysi") || text.includes("[dm]nie") || text.includes("[g7]gdy")) {
        return 1;
      }
      return 2;
    }

    if (text.includes("przez szaro") || text.includes("autostrad") || text.includes("i bra") || text.includes("daremnie")) {
      return 1;
    }

    return 2;
  }

  return 1;
}

function createToken(chord, lyric) {
  const token = document.createElement("span");
  token.className = "token";
  const chordEl = document.createElement("span");
  chordEl.className = "chord";
  chordEl.textContent = chord;
  const lyricEl = document.createElement("span");
  lyricEl.className = "lyric";
  lyricEl.textContent = lyric;
  token.append(chordEl, lyricEl);
  return token;
}

function populateSelects() {
  els.rhythmSelect.replaceChildren(...rhythms.map((rhythm) => {
    const option = document.createElement("option");
    option.value = rhythm.id;
    option.textContent = rhythm.name;
    return option;
  }));

  els.songSelect.replaceChildren(...state.songs.map((song) => {
    const option = document.createElement("option");
    option.value = song.id;
    option.textContent = parseSong(song.raw).meta.title;
    return option;
  }));
}

function setRhythmByName(name) {
  const value = String(name).toLowerCase();
  const found = rhythms.find((rhythm) => {
    const names = [rhythm.name, ...(rhythm.aliases || [])].map((item) => item.toLowerCase());
    return names.includes(value);
  });
  els.rhythmSelect.value = found ? found.id : rhythms[0].id;
}

function getCurrentSong() {
  return state.songs.find((song) => song.id === state.currentId) || state.songs[0];
}

function updateCurrentMeta(key, value) {
  const song = getCurrentSong();
  const lines = song.raw.replace(/\r\n/g, "\n").split("\n");
  const prefix = `@${key}:`;
  const index = lines.findIndex((line) => line.toLowerCase().startsWith(prefix));
  const nextLine = `${prefix} ${value}`;

  if (index >= 0) {
    lines[index] = nextLine;
  } else {
    const titleIndex = lines.findIndex((line) => line.startsWith("# "));
    lines.splice(titleIndex >= 0 ? titleIndex + 1 : 0, 0, nextLine);
  }

  song.raw = lines.join("\n");
  els.songEditor.value = song.raw;
  saveSongs();
}

function playbackStep(timestamp) {
  if (!state.lastFrame) state.lastFrame = timestamp;
  const delta = Math.min((timestamp - state.lastFrame) / 1000, 0.08);
  state.lastFrame = timestamp;

  advancePlayback(timestamp);

  if (!state.isPlaying) updateActiveLine();
  requestAnimationFrame(playbackStep);
}

function updateActiveLine() {
  if (state.isPlaying) return;
  if (!els.prompter.querySelector(".song-line")) return;
  const playable = getPlayableLines();
  if (!playable.length) return;
  const marker = els.prompter.scrollTop + getActiveLineOffset();
  let active = playable[0];

  for (const line of playable) {
    const lineTop = line.offsetTop - els.prompter.offsetTop;
    if (lineTop <= marker) active = line;
  }

  setActiveLine(Number(active.dataset.index));
}

function setActiveLine(index) {
  if (index === state.activeLine) return;
  state.activeLine = index;
  els.prompter.querySelectorAll(".song-line").forEach((line) => {
    line.classList.toggle("active", Number(line.dataset.index) === index);
  });
}

function setLineProgress(value) {
  const progress = clamp(value, 0, 1);
  els.prompter.querySelectorAll(".song-line.active").forEach((line) => {
    line.style.setProperty("--line-progress", progress.toFixed(3));
  });
}

function getLinePlainText(line) {
  return line?.querySelector(".line-content")?.textContent?.trim() || "";
}

function recordLearningTransition(fromLine, toLine) {
  if (!state.isLearning || state.learningStartTime === null) return;
  const atMs = Math.max(0, Math.round(performance.now() - state.learningStartTime));
  state.learningTransitions.push({
    atMs,
    fromIndex: Number(fromLine.dataset.index),
    toIndex: Number(toLine.dataset.index),
    fromText: getLinePlainText(fromLine),
    toText: getLinePlainText(toLine),
  });
  els.playbackStatus.textContent = `nauka: ${state.learningTransitions.length} przejsc`;
}

function advanceToNextLine() {
  const playable = getPlayableLines();
  if (!playable.length) return false;

  const currentPosition = playable.findIndex((line) => Number(line.dataset.index) === state.activeLine);
  const safePosition = currentPosition >= 0 ? currentPosition : -1;
  const nextPosition = Math.min(playable.length - 1, safePosition + 1);
  const nextLine = playable[nextPosition];
  if (!nextLine || nextPosition === safePosition) return false;

  if (currentPosition >= 0) {
    recordLearningTransition(playable[currentPosition], nextLine);
  }

  const nextIndex = Number(nextLine.dataset.index);
  els.prompter.scrollTop = getScrollTopForLine(nextLine);
  window.scrollTo(0, 0);
  setActiveLine(nextIndex);
  setLineProgress(0);

  state.firstPlayableLineIndex = nextIndex;
  state.playStartBar = getBarsAtLinePosition(nextPosition);

  if (state.isPlaying) {
    state.playStartTime = performance.now();
    state.firstLineHoldMs = 0;
    state.startedSong = true;
  }

  if (state.autoMapMode && state.autoMap?.transitions) {
    while (
      state.autoMapNextTransition < state.autoMap.transitions.length
      && Number(state.autoMap.transitions[state.autoMapNextTransition].toIndex) <= nextIndex
    ) {
      state.autoMapNextTransition += 1;
    }
  }

  return true;
}

function updatePlayButton() {
  els.playBtn.textContent = state.isPlaying ? "Pauza" : "Start";
  els.playBtn.setAttribute("aria-pressed", String(state.isPlaying));
  if (!state.isPlaying) {
    els.playbackStatus.textContent = "0 px/s";
    setLineProgress(0);
  }
  document.body.classList.toggle("is-playing", state.isPlaying);
}

function updateLearnButton() {
  els.learnBtn.textContent = state.isLearning ? "Zapisz mape" : "Naucz przejscia";
  els.learnBtn.classList.toggle("primary", state.isLearning);
}

function startLearning() {
  state.isLearning = true;
  state.learningTransitions = [];
  state.learningStartTime = performance.now();
  state.midiPedalMode = true;
  state.midiSustainDown = true;
  state.midiSustainHighIsDown = true;
  state.midiAwaitInitialSustainRelease = true;
  startPedalPlayback();
  updateLearnButton();
  els.playbackStatus.textContent = "nauka: 0 przejsc";
}

function finishLearning() {
  const song = getCurrentSong();
  const parsed = parseSong(song.raw);
  const map = {
    songId: song.id,
    title: parsed.meta.title,
    savedAt: new Date().toISOString(),
    firstLineIndex: state.firstPlayableLineIndex,
    transitions: state.learningTransitions,
  };
  saveLearnMap(song.id, map);
  state.isLearning = false;
  state.learningStartTime = null;
  updateLearnButton();
  els.playbackStatus.textContent = `zapisano: ${map.transitions.length} przejsc`;
}

function toggleLearning() {
  if (state.isLearning) {
    finishLearning();
    return;
  }
  startLearning();
}

function setSpeed(value, shouldSave = true) {
  const speed = clamp(Number(value) || 1, 0.25, 2.5);
  const formatted = speed.toFixed(2);
  els.speedInput.value = formatted;
  els.speedNumberInput.value = formatted;
  els.speedLabel.textContent = `${formatted}x`;
  if (shouldSave) updateCurrentMeta("scroll", formatted);
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function download(filename, text) {
  const link = document.createElement("a");
  link.href = URL.createObjectURL(new Blob([text], { type: "application/json" }));
  link.download = filename;
  link.click();
  URL.revokeObjectURL(link.href);
}

function openMidiDialog() {
  if (typeof els.midiDialog.showModal === "function") {
    els.midiDialog.showModal();
  } else {
    els.midiDialog.setAttribute("open", "");
  }
  updateMidiStatus("Podłącz Casio przez USB TO HOST i kliknij Połącz MIDI.");
}

function closeMidiDialog() {
  if (els.midiDialog.open) els.midiDialog.close();
}

async function connectMidi() {
  if (!("requestMIDIAccess" in navigator)) {
    const protocol = location.protocol;
    const secure = window.isSecureContext ? "tak" : "nie";
    updateMidiStatus(`Web MIDI jest niedostępne w tej karcie. Adres: ${protocol}, bezpieczny kontekst: ${secure}. Dla tabletu przez Wi-Fi adres HTTP z sieci lokalnej zwykle blokuje MIDI.`);
    addMidiLog(`Brak navigator.requestMIDIAccess. protocol=${protocol}, isSecureContext=${secure}`);
    return;
  }

  try {
    updateMidiStatus("Proszę czekać na okno zgody MIDI...");
    state.midiAccess = await navigator.requestMIDIAccess({ sysex: false });
    state.midiAccess.onstatechange = refreshMidiInputs;
    refreshMidiInputs();
    updateMidiStatus("Połączono z Web MIDI. Naciśnij klawisz albo uruchom rytm na Casio.");
  } catch (error) {
    updateMidiStatus(`Nie udało się połączyć MIDI: ${error.message || error}`);
    addMidiLog(`Błąd MIDI: ${error.message || error}`);
  }
}

function refreshMidiInputs() {
  if (!state.midiAccess) return;
  const inputs = [...state.midiAccess.inputs.values()];
  els.midiInputsLabel.textContent = inputs.length
    ? inputs.map((input) => input.name || input.manufacturer || input.id).join(", ")
    : "Brak wejść MIDI";

  inputs.forEach((input) => {
    input.onmidimessage = handleMidiMessage;
  });

  if (!inputs.length) {
    updateMidiStatus("Web MIDI działa, ale nie widzę wejścia z instrumentu. Sprawdź kabel USB TO HOST i zgodę w Chrome.");
  }
}

function handleMidiMessage(event) {
  const bytes = [...event.data];
  const decoded = decodeMidiMessage(bytes);
  els.midiLastLabel.textContent = decoded.short;

  if (decoded.type === "clock") {
    state.midiClockCount += 1;
    els.midiClockLabel.textContent = String(state.midiClockCount);
    if (state.midiClockCount % 24 !== 0) return;
  }

  if (decoded.type === "active") return;

  if (decoded.type === "sustain") {
    state.midiPedalMode = true;
    const isInitialRelease = state.midiAwaitInitialSustainRelease && state.midiSustainDown;
    const isDown = isInitialRelease ? false : getSustainIsDown(decoded.value);

    if (isInitialRelease) {
      state.midiAwaitInitialSustainRelease = false;
      state.midiSustainHighIsDown = decoded.value < 64;
    }

    if (isDown && !state.midiSustainDown) {
      state.midiSustainDown = true;
      addMidiLog("PEDAL sustain wcisniety - czekam na puszczenie.");
      return;
    }

    if (!isDown && state.midiSustainDown) {
      state.midiSustainDown = false;
      if (state.midiWaitForStart && !state.isPlaying) {
        addMidiLog("PEDAL sustain puszczony przed startem - pierwsza linia zostaje.");
        return;
      } else if (!state.isPlaying) {
        addMidiLog("PEDAL sustain puszczony, ale odtwarzanie nie jest wlaczone.");
        return;
      }
      if (advanceToNextLine()) {
        addMidiLog("PEDAL sustain puszczony -> nastepna linia.");
      } else {
        addMidiLog("PEDAL sustain puszczony: brak nastepnej linii.");
      }
      return;
    }
  }

  if (state.midiWaitForStart && isMidiStartSignal(decoded)) {
    state.midiWaitForStart = false;
    updateMidiMode();
    addMidiLog("START tekstu po sygnale z Casio.");
    if (!state.isPlaying) startPlayback();
  }

  addMidiLog(decoded.long);
}

function getSustainIsDown(value) {
  const highValue = value >= 64;
  if (state.midiSustainHighIsDown === null) {
    state.midiSustainHighIsDown = highValue;
  }
  return state.midiSustainHighIsDown ? highValue : !highValue;
}

function isMidiStartSignal(decoded) {
  return ["noteon", "noteoff", "start", "continue", "program", "cc", "other"].includes(decoded.type);
}

function decodeMidiMessage(bytes) {
  const [status, data1 = 0, data2 = 0] = bytes;
  const command = status & 0xf0;
  const channel = (status & 0x0f) + 1;

  if (status === 0xf8) return { type: "clock", short: "CLOCK", long: "MIDI CLOCK" };
  if (status === 0xfa) return { type: "start", short: "START", long: "START rytmu / sekwencji" };
  if (status === 0xfb) return { type: "continue", short: "CONTINUE", long: "CONTINUE" };
  if (status === 0xfc) return { type: "stop", short: "STOP", long: "STOP rytmu / sekwencji" };
  if (status === 0xfe) return { type: "active", short: "ACTIVE", long: "ACTIVE SENSING" };

  if (command === 0x90 && data2 > 0) {
    return { type: "noteon", short: `NOTE ${data1}`, long: `NOTE ON  kanał ${channel}, nuta ${data1}, siła ${data2}` };
  }

  if (command === 0x80 || (command === 0x90 && data2 === 0)) {
    return { type: "noteoff", short: `OFF ${data1}`, long: `NOTE OFF kanał ${channel}, nuta ${data1}` };
  }

  if (command === 0xb0) {
    if (data1 === 64) {
      return {
        type: "sustain",
        short: `SUS ${data2}`,
        long: `SUSTAIN kanal ${channel}, wartosc ${data2}`,
        value: data2,
      };
    }
    return { type: "cc", short: `CC ${data1}`, long: `CONTROL kanał ${channel}, CC ${data1}, wartość ${data2}` };
  }

  if (command === 0xc0) {
    return { type: "program", short: `PGM ${data1}`, long: `PROGRAM kanał ${channel}, numer ${data1}` };
  }

  return {
    type: "other",
    short: bytes.map((byte) => byte.toString(16).padStart(2, "0")).join(" "),
    long: `RAW ${bytes.join(" ")}`,
  };
}

function updateMidiStatus(message) {
  els.midiStatus.textContent = message;
}

function addMidiLog(message) {
  const time = new Date().toLocaleTimeString();
  state.midiLog.unshift(`${time}  ${message}`);
  state.midiLog = state.midiLog.slice(0, 60);
  els.midiLog.textContent = state.midiLog.join("\n") || "Brak komunikatów.";
}

function clearMidiLog() {
  state.midiLog = [];
  state.midiClockCount = 0;
  state.midiSustainDown = false;
  state.midiSustainHighIsDown = null;
  state.midiAwaitInitialSustainRelease = false;
  state.midiPedalMode = false;
  els.midiClockLabel.textContent = "0";
  els.midiLastLabel.textContent = "-";
  els.midiLog.textContent = "Wyczyszczono. Naciśnij klawisz albo uruchom rytm na Casio.";
}

function armMidiStart() {
  state.midiWaitForStart = !state.midiWaitForStart;
  if (state.midiWaitForStart) {
    state.midiPedalMode = true;
    state.midiSustainDown = true;
    state.midiSustainHighIsDown = true;
    state.midiAwaitInitialSustainRelease = true;
    startPedalPlayback();
    updateMidiStatus("Gotowe. Pierwsza linia jest podswietlona, a linie zmieniasz puszczeniem pedalu sustain.");
    closeMidiDialog();
  } else {
    stopPlayback();
    updateMidiStatus("Start MIDI anulowany.");
  }
  updateMidiMode();
  addMidiLog(state.midiWaitForStart
    ? "Czekam na sygnal startu z Casio. Tryb pedalowy aktywny."
    : "Anulowano czekanie na start MIDI.");
}

function updateMidiMode() {
  els.midiModeLabel.textContent = state.midiWaitForStart ? "Czeka na NOTE ON" : "Ręczny";
  els.midiArmStartBtn.textContent = state.midiWaitForStart ? "Anuluj start" : "Czekaj na start";
  els.midiArmStartBtn.classList.toggle("primary", state.midiWaitForStart);
}

function bindEvents() {
  els.songSelect.addEventListener("change", () => {
    state.currentId = els.songSelect.value;
    renderSong();
  });

  els.saveBtn.addEventListener("click", () => {
    getCurrentSong().raw = els.songEditor.value;
    saveSongs();
    populateSelects();
    els.songSelect.value = state.currentId;
    renderSong();
  });

  els.newSongBtn.addEventListener("click", () => {
    const song = {
      id: crypto.randomUUID(),
      raw: `# Nowy utwor
@artist: 
@bpm: 96
@rhythm: Pop 4/4
@scroll: 1.00

[Zwrotka 1]
[C]Wpisz tutaj tekst [G]i akordy
[Am]Kolejna linia [F]utworu`
    };
    state.songs.push(song);
    state.currentId = song.id;
    saveSongs();
    populateSelects();
    els.songSelect.value = state.currentId;
    renderSong();
  });

  els.duplicateSongBtn.addEventListener("click", () => {
    const base = getCurrentSong();
    const copy = { id: crypto.randomUUID(), raw: base.raw.replace(/^# (.*)$/m, "# $1 - kopia") };
    state.songs.push(copy);
    state.currentId = copy.id;
    saveSongs();
    populateSelects();
    els.songSelect.value = state.currentId;
    renderSong();
  });

  els.deleteSongBtn.addEventListener("click", () => {
    if (state.songs.length === 1) return;
    state.songs = state.songs.filter((song) => song.id !== state.currentId);
    state.currentId = state.songs[0].id;
    saveSongs();
    populateSelects();
    renderSong();
  });

  els.playBtn.addEventListener("click", () => {
    if (!state.isPlaying) {
      startPlayback();
      return;
    }

    stopPlayback();
  });

  els.midiBtn.addEventListener("click", openMidiDialog);
  els.learnBtn.addEventListener("click", toggleLearning);
  els.autoMapBtn.addEventListener("click", toggleAutoMap);
  els.midiCloseBtn.addEventListener("click", closeMidiDialog);
  els.midiConnectBtn.addEventListener("click", connectMidi);
  els.midiArmStartBtn.addEventListener("click", armMidiStart);
  els.midiClearBtn.addEventListener("click", clearMidiLog);

  els.resetBtn.addEventListener("click", () => {
    stopPlayback();
    state.startedSong = false;
    state.playStartTime = null;
    state.playStartScrollTop = 0;
    state.firstLineHoldMs = 0;
    state.firstPlayableLineIndex = -1;
    state.playStartBar = 0;
    state.midiSustainDown = false;
    state.midiSustainHighIsDown = null;
    state.midiAwaitInitialSustainRelease = false;
    state.midiPedalMode = false;
    state.isLearning = false;
    state.learningStartTime = null;
    state.learningTransitions = [];
    state.autoMapMode = false;
    state.autoMap = null;
    state.autoMapStartTime = null;
    state.autoMapNextTransition = 0;
    updateLearnButton();
    updateAutoMapButton();
    els.prompter.scrollTo({ top: 0, behavior: "smooth" });
  });

  els.bpmDownBtn.addEventListener("click", () => {
    els.bpmInput.value = clamp(Number(els.bpmInput.value) - 1, 30, 240);
    updateCurrentMeta("bpm", els.bpmInput.value);
  });

  els.bpmUpBtn.addEventListener("click", () => {
    els.bpmInput.value = clamp(Number(els.bpmInput.value) + 1, 30, 240);
    updateCurrentMeta("bpm", els.bpmInput.value);
  });

  els.bpmInput.addEventListener("change", () => {
    els.bpmInput.value = clamp(Number(els.bpmInput.value) || 96, 30, 240);
    updateCurrentMeta("bpm", els.bpmInput.value);
  });

  els.rhythmSelect.addEventListener("change", () => {
    const rhythm = rhythms.find((item) => item.id === els.rhythmSelect.value) || rhythms[0];
    updateCurrentMeta("rhythm", rhythm.name);
  });

  els.speedInput.addEventListener("input", () => {
    setSpeed(els.speedInput.value);
  });

  els.speedNumberInput.addEventListener("change", () => {
    setSpeed(els.speedNumberInput.value);
  });

  els.speedDownBtn.addEventListener("click", () => {
    setSpeed(Number(els.speedNumberInput.value) - 0.01);
  });

  els.speedUpBtn.addEventListener("click", () => {
    setSpeed(Number(els.speedNumberInput.value) + 0.01);
  });

  els.fontInput.addEventListener("input", () => {
    state.settings.fontSize = Number(els.fontInput.value);
    els.prompter.style.setProperty("--song-font", `${state.settings.fontSize}px`);
    saveSettings();
  });

  els.prompter.addEventListener("scroll", updateActiveLine, { passive: true });

  window.addEventListener("scroll", () => {
    if (window.scrollX || window.scrollY) window.scrollTo(0, 0);
  }, { passive: true });

  window.addEventListener("wheel", (event) => {
    if (!els.prompter.contains(event.target)) {
      els.prompter.scrollTop += event.deltaY;
      event.preventDefault();
    }
  }, { passive: false });

  els.exportBtn.addEventListener("click", () => {
    download("audioprompter-utwory.json", JSON.stringify(state.songs, null, 2));
  });

  els.importInput.addEventListener("change", async () => {
    const file = els.importInput.files[0];
    if (!file) return;
    const imported = JSON.parse(await file.text());
    if (Array.isArray(imported) && imported.every((song) => song.raw)) {
      state.songs = imported.map((song) => ({ id: song.id || crypto.randomUUID(), raw: song.raw }));
      state.currentId = state.songs[0].id;
      saveSongs();
      populateSelects();
      renderSong();
    }
    els.importInput.value = "";
  });

  els.fullscreenBtn.addEventListener("click", async () => {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
    } else {
      await document.documentElement.requestFullscreen();
    }
  });

  window.addEventListener("keydown", (event) => {
    if (event.target === els.songEditor) return;
    if (event.code === "Space") {
      event.preventDefault();
      els.playBtn.click();
    }
    if (event.code === "ArrowUp") {
      event.preventDefault();
      els.bpmUpBtn.click();
    }
    if (event.code === "ArrowDown") {
      event.preventDefault();
      els.bpmDownBtn.click();
    }
  });
}

function init() {
  state.currentId = state.songs.find((song) => song.id === "my-way-szczescie-jest-we-mnie")?.id || state.songs[0].id;
  populateSelects();
  els.songSelect.value = state.currentId;
  bindEvents();
  renderSong();
  requestAnimationFrame(playbackStep);
}

try {
  init();
} catch (error) {
  document.body.innerHTML = `
    <main class="startup-error">
      <h1>AudioPrompter nie wystartowal</h1>
      <p>Odśwież stronę. Jeśli problem wróci, pokaż ten komunikat:</p>
      <pre>${String(error.stack || error.message || error)}</pre>
    </main>
  `;
  throw error;
}
