let rdm = ( min = 0 , max = 1 ) =>{
	return min + ( max - min ) * Math.random() ;
}	// end of rdm

class MakeStyle {
	constructor(){
		console.log( 'MakeStyle in' ) ;
	}
}	// end of MakeStyle

class Particle{
	constructor( ...args ){
		let idx = args[0] , props = args[1] ;
		Object.assign( this , { ...props, idx : idx } ) ;

		// 눈송이 image
		this.img = new Image( 64, 64 ) ;
		this.img.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAABLbSURBVHja7F1ntBbFGb4XAeldECIdAQUpFlRABIEEQY2iVNFYsJfEYENDQLGhUWKLgNhOsFEExYAiJaCxIVUQUUGlXLoIXO7lUs6TH/PuYe8y7+zM7OxXcN9z5s/37cxOeXbm7ZMDIOc3VioC2IwjaRP995uaj5wEAAkAEgAkAEgAkAAgAUACgAQACQCyvdRIAQBqJADIzNIQwHoAT8QIgFEANgBolAAgs8qxABb6FvMdAFUdAqAKgCm+ZxcBKJMAIHPKa5IFXQmgtQMAtAKwQvL8vxMApL+UADAMPO0G0DcCAPoC2KVofzj1IQFAmko5AEsRTg/66lRSAKCS77kHNdpdTn1IAJDGUhXARI3FmuL7wrdI/t9M/1UInPccTQZQLTkCMqcM11i0JQDOArBW8t9aAGfTM2E0IpECMrNcCmBnyOIVAMiX/J5P/6noVwCXJXqAzC4t6Wx2TV8DOCXRBKZPfdvD4PlKACY5XPxJACobvL9HtqiVswUAL9BCjAZQ0jFf4PK8PwbAU1RvbAIAN2VAYEEWAGjimC9wcd43BjA/0MblCQCilWakzAnSVgC9Y+QLllMd3fYvYUTLPQBOSgCgV8oCOB5AWzpDbyB1rooeBZCr2X5lTb7A5LzPpT6oaCWAPiRiNiA9QwIAydn5cYjalaOPANQ3eNcDAPZL2tlP/+m2U4/ebUIFAPIAfA6gZgKA4kWmgCkCMFdjYjcC6GXwLk4VrFu/F5mFw2gigO3M0VD5aAdAObLRdwIwGMBNIc9PlkzUIQAdaQvNd8SxV1AAQGd71pEs8gEMBFAHwD5GI6l6R3cCWfO4xck4Gq1CW+M6AIWBSVEZTkYzk3kD/d9G0/DzPk28a4eQOtR2GC0jPiYHQFfmmf+EzKE3zgPUry9oN6mbDQAozXDERSQqcfX+qmD0vGfKA3hFYxF+oq/IFQC6UZth9GpgF7mWeW5MCDPMHS+NsuUImMMMoIuiTh+mzgTJszcFdhcwx8dQBwC4l9pS0T4AN0vqjmCev08xD43oYwnSGgClsgUALzIDv1ZRpz1TZx7zfDsNMdFzDzvOAgDHUd0w+gbAmUwfud1qkGIeuhjOQ0YC4B6N7VymSZMhf5XC66YygDc0Ful7YkY95pTzB/B4lE5UJ4zeJJ6HG9Nspt65ijqDmTrj0wmASvQ1XGigfuWULCrmTLYwOzQcL/7CyPZBOf82en695P919N+tmm3doaEkkvkSHiANJ1fvMead92jO/e8AjAzsepEBMNLXkbdCBpAD4DRmEAtD6snUtQdJHArr4zkAvtP4at+l7V52BLyruZucoykNbZPU3xaya3DeSGGq75IAbvd9RKNcAaCxxFFiNzE4nNxci9Hhh8nas5jBd9YEag1Ndy5bmqL7ZQFoSl97kFaEqK8XM+8+VVHnfBR3iwcxyU1dAGCqYkK+BdAPcm/db5ntT9WplyyYJo4HOeRw4Q+RNGDSh3OZtmaHHLVbGcukDHjNAbwdsttFAkA/zQmaQdu+ztfcTfE+TmwaasHgdNWU3XV0Ct0s3j+Iae9lRZ2T6ciTGZRyA0AZSSrlMBoQBQDdNLVvHmM0Godj554N0ezJCqc4+Zcll1sbwPQIi/8+tWHz7vuYNh8I2cq5D8x75goAP2j2v5AY5EhHQGkAdzJGDRltANCfuGQZqWL3fq9YiLg9hoM0POI7xzDtXqOocxtT52GICKXZhvxKSzjUA9RTnNFgGD5OMcO9oxVzdi9yIPP2JKuhjmWxp4P3zWDa766o84yC1yrQnPclBuK6lSKoE4Rbli0tVrRdi/EJ2AA3ETj1FLwJ6L96MZq3D4V8lTMizOs2AENox06JJvA6RqESRltRPATLX0qRzjtIBQ4tYeUV8nl5R++owOyAv4LPL5CrqdqW0VgAJ6RDFVwDwgu2yKCzB6H24PmUqXeGo8UpxyxOHtzF+TVk/AC+A+/VXIYAYkJzAXTIBFtAG7JX79Xs+HTwzpKc394fHfU1FSlizmbGMF9h0xhtsPArAVyZacagpgC+NBhEPsmywePgKeb5W7MIAJxp+3XJs1cyx57K+tgcGWINrA7gKggPoP2W59f3KO4/z4mPo7IIAEOYMTzme6YD9PwdZUfoRgjnk67pAkAnYjw2OVS3zoKIveuqML1mCwCeZsbQj/imsQ7nbRmpqRvFDYCGpBBaFKOxpQDAh4wRZUEWAWAqIwJOJrNzHLSXdCy9IdzKnAGgC2mV8i07tgYi28YQxtChS6thFheYTgB8EXExx0J4Vf1iWf8HOm5OcQGAP1t0IJ/QfkkAjXUUKtIw2kk8R6YDoAyAny3HOAfCNc7v3HGrQjQOo3+4AEAVCK8cHfqKjokGIW12gPBxM2V+6mUBAKoYiMP+L/aKkHbPIgPbBs02D5B10QkPMD5E5z8Gh33uTMpVhiLQE4ieny9uAAwxGM8eAA8pNKMcwAYB+IAxHft3E2dMYEfJ1zgLwJ8cbMtlIQIldOlrOloyDQDn4MjwcBV9TFt8lLlrQbqU1ZL2B7kEgOfguJZe2BJuVLJ9AbxncMT4aRpZD9MNgPqGVlK/1fFFAOc5mMvSZAF8m3wA9ujuKiYvaeDIWNIEwiniB0SnQuJ2q6QBAMdCuJ7tcDCOzyGCXVwwuSfCwIMplZGoPUjPXwD39CPxE6kCwMWkgHFNm8gm0DZV6xL3C2qTandJBLHoLUPrWPsYAdAaeq7jHs2OoBOYARFfcWw2AqA9gHGW2+MvdKZ2RHEHz88M2hgDPkLYBgDVSALZZ6C0Goji3khTDOoH27ofZkkw0gKAyrQNz7dE/DISoTjOuASAWwzsD1tIiVUyIgAGGyh2wuIlmkH499l4K++GyFDeOdMA0BLA45Y67kLSGPaEfq6fWqQQOaj5joUonmNQFwDnkqimS29AIxDD14crAPzX8mP5FMK7ulq6AFCKGKHpjOFG1z5wYoTOnwmzHD1v4nB+gjxGLMuBcD17xaDdLyC8maMcly9aHpcbATwJ+b0IsQCgBJkeV0Uw+faH2xTrgwxEyl8hIpQ5ADwAfff3PDqSXN0XUIeOQJs0t4dImXaZaX9MO5lrYZjYDGEfPy1GbrYSna17ET8dgHDfjivLVwkAF5BJ2dTJ5huIjGuxHgEXGCo3UnnLVgvEGxw6E8DpKRzPSaTo0uWvBqeCBygJPgx7F3GqXVI4SbJyEfRD2nRoFeRBsKkqlUjCWhAi9VREipjAYAaQlcQb1EvzwgdVtXdFVNXugriTqHwGjasD6Ul2Bvr6ZCqlgFqk0p0FvWQJ6Sw1DcVGz9r5ggNrXZylFoDrIVz0imwlKtuXNyat1iI6d2pm8ETVBvC8BQCehX4yiHSV9uQXUAiRZzllAHhcor4dj4hRKo5LOYgQ7Z0RjoDtdIyUzqBxnQDgbvKL8NO9qQJAhRB17HxyFKmUxkm6DPZxdjJaAoOI25hKJ4hYAC587HtYOM3adORqzUn7GcAjSG2+/FOhl87VliZDw8/OYalG57yu7uVCpEATuMJw0oog/NV7Ib5bNmuQHX0/4qd8mPvxmZa2NJ48C8eS3LgB0IfUjjZJmJZB5ASu7WiicknZpOspuwPCpS2PUe2Ogv6dBcGQNhcXZvQhps6GVhPPUwIpYAK9iGAblHoLMQ4iitb2/V0N1dKv+WzqKmNQE6gzb8nsG+0ijKMxRDoaGxe5g/Qx9rZ1HHGB3OoAbqTtx4bmkUFH9yqVJqRt1KX/BTSTuubgnhBxDiZio4k4/AeIkHobF7kNEEEfraKun+uzqwtECPQei0H9SGcrZ1MvT1o53S16PTFQUTyCSkG4tG0zsBDerDiHa0Nk7Vps+bF8DJFkqoqrNYuLiWkA4G/QS90apH3EbZ+P4vkKdU3QRaQWrQF3LmEn0JGlS5+heOi25yK33WI+PB1LxzjWKm4xpgzJ5DMtEf851EmdgjQd4R61UZxCO8LMi+dNw/77aSkxzHXiXKNUKjLakl+Ay5wCHq2A/j2CLtzCr4GbLKRBKvTtfrmpWBeTh89DNBcuv8x+M6KHUHvb41AYxMPDXWCIqaewily4yPl5pQauAVCBmK8CCD/9XnBzfUlXMm1utJi0VyGSVqQ7NKw1RHibDXinE3/jwkWuBYFoDYRnUK5LAAyQDOBbCB+6qKre2jAPqoziGh1XcOilhvaHGQ4WvhpEkqkPJdbOTi4BoGJkDtBgBsDsMsQKED70JreF3u3gS4kzPLwcyecmW//VFu/pCJFAW6WEe9kVAJob6NjXEaPXTmNHWW24ZRbAgR884s8PUNfQ98BThoWZ0uuTVLDQ4Iip6gIAoywZm09IT+93VGhH25UNrTdk9tIFgOqwz+0TDGkrA5Egc6Klcu0OFwBoRSBYYzmoHTSw5yy+DD995Uj0iRsAx0B+W4oubaEvfTj0bi7jdsup0MgjaHq+XUoNxxHi7em4pzCWxnezBAA5DFN7ECKSqRDx0RIIh13tnIFRLFhD4TZGfjwZU7g0q89mEQBeZ8bQnXbUjxzO2xaI0DIrV3wX9vhuZGrNs9zi56O4Z/HDzHN3ZREAuLv/hsAupE22m8yBuGInkuOqS7ViM1JAmFj/ZNencKbeflkEgFuYMfwTR4bUm4a0fYUMShbtlctxpJeqip5RiCicsaVDFgHgImYMUxRaPF1fxnwIh5U2mQCAsyzOs10KcY7joIvg7ur0VFwYcbrCTKy6zsYk1N4ze1dPBwDqkCbKxi9QdRk0J0Nvdvh1puLKmLqMpLQWfIwBd3eyjvJtcKoAUBLCo2UL7OkDmF+cuMzhwnwQ0jcXdxOVhfw+pT1QR/BEycS+ABbZWk2vXdP1kStUKEOeC7EOymimg0XpAb1LrtajeEoZ28LNVWuYXxy92VCcrusSACeDv8dHRnNokA8x/6tusryKqTMu4mIMs/iihkV8J3djaQ8LtfsQsp/our9vpzqlogLgdgOt3xoUv8iI42p7Kd73d6bO3ywX4XhLW71H78Ey6JJ4JBldB/VVfDJ6HnYBMEsQkjU0bBD9NcWShwOmYC+3cJAOkchjmpXc5oas84jpikprYZfPdyjT3oMWR2DwxvHToO9nOTDqETBN0fgkyGPlqkMelbsdapdmzu/AVM15d0TDk0zzZuqLwN0e/grUeX5lX/dqyHP/9A8xPL3nggc4UWLAWBSylbdhOrQ0RK28nJl8Xc1XdUN+xZQmGcjdnZk2PgoRUfMMpQfPsWaPhBFvCkdSwGM+WfkODebiYmbwU6HONLqV2TV0HEE6QM/J5H1GEbQZelfNr9bUSjZnFDtfQ+2vx929GJacqhmK51V+1KUYWIPOeV3x4i5mEKqr45sw2983CA94vB3h19cehEgdmwt56tcN9N9tGhq5Inqnqk9VIc9PtBVq17mJzDv7GKihp0Ezeiguf3MuiuZ6qG/ckNFcqLNnTdCUUDr7lDSbmIXxNIGdNC11E8CHiZeAPJppP4GdG9MjzLuGxrFWcQFgDjMIFTc9kKnzGvP8GdDLVTANIqGS/8zMY+zq/sWsCZHXIIxWgL/Yeh5TRxXmdQ1T56VsAUBJyF2ZwpB/LzPwkZJnb9DUT9zPME06AAgT5/xUQH0K1p1gYdrmmMd52QKABswANoZY23QUJ+Wgdz/POojw6xwHAMiB8OTRCQV7KTBGbju/UzEPjRh+ZitiuDwiDgDUhYhv+5I464M+7tdGddodh51TdcKqZ0JE8+Y4BIBnAdW53WwxDsft38g883SIIckv0u0jBnUu3LjFpzQ4tBJE5NAFii9SZQkrgkjW2A96btEjNc3BHAB0TM4jNPqxB8KBtiNjMn8H4R5FN5ICrDFizFSaKbnvKkIeIbQDencGbYJZhiwOALoRub2gF884h9nOl2bIvGcMAGpCeMtsgrnb9BwYRMOSwWk/w6SOMGinPunoTWk3RNqakgkA5DtBQ4iMGn01xLzHoZ8Vq6LmbjIJ+ingcsF7AHu0CiJCqicZcerA7YUZRxUAZOpU2dm/DSLziG47J8MsffxymN2O2ptRY+cjtYkyjzoAeB7HfvoEZokULoFdrN5OYuRMbkQN5vMflOnzmw0AyAEw1ic+mZydNp5AQRpuqAQbTfXGZcPcZgsAKtIZavL823BHE2GWGvZ8pDdZ9lEHgJwYz3sTvqDF0TZfR9vi65z3hcScBWmvhghqyhckAEhhGab5FbeHPNfBT/TfUsd8QQKAmEsVzfN+mu9c5vwBPP7hHU2+oGoCgPRfC7NEY7EeCjCInCrY76kzUqPdZZmk1PktAqAE+FgCT+3aP4I1sC+1wdEIxHcJRgIAgyLLKbAS8hBqU3Nwa8jz/72e8ACZU8qgeCzeVMX5bOMPUJXa9Nv8yyYAyKzSECKw8wmEJ6i0cQjJIePTRhy+hj4BQIYVnYuqowDAM10neoAsLlEBkGgCEwAkAEgAkAAgAUACgAQACQASAGR3+f8AnCD0keiygtgAAAAASUVORK5CYII=" ;

		/**
		 * 사이즈, 투명도, 회전, x, y
		 * size
		 * duration
		 * alpha
		 * rotate
		 * x
		 * y
		 */
		this.size = rdm( 5, 10 ) ;
		this.duration = this.size * this.speed * 0.1 ;
		this.alpha = rdm( 0.25 , 0.75 ) ;
		this.rotate = -rdm( 3, 5 ) ;

		if( idx % 4 === 0 ) this.rotate = -this.rotate ;

		this.y = -rdm( this.size * 10 , this.size * 100 ) ;

		if( idx % 100 === 0 ) {
			this.size = rdm( 150, 200 ) ;
			this.duration = this.duration / 4 ; 	// 더 빠르게
			this.alpha = this.alpha / 3.3 ;
			this.y = -rdm( this.size * 10 , this.size * 60 ) ;
		} else if ( idx % 10 === 0 ) {
			this.size = rdm( 19, 33 ) ;
			this.duration = this.duration / 2.5 ;
			this.alpha = this.alpha / 1.5 ;
			this.y = -rdm( this.size * 25 , this.size * 35 ) ;
		}

		this.x = rdm( -Math.abs(this.wind) , this.w + Math.abs( this.wind) ) ;

	}	// end of constructor

