import React,{Component} from 'react'
import TaskAdd from './TaskAdd'
import TaskList from './TaskList'
import _ from 'lodash'
export default class App extends Component {
	constructor() {
        super();
        
        this.state = {
            tasks: []
        };
    }
    
    createTask(text,priority) {
        this.state.tasks.push({
            text,
            priority,
            done: false,
            id:Math.random()
        });
        
        this.setState({tasks: this.state.tasks});
    }
    
    toggleTask(task) {
        let clickTask = _.find(this.state.tasks, task);
        clickTask.done = !clickTask.done;
        this.setState({tasks: this.state.tasks});
    }
    deleteTask(task){
        this.setState({tasks: this.state.tasks.filter(item=> item.id !== task.id)});
    }
    sortByAlphabet(){
    	console.log('Sortinnng')
    	let tasks = _.sortBy(this.state.tasks, 'text');
    	console.log(tasks)
		this.setState({tasks});
    }
     sortByPriority(){
    	console.log('Sortinnng by Priority')
    	let tasks = _.sortBy(this.state.tasks, 'priority');
    	console.log(tasks)
		this.setState({tasks});
    }
    render() {
        return (
            <div className='App'>
                <TaskAdd createTask={this.createTask.bind(this)} />
                <TaskList 
               	 	tasks={this.state.tasks} 
                	sortByAlphabet={this.sortByAlphabet.bind(this)} 
                	sortByPriority={this.sortByPriority.bind(this)}                 	
                	toggle={this.toggleTask.bind(this)} 
                	delete={this.deleteTask.bind(this)} />
            </div>
        );
    }
}