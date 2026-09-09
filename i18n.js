/* AI Summer Korea — translations.
   English lives in index.html so that crawlers that do not run JavaScript
   still read a full page. This file carries every other language, plus the
   English copies of the list data that app.js re-renders on language change.

   Languages after ko carry only the core sections (nav, hero, why, program,
   apply, vol, faq, foot). Everything else falls back to English in app.js.

   Adding a language: copy a core block, translate, add the code to LANGS.
   Keep the item COUNT of every array identical across languages — a mismatched
   array renders short in that language only, and nothing warns you. */

var LANGS = [
  { code:"en", label:"English", english:"English", tag:"en", dir:"ltr" },
  { code:"ko", label:"한국어", english:"Korean", tag:"ko", dir:"ltr" },
  { code:"zh-Hans", label:"简体中文", english:"Chinese (Simplified)", tag:"zh-Hans", dir:"ltr" },
  { code:"zh-Hant", label:"繁體中文", english:"Chinese (Traditional)", tag:"zh-Hant", dir:"ltr" },
  { code:"ja", label:"日本語", english:"Japanese", tag:"ja", dir:"ltr" },
  { code:"es", label:"Español", english:"Spanish", tag:"es", dir:"ltr" },
  { code:"fr", label:"Français", english:"French", tag:"fr", dir:"ltr" },
  { code:"de", label:"Deutsch", english:"German", tag:"de", dir:"ltr" }
];

var STATUS_LABELS = {
  en:{ confirmed:"Confirmed", talks:"In discussion", planned:"Planned" },
  ko:{ confirmed:"확정",      talks:"협의 중",       planned:"계획" },
  "zh-Hans":{ confirmed:"已确认", talks:"洽谈中", planned:"计划中" },
  "zh-Hant":{ confirmed:"已確認", talks:"洽談中", planned:"規劃中" },
  "ja":{ confirmed:"確定", talks:"協議中", planned:"予定" },
  "es":{ confirmed:"Confirmado", talks:"En conversaciones", planned:"Previsto" },
  "fr":{ confirmed:"Confirmé", talks:"En discussion", planned:"Prévu" },
  "de":{ confirmed:"Bestätigt", talks:"In Gesprächen", planned:"Geplant" }
};

