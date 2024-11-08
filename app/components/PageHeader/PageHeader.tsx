import Image from 'next/image';
import ToastImage from '../../assets/toast.png';

function PageHeader({title}: {title: string}){
    return(
        <header className='flex items-end'>
            <h1 className='text-7xl font-semibold relative bottom-6 left-6'>{title}</h1>
            <Image src={ToastImage} width={200} height={300} alt='toast-image'/>
        </header>
    )
};

export default PageHeader;