"use client";

import { motion } from "framer-motion";

export default function Section11() {
    return (
        <div className="main mt-[330px] flex flex-col">
            <div className="text-white text-center text-[50px] font-bold leading-normal">수료가 끝이 아닌<br /><span className="text-[#ff9900]">시작</span>이 될 수 있도록</div>
            <div className="mt-[49px] flex justify-around items-end">
                <img
                    loading="lazy"
                    src="https://s3-alpha-sig.figma.com/img/c6a2/3bfe/232d8bbfd4809f19b5ff517a3bb15ab6?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GlxKAp6eBOegbIO2xg2WGBVrqUAfJfkWRj9A56~VbF1uH5O87fA5zx58-S5mg4GoyzGENCnNMefhGBNaFR-NcpuaDBagbaXJZ~SOSGfuN0o93uTcXa1ljTO0sjMydMBMFSfMcvJ9b7kYyciJuF5R3fxVz4PfOGFwbtGxXzc2Cbex6E6tFU6BcJWejoZ3X-7oZDXWSuNWKovA2gvyozx2i7NgEHi8-SNGqukLFIpOKdPGELj6hc3t8eq8f9uw40l3fqCOOyT4FMGzvxQyniuvPd4O1Q0ngQd6fGW8g2t1uBbIHjYMNHphJQqJPuVAilOxjQgG7VcobGZeeQ0WGfm9Cg__"
                    className="w-[42%] aspect-square object-cover"
                />
                <motion.div
                    className="ml-5 text-[#adadad] text-[25px] font-normal leading-[35px]"
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true, amount: 0.5 }}>
                    30여 년 동안<br /><span className="text-white">개발자 양성</span>을 위해<br />지금까지 달려왔습니다.
                </motion.div>
            </div>
            <div className="mt-[55px] flex justify-around items-end">
                <motion.div
                    className="mr-5 text-white text-[25px] font-normal leading-[35px]"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true, amount: 0.5 }}>
                    네이버클라우드 파트너사,<br />일본 IT 기업 채용연계<span className="text-[#adadad]">를<br />시작으로</span>
                </motion.div>
                <img
                    loading="lazy"
                    src="https://s3-alpha-sig.figma.com/img/2ae2/b41e/dd80aa083d75d663a4c597617c4cfd33?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NJ6zAUflTNQRodY4nb0IUVJaO08YnVU262sbSSY8oQoqSxAuD47BRvIDMkLLKV~QmlxbrWgmYRRWSwB6fX5EdHdh7BUnP0a0AQAYHnRnck6nF~2g33dABfsD9dWpicjjuNdrP6t4wCm1goLnv3QanYvIKId0uvUAqu8PeqrSbxnDyE67tKCecs8BPbWtjpKOrOKyq2lkTZL0vLuVzhTYiaItlTUf7MrUjB4mYrLgDkQ9CIMmObE4PUDUqhlbhmU2IS8vPlA9wIzmKdGahUM0np0YTluLSj1Ug41NqVQk7g6Aw4Lhv8jS2Hlo9F9OsxqJZxL93N88mKdDMFeOl0cW4Q__"
                    className="w-[42%] aspect-square object-cover"
                />
            </div>
            <div className="mt-[55px] flex justify-around items-end">
                <img
                    loading="lazy"
                    src="https://s3-alpha-sig.figma.com/img/3c4d/c3b6/809d2d88c066bdb150d856f3ba62874c?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lcIitWB95iE-mxFtsBFfxrijmxdKlhjrN3f02i7TtwPqK8dzpRNMrG228UB9MKICU9nqHajtCsbyOgXW-Bp5mTYdxXGBm-Efn4SaHy87G5Q4b3MYK4LFbOaBTxzvACXDrXi~e6Q3qpfoyh2ZSch-4h4a7TKcolgPdVQbzlS--O7cqMmHE42An4863bNXeaJLUhQvAaNJlTXk1D9BJcrLtonK8Hib8XUeAjvVdejdsvJFQxPAEZi6zkOKekRCQjC943md-wFIwGuNMf89kpx6GU6kVksShKIBrmiPqkhFNN~Dq5BC~5gCLEa3gMtnK2Ie8JVRqpYDyDsuDgSsFpYwEg__"
                    className="w-[42%] aspect-square object-cover"
                />
                <motion.div
                    className="ml-5 text-[#adadad] text-[25px] font-normal leading-[35px]"
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true, amount: 0.5 }}>
                    소통의 장을 마련하고자<br /><span className="text-white">현업 개발자분들과 멘토링,<br />특강</span>을 진행하고 있습니다.
                </motion.div>
            </div>
            <div className="mt-[55px] flex justify-around items-end">
                <motion.div
                    className="mr-5 text-[#adadad] text-[25px] font-normal leading-[35px]"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true, amount: 0.5 }}>
                    수료가 끝이 아닌<br /><span className="text-white">새로운 시작</span>이 될 수 있도록<br />ncamp가 항상 노력하겠습니다.
                </motion.div>
                <img
                    loading="lazy"
                    src="https://s3-alpha-sig.figma.com/img/f414/a53b/ffc1034dcbc9dcf9327e75737d1da111?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OtWE6pOzFUppJh0uici~oG8O3K9JGn1Y8mjT2G3tEzi9i-9JCMRmH7qK5V27fWkPSr-FP0SesDmM-z8rjp4IspkEwRNA5ohXUegkeP43s-BsCPGYDDGzOG-ljZd933P2pT7HT7obIkmnIA-OP82XwohMkEzkE6Z3nwbLCZAGU-ZsC-U-n6ET2yOs69ANgWx-ysdTWbimN8RFN9MZ1jheqKqDWF3LGWQFqrTx-k9J6TqifMav1f~H1Yw3~pui8fLkpVrHdloUkydhgz93dC4-HmMcdx8lzqYHiHIC-8INC-ZXcMAAgjDK~IrD-ZFSF8uBsOZWnD8~BI9HZXztZptxqg__"
                    className="w-[42%] aspect-square object-cover"
                />
            </div>
            <div className="flex items-center justify-center pt-[154px] pb-[169px]">
                <svg className="" xmlns="http://www.w3.org/2000/svg" width="16" height="364" viewBox="0 0 16 364" fill="none">
                    <path d="M7.29288 363.707C7.6834 364.098 8.31657 364.098 8.70709 363.707L15.0711 357.343C15.4616 356.953 15.4616 356.319 15.0711 355.929C14.6805 355.538 14.0474 355.538 13.6568 355.929L7.99998 361.586L2.34313 355.929C1.95261 355.538 1.31944 355.538 0.928917 355.929C0.538392 356.319 0.538392 356.953 0.928917 357.343L7.29288 363.707ZM7 -4.37114e-08L6.99998 363L8.99998 363L9 4.37114e-08L7 -4.37114e-08Z" fill="white" />
                </svg>
            </div>
        </div>
    );
}