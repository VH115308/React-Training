import { useState } from "react";

const generateItems = () =>
  Array.from({ length: 100 }, (_, i) => ({
    col1: `Item ${i + 1} - Col1`,
    col2: `Item ${i + 1} - Col2`,
    col3: `Item ${i + 1} - Col3`,
    col4: `Item ${i + 1} - Col4`,
    col5: `Item ${i + 1} - Col5`,
    col6: `Item ${i + 1} - Col6`,
    col7: `Item ${i + 1} - Col7`,
    col8: `Item ${i + 1} - Col8`,
    col9: `Item ${i + 1} - Col9`,
    col10: `Item ${i + 1} - Col10`,
  }));

const PaginationTable = () => {
  const items = generateItems();
  const rowsPerPage = 10;
  const totalPages = Math.ceil(items.length / rowsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const start = (currentPage - 1) * rowsPerPage;
  const end = start + rowsPerPage;
  const pageItems = items.slice(start, end);

  const handleJump = (e) => {
    const val = parseInt(e.target.value, 10);
    if (val >= 1 && val <= totalPages) {
      setCurrentPage(val);
    }
  };

  return (
    <div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              {Array.from({ length: 10 }, (_, i) => (
                <th key={i}>Col{i + 1}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {pageItems.map((item, idx) => (
              <tr key={idx}>
                {Object.values(item).map((val, j) => (
                  <td key={j}>{val}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            disabled={currentPage === i + 1}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>

        <input
          type="number"
          min="1"
          max={totalPages}
          placeholder="Jump to page"
          onChange={handleJump}
        />
      </div>
    </div>
  );
};

export default PaginationTable;
