'use client'
import { Button, HStack } from '@chakra-ui/react';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
    const getPageNumbers = () => {
        const pageNumbers = [];
        const totalPagesToShow = Math.min(5, totalPages);

        let startPage = Math.max(1, currentPage - Math.floor(totalPagesToShow / 2));
        let endPage = Math.min(totalPages, startPage + totalPagesToShow - 1);

        if (endPage - startPage + 1 < totalPagesToShow) {
            startPage = Math.max(1, endPage - totalPagesToShow + 1);
        }

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(i);
        }

        return pageNumbers;
    };

    const pageNumbers = getPageNumbers();

    return (
        <HStack spacing={4} wrap="wrap" justify="center" mt={4}>
            <Button
                variant="dark"
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                Prev
            </Button>
            {pageNumbers.map((pageNumber) => (
                <Button
                    key={pageNumber}
                    p={2}
                    variant={pageNumber === currentPage ? 'solid' : 'dark'}
                    colorScheme={pageNumber === currentPage ? 'red' : 'gray'}
                    onClick={() => onPageChange(pageNumber)}
                >
                    {pageNumber}
                </Button>
            ))}
            <Button
                variant="dark"
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                Next
            </Button>
        </HStack>
    );
};

export default Pagination;
