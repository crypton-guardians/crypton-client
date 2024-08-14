export function getUserIdFromSession(): number | null {
  // 세션에서 사용자 ID를 가져오는 로직
  // 예: localStorage, sessionStorage, 또는 상태 관리 라이브러리(Redux, Recoil 등) 사용
  const userId = sessionStorage.getItem('userId');
  return userId ? parseInt(userId, 10) : null;
}
