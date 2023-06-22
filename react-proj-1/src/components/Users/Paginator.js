import s from './users.module.css';
import { useState } from 'react';

const Paginator = ({ totalUsersCount, pageSize, onPageChanged, currentPage, portionSize = 10 }) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <>
            <div className={s.centerHor}>
                {portionNumber > 1 && <button onClick={() => { setPortionNumber(portionNumber - 1) }}>Prev</button>}

                {
                    pages.filter( p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map(page => {
                        // return <span key={page} onClick={() => onPageChanged(page)} className={cn({[s.selectedPage]:currentPage === page}, s.pageNumber)}>{page}</span>
                        return <span key={page} onClick={() => onPageChanged(page)} className={ currentPage === page ? s.selectedPag : "" + " " + `${s.pageNumber}`}>{page}</span>
                    })
                }

                { portionCount > portionNumber && <button onClick={() => { setPortionNumber(portionNumber + 1) }}>Next</button>}
            </div>
        </>
    );
}

export default Paginator;