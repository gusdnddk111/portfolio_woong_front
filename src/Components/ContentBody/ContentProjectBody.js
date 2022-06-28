import React from 'react';
import '../../CSS/ContentProject.css';
import { Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { Grid, Segment, Icon } from 'semantic-ui-react'
import ContentProjectBodyTitle from './ContentProjectBodyTitle';
import ContentProjectBodyContent from './ContentProjectBodyContent';

const ProjectsContentBody = (props) => {
    const dropdown = props.dropdown;
    const data1 = [
        {title:"SK매직 차세대 프로젝트",
         subTitle:"(2021.12 ~ 현재)",
         developLanguage:"Java, JavaScript",
         developFramework: "React.js, Spring, myBatis, mysql"
        , tasks: [{role:"Application Developer", task1: "공통기능 모듈 개발", task2:"MSA간 보상트랜잭션 관리 모듈 개발 (Spring AOP)"},
                  {role:"Application Developer", task1: "Back-end 개발", task2:"렌탈계약변경 로직 개발 (Spring)"},
                  {role:"Application Developer", task1: "Back-end 개발", task2:"렌탈계약변경 배치 개발 (Spring Batch)"},
                  {role:"Application Developer", task1: "Front-end 개발", task2:"렌탈계약관리 화면 개발 (React.js)"},
                  {role:"Application Developer", task1: "Front-end 개발", task2:"개인수집동의관리 화면 개발 (React.js)"},
                ]
        }
    ];

    return (<>
        {dropdown && (
            <div className="ContentBodyContainer" ref={props.bodyRef}>
                <Grid>
                    <Grid.Column>
                        <Segment raised>
                            
                            <ContentProjectBodyTitle ribbon={true} title="SK매직 차세대 프로젝트" subTitle="(2021.12 ~ 현재)"/>
                            <div className="ContentProjectBodySentenceContainer">
                                <ContentProjectBodyContent 
                                    depth="1" 
                                    iconName="chevron right" 
                                    content="개발 언어 및 활용 프레임워크 : Java, JavaScript / React.js, Spring, myBatis, mysql"
                                />
                                <ContentProjectBodyContent 
                                    depth="1" 
                                    iconName="chevron right" 
                                    content="수행 내용"
                                />
                                <ContentProjectBodyContent 
                                    depth="2" 
                                    style={{color:"rgb(33 139 247)"}}
                                    content="[ Application Developer ]"
                                />
                                <ContentProjectBodyContent 
                                    depth="3" 
                                    iconName="checkmark"
                                    content="공통기능 모듈 개발"
                                />
                                <ContentProjectBodyContent 
                                    depth="4" 
                                    content="· MSA간 보상트랜잭션 관리 모듈 개발 (Spring AOP)"
                                />
                                <ContentProjectBodyContent 
                                    depth="3" 
                                    iconName="checkmark"
                                    content="Back-end 개발"
                                />
                                <ContentProjectBodyContent 
                                    depth="4" 
                                    content="· 렌탈계약변경 로직 개발 (Spring)"
                                />
                                <ContentProjectBodyContent 
                                    depth="4" 
                                    content="· 렌탈계약변경 배치 개발 (Spring Batch)"
                                />
                                <ContentProjectBodyContent 
                                    depth="3" 
                                    iconName="checkmark"
                                    content="Front-end 개발"
                                />
                                <ContentProjectBodyContent 
                                    depth="4" 
                                    content="· 렌탈계약관리 화면 개발 (React.js)"
                                />
                                <ContentProjectBodyContent 
                                    depth="4" 
                                    content="· 개인수집동의관리 화면 개발 (React.js)"
                                />
                            </div>
                        </Segment>
                    </Grid.Column>
                </Grid>
            </div>
        )}
        </>
    );
}

/*
WITH LANGUAGE AS (
    SELECT A.PROJECT_ID
         , B.LANGUAGE_NAME
         , C.FRAMEWORK_NAME AS LIBRARY_NAME
      FROM PROJECT_TECHNIC_LANGUAGE A
INNER JOIN LANGUAGE_CODE B
        ON A.LANGUAGE_ID = B.LANGUAGE_ID
INNER JOIN DB_AND_FRAMEWORK_CODE C
        ON A.LIBRARY_ID = C.FRAMEWORK_ID
), FRAMEWORK AS(
    SELECT A.PROJECT_ID
         , B.FRAMEWORK_NAME
         , C.FRAMEWORK_NAME AS SUBFRAMEWORK_NAME
      FROM PROJECT_TECHNIC_FRAMEWORK A
INNER JOIN DB_AND_FRAMEWORK_CODE B
        ON A.FRAMEWORK_ID = B.FRAMEWORK_ID
INNER JOIN DB_AND_FRAMEWORK_CODE C
        ON A.SUBFRAMEWORK_ID = C.FRAMEWORK_ID
)
         SELECT A.TITLE
              , CONCAT(A.FROM_DATE, ' ~ ', IFNULL(A.END_DATE, '현재'), IF(ISNULL(A.PERIOD,'',CONCAT(',',A.PERIOD,'개월')))) AS SUBTITLE
              , B.LANGUAGE_LIST AS DEVELOP_LANGUGAE
              , C.FRAMEWORK_LIST AS DEVELOP_FRAMEWORK
           FROM PROJECT_LIST A
LEFT OUTER JOIN (SELECT PROJECT_ID
                      , GROUP_CONCAT(LANGUAGE_NAME) AS LANGUAGE_LIST
                   FROM ( SELECT PROJECT_ID
                               , CONCAT(LANGUAGE_NAME,LANGUAGE_LIST) AS LANGUAGE_NAME
                            FROM ( SELECT PROJECT_ID
                                        , LANGUAGE_NAME
                                        , CONCAT('(', GROUP_CONCAT(LIBRARY_NAME), ')') AS LIBRARY_LIST
                                     FROM LANGUAGE 
                                 GROUP BY PROJECT_ID, LANGUAGE_NAME
                                 ) X
                        ) Y
                GROUP BY PROJECT_ID
                ) B
             ON A.PROJECT_ID = B.PROJECT_ID
LEFT OUTER JOIN (SELECT PROJECT_ID
                      , GROUP_CONCAT(FRAMEWORK_NAME) AS FRAMEWORK_LIST
                   FROM ( SELECT PROJECT_ID
                               , CONCAT(FRAMEWORK_NAME,SUBFRAMEWORK_LIST) AS FRAMEWORK_NAME
                            FROM ( SELECT PROJECT_ID
                                        , FRAMEWORK_NAME
                                        , CONCAT('(', GROUP_CONCAT(SUBFRAMEWORK_NAME), ')') AS SUBFRAMEWORK_LIST
                                     FROM FRAMEWORK 
                                 GROUP BY PROJECT_ID, SUBFRAMEWORK_NAME
                                 ) X
                        ) Y
                GROUP BY PROJECT_ID
                ) C
             ON A.PROJECT_ID = C.PROJECT_ID


*/




/*
TABLE : PROJECT_LIST

|   PROJECT_ID(PK)  |                     TITLE                     |  FROM_DATE  |    END_DATE   |     PERIOD       |
|        1          |                SK매직 차세대 프로젝트           |  202112     |               |                  |
|        2          |       농협은행 베스트뱅커 지표예측 시스템 구축   |   202104     |    202111    |        7         |
|        3          |    국민은행 인공지능 사기대출 탐지 시스템 구축   |   201911     |    202005    |        7         |
|        4          |       하나은행 신용대출 상품추천 시스템 구축     |   201811     |    201907    |        9         |
|        5          |           하나은행 챗봇 학습기반 구축           |   201811     |     201907   |        9         |
|        6          |  우리은행 AI-OCR을 활용한 신용장 심사 PoC 개발   |   201804     |    201806    |       3          |
*/

/*
TABLE : PROJECT_TECHNIC_LANGUAGE
|   SEQ(PK)   |   PROJECT_ID(FK)  |    LANGUAGE_ID(FK)   |   LIBRARY_ID(FK)   |
|      1      |        1          |           1          |                    |
|      2      |        1          |           2          |                    |
|      3      |        2          |           3          |         6          |
|      4      |        2          |           3          |         7          |
|      5      |        3          |           3          |         6          |
|      6      |        3          |           3          |         7          |
|      7      |        4          |           3          |         6          |
|      8      |        4          |           3          |         7          |
|      9      |        5          |           1          |                    |

TABLE : PROJECT_TECHNIC_FRAMEWORK
|   SEQ(PK)   |   PROJECT_ID(FK)  |   FRAMEWORK_ID(FK)   | SUBFRAMEWORK_ID(FK) |
|      1      |        1          |           2          |                     |
|      2      |        1          |           3          |                     |
|      3      |        1          |           5          |                     |
|      4      |        1          |           8          |                     |
|      5      |        2          |           1          |         9           |
|      6      |        2          |           1          |         10          |
|      7      |        2          |           1          |         11          |
|      8      |        3          |           1          |         9           |  
|      9      |        3          |           1          |         10          |
|      10     |        3          |           1          |         11          |
|      11     |        3          |           1          |         12          |
|      12     |        4          |           1          |         9           |
|      13     |        4          |           1          |         10          |
|      14     |        4          |           1          |         11          |
|      15     |        5          |           1          |         9           |
|      16     |        5          |           1          |         10          |
|      17     |        6          |           5          |                     |
*/

/*
TABLE : PROJECT_TASK
|    TASK_SEQ(PK)    |   PROJECT_ID(FK)  |    ROLE_ID(FK)   |                    TASK_1                    |                         TASK_2                             |           TECHNIC(FK)         |
|         1          |        1          |         1        |               공통기능 모듈 개발              |              MSA간 보상트랜잭션 관리 모듈 개발                |               13              |
|         2          |        1          |         1        |                Back-end 개발                 |                    렌탈계약변경 로직 개발                    |                2              |
|         3          |        1          |         1        |                Back-end 개발                 |                    렌탈계약변경 배치 개발                    |                3              |
|         4          |        1          |         1        |                Front-end 개발                |                    렌탈계약관리 화면 개발                    |                8              |
|         5          |        1          |         1        |                Front-end 개발                |                  개인수집동의관리 화면 개발                   |               8               |
|         6          |        2          |         2        |        데이터 마트 구축 및 데이터 수집         |                    분석 마트 테이블 정의                     |               10              |
|         7          |        2          |         2        |        데이터 마트 구축 및 데이터 수집         |                데이터 분산 / 병렬 전처리 수행                 |               6               |
|         8          |        2          |         2        |          ML 학습/예측 파이프라인 구축          |  데이터 수집, 전처리, 학습/예측, 분석결과 저장 파이프라인 구축  |               6               |
|         9          |        2          |         2        |          ML 학습/예측 파이프라인 구축          |  데이터 수집, 전처리, 학습/예측, 분석결과 저장 파이프라인 구축  |               9               |
|         10         |        2          |         2        |          ML 학습/예측 파이프라인 구축          |  데이터 수집, 전처리, 학습/예측, 분석결과 저장 파이프라인 구축  |               10              |
|         11         |        2          |         3        |                 데이터 탐색 분석              |        EDA(Exploratory Data Analysis)를 통한 변수 발굴       |               7               |
|         12         |        2          |         3        |                  예측모형 개발                |             수치형(점수) 시계열 데이터 예측 모형 개발          |               7               |
|         13         |        3          |         2        |        데이터 마트 구축 및 데이터 수집         |                    분석 마트 테이블 정의                     |               10              |
|         14         |        3          |         2        |        데이터 마트 구축 및 데이터 수집         |                데이터 분산 / 병렬 전처리 수행                 |               6               |
|         15         |        3          |         2        |          ML 학습/예측 파이프라인 구축          |  데이터 수집, 전처리, 학습/예측, 분석결과 저장 파이프라인 구축  |               6               |
|         16         |        3          |         2        |          ML 학습/예측 파이프라인 구축          |  데이터 수집, 전처리, 학습/예측, 분석결과 저장 파이프라인 구축  |               9               |
|         17         |        3          |         2        |          ML 학습/예측 파이프라인 구축          |  데이터 수집, 전처리, 학습/예측, 분석결과 저장 파이프라인 구축  |               10              |
|         18         |        3          |         3        |                 데이터 탐색 분석              |        EDA(Exploratory Data Analysis)를 통한 변수 발굴       |               7               |
|         19         |        3          |         3        |                 데이터 탐색 분석              |        Feature Selection 기법을 통한 변수 소거 기법 적용      |               7               |
|         20         |        3          |         3        |                  예측모형 개발                |                   사기/정상 대출 예측모형 개발                |               7               |
|         21         |        3          |         3        |                  예측모형 개발                |                     예측 확률에 대한 근거 도출                |               14              |
|         22         |        4          |         2        |        데이터 마트 구축 및 데이터 수집         |                    분석 마트 테이블 정의                     |               10              |
|         23         |        4          |         2        |        데이터 마트 구축 및 데이터 수집         |             레거시 RDB에서 하둡으로 ETL 작업 수행             |               12              |
|         24         |        4          |         2        |        데이터 마트 구축 및 데이터 수집         |                데이터 분산 / 병렬 전처리 수행                 |               6               |
|         25         |        4          |         2        |          ML 학습/예측 파이프라인 구축          |  데이터 수집, 전처리, 학습/예측, 분석결과 저장 파이프라인 구축  |               6               |
|         26         |        4          |         2        |          ML 학습/예측 파이프라인 구축          |  데이터 수집, 전처리, 학습/예측, 분석결과 저장 파이프라인 구축  |               9               |
|         27         |        4          |         2        |          ML 학습/예측 파이프라인 구축          |  데이터 수집, 전처리, 학습/예측, 분석결과 저장 파이프라인 구축  |               10              |
|         28         |        4          |         3        |                 데이터 탐색 분석              |        EDA(Exploratory Data Analysis)를 통한 변수 발굴       |               7               |
|         29         |        4          |         3        |                  예측모형 개발                |                  신용대출 가입 예측 모형 개발                 |               7               |
|         30         |        4          |         3        |                  예측모형 개발                |                   예측 확률에 대한 근거 도출                  |               15              |
|         31         |        5          |         2        |         데이터 마트 구축 및 데이터 수집        |                      분석 마트 테이블 정의                    |               10              |
|         32         |        5          |         2        |         데이터 마트 구축 및 데이터 수집        |                    데이터 전처리 및 마트 적재                 |               10              |
|         33         |        6          |         2        |         데이터 마트 구축 및 데이터 수집        |                     데이터 적재 프로그램 개발                 |                               |

*/

/*

TABLE : ROLE_CODE
|    ROLE_ID(PK)     |       ROLE_NAME       |
|         1          | Application Developer |
|         2          |      Data Enginner    |
|         3          |      Data Analyst     |

TABLE : LANGUAGE_CODE
|  LANGUAGE_ID(PK)  |   LANGUAGE_NAME   |
|         1         |        Java       |
|         2         |     JavaScript    |
|         3         |       Python      |

TABLE : DB_AND_FRAMEWORK_CODE
|  FRAMEWORK_ID(PK)  |  FRAMEWORK_NAME   |
|         1          |      Hadoop       |
|         2          |      Spring       |
|         3          |   Spring Batch    |
|         4          |      myBatis      |
|         5          |       mysql       |
|         6          |      pySpark      |
|         7          |   scikit-learn    |
|         8          |     React.js      |
|         9          |       Oozie       |
|         10         |        Hive       |
|         11         |       Spark       |
|         12         |       Sqoop       |
|         13         |     SpringAop     |
|         14         |        Shap       |
|         15         |        Lime       |
*/







/*
<div className='ContentBodyContainer' ref={props.bodyRef}>
            <div className="ContentBodyOrderButtonContainer">
                <Button style={{float:"right"}} icon='sort numeric down' />
                <Button.Group style={{float:"right"}} basic size='small'>
                    <Button icon='save' />
                    <Button icon='save' />
                </Button.Group>
            </div>
*/
// sort numeric down
// sort numeric up
// sort alphabet down
// sort alphabet up

/*
SK매직 차세대 프로젝트 (2021.12 ~ 현재)
    - 활용 언어 및 프레임워크 : Java, JavaScript / React.js, Spring, myBatis, mysql
    - 개발내용 :
        (application Developer)
            공통기능 모듈 개발
                => MSA간 보상트랜잭션 관리 모듈 개발(Spring AOP)
            Back-end 개발
                => 렌탈계약변경 로직 개발 (Spring)
                => 렌탈계약변경 배치 개발 (Spring Batch)
            Front-end 개발
                => 렌탈계약관리 화면 개발 (React.js)
                => 개인수집동의관리 화면 개발 (React.js)

농협은행 베스트뱅커 지표예측 시스템 구축 (2021.04 ~ 2021.11, 7개월)
    - 활용 언어 및 프레임워크 : Python (pySpark, scikit-learn) / Hadoop (Oozie, Hive)
    - 개발내용 :
        (Data Enginner)
            데이터 마트 구축 및 데이터 수집
                => 분석 마트 테이블 정의 (Hive)
                => 데이터 분산 / 병렬 전처리 수행 (pySpark)
            ML 학습/예측 파이프라인 구축
                => 데이터 수집, 전처리, 학습/예측, 분석결과 저장 파이프라인 구축(pySpark, Oozie, Hive)
        (Data Analysis)
            데이터 탐색 분석
                => EDA(Exploratory Data Analysis)를 통한 변수 발굴
            예측모형 개발
                => 수치형(점수) 시계열 데이터 예측 모형 개발 (scikit-learn)

국민은행 인공지능 사기대출 탐지 시스템 구축 (2019.11 ~ 2020.05, 7개월)
    - 활용 언어 및 프레임워크 : Python (pySpark, scikit-learn) / Hadoop (Oozie, Hive, Sqoop)
    - 개발내용 :
        (Data Enginner)
            데이터 마트 구축 및 데이터 수집
                => 분석 마트 테이블 정의 (Hive)
                => 레거시 RDB에서 하둡으로 ETL 작업 수행 (Sqoop)
                => 데이터 분산 / 병렬 전처리 수행 (pySpark)
            ML 학습/예측 파이프라인 구축
                => 데이터 수집, 전처리, 학습/예측, 분석결과 저장 파이프라인 구축(pySpark, Oozie, Hive)
        (Data Analysis)
            데이터 탐색 분석
                => EDA(Exploratory Data Analysis)를 통한 변수 발굴
                => Feature Selection 기법을 통한 변수 소거 기법 적용 (scikit-learn)
            예측모형 개발
                => 사기/정상 대출 예측모형 개발 (scikit-learn)
                => 예측 확률에 대한 근거 도출 (Shap)

하나은행 신용대출 상품추천 시스템 구축 (2018.11 ~ 2019.07, 9개월)
    - 활용 언어 및 프레임워크 : Python (pySpark, scikit-learn) / Hadoop (Oozie, Hive)
    - 개발내용 :
        (Data Enginner)
            데이터 마트 구축 및 데이터 수집
                => 분석 마트 테이블 정의 (Hive)
                => 레거시 RDB에서 하둡으로 ETL 작업 수행 (Sqoop)
                => 데이터 분산 / 병렬 전처리 수행 (pySpark)
            ML 학습/예측 파이프라인 구축
                => 데이터 수집, 전처리, 학습/예측, 분석결과 저장 파이프라인 구축(pySpark, Oozie, Hive)
        (Data Analysis)
            데이터 탐색 분석
                => EDA(Exploratory Data Analysis)를 통한 변수 발굴
            예측모형 개발
                => 신용대출 가입 예측 모형 개발 (scikit-learn)
                => 예측 확률에 대한 근거 도출 (Lime)

하나은행 챗봇 학습기반 구축 (2018.11 ~ 2019.07, 9개월)
    - 활용 언어 및 프레임워크 : Hadoop (Oozie, Hive)
    - 개발내용 :
        (Data Enginner)
            데이터 마트 구축 및 데이터 수집
                => 분석 마트 테이블 정의 (Hive)
                => 데이터 전처리 및 마트 적재 (Hive)

우리은행 AI-OCR을 활용한 신용장 심사 PoC 개발 (2018.04 ~ 2018.06, 3개월)
    - 활용 언어 및 프레임워크 : Java / mySql
    - 개발내용 :
        (Data Enginner)
            데이터 적재
                => 데이터 적재 프로그램 개발
*/

export default ProjectsContentBody;