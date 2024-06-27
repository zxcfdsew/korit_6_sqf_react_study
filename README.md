## 프로젝트 생성
- npx create-react-app 프로젝트명

## 라이브러리 설치
- 라우터 > npm i `react-router-dom`
- Emotion > npm i `@emotion/react`
- Recoid > npm i `recoil`
- React icons > npm i `react-icons`
- Sweetalert2 > npm i `sweetalert2`

## JSX 자동완성
1. Ctrl + Shift + p
2. `user settings.json(vscode 사용자 설정)` 선택
3. 아래 내용 추가
    ```json
        "emmet.syntaxProfiles": {
            "javascript": "jsx" 
        },
        "emmet.includeLanguages": {
            "javascript": "html"
        }
    ```

## 확장기능(Extension)
- reactjs code snippets
- vscode-color-picker
- vscode-styled-components

## 터미널 선택
1. Ctrl + Shift + p
2. `terminal: select Default Profile` 선택
3. `gitBash` 선택

## 폴더 구조
- components
- pages
- constants
- styles
- hooks
- configs
- utils
- atoms (recoil 사용하는 경우)
- assets : 외부에서 불러올 파일들 저장하는 곳 (ex.이미지파일)
- apis(services)
- store

## 주요 Hook 함수
- useState(`기본값`)
- useEffect(`() => {}`, `[]`)
- useRef(`기본값`)
- useMemo(`() => 리턴 필수`, `[]`)
- useCallback(`() => {}`, `[]`)
- useRecoidState(`atom`)
- useNavigate()
- useLocation()
- useParams()

## 명명규칙
- Component 이름은 대문자로 시작
- 하나의 Component 폴더에는 하나의 `Component.jsx` `style.js` 파일로 구성
- constants 폴더에 들어가는 상수들은 대문자와 스네이크 표기법으로 작성
- 이벤트 함수명은 `handle`로 시작해서 `이벤트명`으로 끝낸다