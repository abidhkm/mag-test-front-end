import { useEffect } from "react"
import { useHistory } from "react-router-dom"
import { callApi } from "../utils/api";

const useAuthenticate = (updateUserDetails,userDetails) => {
    let history = useHistory();

    useEffect(() => {
        const authenticate = async () => {
            const res = await callApi('get', '/users/authenticate')
            if (res.status !== 200) {
                history.push('/sign-in')
            } else {
                updateUserDetails({ authenticated: true })
            }
        }
        if(!userDetails?.userDetails?.authenticated) {
            authenticate();
        }
    }, [])
}

export default useAuthenticate;