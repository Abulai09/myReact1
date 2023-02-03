import { withRedirect } from '../HOC/withRedirect'
import s from './News.modules.css'

const News = (props) =>{

    return(
        <div className={s.News}>
            <h1>WWWWWWWW</h1>
        </div>
    )
}

const NewsContainer = withRedirect(News)

export default NewsContainer

