import ProfileStatus from './status'
import s from './UserP.module.css'

var a = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5x5pCoZGTIyc7QOH_G1lP2twx5ZJA1188LUFnjp0nfS5NoKVW5j0q0re6hbIDhfdq3vo&usqp=CAU"


const UserProfile=(props)=>{
    return(
        <div className={s.content}>
            <div className={s.img}>
                <img src={a} alt="Ava"/>
            </div>
            <div className={s.inform}>
                <h2>{props.userProfilee.fullName}</h2>
                {props.userProfilee.lookingForAJobDescription ? <h3>job:{props.userProfilee.lookingForAJobDescription}</h3> : null}
                <h3>about me:{props.userProfilee.aboutMe ? <span>{props.userProfilee.aboutMe}</span> : <span>Not specified</span>}</h3>
                <ProfileStatus updateStatusThunk={props.updateStatusThunk} status={props.status}/>
            </div>
        </div>
    )
}


export default UserProfile