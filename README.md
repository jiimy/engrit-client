# engrit-clent 

## 로컬 실행
```node
npm run dev
```

## 히스토리
백엔드 인원구성
- 노드 기반의 10년차
- 스프링 기반의 신입

백엔드는 노드 기반으로 되어 있고, 백에서 api 배포등 기능이 되지 않아 한달간 진행 후 무산됨. 
추후 프론트에서만 작업이 진행됨. 
(백엔드와 별도로 작업된것이라 백엔드가 필요없음. next server action으로 api 처리됨)

## 프론트 작업 히스토리
1. 유튜브 정보 추출
- 유저프로필, 자막등 유튜브 전반적인 정보들
- npm youtube-transcript 를 통해서 자막을 가져올수 있으나 부분적으로 가져오기 불가능하여 한번에 가져옴. (app/api/youtube)
┗ 추후 부분적으로 가져오길 원한다면 다른 npm을 찾아봐야 함.

2. 번역 
- googleapis를 통해서 원본 텍스트와 번역할 언어를 파라미터로 받고 번역. (util/TranslateWord.tsx)
- 번역을 제공해주는 공식 api등이 있지만, url만 있으면 사용할수 있는 방법이 있어 사용함.

### 해결해야할 문제
- 대사가 없이 음악만 있는 경우 스크립트에서 Music 으로 표기되는데 이런 구간이 많은 영상일 경우에 대한 기획적인 대처 
- 자막 데이터 정보중 defaultLanguage 부분이 en 이라면 en로 번역 api에 넘기면되지만, defaultLanguage가 없고, 다른 언어일 경우 언어체크 를 해야하고, 
- 스크립트 부분에 \n같은 특수문자가 있는 경우도 체크 해야 함. 
- / 홈에서 위아래 스크롤시 헤더가 숨겨지고 나오는데, 맨 아래 스크롤일때 헤더가 흔들거리는 현상.


## 참고
vercel에서는 organization 유료여서 cloudflare 로 진행. 



cloudflare 환경에서 기본 배포환경인 out 폴더 사용할때 middleware 사용시 25MB 용량 문제가 있어 .next 폴더를 사용하는 동적 배포로 변경하였고, 변경시 cloudfalse 환경에서 동적 페이지에서 아래 코드를 첨부해야 배포가 가능함.
```node
export const runtime = 'edge';
```
