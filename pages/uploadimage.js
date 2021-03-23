import useChangeMeta from 'components/common/hooks/useChangeMeta';
import MainLayout from 'components/MainLayout';
import UploadImage from 'components/UploadImage';


const uploadimage = () => {
    // useChangeMeta('Hotel')
    const content = (
        <div>
               <UploadImage />
        </div>
    ) 
    

    return(
        <div>
           <MainLayout content={content} />
           {/* {content} */}
        </div>
    )
}

export default uploadimage;