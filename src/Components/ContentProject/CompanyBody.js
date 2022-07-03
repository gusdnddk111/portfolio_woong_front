import 'semantic-ui-css/semantic.min.css';
import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getState, actions } from '../../state/mainSlice';

import { Button } from 'semantic-ui-react';
import { Grid, Segment, Icon } from 'semantic-ui-react';

import '../../CSS/PortfolioProject.css';
import ProjectHeader from './ProjectHeader';
import ProjectBody from './ProjectBody';

const CompanyBody = (props) => {
    const projectInfo = props.projectInfo;
    const dropdown = props.dropdown;
    const [projectList, setProjectList] = useState([]);
    //let projectList=[];

    useEffect(() => {
        
        if(projectInfo.length>0){
            // 프로젝트별 타이틀
            const tempProjectList = [];

            projectInfo.map((project) => {
                const technicJson = JSON.parse(project.PROJECT_TECHNIC_LIST);
                let technicList = [];
                for(let key in technicJson){
                    technicList.push({main:key, sub:technicJson[key]?.split(',')})
                }
                // let technicList = JSON.parse(project.PROJECT_TECHNIC_LIST);
                // for(let key in technicList){
                //     technicList[key] = technicList[key].split(',');
                // }
                if(tempProjectList.filter((item)=>item.projectId===project.PROJECT_ID).length===0){
                    tempProjectList.push(
                        {projectId: project.PROJECT_ID
                        ,projectName: project.PROJECT_NAME
                        ,projectDate: project.PROJECT_DATE
                        ,period: project.PERIOD
                        ,githubAddress: project.GITHUB_ADDRESS
                        ,technicList: technicList
                        ,tasksByRole:{}
                        }
                    )
                }
            });
            
            // 프로젝트별 내용
            for(let elem of tempProjectList){
                const key = elem.projectId;
                const project = projectInfo.filter((project)=>project.PROJECT_ID===key);
                const roleList = new Set(project.map((project)=>project.ROLE_NAME_ENG));
                
                for(let role of roleList){
                    let taskList = []
                    project.filter((project)=>project.ROLE_NAME_ENG === role).map((project)=>{
                        taskList.push({taskName:project.TASK_DEPTH1, task:project.TASK_DEPTH2, technicList:project.TASK_TECHNIC_LIST?.split(',')})
                    });
                    elem.tasksByRole[role] = taskList;
                }
            }
            console.log(tempProjectList);
            setProjectList(tempProjectList);
        }
    }, [projectInfo])

    
    return (<>
        {dropdown && (
            <div className="CompanyBodyContainer" ref={props.bodyRef}>
                <Grid>
                    <Grid.Column>
                        <Segment raised>
                            {
                            projectList.map((project)=>{
                                const periodStr = project.period ? ', '+project.period+'개월' : '';
                                return (
                                        <>
                                            <ProjectHeader ribbon={true} githubAddress={project.githubAddress} title={project.projectName} subTitle={"(" + project.projectDate + periodStr + ")"}/>
                                            <ProjectBody tasks={project.tasksByRole} technicList={project.technicList}/>
                                        </>
                                );
                            })
                            }
                        </Segment>
                    </Grid.Column>
                </Grid>
            </div>
        )}
        </>
    );
}
// 
export default CompanyBody;

