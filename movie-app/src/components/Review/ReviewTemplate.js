import './ReviewTemplate.scss';

const ReviewTemplate = ({children}) => {
    return(
        <div className='ReviewList-Template'>
            <div className='ReviewList-title'>일정관리</div>
            <div className='ReviewList-ListTable'>{children}</div>
        </div>
    );
};

export default ReviewTemplate;
