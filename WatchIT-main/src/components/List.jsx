import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useQuery, useMutation} from '@tanstack/react-query';
import LayoutUl from '../layouts/LayoutUl';
import { BeatLoader } from 'react-spinners';


const override = {
    display: "block",
    margin: "100px auto",
    borderColor: "#36d7b7",
};
export default function List({ url, headline }) {
    const { isLoading, isError, data, error} = useQuery({queryKey: [`${url}`], queryFn:  () => {
        return  axios.get(url, {headers: headers,})
    }})
    

    if(isError){
        return <h2 className='mt-44'>{error.message}</h2>
    }

    if(isLoading){
        return <BeatLoader
        className='text-center mt-52'
        loading={isLoading}
        color='#3b82f6'
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
    />
    }



    return (
        <>
            <LayoutUl data={data} />
        </>
            );
}


const headers = {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OGE5YzdiOTMxZDExNmZkOGU5NTQ3ZmY3OWI1Nzk2YSIsInN1YiI6IjY0Y2E5MGE2NGZkMTQxMDEyNzA5MjRhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hpsmBZxPNjV3qdvurfpmq_W6Jc5RrEoZ7j7rUenCmiA',
}