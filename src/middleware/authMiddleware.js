import Cookies from 'js-cookie'

const ensureUserAuthneticated = () => {
	return Cookies.get('GQ_TOKEN')
}

export default ensureUserAuthneticated
