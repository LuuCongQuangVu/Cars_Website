import React from 'react'
import {Pagination} from 'react-bootstrap'
export default function PaginationCus({ productsPerPage, totalProducts, paginate,currentPage }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i);
    }
    const prevHandler = ()=>{
        if(currentPage === 1){
            return
        }
        paginate(currentPage-1)
    }
    return (
        <div>
            <Pagination>
                <Pagination.First onClick={()=>paginate(1)} />
                <Pagination.Prev onClick={prevHandler}/>
                {pageNumbers.map(number => (
                    <Pagination.Item key={number} onClick={()=>paginate(number)} active={number===currentPage?true:false}>{number}</Pagination.Item>
                ))}
                <Pagination.Next />
                <Pagination.Last onClick={()=>paginate(pageNumbers.length)}/>
            </Pagination>
        </div>
    )
}
