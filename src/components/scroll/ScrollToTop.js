import { useEffect, useState } from 'react';
import { BiArrowFromBottom } from 'react-icons/bi';
import { classNames } from '../../utils/classNames';

export const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        }
        else {
            setIsVisible(false)
        }
    }

    const ScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);
    
    return (
        <div className='fixed bottom-5 right-5'>
            <button type='button' onClick={ScrollToTop} className={classNames(
                isVisible ? 'opacity-100' : 'opacity-0', 'inline-flex items-center p-3 rounded-full shadow-sm text-white bg-sky-700 transition-opacity hover:bg-sky-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500'
            )}>
                <BiArrowFromBottom className='h-6 w-6' aria-hidden='true' />
            </button>
        </div>
    )
};