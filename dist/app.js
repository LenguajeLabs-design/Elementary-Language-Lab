const gradeLabels = {
  k1: "Kindergarten–Grade 1",
  23: "Grades 2–3",
  45: "Grades 4–5",
};

const subjectLabels = {
  science: "Science",
  literacy: "Language & literacy",
  math: "Mathematics",
  community: "Social studies",
  specialist: "Specialist class",
};

const profileLabels = {
  unsure: "Profile not selected",
  starting: "Starting to use English",
  growing: "Growing independence",
  extending: "Extending academic language",
};

const taskPlans = {
  describe: {
    label: "Observe and describe",
    supports: [
      {
        title: "Model one precise observation",
        body: "Point to the feature, name it, and think aloud. Keep the model short enough for students to reuse.",
        frames: {
          k1: "I see a ___. It is ___.",
          23: "I notice ___; it looks/feels ___.",
          45: "One observable feature is ___, which suggests ___.",
        },
      },
      {
        title: "Rehearse before recording",
        body: "Partners point, say the observation, and add one detail before drawing or writing.",
        frames: {
          k1: "Look → point → say",
          23: "I notice ___ and I also notice ___.",
          45: "My first observation was ___. A more precise detail is ___.",
        },
      },
      {
        title: "Offer three ways to respond",
        body: "Students may draw and label, record a short explanation, or write using the shared word bank.",
        frames: {
          k1: "Draw · label · tell",
          23: "Draw · label · add one sentence",
          45: "Record the feature · add evidence · explain its importance",
        },
      },
    ],
    check: "Ask students to identify one feature you did not model. Fade the frame when they can add a precise detail independently.",
    home: "Invite students to name or discuss the object in a home language before choosing the most useful English words.",
  },
  directions: {
    label: "Follow multi-step directions",
    supports: [
      {
        title: "Make the sequence visible",
        body: "Show a three-step strip using icons, materials, or quick sketches. Point as you give each direction.",
        frames: {
          k1: "First ___, then ___.",
          23: "First we ___. Next we ___. Finally we ___.",
          45: "Before ___, make sure to ___. After that, ___.",
        },
      },
      {
        title: "Chunk, pause, and rehearse",
        body: "Give no more than two directions, pause, and let partners show or restate what happens next.",
        frames: {
          k1: "Show me step one.",
          23: "The next step is ___ because ___.",
          45: "We need to ___ before ___ so that ___.",
        },
      },
      {
        title: "Let a student lead the check",
        body: "A student points to the visual sequence while the class demonstrates each step without starting the task yet.",
        frames: {
          k1: "Ready? First…",
          23: "Check: Do we have ___?",
          45: "A successful process includes ___, ___, and ___.",
        },
      },
    ],
    check: "Hide one visual and ask students what is missing. Fade by replacing pictures with key verbs, then remove the strip.",
    home: "For safety or unfamiliar routines, preview essential action words in students’ home languages as well as English.",
  },
  talk: {
    label: "Join partner or group talk",
    supports: [
      {
        title: "Build in quiet thinking time",
        body: "Show the prompt, allow drawing or note-making, then ask everyone to rehearse with one partner.",
        frames: {
          k1: "I think ___.",
          23: "I think ___ because ___.",
          45: "My position is ___; one reason is ___.",
        },
      },
      {
        title: "Give each partner a listening job",
        body: "Partner A shares. Partner B points to the evidence or paraphrases before adding a new idea.",
        frames: {
          k1: "You said ___.",
          23: "I heard you say ___. I want to add ___.",
          45: "Your idea connects to ___ because ___.",
        },
      },
      {
        title: "Share a partner’s idea",
        body: "Invite students to report what their partner said. This makes listening visible and lowers performance pressure.",
        frames: {
          k1: "___ noticed ___.",
          23: "My partner explained that ___.",
          45: "My partner’s main point was ___, supported by ___.",
        },
      },
    ],
    check: "Listen for both participation and idea-building. Fade the printed frames while keeping the predictable turn-taking routine.",
    home: "Allow partners to develop the idea using all their languages before preparing the English wording they want to share.",
  },
  read: {
    label: "Read or interpret a text/visual",
    supports: [
      {
        title: "Preview meaning before close reading",
        body: "Use the title, image, diagram, or real object to activate what students already know and predict key ideas.",
        frames: {
          k1: "I see ___. Maybe ___.",
          23: "The picture makes me think the text will explain ___.",
          45: "Based on the visual evidence, I predict the text will argue/explain ___.",
        },
      },
      {
        title: "Mark the words carrying the meaning",
        body: "Highlight a few key nouns, verbs, and connectors. Add a sketch, gesture, or familiar-language connection.",
        frames: {
          k1: "Find ___. Show ___.",
          23: "The word ___ helps me understand ___.",
          45: "The phrase ___ signals that the author is ___.",
        },
      },
      {
        title: "Rebuild the idea after reading",
        body: "Students arrange pictures, labels, or short notes and explain the main idea to a partner.",
        frames: {
          k1: "This is about ___.",
          23: "The main idea is ___. One detail is ___.",
          45: "The central idea is ___. The strongest supporting detail is ___.",
        },
      },
    ],
    check: "Ask for the main idea using a new image or example. Fade by reducing the annotated words and letting students choose what to mark.",
    home: "Invite students to preview a short summary or key terms in a home language, then return to the shared English text.",
  },
  explain: {
    label: "Explain how or why",
    supports: [
      {
        title: "Build the explanation as a map",
        body: "Arrange images, actions, or evidence with arrows before asking for connected language.",
        frames: {
          k1: "___ happened because ___.",
          23: "First ___. Because ___, ___ happened next.",
          45: "The process begins when ___. This causes ___, which leads to ___.",
        },
      },
      {
        title: "Rehearse the reasoning aloud",
        body: "Students explain the map to a partner who points to each step and asks one clarifying question.",
        frames: {
          k1: "How? / Why?",
          23: "Can you explain why ___?",
          45: "What evidence connects ___ to ___?",
        },
      },
      {
        title: "Connect the claim to evidence",
        body: "Colour-code or physically separate the idea, the evidence, and the reasoning that connects them.",
        frames: {
          k1: "I think ___. I saw ___.",
          23: "I think ___ because the evidence shows ___.",
          45: "My claim is ___. The evidence ___ supports it because ___.",
        },
      },
    ],
    check: "Remove one arrow from the map and ask students to repair the explanation. Fade from images to key words, then to self-created notes.",
    home: "Students may first explain the relationship in a home language, then identify the English terms needed for the class explanation.",
  },
  show: {
    label: "Show what they understand",
    supports: [
      {
        title: "Name the evidence you need",
        body: "Separate the content goal from the language demands. Tell students exactly what understanding their response must reveal.",
        frames: {
          k1: "Show me ___ and tell me one thing.",
          23: "My response needs to show ___ and ___.",
          45: "A strong response explains ___ and supports it with ___.",
        },
      },
      {
        title: "Offer meaningful response modes",
        body: "Let students draw and label, build and explain, record audio, or write—when each mode provides valid evidence of the goal.",
        frames: {
          k1: "Draw · build · tell",
          23: "Choose a mode, then add the key idea and one detail.",
          45: "Choose the mode that best communicates your reasoning and evidence.",
        },
      },
      {
        title: "Use one shared success check",
        body: "Apply the same short content criteria across response modes so language support does not quietly lower the thinking.",
        frames: {
          k1: "I showed ___.",
          23: "I explained ___ and included ___.",
          45: "My response is complete because it includes ___, ___, and ___.",
        },
      },
    ],
    check: "Ask a brief follow-up question to confirm the student’s reasoning. Fade the response menu when students can choose an effective mode independently.",
    home: "When the goal is content knowledge rather than English proficiency, home-language evidence can help clarify what the learner understands—subject to local policy.",
  },
};

