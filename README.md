# MOYODANG 모임 구인 사이트
MOYODANG은 소모임 인원을 구하는 웹사이트입니다.
유저가 카카오 소셜 로그인을 통해 로그인하여 모임을 생섣하거나 참가할 수 있고 모임원 모집이 마감되면 투표를 통해 모임 장소를 설정하고 카카오 지도 API를 이용하여 지도에 마커를 생성하도록 개발하였습니다.

# 주요기능
- 카카오 소셜 로그인
- 모임 생성/수정/삭제/참가/조회/맴버가 소속된 그룹 조회
- 투표 생성/수정/삭제/조회/참가/투표 항목 추가
- 카테고리 생성/수정/삭제/조회
- 카카오 지도 API
- 관리자 페이지지

# Git 협업 가이드라인

#### 아침에 첫 작업 시작 전:
```bash
git fetch origin  # 원격 저장소 변경사항 확인
git checkout feature/vote-1  # 본인의 feature 브랜치로 이동
git pull  # 최신 변경사항 가져오기
```

## 브랜치명 규칙

### **feature/{feature-name}-{issue-number}**

- ex) 상품 관련 이슈 3번 → feature/item-3

## 개발 시작하기

새로운 기능 개발을 시작하기 전에 다음 단계를 따릅니다:

```bash
# 원격 저장소의 최신 변경사항을 가져옵니다
git fetch origin

# main 브랜치로 이동합니다
git checkout main

```

## 작업 중 최신 변경사항 동기화하기

다른 팀원의 변경사항을 받아올 때는 다음 두 가지 방법 중 하나를 선택합니다:

### rebase 방식 (권장)

```bash
# 원격의 변경사항을 가져옵니다
git fetch origin main

# 현재 브랜치의 커밋들을 main 브랜치 위로 재배치합니다
git rebase origin/main

# 충돌이 발생한 경우:
# 1. 충돌을 해결합니다
# 2. 해결된 파일을 스테이징합니다
git add .

# 3. rebase를 계속 진행합니다
git rebase --continue

# 4. 만약 rebase를 취소하고 싶다면:
git rebase --abort
```

## 작업 내용 Push하기

```bash
# 변경사항을 스테이징합니다
git add .

# 커밋합니다 (커밋 메시지 컨벤션을 따릅니다)
git commit -m "feat: 투표 기능 구현"

# 원격 저장소에 푸시합니다
git push origin feature/vote-1

```

## 커밋 메시지 컨벤션

커밋 메시지는 다음 형식을 따릅니다:

```
type: 제목

본문 (선택사항)

footer (선택사항)
```

- `feat:`: 기능 개발
- `test:`: 테스트 코드
- `fix:`: 버그 수정
- `refactor:*`: 코드 리팩토링
- `docs:`: 문서 작성 및 수정

#### 예시:
```
feat: 회원가입 API 구현

- 이메일 중복 확인 로직 추가
- 비밀번호 암호화 처리
- 회원가입 성공시 환영 이메일 발송

```

## Pull Request 생성하기

1. GitHub에서 Pull Request를 생성합니다.
2. PR 제목은 커밋 메시지 컨벤션을 따릅니다.
3. PR 본문에는 다음 내용을 포함합니다:
   - 작업 내용 요약
   - 주요 변경사항
   - 테스트 방법
   - 리뷰어가 중점적으로 봐야 할 부분
4. 팀원들의 코드 리뷰를 기다립니다.
5. 승인을 받은 후 develop 브랜치에 머지합니다.

## 문제 해결하기

### 1. 잘못된 브랜치에서 작업했을 때
```bash
# 현재 변경사항을 임시저장합니다
git stash

# 올바른 브랜치로 이동합니다
git checkout feature/correct-branch

# 임시저장한 변경사항을 적용합니다
git stash pop
```

### 2. 직전 커밋 메시지 수정하기
```bash
git commit --amend -m "feat: 올바른 커밋 메시지"
```

### 3. 이전 커밋으로 되돌리기
```bash
# 특정 커밋으로 되돌리고 새로운 커밋 생성
git revert <commit-hash>

# 또는 현재 브랜치를 특정 커밋으로 강제 이동 (주의: 이력이 삭제됨)
git reset --hard <commit-hash>
```

## IDE에서 Git 사용하기 (IntelliJ IDEA)

IntelliJ IDEA에서는 다음 기능들을 활용할 수 있습니다:

1. Git 툴 윈도우 (Alt + 9)
   - 브랜치 관리
   - 커밋 이력 확인
   - 변경사항 스테이징

2. Commit 툴 윈도우 (Ctrl + K)
   - 변경사항 확인
   - 커밋 메시지 작성
   - 코드 리포맷 및 린트 검사

3. 충돌 해결
   - Merge 충돌 발생 시 시각적 도구 제공
   - 좌측/우측/병합 결과를 쉽게 비교 가능
   - 
#PPT
![4](https://github.com/user-attachments/assets/f1de8308-12e3-42d1-bb92-723566959612)
![5](https://github.com/user-attachments/assets/8721b7fe-441b-45d1-9c93-c5740f941c75)
![7](https://github.com/user-attachments/assets/11d15900-d594-4ed2-96b3-ea43bfbdecaf)
![8](https://github.com/user-attachments/assets/5ea3add5-8bdd-4b94-9bc0-a0b93d007af1)
![9](https://github.com/user-attachments/assets/c6c7d5be-04cc-4226-93b1-68c191f34e18)
![10](https://github.com/user-attachments/assets/3999fc8a-2cbc-4301-ad93-01c409b0dc6c)
![12](https://github.com/user-attachments/assets/1cc0ea1d-2eef-438e-a56a-13f178a675ae)
![13](https://github.com/user-attachments/assets/5fbeea2e-64a5-45b0-9aa9-669462a900d0)
![14](https://github.com/user-attachments/assets/e8d49c51-836f-40c1-a465-38aaee26813f)
![15](https://github.com/user-attachments/assets/f4201498-8f15-4f27-888f-58c544bf82bf)

https://github.com/user-attachments/assets/7799b38f-9c4f-4763-86cc-141002e8649c


