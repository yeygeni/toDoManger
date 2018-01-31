import React,{Component} from 'react'
import {Button} from 'react-bootstrap'

export default class TaskAdd extends Component {
    create(event) {
        event.preventDefault();
        let text = this.refs.newTaskText.value;
        let priority = this.refs.newTaskPriority.value;
        if (text && priority) {
            this.props.createTask(text,priority);
            this.refs.newTaskText.value = '';
            this.refs.newTaskPriority.value ='';
        }
        else {
        	alert('Введите текст и выберите приоритет задания:)')
        }
    }
    
    render() {
        return (
            <form onSubmit={this.create.bind(this)}>
                <label>New Task:</label> 
                <div>
                <input className="form-control" type="text" ref="newTaskText"/> 
                	 <select  type="text" ref="newTaskPriority">
                        <option value="1">High</option>
                        <option value="2">Medium</option>
                        <option value="3">Low</option>
                    </select>	
                <Button bsStyle="success" type="submit">Add</Button>
            	</div>
            </form>
        );
    }
}
