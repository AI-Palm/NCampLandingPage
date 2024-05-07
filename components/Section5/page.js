import React from 'react'
import Image from 'next/image'
import AwsLogo2 from "@/public/icons/aws-logo-2.png"
import DeviconJava from "@/public/icons/devicon_java.png"
import SqlIcon from "@/public/icons/sql-icon.png"
import SpringIcon from "@/public/icons/spring-icon.png"
import TensorflowIcon from "@/public/icons/tensorflow-icon.png"


const Section5 = () => {
  return (
    <>  
    
        <div className="bg-black  flex flex-col justify-center  " >
            {/* AWS Banner */}
            <div className='bg-orange-400 w-full h-auto sm:h-96   flex flex-col justify-center items-center'>
                <Image src={AwsLogo2} className="w-auto sm:w-40 h-auto sm:my-0 my-5  " alt="AWS Logo" />
                <h1 className="text-xl lg:text-4xl md:text-4xl text-white font-extrabold  mt-8 mb-4 text-left">
                    AWS캠프 커리큘럼
                </h1>
            </div>

            {/* Part1 */}
            <div className='flex flex-col  justify-center items-center  '>
                <h1 className="text-xl lg:text-4xl md:text-4xl text-white text-center font-extrabold  mt-8 mb-4 ">
                    ncamp(비트캠프 강남센터)의 <br />
                    30여년 노하우를 6개월에 담았습니다.
                </h1>

                <div className='flex flex-row    w-auto lg:w-2/5 h-16 rounded-3xl border-y  border-r-2 border-white mt-20 mb-4'>
                    <div className='bg-white flex items-center rounded-3xl   border-l-4 border-white  md:px-14 px-4  md:mr-10 mr-4 z-10'>
                        <h2 className='text-black text-xs lg:text-xl md:text-lg'>섹션1</h2>
                    </div>
                    <div className='flex items-center'>
                        <h2 className='text-white text-sm lg:text-xl md:text-lg'>개발의 기초는 백엔드부터 : 백엔드 웹 프로그래밍</h2>
                    </div>
                </div>

                <div className="flex flex-col  mt-5">
                        <div className='flex flex-col md:flex-row justify-between'>
                            <div className=" w-auto h-auto bg-gray-800 border-2 border-white rounded-3xl p-4 m-4 text-white flex flex-col sm:w-auto md:w-1/2 lg:w-1/2 lg:h-80 md:h-80 "  >
                                <h1 className="text-sm lg:text-base md:text-sm text-lime-500 mt-2  sm:mt-6   mb-4 text-left">
                                        1. 자바 프로그래밍
                                </h1>
                                <div className='flex flex-col md:flex-row justify-center md:items-start items-center'>
                                    <Image src={DeviconJava} className="bg-white ml-2 w-auto md:w-1/3 h-28 sm:h-32 p-6 sm:p-4 " alt="DeviconJava Logo" />
                                    <ul className="md:ml-8 mt-5 md:mt-0 list-disc text-xs lg:text-base md:text-base text-white">
                                        <li>기초 자바 프로그램 입문(문법)</li>
                                        <li>객체지향 개념과 자바 프로그래밍</li>
                                        <li>JDK 유용한 클래스 살펴보기</li>
                                        <li>자바 프로그램 디버깅 / 예외처리</li>
                                        <li>자바와 자료 구조</li>
                                        <li>컬렉션 API 사용법</li>

                                    </ul>
                                </div>
                            </div>

                            <div className=" w-auto h-auto bg-gray-800 border-2 border-white rounded-3xl p-4 m-4 text-white flex flex-col sm:w-auto md:w-1/2 lg:w-1/2 lg:h-80 md:h-80 "  >
                                <h1 className="text-sm lg:text-base md:text-base text-lime-500 mt-2  sm:mt-6 mb-4 text-left">
                                    2. 데이터베이스 및 네트워크, 스레드 프로그래밍                                
                                </h1>
                                <div className='flex flex-col md:flex-row justify-center md :items-start  items-center'>
                                    <Image src={SqlIcon} className="bg-white ml-2 w-auto h-28 sm:h-32 p-6 sm:p-4     " alt="SqlIcon Logo" />
                                    <ul className="md:ml-8 mt-5 md:mt-0 list-disc text-xs lg:text-base md:text-base text-white">
                                        <li>TCP/UDP, HTTP 통신</li>
                                        <li>스레드 사용법</li>
                                        <li>MySQL DBMS 설치 및 설정</li>
                                        <li>SQL 문법</li>
                                        <li>JDBC를 이용한 자바 기반 CRUD학습</li>
                                        <li>DataSource 적용</li>

                                    </ul>
                                </div>
                            </div>

                            
                        
                           
                        </div>

                        <div className='flex flex-col md:flex-row justify-between'>                      
                            <div className=" w-auto h-auto bg-gray-800 border-2 border-white rounded-3xl p-4 m-4 text-white flex flex-col sm:w-auto md:w-1/2 lg:w-1/2 lg:h-80 md:h-80 "  >
                                <h1 className="text-sm lg:text-base md:text-sm text-lime-500 mt-2  sm:mt-6   mb-4 text-left">
                                    3. 스프링 데이터
                                </h1>
                                <div className='flex flex-col md:flex-row justify-center md:items-start items-center'>
                                    <Image src={SpringIcon} className="bg-white ml-2 w-auto md:w-1/3 h-28 sm:h-32 p-6 sm:p-4 " alt="DeviconJava Logo" />
                                    <ul className="md:ml-8 mt-5 md:mt-0 list-disc text-xs lg:text-base md:text-base text-white">
                                        <li>클라우드 환경에서 ML모델 개발 실습</li>
                                        <li>Perceptron, Convolution, <br />
                                        Neural Network,<br/>
                                        Recurrent Neural Network
                                        </li>
                                        <li>Reinforcement learning<br/>
                                        Generative Adversarial Network</li>
                                      

                                    </ul>
                                </div>
                            </div>

                            <div className=" w-auto h-auto bg-gray-800 border-2 border-white rounded-3xl p-4 m-4 text-white flex flex-col sm:w-auto md:w-1/2 lg:w-1/2 lg:h-80 md:h-80 "  >
                                <h1 className="text-sm lg:text-base md:text-base text-lime-500 mt-2  sm:mt-6 mb-4 text-left">
                                    4. 스프링 시큐리티                                
                                </h1>
                                <div className='flex flex-col md:flex-row justify-center md :items-start  items-center'>
                                    <Image src={TensorflowIcon} className="bg-white ml-2 w-auto h-28 sm:h-32 p-6 sm:p-4     " alt="SqlIcon Logo" />
                                    <ul className="md:ml-8 mt-5 md:mt-0 list-disc text-xs lg:text-base md:text-base text-white">
                                        <li>TensorFlow server,<br/> TensorFlow Cluster 사용</li>
                                        <li>클라우드 기반 서비스 배포<br/> 및 유지보수</li>
                                        <li>Simulink Verification <br/> & Validation test</li>

                                    </ul>
                                </div>
                            </div>
                        
                            
                        </div>

                </div>

                    
            </div>     
            

            {/* Part2 */}
            <div className='flex flex-col  justify-center items-center mt-10 '>
                <div className='flex flex-row    w-auto lg:w-2/5 h-16 rounded-3xl border-y  border-r-2 border-white mt-20 mb-4'>
                    <div className='bg-white flex items-center rounded-3xl   border-l-4 border-white  md:px-14 px-4  md:mr-10 mr-4 z-10'>
                        <h2 className='text-black text-xs lg:text-xl md:text-lg'>섹션2</h2>
                    </div>
                    <div className='flex items-center'>
                        <h2 className='text-white text-sm lg:text-xl md:text-lg'>이제 꾸며볼까요? : 프론트 웹 프로그래밍 </h2>
                    </div>
                </div>

                <div className="flex flex-col  mt-5">
                        <div className='flex flex-col md:flex-row justify-between'>
                            <div className=" w-auto h-auto bg-gray-800 border-2 border-white rounded-3xl p-4 m-4 text-white flex flex-col sm:w-auto md:w-1/2 lg:w-1/2 lg:h-80 md:h-80 "  >
                                <h1 className="text-sm lg:text-base md:text-sm text-lime-500 mt-2  sm:mt-6   mb-4 text-left">
                                    1. CSS                                
                                </h1>
                                <div className='flex flex-col md:flex-row justify-center md:items-start items-center'>
                                    <Image src={DeviconJava} className="bg-white ml-2 w-auto md:w-1/3 h-28 sm:h-32 p-6 sm:p-4 " alt="DeviconJava Logo" />
                                    <ul className="md:ml-8 mt-5 md:mt-0 list-disc text-xs lg:text-base md:text-base text-white">
                                        <li>JDK 설치 및 설정</li>
                                        <li>자료형과 리터럴, 변수, 배열, <br/>연산자 조건문, 반복문</li>
                                        <li>클래스, 스태틱 멤버, <br/> 인스턴스 멤버,생성자</li>
                                    
                                    </ul>
                                </div>
                            </div>

                            <div className=" w-auto h-auto bg-gray-800 border-2 border-white rounded-3xl p-4 m-4 text-white flex flex-col sm:w-auto md:w-1/2 lg:w-1/2 lg:h-80 md:h-80 "  >
                                <h1 className="text-sm lg:text-base md:text-base text-lime-500 mt-2  sm:mt-6 mb-4 text-left">
                                    2. 자바스크립트                              
                                </h1>
                                <div className='flex flex-col md:flex-row justify-center md :items-start  items-center'>
                                    <Image src={SqlIcon} className="bg-white ml-2 w-auto h-28 sm:h-32 p-6 sm:p-4     " alt="SqlIcon Logo" />
                                    <ul className="md:ml-8 mt-5 md:mt-0 list-disc text-xs lg:text-base md:text-base text-white">
                                        <li>TCP/UDP, HTTP 통신</li>
                                        <li>스레드 사용법</li>
                                        <li>MySQL DBMS 설치 및 설정</li>
                                        <li>SQL 문법</li>
                                        <li>JDBC를 이용한 자바 기반 CRUD학습</li>
                                        <li>DataSource 적용</li>

                                    </ul>
                                </div>
                            </div>

                            
                        
                           
                        </div>

                        <div className='flex flex-col md:flex-row justify-between'>                      
                            <div className=" w-auto h-auto bg-gray-800 border-2 border-white rounded-3xl p-4 m-4 text-white flex flex-col sm:w-auto md:w-1/2 lg:w-1/2 lg:h-80 md:h-80 "  >
                                <h1 className="text-sm lg:text-base md:text-sm text-lime-500 mt-2  sm:mt-6   mb-4 text-left">
                                    3. 스프링 데이터
                                </h1>
                                <div className='flex flex-col md:flex-row justify-center md:items-start items-center'>
                                    <Image src={SpringIcon} className="bg-white ml-2 w-auto md:w-1/3 h-28 sm:h-32 p-6 sm:p-4 " alt="DeviconJava Logo" />
                                    <ul className="md:ml-8 mt-5 md:mt-0 list-disc text-xs lg:text-base md:text-base text-white">
                                        <li>클라우드 환경에서 ML모델 개발 실습</li>
                                        <li>Perceptron, Convolution, <br />
                                        Neural Network,<br/>
                                        Recurrent Neural Network
                                        </li>
                                        <li>Reinforcement learning<br/>
                                        Generative Adversarial Network</li>
                                      

                                    </ul>
                                </div>
                            </div>

                            <div className=" w-auto h-auto bg-gray-800 border-2 border-white rounded-3xl p-4 m-4 text-white flex flex-col sm:w-auto md:w-1/2 lg:w-1/2 lg:h-80 md:h-80 "  >
                                <h1 className="text-sm lg:text-base md:text-base text-lime-500 mt-2  sm:mt-6 mb-4 text-left">
                                    4. 스프링 시큐리티                                
                                </h1>
                                <div className='flex flex-col md:flex-row justify-center md :items-start  items-center'>
                                    <Image src={TensorflowIcon} className="bg-white ml-2 w-auto h-28 sm:h-32 p-6 sm:p-4     " alt="SqlIcon Logo" />
                                    <ul className="md:ml-8 mt-5 md:mt-0 list-disc text-xs lg:text-base md:text-base text-white">
                                        <li>TensorFlow server,<br/> TensorFlow Cluster 사용</li>
                                        <li>클라우드 기반 서비스 배포<br/> 및 유지보수</li>
                                        <li>Simulink Verification <br/> & Validation test</li>

                                    </ul>
                                </div>
                            </div>
                        
                            
                        </div>

                </div>

                    
            </div>       

            
            
        </div>
    </>
  )
}

export default Section5