const momentDetails = {
  directions: {
    tag: "Routine support",
    title: "Show the steps before adding more words",
    intro: "A visible sequence helps students understand the process, notice the action language, and participate more independently.",
    steps: [
      "Photograph, sketch, or place the real materials for three key steps.",
      "Say each action while pointing. Keep the sentence pattern consistent.",
      "Partners rehearse the sequence by pointing and retelling.",
      "Remove one cue when students can act without it.",
    ],
    frame: "First we ___. Next we ___. Finally we ___.",
    note: "For safety-critical directions, confirm the school’s approved translation and supervision procedures.",
  },
  talk: {
    tag: "Interaction support",
    title: "Rehearse an idea before sharing it publicly",
    intro: "Quiet thinking time and predictable partner roles give every learner something meaningful to contribute.",
    steps: [
      "Show one clear discussion question and allow drawing or note-making.",
      "Partner A shares; Partner B paraphrases before adding an idea.",
      "Invite students to report their partner’s contribution.",
      "Keep the routine; fade the printed language frame over time.",
    ],
    frame: "I heard you say ___. I want to add ___.",
    note: "The goal is idea-building, not identical sentences. Welcome gestures, visuals, and home-language rehearsal.",
  },
  read: {
    tag: "Reading & viewing support",
    title: "Preview meaning, then notice how the text carries it",
    intro: "Images, headings, diagrams, and prior knowledge provide an entry point without replacing the shared text.",
    steps: [
      "Preview the title, visuals, and two or three essential terms.",
      "Ask students to predict the topic or process with a partner.",
      "Read a short section and mark the phrase that carries the main idea.",
      "Rebuild the idea with pictures, labels, or a quick oral retell.",
    ],
    frame: "The main idea is ___. The detail ___ helps me know this.",
    note: "Use translations strategically to connect meaning across languages, then return to the shared text and task.",
  },
  show: {
    tag: "Assessment support",
    title: "Change the response mode, not the learning goal",
    intro: "A drawing, model, oral explanation, or written response can each provide evidence—if they reveal the same intended understanding.",
    steps: [
      "Name the content knowledge or reasoning that must be visible.",
      "Offer two or three response modes that can provide valid evidence.",
      "Use the same short success criteria across all options.",
      "Ask one follow-up question to clarify the learner’s reasoning.",
    ],
    frame: "My response shows ___ because ___.",
    note: "Formal accommodations and grading decisions must follow the learner’s plan and the school’s approved policy.",
  },
};

