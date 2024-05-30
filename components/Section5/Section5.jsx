import React from 'react'
import Image from 'next/image'
import AwsLogo2 from "@/public/icons/aws-logo-2.png"
import DeviconJava from "@/public/icons/devicon_java.png"
import SqlIcon from "@/public/icons/sql-icon.png"
import SpringIcon from "@/public/icons/spring-icon.png"
import TensorflowIcon from "@/public/icons/tensorflow-icon.png"
import CssIcon from "@/public/icons/css-icon.png"
import JavascriptIcon from "@/public/icons/javascript-icon.png"
import ReactIcon from "@/public/icons/react-icon.png"
import Aws1Part3 from "@/public/icons/aws1p3-icon.png"
import Aws2Part3 from "@/public/icons/aws2p3-icon.png"
import Aws3Part3 from "@/public/icons/aws3p3-icon.png"
import Aws4Part3 from "@/public/icons/aws4p3-icon.png"





const Section5 = () => {
  return (
    <>  
    
        <div className="bg-white/[.18] font-normal   flex flex-col justify-center   " >
            {/* AWS Banner */}
            <div className='bg-[#F90] w-full h-auto sm:h-96   flex flex-col justify-center items-center'>
                <Image src={AwsLogo2} className="w-[145px] h-[89px] sm:w-40  sm:mb-[21px] mt-[103px] mb-8  " alt="AWS Logo" />
                <h1 className="text-4xl lg:text-6xl md:text-4xl text-white font-rokaf font-extrabold  md:mt-8 md:mb-[96px] mb-[96px] text-left">
                    AWS캠프 커리큘럼
                </h1>
            </div>

            {/* Part1 */}
            <div className='flex flex-col  justify-center items-center  '>
                <h1 className="text-text30heightnormal text-white font-appleB00  text-center   mt-[96px] mb-4 ">
                    ncamp(비트캠프 강남센터)의 <br />
                    30여년 노하우를 6개월에 담았습니다.
                </h1>

                <div className='flex flex-row    md:w-[623px] w-auto h-[70px] rounded-[500px] border-y  border-r-2 border-white mt-20 mb-4 font-appleB00 '>
                    <div className='bg-white w-fit sm:w-[135px] h-[70px] flex justify-center items-center rounded-[500px]   border-l-4 border-white  md:px-14 px-6  md:mr-[33px] mr-[10px]  z-10'>
                        <h2 className='text-black text-sm md:text-text22heightnormal whitespace-nowrap'>섹션1</h2>
                    </div>
                    <div className='flex items-center md:mr-[33px] mr-[12px]'>
                        <h2 className='text-white text-sm md:text-text22heightnormal whitespace-nowrap'>개발의 기초는 백엔드부터 : 백엔드 웹 프로그래밍</h2>
                    </div>
                </div>

                <div className="flex flex-col  mt-5">
                        <div className='flex flex-col md:flex-row justify-between'>
                            <div className="w-[353px]  h-auto bg-white/[.1]  border-white/[.1] rounded-3xl p-4 m-4 text-white flex flex-col  md:w-[353px]  md:h-[229px] "  >
                                <h1 className="text-sm md:text-lg text-[#82DC10] font-appleB00  mt-2  sm:mt-6   mb-4 md:ml-2 text-left">
                                        1. 자바 프로그래밍
                                </h1>
                                <div className='flex flex-col md:flex-row  md:items-start items-center'>
                                    <Image src={DeviconJava} className="bg-white rounded-xl ml-2 w-[103px] h-[103px] p-6 sm:p-4 " alt="DeviconJava Logo" />
                                    <ul className="md:ml-4 mt-5 md:mt-0 custom-list-disc text-textsmall135 text-white font-appleR00">
                                        <li>기초 자바 프로그램 입문(문법)</li>
                                        <li>객체지향 개념과 자바 프로그래밍</li>
                                        <li>JDK 유용한 클래스 살펴보기</li>
                                        <li>자바 프로그램 디버깅 / 예외처리</li>
                                        <li>자바와 자료 구조</li>
                                        <li>컬렉션 API 사용법</li>

                                    </ul>
                                </div>
                            </div>

                            <div className=" w-auto h-auto bg-white/[.1]  border-white/[.1] rounded-3xl p-4 m-4 text-white flex flex-col sm:w-auto md:w-[353px] md:h-[229px]  "  >
                                <h1 className="text-sm md:text-base text-[#82DC10] font-appleB00 mt-2  sm:mt-6 mb-4 text-left">
                                    2. 데이터베이스 및 네트워크, 스레드 프로그래밍                                
                                </h1>
                                <div className='flex flex-col md:flex-row justify-center items-center md:items-start '>
                                    <Image src={SqlIcon} className="bg-white rounded-xl  w-[103px] h-[103px] p-6 sm:p-4     " alt="SqlIcon Logo" />
                                    <ul className="md:ml-3 mt-5 md:mt-0 custom-list-disc text-textsmall13 text-white font-appleR00">
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
                            <div className=" w-auto h-auto bg-white/[.1]  border-white/[.1] border-white rounded-3xl p-4 m-4 text-white flex flex-col sm:w-auto md:w-[353px] md:h-[229px]  "  >
                                <h1 className="text-sm md:text-lg text-[#82DC10] font-appleB00 mt-2  sm:mt-6   mb-4 text-left">
                                    3. 스프링 부트, 프레임워크, 데이터
                                </h1>
                                <div className='flex flex-col md:flex-row  md:items-start items-center  '>
                                    <Image src={SpringIcon} className="bg-white rounded-xl ml-2 w-[104px] h-[103px] p-6 sm:p-4 " alt="DeviconJava Logo" />
                                    <ul className="md:ml-3 mt-5 md:mt-0 custom-list-disc text-textsmall13 text-white font-appleR00">
                                        <li>IoC 컨테이너 사용법</li>
                                        <li>뷰 템플릿 사용법 - Thymeleaf</li>
                                        <li>인터셉터, AOP 사용법 </li>
                                        <li>REST API 만들기  </li>
                                        <li>JPA 프로그래밍 학습</li>


                                    </ul>
                                </div>
                            </div>

                            <div className=" w-auto h-auto bg-white/[.1]  border-white/[.1] border-white rounded-3xl p-4 m-4 text-white flex flex-col sm:w-auto md:w-[353px] md:h-[229px]  "  >
                                <h1 className="text-sm md:text-lg text-[#82DC10] font-appleB00 mt-2  sm:mt-6 mb-4 text-left">
                                    4. 스프링 시큐리티                                
                                </h1>
                                <div className='flex flex-col md:flex-row  items-center md:items-start '>
                                    <Image src={TensorflowIcon} className="bg-white rounded-xl ml-2 w-[103px] h-[103px] p-6 sm:p-4     " alt="SqlIcon Logo" />
                                    <ul className="md:ml-3 mt-5 md:mt-0 custom-list-disc text-textsmall135 text-white font-appleR00">
                                        <li>스프링 시큐리티 전체구조</li>
                                        <li>인증 및 권한 다루기 </li>
                                        <li>JWT 토큰 다루기</li>

                                    </ul>
                                </div>
                            </div>
                        
                            
                        </div>

                </div>

                    
            </div>     
            

            {/* Part2 */}
            <div className='flex flex-col  justify-center items-center mt-10 '>
                <div className='flex flex-row    md:w-[623px] w-auto h-[70px] rounded-[500px] border-y  border-r-2 border-white mt-20 mb-4 font-appleB00 '>
                    <div className='bg-white w-fit sm:w-[135px] h-[70px] flex justify-center items-center rounded-[500px]   border-l-4 border-white  md:px-14 px-6  md:mr-[33px] mr-[10px]  z-10'>
                        <h2 className='text-black text-sm md:text-text22heightnormal whitespace-nowrap'>섹션2</h2>
                    </div>
                    <div className='flex items-center md:mr-[33px] mr-[12px]'>
                        <h2 className='text-white text-sm md:text-text22heightnormal whitespace-nowrap'>이제 꾸며볼까요? : 프론트 웹 프로그래밍</h2>
                    </div>
                </div>

                <div className="flex flex-col  mt-5">
                        <div className='flex flex-col md:flex-row justify-between items-center'>
                            <div className="w-[353px]  h-auto bg-white/[.1]  border-white/[.1] rounded-3xl p-4 m-4 text-white flex flex-col  md:w-[353px]  md:h-[239px] "  >

                                <h1 className="text-sm md:text-lg text-[#3AB9F0] font-appleB00 mt-2  sm:mt-6   mb-4 md:ml-2 text-left">
                                    1. CSS                                
                                </h1>
                                <div className='flex flex-col md:flex-row  items-center md:items-start '>
                                    <Image src={CssIcon} className="bg-white rounded-xl ml-2 w-[95px] h-[103px] p-6 sm:p-4 " alt="Aws1Part3 Logo" />
                                    <ul className="md:ml-3 mt-5 md:mt-0 custom-list-disc text-sm text-white font-appleR00 ">
                                        <li>CSS 스타일 작성 문법, 선택자</li>
                                        <li>CSS 뷰포트, 미디어 쿼리 / 레이아웃 </li>
                                        <li>부트스트랩(BootStrap) 사용법</li>
                                    
                                    </ul>
                                </div>
                            </div>

                            <div className="w-[353px]  h-auto bg-white/[.1]  border-white/[.1] rounded-3xl p-4 m-4 text-white flex flex-col  md:w-[353px]  md:h-[239px] "  >

                                <h1 className="text-sm md:text-lg text-[#3AB9F0] font-appleB00 mt-2  sm:mt-6 mb-4 text-left">
                                    2. 자바스크립트                                
                                </h1>
                                <div className='flex flex-col md:flex-row justify-center items-center md:items-start  '>
                                    <Image src={JavascriptIcon} className="bg-white rounded-xl  w-[100px] h-[103px] p-6 sm:p-4     " alt="Aws2Part3 Logo" />
                                    <ul className="md:ml-3 mt-5 md:mt-0 custom-list-disc text-textsmall12 text-white font-appleR00">
                                        <li>자바스크립트 기본 문법</li>
                                        <li>DOM API 및 이벤트 처리 </li>
                                        <li>비동기 프로그래밍 (제너레이터,<br />Promise, async/wait) </li>
                                        <li>AJAX 프로그래밍(XMLHttpRequest,<br />fetch(), JSON등) </li>
                                        <li>jQuery 프로그래밍 (객체 배열, <br />이벤트 처리 등)</li>
                                    </ul>
                                </div>
                            </div>

                            
                        
                           
                        </div>

                        <div className='flex flex-col md:flex-row justify-center items-center'>                      
                            <div className="w-[353px]  h-auto bg-white/[.1]  border-white/[.1] rounded-3xl p-4 m-4 text-white flex flex-col  md:w-[353px]  md:h-[229px] "  >
                                <h1 className="text-sm md:text-lg text-[#3AB9F0] font-appleB00 mt-2  sm:mt-6   mb-4 md:ml-2 text-left">
                                     3. 리액트 프로그래밍
                                </h1>
                                <div className='flex flex-col md:flex-row  md:items-start items-center'>
                                    <Image src={ReactIcon} className="bg-white rounded-xl ml-2 w-[104px] h-[103px] p-6 sm:p-4 " alt="Aws3Part3 Logo" />
                                    <ul className="md:ml-3 mt-5 md:mt-0 custom-list-disc text-sm text-white font-appleR00">
                                        <li>Node.js 사용법  </li>
                                        <li>리액트 소개, 개발환경 구성 </li>
                                        <li>리액트 라우터를 이용한  <br/>SPA 개발 </li>                                  

                                    </ul>
                                </div>
                            </div>

                            
                        </div>

                </div>

                    
            </div>    
            

            
            {/* Part3 */}
            <div className='flex flex-col  justify-center items-center mt-10 '>
                <div className='flex flex-row    md:w-[623px] w-auto h-[70px] rounded-[500px] border-y  border-r-2 border-white mt-20 mb-4 font-appleB00 '>
                    <div className='bg-white w-fit sm:w-[135px] h-[70px] flex justify-center items-center rounded-[500px]   border-l-4 border-white  md:px-14 px-6  md:mr-[33px] mr-[10px]  z-10'>
                        <h2 className='text-black text-sm md:text-text22heightnormal whitespace-nowrap'>섹션3</h2>
                    </div>
                    <div className='flex items-center md:mr-[33px] mr-[12px]'>
                        <h2 className='text-white text-sm md:text-text22heightnormal whitespace-nowrap'>AWS 제대로 활용하기 : AWS 기반 융합 프로젝트</h2>
                    </div>
                </div>

                <div className="flex flex-col  mt-5">
                        <div className='flex flex-col md:flex-row justify-between items-center'>
                            <div className="w-[353px]  h-auto bg-white/[.1]  border-white/[.1] rounded-3xl p-4 m-4 text-white flex flex-col  md:w-[353px]  md:h-[239px] "  >
                                <h1 className="text-sm md:text-lg text-[#F90] font-appleB00 mt-2  sm:mt-6   mb-4 md:ml-2 text-left">
                                    1. AWS 클라우드 활용                                
                                </h1>
                                <div className='flex flex-col md:flex-row  items-center md:items-start '>
                                    <Image src={Aws1Part3} className="bg-white rounded-xl ml-2 w-[104px] h-[103px] p-6 sm:p-4 " alt="Aws1Part3 Logo" />
                                    <ul className="md:ml-3 mt-5 md:mt-0 custom-list-disc text-sm  text-white font-appleR00">
                                        <li>AWS 기능 이해 및 서버 구축</li>
                                        <li>AWS 사용하기 - 클라우드 활용</li>
                                        <li>AWS 서비스 구축 및 배포</li>
                                    
                                    </ul>
                                </div>
                            </div>

                            <div className="w-[353px]  h-auto bg-white/[.1]  border-white/[.1] rounded-3xl p-4 m-4 text-white flex flex-col  md:w-[353px]  md:h-[239px] "  >
                                <h1 className="text-sm md:text-lg text-[#F90] font-appleB00 mt-2  sm:mt-6 mb-4  md:ml-2 text-left">
                                    2. AWS 기능 활용 및 프로젝트 배포
                                </h1>
                                <div className='flex flex-col md:flex-row  items-center md:items-start  '>
                                    <Image src={Aws2Part3} className="bg-white rounded-xl ml-2 w-[104px] h-[103px] p-6 sm:p-4  " alt="Aws2Part3 Logo" />
                                    <ul className="md:ml-3 mt-5 md:mt-0 custom-list-disc text-textsmall13 text-white font-appleR00">
                                        <li>프로그램으로 AWS의 기능 활용    </li>
                                        <li>파일 스토리지 실습            </li>
                                        <li>파일 제공 및 데이터 저장 실행     </li>
                                        <li>컴퓨팅 및 데이터베이스 설계 및 <br/>
                                        코드개발 프로젝트 단위 테스트 및 <br/>
                                        고도화 실행 </li>
                                        <li>배포 자동화, 모니터링 시스템 구축</li>
                                    </ul>
                                </div>
                            </div>

                            
                        
                           
                        </div>

                        <div className='flex flex-col md:flex-row justify-center items-center mb-[101px]'>                      
                            <div className="w-[353px]  h-auto bg-white/[.1]  border-white/[.1] rounded-3xl p-4 m-4 text-white flex flex-col  md:w-[353px]  md:h-[239px] "  >
                                <h1 className="text-sm md:text-lg text-[#F90] font-appleB00 mt-2  sm:mt-6  mb-4  md:ml-2">
                                    3. AWS 운영서버 및 다운 서버 환경 구성                                </h1>
                                <div className='flex flex-col md:flex-row justify-center md:items-start items-center'>
                                    <Image src={Aws3Part3} className="bg-white rounded-xl ml-2 w-[98px] h-[103px] p-6 sm:p-4 " alt="Aws3Part3 Logo" />
                                    <ul className="md:ml-3 mt-5 md:mt-0 custom-list-disc text-textsmall12space1dot2 text-white font-appleR00">
                                        <li>운영 서버 아키텍처 설계    </li>
                                        <li>AWS EC2를 이용한 서버 인스턴스  생성 및 관리<br/> 소스코드 배포       </li>
                                        <li>웹 서버와 웹 애플리케이션 서버 구성   </li>
                                        <li>AWS Auto Scaling 그룹을 이용한 다중서버 구성 <br/>
                                        AWS Elastic Load Balncing을 이용한 서버 <br/>
                                        트래픽 분산관리 </li>
                                        <li>장애 조치 아키텍처 구성 </li>                                  

                                    </ul>
                                </div>
                            </div>

                            <div className="w-[353px]  h-auto bg-white/[.1]  border-white/[.1] rounded-3xl p-4 m-4 text-white flex flex-col  md:w-[353px]  md:h-[239px] "  >
                                <h1 className="text-sm md:text-lg text-[#F90] font-appleB00 mt-2  sm:mt-6   mb-4 md:ml-2 text-left">
                                    4.AWS 운영 서버의 외부 환경 구성                               
                                 </h1>
                                <div className='flex flex-col md:flex-row  md:items-start items-center'>
                                    <Image src={Aws4Part3} className="bg-white rounded-xl ml-1 w-[104px] h-[103px] p-6 sm:p-4 " alt="Aws4Part3 Logo" />
                                    <ul className="md:ml-3 mt-5 md:mt-0 custom-list-disc text-textsmall13 text-white font-appleR00">
                                        <li>AWS Rout 53을 이용한 도메인 등록</li>
                                        <li>로드 밸런서에 도메인 등록</li>
                                        <li>HTTPS 동작 방식 실습 </li>
                                        <li>SSL/TLS인증서 설치 및 등록      </li>
                                        <li>AWS Certificate Manager를 통한 <br/>
                                        ssl/tls 인증서 등록      </li>                                    

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