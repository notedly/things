# gulp default project

## npm package

### sprite image

#### 이미지 저장

images > sprite 폴더에 카테고리별로 폴더 생성
반응형(x2) 이미지 사용 시 원본 이미지와 사이즈가 2배 큰 이미지 필요

이미지 파일명은 아래처럼 합니다.

원본 이미지 : sample.png
레티나 이미지 : sample@2x.png

'@2x'를 꼭 붙여줘야 합니다.

#### scss 사용 방법


`

// 생성된 스프라이트 scss 파일을 사용할 파일의 상단에 import 되있어야 합니다.
@import "./sprite/_default-sprite";

// 레티나 이미지 사용시 아래 mixin 적용해야합니다.
@include retina-sprites($retina-groups);

.header{
	h1{

		// 원본 크기 이미지 사용
		@include sprite( $icon-btn_mob_menu );
	}
}

@include mob{
	.header{
		h1{

			// 레티나 이미지 사용
			// 레티나 이미지명은 그룹 명으로 작성합니다.(스프라이트 scss파일에서 확인할 수 있습니다.)
			@include retina-sprite( $icon-btn-mob-menu-group );
		}
}

`
