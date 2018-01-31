import React,{Component} from 'react'
import Task from './Task'
import _ from 'lodash'
import {ButtonToolbar,Button,ListGroup} from 'react-bootstrap'
export default class TaskList extends Component {
    constructor() {
        super();
        
        this.state = {
            isDone: false,
            isUndone:false
        };
    }
    sortbyAlphabet(event){
         event.preventDefault();

        this.props.sortByAlphabet()
    }
    sortByPriority(event){
        event.preventDefault();
        this.props.sortByPriority()
    }
   
    render() {
        let sortTasks = [];
        let tasks = _.sortBy(this.props.tasks, 'done');
        console.log(this.state.isDone)
        for (let index in tasks) {
            if(this.state.isDone){
                if(tasks[index].done){
                    sortTasks.push(
                        <Task task={tasks[index]} key={tasks[index].id} toggle={this.props.toggle} delete = {this.props.delete}/>
                    );
                }
            }
            else if(this.state.isUndone){
                if(!tasks[index].done){
                    sortTasks.push(
                        <Task task={tasks[index]} key={tasks[index].id} toggle={this.props.toggle} delete = {this.props.delete}/>
                    );
                }
            }
            else{
                sortTasks.push(
                    <Task task={tasks[index]} key={tasks[index].id} toggle={this.props.toggle} delete = {this.props.delete}/>
                 );
            }
        }
        
        return (
            <div>
                <h1>Список дел</h1>
                <ButtonToolbar>
                    <Button onClick={this.sortbyAlphabet.bind(this)}>Sort by alphabet</Button>
                    <Button onClick={this.sortByPriority.bind(this)}>Sort by priority</Button>
                    <Button onClick={()=>{this.setState({isDone:true,isUndone:false})}}>Show only done</Button>
                    <Button onClick={()=>{this.setState({isDone:false,isUndone:true})}}>Show only undone</Button>
                    <Button onClick={()=>{this.setState({isDone:false,isUndone:false})}}>Show all</Button>
                </ButtonToolbar>
                <ListGroup >
                    {sortTasks.length !== 0 ? sortTasks : 'Пока дел нет'}
                </ListGroup>
            </div>
        );
    }
}
