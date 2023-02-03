import s from './Post.module.css'

const Post=(props) =>{
    return(
        <div className={s.Post}>
            <div className={s.Post_text}>
                <img className={s.Post_img} alt="ava" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5x5pCoZGTIyc7QOH_G1lP2twx5ZJA1188LUFnjp0nfS5NoKVW5j0q0re6hbIDhfdq3vo&usqp=CAU" />
                <div>
                    <span className={s.name}> {props.name}</span><br/>
                    <span className={s.Post_span}> {props.message}</span>
                </div>
            </div>
            <span className={s.span}>{props.num}likes</span>
        </div>
    )
}


export default Post