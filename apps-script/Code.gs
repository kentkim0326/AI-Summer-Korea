/**
 * AI Summer Korea — 접수 폼 수신 스크립트
 *
 * 사이트의 폼이 이 스크립트로 POST 하고, 스크립트는 같은 스프레드시트의
 * "Responses" 시트에 한 줄씩 붙입니다. 서버도, 서비스 계정도, 유료 서비스도
 * 필요 없습니다.
 *
 * ── 배포 방법 ─────────────────────────────────────────────
 * 1. 응답을 받을 구글 스프레드시트를 새로 만듭니다.
 *    (예산 모델과 같은 드라이브에 두면 관리가 편합니다.)
 * 2. 그 시트에서  확장 프로그램 → Apps Script  를 엽니다.
 * 3. 기본 코드를 지우고 이 파일 전체를 붙여넣습니다.
 * 4. 저장 → 배포 → 새 배포 → 유형 "웹 앱"
 *      설명       : ASK form endpoint
 *      실행 계정  : 나
 *      액세스 권한: 모든 사용자          ← 반드시 이것. "링크가 있는 모든 사용자" 아님
 * 5. 배포를 누르고 권한을 승인합니다.
 *    "Google에서 확인하지 않은 앱" 경고가 뜨면  고급 → 이동  을 누릅니다.
 *    (본인이 만든 스크립트라 정상입니다.)
 * 6. 나온 웹 앱 URL 을 복사합니다. 형태:
 *      https://script.google.com/macros/s/AKfycb....../exec
 *    이 URL 을 알려주시면 사이트에 연결합니다.
 *
 * ── 코드를 고친 뒤에는 ────────────────────────────────────
 * 배포 → 배포 관리 → 연필 아이콘 → 버전 "새 버전" → 배포.
 * 새 배포를 만들면 URL 이 바뀌므로, 기존 배포를 수정하세요.
 */

/** 응답이 쌓일 시트 이름. 없으면 자동으로 만듭니다. */
var SHEET_NAME = 'Responses';

/** 사이트 주소. 여기서 온 요청만 받습니다. 도메인이 바뀌면 추가하세요. */
var ALLOWED_ORIGINS = [
  'https://korea-ai-summer.vercel.app',
  'http://localhost:4399'
];

var HEADERS = [
  'Received (KST)', 'Type', 'Name', 'Email',
  'Country', 'Affiliation', 'Message', 'Language', 'Source'
];

function doPost(e) {
  try {
    /* 폼은 text/plain 으로 보냅니다. CORS 프리플라이트를 피하기 위해서인데,
       Apps Script 웹 앱은 OPTIONS 요청에 응답하지 못하기 때문입니다. */
    var raw = (e && e.postData && e.postData.contents) || '{}';
    var d = JSON.parse(raw);

    /* 봇 잡이. 사람 눈에 안 보이는 필드가 채워져 있으면 버립니다.
       조용히 성공으로 답해야 봇이 재시도하지 않습니다. */
    if (d.website) return json({ ok: true });

    var required = ['type', 'name', 'email', 'country', 'affiliation'];
    for (var i = 0; i < required.length; i++) {
      if (!trimmed(d[required[i]])) {
        return json({ ok: false, error: 'missing:' + required[i] });
      }
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(trimmed(d.email))) {
      return json({ ok: false, error: 'invalid_email' });
    }

    var sheet = getSheet();
    sheet.appendRow([
      Utilities.formatDate(new Date(), 'Asia/Seoul', 'yyyy-MM-dd HH:mm:ss'),
      cap(d.type, 40),
      cap(d.name, 120),
      cap(d.email, 200),
      cap(d.country, 80),
      cap(d.affiliation, 200),
      cap(d.message, 4000),
      cap(d.lang, 12),
      cap(d.origin, 200)
    ]);

    return json({ ok: true });
  } catch (err) {
    /* 실패해도 내부 사정을 밖으로 흘리지 않습니다. */
    console.error(err);
    return json({ ok: false, error: 'server' });
  }
}

/** 브라우저에서 URL 을 직접 열었을 때 살아있는지 확인용. */
function doGet() {
  return json({ ok: true, service: 'ASK form endpoint' });
}

function getSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function trimmed(v) {
  return typeof v === 'string' ? v.trim() : '';
}

/** 한 칸에 들어가는 길이를 제한합니다. 시트 셀 상한은 50,000자입니다. */
function cap(v, n) {
  var s = trimmed(v);
  return s.length > n ? s.slice(0, n) : s;
}

function json(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
