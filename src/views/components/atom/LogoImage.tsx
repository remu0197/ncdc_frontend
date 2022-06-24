import {ReactComponent as Logo} from '../../../img/icon/logo.svg'

// CountButton コンポーネントの定義
export default function LogoImage() {
	return (
		<div className='logo'>
			<Logo className='logo_image'/>
			<div className='logo_font'><b>ServiceName</b></div>
		</div>
	);
}