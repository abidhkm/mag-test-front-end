import { useEffect } from "react"
import { useHistory } from "react-router-dom"

const useCheckAuthenticate = (userDetails) => {
    let history = useHistory();

    useEffect(() => {
        if (!userDetails.authenticated) {
            history.push('/sign-in')
        }
    }, [])
}

export default useCheckAuthenticate;