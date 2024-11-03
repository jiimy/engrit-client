# engrit-clent 

## 로컬 실행
```node
npm run dev
```

## 참고
vercel에서는 organization 유료여서 cloudflare 로 진행. 



cloudflare 환경에서 기본 배포환경인 out 폴더 사용할때 middleware 사용시 25MB 용량 문제가 있어 .next 폴더를 사용하는 동적 배포로 변경하였고, 변경시 cloudfalse 환경에서 동적 페이지에서 아래 코드를 첨부해야 배포가 가능함.
```node
export const runtime = 'edge';
```
