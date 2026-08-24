/* Korea AI Summer — translations.
   English lives in index.html so that crawlers that do not run JavaScript
   still read a full page. This file carries every other language, plus the
   English copies of the list data that app.js re-renders on language change.

   Adding a language: copy the `ko` block, translate, add the code to LANGS.
   Keep the item COUNT of every array identical across languages — a mismatched
   array renders short in that language only, and nothing warns you. */

var LANGS = [
  { code:"en", label:"EN", dir:"ltr" },
  { code:"ko", label:"한국어", dir:"ltr" }
];

var STATUS_LABELS = {
  en:{ confirmed:"Confirmed", talks:"In discussion", planned:"Planned" },
  ko:{ confirmed:"확정",      talks:"협의 중",       planned:"계획" }
};

var I18N = {

/* ───────────────────────── ENGLISH ───────────────────────── */
en:{
  nav:{ brand:"Korea AI Summer", program:"Program", visits:"Where You Go", apply:"Apply", sponsors:"Sponsors", about:"About" },

  hero:{
    eyebrow:"First cohort · Summer 2027 · 200 seats",
    title:"Four weeks in Korea, where the chips that train AI are made.",
    lede:"A fully sponsored summer program bringing U.S. undergraduates from all 50 states into Korea's AI and semiconductor industry — the factories, the labs, the people who built them — alongside Korean and Asian students their own age.",
    ctaApply:"Apply for the 2027 cohort", ctaSponsor:"Sponsor a cohort",
    s1k:"Tuition", s1v:"$0", s2k:"Duration", s2v:"4 weeks",
    s3k:"Seats, first cohort", s3v:"200", s4k:"U.S. states", s4v:"50",
    fine:"Travel, housing, meals, and program costs are covered by our sponsors. A refundable completion deposit applies."
  },

  why:{
    kicker:"Why this exists",
    title:"You can read about the supply chain. Or you can stand in it.",
    p1:"Almost every frontier AI model in the world is trained on memory and logic that passed through Korean fabrication plants. Students who will spend their careers building on top of that hardware rarely get to see any of it.",
    p2:"Korea AI Summer exists to close that gap — and to introduce a generation of American engineers to the country, the industry, and the peers they will be working with for the next thirty years.",
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
    w1b:"Arrival, orientation, and a working introduction to Korea's technology economy — how it was built, who built it, and where it is going. Language and culture basics. Teams are formed: U.S., Korean, and Asian students mixed from day one.",
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
      { name:"Semiconductor fabrication site visit", status:"talks", note:"Small-group cleanroom-adjacent tours. Partner to be named once an agreement is signed." },
      { name:"Major manufacturing & technology campus", status:"talks", note:"Full-day visit with engineering sessions." },
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
      "Enrolled undergraduate at a U.S. college or university",
      "Studying computer science, engineering, mathematics, or a related field — or able to show equivalent work",
      "Available for the full four weeks in summer 2027",
      "Holds a passport valid for the duration of travel",
      "No prior travel to Korea required, and no Korean language required",
      "We select across all 50 states — applicants from under-represented states and institutions are actively encouraged"
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
    c2b:"The same access, the same mentors, the same demo day, and a working relationship with peers at U.S. universities. Housing and meals are covered on program days.",
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
      ["Named scholarships","Fortune 500, individual donors","Cash, tax-deductible in the U.S."],
      ["Country programming","National agencies","Cash or in-kind"]
    ],
    c1t:"Why companies fund this",
    c1b:"Two hundred screened undergraduates in AI and computing, from across the United States, spend four weeks inside your industry and present work you can evaluate. Demo day is a hiring room, not a photo opportunity.",
    c2t:"What we report back",
    c2b:"Applicant and selection numbers, participant outcomes, project results, and follow-on recruiting activity — delivered after each cohort. We would rather show you a number than a testimonial.",
    btn:"Request the sponsor brief"
  },

  faq:{
    kicker:"Questions", title:"Frequently asked",
    items:[
      ["Is it really free?","Yes. Airfare, housing, meals, insurance, and program costs are covered by sponsors. Admitted students place a refundable deposit that is returned in full when they complete the program."],
      ["Do I need to speak Korean?","No. The program runs in English. You will pick up some Korean along the way, and your Korean teammates will make sure you do not get lost."],
      ["Do I get academic credit?","Not at present. We are in early conversations with university partners about credit-bearing options for future cohorts. We will not claim credit until an agreement exists."],
      ["What are the exact dates?","Summer 2027, four weeks. Exact dates are confirmed once the campus booking and site visits are locked, and will be published here before applications open."],
      ["Who pays for my visa?","Most U.S. citizens do not require a visa for a stay of this length, but entry requirements change. We provide documentation supporting your application and cover required travel authorization fees."],
      ["What is expected of me during the program?","Full participation for four weeks, and a team project presented on demo day. This is a working program, not a holiday."],
      ["I am a Korean or Asian student. Can I take part?","Yes — as a volunteer teammate. See the volunteer section above. You take part in the full program alongside the visiting cohort."],
      ["How many people are admitted?","The first cohort is 200. We are deliberately starting smaller than our long-term target so that the first cohort is run properly."]
    ]
  },

  about:{
    kicker:"Who runs this", title:"About the organizer",
    p1:"Korea AI Summer is a program of Plato School SF Foundation, a non-profit foundation established in San Francisco, California in 2023, with an office in Seoul.",
    p2:"The foundation's work is in international education between the United States and Asia. This program is its summer initiative for U.S. undergraduates.",
    advT:"Advisory board:",
    advB:"Being formed. Members will be listed here once they have confirmed. We do not list names before they have agreed to appear."
  },

  foot:{
    brand:"Korea AI Summer",
    legal:"A program of Plato School SF Foundation, a non-profit foundation established in San Francisco, CA (2023). Seoul office · Republic of Korea.",
    note:"First cohort: summer 2027. Program details, dates, and partners are provisional until confirmed and will be updated on this page.",
    updated:"Last updated"
  }
},

