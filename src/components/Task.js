import React,{Component} from 'react'
import {Button,ListGroupItem} from 'react-bootstrap'

export default class Task extends Component {
    done(event) {
        event.preventDefault();

        this.props.toggle(this.props.task);
    }
    delete(event) {
        event.preventDefault();
        this.props.delete(this.props.task);
    }
    render() {
        let task = this.props.task;
        if (task.done) {
            return (
                <ListGroupItem>
                    <del>{'Text:'+task.text+". Priority: " + this.getPriority(task.priority)}</del>
                    <Button bsStyle="success" onClick={this.done.bind(this)}>uncomplite</Button>
                    <Button bsStyle="danger" onClick={this.delete.bind(this)}>❌</Button>
                </ListGroupItem>
            );
        } else {
            return (
                <ListGroupItem >
                    {'Text: '+task.text+". Priority: " + this.getPriority(task.priority)}
                     <Button bsStyle="success"  onClick={this.done.bind(this)} >complite</Button>
                     <Button bsStyle="danger" onClick={this.delete.bind(this)}>❌</Button>

                </ListGroupItem>
            );
        }
    }
 getPriority(priority){
    console.log(priority)
    switch (priority) {
        case '1':
            return "Высокий"
        case '2':
            return "Нормальный"
        case '3':
            return "Низкий"    
        default:
            break;
    }
}
}
