import { styled } from "styled-components";
import { greenButtonColor, greenShortenColor } from "../Colors/colors";
import axios from "axios";
import UserContext from "../Contexts/UserContext";
import { useContext } from "react";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { useWindowSize } from "@uidotdev/usehooks";
import { MdGroups2 } from "react-icons/md";

export default function ShortenedLink({ url }) {
    const { updateUser } = useContext(UserContext);
    const size = useWindowSize();

    function remove() {
        Swal.fire({
            title: 'Remover?',
            text: "Tem certeza que remover este link?",
            icon: 'warning',
            showCancelButton: true,
            width: 300,
            confirmButtonColor: 'lightgray',
            cancelButtonColor: `${greenButtonColor}`,
            confirmButtonText: 'Sim',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`${import.meta.env.VITE_API_URL}/urls/${url.id}`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
                    .then(res => {
                        console.log(res);
                        toast.success('URL removida com sucesso!', {
                            position: "bottom-left",
                            autoClose: 2000,
                            hideProgressBar: true,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",
                        });
                        updateUser();
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        })
    }

    function open() {
        axios.get(`${import.meta.env.VITE_API_URL}/urls/open/${url.shortUrl}`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
            .then(res => {
                console.log(res);
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <SCShortenedLink onClick={open}>
            <div className="content">
                <a href={`${import.meta.env.VITE_API_URL}/urls/open/${url.shortUrl}`}>{url.url}</a>
                <a>{url.shortUrl}</a>
                <a>{size.width >= 720 ? "Quantidade de visitantes: " : size.width > 580 && size.width < 720 ? "Visitantes" : <MdGroups2 />} {url.visitCount}</a>
            </div>
            <button onClick={remove}>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="26" viewBox="0 0 22 26" fill="none">
                    <path d="M6.63929 0.89832C6.90446 0.34775 7.44955 0 8.04375 0H13.9563C14.5504 0 15.0955 0.34775 15.3607 0.89832L15.7143 1.625H20.4286C21.2978 1.625 22 2.3527 22 3.25C22 4.1473 21.2978 4.875 20.4286 4.875H1.57143C0.703705 4.875 0 4.1473 0 3.25C0 2.3527 0.703705 1.625 1.57143 1.625H6.28571L6.63929 0.89832ZM1.52723 6.5H20.4286V22.75C20.4286 24.5426 19.0192 26 17.2857 26H4.67009C2.97835 26 1.52723 24.5426 1.52723 22.75V6.5ZM5.4558 10.5625V21.9375C5.4558 22.3844 5.85357 22.75 6.24152 22.75C6.71786 22.75 7.02723 22.3844 7.02723 21.9375V10.5625C7.02723 10.1156 6.71786 9.75 6.24152 9.75C5.85357 9.75 5.4558 10.1156 5.4558 10.5625ZM10.1701 10.5625V21.9375C10.1701 22.3844 10.5679 22.75 10.9558 22.75C11.4321 22.75 11.7857 22.3844 11.7857 21.9375V10.5625C11.7857 10.1156 11.4321 9.75 10.9558 9.75C10.5679 9.75 10.1701 10.1156 10.1701 10.5625ZM14.9286 10.5625V21.9375C14.9286 22.3844 15.2821 22.75 15.7143 22.75C16.1464 22.75 16.5 22.3844 16.5 21.9375V10.5625C16.5 10.1156 16.1464 9.75 15.7143 9.75C15.2821 9.75 14.9286 10.1156 14.9286 10.5625Z" fill="#EA4F4F" />
                </svg>
            </button>
        </SCShortenedLink>
    );
}

const SCShortenedLink = styled.section`

    height: 60px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
   

    button{
        width: 130px;
        height: 60px;
        flex-shrink: 0;
        border-radius: 0px 12px 12px 0px;
        border: 1px solid rgba(120, 177, 89, 0.25);
        background: #FFF;
        box-shadow: 0px 4px 24px 0px rgba(120, 177, 89, 0.12);
        display: flex;
        align-items: center;
        justify-content: center;

        @media (max-width: 1080px) {
            width: 50px;
        }
    }

    .content{
        @media (max-width: 1080px) {
            max-width:calc(100% - 80px);
            overflow: hidden;
        }

        width: 100%;
        color: white;
        border-radius: 12px 0px 0px 12px;
        background: ${greenShortenColor};
        box-shadow: 0px 4px 24px 0px rgba(120, 177, 89, 0.12);
        max-width: 887px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 21px;
        cursor: pointer;
        &:hover{
            opacity: 70%;
        }
        a{
            color: white;
            width: 100%;
            &:nth-child(2)
            {
                width: 90px;
                min-width: 90px;
                margin-left: 10px;
            }
            &:last-child
            {
                text-align: right;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 5px;
            }
        }
    }
`;