/* ───────────────────────── 한국어 ───────────────────────── */
ko:{
  nav:{ brand:"코리아 AI 서머", program:"프로그램", visits:"방문지", apply:"지원", sponsors:"후원", about:"소개" },

  hero:{
    eyebrow:"1기 · 2027년 여름 · 정원 200명",
    title:"AI를 학습시키는 반도체가 만들어지는 곳에서, 4주간.",
    lede:"미국 50개 주의 대학생을 한국의 AI·반도체 산업 현장으로 초청하는 전액 후원 여름 프로그램입니다. 공장과 연구실, 그리고 그것을 만든 사람들을 — 같은 또래의 한국·아시아 학생들과 함께 만납니다.",
    ctaApply:"2027년 1기 지원하기", ctaSponsor:"후원 문의",
    s1k:"참가비", s1v:"무료", s2k:"기간", s2v:"4주",
    s3k:"1기 정원", s3v:"200명", s4k:"미국 주(州)", s4v:"50",
    fine:"항공·숙박·식사·프로그램 비용은 후원사가 부담합니다. 완주 시 전액 환급되는 보증금이 있습니다."
  },

  why:{
    kicker:"왜 만드나",
    title:"공급망은 읽을 수 있습니다. 그 안에 서 보는 것은 다릅니다.",
    p1:"세계의 거의 모든 최전선 AI 모델은 한국 공장을 거친 메모리와 로직 위에서 학습됩니다. 정작 그 하드웨어 위에 평생을 쌓아 올릴 학생들은 그 현장을 볼 기회가 거의 없습니다.",
    p2:"코리아 AI 서머는 그 간극을 좁히기 위해 있습니다. 그리고 미국의 다음 세대 엔지니어에게 이 나라와 산업, 앞으로 30년을 함께 일하게 될 또래를 소개하기 위해 있습니다.",
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
    w1b:"입국과 오리엔테이션, 그리고 한국 기술 경제에 대한 실무적 입문 — 어떻게 만들어졌고, 누가 만들었고, 어디로 가는가. 언어와 문화 기초. 첫날부터 미국·한국·아시아 학생이 섞인 팀을 구성합니다.",
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
      { name:"대형 제조·기술 캠퍼스", status:"talks", note:"엔지니어링 세션이 포함된 종일 방문." },
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
      "미국 대학에 재학 중인 학부생",
      "컴퓨터공학·공학·수학 또는 관련 전공, 혹은 그에 준하는 결과물을 보여줄 수 있는 분",
      "2027년 여름 4주 전 일정에 참여 가능한 분",
      "여행 기간 내내 유효한 여권 소지자",
      "한국 방문 경험이나 한국어 능력은 필요하지 않습니다",
      "50개 주 전체에서 선발합니다 — 지원자가 적은 주와 학교의 지원을 특히 환영합니다"
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
    c2b:"같은 현장, 같은 멘토, 같은 데모데이, 그리고 미국 대학 또래와의 실질적인 관계. 프로그램 기간의 숙박과 식사를 지원합니다.",
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
      ["지정 장학금","Fortune 500, 개인 기부자","현금, 미국 세금 공제 대상"],
      ["국가 단위 프로그램","정부·공공기관","현금 또는 현물"]
    ],
    c1t:"기업이 후원하는 이유",
    c1b:"미국 전역에서 선발된 AI·컴퓨팅 전공 학부생 200명이 귀사의 산업 안에서 4주를 보내고, 평가할 수 있는 결과물을 발표합니다. 데모데이는 사진 찍는 자리가 아니라 채용의 자리입니다.",
    c2t:"무엇을 보고드리나",
    c2b:"지원자 수와 선발 경쟁률, 참가자 성과, 프로젝트 결과, 이후 채용 연계 실적을 기수마다 정리해 드립니다. 소감문보다 숫자를 보여드리는 편을 택합니다.",
    btn:"후원 제안서 요청"
  },

  faq:{
    kicker:"질문", title:"자주 묻는 질문",
    items:[
      ["정말 무료인가요?","네. 항공·숙박·식사·보험·프로그램 비용을 후원사가 부담합니다. 합격자는 환급형 보증금을 예치하고, 완주하면 전액 돌려받습니다."],
      ["한국어를 해야 하나요?","아닙니다. 프로그램은 영어로 진행됩니다. 지내다 보면 한국어를 조금 배우게 되고, 한국인 팀원들이 길을 잃지 않도록 챙겨 줍니다."],
      ["학점을 인정받나요?","현재는 아닙니다. 향후 기수의 학점 인정 방안을 두고 대학 파트너들과 초기 논의 중입니다. 협약이 성립하기 전까지 학점을 내세우지 않습니다."],
      ["정확한 날짜는 언제인가요?","2027년 여름, 4주입니다. 캠퍼스 대관과 현장 방문 일정이 확정되면 정확한 날짜를 정하고, 지원 접수 시작 전에 이 페이지에 공개합니다."],
      ["비자 비용은 누가 내나요?","이 정도 체류 기간이면 대부분의 미국 시민은 비자가 필요하지 않지만 입국 요건은 바뀝니다. 신청에 필요한 서류를 제공하고 필수 여행허가 수수료를 부담합니다."],
      ["참가하면 무엇을 해야 하나요?","4주 전 일정 참여와, 데모데이에서 발표하는 팀 프로젝트입니다. 휴가가 아니라 일하는 프로그램입니다."],
      ["한국·아시아 학생인데 참여할 수 있나요?","네 — 자원봉사 팀원으로 가능합니다. 위 자원봉사 섹션을 보세요. 방문 기수와 나란히 전 일정에 참여합니다."],
      ["몇 명을 뽑나요?","1기는 200명입니다. 첫 기수를 제대로 치르기 위해 장기 목표보다 의도적으로 작게 시작합니다."]
    ]
  },

  about:{
    kicker:"주최", title:"주최 기관 소개",
    p1:"코리아 AI 서머는 2023년 미국 캘리포니아주 샌프란시스코에 설립된 비영리 재단 Plato School SF Foundation 의 프로그램이며, 서울에 사무소를 두고 있습니다.",
    p2:"재단은 미국과 아시아를 잇는 국제 교육을 해 왔습니다. 이 프로그램은 미국 학부생을 위한 재단의 여름 사업입니다.",
    advT:"자문위원:",
    advB:"구성 중입니다. 확정되는 대로 이 자리에 표기합니다. 본인의 동의를 받기 전에는 성함을 올리지 않습니다."
  },

  foot:{
    brand:"코리아 AI 서머",
    legal:"2023년 미국 캘리포니아주 샌프란시스코에 설립된 비영리 재단 Plato School SF Foundation 의 프로그램입니다. 서울 사무소 · 대한민국.",
    note:"1기는 2027년 여름입니다. 프로그램 세부 내용·날짜·파트너는 확정 전까지 잠정이며 이 페이지에서 갱신됩니다.",
    updated:"마지막 갱신"
  }
}

};
