import { arrow } from "../assets";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const generatePageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 3; // Number of pages to show on each side

    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    pages.push(1); // Always show first page

    if (currentPage > maxVisiblePages + 2) {
      pages.push("..."); // Add ellipsis if current page is far from start
    }

    // Generate range around current page
    const start = Math.max(2, currentPage - maxVisiblePages);
    const end = Math.min(totalPages - 1, currentPage + maxVisiblePages);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (currentPage < totalPages - maxVisiblePages - 1) {
      pages.push("..."); // Add ellipsis if current page is far from end
    }

    pages.push(totalPages); // Always show last page

    return pages;
  };
  return (
    <div className="flex justify-between items-center">
      <div className="max-sm:hidden">
        <p className="text-sm text-[#545F7D] flex items-center gap-[10px]">
          Showing{" "}
          <span className="flex gap-[18px] items-center bg-[#213F7D] bg-opacity-10 px-3 py-2 rounded-[4px] font-medium">
            {totalPages ? totalPages * 10 : 0}
            <span>
              <img src={arrow} className="w-[14px] h-[14px]" />
            </span>
          </span>{" "}
          out of {totalPages ? totalPages * 10 : 0}
        </p>
      </div>

      <div>
        <button
          className={`bg-[#213F7D] bg-opacity-10 p-[5px] rounded-[4px]`}
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          <img src={arrow} className="w-[14px] h-[14px] rotate-90" />
        </button>

        {generatePageNumbers().map((page, index) =>
          page === "..." ? (
            <span key={index}>...</span>
          ) : (
            <button
              key={index}
              className={`${
                currentPage !== page && "opacity-10"
              } text-base font-medium text-[#545F7D] px-5`}
              onClick={() => onPageChange(Number(page))}
              style={{ fontWeight: page === currentPage ? "bold" : "normal" }}
            >
              {page}
            </button>
          )
        )}
        <button
          className={`bg-[#213F7D] bg-opacity-10 p-[5px] rounded-[4px]`}
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
        >
          <img src={arrow} className="w-[14px] h-[14px] -rotate-90" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
