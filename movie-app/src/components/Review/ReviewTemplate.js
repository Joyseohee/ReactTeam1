import React from 'react';
import { Toaster } from 'react-hot-toast';
import './scss/ReviewTemplate.scss';
import AppContent from './AppContent';
import AppHeader from './AppHeader';
import PageTitle from './PageTitle';
import styles from './scss/app.module.scss';


const ReviewTemplate = () => {
    return(
        <>
        <div className='ReviewList-Template'>
        <PageTitle>작품 리뷰 & 평점</PageTitle>
        <div className={styles.app__wrapper}>
          <AppHeader />
          <AppContent />
        </div>
      </div>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            fontSize: '1.4rem',
          },
        }}
        />
     </>
    );
};

export default ReviewTemplate;