	draw = () => {
		this.ctx.save() ;
		this.ctx.translate( this.x , this.y ) ;
		this.ctx.rotate( this.rotate ) ;
		this.ctx.globalAlpha = this.alpha ;
		this.ctx.drawImage( this.img, -this.size / 2, -this.size / 2, this.size, this.size );
		this.ctx.restore() ;
	}	// end of draw

	update = ( mapObj ) => {
		mapObj.forEach( ( val, key ) => {
			switch( key ) {
				case 'fallingDown' :
					let idx = val ;
					if ( idx % 100 === 0 ) {
						this.y = -rdm( this.size * 10 , this.size * 60 ) ;
					} else if ( idx % 10 === 0 ) {
						this.y = -rdm( this.size * 25 , this.size * 35 ) ;
					} else {
						this.y = -rdm( this.size * 10 , this.size * 100 ) ;
					}
					break ;
				case 'wind' :
					this.windVariance = val ;
					this.wind = this.ctx.canvas.height * val / 2 ;
					break;
				case 'speed' :
					this.speed = val ;
					this.duration = this.size * this.speed * 0.1 ;
					if ( this.idx % 100 === 0 ) {
						this.duration = this.duration / 4 ;
					} else if ( this.idx % 10 === 0 ) {
						this.duration = this.duration / 2.5 ;
					}
					break;
				default :
			}
		})
	}	// end of update

}

