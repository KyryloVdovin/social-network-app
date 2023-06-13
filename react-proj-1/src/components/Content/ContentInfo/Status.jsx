import React from 'react';
import s from './ContentInfo.module.css';
import PreloaderComponent from '../../Preloader/preloader';

class ContentStatus extends React.Component {
    // if(!props.profile){
    //     return <PreloaderComponent/>
    // }
    state = {
        editMode: false,
        status: this.props.status
    }

    activeteEditMode = () => {
        this.setState(
            {
                editMode: true
            }
        );
    }

    deactiveteEditMode = () => {
        this.setState(
            {
                editMode: false
            }
        );

        this.props.updateStatusThunk(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            });
        }
        
        console.log("componentDidUpdate");
    }

    render() {
        console.log("render");
        return (
            <>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activeteEditMode}>{this.props.status || "------"}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactiveteEditMode} value={this.state.status} />
                    </div>
                }
            </>
        )
    }
}

export default ContentStatus;