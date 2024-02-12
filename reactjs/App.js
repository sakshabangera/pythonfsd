import logo from './logo.svg';
import './App.css';
import EmployeeName from './EmployeeName';

function App() {
  const emps=[
    {id:1,empname:'saksha',dob:new Date(2002,1,17),yoe:1},
    {id:2,empname:'taksha',dob:new Date(2000,4,21),yoe:3},
    {id:3,empname:'shashikala',dob:new Date(1971,4,6),yoe:20},
    {id:4,empname:'keshava',dob:new Date(1970,7,7),yoe:15}
]
  return (
    <div class="emp1">
      <div class="main"> 
      <EmployeeName empname={emps[0].empname} dob={emps[0].dob} yoe={emps[0].yoe}></EmployeeName>
      <EmployeeName empname={emps[1].empname} dob={emps[1].dob} yoe={emps[1].yoe}></EmployeeName>
      <EmployeeName empname={emps[2].empname} dob={emps[2].dob} yoe={emps[2].yoe}></EmployeeName>
      <EmployeeName empname={emps[3].empname} dob={emps[3].dob} yoe={emps[3].yoe}></EmployeeName>
      </div>
    </div>
  );
}

export default App;