class Controller {
	
	constructor(){
		this.bln = false ;
		this.stopBln = false ;
	}
	
	start = () => {
		if( this.bln ) return ;
		this.bln = true ;
		this.stopBln = false;
		this.move() ;
	}	// end of start

	move = () => {
		let { props } = this ;
		props.ctx.clearRect( 0, 0, props.w, props.h ) ;
		let i = 0, len = props.len ;
		for( ; i < len ; i += 1 ) {
			let snow = props.particles[i] ;
			snow.rotate += Math.random() * 0.045 ;
			snow.x += ( snow.size * 0.1 ) * snow.duration + snow.windVariance ;
			snow.y += snow.size * snow.duration ;
			if( snow.y > props.h ) {
				if( !this.stopBln ){
					snow.x = rdm( -Math.abs(snow.wind) , snow.w + Math.abs( snow.wind) ) ;
					let map = new Map ;
					map.set( 'fallingDown', snow.idx ) ;
					snow.update( map ) ;
				}
			}
			snow.draw() ;
		}
		if( this.bln ) {
			requestAnimationFrame( this.move ) ;
		}
	}	// end of move

	stop = () => {
		this.stopBln = true;
	}	// end of stop

	clear = () => {
		let { props } = this ;
		this.bln = false ;
		this.stopBln = false ;

		setTimeout(() => {
			props.ctx.clearRect( 0, 0, props.w , props.h ) ;
		}, 10) ;
	}	// end of clear

