import { useWindowSize } from "@uidotdev/usehooks";
import { styled } from "styled-components";

export default function Logo() {
    const size = useWindowSize();
    return (
        <SCLogo>
            <h1>Shortly</h1>
            <svg xmlns="http://www.w3.org/2000/svg" width={size.width <= 450 ? "75" : "102"} height={size.width <= 450 ? "75" : "102"} viewBox="0 0 102 102" fill="none">
                <path d="M87.8333 17V5.53918C87.8326 4.82178 87.5473 4.13397 87.04 3.62669C86.5327 3.11941 85.8449 2.83409 85.1275 2.83334H16.8725C16.1551 2.83409 15.4673 3.11941 14.96 3.62669C14.4527 4.13397 14.1674 4.82178 14.1667 5.53918V17L0 87.8333L39.6667 99.1667L51 69.2892L62.3333 99.1667L102 87.8333L87.8333 17Z" fill="#78B159" />
                <path d="M14.1667 11.3333H87.8333V17H14.1667V11.3333ZM39.049 17H33.1727C29.2684 28.6365 17.7027 32.2972 10.8744 33.4532L9.68152 39.423C19.8985 38.267 34.8982 32.6145 39.049 17Z" fill="#5D9040" />
                <path d="M92.3185 39.423L91.1256 33.4532C84.2973 32.2972 72.7345 28.6337 68.8273 17H62.951C67.099 32.6145 82.1015 38.267 92.3185 39.423ZM48.1666 17V76.7578L51 69.2892L53.8333 76.7578V17H48.1666Z" fill="#5D9040" />
                <path d="M51.4222 65.1667H51V59.5H51.4222C53.5641 59.4985 55.6178 58.647 57.1324 57.1324C58.647 55.6179 59.4985 53.5641 59.5 51.4222V14.1667H65.1667V51.4222C65.1629 55.0663 63.7136 58.5601 61.1369 61.1369C58.5601 63.7136 55.0663 65.1629 51.4222 65.1667Z" fill="#5D9040" />
            </svg>
        </SCLogo>
    );
}

const SCLogo = styled.div`
display: flex;
align-items: center;
justify-content: center;
h1{
    color: #000;
    font-size: 64px;
    font-style: normal;
    font-weight: 200;
    line-height: normal;
}
`;