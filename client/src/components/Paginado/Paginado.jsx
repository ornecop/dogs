import React from 'react';
import Styles from '../Paginado/Paginado.module.css'
import { useState } from "react";

export default function Paginado({dogsPerPage, allDogs, paginado}) {
    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(allDogs/dogsPerPage); i++) {
        pageNumbers.push(i)
    }

    const [currentPage, setCurrentPage] = useState(1);

    const nextPage = () => {
        if (currentPage < pageNumbers.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const getVisiblePages = () => {
        const totalPages = pageNumbers.length;
        const maxVisiblePages = 5;
        let startPage = currentPage - Math.floor(maxVisiblePages / 2);
        let endPage = currentPage + Math.floor(maxVisiblePages / 2);

        if (startPage < 1) {
            startPage = 1;
            endPage = maxVisiblePages;
        }

        if (endPage > totalPages) {
            endPage = totalPages;
            startPage = totalPages - maxVisiblePages + 1;
        }

        return pageNumbers.slice(startPage - 1, endPage);
    };

    const visiblePages = getVisiblePages();

    return (
        <nav>
            <ul className={Styles.paginado}>
                <li className={Styles.number}>
                    <button className={Styles.btnPaginado} onClick={prevPage}>{"<<"}</button>
                </li>
                {pageNumbers &&
  visiblePages.map((number) => (
    <li
      className={Styles.number}
      key={number}
      style={{
        display: visiblePages.includes(number) ? "inline-block" : "none",
      }}
    >
      <button
        className={`${Styles.btnPaginado} ${
          currentPage === number && number !== 1 ? Styles.active : ""
        }`}
        onClick={() => {
          setCurrentPage(number);
          paginado(number);
        }}
      >
        {number}
      </button>
    </li>
  ))}
                <li className={Styles.number}>
                    <button className={Styles.btnPaginado} onClick={nextPage}>{">>"}</button>
                </li>
            </ul>
        </nav>
    );
}

