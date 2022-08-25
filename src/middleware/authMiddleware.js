import Cookies from 'js-cookie'

const ensureUserAuthneticated = () => {
	return Cookies.get('GQ_TOKEN') ? true : false
}

export default ensureUserAuthneticated
