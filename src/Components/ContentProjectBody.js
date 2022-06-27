import React from 'react';
import '../CSS/ContentProject.css';
import { Button } from 'semantic-ui-react';
//import 'semantic-ui-css/semantic.min.css';
import { Icon } from 'semantic-ui-react';


const ProjectsContentBody = (props) => {
    const dropdown = props.dropdown;

    return (<>
        {dropdown && (
        <div className='ContentBodyContainer' ref={props.bodyRef}>
            <div className="ContentBodyOrderButtonContainer">
                <Button style={{float:"right"}} icon='sort numeric down' />
                <Button.Group style={{float:"right"}} basic size='small'>
                    <Button icon='save' />
                    <Button icon='save' />
                </Button.Group>
            </div>
            <span>asdfsdfsdfsdfsdfsdfsdf</span><br/>
            <span>asdfsdfsdfsdfsdfsdfsdf</span><br/>
            <span>asdfsdfsdfsdfsdfsdfsdf</span><br/>
            <span>asdfsdfsdfsdfsdfsdfsdf</span><br/>
            <span>asdfsdfsdfsdfsdfsdfsdf</span><br/>
            <span>assssssssssssssssssssssssssss</span>
        </div>
        )}
        </>
    );
}

// sort numeric down
// sort numeric up
// sort alphabet down
// sort alphabet up

export default ProjectsContentBody;