import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Product from '../SlideProduct/Product';
import clsx from 'clsx'
import style from '../OutStadingProduct/outstadingproduct.module.scss'
import axios from 'axios';
import style1 from './pagination.css';

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
            currentItems.map((product, index) => (
                <div className={clsx(style.col_product, 'col-2')}>
                    <Product key={index} value={product} />
                </div>
            ))
    }
    </>
  );
}

function PaginatedItems({ itemsPerPage }) {
  const [itemOffset, setItemOffset] = useState(0);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    axios.get(`/api/products/paginate?page=0&limit=5`)
        .then((res) => {
            setCurrentItems(res.data)
        })
        .catch(error => {
            console.log('error paginate', error)
        })
        
    console.log("hello")
  }, [])

  const handlePageClick = (event) => {
    console.log(event.selected)
    let newOffset = event.selected;
    axios.get(`/api/products/paginate?page=${newOffset}&limit=${itemsPerPage}`)
        .then((res) => {
            setCurrentItems(res.data)
        })
        .catch(error => {
            console.log('error paginate', error)
        })
  };

  console.log(currentItems)

  useEffect(() => {
    axios.get(`/api/products/count`)
    .then((res) => {
        setPageCount(res.data.count)
    })
    .catch(error => {
        console.log('error paginate', error)
    })
  }, [itemsPerPage]);

  return (
    <>
      <Items currentItems={currentItems} />
        {/* <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
        /> */}
        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px' }}>
          <ReactPaginate
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={Math.ceil(pageCount)}
            previousLabel="< previous"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
          />
        </div>
        
      
    </>
  );
}

export default PaginatedItems;