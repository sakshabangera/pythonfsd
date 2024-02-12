import './EmployeeName.css'
function EmployeeName(props){
    const month = props.dob.toLocaleString('en-US', { month: 'long' });
    const day = props.dob.toLocaleString('en-US', { day: '2-digit' });
    const year = props.dob.getFullYear();

    return(
        <div class="container">
            <div class="date">
                <div>{month}</div>
                <div>{year}</div>
                <div>{day}</div>
            </div>
            <div class="empname">{props.empname}</div>
            <div class="yoe">{props.yoe}</div>
        </div>
    )

}
export default EmployeeName
