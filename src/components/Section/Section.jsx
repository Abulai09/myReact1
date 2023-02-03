import MyPostContainer from './Mypost/MyPostContainer';
import Post from './Post/Post'
import s from './Section.module.css'
import UserProfileContainer from './UserProfile/UserProfileContainer';

const Section=(props) =>{   
    let newPost=[...props.state.ProfilePage.post].reverse().map(p =>  <Post message={p.message} num={p.num} name={p.name}/>)
    return(
        <div className={s.section}>
            <div className={s.posts}>
                <UserProfileContainer/>
                <MyPostContainer />
                <div className={s.post}>
                    {newPost}
                </div>
            </div>
        </div>
    )
}


export default Section