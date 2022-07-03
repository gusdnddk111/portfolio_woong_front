import 'semantic-ui-css/semantic.min.css';
import React, { useState, useEffect } from 'react';
import { Label } from 'semantic-ui-react'

import '../../CSS/PortfolioProject.css';
import ProjectBodyContent from './ProjectBodyContent';

const ProjectBody = (props) => {
    const tasks = props.tasks;
    const technicList = props.technicList;
    console.log(tasks)

    const makeProjectBody = () => {
        let html = [];
        for(let role in tasks){
            html.push(<ProjectBodyContent 
                        depth="2" 
                        contentStyle={{color:"#2185d0"}}
                        content={"[ " + role + " ]"}
                    />);
            let taskNames = tasks[role].map((item)=>item.taskName)
            taskNames = taskNames.filter((item, idx)=> {return taskNames.indexOf(item)===idx})

            for(let taskName of taskNames){
                html.push(<ProjectBodyContent 
                            depth="2" 
                            content={"- " + taskName}
                        />);

                for(let task of tasks[role].filter((item)=>{return item.taskName === taskName})){
                    html.push(<ProjectBodyContent 
                                depth="4" 
                                content={"· " + task.task}
                                subContent={"(" + task.technicList.join(',') + ")"}
                            />);
                }
            }
        }

        return html;
    }

    

    return (
        <div className="ProjectBodyContainer">
            <ProjectBodyContent 
                depth="1" 
                iconName="checkmark" 
                content="개발 언어 및 활용 프레임워크"
            />
            <ProjectBodyContent
                depth="2"
                tags={technicList}
            />
            <div style={{height:"16px"}}/>
            <ProjectBodyContent 
                depth="1" 
                iconName="checkmark" 
                content="수행 내용"
            />
            {makeProjectBody()}
        </div>
    );
}

export default ProjectBody;

/*
            <div style={{height:"16px"}}/>
            <ProjectBodyContent 
                depth="1" 
                iconName="checkmark" 
                content="수행 내용"
            />
            <ProjectBodyContent 
                depth="2" 
                contentStyle={{color:"#2185d0"}}
                content="[ Application Developer ]"
            />
            <ProjectBodyContent 
                depth="2" 
                content="- 공통기능 모듈 개발"
            />
            <ProjectBodyContent 
                depth="4" 
                content="· MSA간 보상트랜잭션 관리 모듈 개발"
                subContent="(Spring AOP)"
            />
            <ProjectBodyContent 
                depth="2" 
                content="- Back-end 개발"
            />
            <ProjectBodyContent 
                depth="4" 
                content="· 렌탈계약변경 로직 개발"
                subContent="(Spring)"
            />
            <ProjectBodyContent 
                depth="4" 
                content="· 렌탈계약변경 배치 개발"
                subContent="(Spring Batch)"
            />
            <ProjectBodyContent 
                depth="2" 
                
                content="- Front-end 개발"
            />
            <ProjectBodyContent 
                depth="4" 
                content="· 렌탈계약관리 화면 개발"
                subContent="(React.js)"
            />
            <ProjectBodyContent 
                depth="4" 
                content="· 개인수집동의관리 화면 개발"
                subContent="(React.js)"
            />
*/