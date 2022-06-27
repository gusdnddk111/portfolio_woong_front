import React from 'react';
import '../CSS/ContentProject.css';
import { Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const ProjectsContentBody = (props) => {
    
    return (
        <div className='ContentBodyContainer' ref={props.bodyRef}>
            <div className="ContentBodyOrderButtonContainer">
                <Button.Group style={{float:"right"}} basic size='small'>
                    <Button style={{width:"15px", height:"15px"}} icon='save' />
                    <Button style={{width:"15px", height:"15px"}} icon='save' />
                </Button.Group>
                <Button style={{float:"right"}} icon='sort numeric down' />
            </div>
            <span>asdfsdfsdfsdfsdfsdfsdf</span><br/>
            <span>asdfsdfsdfsdfsdfsdfsdf</span><br/>
            <span>asdfsdfsdfsdfsdfsdfsdf</span><br/>
            <span>asdfsdfsdfsdfsdfsdfsdf</span><br/>
            <span>asdfsdfsdfsdfsdfsdfsdf</span><br/>
            <span>assssssssssssssssssssssssssss</span>
        </div>
    );
}

// sort numeric down
// sort numeric up
// sort alphabet down
// sort alphabet up

export default ProjectsContentBody;