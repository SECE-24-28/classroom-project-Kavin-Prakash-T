import { useContext, useEffect, useState } from "react";
import GlobalContext from "../contexts/GlobalContext";

const UserDetails = () => {

    const { currentPage } = useContext(GlobalContext)

    const [userData, setUserData] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${currentPage}`)
            const data = await response.json();
            setIsLoading(false)
            setUserData(data)

        }
        fetchData()
    }, [currentPage])

    return (
        <div className="w-[300px] mx-auto bg-orange-100 mt-5 flex flex-col justify-center items-center">
            <h1 className="text-xl mb-2">User Details</h1>
            {isLoading ? (
                <p className="text-lg">Loading....</p>
            ) : (<>
                <h3 className="text-lg">{userData.name}</h3>
                <h3 className="text-lg">{userData.email}</h3>
                <h3 className="text-lg">{userData.phone}</h3>
                <h3 className="text-lg">{userData.website}</h3></>
            )
            }
        </div>
    )
};

export default UserDetails