const toolDetails = {
  frames: {
    tag: "Sentence frame preview",
    title: "Talk moves for explaining",
    intro: "Choose the lightest prompt that helps students connect an idea, evidence, and reason.",
    steps: [
      "Starting: I think ___ because ___.",
      "Growing: My evidence is ___. This shows ___.",
      "Extending: Although ___, the evidence suggests ___ because ___.",
      "Partner response: I heard ___. I agree/disagree because ___.",
    ],
    frame: "Model once → rehearse with a partner → share → fade the prompt",
    note: "In a finished hub, this preview could open a printable, editable one-page resource.",
  },
  routine: {
    tag: "Visual routine preview",
    title: "Show the steps",
    intro: "Use the same three-part strip across investigations, transitions, making tasks, and independent routines.",
    steps: [
      "LOOK — attend to the model, object, or first cue.",
      "DO — complete one manageable step.",
      "CHECK — compare with the success example or ask a partner.",
      "Replace text with lesson-specific verbs or photographs.",
    ],
    frame: "Look → do → check",
    note: "Keep essential directions in accessible text, even when the visual strip uses icons or photographs.",
  },
  response: {
    tag: "Response menu preview",
    title: "Ways to show learning",
    intro: "Offer a small, purposeful choice when different modes can demonstrate the same intended understanding.",
    steps: [
      "DRAW + LABEL — show the parts, pattern, or relationship.",
      "BUILD + EXPLAIN — create a model and narrate how it works.",
      "RECORD — give a short audio or video explanation.",
      "WRITE — use a diagram, word bank, or frame as needed.",
    ],
    frame: "I chose ___ because it helps me show ___.",
    note: "Do not offer a response mode if it changes the construct being assessed. Confirm formal assessment rules locally.",
  },
};

const form = document.querySelector("#planner-form");
const results = document.querySelector("#planner-results");
const toast = document.querySelector("#toast");
const menuButton = document.querySelector(".menu-button");
const primaryNav = document.querySelector("#primary-nav");
const dialog = document.querySelector("#detail-dialog");
const dialogContent = document.querySelector("#dialog-content");
const dialogClose = document.querySelector(".dialog-close");

let currentPlanText = "";
let toastTimer;

function selectedValue(id) {
  return document.querySelector(`#${id}`).value;
}

function profileAdjustment(profile) {
  if (profile === "starting") {
    return "Add a visual or gesture, let students rehearse with a home-language partner, and use one short language chunk at a time.";
  }
  if (profile === "extending") {
    return "Invite students to connect ideas with a precise connector, justify a choice, or add discipline-specific vocabulary.";
  }
  if (profile === "unsure") {
    return "Start with the visual and participation routine. Notice what students can do before choosing any additional language scaffold.";
  }
  return "Keep the model visible for rehearsal, then remove one part of the support and notice whether independence increases.";
}

function subjectAdjustment(subject) {
  const adjustments = {
    science: "Anchor new language to an observable object, process, model, or piece of evidence.",
    literacy: "Connect the support to the shared text, author’s craft, or story meaning—not an isolated vocabulary exercise.",
    math: "Keep the mathematical representation visible and ask students to connect quantities, symbols, and words.",
    community: "Use images, maps, artefacts, and more than one perspective to build background knowledge.",
    specialist: "Model the action with real materials, then keep the essential routine language consistent from lesson to lesson.",
  };
  return adjustments[subject];
}

