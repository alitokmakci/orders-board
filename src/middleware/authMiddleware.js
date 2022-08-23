import Cookies from 'js-cookie'

const ensureUserAuthneticated = () => {
	return Cookies.get('token')
}

export default ensureUserAuthneticated
