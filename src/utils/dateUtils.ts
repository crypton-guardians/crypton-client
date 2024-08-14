/**
 * 날짜 문자열을 yy.mm.dd 형식으로 변환하는 함수
 * @param dateStr - 변환할 날짜 문자열 (ISO 형식)
 * @returns 변환된 날짜 문자열 (yy.mm.dd 형식)
 */
export function formatDateToYYMMDD(dateStr: string): string {
  const date = new Date(dateStr);

  // 연도에서 뒤 두 자리만 추출
  const year = date.getFullYear().toString().slice(-2);
  // 월과 일은 0을 붙여 2자리 숫자로 표현
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  // yy.mm.dd 형식으로 반환
  return `${year}.${month}.${day}`;
}
