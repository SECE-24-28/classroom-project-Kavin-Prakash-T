const StudentCard = ({firstName,lastName,age}) => {

     return(
        <div className="shadow-lg p-4 rounded-md">
            FirstName:{firstName }<br />
            LastName:{lastName  }<br />
            FullName:{firstName  } {lastName }<br/>
            Age:{age}
        </div>
    )
}
export default StudentCard;