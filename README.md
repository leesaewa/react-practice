# react movie ratings site
- 리액트 영화 평점 사이트
- 보고 싶은 영화를 클릭하면 비슷한 장르의 영화를 추천함(SUGGEST THIS MOVIE)
- React映画評点サイト
- 映画をクリックすると似ているジャンルの映画をおすすめする(SUGGEST THIS MOVIE)


## Preview
### Main
<img src="https://user-images.githubusercontent.com/97646713/209561501-0891cfd4-3b9e-4707-a79d-e9b0667a4e21.png">

### Detail Page
<img src="https://user-images.githubusercontent.com/97646713/209561505-d05a1d4e-7151-4e49-a69d-bc94ee15fbf6.png">

## using tool

- reactJS
- SCSS
- API : <a href="https://yts.mx/api">YTS</a>

##### 문제점(221117~)

- 한장씩밖에 불러오지 못해서 2단 정렬로 하면 빈 공간이 슬라이더 됨. (`carousell`이 필요함)
- 그로인해 반응형 불가. 모바일에서만 제대로 구현됨.
- 라이브러리 사용하면 쉽지만 공부를 위해서 사용하지 않을 예정... (최후의 수단)

## Log

#### 221117

- 슬라이더... 구현은 했으나, 문제점이 많음.

#### 221116

- 상세 페이지에 들어가면 해당 영화와 비슷한 `영화 추천 제안(Suggestion)`을 추가함
- API 안 불러와져서 고생했음. 다른 컴포넌트에 제안만 나누려고 했으나, 그건 안 되는가봄. 그래서 `Detail.js`에 `제안 API`를 추가했더니 됨.
  - 출력은 됐지만 왜 그렇게 되는지 구조를 파악하고 공부해야 함!

#### 221115

- `main page`에 장르별로 추천 영화 출력되도록 함.
- 슬라이드 붙여야하는데 출력이 안돼서 방치...



