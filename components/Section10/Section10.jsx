"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import phoneBG from "../../public/images/phoneBG.svg"
import ItemReview from "./ItemReview";

export default function Section10() {
    return (
        <div className="main mt-[330px]">
            <motion.div
                className="text-white text-center text-[50px] font-bold leading-normal"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true, amount: 0.5 }}>
                30여년<br />훈련생분들의 <span className="text-[#ff9900]">솔직한</span> 후기
            </motion.div>
            <div className="relative mt-16">
                <Image className="w-full" src={phoneBG} />
                <div className="w-full h-full absolute top-0 flex justify-center">
                    <div className="w-[88%] h-[81%] absolute top-[7%] flex flex-col divide-y divide-white">
                        <div className="grow sm:py-[50px] py-5 overflow-hidden">
                            <ItemReview
                                index={0}
                                avatar={"https://s3-alpha-sig.figma.com/img/e40b/73d5/0305d93d87922e991ab3f894c5893f63?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UPPZEKzG7rk~HZabDuyjYvQ5DI9Gfa0LcyhghdQhmmDJcRCU7H960tzX1Sj9WWJEhJRY7ZwYAeowPNl9DGd7V2Uumpozp225X9xVlq9W2i3CaWU~H8cEGo4n0d~14zg0dytvvJ464QKUqMG~~MOmDkUJsNj3M1qjwzL78Clk2wfjD9ZGbBsbvCooehr7ykBKjv3TXEnWstww~tQE1Q3KPcilazHl~zrmfxvcTcMncLuhrHfJN8SCy36KrfEFL-9S-1m2kmjuaxeK-x8KwW~0y3j3W7SVJP8IxVNnlElU-eFvAXnodng-MTsID0jNHT2YY0WatlhIR99fBYFTrrGBEg__"}
                                accName={"김OO(자바205기)"}
                                comment={`“커리큘럼이 조금 빡빡하긴 하지만 좋은 강사님을 만나서 진행하는데에 많은 도움이 되었습니다. 직접 실습을 통해 프로그래밍을 배우는 커리큘럼이 좋았습니다. 과제를 통해 참여도를 끌어올렸던 것이 많은 도움이 된 것 같아요 6개월이 길다고 생각했는데 진짜 금방지나갔고, 좋은 강사님과 함께 잘 수료했습니다.”`} />
                            <ItemReview
                                index={1}
                                avatar={"https://s3-alpha-sig.figma.com/img/019d/e54d/330f124be8021171f12aeee14634858c?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BI68xENN6-J6mcNzL36LLGgE3Xiw16ANkKeACQCDhbK1y7MJpfQeizUWtta759W0XWpk6bE7xqEjnZSDZTudFQ8NJvgSYzzGgDghmMbI6CGfwypjmx6752UxVmwgM2w6qb3YsweFy3rA3d~C6bNEiBKUin3ydApdMuBEwx--iyCpuBtQAIQ~T1jcMtCKjJfjLKPGmItVfzvC5P8eRUhe3T-zjzsKrdmowsfu9CmDSqq1kBs526AGRUIu9Q7hdpWVd0-UIgmmpQ9tB1T7qcGPBPmROGhzFo9AK3Bq9h9iuN9rHYqeDISUgRuGT3ti~LM4zH928tUECgOQiOn1Olz-Hg__"}
                                accName={"최OO(자바180기)"}
                                comment={"코딩에 대한 기초 지식조차 없었는데 이 과정을 수료하기까지 정말 많은 부분을 배울 수 있었고 학원도 만족스러웠습니다. 전문성있는 강사님의 가르침 아래, 팀원들끼리 서로 격려하면서 좋은 분위기 속에서 공부할 수 있었습니다. 비전공자라 생소한 용어들이 많이 나와 처음엔 수업 따라가기 쉽지 않았지만, 실습과 프로젝트를 통해 직접 코딩해보면서 많이 배울 수 있었습니다."} />
                            <ItemReview
                                index={2}
                                avatar={"https://s3-alpha-sig.figma.com/img/02fe/e43e/66f43b7b56e2df454aea431545272047?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YDJozW6JsLRaDEBzOCnfdpIAUe2YmLF7dTCfApbVmWOuhfGfTuVbbRD6VSz96chtkQJLov1QDyXypu5J2Za9mLFIhUxlgb9y-irC4amhWSCc4VLWzv6mxKJqUXJ~1YGW2k9oAFcltlED6SXIdQU1XXTZP4t-IY4Zl0bwpyEegYkyzOyFQ4vNZut4avFYEcKXyX0ZTeTwza9a5D0bDNU2AmIW2WCIZMCSSAIvywJPLJlQ2mKr5all9Ob2gt8EDEf~Odd4lnCsaynXg85kxeY85k2~iCy0cjfkM~9leWWI30pS668pNHwt7CVAMnEBCR2A96GrV213J1pLITX6OChegg__"}
                                accName={"박OO(자바205기)"}
                                comment={"김영진 강사님께서 잘 이끌어주셔서 많이 배웠습니다. 비전공자라 수업내용을 따라가는데 어려움이 없진 않았지만, 궁금한 부분을 세심하게 봐주셔서 실력향상에 많은 도움이 되었습니다. 정규 수업시간 외에 실습이 많아서 좋았고, 마지막 프로젝트 하면서 확실히 실력이 확 늘었습니다."} />
                            <ItemReview
                                index={3}
                                avatar={"https://s3-alpha-sig.figma.com/img/b0bb/eaba/955248e85796b284093e541050ca2a91?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FM9A0miLnAlmEU6yivSMAw309SvXz2LvGI2o5xYnh064IFBWQ5MxbZC44DYhYCf5mxt0szRKUNkmk1Nr~lS4r4aEsc-bgQ7hWd5Mqpg0VLlSM3Yre8oP0AEuflGSjKiLEMgOabXtYj6kJO-8c4y0z31A5Env-zqvhY1jr6xcEKesjgXy4bsgT0cByXpnMDAxolO5-KIXOMXbseBiRy0RnWcFiitj62cPxdsHWECigXrhuZ-7hfKNxyASUvSR1HomaGxv3KcufzfnYpsTcTudMgmuvLH-hul5FSxCUL9YWflFC2kgqTjWZ4RwutMLTdfxVhOswnavjX~I51DBfziKzQ__"}
                                accName={"장OO(자바180기)"}
                                comment={"훈련과정을 진행하면서 만족스러웠던 부분은 유영진 강사님의 수업을 배우면서 과정에 필요한 부분들을 배우고, 활용할 수 있었고, 모르는 부분의 질문들에 대해 친절히 알려주셨던 부분들이 좋았고, 특히 혹시나 놓칠 수 있는 내용들은 매 수업 영상 녹화를 해주시고 공유해주셔서 수업 이후에 영상들을 보며 배울 수 있어서 좋았습니다. 매니저 분들도 행정적인 부분에서 서포트를 적극적으로 해주셔서, 어려움 없이 수료할 수 있었습니다."} />
                        </div>
                        <div className="flex items-center pt-[30px] sm:px-8 px-5">
                            <div className="w-[8%] aspect-square relative sm:mr-9 mr-5">
                                <div className="w-full h-[2px] bg-white absolute top-1/2" />
                                <div className="w-[2px] h-full bg-white absolute left-1/2" />
                            </div>
                            <div className="grow flex justify-end bg-[#FFFFFF1A] border border-white rounded-full">
                                <div className="text-black text-[22px] font-normal leading-normal sm:py-6 py-4 sm:px-11 px-8 bg-white rounded-full">전송</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-full absolute top-0 bg-gradient-to-b from-80% from-transparent to-[98%] to-black" />
            </div>
        </div>
    );
}