function buildPlanText({ grade, subject, task, profile, plan }) {
  const supports = plan.supports
    .map((support, index) => `${index + 1}. ${support.title}\n${support.body}\nTry: “${support.frames[grade]}”`)
    .join("\n\n");

  return `Elementary Language Lab — sample plan\n${gradeLabels[grade]} · ${subjectLabels[subject]} · ${plan.label}\n${profileLabels[profile]}\n\n${supports}\n\nQuick check and fade:\n${plan.check}\n\nHome-language option:\n${plan.home}\n\nContext move:\n${subjectAdjustment(subject)}\n\nProfile adjustment:\n${profileAdjustment(profile)}`;
}

function renderPlan({ moveFocus = true } = {}) {
  const grade = selectedValue("grade");
  const subject = selectedValue("subject");
  const task = selectedValue("task");
  const profile = selectedValue("profile");
  const plan = taskPlans[task];

  currentPlanText = buildPlanText({ grade, subject, task, profile, plan });

  const supportMarkup = plan.supports
    .map(
      (support, index) => `
        <article class="support-card">
          <span class="support-number">0${index + 1}</span>
          <div>
            <h4>${support.title}</h4>
            <p>${support.body}</p>
            <span class="language-frame">“${support.frames[grade]}”</span>
          </div>
        </article>`,
    )
    .join("");

  results.innerHTML = `
    <div class="results-content">
      <div class="results-header">
        <div>
          <span class="results-label">Your sample plan</span>
          <h3 id="results-title" tabindex="-1">${gradeLabels[grade]} · ${subjectLabels[subject]} · ${plan.label}</h3>
        </div>
        <div class="results-actions" aria-label="Plan actions">
          <button class="icon-button" type="button" data-copy-plan>Copy plan</button>
          <button class="icon-button" type="button" data-print-plan>Print</button>
        </div>
      </div>
      <div class="support-list">${supportMarkup}</div>
      <div class="check-strip"><strong>Check and adjust:</strong> ${plan.check}</div>
      <div class="check-strip"><strong>Use all language resources:</strong> ${plan.home}</div>
      <div class="check-strip"><strong>${subjectLabels[subject]} context:</strong> ${subjectAdjustment(subject)}</div>
      <div class="check-strip"><strong>Profile adjustment:</strong> ${profileAdjustment(profile)}</div>
    </div>`;

  results.querySelector("[data-copy-plan]").addEventListener("click", copyPlan);
  results.querySelector("[data-print-plan]").addEventListener("click", () => window.print());

  if (moveFocus) {
    results.querySelector("#results-title").focus();
  }
}

async function copyPlan() {
  try {
    await navigator.clipboard.writeText(currentPlanText);
    showToast("Plan copied to your clipboard.");
  } catch {
    showToast("Copy is unavailable in this preview. Try Print instead.");
  }
}

function showToast(message) {
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("is-visible");
  toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 2800);
}

function openDetail(detail) {
  const steps = detail.steps.map((step) => `<li>${step}</li>`).join("");
  dialogContent.innerHTML = `
    <span class="dialog-tag">${detail.tag}</span>
    <h2 id="dialog-title">${detail.title}</h2>
    <p>${detail.intro}</p>
    <ol class="dialog-steps">${steps}</ol>
    <div class="dialog-frame">${detail.frame}</div>
    <p class="dialog-footer-note">${detail.note}</p>`;
  dialog.showModal();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  renderPlan();
});

document.querySelectorAll("[data-moment]").forEach((button) => {
  button.addEventListener("click", () => openDetail(momentDetails[button.dataset.moment]));
});

document.querySelectorAll("[data-tool]").forEach((button) => {
  button.addEventListener("click", () => openDetail(toolDetails[button.dataset.tool]));
});

document.querySelectorAll("[data-contact]").forEach((button) => {
  button.addEventListener("click", () => {
    showToast("Prototype action: connect this to your school’s EAL request form or booking link.");
  });
});

dialogClose.addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  primaryNav.classList.toggle("is-open", !isOpen);
});

primaryNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuButton.setAttribute("aria-expanded", "false");
    primaryNav.classList.remove("is-open");
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && primaryNav.classList.contains("is-open")) {
    menuButton.setAttribute("aria-expanded", "false");
    primaryNav.classList.remove("is-open");
    menuButton.focus();
  }
});

renderPlan({ moveFocus: false });