var I18N = {

/* ───────────────────────── ENGLISH ───────────────────────── */
en:{
  nav:{ brand:"AI Summer Korea", program:"Program", visits:"Where You Go", apply:"Apply", sponsors:"Sponsors", forum:"Forum", about:"About" },

  hero:{
    eyebrow:"First cohort · Summer 2027 · 200 seats",
    title:"Four weeks in Korea, where the chips that train AI are made.",
    lede:"A fully sponsored summer program bringing undergraduates from around the world into Korea's AI and semiconductor industry — the factories, the labs, the people who built them — alongside Korean and Asian students their own age.",
    ctaApply:"Apply for the 2027 cohort", ctaSponsor:"Sponsor a cohort",
    s1k:"Tuition", s1v:"$0", s2k:"Duration", s2v:"4 weeks",
    s3k:"Seats, first cohort", s3v:"200", s4k:"Open to", s4v:"Worldwide",
    fine:"Travel, housing, meals, and program costs are covered by our sponsors. A refundable completion deposit applies."
  },

  why:{
    kicker:"Why this exists",
    title:"You can read about the supply chain. Or you can stand in it.",
    p1:"Almost every frontier AI model in the world is trained on memory and logic that passed through Korean fabrication plants. Students who will spend their careers building on top of that hardware rarely get to see any of it.",
    p2:"AI Summer Korea exists to close that gap — and to introduce a generation of engineers to the country, the industry, and the peers they will be working with for the next thirty years.",
    c1t:"Industry, not tourism",
    c1b:"Semiconductor and manufacturing site visits, research labs, and working sessions with engineers — not a bus tour with a factory stop bolted on.",
    c2t:"Peers, not an audience",
    c2b:"Korean and Asian undergraduates join as volunteers and teammates for the full four weeks. Everyone is a participant. Nobody is being toured around.",
    c3t:"Work, not attendance",
    c3b:"Every participant ships a team project and presents it. What you build is the record of the program — and what sponsors actually look at."
  },

  program:{
    kicker:"The four weeks", title:"Program",
    lede:"Based at a residential campus in Yangpyeong, Gyeonggi Province, with travel to sites across the country.",
    w1tag:"Week 1", w1t:"Ground truth",
    w1b:"Arrival, orientation, and a working introduction to Korea's technology economy — how it was built, who built it, and where it is going. Language and culture basics. Teams are formed: visiting, Korean, and Asian students mixed from day one.",
    w2tag:"Week 2", w2t:"Inside the industry",
    w2b:"Site visits to semiconductor, manufacturing, and technology facilities, in small groups. Sessions with engineers and executives. Teams choose the problem they will work on.",
    w3tag:"Week 3", w3t:"Build",
    w3b:"Concentrated project work with mentor support and compute credits. Evening sessions with founders and researchers. One weekend of cultural travel outside the capital.",
    w4tag:"Week 4", w4t:"Present",
    w4b:"Final builds, demo day in front of sponsor executives and invited faculty, and closing. Standout teams and individuals are introduced to sponsor internship and recruiting tracks.",
    noteT:"On group size:",
    noteB:"Semiconductor facilities are cleanroom environments with strict access limits. Site visits run in small groups on rotation across several days — this is a feature of how the program is built, not an afterthought."
  },

  visits:{
    kicker:"Where you go", title:"Sites & partners",
    lede:"We publish partners only once an agreement is signed. Everything below is marked with its actual status — nothing here is a logo we hope to earn.",
    fine:"Site list is provisional and will be updated as agreements are confirmed. Participants are notified of the final itinerary before departure.",
    items:[
      { name:"Semiconductor fabrication site visit", status:"talks", note:"Small-group cleanroom-adjacent tours. Partner named once an agreement is signed." },
      { name:"Automotive & robotics manufacturer", status:"talks", note:"Autonomous driving and robotics research, on a working production campus." },
      { name:"Electronics group AI research laboratory", status:"talks", note:"Sessions with researchers building foundation models in Korea." },
      { name:"Entertainment technology company", status:"planned", note:"How AI is used in music production, voice and translation by a company exporting culture worldwide." },
      { name:"National Assembly", status:"planned", note:"How a democracy actually writes AI law — a session with legislative staff, not a photo on the steps." },
      { name:"Mind sports and the limits of machine judgment", status:"planned", note:"Go, chess, xiangqi and esports were all medal sports at the Hangzhou Asian Games in 2023 — competing against machines is already part of international sport. A session on Go, human intuition, and what a machine does not see, held in the city where AlphaGo played." },
      { name:"University AI research laboratories", status:"planned", note:"Working sessions with graduate researchers in Seoul and Daejeon." },
      { name:"AI startup & venture studio day", status:"planned", note:"Founder sessions and office visits in Seoul." },
      { name:"Cultural travel weekend", status:"planned", note:"One weekend outside the capital region." },
      { name:"Residential campus, Yangpyeong, Gyeonggi", status:"talks", note:"Public residential education campus, capacity approx. 570. Booking to be confirmed." }
    ]
  },

  apply:{
    kicker:"Applying", title:"Who this is for",
    elig:"Eligibility", covered:"What is covered",
    eligItems:[
      "Enrolled undergraduate at an accredited college or university, in any country",
      "Studying computer science, engineering, mathematics, or a related field — or able to show equivalent work",
      "Available for the full four weeks in summer 2027",
      "Holds a passport valid for the duration of travel",
      "No prior travel to Korea required, and no Korean language required",
      "We select across countries and institutions — applicants from under-represented countries and universities are actively encouraged"
    ],
    coveredItems:[
      "Round-trip international airfare",
      "Housing for the full four weeks",
      "All meals on program days",
      "Ground transport, site visits, and program activities",
      "Travel and medical insurance for the program period",
      "Compute and AI tool credits for project work"
    ],
    depT:"Completion deposit:",
    depB:"Admitted students place a refundable deposit to hold their seat. It is returned in full on completion of the program. The program itself is free — the deposit exists so that a sponsored seat is not left empty.",
    btn:"Applications open — join the notify list",
    fine:"Selection is by committee on the strength of your work and your reasons for coming. Applications for the summer 2027 cohort open in autumn 2026."
  },

  vol:{
    kicker:"Korean & Asian students", title:"Join as a volunteer teammate",
    lede:"This is not a program that happens to Korean students — it happens with them. Undergraduates based in Korea and across Asia join each cohort as volunteers, teammates, and guides.",
    c1t:"What you do",
    c1b:"Work on a project team for the full four weeks, help visiting students navigate the country, and take part in every site visit and session alongside them.",
    c2t:"What you get",
    c2b:"The same access, the same mentors, the same demo day, and a working relationship with peers at universities worldwide. Housing and meals are covered on program days.",
    btn:"Register interest as a volunteer"
  },

  spon:{
    kicker:"For sponsors", title:"Sponsor a piece, not a headcount",
    lede:"Different sponsors fund different parts of this program, in the currency that is easiest for them to give. Some give seats on a plane. Some give access to a facility. Some give compute. All of it counts.",
    th1:"What is funded", th2:"Typical sponsor", th3:"Form",
    rows:[
      ["Airfare","Airlines, large corporate CSR","Seats or cash"],
      ["Housing & meals","Provincial government, listed companies","Cash or facility"],
      ["Industry site visits","The host company itself","Access, not cash"],
      ["Compute & AI tools","AI companies","Credits and engineer sessions"],
      ["Named scholarships","Corporations, individual donors","Cash"],
      ["Country programming","National agencies","Cash or in-kind"]
    ],
    c1t:"Why companies fund this",
    c1b:"Two hundred screened undergraduates in AI and computing, from around the world, spend four weeks inside your industry and present work you can evaluate. Demo day is a hiring room, not a photo opportunity.",
    c2t:"What we report back",
    c2b:"Applicant and selection numbers, participant outcomes, project results, and follow-on recruiting activity — delivered after each cohort. We would rather show you a number than a testimonial.",
    budT:"The number, plainly:",
    budB:"The first cohort of 200 is budgeted at approximately KRW 2.17 billion — around USD 1.57 million all-in, or roughly USD 7,900 per participant. That covers airfare, four weeks of housing and meals, transport, insurance and programming, plus the staff and operating costs of actually running it. We publish the figure because a sponsor is going to work it out anyway. The line-by-line budget and the funding plan come with the sponsor brief. Figures are provisional until quotations are confirmed.",
    btn:"Request the sponsor brief",

    foundingTitle:"Founding Sponsors",
    foundingLede:"One seat is ten thousand dollars. It brings four students to Korea.",
    foundingBody1:"Most of what this programme needs is not money. Sites open their doors, a province lends a campus, a company sends two engineers for an afternoon. Those things are negotiated rather than bought, and they are the harder half of the work.",
    foundingBody2:"But four students flying in from four countries \u2014 housed, fed and insured for the length of the programme \u2014 costs about ten thousand dollars. That is a figure one person can decide on alone, in an afternoon, without a budget committee. So we are asking fifty people to each cover four students.",
    foundingBody3:"A founding sponsor's ten thousand dollars goes to students and to nothing else: travel, housing, meals, insurance. Not to salaries, not to office rent, not to the cost of raising the money itself. Those are met on a separate line \u2014 from provincial and national programmes and from corporate partners \u2014 because that is the line those bodies exist to fund, and because a person giving their own money deserves a clean answer about where it goes.",
    foundingBody4:"If you would like to, you will meet the four students your seat brought, and at the end of the four weeks you will see what they built. We think that is a more honest thing to offer than a logo on a banner.",
    foundingCounter:"Founding sponsors secured: 0 of 50.",
    foundingCounterNote:"This number changes when an agreement is signed, and not before.",
    foundingCta:"Become a founding sponsor"
  },

  faq:{
    kicker:"Questions", title:"Frequently asked",
    items:[
      ["Is it really free?","Yes. Airfare, housing, meals, insurance, and program costs are covered by sponsors. Admitted students place a refundable deposit that is returned in full when they complete the program."],
      ["Do I need to speak Korean?","No. The program runs in English. You will pick up some Korean along the way, and your Korean teammates will make sure you do not get lost."],
      ["Do I get academic credit?","Not at present. We are in early conversations with university partners about credit-bearing options for future cohorts. We will not claim credit until an agreement exists."],
      ["What are the exact dates?","Summer 2027, four weeks. Exact dates are confirmed once the campus booking and site visits are locked, and will be published here before applications open."],
      ["Who pays for my visa?","It depends on your passport. For a stay of this length many nationalities need only a K-ETA travel authorization, while others require a short-stay visa. We tell you which applies to you, provide the supporting documentation, and cover the required application fees."],
      ["What is expected of me during the program?","Full participation for four weeks, and a team project presented on demo day. This is a working program, not a holiday."],
      ["I am a Korean or Asian student. Can I take part?","Yes — as a volunteer teammate. See the volunteer section above. You take part in the full program alongside the visiting cohort."],
      ["How many people are admitted?","The first cohort is 200. We are deliberately starting smaller than our long-term target so that the first cohort is run properly."]
    ]
  },

  forum:{
    kicker:"The wider program", title:"One half of something annual",
    p1:"AI Summer Korea is the student track of the 999 Seoul Forum — a planned annual convening held every September 9th in Seoul, on the premise that Korea should host a standing international forum of its own rather than sending delegations to everyone else's.",
    p2:"The two are built to feed each other. Work that teams produce in the summer is carried into the September forum and put in front of the people who can act on it. The organizations that fund one are the organizations that fund the other.",
    noteT:"Status:",
    noteB:"The forum is in development and has not yet held its first convening. We describe it here as a plan, because that is what it currently is.",
    b1t:"Summer · four weeks", b1b:"Two hundred undergraduates from around the world inside Korea's AI and semiconductor industry, building in mixed teams with Korean and Asian peers.",
    b2t:"September 9 · annual", b2b:"The forum itself. Summer projects are presented, and the cohort's strongest work meets the people who fund and hire."
  },

  about:{
    kicker:"Who runs this", title:"About the organizer",
    p1:"AI Summer Korea is organised by the International Brain Sports Association, a Korean non-profit corporation licensed in March 2022 by the Seoul Metropolitan Government — licence no. 2022-53, granted under Article 32 of the Civil Act and the Ministry of Culture, Sports and Tourism's rules for non-profit corporations. It runs its own competitions in chess, janggi, speedcube and screen golf, and operates a registered-player system. The association is responsible for the venue, the site visits and everything that happens on the ground in Korea.",
    p2:"Our partner in the United States is Undenominated Church of Christianity, the California non-profit corporation that operates Plato School, incorporated in San Francisco on 1 September 2023. It handles the American side: recruitment in the United States and relationships with U.S. universities. Recruitment outside the United States is run from Seoul. A religious non-profit running a school is the oldest arrangement in education — Georgetown, Notre Dame and Boston College in the United States, Yonsei and Ewha in Korea, all founded on the same basis. The programme itself is secular.",
    advT:"Advisory board:",
    advB:"Being formed. Members will be listed here once they have confirmed. We do not list names before they have agreed to appear."
  },

  foot:{
    brand:"AI Summer Korea",
    legal:"Organised by the International Brain Sports Association (Republic of Korea). U.S. partner: Undenominated Church of Christianity, operator of Plato School, a California non-profit corporation incorporated 1 September 2023.",
    note:"First cohort: summer 2027. Program details, dates, and partners are provisional until confirmed and will be updated on this page.",
    updated:"Last updated"
  }
,

  form: {
      "title": "Get in touch",
      "intro": "Tell us who you are and we will write when it matters — when applications open, or with the sponsor brief.",
      "typeLabel": "I am writing as",
      "typeStudent": "A student who wants to take part",
      "typeVolunteer": "A volunteer teammate in Korea or Asia",
      "typeSponsor": "A company, foundation or government body",
      "typeFounding": "A founding sponsor, giving as an individual",
      "typeOther": "Something else",
      "name": "Name",
      "email": "Email",
      "country": "Country",
      "affiliation": "University or organisation",
      "message": "Anything you want us to know",
      "optional": "optional",
      "submit": "Send",
      "sending": "Sending…",
      "close": "Close",
      "okTitle": "Thank you — that reached us.",
      "okBody": "We will write to the address you gave. We do not send anything else.",
      "errTitle": "That did not go through.",
      "errBody": "Something on our side failed. Please try again in a moment.",
      "required": "Required",
      "badEmail": "Check this email address",
      "privacy": "We collect your name, email, country and affiliation to write to you about this programme, and to report anonymised totals to sponsors — how many people applied, from how many countries. Nothing is sold or passed on. We keep it until the 2027 cohort ends, and delete it sooner if you ask.",
      "notYet": "The list is not open yet. It opens with applications in autumn 2026."
    }
},

/* ───────────────────────── 한국어 ───────────────────────── */
ko:{
  nav:{ brand:"AI 서머 코리아", program:"프로그램", visits:"방문지", apply:"지원", sponsors:"후원", forum:"포럼", about:"소개" },

  hero:{
    eyebrow:"1기 · 2027년 여름 · 정원 200명",
    title:"AI를 학습시키는 반도체가 만들어지는 곳에서, 4주간.",
    lede:"전세계 대학생을 한국의 AI·반도체 산업 현장으로 초청하는 전액 후원 여름 프로그램입니다. 공장과 연구실, 그리고 그것을 만든 사람들을 — 같은 또래의 한국·아시아 학생들과 함께 만납니다.",
    ctaApply:"2027년 1기 지원하기", ctaSponsor:"후원 문의",
    s1k:"참가비", s1v:"무료", s2k:"기간", s2v:"4주",
    s3k:"1기 정원", s3v:"200명", s4k:"지원 자격", s4v:"전세계",
    fine:"항공·숙박·식사·프로그램 비용은 후원사가 부담합니다. 완주 시 전액 환급되는 보증금이 있습니다."
  },

  why:{
    kicker:"왜 만드나",
    title:"공급망은 읽을 수 있습니다. 그 안에 서 보는 것은 다릅니다.",
    p1:"세계의 거의 모든 최전선 AI 모델은 한국 공장을 거친 메모리와 로직 위에서 학습됩니다. 정작 그 하드웨어 위에 평생을 쌓아 올릴 학생들은 그 현장을 볼 기회가 거의 없습니다.",
    p2:"AI 서머 코리아는 그 간극을 좁히기 위해 있습니다. 그리고 다음 세대 엔지니어에게 이 나라와 산업, 앞으로 30년을 함께 일하게 될 또래를 소개하기 위해 있습니다.",
    c1t:"관광이 아니라 산업",
    c1b:"반도체·제조 현장 견학, 연구실, 엔지니어와의 실무 세션입니다. 버스 관광에 공장 한 곳을 끼워 넣은 일정이 아닙니다.",
    c2t:"관객이 아니라 동료",
    c2b:"한국과 아시아의 대학생이 4주 내내 자원봉사자이자 팀원으로 함께합니다. 전원이 참가자이고, 구경만 하는 사람은 없습니다.",
    c3t:"출석이 아니라 결과물",
    c3b:"모든 참가자가 팀 프로젝트를 완성해 발표합니다. 만든 것이 이 프로그램의 기록이고, 후원사가 실제로 보는 것입니다."
  },

  program:{
    kicker:"4주 일정", title:"프로그램",
    lede:"경기도 양평의 기숙형 캠퍼스를 거점으로, 전국의 현장을 방문합니다.",
    w1tag:"1주차", w1t:"현장의 기초",
    w1b:"입국과 오리엔테이션, 그리고 한국 기술 경제에 대한 실무적 입문 — 어떻게 만들어졌고, 누가 만들었고, 어디로 가는가. 언어와 문화 기초. 첫날부터 해외·한국·아시아 학생이 섞인 팀을 구성합니다.",
    w2tag:"2주차", w2t:"산업 안으로",
    w2b:"반도체·제조·기술 현장을 소그룹으로 방문합니다. 엔지니어·경영진과의 세션이 이어지고, 팀은 다룰 문제를 정합니다.",
    w3tag:"3주차", w3t:"만든다",
    w3b:"멘토 지원과 컴퓨팅 크레딧을 받으며 프로젝트에 집중합니다. 저녁에는 창업자·연구자 세션이 있고, 주말에는 수도권 밖으로 문화 여행을 갑니다.",
    w4tag:"4주차", w4t:"발표한다",
    w4b:"최종 완성과 데모데이. 후원사 임원과 초청 교수진 앞에서 발표하고 프로그램을 마칩니다. 두각을 나타낸 팀과 개인은 후원사의 인턴십·채용 트랙으로 연결됩니다.",
    noteT:"인원 규모에 대해:",
    noteB:"반도체 시설은 클린룸 환경이라 출입 인원이 엄격히 제한됩니다. 현장 방문은 여러 날에 걸쳐 소그룹으로 나눠 진행합니다 — 나중에 덧붙인 조정이 아니라 설계에 반영된 원칙입니다."
  },

  visits:{
    kicker:"방문지", title:"현장과 파트너",
    lede:"협약이 체결된 곳만 이름을 공개합니다. 아래 항목에는 실제 진행 상태를 그대로 표시했습니다 — 받고 싶은 로고를 미리 걸어 두지 않습니다.",
    fine:"방문지 목록은 잠정이며 협약이 확정될 때마다 갱신됩니다. 최종 일정은 출발 전에 참가자에게 안내합니다.",
    items:[
      { name:"반도체 생산 현장 견학", status:"talks", note:"클린룸 인접 구역 소그룹 견학. 협약 체결 후 파트너명을 공개합니다." },
      { name:"자동차·로보틱스 제조사", status:"talks", note:"자율주행과 로보틱스 연구를 실제 생산 캠퍼스에서." },
      { name:"전자 그룹 AI 연구원", status:"talks", note:"한국에서 파운데이션 모델을 만드는 연구자들과의 세션." },
      { name:"엔터테인먼트 테크 기업", status:"planned", note:"문화를 수출하는 회사가 음악 제작·음성·번역에 AI를 어떻게 쓰는가." },
      { name:"국회", status:"planned", note:"민주주의 국가가 AI 법을 실제로 어떻게 쓰는가 — 계단 앞 기념사진이 아니라 입법 실무진과의 세션." },
      { name:"마인드 스포츠와 기계 판단의 한계", status:"planned", note:"바둑·체스·샹치·이스포츠는 2023년 항저우 아시안게임 정식종목이었습니다. 기계와 겨루는 종목이 이미 국제 스포츠의 일부입니다. 인간의 직관과 기계가 보지 못하는 것에 대한 세션을, 알파고가 대국했던 도시에서." },
      { name:"대학 AI 연구실", status:"planned", note:"서울·대전의 대학원 연구자들과 실무 세션." },
      { name:"AI 스타트업·벤처 스튜디오 데이", status:"planned", note:"서울에서 창업자 세션과 사무실 방문." },
      { name:"문화 여행 주말", status:"planned", note:"수도권 밖에서 보내는 주말 일정." },
      { name:"경기 양평 기숙 캠퍼스", status:"talks", note:"공공 기숙형 교육 캠퍼스, 수용 인원 약 570명. 대관 확정 전입니다." }
    ]
  },

  apply:{
    kicker:"지원 안내", title:"이런 분을 찾습니다",
    elig:"지원 자격", covered:"지원되는 항목",
    eligItems:[
      "인가된 대학에 재학 중인 학부생 (국적·소재국 무관)",
      "컴퓨터공학·공학·수학 또는 관련 전공, 혹은 그에 준하는 결과물을 보여줄 수 있는 분",
      "2027년 여름 4주 전 일정에 참여 가능한 분",
      "여행 기간 내내 유효한 여권 소지자",
      "한국 방문 경험이나 한국어 능력은 필요하지 않습니다",
      "국가와 학교를 고르게 선발합니다 — 지원자가 적은 나라와 학교의 지원을 특히 환영합니다"
    ],
    coveredItems:[
      "국제선 왕복 항공권",
      "4주 전 기간 숙박",
      "프로그램 기간 전 식사",
      "국내 이동, 현장 방문, 프로그램 활동",
      "프로그램 기간 여행자·의료 보험",
      "프로젝트용 컴퓨팅 및 AI 도구 크레딧"
    ],
    depT:"완주 보증금:",
    depB:"합격자는 자리를 확정하기 위해 환급형 보증금을 예치합니다. 프로그램을 완주하면 전액 돌려드립니다. 프로그램 자체는 무료이며, 보증금은 후원으로 마련된 자리가 비지 않도록 하기 위한 것입니다.",
    btn:"지원 안내 받기",
    fine:"선발은 결과물과 지원 동기를 기준으로 위원회가 결정합니다. 2027년 여름 1기 지원 접수는 2026년 가을에 시작합니다.",
    depTitle:""
  },

  vol:{
    kicker:"한국·아시아 학생", title:"자원봉사 팀원으로 함께하기",
    lede:"한국 학생에게 '벌어지는' 프로그램이 아니라, 한국 학생과 '함께 하는' 프로그램입니다. 한국과 아시아의 대학생이 매 기수마다 자원봉사자이자 팀원, 안내자로 참여합니다.",
    c1t:"무엇을 하나",
    c1b:"4주 내내 프로젝트 팀에서 함께 일하고, 방문 학생들이 한국에서 길을 찾도록 돕고, 모든 현장 방문과 세션에 나란히 참여합니다.",
    c2t:"무엇을 얻나",
    c2b:"같은 현장, 같은 멘토, 같은 데모데이, 그리고 전세계 대학 또래와의 실질적인 관계. 프로그램 기간의 숙박과 식사를 지원합니다.",
    btn:"자원봉사 참여 신청"
  },

  spon:{
    kicker:"후원 안내", title:"인원수가 아니라 조각을 후원합니다",
    lede:"후원사마다 이 프로그램의 서로 다른 부분을, 각자 가장 내기 쉬운 형태로 후원합니다. 어떤 곳은 비행기 좌석을, 어떤 곳은 현장 출입을, 어떤 곳은 컴퓨팅을 냅니다. 전부 후원입니다.",
    th1:"후원 대상", th2:"주요 후원 주체", th3:"형태",
    rows:[
      ["항공권","항공사, 대기업 CSR","좌석 또는 현금"],
      ["숙박·식사","지자체, 상장 기업","현금 또는 시설"],
      ["산업 현장 견학","견학을 받는 기업 자신","현금이 아니라 출입 협조"],
      ["컴퓨팅·AI 도구","AI 기업","크레딧 및 엔지니어 세션"],
      ["지정 장학금","기업, 개인 기부자","현금"],
      ["국가 단위 프로그램","정부·공공기관","현금 또는 현물"]
    ],
    c1t:"기업이 후원하는 이유",
    c1b:"전세계에서 선발된 AI·컴퓨팅 전공 학부생 200명이 귀사의 산업 안에서 4주를 보내고, 평가할 수 있는 결과물을 발표합니다. 데모데이는 사진 찍는 자리가 아니라 채용의 자리입니다.",
    c2t:"무엇을 보고드리나",
    c2b:"지원자 수와 선발 경쟁률, 참가자 성과, 프로젝트 결과, 이후 채용 연계 실적을 기수마다 정리해 드립니다. 소감문보다 숫자를 보여드리는 편을 택합니다.",
    budT:"숫자를 그대로 밝히면:",
    budB:"1기 200명 예산은 약 21억 7천만 원 — 전액 포함 약 157만 달러, 1인당 약 7,900달러입니다. 항공, 4주 숙박·식사, 이동, 보험, 프로그램 운영에 더해 이를 실제로 운영하는 인력과 운영비까지 포함한 금액입니다. 후원사는 어차피 계산해 보므로 먼저 밝힙니다. 항목별 세부 예산과 자금 조달 계획은 후원 브리프로 제공합니다. 견적 확정 전까지는 잠정치입니다.",
    btn:"후원 제안서 요청",

    foundingTitle:"파운딩 스폰서",
    foundingLede:"한 구좌는 1만 달러입니다. 학생 네 명이 한국에 옵니다.",
    foundingBody1:"이 프로그램에 필요한 것의 대부분은 돈이 아닙니다. 현장이 문을 열어주고, 지자체가 캠퍼스를 빌려주고, 기업이 엔지니어 두 명을 반나절 보내주는 일 \u2014 이런 것은 사는 것이 아니라 협의하는 것이고, 사실 이쪽이 더 어려운 절반입니다.",
    foundingBody2:"하지만 네 나라에서 온 학생 네 명이 프로그램 기간 내내 머물고 먹고 보험에 드는 데는 약 1만 달러가 듭니다. 이것은 한 사람이 오후 한나절에, 예산 심의 없이 혼자 결정할 수 있는 금액입니다. 그래서 쉰 명에게 각각 네 명씩을 부탁드립니다.",
    foundingBody3:"파운딩 스폰서의 1만 달러는 학생에게만 갑니다 \u2014 항공, 숙박, 식사, 보험. 인건비에 쓰지 않고, 사무실 임차료에 쓰지 않고, 이 돈을 모으는 비용에도 쓰지 않습니다. 그런 비용은 별도의 재원으로 충당합니다. 지자체와 정부 사업, 그리고 기업 후원입니다. 그것이 그 기관들이 원래 지원하는 항목이기 때문이고, 자기 돈을 내는 사람은 그 돈이 어디로 가는지에 대해 깨끗한 답을 들을 자격이 있기 때문입니다.",
    foundingBody4:"원하신다면 그 구좌로 온 네 명을 직접 만나실 수 있고, 4주가 끝나면 그들이 무엇을 만들었는지 보시게 됩니다. 저희는 이것이 배너에 로고를 거는 것보다 정직한 제안이라고 생각합니다.",
    foundingCounter:"확보된 파운딩 스폰서: 50구좌 중 0구좌.",
    foundingCounterNote:"이 숫자는 약정이 체결될 때 바뀝니다. 그 전에는 바뀌지 않습니다.",
    foundingCta:"파운딩 스폰서 참여하기"
  },

  faq:{
    kicker:"질문", title:"자주 묻는 질문",
    items:[
      ["정말 무료인가요?","네. 항공·숙박·식사·보험·프로그램 비용을 후원사가 부담합니다. 합격자는 환급형 보증금을 예치하고, 완주하면 전액 돌려받습니다."],
      ["한국어를 해야 하나요?","아닙니다. 프로그램은 영어로 진행됩니다. 지내다 보면 한국어를 조금 배우게 되고, 한국인 팀원들이 길을 잃지 않도록 챙겨 줍니다."],
      ["학점을 인정받나요?","현재는 아닙니다. 향후 기수의 학점 인정 방안을 두고 대학 파트너들과 초기 논의 중입니다. 협약이 성립하기 전까지 학점을 내세우지 않습니다."],
      ["정확한 날짜는 언제인가요?","2027년 여름, 4주입니다. 캠퍼스 대관과 현장 방문 일정이 확정되면 정확한 날짜를 정하고, 지원 접수 시작 전에 이 페이지에 공개합니다."],
      ["비자 비용은 누가 내나요?","여권 국적에 따라 다릅니다. 이 정도 체류 기간이면 상당수 국적은 K-ETA 여행허가만으로 가능하고, 일부 국적은 단기 방문 비자가 필요합니다. 본인에게 어떤 요건이 적용되는지 안내하고, 필요한 서류를 제공하며 신청 수수료를 부담합니다."],
      ["참가하면 무엇을 해야 하나요?","4주 전 일정 참여와, 데모데이에서 발표하는 팀 프로젝트입니다. 휴가가 아니라 일하는 프로그램입니다."],
      ["한국·아시아 학생인데 참여할 수 있나요?","네 — 자원봉사 팀원으로 가능합니다. 위 자원봉사 섹션을 보세요. 방문 기수와 나란히 전 일정에 참여합니다."],
      ["몇 명을 뽑나요?","1기는 200명입니다. 첫 기수를 제대로 치르기 위해 장기 목표보다 의도적으로 작게 시작합니다."]
    ]
  },

  forum:{
    kicker:"더 큰 그림", title:"연례 행사의 한쪽 절반",
    p1:"AI 서머 코리아는 999 서울 포럼의 학생 트랙입니다. 999 서울 포럼은 매년 9월 9일 서울에서 여는 연례 회의로 기획되었습니다 — 남의 나라 포럼에 대표단을 보내는 대신, 한국이 상설 국제 포럼을 하나 열어야 한다는 생각에서 출발했습니다.",
    p2:"둘은 서로를 먹여 살리도록 설계했습니다. 여름에 팀이 만든 결과물은 9월 포럼으로 이어져 실제로 움직일 수 있는 사람들 앞에 놓입니다. 한쪽을 후원하는 곳이 다른 쪽을 후원하는 곳입니다.",
    noteT:"진행 상태:",
    noteB:"포럼은 준비 중이며 아직 첫 회를 열지 않았습니다. 지금은 계획이므로 계획이라고 적습니다.",
    b1t:"여름 · 4주", b1b:"전세계 학부생 200명이 한국의 AI·반도체 산업 안에서, 한국·아시아 또래와 섞인 팀으로 무언가를 만듭니다.",
    b2t:"9월 9일 · 연례", b2b:"포럼 본행사. 여름 프로젝트가 발표되고, 가장 좋은 결과물이 후원하고 채용하는 사람들과 만납니다."
  },

  about:{
    kicker:"주최", title:"주최 기관 소개",
    p1:"AI 서머 코리아는 사단법인 국제브레인스포츠협회가 주최합니다. 「민법」 제32조 및 문화체육관광부 소관 비영리법인의 설립·감독에 관한 규칙에 따라 2022년 3월 서울특별시장이 설립을 허가한 법인입니다 (허가 제2022-53호). 체스·장기·스피드큐브·스크린골프 대회를 직접 개최해 왔고 선수 등록 제도를 운영합니다. 협회가 국내 운영을 맡아 장소와 현장 방문, 한국에서 벌어지는 모든 일을 책임집니다.",
    p2:"미국 측 협력기관은 Plato School 을 운영하는 캘리포니아주 비영리법인 Undenominated Church of Christianity 입니다. 2023년 9월 1일 샌프란시스코에 설립되었고, 미국 내 모집과 미국 대학과의 관계를 맡습니다. 미국 외 지역 모집은 서울에서 담당합니다. 종교법인이 학교를 운영하는 것은 교육에서 가장 오래된 형태입니다 — 연세대와 이화여대는 선교사가 세웠고, 미국의 조지타운·노트르담·보스턴칼리지도 같은 뿌리입니다. 프로그램 내용 자체는 종교와 무관합니다.",
    advT:"자문위원:",
    advB:"구성 중입니다. 확정되는 대로 이 자리에 표기합니다. 본인의 동의를 받기 전에는 성함을 올리지 않습니다."
  },

  foot:{
    brand:"AI 서머 코리아",
    legal:"주최 사단법인 국제브레인스포츠협회 (대한민국). 미국 협력기관 Undenominated Church of Christianity — Plato School 운영, 2023년 9월 1일 캘리포니아주 설립 비영리법인.",
    note:"1기는 2027년 여름입니다. 프로그램 세부 내용·날짜·파트너는 확정 전까지 잠정이며 이 페이지에서 갱신됩니다.",
    updated:"마지막 갱신"
  }
,

  form: {
      "title": "연락하기",
      "intro": "누구신지 알려주시면 필요한 때에 연락드립니다 — 지원 접수가 열릴 때, 또는 후원 브리프와 함께.",
      "typeLabel": "어떤 자격으로 쓰시나요",
      "typeStudent": "참가를 원하는 학생",
      "typeVolunteer": "한국·아시아의 자원봉사 팀원",
      "typeSponsor": "기업·재단·공공기관",
      "typeFounding": "개인 자격의 파운딩 스폰서",
      "typeOther": "그 외",
      "name": "이름",
      "email": "이메일",
      "country": "국가",
      "affiliation": "대학 또는 소속 기관",
      "message": "하고 싶은 말",
      "optional": "선택",
      "submit": "보내기",
      "sending": "보내는 중…",
      "close": "닫기",
      "okTitle": "감사합니다 — 잘 도착했습니다.",
      "okBody": "적어주신 주소로 연락드립니다. 그 외의 메일은 보내지 않습니다.",
      "errTitle": "전송되지 않았습니다.",
      "errBody": "저희 쪽 문제입니다. 잠시 후 다시 시도해 주세요.",
      "required": "필수",
      "badEmail": "이메일 주소를 확인해 주세요",
      "privacy": "이름·이메일·국가·소속을 수집합니다. 이 프로그램에 관한 연락과, 후원사에 보고할 익명 집계(지원자 수, 국가 수)에만 씁니다. 판매하거나 제3자에게 넘기지 않습니다. 2027년 1기 종료 시까지 보관하며, 요청하시면 그전에 삭제합니다.",
      "notYet": "접수는 아직 열려 있지 않습니다. 2026년 가을 지원 접수와 함께 열립니다."
    }
},

/* ─────────────────── CHINESE (SIMPLIFIED) ─────────────────── */
"zh-Hans": {
  visits:{
    kicker:"参访地点", title:"参访地点与合作方",
    lede:"我们只在协议签署之后公布合作方。以下每一项都标注了真实进展状态——这里没有任何一个是我们希望争取到的标志。",
    fine:"参访清单为暂定,协议确认后随时更新。最终行程将在出发前通知参加者。",
    items:[
      { name:"半导体制造基地参访", status:"talks", note:"小组进入洁净室邻近区域参观。协议签署后公布合作方名称。" },
      { name:"汽车与机器人制造企业", status:"talks", note:"在运转中的生产园区了解自动驾驶与机器人研究。" },
      { name:"电子集团人工智能研究院", status:"talks", note:"与在韩国开发基础模型的研究人员交流。" },
      { name:"娱乐科技公司", status:"planned", note:"一家向全球输出文化的公司,如何把人工智能用在音乐制作、语音与翻译上。" },
      { name:"国会", status:"planned", note:"一个民主国家究竟如何制定人工智能法律——与立法工作人员的座谈,而不是在台阶前拍一张照片。" },
      { name:"智力运动与机器判断的边界", status:"planned", note:"围棋、国际象棋、象棋和电子竞技都是2023年杭州亚运会的正式比赛项目——与机器对弈早已是国际体育的一部分。这场关于围棋、人类直觉以及机器看不见之处的座谈,就在阿尔法围棋对局的那座城市举行。" },
      { name:"高校人工智能实验室", status:"planned", note:"与首尔和大田的研究生研究人员一起进行实务研讨。" },
      { name:"人工智能创业与风险工作室日", status:"planned", note:"在首尔与创始人座谈并走访办公室。" },
      { name:"文化体验周末", status:"planned", note:"有一个周末会离开首都圈。" },
      { name:"京畿道杨平住宿型园区", status:"talks", note:"公立住宿型教育园区,可容纳约570人。预订尚未确认。" }
    ]
  },

  spon:{
    kicker:"致赞助方", title:"赞助其中一块,而不是按人头计价",
    lede:"不同的赞助方以各自最容易付出的方式,支持这个项目的不同部分。有的提供机票座位,有的开放园区接待,有的提供算力。这些都算赞助。",
    th1:"赞助对象", th2:"典型赞助方", th3:"形式",
    rows:[
      ["机票","航空公司、大企业社会责任部门","座位或现金"],
      ["住宿与餐饮","地方政府、上市公司","现金或场地"],
      ["产业现场参访","接待企业本身","开放接待,而非现金"],
      ["算力与人工智能工具","人工智能企业","额度与工程师座谈"],
      ["冠名奖学金","企业、个人捐赠者","现金"],
      ["国别专项","政府与公共机构","现金或实物"]
    ],
    c1t:"企业为什么赞助",
    c1b:"两百名经过筛选、来自世界各地的人工智能与计算专业本科生,在贵公司所在的产业里度过四周,并拿出可供评估的成果。展示日是招聘现场,不是拍照场合。",
    c2t:"我们会如何汇报",
    c2b:"申请人数与录取比例、参加者去向、项目成果,以及后续产生的招聘活动——每一期结束后整理呈报。比起感言,我们更愿意给您数字。",
    budT:"把数字直接摊开:",
    budB:"第一期200人的预算约为21.7亿韩元,合计约157万美元,人均约7,900美元。其中包含机票、四周的住宿与餐饮、交通、保险和项目运营,以及真正把它办起来所需的人员与运营成本。赞助方迟早会自己算出来,所以我们先公布。逐项预算与资金计划随赞助方资料一并提供。报价确认前均为暂定数字。",
    btn:"索取赞助方资料"
  },

  forum:{
    kicker:"更大的框架", title:"一件年度事情的一半",
    p1:"AI 夏日韩国是999首尔论坛的学生单元。999首尔论坛计划于每年9月9日在首尔举办,其出发点是:韩国与其向别国的论坛派出代表团,不如自己办一个常设的国际论坛。",
    p2:"两者被设计成互相供养。夏天各团队做出的成果会被带进九月的论坛,摆在真正能推动它的人面前。赞助其中一个的机构,就是赞助另一个的机构。",
    b1t:"夏季 · 四周", b1b:"来自世界各地的两百名本科生进入韩国的人工智能与半导体产业,与韩国及亚洲同龄人组成混合团队一起动手。",
    b2t:"9月9日 · 年度", b2b:"论坛本身。夏季项目在此发表,这一期最好的成果会遇见出资的人和招人的人。",
    noteT:"进展状态:",
    noteB:"论坛仍在筹备,尚未举办第一届。目前它是一项计划,所以我们就按计划来写。"
  },

  about:{
    kicker:"主办方", title:"关于主办机构",
    p1:"AI 夏日韩国由社团法人国际智力运动协会主办。该法人依据《民法》第32条及文化体育观光部主管的非营利法人设立与监督规则,于2022年3月由首尔特别市市长批准设立(许可第2022-53号)。协会自行举办国际象棋、朝鲜象棋、速拧和室内高尔夫赛事,并运营选手注册制度。协会负责韩国国内的运营,包括场地、参访以及在韩国发生的一切。",
    p2:"我们在美国的合作方是运营 Plato School 的加利福尼亚州非营利法人 Undenominated Church of Christianity,2023年9月1日在旧金山设立,负责美国境内的招募以及与美国高校的关系。美国以外的招募由首尔负责。宗教法人办学是教育中最古老的形态——美国的乔治城、圣母、波士顿学院,韩国的延世与梨花,都由此而来。项目内容本身与宗教无关。",
    advT:"顾问委员会:",
    advB:"正在组建。成员确认后将在此列出。在本人同意具名之前,我们不会列出任何姓名。"
  },

    "nav": {
      "brand": "AI Summer Korea",
      "program": "项目",
      "visits": "走访地点",
      "apply": "申请",
      "sponsors": "赞助",
      "forum": "论坛",
      "about": "关于我们"
    },
    "hero": {
      "eyebrow": "首期 · 2027年夏 · 200个名额",
      "title": "在训练AI的芯片诞生之地，度过四周。",
      "lede": "一项全额资助的暑期项目，邀请来自世界各地的大学生走进韩国的AI与半导体产业——工厂、实验室，以及建立这一切的人——并与同龄的韩国及亚洲学生并肩同行。",
      "ctaApply": "申请2027年首期",
      "ctaSponsor": "成为赞助方",
      "s1k": "学费",
      "s1v": "$0",
      "s2k": "时长",
      "s2v": "4周",
      "s3k": "首期名额",
      "s3v": "200",
      "s4k": "招生范围",
      "s4v": "面向全球",
      "fine": "机票、住宿、餐饮及项目费用由赞助方承担。录取后需缴纳可全额退还的结业保证金。"
    },
    "why": {
      "kicker": "为什么做这件事",
      "title": "你可以读到供应链。也可以站进去。",
      "p1": "世界上几乎每一个前沿AI模型，都是在经由韩国晶圆厂制造的存储与逻辑芯片上训练出来的。而将用一生在这些硬件之上构建事物的学生，却几乎没有机会亲眼看到它们。",
      "p2": "AI Summer Korea 的存在就是为了填补这道鸿沟——并把这个国家、这个产业，以及未来三十年将与之共事的同龄人，介绍给新一代工程师。",
      "c1t": "是产业，不是观光",
      "c1b": "半导体与制造现场走访、研究实验室、与工程师的实务研讨——不是在巴士观光行程里塞进一站工厂。",
      "c2t": "是同伴，不是观众",
      "c2b": "韩国与亚洲的大学生以志愿者和队友身份全程四周参与。每个人都是参与者，没有人只是被带着参观。",
      "c3t": "是成果，不是出勤",
      "c3b": "每位参与者都要完成一个团队项目并上台发表。你做出来的东西就是这个项目的记录——也是赞助方真正会看的东西。"
    },
    "program": {
      "kicker": "这四周",
      "title": "项目安排",
      "lede": "以京畿道杨平的住宿型校区为基地，前往韩国各地的现场。",
      "w1tag": "第1周",
      "w1t": "打好底子",
      "w1b": "入境、迎新，以及对韩国技术经济的实务导览——它如何建成、由谁建成、走向何方。语言与文化基础。第一天就组队：海外、韩国与亚洲学生混编。",
      "w2tag": "第2周",
      "w2t": "走进产业",
      "w2b": "以小组形式走访半导体、制造与技术设施。与工程师和高管的研讨。各队确定要着手的课题。",
      "w3tag": "第3周",
      "w3t": "动手做",
      "w3b": "在导师支持与算力额度下集中开发。晚间有创业者与研究者的分享。一个周末前往首都圈以外的文化行程。",
      "w4tag": "第4周",
      "w4t": "发表",
      "w4b": "完成作品，在赞助方高管与受邀教授面前举行成果发表日，然后结业。表现突出的团队与个人将被引荐至赞助方的实习与招聘通道。",
      "noteT": "关于分组人数：",
      "noteB": "半导体设施是无尘室环境，出入人数有严格限制。现场走访会分成小组、分数日轮流进行——这是项目设计的一部分，不是事后的补救。"
    },
    "apply": {
      "kicker": "申请方式",
      "title": "我们在找这样的人",
      "elig": "申请资格",
      "covered": "费用涵盖",
      "eligItems": [
        "在任一国家经认可的高校在读的本科生",
        "主修计算机科学、工程、数学或相关领域——或能拿出同等水平的作品",
        "能够全程参与2027年夏季的四周日程",
        "持有在行程期间有效的护照",
        "无需有访韩经历，也不要求韩语能力",
        "我们在各国家与院校之间均衡录取——尤其欢迎来自申请人较少的国家与学校的报名"
      ],
      "coveredItems": [
        "国际往返机票",
        "四周全程住宿",
        "项目期间的所有餐食",
        "地面交通、现场走访与项目活动",
        "项目期间的旅行与医疗保险",
        "用于项目开发的算力与AI工具额度"
      ],
      "depT": "结业保证金：",
      "depB": "录取者需缴纳可退还的保证金以确认席位，完成项目后全额退还。项目本身免费——保证金的作用是避免由赞助方买单的席位被空置。",
      "btn": "尚未开放——加入通知名单",
      "fine": "由委员会根据你的作品与申请动机进行选拔。2027年夏季首期的申请将于2026年秋季开放。"
    },
    "vol": {
      "kicker": "韩国与亚洲学生",
      "title": "以志愿队友的身份加入",
      "lede": "这不是一个发生在韩国学生身上的项目，而是与他们一起完成的项目。在韩国及亚洲各地就读的大学生，每期都会以志愿者、队友和向导的身份加入。",
      "c1t": "你要做什么",
      "c1b": "全程四周参与一个项目团队，帮助来访学生适应这个国家，并与他们一同参加每一次现场走访和研讨。",
      "c2t": "你会得到什么",
      "c2b": "同样的现场、同样的导师、同样的成果发表日，以及与世界各地大学同龄人的实质关系。项目期间的住宿与餐食由我们承担。",
      "btn": "登记成为志愿者"
    },
    "faq": {
      "kicker": "常见问题",
      "title": "常见提问",
      "items": [
        [
          "真的免费吗？",
          "是的。机票、住宿、餐饮、保险及项目费用均由赞助方承担。录取者需缴纳保证金，完成项目后全额退还。"
        ],
        [
          "需要会韩语吗？",
          "不需要。项目以英语进行。过程中你会学到一些韩语，你的韩国队友也会确保你不会迷路。"
        ],
        [
          "能拿到学分吗？",
          "目前不能。我们正与大学伙伴就未来期次的学分认定进行初步沟通。在正式协议达成之前，我们不会声称提供学分。"
        ],
        [
          "具体日期是什么时候？",
          "2027年夏季，为期四周。确切日期将在校区预订与现场走访敲定后确认，并在开放申请前公布于本页。"
        ],
        [
          "签证费用由谁承担？",
          "取决于你的护照。以这样的停留时长，许多国籍只需办理K-ETA电子旅行许可，另一些则需要短期访问签证。我们会告知适用于你的要求，提供所需证明文件，并承担必要的申请费用。"
        ],
        [
          "项目期间对我有什么要求？",
          "四周全程参与，并在成果发表日展示团队项目。这是一个需要投入的项目，不是假期。"
        ],
        [
          "我是韩国或亚洲学生，可以参加吗？",
          "可以——以志愿队友的身份。请参阅上方的志愿者部分。你将与来访学员一同参与全部日程。"
        ],
        [
          "录取多少人？",
          "首期为200人。我们刻意从低于长期目标的规模起步，以确保首期能被认真办好。"
        ]
      ]
    },
    "foot": {
      "brand": "AI Summer Korea",
      "legal": "主办：社团法人国际脑力运动协会（大韩民国）。美国合作机构：Undenominated Church of Christianity，Plato School 的运营方，2023年9月1日于加利福尼亚州设立的非营利法人。",
      "note": "首期：2027年夏季。项目细节、日期与合作方在正式确认前均为暂定，并将在本页更新。",
      "updated": "最后更新"
    }
  ,

  form: {
      "title": "与我们联系",
      "intro": "留下你的身份，我们会在需要时与你联系——申请开放时，或随赞助简报一同发送。",
      "typeLabel": "我的身份是",
      "typeStudent": "希望参加的学生",
      "typeVolunteer": "在韩国或亚洲的志愿队友",
      "typeSponsor": "企业、基金会或政府机构",
      "typeOther": "其他",
      "name": "姓名",
      "email": "电子邮箱",
      "country": "国家或地区",
      "affiliation": "大学或所属机构",
      "message": "想让我们知道的事",
      "optional": "选填",
      "submit": "发送",
      "sending": "发送中…",
      "close": "关闭",
      "okTitle": "谢谢——我们已收到。",
      "okBody": "我们会写信到你留下的邮箱。除此之外不会发送任何邮件。",
      "errTitle": "没有发送成功。",
      "errBody": "是我们这边出了问题。请稍后再试。",
      "required": "必填",
      "badEmail": "请检查邮箱地址",
      "privacy": "我们收集你的姓名、邮箱、国家或地区和所属机构，仅用于就本项目与你联系，以及向赞助方报告匿名统计（多少人申请、来自多少个国家或地区）。不会出售或转交他人。资料保存至2027年首期结束，你也可以随时要求提前删除。",
      "notYet": "名单尚未开放。将于2026年秋季随申请一同开放。"
    }
},

/* ─────────────────── CHINESE (TRADITIONAL) ─────────────────── */
"zh-Hant": {
  visits:{
    kicker:"參訪地點", title:"參訪地點與合作方",
    lede:"我們只在協議簽署之後公布合作方。以下每一項都標註了真實進展狀態——這裡沒有任何一個是我們希望爭取到的標誌。",
    fine:"參訪清單為暫定,協議確認後隨時更新。最終行程將在出發前通知參加者。",
    items:[
      { name:"半導體製造基地參訪", status:"talks", note:"小組進入無塵室鄰近區域參觀。協議簽署後公布合作方名稱。" },
      { name:"汽車與機器人製造企業", status:"talks", note:"在運轉中的生產園區了解自動駕駛與機器人研究。" },
      { name:"電子集團人工智慧研究院", status:"talks", note:"與在韓國開發基礎模型的研究人員交流。" },
      { name:"娛樂科技公司", status:"planned", note:"一家向全球輸出文化的公司,如何把人工智慧用在音樂製作、語音與翻譯上。" },
      { name:"國會", status:"planned", note:"一個民主國家究竟如何制定人工智慧法律——與立法工作人員的座談,而不是在台階前拍一張照片。" },
      { name:"心智運動與機器判斷的邊界", status:"planned", note:"圍棋、西洋棋、象棋和電子競技都是2023年杭州亞運的正式比賽項目——與機器對弈早已是國際體育的一部分。這場關於圍棋、人類直覺以及機器看不見之處的座談,就在AlphaGo對局的那座城市舉行。" },
      { name:"大學人工智慧實驗室", status:"planned", note:"與首爾和大田的研究生研究人員一起進行實務研討。" },
      { name:"人工智慧新創與創投工作室日", status:"planned", note:"在首爾與創辦人座談並走訪辦公室。" },
      { name:"文化體驗週末", status:"planned", note:"有一個週末會離開首都圈。" },
      { name:"京畿道楊平住宿型園區", status:"talks", note:"公立住宿型教育園區,可容納約570人。預訂尚未確認。" }
    ]
  },

  spon:{
    kicker:"致贊助方", title:"贊助其中一塊,而不是按人頭計價",
    lede:"不同的贊助方以各自最容易付出的方式,支持這個計畫的不同部分。有的提供機票座位,有的開放園區接待,有的提供算力。這些都算贊助。",
    th1:"贊助對象", th2:"典型贊助方", th3:"形式",
    rows:[
      ["機票","航空公司、大企業社會責任部門","座位或現金"],
      ["住宿與餐飲","地方政府、上市公司","現金或場地"],
      ["產業現場參訪","接待企業本身","開放接待,而非現金"],
      ["算力與人工智慧工具","人工智慧企業","額度與工程師座談"],
      ["冠名獎學金","企業、個人捐贈者","現金"],
      ["國別專案","政府與公共機構","現金或實物"]
    ],
    c1t:"企業為什麼贊助",
    c1b:"兩百名經過篩選、來自世界各地的人工智慧與計算專業大學生,在貴公司所在的產業裡度過四週,並拿出可供評估的成果。展示日是招募現場,不是拍照場合。",
    c2t:"我們會如何回報",
    c2b:"申請人數與錄取比例、參加者去向、專案成果,以及後續產生的招募活動——每一期結束後整理呈報。比起感言,我們更願意給您數字。",
    budT:"把數字直接攤開:",
    budB:"第一期200人的預算約為21.7億韓元,合計約157萬美元,平均每人約7,900美元。其中包含機票、四週的住宿與餐飲、交通、保險和計畫營運,以及真正把它辦起來所需的人員與營運成本。贊助方遲早會自己算出來,所以我們先公布。逐項預算與資金計畫隨贊助方資料一併提供。報價確認前均為暫定數字。",
    btn:"索取贊助方資料"
  },

  forum:{
    kicker:"更大的框架", title:"一件年度事情的一半",
    p1:"AI 夏日韓國是999首爾論壇的學生單元。999首爾論壇計畫於每年9月9日在首爾舉辦,其出發點是:韓國與其向別國的論壇派出代表團,不如自己辦一個常設的國際論壇。",
    p2:"兩者被設計成互相供養。夏天各團隊做出的成果會被帶進九月的論壇,擺在真正能推動它的人面前。贊助其中一個的機構,就是贊助另一個的機構。",
    b1t:"夏季 · 四週", b1b:"來自世界各地的兩百名大學生進入韓國的人工智慧與半導體產業,與韓國及亞洲同齡人組成混合團隊一起動手。",
    b2t:"9月9日 · 年度", b2b:"論壇本身。夏季專案在此發表,這一期最好的成果會遇見出資的人和招人的人。",
    noteT:"進展狀態:",
    noteB:"論壇仍在籌備,尚未舉辦第一屆。目前它是一項計畫,所以我們就按計畫來寫。"
  },

  about:{
    kicker:"主辦方", title:"關於主辦機構",
    p1:"AI 夏日韓國由社團法人國際心智運動協會主辦。該法人依據《民法》第32條及文化體育觀光部主管的非營利法人設立與監督規則,於2022年3月由首爾特別市市長核准設立(許可第2022-53號)。協會自行舉辦西洋棋、朝鮮象棋、速解魔術方塊和室內高爾夫賽事,並營運選手註冊制度。協會負責韓國國內的營運,包括場地、參訪以及在韓國發生的一切。",
    p2:"我們在美國的合作方是營運 Plato School 的加利福尼亞州非營利法人 Undenominated Church of Christianity,2023年9月1日在舊金山設立,負責美國境內的招募以及與美國高校的關係。美國以外的招募由首爾負責。宗教法人辦學是教育中最古老的形態——美國的喬治城、聖母、波士頓學院,韓國的延世與梨花,都由此而來。計畫內容本身與宗教無關。",
    advT:"顧問委員會:",
    advB:"正在組建。成員確認後將在此列出。在本人同意具名之前,我們不會列出任何姓名。"
  },

    "nav": {
      "brand": "AI Summer Korea",
      "program": "課程",
      "visits": "參訪地點",
      "apply": "申請",
      "sponsors": "贊助",
      "forum": "論壇",
      "about": "關於我們"
    },
    "hero": {
      "eyebrow": "首屆 · 2027年夏 · 200個名額",
      "title": "在訓練AI的晶片誕生之地，度過四週。",
      "lede": "一項全額贊助的暑期計畫，邀請來自世界各地的大學生走進韓國的AI與半導體產業——工廠、實驗室，以及打造這一切的人——並與同齡的韓國及亞洲學生並肩參與。",
      "ctaApply": "申請2027年首屆",
      "ctaSponsor": "成為贊助夥伴",
      "s1k": "學費",
      "s1v": "$0",
      "s2k": "期間",
      "s2v": "4週",
      "s3k": "首屆名額",
      "s3v": "200",
      "s4k": "招生範圍",
      "s4v": "面向全球",
      "fine": "機票、住宿、餐食及計畫費用由贊助方負擔。錄取後須繳交可全額退還的結業保證金。"
    },
    "why": {
      "kicker": "為什麼要做",
      "title": "你可以讀到供應鏈。也可以站進去。",
      "p1": "世界上幾乎每一個前沿AI模型，都是在經由韓國晶圓廠製造的記憶體與邏輯晶片上訓練出來的。而將用一生在這些硬體之上打造事物的學生，卻幾乎沒有機會親眼看到。",
      "p2": "AI Summer Korea 的存在就是為了填補這道落差——並把這個國家、這個產業，以及未來三十年將與之共事的同齡人，介紹給新一代工程師。",
      "c1t": "是產業，不是觀光",
      "c1b": "半導體與製造現場參訪、研究實驗室、與工程師的實作研討——不是在巴士行程裡塞進一站工廠。",
      "c2t": "是夥伴，不是觀眾",
      "c2b": "韓國與亞洲的大學生以志工和隊友身分全程四週參與。每個人都是參與者，沒有人只是被帶著看。",
      "c3t": "是成果，不是出席",
      "c3b": "每位參與者都要完成一個團隊專案並上台發表。你做出來的東西就是這個計畫的紀錄——也是贊助方真正會看的東西。"
    },
    "program": {
      "kicker": "這四週",
      "title": "課程安排",
      "lede": "以京畿道楊平的住宿型校區為據點，前往韓國各地的現場。",
      "w1tag": "第1週",
      "w1t": "打好基礎",
      "w1b": "入境、新生說明，以及對韓國科技經濟的實務導覽——它如何建立、由誰建立、走向何方。語言與文化基礎。第一天就分組：海外、韓國與亞洲學生混編。",
      "w2tag": "第2週",
      "w2t": "走進產業",
      "w2b": "以小組形式參訪半導體、製造與科技設施。與工程師和高階主管的研討。各組決定要處理的題目。",
      "w3tag": "第3週",
      "w3t": "動手做",
      "w3b": "在導師支援與運算額度下集中開發。晚間有創業者與研究者的分享。一個週末前往首都圈以外的文化行程。",
      "w4tag": "第4週",
      "w4t": "發表",
      "w4b": "完成作品，在贊助方高階主管與受邀教授面前舉行成果發表日，然後結業。表現突出的團隊與個人將被引薦至贊助方的實習與招募管道。",
      "noteT": "關於分組人數：",
      "noteB": "半導體設施是無塵室環境，出入人數有嚴格限制。現場參訪會分成小組、分數日輪流進行——這是計畫設計的一部分，不是事後補救。"
    },
    "apply": {
      "kicker": "申請方式",
      "title": "我們在找這樣的人",
      "elig": "申請資格",
      "covered": "費用涵蓋",
      "eligItems": [
        "在任一國家經認可的大專院校在學的大學部學生",
        "主修資訊工程、工程、數學或相關領域——或能提出同等水準的作品",
        "能夠全程參與2027年夏季的四週行程",
        "持有在行程期間有效的護照",
        "不需要有訪韓經驗，也不要求韓語能力",
        "我們在各國家與學校之間均衡錄取——特別歡迎來自申請人較少的國家與學校的報名"
      ],
      "coveredItems": [
        "國際來回機票",
        "四週全程住宿",
        "計畫期間的所有餐食",
        "地面交通、現場參訪與計畫活動",
        "計畫期間的旅遊與醫療保險",
        "專案開發用的運算與AI工具額度"
      ],
      "depT": "結業保證金：",
      "depB": "錄取者須繳交可退還的保證金以保留名額，完成計畫後全額退還。計畫本身免費——保證金的用意是避免由贊助方買單的名額被空著。",
      "btn": "尚未開放——加入通知名單",
      "fine": "由委員會依據你的作品與申請動機進行遴選。2027年夏季首屆的申請將於2026年秋季開放。"
    },
    "vol": {
      "kicker": "韓國與亞洲學生",
      "title": "以志工隊友的身分加入",
      "lede": "這不是一個發生在韓國學生身上的計畫，而是與他們一起完成的計畫。在韓國及亞洲各地就讀的大學生，每屆都會以志工、隊友和嚮導的身分加入。",
      "c1t": "你要做什麼",
      "c1b": "全程四週參與一個專案團隊，協助來訪學生適應這個國家，並與他們一同參加每一次現場參訪和研討。",
      "c2t": "你會得到什麼",
      "c2b": "同樣的現場、同樣的導師、同樣的成果發表日，以及與世界各地大學同齡人的實質關係。計畫期間的住宿與餐食由我們負擔。",
      "btn": "登記成為志工"
    },
    "faq": {
      "kicker": "問答",
      "title": "常見問題",
      "items": [
        [
          "真的免費嗎？",
          "是的。機票、住宿、餐食、保險及計畫費用均由贊助方負擔。錄取者須繳交保證金，完成計畫後全額退還。"
        ],
        [
          "需要會韓語嗎？",
          "不需要。計畫以英語進行。過程中你會學到一些韓語，你的韓國隊友也會確保你不會迷路。"
        ],
        [
          "可以拿到學分嗎？",
          "目前不行。我們正與大學夥伴就未來屆次的學分認列進行初步討論。在正式協議達成之前，我們不會宣稱提供學分。"
        ],
        [
          "確切日期是什麼時候？",
          "2027年夏季，為期四週。確切日期將在校區預訂與現場參訪確定後公布，並會在開放申請前刊登於本頁。"
        ],
        [
          "簽證費用由誰負擔？",
          "取決於你的護照。以這樣的停留長度，許多國籍只需辦理K-ETA電子旅行許可，另一些則需要短期停留簽證。我們會告知適用於你的規定，提供所需證明文件，並負擔必要的申請費用。"
        ],
        [
          "計畫期間對我有什麼要求？",
          "四週全程參與，並在成果發表日展示團隊專案。這是一個需要投入的計畫，不是假期。"
        ],
        [
          "我是韓國或亞洲學生，可以參加嗎？",
          "可以——以志工隊友的身分。請參閱上方的志工段落。你將與來訪學員一同參與全部行程。"
        ],
        [
          "錄取多少人？",
          "首屆為200人。我們刻意從低於長期目標的規模起步，以確保首屆能被好好辦成。"
        ]
      ]
    },
    "foot": {
      "brand": "AI Summer Korea",
      "legal": "主辦：社團法人國際腦力運動協會（大韓民國）。美國合作機構：Undenominated Church of Christianity，Plato School 的營運方，2023年9月1日於加州設立的非營利法人。",
      "note": "首屆：2027年夏季。計畫細節、日期與合作夥伴在正式確認前均為暫定，並將在本頁更新。",
      "updated": "最後更新"
    }
  ,

  form: {
      "title": "與我們聯絡",
      "intro": "留下你的身分，我們會在需要時與你聯絡——申請開放時，或隨贊助簡報一併寄出。",
      "typeLabel": "我的身分是",
      "typeStudent": "希望參加的學生",
      "typeVolunteer": "在韓國或亞洲的志工隊友",
      "typeSponsor": "企業、基金會或政府機構",
      "typeOther": "其他",
      "name": "姓名",
      "email": "電子郵件",
      "country": "國家或地區",
      "affiliation": "大學或所屬機構",
      "message": "想讓我們知道的事",
      "optional": "選填",
      "submit": "送出",
      "sending": "傳送中…",
      "close": "關閉",
      "okTitle": "謝謝——我們已收到。",
      "okBody": "我們會寄信到你留下的信箱。除此之外不會寄送任何郵件。",
      "errTitle": "沒有送出成功。",
      "errBody": "是我們這邊出了問題。請稍後再試。",
      "required": "必填",
      "badEmail": "請檢查電子郵件地址",
      "privacy": "我們收集你的姓名、電子郵件、國家或地區與所屬機構，僅用於就本計畫與你聯絡，以及向贊助方報告匿名統計（多少人申請、來自多少國家或地區）。不會出售或轉交他人。資料保存至2027年首屆結束，你也可以隨時要求提前刪除。",
      "notYet": "名單尚未開放。將於2026年秋季隨申請一併開放。"
    }
},

/* ─────────────────── JAPANESE ─────────────────── */
"ja": {
  visits:{
    kicker:"訪問先", title:"訪問先とパートナー",
    lede:"パートナーは協定の締結後にのみ公表します。以下はすべて実際の進捗状況を明記しています。獲得を期待しているだけのロゴは、ここにはひとつもありません。",
    fine:"訪問先は暫定であり、協定が確定し次第更新します。最終日程は出発前に参加者へ通知します。",
    items:[
      { name:"半導体製造拠点の見学", status:"talks", note:"クリーンルーム隣接区域を少人数で見学します。パートナー名は協定締結後に公表します。" },
      { name:"自動車・ロボティクスメーカー", status:"talks", note:"稼働中の生産拠点で、自動運転とロボティクスの研究に触れます。" },
      { name:"電機グループのAI研究所", status:"talks", note:"韓国で基盤モデルを開発する研究者とのセッション。" },
      { name:"エンターテインメント技術企業", status:"planned", note:"文化を世界へ輸出する企業が、音楽制作・音声・翻訳にAIをどう使っているか。" },
      { name:"国会", status:"planned", note:"民主主義国家が実際にどうAI法をつくるのか。議事堂前での記念撮影ではなく、立法スタッフとのセッションです。" },
      { name:"マインドスポーツと機械の判断の限界", status:"planned", note:"囲碁・チェス・シャンチー・eスポーツは2023年杭州アジア競技大会の正式種目でした。機械と競うことは、すでに国際スポーツの一部です。囲碁と人間の直観、そして機械に見えていないものについてのセッションを、アルファ碁が対局したその都市で行います。" },
      { name:"大学のAI研究室", status:"planned", note:"ソウルと大田の大学院研究者との実務セッション。" },
      { name:"AIスタートアップ・ベンチャースタジオ訪問日", status:"planned", note:"ソウルでの創業者セッションとオフィス訪問。" },
      { name:"文化体験の週末", status:"planned", note:"首都圏を離れて過ごす週末が1回あります。" },
      { name:"京畿道楊平の宿泊型キャンパス", status:"talks", note:"公共の宿泊型教育キャンパス。収容人数は約570名。予約は確定前です。" }
    ]
  },

  spon:{
    kicker:"スポンサーの皆さまへ", title:"人数ではなく、一部分を支援していただきます",
    lede:"スポンサーごとに、最も出しやすいかたちで、このプログラムの異なる部分を支えていただきます。航空座席を出す企業もあれば、施設への受け入れで参加する企業も、計算資源を提供する企業もあります。そのすべてが支援です。",
    th1:"支援の対象", th2:"主な支援者", th3:"かたち",
    rows:[
      ["航空券","航空会社、大企業のCSR","座席または現金"],
      ["宿泊・食事","自治体、上場企業","現金または施設"],
      ["産業現場の見学","受け入れ企業そのもの","現金ではなく受け入れ"],
      ["計算資源・AIツール","AI企業","クレジットとエンジニアによるセッション"],
      ["冠奨学金","企業、個人寄付者","現金"],
      ["国単位のプログラム","政府・公的機関","現金または現物"]
    ],
    c1t:"企業が支援する理由",
    c1b:"世界中から選抜されたAI・コンピューティング専攻の学部生200名が、御社の産業のなかで4週間を過ごし、評価できる成果を発表します。デモデーは写真撮影の場ではなく、採用の場です。",
    c2t:"ご報告する内容",
    c2b:"応募者数と選抜倍率、参加者の進路、プロジェクトの成果、その後の採用につながった活動を、期ごとにまとめてご報告します。感想文よりも数字をお見せします。",
    budT:"数字をそのまま申し上げると:",
    budB:"第1期200名の予算は約21億7,000万ウォン、総額でおよそ157万米ドル、参加者1人あたり約7,900米ドルです。航空券、4週間の宿泊と食事、移動、保険、プログラム運営に加えて、実際に運営するためのスタッフ費と運営経費を含みます。スポンサーはいずれ計算されるので、先に公開します。費目ごとの予算と資金計画はスポンサー向け資料に添付します。見積確定までは暫定値です。",
    btn:"スポンサー資料を請求する"
  },

  forum:{
    kicker:"より大きな枠組み", title:"年次の取り組みの、半分",
    p1:"AIサマー・コリアは999ソウル・フォーラムの学生トラックです。999ソウル・フォーラムは毎年9月9日にソウルで開催を計画している年次会議で、他国のフォーラムに代表団を送るのではなく、韓国自身が常設の国際フォーラムを持つべきだという考えから出発しました。",
    p2:"両者は互いを支えるように設計されています。夏にチームがつくった成果は9月のフォーラムへ引き継がれ、実際に動かせる人たちの前に置かれます。一方を支援する組織が、もう一方を支援する組織です。",
    b1t:"夏 · 4週間", b1b:"世界中から集まった学部生200名が、韓国のAI・半導体産業のなかで、韓国とアジアの同世代と混成チームを組んでものをつくります。",
    b2t:"9月9日 · 年次", b2b:"フォーラム本体。夏のプロジェクトが発表され、その期の最も優れた成果が、資金を出す人と採用する人に出会います。",
    noteT:"進捗状況:",
    noteB:"フォーラムは準備中で、第1回はまだ開催していません。現時点では計画なので、計画として記します。"
  },

  about:{
    kicker:"主催", title:"主催団体について",
    p1:"AIサマー・コリアは社団法人国際ブレインスポーツ協会が主催します。「民法」第32条および文化体育観光部所管の非営利法人の設立・監督に関する規則に基づき、2022年3月にソウル特別市長が設立を許可した法人です(許可第2022-53号)。チェス・チャンギ・スピードキューブ・スクリーンゴルフの大会を自ら開催し、選手登録制度を運営しています。協会が韓国国内の運営を担い、会場、訪問先、韓国で起きるすべてに責任を持ちます。",
    p2:"米国側のパートナーは、Plato Schoolを運営するカリフォルニア州の非営利法人Undenominated Church of Christianityです。2023年9月1日にサンフランシスコで設立され、米国内の募集と米国の大学との関係を担当します。米国外の募集はソウルから行います。宗教法人が学校を運営することは、教育において最も古いかたちです。米国のジョージタウン、ノートルダム、ボストンカレッジ、韓国の延世大学と梨花女子大学も、すべて同じ成り立ちです。プログラムの内容そのものは宗教とは無関係です。",
    advT:"顧問:",
    advB:"構成中です。ご本人の同意が得られ次第、この場に掲載します。掲載の承諾をいただく前に、お名前を載せることはありません。"
  },

    "nav": {
      "brand": "AI Summer Korea",
      "program": "プログラム",
      "visits": "訪問先",
      "apply": "応募",
      "sponsors": "協賛",
      "forum": "フォーラム",
      "about": "運営について"
    },
    "hero": {
      "eyebrow": "第1期 · 2027年夏 · 定員200名",
      "title": "AIを学習させる半導体が生まれる場所で、4週間。",
      "lede": "世界各国の大学生を韓国のAI・半導体産業の現場に招く、全額協賛の夏季プログラムです。工場と研究室、そしてそれを築いた人々に、同世代の韓国・アジアの学生とともに出会います。",
      "ctaApply": "2027年第1期に応募する",
      "ctaSponsor": "協賛について",
      "s1k": "参加費",
      "s1v": "無料",
      "s2k": "期間",
      "s2v": "4週間",
      "s3k": "第1期定員",
      "s3v": "200名",
      "s4k": "応募資格",
      "s4v": "全世界",
      "fine": "渡航費・宿泊・食事・プログラム費用は協賛企業が負担します。修了時に全額返還される保証金があります。"
    },
    "why": {
      "kicker": "なぜやるのか",
      "title": "サプライチェーンは読める。その中に立つのは別の話だ。",
      "p1": "世界の最先端AIモデルのほとんどは、韓国の工場を通ったメモリとロジックの上で学習されています。そのハードウェアの上にキャリアを築く学生が、その現場を見る機会はほとんどありません。",
      "p2": "AI Summer Korea はその隔たりを埋めるためにあります。そして次の世代のエンジニアに、この国と産業、これから30年をともに働く同世代を引き合わせるためにあります。",
      "c1t": "観光ではなく産業",
      "c1b": "半導体・製造の現場見学、研究室、エンジニアとの実務セッション。バスツアーに工場を一つ足したものではありません。",
      "c2t": "観客ではなく仲間",
      "c2b": "韓国とアジアの大学生が4週間を通してボランティア兼チームメイトとして参加します。全員が参加者で、案内されるだけの人はいません。",
      "c3t": "出席ではなく成果",
      "c3b": "参加者全員がチームプロジェクトを完成させ、発表します。つくったものがこのプログラムの記録であり、協賛企業が実際に見るものです。"
    },
    "program": {
      "kicker": "4週間",
      "title": "プログラム",
      "lede": "京畿道楊平の宿泊型キャンパスを拠点に、韓国各地の現場を訪ねます。",
      "w1tag": "第1週",
      "w1t": "足場をつくる",
      "w1b": "入国とオリエンテーション、そして韓国の技術経済への実務的な導入。どう築かれ、誰が築き、どこへ向かうのか。言語と文化の基礎。初日からチームを編成します。海外・韓国・アジアの学生が混ざります。",
      "w2tag": "第2週",
      "w2t": "産業の内側へ",
      "w2b": "半導体・製造・技術施設を少人数グループで訪問。エンジニアや経営陣とのセッション。各チームが取り組む課題を決めます。",
      "w3tag": "第3週",
      "w3t": "つくる",
      "w3b": "メンターの支援と計算資源クレジットのもとで開発に集中します。夜は創業者や研究者とのセッション。週末に首都圏外への文化訪問が一度あります。",
      "w4tag": "第4週",
      "w4t": "発表する",
      "w4b": "最終仕上げ、協賛企業の経営陣と招聘教員の前でのデモデイ、そして修了。際立ったチームと個人は協賛企業のインターンシップ・採用ルートに紹介されます。",
      "noteT": "グループの規模について：",
      "noteB": "半導体施設はクリーンルーム環境で、立ち入り人数が厳しく制限されます。現場訪問は少人数グループに分け、数日にわたって交代で行います。これは後付けの調整ではなく、設計そのものです。"
    },
    "apply": {
      "kicker": "応募について",
      "title": "こういう方を探しています",
      "elig": "応募資格",
      "covered": "支援される内容",
      "eligItems": [
        "国を問わず、認可された大学に在学中の学部生",
        "コンピュータサイエンス・工学・数学または関連分野の専攻、もしくは同等の成果物を示せる方",
        "2027年夏の4週間、全日程に参加できる方",
        "渡航期間中に有効なパスポートをお持ちの方",
        "訪韓経験は不要で、韓国語能力も求めません",
        "国と大学が偏らないよう選考します。応募者の少ない国や大学からの応募をとくに歓迎します"
      ],
      "coveredItems": [
        "国際往復航空券",
        "4週間全期間の宿泊",
        "プログラム期間中のすべての食事",
        "国内移動、現場訪問、プログラム活動",
        "プログラム期間の旅行・医療保険",
        "プロジェクト用の計算資源とAIツールのクレジット"
      ],
      "depT": "修了保証金：",
      "depB": "合格者は席を確保するため返還可能な保証金を預けます。プログラムを修了すると全額返還されます。プログラム自体は無料で、保証金は協賛で用意された席が空かないようにするためのものです。",
      "btn": "応募開始のお知らせを受け取る",
      "fine": "選考は委員会が、提出された成果物と応募理由をもとに行います。2027年夏の第1期の応募受付は2026年秋に開始します。"
    },
    "vol": {
      "kicker": "韓国・アジアの学生へ",
      "title": "ボランティアのチームメイトとして参加する",
      "lede": "韓国の学生に対して行われるプログラムではなく、韓国の学生とともに行うプログラムです。韓国およびアジア各地の大学生が、毎期ボランティア、チームメイト、案内役として加わります。",
      "c1t": "やること",
      "c1b": "4週間を通してプロジェクトチームに入り、訪れた学生が国内で困らないよう支え、すべての現場訪問とセッションに一緒に参加します。",
      "c2t": "得られるもの",
      "c2b": "同じ現場、同じメンター、同じデモデイ、そして世界各国の大学の同世代との実質的な関係。プログラム期間中の宿泊と食事は負担します。",
      "btn": "ボランティアとして関心を登録する"
    },
    "faq": {
      "kicker": "質問",
      "title": "よくある質問",
      "items": [
        [
          "本当に無料ですか？",
          "はい。航空券・宿泊・食事・保険・プログラム費用は協賛企業が負担します。合格者は返還可能な保証金を預け、修了時に全額返還されます。"
        ],
        [
          "韓国語は必要ですか？",
          "不要です。プログラムは英語で行います。過ごすうちに韓国語も多少身につきますし、韓国人のチームメイトが道に迷わせません。"
        ],
        [
          "単位は取得できますか？",
          "現時点ではできません。今後の期に向けて単位認定の可能性を大学と初期段階で協議しています。協定が成立するまで単位取得をうたうことはしません。"
        ],
        [
          "正確な日程はいつですか？",
          "2027年夏の4週間です。正確な日程はキャンパスの予約と現場訪問が確定した時点で決まり、応募開始前にこのページで公表します。"
        ],
        [
          "ビザの費用は誰が負担しますか？",
          "パスポートの国籍によって異なります。この長さの滞在なら多くの国籍はK-ETA（電子渡航認証）だけで足り、一部は短期滞在ビザが必要です。どちらに当たるかをお知らせし、必要書類を用意し、申請手数料を負担します。"
        ],
        [
          "プログラム期間中に求められることは？",
          "4週間の全日程参加と、デモデイでのチームプロジェクト発表です。休暇ではなく、取り組むためのプログラムです。"
        ],
        [
          "韓国またはアジアの学生ですが、参加できますか？",
          "はい。ボランティアのチームメイトとして参加できます。上のボランティアの項をご覧ください。訪れた参加者と同じ日程をともにします。"
        ],
        [
          "何名が合格しますか？",
          "第1期は200名です。第1期をきちんと運営するため、長期目標より意図的に小さく始めます。"
        ]
      ]
    },
    "foot": {
      "brand": "AI Summer Korea",
      "legal": "主催：社団法人 国際ブレインスポーツ協会（大韓民国）。米国側パートナー：Plato School を運営する Undenominated Church of Christianity（2023年9月1日カリフォルニア州設立の非営利法人）。",
      "note": "第1期：2027年夏。プログラムの詳細・日程・パートナーは確定するまで暫定であり、このページで更新します。",
      "updated": "最終更新"
    }
  ,

  form: {
      "title": "お問い合わせ",
      "intro": "どなたかをお知らせいただければ、必要なときにご連絡します — 応募開始のとき、または協賛ブリーフとともに。",
      "typeLabel": "どの立場からのご連絡ですか",
      "typeStudent": "参加を希望する学生",
      "typeVolunteer": "韓国・アジアのボランティアチームメイト",
      "typeSponsor": "企業・財団・公的機関",
      "typeOther": "その他",
      "name": "お名前",
      "email": "メールアドレス",
      "country": "国",
      "affiliation": "大学または所属機関",
      "message": "お伝えになりたいこと",
      "optional": "任意",
      "submit": "送信",
      "sending": "送信中…",
      "close": "閉じる",
      "okTitle": "ありがとうございます — 届きました。",
      "okBody": "いただいたアドレスにご連絡します。それ以外のメールはお送りしません。",
      "errTitle": "送信できませんでした。",
      "errBody": "こちら側の問題です。しばらくしてからもう一度お試しください。",
      "required": "必須",
      "badEmail": "メールアドレスをご確認ください",
      "privacy": "お名前・メールアドレス・国・所属を取得します。本プログラムに関するご連絡と、協賛企業へ報告する匿名の集計（応募者数、国の数）にのみ使用します。販売や第三者への提供は行いません。2027年第1期の終了まで保管し、ご希望があればそれより前に削除します。",
      "notYet": "受付はまだ開いていません。2026年秋、応募開始と同時に開きます。"
    }
},

/* ─────────────────── SPANISH ─────────────────── */
"es": {
  visits:{
    kicker:"Adónde vas", title:"Sedes y socios",
    lede:"Solo publicamos un socio cuando el acuerdo está firmado. Todo lo que aparece abajo lleva su estado real: aquí no hay ningún logotipo que solo esperemos conseguir.",
    fine:"La lista es provisional y se actualizará a medida que se confirmen los acuerdos. El itinerario definitivo se comunica a los participantes antes de la salida.",
    items:[
      { name:"Visita a una planta de fabricación de semiconductores", status:"talks", note:"Recorridos en grupos reducidos por zonas contiguas a la sala limpia. El socio se nombrará cuando el acuerdo esté firmado." },
      { name:"Fabricante de automoción y robótica", status:"talks", note:"Investigación en conducción autónoma y robótica, en un campus de producción en funcionamiento." },
      { name:"Laboratorio de IA de un grupo electrónico", status:"talks", note:"Sesiones con investigadores que construyen modelos fundacionales en Corea." },
      { name:"Empresa de tecnología del entretenimiento", status:"planned", note:"Cómo usa la IA en producción musical, voz y traducción una empresa que exporta cultura a todo el mundo." },
      { name:"Asamblea Nacional", status:"planned", note:"Cómo escribe realmente sus leyes de IA una democracia: una sesión con personal legislativo, no una foto en la escalinata." },
      { name:"Deportes mentales y los límites del juicio de una máquina", status:"planned", note:"El go, el ajedrez, el xiangqi y los esports fueron deportes con medalla en los Juegos Asiáticos de Hangzhou en 2023: competir contra máquinas ya forma parte del deporte internacional. Una sesión sobre el go, la intuición humana y lo que una máquina no ve, en la ciudad donde jugó AlphaGo." },
      { name:"Laboratorios universitarios de IA", status:"planned", note:"Sesiones de trabajo con investigadores de posgrado en Seúl y Daejeon." },
      { name:"Jornada de startups y estudios de capital riesgo de IA", status:"planned", note:"Sesiones con fundadores y visitas a oficinas en Seúl." },
      { name:"Fin de semana de viaje cultural", status:"planned", note:"Un fin de semana fuera del área metropolitana." },
      { name:"Campus residencial en Yangpyeong, Gyeonggi", status:"talks", note:"Campus educativo residencial público, con capacidad para unas 570 personas. Reserva pendiente de confirmar." }
    ]
  },

  spon:{
    kicker:"Para patrocinadores", title:"Patrocina una parte, no un número de personas",
    lede:"Cada patrocinador financia una parte distinta del programa, en la moneda que le resulta más fácil de dar. Unos ponen asientos de avión. Otros abren las puertas de una instalación. Otros aportan cómputo. Todo cuenta.",
    th1:"Qué se financia", th2:"Patrocinador habitual", th3:"Forma",
    rows:[
      ["Billetes de avión","Aerolíneas, RSC de grandes empresas","Asientos o efectivo"],
      ["Alojamiento y comidas","Gobiernos provinciales, empresas cotizadas","Efectivo o instalaciones"],
      ["Visitas a plantas","La propia empresa anfitriona","Acceso, no efectivo"],
      ["Cómputo y herramientas de IA","Empresas de IA","Créditos y sesiones con ingenieros"],
      ["Becas con nombre","Empresas, donantes particulares","Efectivo"],
      ["Programa por país","Organismos públicos","Efectivo o en especie"]
    ],
    c1t:"Por qué lo financian las empresas",
    c1b:"Doscientos estudiantes de grado en IA y computación, seleccionados en todo el mundo, pasan cuatro semanas dentro de tu sector y presentan un trabajo que puedes evaluar. El día de demostraciones es una sala de contratación, no una oportunidad para una foto.",
    c2t:"Qué te devolvemos por escrito",
    c2b:"Número de solicitudes y de admitidos, resultados de los participantes, resultados de los proyectos y la actividad de contratación posterior, entregado al terminar cada edición. Preferimos enseñarte una cifra antes que un testimonio.",
    budT:"La cifra, sin rodeos:",
    budB:"La primera edición, de 200 personas, tiene un presupuesto de unos 2.170 millones de wones: alrededor de 1,57 millones de dólares en total, unos 7.900 dólares por participante. Cubre vuelos, cuatro semanas de alojamiento y comidas, transporte, seguro y programación, más el personal y los costes de operación necesarios para llevarlo a cabo de verdad. Publicamos la cifra porque cualquier patrocinador va a calcularla igualmente. El presupuesto partida por partida y el plan de financiación acompañan al dosier para patrocinadores. Las cifras son provisionales hasta confirmar presupuestos.",
    btn:"Solicitar el dosier para patrocinadores"
  },

  forum:{
    kicker:"El marco más amplio", title:"La mitad de algo anual",
    p1:"AI Summer Korea es la vía estudiantil del Foro 999 de Seúl, un encuentro anual previsto para cada 9 de septiembre en Seúl, partiendo de la idea de que Corea debería acoger su propio foro internacional permanente en lugar de enviar delegaciones a los de los demás.",
    p2:"Los dos están hechos para alimentarse mutuamente. El trabajo que producen los equipos en verano se lleva al foro de septiembre y se pone delante de quienes pueden actuar sobre él. Las organizaciones que financian uno son las que financian el otro.",
    b1t:"Verano · cuatro semanas", b1b:"Doscientos estudiantes de grado de todo el mundo dentro de la industria coreana de IA y semiconductores, construyendo en equipos mixtos con compañeros coreanos y asiáticos.",
    b2t:"9 de septiembre · anual", b2b:"El foro en sí. Se presentan los proyectos del verano y el mejor trabajo de la promoción se encuentra con quienes financian y contratan.",
    noteT:"Estado:",
    noteB:"El foro está en preparación y aún no ha celebrado su primera edición. Lo describimos aquí como un plan, porque eso es lo que es ahora mismo."
  },

  about:{
    kicker:"Quién lo organiza", title:"Sobre la entidad organizadora",
    p1:"AI Summer Korea está organizado por la Asociación Internacional de Deportes Mentales, una entidad coreana sin ánimo de lucro autorizada en marzo de 2022 por el Gobierno Metropolitano de Seúl (licencia n.º 2022-53), al amparo del artículo 32 del Código Civil y del reglamento de entidades sin ánimo de lucro del Ministerio de Cultura, Deporte y Turismo. Organiza sus propias competiciones de ajedrez, janggi, speedcube y golf en simulador, y gestiona un sistema de jugadores federados. La asociación se hace cargo de la sede, de las visitas y de todo lo que ocurre sobre el terreno en Corea.",
    p2:"Nuestro socio en Estados Unidos es Undenominated Church of Christianity, la entidad californiana sin ánimo de lucro que gestiona Plato School, constituida en San Francisco el 1 de septiembre de 2023. Se ocupa de la captación en Estados Unidos y de la relación con las universidades estadounidenses. La captación fuera de Estados Unidos se dirige desde Seúl. Que una entidad religiosa gestione un centro educativo es la fórmula más antigua que existe en educación: Georgetown, Notre Dame y Boston College en Estados Unidos, Yonsei y Ewha en Corea, todas nacieron así. El programa en sí es laico.",
    advT:"Consejo asesor:",
    advB:"En formación. Los miembros aparecerán aquí una vez confirmados. No publicamos ningún nombre antes de que la persona haya aceptado figurar."
  },

    "nav": {
      "brand": "AI Summer Korea",
      "program": "Programa",
      "visits": "Dónde vas",
      "apply": "Solicitar",
      "sponsors": "Patrocinio",
      "forum": "Foro",
      "about": "Quiénes somos"
    },
    "hero": {
      "eyebrow": "Primera edición · Verano de 2027 · 200 plazas",
      "title": "Cuatro semanas en Corea, donde se fabrican los chips que entrenan la IA.",
      "lede": "Un programa de verano con todos los gastos cubiertos que lleva a estudiantes de grado de todo el mundo a la industria coreana de la IA y los semiconductores — las fábricas, los laboratorios, la gente que los construyó — junto a estudiantes coreanos y asiáticos de su edad.",
      "ctaApply": "Solicitar plaza para 2027",
      "ctaSponsor": "Patrocinar una edición",
      "s1k": "Matrícula",
      "s1v": "0 $",
      "s2k": "Duración",
      "s2v": "4 semanas",
      "s3k": "Plazas, primera edición",
      "s3v": "200",
      "s4k": "Abierto a",
      "s4v": "Todo el mundo",
      "fine": "Los patrocinadores cubren el viaje, el alojamiento, las comidas y los costes del programa. Se aplica un depósito reembolsable al completar el programa."
    },
    "why": {
      "kicker": "Por qué existe",
      "title": "Puedes leer sobre la cadena de suministro. O puedes estar dentro de ella.",
      "p1": "Casi todos los modelos de IA de frontera del mundo se entrenan sobre memoria y lógica que pasaron por plantas de fabricación coreanas. Los estudiantes que dedicarán su carrera a construir sobre ese hardware casi nunca llegan a verlo.",
      "p2": "AI Summer Korea existe para cerrar esa distancia, y para presentar a una generación de ingenieros el país, la industria y los colegas con los que trabajarán durante los próximos treinta años.",
      "c1t": "Industria, no turismo",
      "c1b": "Visitas a plantas de semiconductores y manufactura, laboratorios de investigación y sesiones de trabajo con ingenieros. No es un tour en autobús con una parada en una fábrica.",
      "c2t": "Colegas, no público",
      "c2b": "Estudiantes coreanos y asiáticos participan como voluntarios y compañeros de equipo durante las cuatro semanas completas. Todo el mundo participa. A nadie se le pasea.",
      "c3t": "Trabajo, no asistencia",
      "c3b": "Cada participante entrega un proyecto de equipo y lo presenta. Lo que construyes es el registro del programa, y es lo que los patrocinadores miran de verdad."
    },
    "program": {
      "kicker": "Las cuatro semanas",
      "title": "Programa",
      "lede": "Con base en un campus residencial en Yangpyeong, provincia de Gyeonggi, y desplazamientos a instalaciones por todo el país.",
      "w1tag": "Semana 1",
      "w1t": "Punto de partida",
      "w1b": "Llegada, orientación e introducción práctica a la economía tecnológica de Corea: cómo se construyó, quién la construyó y hacia dónde va. Nociones de idioma y cultura. Se forman los equipos: estudiantes visitantes, coreanos y asiáticos mezclados desde el primer día.",
      "w2tag": "Semana 2",
      "w2t": "Dentro de la industria",
      "w2b": "Visitas en grupos pequeños a instalaciones de semiconductores, manufactura y tecnología. Sesiones con ingenieros y directivos. Cada equipo elige el problema en el que va a trabajar.",
      "w3tag": "Semana 3",
      "w3t": "Construir",
      "w3b": "Trabajo intensivo de proyecto con apoyo de mentores y créditos de cómputo. Sesiones nocturnas con fundadores e investigadores. Un fin de semana de viaje cultural fuera de la capital.",
      "w4tag": "Semana 4",
      "w4t": "Presentar",
      "w4b": "Versiones finales, demo day ante directivos de los patrocinadores y profesorado invitado, y clausura. Los equipos y las personas que destaquen se presentan a los programas de prácticas y selección de los patrocinadores.",
      "noteT": "Sobre el tamaño de los grupos:",
      "noteB": "Las instalaciones de semiconductores son entornos de sala limpia con límites estrictos de acceso. Las visitas se hacen en grupos pequeños, por turnos a lo largo de varios días. Es parte del diseño del programa, no un parche posterior."
    },
    "apply": {
      "kicker": "Cómo solicitar",
      "title": "A quién buscamos",
      "elig": "Requisitos",
      "covered": "Qué está cubierto",
      "eligItems": [
        "Estudiante de grado matriculado en una universidad acreditada, en cualquier país",
        "Cursando informática, ingeniería, matemáticas o un campo afín, o capaz de acreditar trabajo equivalente",
        "Disponible las cuatro semanas completas del verano de 2027",
        "Con pasaporte válido durante todo el viaje",
        "No se requiere haber estado antes en Corea ni saber coreano",
        "Seleccionamos entre países e instituciones distintos; animamos especialmente a solicitantes de países y universidades poco representados"
      ],
      "coveredItems": [
        "Vuelo internacional de ida y vuelta",
        "Alojamiento durante las cuatro semanas",
        "Todas las comidas en días de programa",
        "Transporte terrestre, visitas y actividades del programa",
        "Seguro de viaje y médico durante el programa",
        "Créditos de cómputo y de herramientas de IA para el proyecto"
      ],
      "depT": "Depósito de finalización:",
      "depB": "Quienes son admitidos dejan un depósito reembolsable para reservar su plaza. Se devuelve íntegro al completar el programa. El programa en sí es gratuito: el depósito existe para que una plaza patrocinada no quede vacía.",
      "btn": "Aún no abierto — apúntate a la lista de avisos",
      "fine": "La selección la hace un comité según la calidad de tu trabajo y tus motivos para venir. Las solicitudes para la edición del verano de 2027 se abren en otoño de 2026."
    },
    "vol": {
      "kicker": "Estudiantes de Corea y Asia",
      "title": "Únete como voluntario del equipo",
      "lede": "Este no es un programa que les ocurre a los estudiantes coreanos: se hace con ellos. Estudiantes de grado de Corea y de toda Asia se suman a cada edición como voluntarios, compañeros de equipo y guías.",
      "c1t": "Qué haces",
      "c1b": "Trabajar en un equipo de proyecto durante las cuatro semanas, ayudar a los estudiantes visitantes a moverse por el país y participar en cada visita y sesión junto a ellos.",
      "c2t": "Qué obtienes",
      "c2b": "El mismo acceso, los mismos mentores, el mismo demo day y una relación de trabajo con colegas de universidades de todo el mundo. El alojamiento y las comidas están cubiertos en días de programa.",
      "btn": "Registrar interés como voluntario"
    },
    "faq": {
      "kicker": "Preguntas",
      "title": "Preguntas frecuentes",
      "items": [
        [
          "¿De verdad es gratis?",
          "Sí. Los patrocinadores cubren vuelo, alojamiento, comidas, seguro y costes del programa. Quienes son admitidos dejan un depósito reembolsable que se devuelve íntegro al completar el programa."
        ],
        [
          "¿Necesito hablar coreano?",
          "No. El programa se desarrolla en inglés. Aprenderás algo de coreano por el camino, y tus compañeros coreanos se asegurarán de que no te pierdas."
        ],
        [
          "¿Obtengo créditos académicos?",
          "Por ahora no. Estamos en conversaciones iniciales con universidades para ofrecer créditos en futuras ediciones. No afirmaremos que los damos hasta que exista un acuerdo."
        ],
        [
          "¿Cuáles son las fechas exactas?",
          "Verano de 2027, cuatro semanas. Las fechas exactas se confirman cuando estén cerradas la reserva del campus y las visitas, y se publicarán aquí antes de abrir las solicitudes."
        ],
        [
          "¿Quién paga mi visado?",
          "Depende de tu pasaporte. Para una estancia de esta duración, muchas nacionalidades solo necesitan la autorización de viaje K-ETA, mientras que otras requieren un visado de corta estancia. Te decimos cuál es tu caso, aportamos la documentación de apoyo y cubrimos las tasas de solicitud."
        ],
        [
          "¿Qué se espera de mí durante el programa?",
          "Participación completa durante cuatro semanas y un proyecto de equipo presentado en el demo day. Es un programa de trabajo, no unas vacaciones."
        ],
        [
          "Soy estudiante coreano o asiático. ¿Puedo participar?",
          "Sí, como voluntario del equipo. Consulta la sección de voluntariado más arriba. Participas en todo el programa junto a la cohorte visitante."
        ],
        [
          "¿Cuántas personas son admitidas?",
          "La primera edición es de 200. Empezamos deliberadamente por debajo de nuestro objetivo a largo plazo para que la primera edición se haga bien."
        ]
      ]
    },
    "foot": {
      "brand": "AI Summer Korea",
      "legal": "Organizado por la International Brain Sports Association (República de Corea). Socio en Estados Unidos: Undenominated Church of Christianity, entidad que gestiona Plato School, una corporación sin ánimo de lucro de California constituida el 1 de septiembre de 2023.",
      "note": "Primera edición: verano de 2027. Los detalles del programa, las fechas y los socios son provisionales hasta su confirmación y se actualizarán en esta página.",
      "updated": "Última actualización"
    }
  ,

  form: {
      "title": "Ponte en contacto",
      "intro": "Dinos quién eres y te escribiremos cuando importe: cuando se abran las solicitudes, o con el dosier para patrocinadores.",
      "typeLabel": "Escribo como",
      "typeStudent": "Estudiante que quiere participar",
      "typeVolunteer": "Voluntario en Corea o Asia",
      "typeSponsor": "Empresa, fundación u organismo público",
      "typeOther": "Otra cosa",
      "name": "Nombre",
      "email": "Correo electrónico",
      "country": "País",
      "affiliation": "Universidad u organización",
      "message": "Lo que quieras contarnos",
      "optional": "opcional",
      "submit": "Enviar",
      "sending": "Enviando…",
      "close": "Cerrar",
      "okTitle": "Gracias, nos ha llegado.",
      "okBody": "Te escribiremos a la dirección que nos has dado. No enviamos nada más.",
      "errTitle": "No se ha enviado.",
      "errBody": "Ha fallado algo por nuestra parte. Inténtalo de nuevo en un momento.",
      "required": "Obligatorio",
      "badEmail": "Revisa esta dirección de correo",
      "privacy": "Recogemos tu nombre, correo, país y organización para escribirte sobre este programa y para informar a los patrocinadores de totales anónimos: cuántas personas han solicitado y desde cuántos países. No vendemos ni cedemos nada. Lo conservamos hasta que termine la edición de 2027, y lo borramos antes si nos lo pides.",
      "notYet": "La lista aún no está abierta. Se abre con las solicitudes en otoño de 2026."
    }
},

/* ─────────────────── FRENCH ─────────────────── */
"fr": {
  visits:{
    kicker:"Où vous allez", title:"Sites et partenaires",
    lede:"Nous ne publions un partenaire qu'une fois l'accord signé. Chaque ligne ci-dessous porte son état réel : il n'y a ici aucun logo que nous espérions seulement obtenir.",
    fine:"La liste est provisoire et sera mise à jour au fur et à mesure des accords confirmés. L'itinéraire définitif est communiqué aux participants avant le départ.",
    items:[
      { name:"Visite d'un site de fabrication de semi-conducteurs", status:"talks", note:"Parcours en petits groupes dans les zones attenantes à la salle blanche. Le partenaire sera nommé une fois l'accord signé." },
      { name:"Constructeur automobile et robotique", status:"talks", note:"Recherche en conduite autonome et en robotique, sur un site de production en activité." },
      { name:"Laboratoire d'IA d'un groupe électronique", status:"talks", note:"Séances avec des chercheurs qui construisent des modèles de fondation en Corée." },
      { name:"Entreprise de technologie du divertissement", status:"planned", note:"Comment une entreprise qui exporte sa culture dans le monde entier utilise l'IA pour la production musicale, la voix et la traduction." },
      { name:"Assemblée nationale", status:"planned", note:"Comment une démocratie écrit réellement sa loi sur l'IA : une séance avec des collaborateurs parlementaires, pas une photo sur le perron." },
      { name:"Sports de l'esprit et limites du jugement des machines", status:"planned", note:"Le go, les échecs, le xiangqi et l'esport étaient des disciplines à médailles aux Jeux asiatiques de Hangzhou en 2023 : affronter des machines fait déjà partie du sport international. Une séance sur le go, l'intuition humaine et ce qu'une machine ne voit pas, dans la ville où AlphaGo a joué." },
      { name:"Laboratoires universitaires d'IA", status:"planned", note:"Séances de travail avec des chercheurs doctorants à Séoul et à Daejeon." },
      { name:"Journée startups et studios de capital-risque en IA", status:"planned", note:"Rencontres avec des fondateurs et visites de bureaux à Séoul." },
      { name:"Week-end culturel", status:"planned", note:"Un week-end hors de la région de la capitale." },
      { name:"Campus résidentiel de Yangpyeong, Gyeonggi", status:"talks", note:"Campus éducatif résidentiel public, capacité d'environ 570 personnes. Réservation à confirmer." }
    ]
  },

  spon:{
    kicker:"Pour les mécènes", title:"Financez une partie, pas un nombre de têtes",
    lede:"Chaque mécène finance une partie différente du programme, dans la monnaie qui lui est la plus simple à donner. Certains offrent des sièges d'avion. D'autres ouvrent les portes d'un site. D'autres fournissent du calcul. Tout cela compte.",
    th1:"Ce qui est financé", th2:"Mécène type", th3:"Forme",
    rows:[
      ["Billets d'avion","Compagnies aériennes, RSE de grands groupes","Sièges ou espèces"],
      ["Hébergement et repas","Collectivités, sociétés cotées","Espèces ou locaux"],
      ["Visites de sites industriels","L'entreprise d'accueil elle-même","Un accès, pas de l'argent"],
      ["Calcul et outils d'IA","Entreprises d'IA","Crédits et séances avec des ingénieurs"],
      ["Bourses nominatives","Entreprises, donateurs particuliers","Espèces"],
      ["Programme par pays","Organismes publics","Espèces ou en nature"]
    ],
    c1t:"Pourquoi les entreprises financent",
    c1b:"Deux cents étudiants en IA et en informatique, sélectionnés dans le monde entier, passent quatre semaines à l'intérieur de votre secteur et présentent un travail que vous pouvez évaluer. La journée de démonstration est une salle de recrutement, pas une occasion de photo.",
    c2t:"Ce que nous vous rendons",
    c2b:"Nombre de candidatures et d'admissions, devenir des participants, résultats des projets et recrutements qui en découlent, remis après chaque promotion. Nous préférons vous montrer un chiffre qu'un témoignage.",
    budT:"Le chiffre, sans détour :",
    budB:"La première promotion de 200 personnes est budgétée à environ 2,17 milliards de wons, soit près de 1,57 million de dollars au total et environ 7 900 dollars par participant. Cela couvre les vols, quatre semaines d'hébergement et de repas, les transports, l'assurance et la programmation, ainsi que le personnel et les frais de fonctionnement nécessaires pour le faire réellement tourner. Nous publions le chiffre parce qu'un mécène le calculera de toute façon. Le budget ligne par ligne et le plan de financement accompagnent le dossier mécénat. Chiffres provisoires jusqu'à confirmation des devis.",
    btn:"Demander le dossier mécénat"
  },

  forum:{
    kicker:"Le cadre plus large", title:"La moitié de quelque chose d'annuel",
    p1:"AI Summer Korea est le volet étudiant du Forum 999 de Séoul, une rencontre annuelle prévue chaque 9 septembre à Séoul, partant du principe que la Corée devrait accueillir son propre forum international permanent plutôt que d'envoyer des délégations à ceux des autres.",
    p2:"Les deux sont conçus pour se nourrir l'un l'autre. Le travail produit par les équipes en été est porté au forum de septembre et placé devant ceux qui peuvent en faire quelque chose. Les organisations qui financent l'un sont celles qui financent l'autre.",
    b1t:"Été · quatre semaines", b1b:"Deux cents étudiants venus du monde entier au cœur de l'industrie coréenne de l'IA et des semi-conducteurs, construisant en équipes mixtes avec des camarades coréens et asiatiques.",
    b2t:"9 septembre · annuel", b2b:"Le forum lui-même. Les projets de l'été y sont présentés, et les meilleurs travaux de la promotion rencontrent ceux qui financent et qui recrutent.",
    noteT:"État :",
    noteB:"Le forum est en préparation et n'a pas encore tenu sa première édition. Nous le décrivons ici comme un projet, parce que c'est ce qu'il est aujourd'hui."
  },

  about:{
    kicker:"Qui organise", title:"À propos de l'organisateur",
    p1:"AI Summer Korea est organisé par l'Association internationale des sports de l'esprit, une association coréenne à but non lucratif autorisée en mars 2022 par la Ville métropolitaine de Séoul (licence n° 2022-53), au titre de l'article 32 du Code civil et du règlement sur les personnes morales à but non lucratif relevant du ministère de la Culture, des Sports et du Tourisme. Elle organise ses propres compétitions d'échecs, de janggi, de speedcube et de golf en simulateur, et gère un système de joueurs licenciés. L'association est responsable du lieu, des visites et de tout ce qui se passe sur le terrain en Corée.",
    p2:"Notre partenaire aux États-Unis est Undenominated Church of Christianity, l'organisation californienne à but non lucratif qui gère Plato School, constituée à San Francisco le 1er septembre 2023. Elle prend en charge le recrutement aux États-Unis et les relations avec les universités américaines. Le recrutement hors des États-Unis est piloté depuis Séoul. Qu'une organisation religieuse gère un établissement d'enseignement est la formule la plus ancienne qui soit en éducation : Georgetown, Notre-Dame et Boston College aux États-Unis, Yonsei et Ewha en Corée, toutes nées ainsi. Le programme lui-même est laïque.",
    advT:"Conseil consultatif :",
    advB:"En cours de constitution. Les membres seront indiqués ici une fois leur accord obtenu. Nous ne publions aucun nom avant que la personne ait accepté d'y figurer."
  },

    "nav": {
      "brand": "AI Summer Korea",
      "program": "Programme",
      "visits": "Où vous allez",
      "apply": "Candidater",
      "sponsors": "Mécénat",
      "forum": "Forum",
      "about": "Qui organise"
    },
    "hero": {
      "eyebrow": "Première promotion · Été 2027 · 200 places",
      "title": "Quatre semaines en Corée, là où se fabriquent les puces qui entraînent l'IA.",
      "lede": "Un programme d'été entièrement financé qui amène des étudiants de licence du monde entier au cœur de l'industrie coréenne de l'IA et des semi-conducteurs — les usines, les laboratoires, celles et ceux qui les ont bâtis — aux côtés d'étudiants coréens et asiatiques de leur âge.",
      "ctaApply": "Candidater pour la promotion 2027",
      "ctaSponsor": "Devenir mécène",
      "s1k": "Frais de participation",
      "s1v": "0 $",
      "s2k": "Durée",
      "s2v": "4 semaines",
      "s3k": "Places, 1re promotion",
      "s3v": "200",
      "s4k": "Ouvert à",
      "s4v": "Monde entier",
      "fine": "Le voyage, l'hébergement, les repas et les frais du programme sont pris en charge par nos mécènes. Une caution remboursable à l'issue du programme est demandée."
    },
    "why": {
      "kicker": "Pourquoi ce programme",
      "title": "On peut lire sur la chaîne d'approvisionnement. On peut aussi s'y tenir.",
      "p1": "Presque tous les modèles d'IA de pointe sont entraînés sur de la mémoire et de la logique passées par des usines coréennes. Les étudiants qui bâtiront toute leur carrière sur ce matériel n'ont presque jamais l'occasion de le voir.",
      "p2": "AI Summer Korea existe pour combler cet écart, et pour faire découvrir à une génération d'ingénieurs le pays, l'industrie et les pairs avec lesquels ils travailleront pendant les trente prochaines années.",
      "c1t": "L'industrie, pas le tourisme",
      "c1b": "Visites de sites de semi-conducteurs et de production, laboratoires de recherche et sessions de travail avec des ingénieurs. Pas un circuit en bus avec une usine ajoutée au programme.",
      "c2t": "Des pairs, pas un public",
      "c2b": "Des étudiants coréens et asiatiques participent comme bénévoles et coéquipiers pendant les quatre semaines. Tout le monde participe. Personne n'est simplement promené.",
      "c3t": "Un résultat, pas une présence",
      "c3b": "Chaque participant livre un projet d'équipe et le présente. Ce que vous construisez est la trace du programme, et c'est ce que les mécènes regardent vraiment."
    },
    "program": {
      "kicker": "Les quatre semaines",
      "title": "Programme",
      "lede": "Basé sur un campus résidentiel à Yangpyeong, province de Gyeonggi, avec des déplacements sur des sites dans tout le pays.",
      "w1tag": "Semaine 1",
      "w1t": "Poser les bases",
      "w1b": "Arrivée, accueil et introduction concrète à l'économie technologique coréenne : comment elle s'est construite, par qui, et où elle va. Bases de langue et de culture. Les équipes se forment dès le premier jour : étudiants étrangers, coréens et asiatiques mélangés.",
      "w2tag": "Semaine 2",
      "w2t": "Dans l'industrie",
      "w2b": "Visites en petits groupes de sites de semi-conducteurs, de production et de technologie. Sessions avec des ingénieurs et des dirigeants. Chaque équipe choisit le problème sur lequel elle travaillera.",
      "w3tag": "Semaine 3",
      "w3t": "Construire",
      "w3b": "Travail de projet intensif avec accompagnement de mentors et crédits de calcul. Sessions en soirée avec des fondateurs et des chercheurs. Un week-end de découverte culturelle hors de la capitale.",
      "w4tag": "Semaine 4",
      "w4t": "Présenter",
      "w4b": "Finalisation, demo day devant les dirigeants des mécènes et des enseignants invités, puis clôture. Les équipes et les profils qui se distinguent sont présentés aux filières de stage et de recrutement des mécènes.",
      "noteT": "Sur la taille des groupes :",
      "noteB": "Les sites de semi-conducteurs sont des salles blanches à accès strictement limité. Les visites se font en petits groupes, par rotation sur plusieurs jours. C'est une donnée de conception du programme, pas un ajustement de dernière minute."
    },
    "apply": {
      "kicker": "Candidater",
      "title": "À qui s'adresse le programme",
      "elig": "Conditions",
      "covered": "Ce qui est pris en charge",
      "eligItems": [
        "Étudiant de licence inscrit dans un établissement accrédité, quel que soit le pays",
        "En informatique, ingénierie, mathématiques ou discipline proche, ou capable de montrer un travail équivalent",
        "Disponible les quatre semaines complètes durant l'été 2027",
        "Titulaire d'un passeport valable pendant toute la durée du voyage",
        "Aucun séjour préalable en Corée requis, aucune connaissance du coréen exigée",
        "Nous sélectionnons entre pays et établissements ; les candidatures venant de pays et d'universités peu représentés sont particulièrement encouragées"
      ],
      "coveredItems": [
        "Billet d'avion international aller-retour",
        "Hébergement pendant les quatre semaines",
        "Tous les repas les jours de programme",
        "Transports sur place, visites de sites et activités du programme",
        "Assurance voyage et santé pour la durée du programme",
        "Crédits de calcul et d'outils d'IA pour le projet"
      ],
      "depT": "Caution de fin de programme :",
      "depB": "Les candidats admis versent une caution remboursable pour réserver leur place. Elle est restituée intégralement à l'issue du programme. Le programme lui-même est gratuit : la caution existe pour qu'une place financée par un mécène ne reste pas vide.",
      "btn": "Candidatures pas encore ouvertes — être prévenu",
      "fine": "La sélection est faite par un comité, sur la qualité de votre travail et vos motivations. Les candidatures pour la promotion de l'été 2027 ouvrent à l'automne 2026."
    },
    "vol": {
      "kicker": "Étudiants de Corée et d'Asie",
      "title": "Rejoindre comme coéquipier bénévole",
      "lede": "Ce n'est pas un programme qui arrive aux étudiants coréens : il se fait avec eux. Des étudiants de Corée et de toute l'Asie rejoignent chaque promotion comme bénévoles, coéquipiers et guides.",
      "c1t": "Ce que vous faites",
      "c1b": "Travailler dans une équipe projet pendant les quatre semaines, aider les étudiants venus de l'étranger à se repérer dans le pays, et participer à chaque visite et chaque session avec eux.",
      "c2t": "Ce que vous en retirez",
      "c2b": "Le même accès, les mêmes mentors, le même demo day, et une relation de travail avec des pairs d'universités du monde entier. L'hébergement et les repas sont pris en charge les jours de programme.",
      "btn": "Manifester son intérêt comme bénévole"
    },
    "faq": {
      "kicker": "Questions",
      "title": "Questions fréquentes",
      "items": [
        [
          "Est-ce vraiment gratuit ?",
          "Oui. Le vol, l'hébergement, les repas, l'assurance et les frais du programme sont pris en charge par les mécènes. Les admis versent une caution remboursable, restituée intégralement à l'issue du programme."
        ],
        [
          "Faut-il parler coréen ?",
          "Non. Le programme se déroule en anglais. Vous apprendrez quelques mots de coréen en chemin, et vos coéquipiers coréens veilleront à ce que vous ne soyez pas perdu."
        ],
        [
          "Y a-t-il des crédits universitaires ?",
          "Pas pour l'instant. Nous en sommes aux premières discussions avec des universités partenaires pour les promotions futures. Nous n'annoncerons pas de crédits tant qu'un accord n'existe pas."
        ],
        [
          "Quelles sont les dates exactes ?",
          "Été 2027, quatre semaines. Les dates exactes seront fixées une fois la réservation du campus et les visites confirmées, et publiées ici avant l'ouverture des candidatures."
        ],
        [
          "Qui paie mon visa ?",
          "Cela dépend de votre passeport. Pour un séjour de cette durée, de nombreuses nationalités n'ont besoin que de l'autorisation de voyage K-ETA ; d'autres doivent obtenir un visa de court séjour. Nous vous indiquons ce qui s'applique à vous, fournissons les justificatifs et prenons en charge les frais de dossier."
        ],
        [
          "Qu'attend-on de moi pendant le programme ?",
          "Une participation complète sur quatre semaines et un projet d'équipe présenté au demo day. C'est un programme de travail, pas des vacances."
        ],
        [
          "Je suis étudiant coréen ou asiatique. Puis-je participer ?",
          "Oui, comme coéquipier bénévole. Voir la section bénévolat ci-dessus. Vous suivez l'intégralité du programme avec la promotion accueillie."
        ],
        [
          "Combien de personnes sont admises ?",
          "La première promotion compte 200 places. Nous démarrons volontairement en deçà de notre objectif à long terme pour que cette première édition soit menée correctement."
        ]
      ]
    },
    "foot": {
      "brand": "AI Summer Korea",
      "legal": "Organisé par l'International Brain Sports Association (République de Corée). Partenaire aux États-Unis : Undenominated Church of Christianity, qui gère Plato School, organisation à but non lucratif de Californie constituée le 1er septembre 2023.",
      "note": "Première promotion : été 2027. Les détails du programme, les dates et les partenaires sont provisoires jusqu'à confirmation et seront mis à jour sur cette page.",
      "updated": "Dernière mise à jour"
    }
  ,

  form: {
      "title": "Nous contacter",
      "intro": "Dites-nous qui vous êtes et nous vous écrirons au bon moment : à l'ouverture des candidatures, ou avec le dossier de mécénat.",
      "typeLabel": "J'écris en tant que",
      "typeStudent": "Étudiant qui souhaite participer",
      "typeVolunteer": "Bénévole en Corée ou en Asie",
      "typeSponsor": "Entreprise, fondation ou organisme public",
      "typeOther": "Autre",
      "name": "Nom",
      "email": "Adresse e-mail",
      "country": "Pays",
      "affiliation": "Université ou organisation",
      "message": "Ce que vous souhaitez nous dire",
      "optional": "facultatif",
      "submit": "Envoyer",
      "sending": "Envoi…",
      "close": "Fermer",
      "okTitle": "Merci, votre message nous est bien parvenu.",
      "okBody": "Nous écrirons à l'adresse que vous avez indiquée. Nous n'envoyons rien d'autre.",
      "errTitle": "L'envoi a échoué.",
      "errBody": "Le problème vient de chez nous. Réessayez dans un instant.",
      "required": "Obligatoire",
      "badEmail": "Vérifiez cette adresse e-mail",
      "privacy": "Nous recueillons vos nom, adresse e-mail, pays et organisation pour vous écrire au sujet du programme et pour communiquer aux mécènes des totaux anonymes : combien de candidatures, depuis combien de pays. Rien n'est vendu ni transmis. Nous les conservons jusqu'à la fin de la promotion 2027, et les supprimons plus tôt si vous le demandez.",
      "notYet": "La liste n'est pas encore ouverte. Elle ouvrira avec les candidatures à l'automne 2026."
    }
},

/* ─────────────────── GERMAN ─────────────────── */
"de": {
  visits:{
    kicker:"Wohin es geht", title:"Standorte und Partner",
    lede:"Wir nennen einen Partner erst, wenn die Vereinbarung unterschrieben ist. Jede Zeile unten trägt ihren tatsächlichen Stand — hier steht kein Logo, das wir uns bloß erhoffen.",
    fine:"Die Liste ist vorläufig und wird fortlaufend ergänzt, sobald Vereinbarungen bestätigt sind. Das endgültige Programm erhalten die Teilnehmenden vor der Abreise.",
    items:[
      { name:"Besuch einer Halbleiterfertigung", status:"talks", note:"Rundgänge in kleinen Gruppen in den an den Reinraum angrenzenden Bereichen. Der Partner wird genannt, sobald die Vereinbarung unterschrieben ist." },
      { name:"Automobil- und Robotikhersteller", status:"talks", note:"Forschung zu autonomem Fahren und Robotik auf einem laufenden Produktionsgelände." },
      { name:"KI-Forschungslabor eines Elektronikkonzerns", status:"talks", note:"Sitzungen mit Forschenden, die in Korea Basismodelle entwickeln." },
      { name:"Unternehmen für Unterhaltungstechnologie", status:"planned", note:"Wie ein Unternehmen, das Kultur in die ganze Welt exportiert, KI in Musikproduktion, Stimme und Übersetzung einsetzt." },
      { name:"Nationalversammlung", status:"planned", note:"Wie eine Demokratie ihr KI-Recht tatsächlich schreibt — eine Sitzung mit Mitarbeitenden der Gesetzgebung, kein Foto auf der Freitreppe." },
      { name:"Denksport und die Grenzen maschinellen Urteilens", status:"planned", note:"Go, Schach, Xiangqi und E-Sport waren bei den Asienspielen 2023 in Hangzhou Medaillendisziplinen — gegen Maschinen anzutreten gehört längst zum internationalen Sport. Eine Sitzung über Go, menschliche Intuition und das, was eine Maschine nicht sieht, in der Stadt, in der AlphaGo gespielt hat." },
      { name:"Universitäre KI-Forschungslabore", status:"planned", note:"Arbeitssitzungen mit Promovierenden in Seoul und Daejeon." },
      { name:"Tag der KI-Start-ups und Venture-Studios", status:"planned", note:"Gespräche mit Gründerinnen und Gründern sowie Bürobesuche in Seoul." },
      { name:"Wochenende für Kultur und Reisen", status:"planned", note:"Ein Wochenende außerhalb der Hauptstadtregion." },
      { name:"Wohncampus in Yangpyeong, Gyeonggi", status:"talks", note:"Öffentlicher Bildungscampus mit Unterkunft, Kapazität rund 570 Personen. Buchung noch zu bestätigen." }
    ]
  },

  spon:{
    kicker:"Für Förderer", title:"Fördern Sie einen Teil, keine Kopfzahl",
    lede:"Jeder Förderer trägt einen anderen Teil dieses Programms — in der Währung, die ihm am leichtesten fällt. Die einen geben Flugplätze. Die anderen öffnen ein Werk. Wieder andere stellen Rechenleistung bereit. Das alles zählt.",
    th1:"Was gefördert wird", th2:"Typischer Förderer", th3:"Form",
    rows:[
      ["Flüge","Fluggesellschaften, CSR großer Unternehmen","Plätze oder Geld"],
      ["Unterkunft und Verpflegung","Provinzregierungen, börsennotierte Unternehmen","Geld oder Räumlichkeiten"],
      ["Werksbesuche","Das gastgebende Unternehmen selbst","Zugang, kein Geld"],
      ["Rechenleistung und KI-Werkzeuge","KI-Unternehmen","Guthaben und Sitzungen mit Ingenieurinnen und Ingenieuren"],
      ["Namensstipendien","Unternehmen, private Spender","Geld"],
      ["Länderprogramm","Öffentliche Stellen","Geld oder Sachleistung"]
    ],
    c1t:"Warum Unternehmen das fördern",
    c1b:"Zweihundert ausgewählte Studierende der KI und Informatik aus aller Welt verbringen vier Wochen in Ihrer Branche und stellen Arbeiten vor, die Sie beurteilen können. Der Demo-Tag ist ein Recruiting-Raum, kein Fototermin.",
    c2t:"Was wir zurückmelden",
    c2b:"Bewerber- und Auswahlzahlen, Werdegang der Teilnehmenden, Projektergebnisse und die daraus entstandenen Einstellungen — nach jedem Jahrgang zusammengestellt. Wir zeigen Ihnen lieber eine Zahl als ein Testimonial.",
    budT:"Die Zahl, ohne Umschweife:",
    budB:"Für den ersten Jahrgang mit 200 Personen sind rund 2,17 Milliarden Won veranschlagt — insgesamt etwa 1,57 Millionen US-Dollar, rund 7.900 US-Dollar je Teilnehmerin oder Teilnehmer. Darin enthalten sind Flüge, vier Wochen Unterkunft und Verpflegung, Transport, Versicherung und Programm sowie das Personal und die Betriebskosten, die nötig sind, um das Ganze tatsächlich durchzuführen. Wir veröffentlichen die Zahl, weil ein Förderer sie ohnehin ausrechnet. Der Haushalt Posten für Posten und der Finanzierungsplan liegen der Förderunterlage bei. Alle Zahlen sind vorläufig, bis Angebote bestätigt sind.",
    btn:"Förderunterlage anfordern"
  },

  forum:{
    kicker:"Der größere Rahmen", title:"Die Hälfte von etwas Jährlichem",
    p1:"AI Summer Korea ist der Studierendenteil des 999 Seoul Forum — eines jährlichen Treffens, das jeweils am 9. September in Seoul stattfinden soll, ausgehend von dem Gedanken, dass Korea ein eigenes ständiges internationales Forum ausrichten sollte, statt Delegationen zu den Foren anderer zu schicken.",
    p2:"Beide sind so angelegt, dass sie einander tragen. Was die Teams im Sommer erarbeiten, wird in das Septemberforum getragen und denen vorgelegt, die daraus etwas machen können. Wer das eine fördert, fördert das andere.",
    b1t:"Sommer · vier Wochen", b1b:"Zweihundert Studierende aus aller Welt mitten in Koreas KI- und Halbleiterindustrie, die in gemischten Teams mit koreanischen und asiatischen Gleichaltrigen etwas bauen.",
    b2t:"9. September · jährlich", b2b:"Das Forum selbst. Die Sommerprojekte werden vorgestellt, und die stärksten Arbeiten des Jahrgangs treffen auf die, die fördern und einstellen.",
    noteT:"Stand:",
    noteB:"Das Forum ist in Vorbereitung und hat noch keine erste Ausgabe abgehalten. Wir beschreiben es hier als Vorhaben, weil es derzeit genau das ist."
  },

  about:{
    kicker:"Wer dahintersteht", title:"Über den Veranstalter",
    p1:"AI Summer Korea wird von der International Brain Sports Association veranstaltet, einer koreanischen gemeinnützigen Körperschaft, die im März 2022 von der Stadt Seoul zugelassen wurde (Genehmigung Nr. 2022-53), nach Artikel 32 des Zivilgesetzbuchs und der Verordnung des Ministeriums für Kultur, Sport und Tourismus über gemeinnützige Körperschaften. Sie richtet eigene Wettbewerbe in Schach, Janggi, Speedcube und Screengolf aus und führt ein Spielerregister. Die Vereinigung verantwortet den Veranstaltungsort, die Besuche und alles, was in Korea vor Ort geschieht.",
    p2:"Unser Partner in den Vereinigten Staaten ist Undenominated Church of Christianity, die kalifornische gemeinnützige Körperschaft, die Plato School betreibt und am 1. September 2023 in San Francisco gegründet wurde. Sie übernimmt die Gewinnung von Teilnehmenden in den USA und die Beziehungen zu amerikanischen Hochschulen. Die Gewinnung außerhalb der USA wird von Seoul aus gesteuert. Dass eine religiöse Körperschaft eine Schule betreibt, ist die älteste Form im Bildungswesen — Georgetown, Notre Dame und Boston College in den Vereinigten Staaten, Yonsei und Ewha in Korea sind alle so entstanden. Das Programm selbst ist weltlich.",
    advT:"Beirat:",
    advB:"Im Aufbau. Mitglieder werden hier aufgeführt, sobald sie zugesagt haben. Wir nennen keinen Namen, bevor die betreffende Person der Nennung zugestimmt hat."
  },

    "nav": {
      "brand": "AI Summer Korea",
      "program": "Programm",
      "visits": "Wohin es geht",
      "apply": "Bewerben",
      "sponsors": "Förderung",
      "forum": "Forum",
      "about": "Wer dahintersteht"
    },
    "hero": {
      "eyebrow": "Erster Jahrgang · Sommer 2027 · 200 Plätze",
      "title": "Vier Wochen in Korea, dort wo die Chips entstehen, die KI trainieren.",
      "lede": "Ein vollständig gefördertes Sommerprogramm, das Studierende aus aller Welt in Koreas KI- und Halbleiterindustrie bringt — in die Fabriken, die Labore, zu den Menschen, die sie aufgebaut haben — gemeinsam mit koreanischen und asiatischen Studierenden ihres Alters.",
      "ctaApply": "Für den Jahrgang 2027 bewerben",
      "ctaSponsor": "Einen Jahrgang fördern",
      "s1k": "Teilnahmegebühr",
      "s1v": "0 $",
      "s2k": "Dauer",
      "s2v": "4 Wochen",
      "s3k": "Plätze, erster Jahrgang",
      "s3v": "200",
      "s4k": "Offen für",
      "s4v": "Weltweit",
      "fine": "Reise, Unterkunft, Verpflegung und Programmkosten tragen unsere Förderer. Es wird eine bei Abschluss erstattete Kaution erhoben."
    },
    "why": {
      "kicker": "Warum es das gibt",
      "title": "Über Lieferketten kann man lesen. Man kann auch darin stehen.",
      "p1": "Nahezu jedes führende KI-Modell der Welt wird auf Speicher- und Logikchips trainiert, die durch koreanische Fabriken gegangen sind. Studierende, die ihre Laufbahn auf dieser Hardware aufbauen werden, bekommen sie so gut wie nie zu sehen.",
      "p2": "AI Summer Korea gibt es, um diese Lücke zu schließen — und um einer Generation von Ingenieurinnen und Ingenieuren das Land, die Industrie und die Kolleginnen und Kollegen vorzustellen, mit denen sie die nächsten dreißig Jahre arbeiten werden.",
      "c1t": "Industrie, kein Tourismus",
      "c1b": "Besuche in Halbleiter- und Produktionswerken, Forschungslabore und Arbeitssitzungen mit Ingenieuren. Keine Bustour mit angehängtem Fabrikstopp.",
      "c2t": "Mitwirkende, kein Publikum",
      "c2b": "Koreanische und asiatische Studierende sind die vollen vier Wochen als Freiwillige und Teammitglieder dabei. Alle nehmen teil. Niemand wird nur herumgeführt.",
      "c3t": "Ergebnis, keine Anwesenheit",
      "c3b": "Jede und jeder Teilnehmende liefert ein Teamprojekt ab und stellt es vor. Was Sie bauen, ist der Beleg des Programms — und das, worauf Förderer tatsächlich schauen."
    },
    "program": {
      "kicker": "Die vier Wochen",
      "title": "Programm",
      "lede": "Basis ist ein Wohncampus in Yangpyeong, Provinz Gyeonggi, mit Fahrten zu Standorten im ganzen Land.",
      "w1tag": "Woche 1",
      "w1t": "Grundlage schaffen",
      "w1b": "Ankunft, Orientierung und eine praxisnahe Einführung in Koreas Technologiewirtschaft: wie sie entstand, wer sie aufgebaut hat und wohin sie geht. Sprach- und Kulturgrundlagen. Die Teams werden gebildet — angereiste, koreanische und asiatische Studierende vom ersten Tag an gemischt.",
      "w2tag": "Woche 2",
      "w2t": "In der Industrie",
      "w2b": "Besuche in Halbleiter-, Produktions- und Technologiestandorten in kleinen Gruppen. Sitzungen mit Ingenieuren und Führungskräften. Jedes Team wählt das Problem, an dem es arbeiten wird.",
      "w3tag": "Woche 3",
      "w3t": "Bauen",
      "w3b": "Konzentrierte Projektarbeit mit Mentorenbetreuung und Rechenkontingenten. Abendsitzungen mit Gründerinnen und Forschern. Ein Wochenende mit kultureller Reise außerhalb der Hauptstadtregion.",
      "w4tag": "Woche 4",
      "w4t": "Vorstellen",
      "w4b": "Fertigstellung, Demo Day vor Führungskräften der Förderer und eingeladenen Lehrenden, dann Abschluss. Herausragende Teams und Einzelpersonen werden den Praktikums- und Rekrutierungswegen der Förderer vorgestellt.",
      "noteT": "Zur Gruppengröße:",
      "noteB": "Halbleiterwerke sind Reinraumumgebungen mit streng begrenztem Zutritt. Standortbesuche laufen in kleinen Gruppen im Wechsel über mehrere Tage. Das ist Teil der Programmkonstruktion, kein nachträglicher Behelf."
    },
    "apply": {
      "kicker": "Bewerbung",
      "title": "Für wen das gedacht ist",
      "elig": "Voraussetzungen",
      "covered": "Was übernommen wird",
      "eligItems": [
        "Eingeschriebene Bachelor-Studierende an einer anerkannten Hochschule, in jedem Land",
        "Studium der Informatik, Ingenieurwissenschaften, Mathematik oder eines verwandten Fachs — oder gleichwertige Arbeiten vorweisbar",
        "Verfügbar für die vollen vier Wochen im Sommer 2027",
        "Reisepass, der für die gesamte Reisedauer gültig ist",
        "Kein vorheriger Korea-Aufenthalt und keine Koreanischkenntnisse erforderlich",
        "Wir wählen über Länder und Hochschulen hinweg aus; Bewerbungen aus unterrepräsentierten Ländern und Universitäten sind ausdrücklich erwünscht"
      ],
      "coveredItems": [
        "Internationaler Hin- und Rückflug",
        "Unterkunft für die vollen vier Wochen",
        "Alle Mahlzeiten an Programmtagen",
        "Transport vor Ort, Standortbesuche und Programmaktivitäten",
        "Reise- und Krankenversicherung für die Programmdauer",
        "Rechen- und KI-Tool-Kontingente für die Projektarbeit"
      ],
      "depT": "Abschlusskaution:",
      "depB": "Zugelassene Studierende hinterlegen eine erstattungsfähige Kaution, um ihren Platz zu sichern. Sie wird bei Abschluss des Programms vollständig zurückgezahlt. Das Programm selbst ist kostenlos — die Kaution sorgt dafür, dass ein geförderter Platz nicht leer bleibt.",
      "btn": "Noch nicht geöffnet — auf die Benachrichtigungsliste",
      "fine": "Die Auswahl trifft ein Komitee anhand Ihrer Arbeiten und Ihrer Gründe zu kommen. Die Bewerbung für den Jahrgang Sommer 2027 öffnet im Herbst 2026."
    },
    "vol": {
      "kicker": "Studierende aus Korea und Asien",
      "title": "Als freiwilliges Teammitglied mitmachen",
      "lede": "Das ist kein Programm, das koreanischen Studierenden widerfährt — es entsteht mit ihnen. Studierende aus Korea und ganz Asien kommen zu jedem Jahrgang als Freiwillige, Teammitglieder und Wegweiser dazu.",
      "c1t": "Was Sie tun",
      "c1b": "Vier Wochen lang in einem Projektteam arbeiten, den angereisten Studierenden helfen, sich im Land zurechtzufinden, und an jedem Standortbesuch und jeder Sitzung mit ihnen teilnehmen.",
      "c2t": "Was Sie davon haben",
      "c2b": "Denselben Zugang, dieselben Mentoren, denselben Demo Day und eine Arbeitsbeziehung zu Gleichaltrigen an Universitäten weltweit. Unterkunft und Verpflegung werden an Programmtagen übernommen.",
      "btn": "Interesse als Freiwillige oder Freiwilliger anmelden"
    },
    "faq": {
      "kicker": "Fragen",
      "title": "Häufige Fragen",
      "items": [
        [
          "Ist es wirklich kostenlos?",
          "Ja. Flug, Unterkunft, Verpflegung, Versicherung und Programmkosten tragen die Förderer. Zugelassene Studierende hinterlegen eine erstattungsfähige Kaution, die bei Abschluss vollständig zurückgezahlt wird."
        ],
        [
          "Muss ich Koreanisch sprechen?",
          "Nein. Das Programm läuft auf Englisch. Unterwegs lernen Sie etwas Koreanisch, und Ihre koreanischen Teammitglieder sorgen dafür, dass Sie sich nicht verlaufen."
        ],
        [
          "Bekomme ich Leistungspunkte?",
          "Derzeit nicht. Wir führen erste Gespräche mit Partnerhochschulen über anrechenbare Optionen für künftige Jahrgänge. Wir behaupten keine Anrechnung, solange keine Vereinbarung besteht."
        ],
        [
          "Wie lauten die genauen Termine?",
          "Sommer 2027, vier Wochen. Die genauen Termine stehen fest, sobald Campusbuchung und Standortbesuche fixiert sind, und werden hier vor Bewerbungsbeginn veröffentlicht."
        ],
        [
          "Wer zahlt mein Visum?",
          "Das hängt von Ihrem Reisepass ab. Für einen Aufenthalt dieser Länge genügt vielen Staatsangehörigkeiten die Reisegenehmigung K-ETA, andere benötigen ein Kurzzeitvisum. Wir sagen Ihnen, was für Sie gilt, stellen die Nachweise bereit und übernehmen die erforderlichen Antragsgebühren."
        ],
        [
          "Was wird während des Programms von mir erwartet?",
          "Vollständige Teilnahme über vier Wochen und ein Teamprojekt, das am Demo Day vorgestellt wird. Das ist ein Arbeitsprogramm, kein Urlaub."
        ],
        [
          "Ich bin koreanischer oder asiatischer Studierender. Kann ich mitmachen?",
          "Ja — als freiwilliges Teammitglied. Siehe den Abschnitt zum Freiwilligendienst oben. Sie durchlaufen das gesamte Programm gemeinsam mit dem angereisten Jahrgang."
        ],
        [
          "Wie viele Personen werden aufgenommen?",
          "Der erste Jahrgang umfasst 200 Plätze. Wir starten bewusst unter unserem langfristigen Ziel, damit der erste Jahrgang ordentlich durchgeführt wird."
        ]
      ]
    },
    "foot": {
      "brand": "AI Summer Korea",
      "legal": "Veranstaltet von der International Brain Sports Association (Republik Korea). Partner in den Vereinigten Staaten: Undenominated Church of Christianity, Trägerin der Plato School, eine am 1. September 2023 in Kalifornien gegründete gemeinnützige Körperschaft.",
      "note": "Erster Jahrgang: Sommer 2027. Programmdetails, Termine und Partner sind bis zur Bestätigung vorläufig und werden auf dieser Seite aktualisiert.",
      "updated": "Zuletzt aktualisiert"
    }
  ,

  form: {
      "title": "Kontakt aufnehmen",
      "intro": "Sagen Sie uns, wer Sie sind, und wir melden uns, wenn es darauf ankommt — zur Öffnung der Bewerbung oder mit den Förderunterlagen.",
      "typeLabel": "Ich schreibe als",
      "typeStudent": "Studierende oder Studierender mit Teilnahmewunsch",
      "typeVolunteer": "Freiwillige oder Freiwilliger in Korea oder Asien",
      "typeSponsor": "Unternehmen, Stiftung oder Behörde",
      "typeOther": "Etwas anderes",
      "name": "Name",
      "email": "E-Mail",
      "country": "Land",
      "affiliation": "Hochschule oder Organisation",
      "message": "Was wir wissen sollten",
      "optional": "optional",
      "submit": "Senden",
      "sending": "Wird gesendet…",
      "close": "Schließen",
      "okTitle": "Danke — das ist bei uns angekommen.",
      "okBody": "Wir schreiben an die angegebene Adresse. Sonst senden wir nichts.",
      "errTitle": "Das ist nicht durchgegangen.",
      "errBody": "Auf unserer Seite ist etwas fehlgeschlagen. Bitte versuchen Sie es gleich noch einmal.",
      "required": "Pflichtfeld",
      "badEmail": "Bitte diese E-Mail-Adresse prüfen",
      "privacy": "Wir erheben Name, E-Mail, Land und Organisation, um Ihnen zu diesem Programm zu schreiben und um Förderern anonymisierte Summen zu berichten — wie viele Bewerbungen aus wie vielen Ländern. Nichts wird verkauft oder weitergegeben. Wir speichern die Angaben bis zum Ende des Jahrgangs 2027 und löschen sie früher, wenn Sie es verlangen.",
      "notYet": "Die Liste ist noch nicht geöffnet. Sie öffnet mit den Bewerbungen im Herbst 2026."
    }
}

};
