export function getWeeksSince(dateString: string) {
  // 주어진 날짜 문자열을 Date 객체로 변환
  const givenDate = new Date(dateString);

  // 현재 날짜
  const currentDate = new Date();

  // 두 날짜 간의 차이를 밀리초 단위로 계산
  const differenceInTime = currentDate.getTime() - givenDate.getTime();

  // 밀리초를 주 단위로 변환
  const differenceInWeeks = Math.floor(
    differenceInTime / (1000 * 3600 * 24 * 7)
  );

  return differenceInWeeks;
}

export function calculateAge(birthDateString: string) {
  // 생년월일을 Date 객체로 변환
  const birthDate = new Date(birthDateString);

  // 현재 날짜
  const currentDate = new Date();

  // 나이 계산
  let age = currentDate.getFullYear() - birthDate.getFullYear();
  const monthDifference = currentDate.getMonth() - birthDate.getMonth();

  // 생일이 아직 지나지 않았다면 나이에서 1을 뺍니다
  if (
    monthDifference < 0 ||
    (monthDifference === 0 && currentDate.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
}
