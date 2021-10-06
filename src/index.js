import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class GradeForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      course: "",
	  grade: "",
      items: []
    }
  }

  updateCourse(event) {
    this.setState({
      course: event.target.value
    });
  }
  
  updateGrade(event) {
    this.setState({
      grade: event.target.value
    });
  }

  handleClick() {
    var items = this.state.items;

    items.push({course: this.state.course, grade: this.state.grade});

    this.setState({
      items: items,
      course: "",
	  grade: ""
    });
  }

  handleItemChanged(i, event) {
    var items = this.state.items;
    items[i]  = event.target.value;

    this.setState({
      items: items
    });
  }

  handleItemDeleted(i) {
    var items = this.state.items;

    items.splice(i, 1);

    this.setState({
      items: items
    });
  }


  render() {
	  
    var context = this;

    const list =  this.state.items.map((items,i) =>{
              return (
                <tr key={i}>
                  <td>
				  {items[i].course}
				  </td>
				  <td>
				  {items[i].grade}
				  </td>
                  <td>
                    <button
                      onClick={context.handleItemDeleted.bind(context, i)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            });

	  
    return (
      <div>
        <hr/>
		<label>Course Name</label>
        <input
          type="text"
          value={this.state.course}
          onChange={this.updateCourse.bind(this)}
        />
		<br/>
		<label>Grade</label>
        <input
          type="number"
		  min="0"
		  max="100"
          value={this.state.grade}
          onChange={this.updateGrade.bind(this)}
        />
		<br/>
		<button
          onClick={this.handleClick.bind(this)}
        >
          Add Item
        </button>
		        <table className="">
          <thead>
            <tr>
              <th>
                Course Name
              </th>
              <th>
                Grade
              </th>
              <th>
                Option
              </th>
            </tr>
          </thead>
          <tbody>
		  {list}
          </tbody>
        </table>
      </div>
    );
  }
}
ReactDOM.render(
  <GradeForm />,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
