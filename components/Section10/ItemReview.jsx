export default function ItemReview({ index }) {
    return (
        <div className="flex items-center mt-[50px] mx-[54px]">
            {
                index % 2 === 0 &&
                <img
                    loading="lazy"
                    src="https://s3-alpha-sig.figma.com/img/e40b/73d5/0305d93d87922e991ab3f894c5893f63?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g9bjXbh5ti05fM6n24Bdm0aopu~SXZwLnOs0IAfUx7X9tUX4wpWMTJOrguYYUbfAs8o3a41D5NN40Ocm5BLEUsb088Hp0CZDDosigvH~E94USGQJ6D~VcDyg9TGoiV0Kz3cflej12V7kLSMChmk6fPhmLk8RUWfchaI2IOWXwZh9Q8Mqa~kIkCT7DaRpicZ6KcuoYyiPoLsFZDT89lCO2JboKIj7P9qAhPfg9ORbZJ0yblQxgskksJBZtob3sHVo-Q9oX8Txhyf0d8NjhHNf011Xj7AIRYqmIK55qimtjJRXnQQ1yVe3yF9v2qsvHBCJ0blocRRoD8nmhfQ5wMrsdA__"
                    className="w-[17%] h-[17%] mr-[22px] bg-white rounded-full"
                />
            }
            <div className="grow relative">
                {
                    index % 2 === 0 &&
                    <svg className="absolute top-1/2 left-0" xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51" fill="none">
                        <path d="M6.1679e-05 -6.43865e-07L51.0001 3.8147e-06L51.0001 51L6.1679e-05 -6.43865e-07Z" fill="#FF9900" />
                    </svg>
                }

                <div className={`${index % 2 === 0 ? "bg-[#ff9900] ml-[33px]" : "bg-[#ffc700] mr-[33px]"} py-6 px-10 rounded-[30px] flex flex-col`}>
                    <div className={`${index % 2 === 0 ? "text-white" : "text-black"} text-[18px] font-normal leading-[26px]`}>김OO(자바205기)</div>
                    <div className={`${index % 2 === 0 ? "text-[#af6412]" : "text-[#af8d12]"} text-[18px] font-normal leading-[26px]`}>“커리큘럼이 조금 빡빡하긴 하지만 좋은 강사님을 만나서 진행하는데에 많은 도움이 되었습니다. 직접 실습을 통해 프로그래밍을 배우는 커리큘럼이 좋았습니다. 과제를 통해 참여도를 끌어올렸던 것이 많은 도움이 된 것 같아요 6개월이 길다고 생각했는데 진짜 금방지나갔고, 좋은 강사님과 함께 잘 수료했습니다.”</div>
                </div>
                {
                    index % 2 != 0 &&
                    <svg className="absolute top-1/2 right-0" xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51" fill="none">
                        <path d="M51.0001 -6.43865e-07L5.65766e-05 3.8147e-06L6.10352e-05 51L51.0001 -6.43865e-07Z" fill="#FFC700" />
                    </svg>
                }
            </div>
            {
                index % 2 != 0 &&
                <img
                    loading="lazy"
                    src="https://s3-alpha-sig.figma.com/img/e40b/73d5/0305d93d87922e991ab3f894c5893f63?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g9bjXbh5ti05fM6n24Bdm0aopu~SXZwLnOs0IAfUx7X9tUX4wpWMTJOrguYYUbfAs8o3a41D5NN40Ocm5BLEUsb088Hp0CZDDosigvH~E94USGQJ6D~VcDyg9TGoiV0Kz3cflej12V7kLSMChmk6fPhmLk8RUWfchaI2IOWXwZh9Q8Mqa~kIkCT7DaRpicZ6KcuoYyiPoLsFZDT89lCO2JboKIj7P9qAhPfg9ORbZJ0yblQxgskksJBZtob3sHVo-Q9oX8Txhyf0d8NjhHNf011Xj7AIRYqmIK55qimtjJRXnQQ1yVe3yF9v2qsvHBCJ0blocRRoD8nmhfQ5wMrsdA__"
                    className="w-[17%] h-[17%] ml-[22px] bg-white rounded-full"
                />
            }
        </div>
    );
}