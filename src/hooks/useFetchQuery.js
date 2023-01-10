import {useEffect, useState} from "react";

const useFetchQuery = (query, params) => {
    const [data, setData] = useState({});
    const [fetching, setFetching] = useState(false);
    const [error, setError] = useState(false);

    const refetch = () => {
        setFetching(true);
    }

    const fetchQuery = async () => {
        try {
            if (!fetching) setFetching(true);
            const response = await query(params)
            setData(response?.data)
        } catch (e) {
            setError(true);
        } finally {
            setFetching(false);
        }
    }

    useEffect(() => {
        if (fetching) fetchQuery();
    }, [fetching])

    useEffect(() => {
        fetchQuery();
    }, [params])

    return { data, loading: fetching, error, refetch }
}

export default useFetchQuery;