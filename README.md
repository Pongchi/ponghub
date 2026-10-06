# 퐁허브 (PongHub)

pongchi.kr 마인크래프트 서버 전용 런처입니다. 로그인하면 서버에 맞는 모드·한글패치·설정을 자동으로 받아 맞추고,
팩이 바뀌면 실행할 때마다 바뀐 파일만 갱신합니다.

- 설치: [Releases](https://github.com/Pongchi/ponghub/releases) 에서 `PongHub-setup-x.y.z.exe` 를 받아 실행
- 배포 목록: `https://mc.pongchi.kr/distro/distribution.json` (서버 관리 패널이 생성)

## 개발

```bash
npm ci
npm start          # 개발 실행
npm run dist:win   # Windows 설치 파일 (Windows 에서)
```

`v1.2.3` 형식의 태그를 올리면 GitHub Actions 가 Windows 설치 파일을 빌드해 릴리스에 올립니다.
`package.json` 의 `version` 을 태그와 같은 값으로 맞춰야 합니다.

## 원본과 다른 점

[Helios Launcher](https://github.com/dscalzi/HeliosLauncher) (MIT, Daniel Scalzi) 를 바탕으로 합니다.

- 이름·아이콘·배포 주소 변경, 한국어 문구(`app/assets/lang/ko_KR.toml`)
- 배포 목록이 `mods/` 폴더에 직접 넣는 모드 중 더 이상 목록에 없는 jar 를 실행 전에 삭제
- Windows 전용 빌드
