import React, {FC} from 'react';

import style from "../ProductPrice/ProductPrice.module.css";

const ProductPrice:FC = () => {
    return (
        <div className={style.priceBlock}>
            <div>
                <span className={style.price}>1999</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="15" viewBox="0 0 11 15" fill="none">
                    <path d="M0 6.49988H10.9998M0 8.69984H10.9998M5.2163 2.332C5.59441 2.332 5.94389 2.3807 6.26471 2.47809C6.58554 2.58122 6.86053 2.72444 7.08969 2.90777C7.31886 3.09683 7.49646 3.32026 7.6225 3.57807C7.75426 3.83588 7.82015 4.12233 7.82015 4.43743C7.82015 4.80982 7.73135 5.12491 7.55375 5.38272C7.38188 5.64053 7.15271 5.86682 6.86626 6.06161C6.58554 6.2564 6.26185 6.42827 5.89519 6.57723C5.52853 6.73191 5.15614 6.8866 4.77802 7.04128C4.39991 7.20169 4.02752 7.37356 3.66086 7.55689C3.2942 7.74022 2.96765 7.96366 2.68119 8.22719C2.40047 8.49073 2.17131 8.8001 1.99371 9.1553C1.82184 9.51623 1.7359 9.95163 1.7359 10.4615C1.7359 11.0001 1.83902 11.4842 2.04527 11.9138C2.25152 12.3435 2.53797 12.7073 2.90463 13.0052C3.27701 13.3089 3.71529 13.538 4.21944 13.6927C4.72933 13.8531 5.28791 13.9333 5.89519 13.9333C6.26758 13.9333 6.73449 13.8961 7.29594 13.8216C7.85739 13.7529 8.45321 13.624 9.0834 13.4349L8.79981 11.9396L8.62794 11.8537C8.31285 11.9969 8.00634 12.1172 7.70843 12.2146C7.41052 12.312 7.1298 12.3893 6.86626 12.4466C6.60273 12.5039 6.35924 12.544 6.13581 12.5669C5.91238 12.5899 5.71759 12.6013 5.55145 12.6013C5.21343 12.6013 4.90693 12.5584 4.63193 12.4724C4.36267 12.3922 4.13064 12.2719 3.93585 12.1115C3.7468 11.9568 3.59784 11.7649 3.48899 11.5357C3.38587 11.3123 3.3343 11.0573 3.3343 10.7709C3.3343 10.387 3.42024 10.0605 3.59211 9.79122C3.76971 9.52196 4.00174 9.2842 4.28819 9.07796C4.58037 8.87171 4.90979 8.68838 5.27645 8.52797C5.64311 8.36755 6.0155 8.20714 6.39362 8.04673C6.77746 7.88631 7.15271 7.71444 7.51937 7.53111C7.88603 7.34778 8.21259 7.13294 8.49904 6.8866C8.79122 6.64598 9.02325 6.35952 9.19512 6.02724C9.37272 5.69495 9.46152 5.29678 9.46152 4.83273C9.46152 4.32285 9.3498 3.83588 9.12637 3.37183C8.90867 2.9135 8.5993 2.50674 8.19827 2.15154C7.80296 1.80207 7.32459 1.52134 6.76314 1.30937C6.20742 1.10312 5.59155 1 4.91552 1C4.62907 1 4.32829 1.02005 4.0132 1.06015C3.70383 1.10026 3.3916 1.15468 3.0765 1.22343C2.7614 1.29791 2.44917 1.38671 2.1398 1.48983C1.83616 1.59296 3.93585 1 1.99371 1.48983V2.90777L2.04527 3.37183C2.62963 3.03381 2.91036 2.81897 3.50618 2.62418C4.10773 2.4294 4.67777 2.332 5.2163 2.332Z" stroke="black" stroke-width="1.09998"/>
                </svg>
            </div>
            <div>
                <span className={style.price}><s>2500</s></span>
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="15" viewBox="0 0 11 15" fill="none">
                    <path d="M0 6.49988H10.9998M0 8.69984H10.9998M5.2163 2.332C5.59441 2.332 5.94389 2.3807 6.26471 2.47809C6.58554 2.58122 6.86053 2.72444 7.08969 2.90777C7.31886 3.09683 7.49646 3.32026 7.6225 3.57807C7.75426 3.83588 7.82015 4.12233 7.82015 4.43743C7.82015 4.80982 7.73135 5.12491 7.55375 5.38272C7.38188 5.64053 7.15271 5.86682 6.86626 6.06161C6.58554 6.2564 6.26185 6.42827 5.89519 6.57723C5.52853 6.73191 5.15614 6.8866 4.77802 7.04128C4.39991 7.20169 4.02752 7.37356 3.66086 7.55689C3.2942 7.74022 2.96765 7.96366 2.68119 8.22719C2.40047 8.49073 2.17131 8.8001 1.99371 9.1553C1.82184 9.51623 1.7359 9.95163 1.7359 10.4615C1.7359 11.0001 1.83902 11.4842 2.04527 11.9138C2.25152 12.3435 2.53797 12.7073 2.90463 13.0052C3.27701 13.3089 3.71529 13.538 4.21944 13.6927C4.72933 13.8531 5.28791 13.9333 5.89519 13.9333C6.26758 13.9333 6.73449 13.8961 7.29594 13.8216C7.85739 13.7529 8.45321 13.624 9.0834 13.4349L8.79981 11.9396L8.62794 11.8537C8.31285 11.9969 8.00634 12.1172 7.70843 12.2146C7.41052 12.312 7.1298 12.3893 6.86626 12.4466C6.60273 12.5039 6.35924 12.544 6.13581 12.5669C5.91238 12.5899 5.71759 12.6013 5.55145 12.6013C5.21343 12.6013 4.90693 12.5584 4.63193 12.4724C4.36267 12.3922 4.13064 12.2719 3.93585 12.1115C3.7468 11.9568 3.59784 11.7649 3.48899 11.5357C3.38587 11.3123 3.3343 11.0573 3.3343 10.7709C3.3343 10.387 3.42024 10.0605 3.59211 9.79122C3.76971 9.52196 4.00174 9.2842 4.28819 9.07796C4.58037 8.87171 4.90979 8.68838 5.27645 8.52797C5.64311 8.36755 6.0155 8.20714 6.39362 8.04673C6.77746 7.88631 7.15271 7.71444 7.51937 7.53111C7.88603 7.34778 8.21259 7.13294 8.49904 6.8866C8.79122 6.64598 9.02325 6.35952 9.19512 6.02724C9.37272 5.69495 9.46152 5.29678 9.46152 4.83273C9.46152 4.32285 9.3498 3.83588 9.12637 3.37183C8.90867 2.9135 8.5993 2.50674 8.19827 2.15154C7.80296 1.80207 7.32459 1.52134 6.76314 1.30937C6.20742 1.10312 5.59155 1 4.91552 1C4.62907 1 4.32829 1.02005 4.0132 1.06015C3.70383 1.10026 3.3916 1.15468 3.0765 1.22343C2.7614 1.29791 2.44917 1.38671 2.1398 1.48983C1.83616 1.59296 3.93585 1 1.99371 1.48983V2.90777L2.04527 3.37183C2.62963 3.03381 2.91036 2.81897 3.50618 2.62418C4.10773 2.4294 4.67777 2.332 5.2163 2.332Z" stroke="black" stroke-width="1.09998"/>
                </svg>
            </div>
        </div>
    );
};

export default ProductPrice;