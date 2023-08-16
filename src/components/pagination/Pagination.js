import React, { useEffect, useState } from 'react';

const Pagination = ({ page, setPage, totalPages }) => {
	const pagesPerPage = 3;
	const renderVisiblepages = () => {
		let pages = [];

		for (let i = 0; i < totalPages; i++) {
			pages.push(i + 1);
		}
		const handleClick = (page) => {
			setPage(page);
		};

		const startIndex = page - 1;
		const endIndex = Math.min(startIndex + pagesPerPage, totalPages);

		const visiblePages = pages?.slice(startIndex, endIndex);
		return (
			<li>
				{visiblePages?.map((p) => (
					<span key={p} onClick={() => handleClick(p)}>
						{p}
					</span>
				))}
			</li>
		);
	};
	useEffect(() => {
		renderVisiblepages();
	}, [page]);

	return (
		<div className='pagination-wrapper'>
			<div className='pagination'>
				<a className={`back ${page === 1 ? 'disabled-link' : ''}`} onClick={() => setPage((prev) => prev - 1)}>
					back
				</a>
				<ul>{renderVisiblepages()}</ul>
				<a className={`next ${page === totalPages ? 'disabled-link' : ''}`} onClick={() => setPage((pre) => pre + 1)}>
					next
				</a>
			</div>
		</div>
	);
};

export default Pagination;
