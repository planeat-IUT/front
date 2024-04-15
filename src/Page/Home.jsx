import CardRestaurantHome from "../Components/RestaurantComponents/CardRestaurantHome";
import {addClass} from "leaflet/src/dom/DomUtil";
import imgsRestaurant from '../img/restaurant.jpg';
import {useState} from "react";
import {useEffect} from "react";

export default function Home() {

    const [showCard, setShowCard] = useState([false, false, false, false]);

    function hoverItem(index) {
        var item = document.getElementById("item-second-page-" + index);
        item.classList.add("item-second-page-highlight");

        var items = document.getElementsByClassName("item-second-page");
        for (var i = 0; i < items.length; i++) {
            if (i !== index) {
                items[i].classList.add("item-second-page-shadow");
            }
        }
    }

    function unHoverItem(index) {
        var items = document.getElementsByClassName("item-second-page");
        for (var i = 0; i < items.length; i++) {
            items[i].classList.remove("item-second-page-shadow");
            items[i].classList.remove("item-second-page-highlight");
        }
    }

    function toggleItemThirdPage(index){
        var item = document.getElementById(index);
        item.classList.toggle("active-item-third-page");
    }

    return (
        <div className={"cont-main-home"}>
            <section className={"first-page-home"}>
                <div className={"cont-item-first-page"}>
                    <span className={"title roboto-medium"}>
                        Envie d'un bon restaurant ?
                    </span>
                    <div className={"separation-title"}>
                    </div>
                    <div className={"search-bar-home"}>
                        <div className={"search-bar-home-loupe"}>
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_1478_22)">
                                    <path
                                        d="M22.016 19.3954C23.8315 16.918 24.6447 13.8464 24.2928 10.7951C23.9409 7.74382 22.4499 4.93794 20.118 2.9388C17.7862 0.939659 14.7855 -0.105311 11.7163 0.0129514C8.64709 0.131214 5.7357 1.40399 3.56461 3.57663C1.39351 5.74928 0.122825 8.66158 0.00675912 11.7309C-0.109307 14.8002 0.93781 17.8001 2.93862 20.1305C4.93943 22.4609 7.74638 23.9499 10.7979 24.2997C13.8494 24.6494 16.9204 23.834 19.3966 22.0167H19.3947C19.451 22.0917 19.511 22.1629 19.5785 22.2323L26.7972 29.4511C27.1488 29.8029 27.6257 30.0006 28.1231 30.0008C28.6205 30.001 29.0976 29.8036 29.4494 29.452C29.8012 29.1004 29.999 28.6235 29.9992 28.1261C29.9993 27.6287 29.8019 27.1516 29.4504 26.7998L22.2316 19.5811C22.1646 19.5132 22.0925 19.4524 22.016 19.3954ZM22.4997 12.1879C22.4997 13.5422 22.233 14.8832 21.7147 16.1344C21.1965 17.3855 20.4369 18.5224 19.4793 19.48C18.5217 20.4376 17.3848 21.1972 16.1337 21.7154C14.8825 22.2337 13.5415 22.5004 12.1872 22.5004C10.833 22.5004 9.49198 22.2337 8.24081 21.7154C6.98964 21.1972 5.8528 20.4376 4.89519 19.48C3.93759 18.5224 3.17797 17.3855 2.65972 16.1344C2.14147 14.8832 1.87473 13.5422 1.87473 12.1879C1.87473 9.45289 2.96122 6.82986 4.89519 4.89589C6.82916 2.96193 9.45218 1.87543 12.1872 1.87543C14.9223 1.87543 17.5453 2.96193 19.4793 4.89589C21.4132 6.82986 22.4997 9.45289 22.4997 12.1879Z"
                                        fill="#534B35"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_1478_22">
                                        <rect width="30" height="30" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <input className={"input-home"} placeholder={"écrivez le nom d'un restaurant"}/>
                    </div>
                </div>

                <div className={"big-apple-home"}>
                    <svg width="344" height="550" viewBox="0 0 344 550" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="8.88024" cy="271.682" rx="153.828" ry="149.303"
                                 transform="rotate(9.9536 8.88024 271.682)" fill="#696047"/>
                        <ellipse cx="150.894" cy="300.05" rx="151.566" ry="145.91"
                                 transform="rotate(9.9536 150.894 300.05)" fill="#696047"/>
                        <path
                            d="M298.25 336.623C238.057 576.027 86.6275 549.452 31.8275 539.835C-22.9724 530.218 -156.156 506.846 -144.726 258.884C-141.533 189.614 20.4224 282.944 75.2223 292.561C130.022 302.178 315.156 269.384 298.25 336.623Z"
                            fill="#696047"/>
                        <path
                            d="M178.897 59.3138C190.885 67.1812 191.113 87.179 179.406 103.98C167.699 120.782 119.482 169.653 107.494 161.786C95.5063 153.918 121.172 96.7606 135.993 75.49C147.7 58.6888 166.909 51.4465 178.897 59.3138Z"
                            fill="#696047"/>
                    </svg>
                </div>
                <div className={"little-apple-home"}>
                    <svg width="224" height="412" viewBox="0 0 224 412" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="95.9438" cy="93.1219" rx="95.9438" ry="93.1219"
                                 transform="matrix(-0.887821 0.460189 0.460189 0.887821 278.473 55.1172)"
                                 fill="#696047"/>
                        <ellipse cx="94.5328" cy="91.0055" rx="94.5328" ry="91.0055"
                                 transform="matrix(-0.887821 0.460189 0.460189 0.887821 198.998 101.079)"
                                 fill="#696047"/>
                        <path
                            d="M76.108 274.695C156.69 405.889 241.824 361.761 272.633 345.792C303.442 329.823 378.318 291.012 325.151 145.607C310.299 104.987 231.383 190.804 200.575 206.773C169.766 222.742 53.4756 237.847 76.108 274.695Z"
                            fill="#696047"/>
                        <path
                            d="M95.2714 87.3723C89.6094 94.2952 93.2133 106.237 103.321 114.045C113.429 121.853 151.257 141.916 156.919 134.993C162.581 128.071 136.621 98.8598 123.825 88.9749C113.717 81.1669 100.933 80.4494 95.2714 87.3723Z"
                            fill="#696047"/>
                    </svg>
                </div>
                <div className={"little-mid-apple-home"}>
                    <svg width="330" height="150" viewBox="0 0 330 217" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="95.9438" cy="93.1219" rx="95.9438" ry="93.1219"
                                 transform="matrix(-0.986253 -0.165242 -0.165242 0.986253 319.116 107.624)"
                                 fill="#696047"/>
                        <ellipse cx="94.5328" cy="91.0055" rx="94.5328" ry="91.0055"
                                 transform="matrix(-0.986253 -0.165242 -0.165242 0.986253 227.967 96.644)"
                                 fill="#696047"/>
                        <path
                            d="M25.4392 161.658C11.0793 314.953 105.653 330.798 139.877 336.532C174.101 342.266 257.279 356.203 302.094 208.01C314.613 166.612 199.976 187.835 165.751 182.101C131.527 176.366 29.4724 118.604 25.4392 161.658Z"
                            fill="#696047"/>
                        <path
                            d="M153.262 23.3897C144.577 25.5246 140.287 37.2372 143.679 49.5506C147.072 61.8639 165.269 100.625 173.953 98.4896C182.638 96.3547 179.425 57.4082 175.13 41.8194C171.737 29.506 161.946 21.2547 153.262 23.3897Z"
                            fill="#696047"/>
                    </svg>
                </div>
                <div className={"transition-inter-page"}>
                    <svg width="1926" height="142" viewBox="0 0 1926 142" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M1.00001 1L1925 1.00017L1925 107.709C1751.17 82.5861 1304.8 47.4145 910 107.708C515.2 168.002 139.5 132.831 1 107.708L1.00001 1Z"
                            fill="#534B35" stroke="#534B35"/>
                    </svg>
                </div>
            </section>
            <section className={"second-page-home"}>
                <div className={"header-second-page roboto-medium"}>
                    <span>Venez découvrir</span>
                </div>
                <div className={"items-cont-second-page"}>
                    <div id={"item-second-page-0"} className={"item-second-page"} onMouseOver={() => hoverItem(0)}
                         onMouseLeave={() => unHoverItem(0)}>
                        <svg width="104" height="63" viewBox="0 0 104 63" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M27.7333 59.5C27.7333 58.5717 28.0986 57.6815 28.7487 57.0251C29.3988 56.3687 30.2806 56 31.2 56H100.533C101.453 56 102.335 56.3687 102.985 57.0251C103.635 57.6815 104 58.5717 104 59.5C104 60.4283 103.635 61.3185 102.985 61.9749C102.335 62.6313 101.453 63 100.533 63H31.2C30.2806 63 29.3988 62.6313 28.7487 61.9749C28.0986 61.3185 27.7333 60.4283 27.7333 59.5ZM13.8667 31.5C13.8667 30.5717 14.2319 29.6815 14.882 29.0251C15.5322 28.3687 16.4139 28 17.3333 28H86.6667C87.5861 28 88.4678 28.3687 89.118 29.0251C89.7681 29.6815 90.1333 30.5717 90.1333 31.5C90.1333 32.4283 89.7681 33.3185 89.118 33.9749C88.4678 34.6313 87.5861 35 86.6667 35H17.3333C16.4139 35 15.5322 34.6313 14.882 33.9749C14.2319 33.3185 13.8667 32.4283 13.8667 31.5ZM0 3.5C0 2.57174 0.365237 1.6815 1.01536 1.02513C1.66549 0.36875 2.54725 0 3.46667 0H72.8C73.7194 0 74.6012 0.36875 75.2513 1.02513C75.9014 1.6815 76.2667 2.57174 76.2667 3.5C76.2667 4.42826 75.9014 5.3185 75.2513 5.97487C74.6012 6.63125 73.7194 7 72.8 7H3.46667C2.54725 7 1.66549 6.63125 1.01536 5.97487C0.365237 5.3185 0 4.42826 0 3.5Z"
                                  fill="#534B35"/>
                        </svg>
                        <span className={"roboto-light"}>
                            Défilez la liste pour trouver le restaurant qu’il vous faut
                        </span>
                    </div>
                    <div id={"item-second-page-1"} className={"item-second-page"} onMouseOver={() => hoverItem(1)}
                         onMouseLeave={() => unHoverItem(1)}>
                        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M79.085 0.564132C79.3712 0.798818 79.6018 1.09414 79.7601 1.42878C79.9183 1.76342 80.0002 2.12902 80 2.49919V72.5013C79.9996 73.079 79.7992 73.6388 79.4328 74.0855C79.0663 74.5322 78.5565 74.8381 77.99 74.9514L52.99 79.9515C52.6665 80.0159 52.3335 80.0159 52.01 79.9515L27.5 75.0514L2.99 79.9515C2.62744 80.024 2.25333 80.0151 1.8946 79.9256C1.53588 79.8361 1.20148 79.6681 0.915497 79.4337C0.629514 79.1994 0.399067 78.9045 0.240759 78.5704C0.0824509 78.2363 0.000223264 77.8712 0 77.5014L0 7.49934C0.00034891 6.92159 0.200781 6.3618 0.567217 5.91513C0.933653 5.46847 1.44347 5.16251 2.01 5.04927L27.01 0.049117C27.3335 -0.0155386 27.6665 -0.0155386 27.99 0.049117L52.5 4.94926L77.01 0.049117C77.3724 -0.0238061 77.7465 -0.0154383 78.1053 0.0736177C78.4641 0.162674 78.7987 0.330201 79.085 0.564132ZM50 9.5494L30 5.54928V70.4512L50 74.4513V9.5494ZM55 74.4513L75 70.4512V5.54928L55 9.5494V74.4513ZM25 70.4512V5.54928L5 9.5494V74.4513L25 70.4512Z"
                                  fill="#534B35"/>
                        </svg>
                        <span className={"roboto-light"}>
                            Accédez au plan pour trouver le restaurant qu’il vous faut
                        </span>
                    </div>
                </div>
            </section>
            <section className={"third-page-home"}>
                <div className={"cont-items-third-page"}>
                    <CardRestaurantHome />
                    <CardRestaurantHome />
                    <CardRestaurantHome />
                    <CardRestaurantHome />
                </div>
            </section>
            <section className={"fourth-page-home"}>
                <div className={"transition-inter-page"}>
                    <svg width="1926" height="142" viewBox="0 0 1926 142" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M1.00001 1L1925 1.00017L1925 107.709C1751.17 82.5861 1304.8 47.4145 910 107.708C515.2 168.002 139.5 132.831 1 107.708L1.00001 1Z"
                            fill="#534B35" stroke="#534B35"/>
                    </svg>
                </div>

            </section>
        </div>
    );
}