	change = ( num, name ) => {
		let { props } = this
		,	type = name
		,	i = 0
		, 	len = props.len ;

		for( ; i < len ; i += 1 ) {
			let map = new Map ;
			map.set( type , +num ) ;
			props.particles[i].update( map ) ;
		}
	}	// end of update

}	// end of Controller

class WinterSnow extends Controller {
	constructor(){
		super() ;
		let ctx = document.createElement('canvas').getContext('2d') ;
		let { canvas } = ctx ;
		let windVariance = +document.querySelector('.variance').value || 1.5;

		console.log( this ) ;

		this.props = {
			ctx : ctx ,
			len : 100 ,
			w : canvas.width = window.innerWidth ,
			h : canvas.height = window.innerHeight ,
			wind : canvas.height * windVariance / 2 ,
			windVariance : windVariance ,
			speed : 1 ,
			particles : [] ,
		}

		window.addEventListener( 'resize', this.resize ) ;

	}	// end of constructor

	init = ( args ) => {
		let { target , len } = args ;
		this.props.len = len || 100 ;		
		target.appendChild( this.props.ctx.canvas ) ;
		this.make() ;
	}	// end of init

	resize = () => {
		let { props } = this ;
		let { canvas } = props.ctx ;
		props.w = canvas.width = window.innerWidth ;
		props.h = canvas.height = window.innerHeight ;
	}	// end of resize

