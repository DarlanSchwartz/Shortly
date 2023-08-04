import axios from "axios";
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import {AiFillEye} from 'react-icons/ai';
import { useWindowSize } from "@uidotdev/usehooks";
import { greenButtonColor } from "../Colors/colors";

export default function RankingComponent() {
    
    const [ranking, setRanking] = useState([]);
    const size = useWindowSize();

    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_API_URL}/ranking`,{headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}})
        .then(res =>{
            console.log(res.data);
            setRanking(res.data);
        })
        .catch(error =>{
          console.log(error);
        });
    },[])
    
    return (
        <SCRankingComponent>
            <Title>
                <svg xmlns="http://www.w3.org/2000/svg" width={size.width <= 450 ? "30" : "56"} height="50" viewBox="0 0 56 50" fill="none">
                    <path d="M53.6667 6.25H43.5556V2.34375C43.5556 1.04492 42.5153 0 41.2222 0H14.7778C13.4847 0 12.4444 1.04492 12.4444 2.34375V6.25H2.33333C1.04028 6.25 0 7.29492 0 8.59375V14.0625C0 17.5488 2.1875 21.1328 6.01806 23.8965C9.08056 26.1133 12.8042 27.5195 16.7125 27.9688C19.7653 33.0566 23.3333 35.1562 23.3333 35.1562V42.1875H18.6667C15.2347 42.1875 12.4444 44.209 12.4444 47.6562V48.8281C12.4444 49.4727 12.9694 50 13.6111 50H42.3889C43.0306 50 43.5556 49.4727 43.5556 48.8281V47.6562C43.5556 44.209 40.7653 42.1875 37.3333 42.1875H32.6667V35.1562C32.6667 35.1562 36.2347 33.0566 39.2875 27.9688C43.2056 27.5195 46.9292 26.1133 49.9819 23.8965C53.8028 21.1328 56 17.5488 56 14.0625V8.59375C56 7.29492 54.9597 6.25 53.6667 6.25ZM9.65417 18.8281C7.28194 17.1094 6.22222 15.1953 6.22222 14.0625V12.5H12.4639C12.5611 15.6836 13.0278 18.4766 13.7083 20.918C12.2403 20.4102 10.8694 19.707 9.65417 18.8281ZM49.7778 14.0625C49.7778 15.6348 48.0569 17.5879 46.3458 18.8281C45.1306 19.707 43.75 20.4102 42.2819 20.918C42.9625 18.4766 43.4292 15.6836 43.5264 12.5H49.7778V14.0625Z" fill="#FFD233" />
                </svg>
                <h1>Ranking</h1>
            </Title>
            <List>
                {
                    ranking.map((user,index)=>{
                        return <p key={user.id}>{`${index + 1}. ${user.name} - ${user.linksCount} links - `} {size.width <= 450 ?  <AiFillEye color={greenButtonColor}/> : ''} {`${user.visitCount} `}{size.width <= 450 ? '' : 'visualizações'}</p>;
                    })
                }
            </List>
        </SCRankingComponent>
    );
}

const SCRankingComponent = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 76px;
    flex-direction: column;
    @media (max-width: 1050px) {
        max-width: 100%;
        width: 100%;
        border-radius: 0;
        overflow: hidden;
    }
`;

const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 71px;
    h1{
        color: #000;
        font-size: 36px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
`;

const List = styled.section`
    border-radius: 24px 24px 0px 0px;
    border: 1px solid rgba(120, 177, 89, 0.25);
    background: #FFF;
    box-shadow: 0px 4px 24px 0px rgba(120, 177, 89, 0.12);
    width: 1017px;
    height: 241px;
    flex-shrink: 0;
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    align-items: left;
    justify-content: flex-start;
    flex-direction: column;
    gap: 10px;

    @media (max-width: 1050px) {
        max-width: 100%;
        width: 100%;
        border-radius: 0;
        overflow: hidden;
        padding-left: 20px;
        padding-right: 20px;
    }

    p{
        color: #000;
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 10px;
    }
`;