/*
#CREATE DATABASE PORTFOLIO;
USE PORTFOLIO;
DROP TABLE IF EXISTS TASK_TECHNIC;
DROP TABLE IF EXISTS PROJECT_TASK;
DROP TABLE IF EXISTS project_technic;
DROP TABLE IF EXISTS PROJECT_LIST;
DROP TABLE IF EXISTS COMPANY_LIST;
DROP TABLE IF EXISTS PERSON_LIST;
DROP TABLE IF EXISTS TECHNIC_CODE;
DROP TABLE IF EXISTS ROLE_CODE;

#############################################    ROLE_CODE     ##############################################

CREATE TABLE ROLE_CODE(  
    ROLE_ID INT NOT NULL AUTO_INCREMENT,  
    ROLE_NAME_ENG VARCHAR(200),
    ROLE_NAME_KOR VARCHAR(200),
    PRIMARY KEY ( ROLE_ID )
);

INSERT INTO role_code (ROLE_NAME_ENG, ROLE_NAME_KOR) 
     VALUES ('Application Developer','어플리케이션 개발자')
	       , ('Data Engineer','데이터 엔지니어')
			 , ('Data Analyst','데이터 분석가');

SELECT * FROM PORTFOLIO.ROLE_CODE;

#############################################################################################################


############################################    TECHNIC_CODE     ############################################
CREATE TABLE TECHNIC_CODE(  
    TECHNIC_ID INT NOT NULL AUTO_INCREMENT,  
    TECHNIC_NAME_ENG VARCHAR(200),
    TECHNIC_NAME_KOR VARCHAR(200),
    TECHNIC_DVS VARCHAR(50),
    TAG1 VARCHAR(50),
    TAG2 VARCHAR(50),
    PRIMARY KEY ( TECHNIC_ID )
);

INSERT INTO TECHNIC_CODE (TECHNIC_NAME_ENG, TECHNIC_NAME_KOR, TECHNIC_DVS, TAG1, TAG2) 
     VALUES ('Java','자바','LANGUAGE', 'BACKEND',null)
	       , ('Java Script','자바스크립트','LANGUAGE', 'FRONTEND',null)
			 , ('Python','파이썬','LANGUAGE','BACKEND',null)
			 , ('Spring boot','스프링부트','FRAMEWORK','BACKEND', 'Java')
			 , ('Spring Batch','스프링배치','FRAMEWORK','BACKEND', 'Java')
			 , ('Android','안드로이드','FRAMEWORK','FRONTEND','Java')
			 , ('myBatis','마이바티스','FRAMEWORK','BACKEND','Java')
			 , ('pySpark','파이스파크','FRAMEWORK','BACKEND','Python')
			 , ('React.js','리액트','FRAMEWORK','FRONTEND','Java Script')
			 , ('Oozie','우지','FRAMEWORK','BACKEND','Hadoop')
			 , ('Hive','하이브','FRAMEWORK','BACKEND','Hadoop')
			 , ('Spark','스파크','FRAMEWORK','BACKEND','Hadoop')
			 , ('Sqoop','스쿱','FRAMEWORK','BACKEND','Hadoop')
			 , ('Hadoop','하둡','DB','BACKEND',null)
			 , ('mySql','마이에스큐엘','DB','BACKEND',null)
			 , ('scikit-learn','싸이킷런','LIBRARY','BACKEND','Python')
			 , ('Tensorflow','텐서플로우','LIBRARY','BACKEND','Python')
			 , ('Shap','샤프','LIBRARY','BACKEND','Python')
			 , ('Lime','라임','LIBRARY','BACKEND','Python');


SELECT * FROM PORTFOLIO.TECHNIC_CODE;
#############################################################################################################


############################################    PERSON_LIST     #############################################

CREATE TABLE PERSON_LIST(  
    PERSON_ID INT NOT NULL AUTO_INCREMENT,  
    NAME_KOR VARCHAR(20),
    JOB VARCHAR(200),
    PHONE_NUMBER VARCHAR(20),
    EMAIL_ADDRESS VARCHAR(50),
    GITHUB_ADDRESS VARCHAR(200),
    PRIMARY KEY ( PERSON_ID )
);

INSERT INTO PERSON_LIST (NAME_KOR, JOB, PHONE_NUMBER, EMAIL_ADDRESS, GITHUB_ADDRESS) 
     VALUES ('조현웅','SK C&C 데이터 엔지니어', '010-3549-9453', 'gusdnddk111@gmail.com', 'https://github.com/gusdnddk111');

SELECT * FROM PORTFOLIO.PERSON_LIST;

#############################################################################################################


############################################    COMPANY_LIST     ############################################

CREATE TABLE COMPANY_LIST(
    COMPANY_ID INT NOT NULL AUTO_INCREMENT,  
    PERSON_ID INT NOT NULL,
    COMPANY_NAME VARCHAR(200) NOT NULL,
    FROM_DATE VARCHAR(10) NOT NULL,
    END_DATE VARCHAR(10),
    PRIMARY KEY ( COMPANY_ID ),
    FOREIGN KEY ( PERSON_ID ) REFERENCES PERSON_LIST(PERSON_ID)
);

INSERT INTO COMPANY_LIST (PERSON_ID, COMPANY_NAME, FROM_DATE, END_DATE) 
     VALUES (1, '아주대학교', '201203', '201802')
	       , (1, 'SK C&C', '201801', null);
	       
SELECT * FROM PORTFOLIO.COMPANY_LIST;

#############################################################################################################
	       
	       
############################################    PROJECT_LIST     ############################################
CREATE TABLE PROJECT_LIST(
    PROJECT_ID INT NOT NULL AUTO_INCREMENT,  
    COMPANY_ID INT NOT NULL,
    PROJECT_NAME VARCHAR(200) NOT NULL,
    FROM_DATE VARCHAR(10) NOT NULL,
    END_DATE VARCHAR(10),
    PERIOD INT,
    GITHUB_ADDRESS VARCHAR(200),
    PRIMARY KEY ( PROJECT_ID ),
    FOREIGN KEY ( COMPANY_ID ) REFERENCES COMPANY_LIST(COMPANY_ID)
);

INSERT INTO PROJECT_LIST (COMPANY_ID, PROJECT_NAME, FROM_DATE, END_DATE, PERIOD, GITHUB_ADDRESS) 
     VALUES (2, '우리은행 AI-OCR을 활용한 신용장 심사 PoC 개발', '201804', '201806', 3, null)
	       , (2, '하나은행 챗봇 학습기반 구축', '201811', '201907', 9, null)
	       , (2, '하나은행 신용대출 상품추천 시스템 구축', '201811', '201907', 9, null)
	       , (2, '국민은행 인공지능 사기대출 탐지 시스템 구축', '201911', '202005', 7, null)
	       , (2, '농협은행 베스트뱅커 지표예측 시스템 구축', '202104', '202111', 8, null)
	       , (2, 'SK매직 차세대 프로젝트', '202112', NULL, NULL, null);

SELECT * FROM PROJECT_LIST;
#############################################################################################################


##########################################    PROJECT_TECHNIC     ###########################################
CREATE TABLE PROJECT_TECHNIC(
    PROJECT_TECHNIC_SEQ INT NOT NULL AUTO_INCREMENT,  
    PROJECT_ID INT NOT NULL,
    TECHNIC_ID INT,
    PRIMARY KEY ( PROJECT_TECHNIC_SEQ ),
    FOREIGN KEY ( PROJECT_ID ) REFERENCES PROJECT_LIST(PROJECT_ID),
	 FOREIGN KEY ( TECHNIC_ID ) REFERENCES TECHNIC_CODE(TECHNIC_ID)
);

INSERT INTO PROJECT_TECHNIC (PROJECT_ID, TECHNIC_ID) 
     VALUES (1,1), (1,15)															# 우리은행 AI-OCR => JAVA, MYSQL
          , (2,10), (2,11), (2,14)												# 하나은행 챗봇 => HADOOP, HIVE, OOZIE
          , (3,3), (3,8), (3,10), (3,11), (3,14), (3,16)					# 하나은행 신용대출 => Python ,pySpark, scikit-learn, Hadoop , Oozie, Hive
          , (4,3), (4,8), (4,10), (4,11), (4,13), (4,14), (4,16)		# 국민은행 사기대출 => Python ,pySpark, scikit-learn, Hadoop , Oozie, Hive, Sqoop
          , (5,3), (5,8), (5,10), (5,11), (5,14), (5,16)					# 농협은행 베스트뱅커  => Python ,pySpark, scikit-learn, Hadoop , Oozie, Hive
          , (6,1), (6,2), (6,9), (6,4), (6,7), (6,15)						# SK 매직 차세대  => Java, JavaScript, React.js, Spring, myBatis, mysql
;        
          
SELECT * FROM PROJECT_TECHNIC;

    SELECT B.PROJECT_NAME
         , GROUP_CONCAT(C.TECHNIC_NAME_ENG)
      FROM PROJECT_TECHNIC A
INNER JOIN PROJECT_LIST B
        ON A.PROJECT_ID = B.PROJECT_ID
INNER JOIN TECHNIC_CODE C
        ON A.TECHNIC_ID = C.TECHNIC_ID  
  GROUP BY B.PROJECT_NAME
;
#############################################################################################################



###########################################    PROJECT_TASK     #############################################
CREATE TABLE PROJECT_TASK(
    PROJECT_TASK_SEQ INT NOT NULL AUTO_INCREMENT,  
    PROJECT_ID INT NOT NULL,
    ROLE_ID INT,
    TASK_DEPTH1 VARCHAR(1000),
    TASK_DEPTH2 VARCHAR(1000),
	 TASK_DEPTH3 VARCHAR(1000),
    PRIMARY KEY ( PROJECT_TASK_SEQ ),
    FOREIGN KEY ( PROJECT_ID ) REFERENCES PROJECT_LIST(PROJECT_ID),
	 FOREIGN KEY ( ROLE_ID ) REFERENCES ROLE_CODE(ROLE_ID)
);

INSERT INTO PROJECT_TASK (PROJECT_ID, ROLE_ID, TASK_DEPTH1, TASK_DEPTH2) 
     VALUES (1, 2, '데이터 마트 구축 및 데이터 수집', '데이터 적재 프로그램 개발')		    #  우리은행 aI-OCR => Data Enginner, Java
     
          , (2, 2, '데이터 마트 구축 및 데이터 수집', '분석 마트 테이블 정의')		      #  하나은행 챗봇 => Data Enginner, Hive
          , (2, 2, '데이터 마트 구축 및 데이터 수집', '데이터 전처리 및 마트 적재')       #  하나은행 챗봇 => Data Enginner, Hive
          
		  , (3, 2, '데이터 마트 구축 및 데이터 수집', '분석 마트 테이블 정의')		                                 #  하나은행 신용대출 => Data Enginner, Hive
          , (3, 2, '데이터 마트 구축 및 데이터 수집', '데이터 분산/병렬 전처리 수행')                                 #  하나은행 신용대출 => Data Enginner, pyspark
          , (3, 2, 'ML 학습/예측 파이프라인 구축', '데이터 수집, 전처리, 학습/예측, 분석결과 저장 파이프라인 구축')   #  하나은행 신용대출 => Data Enginner, pyspark			 
          , (3, 3, '데이터 탐색 분석', 'EDA(Exploratory Data Analysis)를 통한 변수 발굴')                            #  하나은행 신용대출 => Data Analyst, scikit-learn
          , (3, 3, '예측모형 개발', '신용대출 가입 예측 모형 개발')                                                  #  하나은행 신용대출 => Data Analyst, scikit-learn
          , (3, 3, '예측모형 개발', '예측 확률에 대한 근거 도출')                                                    #  하나은행 신용대출 => Data Analyst, Lime

			 , (4, 2, '데이터 마트 구축 및 데이터 수집', '분석 마트 테이블 정의')		                                 #  국민은행 사기대출 => Data Enginner, Hive
			 , (4, 2, '데이터 마트 구축 및 데이터 수집', '레거시 RDB에서 하둡으로 ETL 작업 수행')                       #  국민은행 사기대출 => Data Enginner, Sqoop
          , (4, 2, '데이터 마트 구축 및 데이터 수집', '데이터 분산/병렬 전처리 수행')                                 #  국민은행 사기대출 => Data Enginner, pyspark
          , (4, 2, 'ML 학습/예측 파이프라인 구축', '데이터 수집, 전처리, 학습/예측, 분석결과 저장 파이프라인 구축')   #  국민은행 사기대출 => Data Enginner, pyspark			 
          , (4, 3, '데이터 탐색 분석', 'EDA(Exploratory Data Analysis)를 통한 변수 발굴')                            #  국민은행 사기대출 => Data Analyst, scikit-learn
          , (4, 3, '데이터 탐색 분석', 'Feature Selection 기법을 통한 변수 소거 기법 적용')                          #  국민은행 사기대출 => Data Analyst, scikit-learn
          , (4, 3, '예측모형 개발', '사기/정상 대출 예측모형 개발')                                                  #  국민은행 사기대출 => Data Analyst, scikit-learn
          , (4, 3, '예측모형 개발', '예측 확률에 대한 근거 도출')                                                    #  국민은행 사기대출 => Data Analyst, shap

			 , (5, 2, '데이터 마트 구축 및 데이터 수집', '분석 마트 테이블 정의')		                                 #  농협은행 베스트뱅커 => Data Enginner, Hive
          , (5, 2, '데이터 마트 구축 및 데이터 수집', '데이터 분산/병렬 전처리 수행')                                 #  농협은행 베스트뱅커 => Data Enginner, pyspark
          , (5, 2, 'ML 학습/예측 파이프라인 구축', '데이터 수집, 전처리, 학습/예측, 분석결과 저장 파이프라인 구축')   #  농협은행 베스트뱅커 => Data Enginner, pyspark			 
          , (5, 3, '데이터 탐색 분석', 'EDA(Exploratory Data Analysis)를 통한 변수 발굴')                            #  농협은행 베스트뱅커 => Data Analyst, scikit-learn
          , (5, 3, '예측모형 개발', '수치형(점수) 시계열 데이터 예측 모형 개발')                                     #  농협은행 베스트뱅커 => Data Analyst, scikit-learn

          
          , (6, 1, '공통기능 모듈 개발','MSA간 보상트랜잭션 관리 모듈 개발')
          , (6, 1, 'Back-end 개발', '렌탈계약변경 로직 개발')
          , (6, 1, 'Back-end 개발', '렌탈계약변경 배치 개발')
          , (6, 1, 'Front-end 개발', '렌탈계약관리 화면 개발')
          , (6, 1, 'Front-end 개발', '개인수집동의관리 화면 개발')
;
          
SELECT * FROM PROJECT_TASK;


    SELECT A.PROJECT_TASK_SEQ
	      , B.PROJECT_NAME
         , D.ROLE_NAME_ENG
         , A.TASK_DEPTH1
         , A.TASK_DEPTH2
      FROM PROJECT_TASK A
INNER JOIN PROJECT_LIST B
        ON A.PROJECT_ID = B.PROJECT_ID
INNER JOIN ROLE_CODE D
        ON A.ROLE_ID = D.ROLE_ID  
  ORDER BY A.PROJECT_TASK_SEQ
;
#############################################################################################################



##########################################    TASK_TECHNIC     ###########################################
CREATE TABLE TASK_TECHNIC(
    TASK_TECHNIC_SEQ INT NOT NULL AUTO_INCREMENT,  
    PROJECT_TASK_SEQ INT NOT NULL,
    TECHNIC_ID INT,
    PRIMARY KEY ( TASK_TECHNIC_SEQ ),
    FOREIGN KEY ( PROJECT_TASK_SEQ ) REFERENCES PROJECT_TASK(PROJECT_TASK_SEQ),
	 FOREIGN KEY ( TECHNIC_ID ) REFERENCES TECHNIC_CODE(TECHNIC_ID)
);

INSERT INTO TASK_TECHNIC (PROJECT_TASK_SEQ, TECHNIC_ID) 
     VALUES (1,1)
          , (2,11)
          , (3,11)
          , (4,11)
          , (5,8)
          , (6,8)
          , (6,10)
          , (6,11)
          , (7,16)
          , (8,16)
          , (9,19)
          , (10,11)
          , (11,13)
          , (12,8)
          , (13,8)         
          , (14,16)          
          , (15,16)  
          , (16,16)  
          , (17,18)
			 , (18,11)
			 , (19,8)
			 , (20,8)
			 , (20,10)
			 , (20,11) 
			 , (21,16) 
			 , (22,16) 
			 , (23,4) 
			 , (24,4) 
			 , (25,5) 
			 , (26,9) 
			 , (27,9) 
;        
          
SELECT * FROM TASK_TECHNIC;

		    SELECT A.PROJECT_ID
			      , A.PROJECT_TASK_SEQ
			      , B.PROJECT_NAME
		         , D.ROLE_NAME_ENG
		         , A.TASK_DEPTH1
		         , A.TASK_DEPTH2
		         , GROUP_CONCAT(F.TECHNIC_NAME_ENG ORDER BY E.TASK_TECHNIC_SEQ)
		      FROM PROJECT_TASK A
		INNER JOIN PROJECT_LIST B
		        ON A.PROJECT_ID = B.PROJECT_ID
		INNER JOIN ROLE_CODE D
		        ON A.ROLE_ID = D.ROLE_ID  
 LEFT OUTER JOIN TASK_TECHNIC E
              ON A.PROJECT_TASK_SEQ = E.PROJECT_TASK_SEQ
      INNER JOIN TECHNIC_CODE F
		        ON E.TECHNIC_ID = F.TECHNIC_ID
		  GROUP BY A.PROJECT_ID
		         , A.PROJECT_TASK_SEQ
			      , B.PROJECT_NAME
		         , D.ROLE_NAME_ENG
		         , A.TASK_DEPTH1
		         , A.TASK_DEPTH2      
;
#############################################################################################################


          SELECT PERSON.PERSON_ID
			      , COMPANY.COMPANY_ID
			      , COMPANY.COMPANY_NAME
					, CONCAT(COMPANY.FROM_DATE, ' ~ ', IFNULL(COMPANY.END_DATE,'현재')) AS COMPANY_DATE 
					, PROJECT.PROJECT_ID
					, PROJECT.PROJECT_NAME
					, CONCAT(PROJECT.FROM_DATE, ' ~ ', IFNULL(PROJECT.END_DATE,'현재')) AS PROJECT_DATE 
					, PROJECT.PERIOD
					, PROJECT.PROJECT_TECHNIC_LIST
					, PROJECT.GITHUB_ADDRESS
					, TASK.ROLE_NAME_ENG
					, TASK.TASK_DEPTH1
					, TASK.TASK_DEPTH2
					, TASK.TASK_TECHNIC_LIST
		      FROM PERSON_LIST PERSON
 LEFT OUTER JOIN company_list COMPANY 
		        ON PERSON.PERSON_ID = COMPANY.PERSON_ID
 LEFT OUTER JOIN (         SELECT A.PROJECT_ID
 										  , A.PROJECT_NAME
 										  , A.FROM_DATE
 										  , A.END_DATE
 										  , A.PERIOD
 										  , A.GITHUB_ADDRESS
						              , A.COMPANY_ID
						              , JSON_OBJECTAGG(MAIN.TECHNIC_NAME_ENG, SUB.SUB_TECHNIC_LIST) AS PROJECT_TECHNIC_LIST
						           FROM project_list A
						     INNER JOIN PROJECT_TECHNIC B
						             ON A.PROJECT_ID = B.PROJECT_ID
						     INNER JOIN TECHNIC_CODE MAIN
						             ON B.TECHNIC_ID = MAIN.TECHNIC_ID
						            AND MAIN.TECHNIC_DVS IN ('LANGUAGE', 'DB')
						LEFT OUTER JOIN (         SELECT A.PROJECT_ID
						                         , SUB.TAG2
									                , GROUP_CONCAT(SUB.TECHNIC_NAME_ENG ORDER BY SUB.TECHNIC_ID) AS SUB_TECHNIC_LIST
									             FROM project_list A
									       INNER JOIN PROJECT_TECHNIC B
									               ON A.PROJECT_ID = B.PROJECT_ID
								          INNER JOIN TECHNIC_CODE SUB
								                  ON B.TECHNIC_ID = SUB.TECHNIC_ID
								                 AND SUB.TAG2 IS NOT NULL
							               GROUP BY A.PROJECT_ID
											          , SUB.TAG2 
						  			       ) SUB
						  			    ON A.PROJECT_ID = SUB.PROJECT_ID
						  			   AND MAIN.TECHNIC_NAME_ENG = SUB.TAG2
						   	 GROUP BY A.PROJECT_ID
						   	        , A.COMPANY_ID
						   	        , A.PROJECT_NAME
 										  , A.FROM_DATE
 										  , A.END_DATE
 										  , A.PERIOD
 										  , A.GITHUB_ADDRESS
 					  ) PROJECT
              ON COMPANY.COMPANY_ID = PROJECT.COMPANY_ID
 LEFT OUTER JOIN (          SELECT A.PROJECT_ID
									      , A.PROJECT_TASK_SEQ
									      , B.PROJECT_NAME
								         , D.ROLE_NAME_ENG
								         , A.TASK_DEPTH1
								         , A.TASK_DEPTH2
								         , GROUP_CONCAT(F.TECHNIC_NAME_ENG ORDER BY E.TASK_TECHNIC_SEQ) AS TASK_TECHNIC_LIST
								      FROM PROJECT_TASK A
								INNER JOIN PROJECT_LIST B
								        ON A.PROJECT_ID = B.PROJECT_ID
								INNER JOIN ROLE_CODE D
								        ON A.ROLE_ID = D.ROLE_ID  
						 LEFT OUTER JOIN TASK_TECHNIC E
						              ON A.PROJECT_TASK_SEQ = E.PROJECT_TASK_SEQ
						      INNER JOIN TECHNIC_CODE F
								        ON E.TECHNIC_ID = F.TECHNIC_ID
								  GROUP BY A.PROJECT_ID
								         , A.PROJECT_TASK_SEQ
									      , B.PROJECT_NAME
								         , D.ROLE_NAME_ENG
								         , A.TASK_DEPTH1
								         , A.TASK_DEPTH2     
                 ) TASK		         
		        ON PROJECT.PROJECT_ID = TASK.PROJECT_ID
           WHERE PERSON.PERSON_ID = 1
		  ORDER BY COMPANY.FROM_DATE DESC
	            , PROJECT.FROM_DATE DESC	         
               , PROJECT.PROJECT_ID DESC	
		         ;
*/







/*
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

