"use client";

import { motion } from "framer-motion";

export default function Section8() {
    return (
        <div className="main">
            <div className="flex-1 h-[103px] bg-[#ff9900] mb-[87px]" />
            <motion.div
                className="flex-1 flex-col justify-center"
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true, amount: 0.5 }}>
                <div className="text-center text-white text-5xl font-bold leading-normal">취업한 선배 수료생들과의</div>
                <div className="text-center text-[#ff9900] text-5xl font-bold leading-normal">1:1 멘토링</div>
            </motion.div>
            <div className="flex-1 mt-24 py-20 bg-[#ff9900]">
                <div className="flex flex-col items-start relative">
                    <svg className="w-[57%] mx-[51px]" width="449" height="81" viewBox="0 0 449 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="path-1-outside-1_2_172" maskUnits="userSpaceOnUse" x="-1" y="-1" width="452" height="83" fill="black">
                            <rect fill="white" x="-1" y="-1" width="452" height="83" />
                            <path d="M4.62344 79.2V15.6L0.623438 12.6V1.9H22.6234L42.5234 38.9L62.6234 1.9H80.6234V79.2H63.9234V30.8C62.2234 34.5 61.0234 37.1 48.2234 60.2H36.9234C30.6234 48.9 27.1234 42.3 25.0234 38.2C23.4234 35.1 22.2234 32.7 21.3234 30.8V79.2H4.62344ZM94.8344 79.2V15.6L90.8344 12.6V1.9H147.434V15.9H112.734V32.8H145.234V46.5H112.734V65.2H147.434V79.2H94.8344ZM160.092 79.2V15.6L156.092 12.6V1.9H179.492L208.992 51.8V1.9H225.692V79.2H205.992L176.792 28.9V79.2H160.092ZM258.154 79.2V15.9H234.954V1.9H299.154V15.9H275.954V79.2H258.154ZM338.532 81C328.532 81 320.132 78.5 314.232 72.8C308.332 67.1 304.932 57.9 304.932 44.6V36.6C304.932 10 318.432 0.199996 338.532 0.199996C358.432 0.199996 372.232 9.5 372.232 36.6V44.6C372.232 57.9 368.832 67.1 362.932 72.8C357.032 78.5 348.532 81 338.532 81ZM323.032 43.4C323.032 59 328.932 66 338.532 66C348.232 66 354.132 59 354.132 43.4V37.6C354.132 22.3 348.532 15.2 338.532 15.2C328.832 15.2 323.032 22.3 323.032 37.6V43.4ZM382.92 79.2V15.6L378.92 12.6V1.9H407.72C427.52 1.9 443.92 4.9 443.92 26.8V27.9C443.92 39.2 439.32 45.5 432.12 48.9C439.82 57.8 445.12 67.8 448.82 79.2H430.12C426.92 69.3 422.22 60.5 415.32 52.5C413.52 52.6 411.52 52.6 409.62 52.6H400.62V79.2H382.92ZM400.62 39.2H409.02C420.92 39.2 426.12 36.6 426.12 27.8V26.7C426.12 19.5 420.92 15.7 409.02 15.7H400.62V39.2Z" />
                        </mask>
                        <path d="M4.62344 79.2H3.62344V80.2H4.62344V79.2ZM4.62344 15.6H5.62344V15.1L5.22344 14.8L4.62344 15.6ZM0.623438 12.6H-0.376562V13.1L0.0234382 13.4L0.623438 12.6ZM0.623438 1.9V0.899998H-0.376562V1.9H0.623438ZM22.6234 1.9L23.5041 1.42632L23.2211 0.899998H22.6234V1.9ZM42.5234 38.9L41.6427 39.3737L42.519 41.003L43.4021 39.3773L42.5234 38.9ZM62.6234 1.9V0.899998H62.0286L61.7447 1.42265L62.6234 1.9ZM80.6234 1.9H81.6234V0.899998H80.6234V1.9ZM80.6234 79.2V80.2H81.6234V79.2H80.6234ZM63.9234 79.2H62.9234V80.2H63.9234V79.2ZM63.9234 30.8H64.9234L63.0148 30.3825L63.9234 30.8ZM48.2234 60.2V61.2H48.8126L49.0981 60.6847L48.2234 60.2ZM36.9234 60.2L36.05 60.687L36.336 61.2H36.9234V60.2ZM25.0234 38.2L25.9135 37.7441L25.9121 37.7414L25.0234 38.2ZM21.3234 30.8L22.2272 30.3719L20.3234 30.8H21.3234ZM21.3234 79.2V80.2H22.3234V79.2H21.3234ZM5.62344 79.2V15.6H3.62344V79.2H5.62344ZM5.22344 14.8L1.22344 11.8L0.0234382 13.4L4.02344 16.4L5.22344 14.8ZM1.62344 12.6V1.9H-0.376562V12.6H1.62344ZM0.623438 2.9H22.6234V0.899998H0.623438V2.9ZM21.7427 2.37367L41.6427 39.3737L43.4041 38.4263L23.5041 1.42632L21.7427 2.37367ZM43.4021 39.3773L63.5022 2.37735L61.7447 1.42265L41.6447 38.4226L43.4021 39.3773ZM62.6234 2.9H80.6234V0.899998H62.6234V2.9ZM79.6234 1.9V79.2H81.6234V1.9H79.6234ZM80.6234 78.2H63.9234V80.2H80.6234V78.2ZM64.9234 79.2V30.8H62.9234V79.2H64.9234ZM63.0148 30.3825C61.3327 34.0434 60.1506 36.612 47.3487 59.7153L49.0981 60.6847C61.8963 37.588 63.1141 34.9566 64.8321 31.2175L63.0148 30.3825ZM48.2234 59.2H36.9234V61.2H48.2234V59.2ZM37.7969 59.713C31.5005 48.4196 28.0065 41.8304 25.9135 37.7441L24.1334 38.6559C26.2404 42.7696 29.7464 49.3804 36.05 60.687L37.7969 59.713ZM25.9121 37.7414C24.3144 34.6458 23.1202 32.2572 22.2272 30.3719L20.4197 31.2281C21.3267 33.1428 22.5325 35.5542 24.1348 38.6586L25.9121 37.7414ZM20.3234 30.8V79.2H22.3234V30.8H20.3234ZM21.3234 78.2H4.62344V80.2H21.3234V78.2ZM94.8344 79.2H93.8344V80.2H94.8344V79.2ZM94.8344 15.6H95.8344V15.1L95.4344 14.8L94.8344 15.6ZM90.8344 12.6H89.8344V13.1L90.2344 13.4L90.8344 12.6ZM90.8344 1.9V0.899998H89.8344V1.9H90.8344ZM147.434 1.9H148.434V0.899998H147.434V1.9ZM147.434 15.9V16.9H148.434V15.9H147.434ZM112.734 15.9V14.9H111.734V15.9H112.734ZM112.734 32.8H111.734V33.8H112.734V32.8ZM145.234 32.8H146.234V31.8H145.234V32.8ZM145.234 46.5V47.5H146.234V46.5H145.234ZM112.734 46.5V45.5H111.734V46.5H112.734ZM112.734 65.2H111.734V66.2H112.734V65.2ZM147.434 65.2H148.434V64.2H147.434V65.2ZM147.434 79.2V80.2H148.434V79.2H147.434ZM95.8344 79.2V15.6H93.8344V79.2H95.8344ZM95.4344 14.8L91.4344 11.8L90.2344 13.4L94.2344 16.4L95.4344 14.8ZM91.8344 12.6V1.9H89.8344V12.6H91.8344ZM90.8344 2.9H147.434V0.899998H90.8344V2.9ZM146.434 1.9V15.9H148.434V1.9H146.434ZM147.434 14.9H112.734V16.9H147.434V14.9ZM111.734 15.9V32.8H113.734V15.9H111.734ZM112.734 33.8H145.234V31.8H112.734V33.8ZM144.234 32.8V46.5H146.234V32.8H144.234ZM145.234 45.5H112.734V47.5H145.234V45.5ZM111.734 46.5V65.2H113.734V46.5H111.734ZM112.734 66.2H147.434V64.2H112.734V66.2ZM146.434 65.2V79.2H148.434V65.2H146.434ZM147.434 78.2H94.8344V80.2H147.434V78.2ZM160.092 79.2H159.092V80.2H160.092V79.2ZM160.092 15.6H161.092V15.1L160.692 14.8L160.092 15.6ZM156.092 12.6H155.092V13.1L155.492 13.4L156.092 12.6ZM156.092 1.9V0.899998H155.092V1.9H156.092ZM179.492 1.9L180.353 1.39109L180.063 0.899998H179.492V1.9ZM208.992 51.8L208.131 52.3089L209.992 55.4565V51.8H208.992ZM208.992 1.9V0.899998H207.992V1.9H208.992ZM225.692 1.9H226.692V0.899998H225.692V1.9ZM225.692 79.2V80.2H226.692V79.2H225.692ZM205.992 79.2L205.127 79.702L205.416 80.2H205.992V79.2ZM176.792 28.9L177.657 28.3979L175.792 25.1856V28.9H176.792ZM176.792 79.2V80.2H177.792V79.2H176.792ZM161.092 79.2V15.6H159.092V79.2H161.092ZM160.692 14.8L156.692 11.8L155.492 13.4L159.492 16.4L160.692 14.8ZM157.092 12.6V1.9H155.092V12.6H157.092ZM156.092 2.9H179.492V0.899998H156.092V2.9ZM178.631 2.4089L208.131 52.3089L209.853 51.2911L180.353 1.39109L178.631 2.4089ZM209.992 51.8V1.9H207.992V51.8H209.992ZM208.992 2.9H225.692V0.899998H208.992V2.9ZM224.692 1.9V79.2H226.692V1.9H224.692ZM225.692 78.2H205.992V80.2H225.692V78.2ZM206.857 78.6979L177.657 28.3979L175.927 29.402L205.127 79.702L206.857 78.6979ZM175.792 28.9V79.2H177.792V28.9H175.792ZM176.792 78.2H160.092V80.2H176.792V78.2ZM258.154 79.2H257.154V80.2H258.154V79.2ZM258.154 15.9H259.154V14.9H258.154V15.9ZM234.954 15.9H233.954V16.9H234.954V15.9ZM234.954 1.9V0.899998H233.954V1.9H234.954ZM299.154 1.9H300.154V0.899998H299.154V1.9ZM299.154 15.9V16.9H300.154V15.9H299.154ZM275.954 15.9V14.9H274.954V15.9H275.954ZM275.954 79.2V80.2H276.954V79.2H275.954ZM259.154 79.2V15.9H257.154V79.2H259.154ZM258.154 14.9H234.954V16.9H258.154V14.9ZM235.954 15.9V1.9H233.954V15.9H235.954ZM234.954 2.9H299.154V0.899998H234.954V2.9ZM298.154 1.9V15.9H300.154V1.9H298.154ZM299.154 14.9H275.954V16.9H299.154V14.9ZM274.954 15.9V79.2H276.954V15.9H274.954ZM275.954 78.2H258.154V80.2H275.954V78.2ZM314.232 72.8L313.537 73.5192L314.232 72.8ZM362.932 72.8L363.627 73.5192L362.932 72.8ZM338.532 80C328.686 80 320.576 77.5386 314.927 72.0808L313.537 73.5192C319.688 79.4614 328.378 82 338.532 82V80ZM314.927 72.0808C309.292 66.6371 305.932 57.7452 305.932 44.6H303.932C303.932 58.0548 307.372 67.5629 313.537 73.5192L314.927 72.0808ZM305.932 44.6V36.6H303.932V44.6H305.932ZM305.932 36.6C305.932 23.4579 309.266 14.6604 314.895 9.13889C320.527 3.61398 328.63 1.2 338.532 1.2V-0.800003C328.334 -0.800003 319.637 1.68601 313.494 7.7111C307.348 13.7396 303.932 23.1421 303.932 36.6H305.932ZM338.532 1.2C348.344 1.2 356.472 3.4938 362.151 8.95813C367.824 14.4158 371.232 23.2085 371.232 36.6H373.232C373.232 22.8915 369.74 13.4842 363.538 7.51687C357.342 1.55619 348.62 -0.800003 338.532 -0.800003V1.2ZM371.232 36.6V44.6H373.232V36.6H371.232ZM371.232 44.6C371.232 57.7452 367.872 66.6371 362.237 72.0808L363.627 73.5192C369.792 67.5629 373.232 58.0548 373.232 44.6H371.232ZM362.237 72.0808C356.589 77.5371 348.381 80 338.532 80V82C348.683 82 357.475 79.4629 363.627 73.5192L362.237 72.0808ZM322.032 43.4C322.032 51.2999 323.521 57.1936 326.372 61.1359C329.261 65.1321 333.458 67 338.532 67V65C334.006 65 330.453 63.3679 327.992 59.9641C325.493 56.5064 324.032 51.1001 324.032 43.4H322.032ZM338.532 67C343.652 67 347.875 65.1347 350.779 61.1377C353.643 57.1946 355.132 51.2996 355.132 43.4H353.132C353.132 51.1004 351.671 56.5054 349.16 59.9623C346.689 63.3653 343.112 65 338.532 65V67ZM355.132 43.4V37.6H353.132V43.4H355.132ZM355.132 37.6C355.132 29.8566 353.72 24.0112 350.894 20.0789C348.026 16.088 343.799 14.2 338.532 14.2V16.2C343.266 16.2 346.838 17.862 349.27 21.2461C351.744 24.6888 353.132 30.0434 353.132 37.6H355.132ZM338.532 14.2C333.407 14.2 329.21 16.094 326.334 20.0771C323.497 24.0065 322.032 29.8497 322.032 37.6H324.032C324.032 30.0503 325.467 24.6935 327.955 21.2479C330.404 17.856 333.957 16.2 338.532 16.2V14.2ZM322.032 37.6V43.4H324.032V37.6H322.032ZM382.92 79.2H381.92V80.2H382.92V79.2ZM382.92 15.6H383.92V15.1L383.52 14.8L382.92 15.6ZM378.92 12.6H377.92V13.1L378.32 13.4L378.92 12.6ZM378.92 1.9V0.899998H377.92V1.9H378.92ZM432.12 48.9L431.693 47.9958L430.502 48.5582L431.364 49.5543L432.12 48.9ZM448.82 79.2V80.2H450.196L449.771 78.8913L448.82 79.2ZM430.12 79.2L429.169 79.5076L429.393 80.2H430.12V79.2ZM415.32 52.5L416.078 51.8469L415.756 51.4742L415.265 51.5015L415.32 52.5ZM400.62 52.6V51.6H399.62V52.6H400.62ZM400.62 79.2V80.2H401.62V79.2H400.62ZM400.62 39.2H399.62V40.2H400.62V39.2ZM400.62 15.7V14.7H399.62V15.7H400.62ZM383.92 79.2V15.6H381.92V79.2H383.92ZM383.52 14.8L379.52 11.8L378.32 13.4L382.32 16.4L383.52 14.8ZM379.92 12.6V1.9H377.92V12.6H379.92ZM378.92 2.9H407.72V0.899998H378.92V2.9ZM407.72 2.9C417.623 2.9 426.443 3.66154 432.777 7.02092C435.914 8.68515 438.43 10.9826 440.172 14.1519C441.918 17.3299 442.92 21.4478 442.92 26.8H444.92C444.92 21.2022 443.872 16.7326 441.925 13.1887C439.973 9.63611 437.151 7.07734 433.714 5.25408C426.897 1.63846 417.618 0.899998 407.72 0.899998V2.9ZM442.92 26.8V27.9H444.92V26.8H442.92ZM442.92 27.9C442.92 33.4148 441.798 37.6259 439.863 40.8475C437.931 44.0633 435.146 46.3654 431.693 47.9958L432.547 49.8042C436.295 48.0345 439.409 45.4867 441.578 41.8775C443.742 38.2741 444.92 33.6852 444.92 27.9H442.92ZM431.364 49.5543C438.965 58.3395 444.204 68.2172 447.869 79.5087L449.771 78.8913C446.036 67.3828 440.676 57.2605 432.877 48.2457L431.364 49.5543ZM448.82 78.2H430.12V80.2H448.82V78.2ZM431.072 78.8924C427.835 68.8785 423.073 59.9579 416.078 51.8469L414.563 53.1531C421.367 61.0421 426.006 69.7215 429.169 79.5076L431.072 78.8924ZM415.265 51.5015C413.498 51.5997 411.527 51.6 409.62 51.6V53.6C411.514 53.6 413.543 53.6003 415.376 53.4985L415.265 51.5015ZM409.62 51.6H400.62V53.6H409.62V51.6ZM399.62 52.6V79.2H401.62V52.6H399.62ZM400.62 78.2H382.92V80.2H400.62V78.2ZM400.62 40.2H409.02V38.2H400.62V40.2ZM409.02 40.2C414.985 40.2 419.517 39.5605 422.565 37.6469C425.737 35.655 427.12 32.4163 427.12 27.8H425.12C425.12 31.9837 423.903 34.445 421.501 35.9531C418.974 37.5395 414.955 38.2 409.02 38.2V40.2ZM427.12 27.8V26.7H425.12V27.8H427.12ZM427.12 26.7C427.12 22.8199 425.695 19.7306 422.586 17.6668C419.555 15.655 415.042 14.7 409.02 14.7V16.7C414.899 16.7 418.936 17.645 421.48 19.3332C423.945 20.9694 425.12 23.3801 425.12 26.7H427.12ZM409.02 14.7H400.62V16.7H409.02V14.7ZM399.62 15.7V39.2H401.62V15.7H399.62Z" fill="black" mask="url(#path-1-outside-1_2_172)" />
                    </svg>
                    <motion.div
                        className="absolute z-20 top-0 right-0 mt-[23px] mx-[51px] w-[57%] aspect-[452/273] border border-black rounded-[136px] overflow-hidden"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.4 }}
                        viewport={{ once: true, amount: 0.5 }}>
                        <img
                            loading="lazy"
                            src="https://s3-alpha-sig.figma.com/img/23c4/ef34/8727afc066a37d8b771f196e6dfdd4de?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PBk7JTquuogGHYXwa1HftlpqSzsaGjwfMwudTjZ7LjQLRKWt8bK2isZ2g79Uedoq~XdKhTXPv2eWv9RM1RqJzlYSLKV4DO3TO8EaSZC4XXWRfCPseQBJd-3KBrdrnhMszCO2n4ZeSYAxm8xxfO6JhK7nwWa1saWp~h36cja~mxArhn26VNbXgzI3lZRFF36hcpQV3H5W9taOkRUbWC8Aer2DaH2bSO0Ffzip-wuknOvhY5w8fhBHybG8tZbPmzXJ3goPIvlmS0QCI6nVYJteDPABmgIvZuXDCHv~4z68vNzDHZp~Fx~M~Lw~NoEpKJ0EfQ7gcFqc2Dz4Pq-t4mdN9g__"
                        />
                    </motion.div>
                    <motion.div
                        className="relative mt-[59px] mx-[51px] w-[69%]"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                        viewport={{ once: true, amount: 0.5 }}>
                        <div className="absolute z-10  top-0 left-0 py-[8px] px-[30px] bg-black rounded-t-[19px] text-[30px] text-[#ff9900] font-bold leading-normal text-center">
                            최재석님
                            <br />
                            AWS과정
                        </div>
                        <div className="flex-col mt-8 pt-[151px] pb-[100px] px-[33px] bg-black rounded-[19px]">
                            <div className="text-white text-[22px] leading-8 font-normal">이런 내용을 공유해요!</div>
                            <ul class="list-disc list-outside ml-6 mt-[9px] text-[#adadad] text-[20px] leading-[30px] font-normal">
                                <li>스타트업의 백엔드 개발자로서, <span className="text-white">서버 및 DB 아키텍쳐 설계와 API 개발 경험</span></li>
                                <li>동료 개발자들과 <span className="text-white">협업하기 좋은 유지보수성이 높은 코드를 설계</span>하고자 노력한 경험</li>
                            </ul>
                            <div className="mt-10 text-white text-[22px] leading-8 font-normal">멘토의 한마디</div>
                            <ul class="list-disc list-outside ml-6 mt-[9px] text-[#adadad] text-[20px] leading-[30px] font-normal">
                                <li>요즘 점점 취업문이 좁아지는 것 같지만, 포기하지 마시고 여러가지 방향으로 문을 두드리셨으면 좋겠습니다</li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
                <div className="flex flex-col items-end relative mt-[88px]">
                    <svg className="w-[57%] mx-[51px]" width="449" height="81" viewBox="0 0 449 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="path-1-outside-1_2_172" maskUnits="userSpaceOnUse" x="-1" y="-1" width="452" height="83" fill="black">
                            <rect fill="white" x="-1" y="-1" width="452" height="83" />
                            <path d="M4.62344 79.2V15.6L0.623438 12.6V1.9H22.6234L42.5234 38.9L62.6234 1.9H80.6234V79.2H63.9234V30.8C62.2234 34.5 61.0234 37.1 48.2234 60.2H36.9234C30.6234 48.9 27.1234 42.3 25.0234 38.2C23.4234 35.1 22.2234 32.7 21.3234 30.8V79.2H4.62344ZM94.8344 79.2V15.6L90.8344 12.6V1.9H147.434V15.9H112.734V32.8H145.234V46.5H112.734V65.2H147.434V79.2H94.8344ZM160.092 79.2V15.6L156.092 12.6V1.9H179.492L208.992 51.8V1.9H225.692V79.2H205.992L176.792 28.9V79.2H160.092ZM258.154 79.2V15.9H234.954V1.9H299.154V15.9H275.954V79.2H258.154ZM338.532 81C328.532 81 320.132 78.5 314.232 72.8C308.332 67.1 304.932 57.9 304.932 44.6V36.6C304.932 10 318.432 0.199996 338.532 0.199996C358.432 0.199996 372.232 9.5 372.232 36.6V44.6C372.232 57.9 368.832 67.1 362.932 72.8C357.032 78.5 348.532 81 338.532 81ZM323.032 43.4C323.032 59 328.932 66 338.532 66C348.232 66 354.132 59 354.132 43.4V37.6C354.132 22.3 348.532 15.2 338.532 15.2C328.832 15.2 323.032 22.3 323.032 37.6V43.4ZM382.92 79.2V15.6L378.92 12.6V1.9H407.72C427.52 1.9 443.92 4.9 443.92 26.8V27.9C443.92 39.2 439.32 45.5 432.12 48.9C439.82 57.8 445.12 67.8 448.82 79.2H430.12C426.92 69.3 422.22 60.5 415.32 52.5C413.52 52.6 411.52 52.6 409.62 52.6H400.62V79.2H382.92ZM400.62 39.2H409.02C420.92 39.2 426.12 36.6 426.12 27.8V26.7C426.12 19.5 420.92 15.7 409.02 15.7H400.62V39.2Z" />
                        </mask>
                        <path d="M4.62344 79.2H3.62344V80.2H4.62344V79.2ZM4.62344 15.6H5.62344V15.1L5.22344 14.8L4.62344 15.6ZM0.623438 12.6H-0.376562V13.1L0.0234382 13.4L0.623438 12.6ZM0.623438 1.9V0.899998H-0.376562V1.9H0.623438ZM22.6234 1.9L23.5041 1.42632L23.2211 0.899998H22.6234V1.9ZM42.5234 38.9L41.6427 39.3737L42.519 41.003L43.4021 39.3773L42.5234 38.9ZM62.6234 1.9V0.899998H62.0286L61.7447 1.42265L62.6234 1.9ZM80.6234 1.9H81.6234V0.899998H80.6234V1.9ZM80.6234 79.2V80.2H81.6234V79.2H80.6234ZM63.9234 79.2H62.9234V80.2H63.9234V79.2ZM63.9234 30.8H64.9234L63.0148 30.3825L63.9234 30.8ZM48.2234 60.2V61.2H48.8126L49.0981 60.6847L48.2234 60.2ZM36.9234 60.2L36.05 60.687L36.336 61.2H36.9234V60.2ZM25.0234 38.2L25.9135 37.7441L25.9121 37.7414L25.0234 38.2ZM21.3234 30.8L22.2272 30.3719L20.3234 30.8H21.3234ZM21.3234 79.2V80.2H22.3234V79.2H21.3234ZM5.62344 79.2V15.6H3.62344V79.2H5.62344ZM5.22344 14.8L1.22344 11.8L0.0234382 13.4L4.02344 16.4L5.22344 14.8ZM1.62344 12.6V1.9H-0.376562V12.6H1.62344ZM0.623438 2.9H22.6234V0.899998H0.623438V2.9ZM21.7427 2.37367L41.6427 39.3737L43.4041 38.4263L23.5041 1.42632L21.7427 2.37367ZM43.4021 39.3773L63.5022 2.37735L61.7447 1.42265L41.6447 38.4226L43.4021 39.3773ZM62.6234 2.9H80.6234V0.899998H62.6234V2.9ZM79.6234 1.9V79.2H81.6234V1.9H79.6234ZM80.6234 78.2H63.9234V80.2H80.6234V78.2ZM64.9234 79.2V30.8H62.9234V79.2H64.9234ZM63.0148 30.3825C61.3327 34.0434 60.1506 36.612 47.3487 59.7153L49.0981 60.6847C61.8963 37.588 63.1141 34.9566 64.8321 31.2175L63.0148 30.3825ZM48.2234 59.2H36.9234V61.2H48.2234V59.2ZM37.7969 59.713C31.5005 48.4196 28.0065 41.8304 25.9135 37.7441L24.1334 38.6559C26.2404 42.7696 29.7464 49.3804 36.05 60.687L37.7969 59.713ZM25.9121 37.7414C24.3144 34.6458 23.1202 32.2572 22.2272 30.3719L20.4197 31.2281C21.3267 33.1428 22.5325 35.5542 24.1348 38.6586L25.9121 37.7414ZM20.3234 30.8V79.2H22.3234V30.8H20.3234ZM21.3234 78.2H4.62344V80.2H21.3234V78.2ZM94.8344 79.2H93.8344V80.2H94.8344V79.2ZM94.8344 15.6H95.8344V15.1L95.4344 14.8L94.8344 15.6ZM90.8344 12.6H89.8344V13.1L90.2344 13.4L90.8344 12.6ZM90.8344 1.9V0.899998H89.8344V1.9H90.8344ZM147.434 1.9H148.434V0.899998H147.434V1.9ZM147.434 15.9V16.9H148.434V15.9H147.434ZM112.734 15.9V14.9H111.734V15.9H112.734ZM112.734 32.8H111.734V33.8H112.734V32.8ZM145.234 32.8H146.234V31.8H145.234V32.8ZM145.234 46.5V47.5H146.234V46.5H145.234ZM112.734 46.5V45.5H111.734V46.5H112.734ZM112.734 65.2H111.734V66.2H112.734V65.2ZM147.434 65.2H148.434V64.2H147.434V65.2ZM147.434 79.2V80.2H148.434V79.2H147.434ZM95.8344 79.2V15.6H93.8344V79.2H95.8344ZM95.4344 14.8L91.4344 11.8L90.2344 13.4L94.2344 16.4L95.4344 14.8ZM91.8344 12.6V1.9H89.8344V12.6H91.8344ZM90.8344 2.9H147.434V0.899998H90.8344V2.9ZM146.434 1.9V15.9H148.434V1.9H146.434ZM147.434 14.9H112.734V16.9H147.434V14.9ZM111.734 15.9V32.8H113.734V15.9H111.734ZM112.734 33.8H145.234V31.8H112.734V33.8ZM144.234 32.8V46.5H146.234V32.8H144.234ZM145.234 45.5H112.734V47.5H145.234V45.5ZM111.734 46.5V65.2H113.734V46.5H111.734ZM112.734 66.2H147.434V64.2H112.734V66.2ZM146.434 65.2V79.2H148.434V65.2H146.434ZM147.434 78.2H94.8344V80.2H147.434V78.2ZM160.092 79.2H159.092V80.2H160.092V79.2ZM160.092 15.6H161.092V15.1L160.692 14.8L160.092 15.6ZM156.092 12.6H155.092V13.1L155.492 13.4L156.092 12.6ZM156.092 1.9V0.899998H155.092V1.9H156.092ZM179.492 1.9L180.353 1.39109L180.063 0.899998H179.492V1.9ZM208.992 51.8L208.131 52.3089L209.992 55.4565V51.8H208.992ZM208.992 1.9V0.899998H207.992V1.9H208.992ZM225.692 1.9H226.692V0.899998H225.692V1.9ZM225.692 79.2V80.2H226.692V79.2H225.692ZM205.992 79.2L205.127 79.702L205.416 80.2H205.992V79.2ZM176.792 28.9L177.657 28.3979L175.792 25.1856V28.9H176.792ZM176.792 79.2V80.2H177.792V79.2H176.792ZM161.092 79.2V15.6H159.092V79.2H161.092ZM160.692 14.8L156.692 11.8L155.492 13.4L159.492 16.4L160.692 14.8ZM157.092 12.6V1.9H155.092V12.6H157.092ZM156.092 2.9H179.492V0.899998H156.092V2.9ZM178.631 2.4089L208.131 52.3089L209.853 51.2911L180.353 1.39109L178.631 2.4089ZM209.992 51.8V1.9H207.992V51.8H209.992ZM208.992 2.9H225.692V0.899998H208.992V2.9ZM224.692 1.9V79.2H226.692V1.9H224.692ZM225.692 78.2H205.992V80.2H225.692V78.2ZM206.857 78.6979L177.657 28.3979L175.927 29.402L205.127 79.702L206.857 78.6979ZM175.792 28.9V79.2H177.792V28.9H175.792ZM176.792 78.2H160.092V80.2H176.792V78.2ZM258.154 79.2H257.154V80.2H258.154V79.2ZM258.154 15.9H259.154V14.9H258.154V15.9ZM234.954 15.9H233.954V16.9H234.954V15.9ZM234.954 1.9V0.899998H233.954V1.9H234.954ZM299.154 1.9H300.154V0.899998H299.154V1.9ZM299.154 15.9V16.9H300.154V15.9H299.154ZM275.954 15.9V14.9H274.954V15.9H275.954ZM275.954 79.2V80.2H276.954V79.2H275.954ZM259.154 79.2V15.9H257.154V79.2H259.154ZM258.154 14.9H234.954V16.9H258.154V14.9ZM235.954 15.9V1.9H233.954V15.9H235.954ZM234.954 2.9H299.154V0.899998H234.954V2.9ZM298.154 1.9V15.9H300.154V1.9H298.154ZM299.154 14.9H275.954V16.9H299.154V14.9ZM274.954 15.9V79.2H276.954V15.9H274.954ZM275.954 78.2H258.154V80.2H275.954V78.2ZM314.232 72.8L313.537 73.5192L314.232 72.8ZM362.932 72.8L363.627 73.5192L362.932 72.8ZM338.532 80C328.686 80 320.576 77.5386 314.927 72.0808L313.537 73.5192C319.688 79.4614 328.378 82 338.532 82V80ZM314.927 72.0808C309.292 66.6371 305.932 57.7452 305.932 44.6H303.932C303.932 58.0548 307.372 67.5629 313.537 73.5192L314.927 72.0808ZM305.932 44.6V36.6H303.932V44.6H305.932ZM305.932 36.6C305.932 23.4579 309.266 14.6604 314.895 9.13889C320.527 3.61398 328.63 1.2 338.532 1.2V-0.800003C328.334 -0.800003 319.637 1.68601 313.494 7.7111C307.348 13.7396 303.932 23.1421 303.932 36.6H305.932ZM338.532 1.2C348.344 1.2 356.472 3.4938 362.151 8.95813C367.824 14.4158 371.232 23.2085 371.232 36.6H373.232C373.232 22.8915 369.74 13.4842 363.538 7.51687C357.342 1.55619 348.62 -0.800003 338.532 -0.800003V1.2ZM371.232 36.6V44.6H373.232V36.6H371.232ZM371.232 44.6C371.232 57.7452 367.872 66.6371 362.237 72.0808L363.627 73.5192C369.792 67.5629 373.232 58.0548 373.232 44.6H371.232ZM362.237 72.0808C356.589 77.5371 348.381 80 338.532 80V82C348.683 82 357.475 79.4629 363.627 73.5192L362.237 72.0808ZM322.032 43.4C322.032 51.2999 323.521 57.1936 326.372 61.1359C329.261 65.1321 333.458 67 338.532 67V65C334.006 65 330.453 63.3679 327.992 59.9641C325.493 56.5064 324.032 51.1001 324.032 43.4H322.032ZM338.532 67C343.652 67 347.875 65.1347 350.779 61.1377C353.643 57.1946 355.132 51.2996 355.132 43.4H353.132C353.132 51.1004 351.671 56.5054 349.16 59.9623C346.689 63.3653 343.112 65 338.532 65V67ZM355.132 43.4V37.6H353.132V43.4H355.132ZM355.132 37.6C355.132 29.8566 353.72 24.0112 350.894 20.0789C348.026 16.088 343.799 14.2 338.532 14.2V16.2C343.266 16.2 346.838 17.862 349.27 21.2461C351.744 24.6888 353.132 30.0434 353.132 37.6H355.132ZM338.532 14.2C333.407 14.2 329.21 16.094 326.334 20.0771C323.497 24.0065 322.032 29.8497 322.032 37.6H324.032C324.032 30.0503 325.467 24.6935 327.955 21.2479C330.404 17.856 333.957 16.2 338.532 16.2V14.2ZM322.032 37.6V43.4H324.032V37.6H322.032ZM382.92 79.2H381.92V80.2H382.92V79.2ZM382.92 15.6H383.92V15.1L383.52 14.8L382.92 15.6ZM378.92 12.6H377.92V13.1L378.32 13.4L378.92 12.6ZM378.92 1.9V0.899998H377.92V1.9H378.92ZM432.12 48.9L431.693 47.9958L430.502 48.5582L431.364 49.5543L432.12 48.9ZM448.82 79.2V80.2H450.196L449.771 78.8913L448.82 79.2ZM430.12 79.2L429.169 79.5076L429.393 80.2H430.12V79.2ZM415.32 52.5L416.078 51.8469L415.756 51.4742L415.265 51.5015L415.32 52.5ZM400.62 52.6V51.6H399.62V52.6H400.62ZM400.62 79.2V80.2H401.62V79.2H400.62ZM400.62 39.2H399.62V40.2H400.62V39.2ZM400.62 15.7V14.7H399.62V15.7H400.62ZM383.92 79.2V15.6H381.92V79.2H383.92ZM383.52 14.8L379.52 11.8L378.32 13.4L382.32 16.4L383.52 14.8ZM379.92 12.6V1.9H377.92V12.6H379.92ZM378.92 2.9H407.72V0.899998H378.92V2.9ZM407.72 2.9C417.623 2.9 426.443 3.66154 432.777 7.02092C435.914 8.68515 438.43 10.9826 440.172 14.1519C441.918 17.3299 442.92 21.4478 442.92 26.8H444.92C444.92 21.2022 443.872 16.7326 441.925 13.1887C439.973 9.63611 437.151 7.07734 433.714 5.25408C426.897 1.63846 417.618 0.899998 407.72 0.899998V2.9ZM442.92 26.8V27.9H444.92V26.8H442.92ZM442.92 27.9C442.92 33.4148 441.798 37.6259 439.863 40.8475C437.931 44.0633 435.146 46.3654 431.693 47.9958L432.547 49.8042C436.295 48.0345 439.409 45.4867 441.578 41.8775C443.742 38.2741 444.92 33.6852 444.92 27.9H442.92ZM431.364 49.5543C438.965 58.3395 444.204 68.2172 447.869 79.5087L449.771 78.8913C446.036 67.3828 440.676 57.2605 432.877 48.2457L431.364 49.5543ZM448.82 78.2H430.12V80.2H448.82V78.2ZM431.072 78.8924C427.835 68.8785 423.073 59.9579 416.078 51.8469L414.563 53.1531C421.367 61.0421 426.006 69.7215 429.169 79.5076L431.072 78.8924ZM415.265 51.5015C413.498 51.5997 411.527 51.6 409.62 51.6V53.6C411.514 53.6 413.543 53.6003 415.376 53.4985L415.265 51.5015ZM409.62 51.6H400.62V53.6H409.62V51.6ZM399.62 52.6V79.2H401.62V52.6H399.62ZM400.62 78.2H382.92V80.2H400.62V78.2ZM400.62 40.2H409.02V38.2H400.62V40.2ZM409.02 40.2C414.985 40.2 419.517 39.5605 422.565 37.6469C425.737 35.655 427.12 32.4163 427.12 27.8H425.12C425.12 31.9837 423.903 34.445 421.501 35.9531C418.974 37.5395 414.955 38.2 409.02 38.2V40.2ZM427.12 27.8V26.7H425.12V27.8H427.12ZM427.12 26.7C427.12 22.8199 425.695 19.7306 422.586 17.6668C419.555 15.655 415.042 14.7 409.02 14.7V16.7C414.899 16.7 418.936 17.645 421.48 19.3332C423.945 20.9694 425.12 23.3801 425.12 26.7H427.12ZM409.02 14.7H400.62V16.7H409.02V14.7ZM399.62 15.7V39.2H401.62V15.7H399.62Z" fill="black" mask="url(#path-1-outside-1_2_172)" />
                    </svg>
                    <motion.div
                        className="absolute z-20 top-0 left-0 mt-[23px] mx-[51px] w-[57%] aspect-[452/273] border border-black rounded-[136px] overflow-hidden"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.4 }}
                        viewport={{ once: true, amount: 0.5 }}>
                        <img
                            loading="lazy"
                            src="https://s3-alpha-sig.figma.com/img/56ee/67eb/b103b015a773a570deecba07aab66e5e?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lvKvMRWCAHQ39kjugl-g~6m808e4QxmJvUXE35EyYEWk2qc88~PiwwQdyWh~MwHnORvHEjWivXMvOP1V2Jx2JALeQkhtqBNYL66CewFxEyKOS7TA~Qum56O-fCSThTjX5Ge57VzVMLNfPjKsuCeyPBJ-MKoCwNOIkgdbumN1LQB4P32TdonU23kJetcrniIAFdyc4gHOtYaSpL1dewSAVWVlINfpEclq78Te5I-ZUIRvlR-f6Ygg1tzgbNKGsNVbunhpMYdm5kWf2nIhQs5ZtGV25ich9HS3liFKb7Juj74plmn4DJqOAkBqOy9ZXAVTwVdlBuUTvK2rdUODc5gHkQ__"
                        />
                    </motion.div>
                    <motion.div
                        className="relative mt-[59px] mx-[51px] w-[69%]"
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                        viewport={{ once: true, amount: 0.5 }}>
                        <div className="absolute z-10  top-0 right-0 py-[8px] px-[30px] bg-black rounded-t-[19px] text-[30px] text-[#ff9900] font-bold leading-normal text-center">
                            최재석님
                            <br />
                            AWS과정
                        </div>
                        <div className="flex-col mt-8 pt-[161px] pb-[100px] px-[33px] bg-black rounded-[19px]">
                            <div className="text-white text-[22px] leading-8 font-normal">멘토의 한마디</div>
                            <ul class="list-disc list-outside ml-6 mt-[9px] text-[#adadad] text-[20px] leading-[30px] font-normal">
                                <li>세번의 프로젝트를 <span className="text-white">효율적으로 이끈 리더십</span> 플랫폼 개발 프로젝트를 진행하며 <span className="text-white">끊임없이 고민하고 부딪혀온 경험</span></li>
                            </ul>
                            <div className="mt-10 text-white text-[22px] leading-8 font-normal">멘토의 한마디</div>
                            <ul class="list-disc list-outside ml-6 mt-[9px] text-[#adadad] text-[20px] leading-[30px] font-normal">
                                <li>프로젝트 내용을 잘 정리하고 <span className="text-white">본인의 기술 스택을 잘 보완 하는 것이 중요</span>하다고 생각해요</li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
                <motion.div
                    className="flex grow-0 justify-center mt-[100px]"
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true, amount: 0.5 }}>
                    <div className="py-4 px-16 flex items-center bg-black rounded-full">
                        <div className="mr-[58px] text-[#ff9900] text-[30px] font-normal leading-normal">멘토의 인터뷰 보러가기</div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="27" viewBox="0 0 23 27" fill="none">
                            <path d="M23 13.5L0.500001 26.0574L0.500002 0.942631L23 13.5Z" fill="#FF9900" />
                        </svg>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}