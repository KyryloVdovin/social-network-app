import { NavLink } from 'react-router-dom';
import s from './users.module.css';
import { useState } from 'react';

const Paginator = ({ totalUsersCount, pageSize, onPageChanged, currentPage, portionSize = 10 }) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        // if (pages.length < 30) {
        // }
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPaageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPaageNumber = portionNumber * portionSize;

    return (
        <>
            <div>
                {portionNumber > 1 && <button onClick={() => { setPortionNumber(portionNumber - 1) }}>Prev</button>}

                {
                    pages.filter( p => p >= leftPortionPaageNumber && p <= rightPortionPaageNumber).map(page => {
                        return <span onClick={(e) => onPageChanged(page)} className={currentPage === page && s.selectedPage && s.otherPages}>{page}</span>
                    })
                }

                { portionCount > portionNumber && <button onClick={() => { setPortionNumber(portionNumber + 1) }}>Next</button>}
            </div>
        </>
    );
}

export default Paginator;