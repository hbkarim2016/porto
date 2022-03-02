// HOOKS
import { useSelector } from 'react-redux';
// ====================================
// COMPONTENTS
import Search from '../Header/Search';
import PhotoSingle from '../Home/Photos/PhotoSingle';
// ====================================

const OverPage = () => {
    
    const { overPageContent } = useSelector( state => state.overPage );

    return(
        <div className="OverPage">
            { overPageContent === 'search' ? <Search /> : overPageContent === 'photo' ? <PhotoSingle /> : '404 error not fount' }
        </div>
    )
}
export default OverPage;