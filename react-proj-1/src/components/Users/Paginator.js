import s from './paginator.module.css';
import { useState } from 'react';

const Paginator = ({ totalUsersCount, pageSize, onPageChanged, currentPage, portionSize = 10 }) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let currentPortion = Math.ceil(currentPage / portionSize);
    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(currentPortion);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <>
            <ul className={`${s.pagination} ${s.paginationModal}`}>
                {portionNumber > 1 ? <li onClick={() => { setPortionNumber(portionNumber - 1) }}>
                    <a className={s.prev}>
                        Previous
                    </a>
                </li> : <li>
                    <a className={`${s.prev} ${s.disabled}`}>
                        Previous
                    </a>
                </li>}
                {
                    pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                        .map(page => {
                            return <li key={page} onClick={() => onPageChanged(page)}
                                className={currentPage === page && s.selectedPage}>
                                <a>{page}</a>
                            </li>
                        })
                }

                {portionCount > portionNumber &&
                    <li onClick={() => { setPortionNumber(portionNumber + 1) }}><a className={s.next}> Next</a></li>}

            </ul>
        </>
    );
}

export default Paginator;