	make = ( opt ) => {
		let { props } = this;
		let i = 0, len = props.len ;
		for( ; i < len ; i += 1 ) {
			props.particles[i] = new Particle( i , props ) ;
		}
	}	// end of make

}	// end of WinterSnow

window.addEventListener('load', () => {

	let winterSnow = new WinterSnow ;
	winterSnow.init( { target : document.body, len : 500 } ) ;

	document.querySelector( '.startBtn' ).addEventListener( 'click' , () => {
		winterSnow.start() ;
	}) ;

	document.querySelector( '.variance' ).addEventListener( 'input' , ( e ) => {
		winterSnow.change( e.target.value , 'wind' ) ;
	}) ;

	document.querySelector( '.speed' ).addEventListener( 'input' , ( e ) => {
		winterSnow.change( e.target.value , 'speed' ) ;
	}) ;

	document.querySelector( '.stopBtn' ).addEventListener( 'click' , () => {
		winterSnow.stop() ;
	}) ;

	document.querySelector( '.clearBtn' ).addEventListener( 'click' , () => {
		winterSnow.clear() ;
	}) ;

}) ;

	/*
		winterSnow.changeUpdate( document.querySelector('.variance') , 'wind' ) ;
	*/
/*
작업 순서
WinterSnow 클래스 생성
- 각종 변수 생성 및 저장
- add : 캔버스 생성
- make : 눈 개별 make -> particle 클래스생성
- 눈 그리기!
- 눈 움직이기( 한번 움직이게 )
- FizzBuzz 알고리즘을 사용하여 몇몇 눈은 다르게 표현하는 코드 작성
- 눈 움직이기( 반복적으로 계속 )
- 컨트롤 타워 생성
*/


/* 
	리펙토링 계획
	- 반복되는 코드 최소화 -> 코드 통합
		- wind, speed 업데이트 코드
	- type 추가 : rain 

	- 컨트롤러 분리

	성격 별로 분리해보자

	1. 눈을 만드는 클래스
	2. 속성을 변경하는 클래스
	3. 속성을 컨트롤 하는 클래스
		L 2번 (변경 하는 클래스)의 메소드를 상속 받아서 속성을 컨트롤 하는 클래스
	

	최적화 하라는 것이지 min처리 하라는 것은 아니다.
	애초에 컨트롤러하고 코어 API하고 분리

*/